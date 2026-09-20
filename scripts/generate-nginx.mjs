import { createHash } from 'node:crypto'
import { existsSync, mkdirSync, readdirSync, readFileSync, writeFileSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

function getAllFiles(dir) {
  let results = []
  if (!existsSync(dir)) return results
  const entries = readdirSync(dir, { withFileTypes: true })
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      results = results.concat(getAllFiles(fullPath))
    } else {
      results.push(fullPath)
    }
  }
  return results
}

export function generateNginx(customBuildDir) {
  const buildDir = customBuildDir
    ? path.resolve(customBuildDir)
    : path.resolve(process.cwd(), 'build')
  const clientDir = path.join(buildDir, 'client')
  const nginxDir = path.join(buildDir, 'nginx')
  const publicDir = path.resolve(process.cwd(), 'public')

  if (!existsSync(clientDir)) {
    throw new Error(`Client directory does not exist: ${clientDir}`)
  }

  const allClientFiles = getAllFiles(clientDir)
  const htmlFiles = allClientFiles.filter((f) => f.endsWith('.html'))

  if (htmlFiles.length === 0) {
    throw new Error(`No HTML files found in client directory: ${clientDir}`)
  }

  const scriptHashes = new Set()

  for (const file of htmlFiles) {
    const content = readFileSync(file, 'utf8')

    // Check for unclosed script tags
    const openTags = (content.match(/<script\b/gi) || []).length
    const closeTags = (content.match(/<\/script>/gi) || []).length
    if (openTags !== closeTags) {
      throw new Error(`Malformed or unclosed script tag in ${file}`)
    }

    // Check for inline event handlers (e.g. onclick=, onload=)
    if (/\son[a-z]+=["']/i.test(content)) {
      throw new Error(`Inline event handler detected in ${file}`)
    }

    // Extract inline scripts
    const scriptRegex = /<script\b([^>]*)>([\s\S]*?)<\/script>/gi
    let match
    while ((match = scriptRegex.exec(content)) !== null) {
      const attrs = match[1]
      const body = match[2]

      // Ignore external scripts that have a src attribute
      if (/\bsrc\s*=/i.test(attrs)) continue

      const hash = createHash('sha256').update(body, 'utf8').digest('base64')
      scriptHashes.add(`'sha256-${hash}'`)
    }

    // Check for referenced assets in HTML and verify existence
    const assetRefRegex = /(?:href|src)=["'](\/assets\/[^"']+)["']/g
    let assetMatch
    while ((assetMatch = assetRefRegex.exec(content)) !== null) {
      const assetUrl = assetMatch[1].split('?')[0]
      const relPath = assetUrl.replace(/^\//, '')
      const diskPath = path.join(clientDir, relPath)
      if (!existsSync(diskPath)) {
        throw new Error(`Referenced asset does not exist on disk: ${assetUrl} in ${file}`)
      }
    }
  }

  const sortedHashes = Array.from(scriptHashes).sort()
  if (sortedHashes.length === 0) {
    throw new Error('Hash list is empty on application requiring bootstrap')
  }

  const csp = [
    "default-src 'self'",
    `script-src 'self' https://static.cloudflareinsights.com ${sortedHashes.join(' ')}`,
    "script-src-attr 'none'",
    "style-src 'self' 'unsafe-inline'",
    "img-src 'self' data: https://avatars.githubusercontent.com",
    "font-src 'self'",
    "media-src 'self'",
    "connect-src 'self' https://github-contributions-api.jogruber.de",
    "object-src 'none'",
    "base-uri 'none'",
    "frame-ancestors 'none'",
    "form-action 'none'",
  ].join('; ')
  // Collect files in public/ to exclude them from immutable hashing
  const publicFiles = new Set(
    getAllFiles(publicDir).map((f) =>
      path.relative(publicDir, f).split(path.sep).join('/'),
    ),
  )

  const assetsDir = path.join(clientDir, 'assets')
  const clientAssetFiles = getAllFiles(assetsDir)
  const hashedUris = []

  for (const assetPath of clientAssetFiles) {
    const relToClient = path.relative(clientDir, assetPath).split(path.sep).join('/')
    const relToPublic = path.relative(assetsDir, assetPath).split(path.sep).join('/')

    // Skip if file originates from public/assets or public/
    if (
      publicFiles.has(relToClient) ||
      publicFiles.has(relToPublic) ||
      publicFiles.has(`assets/${relToPublic}`)
    ) {
      continue
    }

    const basename = path.basename(assetPath)
    // Basename must match -[A-Za-z0-9_-]{8,}\.(?:js|css|woff2|webp|mp4|svg)$
    if (/-[A-Za-z0-9_-]{8,}\.(?:js|css|woff2|webp|mp4|svg)$/i.test(basename)) {
      hashedUris.push(`/${relToClient}`)
    }
  }

  hashedUris.sort()

  const hashedMapEntries = hashedUris
    .map((uri) => `    "${uri}" "public, max-age=31536000, immutable";`)
    .join('\n')

  const httpConf = `# ==============================================================================
# prasadev-http.conf — Konfigurasi HTTP context Nginx untuk https://prasadev.id
# Pasang file ini di dalam blok http { ... } pada /etc/nginx/nginx.conf atau
# include di /etc/nginx/conf.d/prasadev-http.conf
# ==============================================================================

map $uri $prasadev_resource_cache {
    default "no-cache";

    # Hashed build assets (immutable)
${hashedMapEntries}

    # Unversioned media, fonts, and static icons
    ~*\\.(?:ico|png|jpe?g|webp|svg|woff2?|mp4)$ "public, max-age=86400, must-revalidate";

    # Discovery & index manifests
    "/robots.txt" "public, max-age=3600, must-revalidate";
    "/sitemap.xml" "public, max-age=3600, must-revalidate";
    "/llms.txt" "public, max-age=3600, must-revalidate";
}

map $status $prasadev_cache_control {
    200 $prasadev_resource_cache;
    206 $prasadev_resource_cache;
    304 $prasadev_resource_cache;
    default "no-store";
}
`

  const serverConf = `# ==============================================================================
# prasadev-server.conf — Konfigurasi Virtual Host HTTPS untuk https://prasadev.id
# Pasang file ini di dalam blok server { ... } (vhost HTTPS port 443) prasadev.id.
# CATATAN PEMASANGAN:
# 1. Pastikan prasadev-http.conf sudah di-include di http { ... }.
# 2. GANTI aturan 'location /', 'error_page', dan 'add_header' existing agar tidak bentrok/duplikat.
# 3. Paket build/client HTML/assets dan kedua file snippet ini adalah SATU rilis atomik:
#    harus dipasang bersamaan agar hash CSP cocok dengan HTML yang disajikan.
# 4. Simpan paket rilis sebelumnya sebagai cadangan rollback cepat jika diperlukan.
# 5. JANGAN terapkan snippet ini ke vhost HTTP port 80 (redirect vhost).
# 6. Jalankan 'nginx -t' terlebih dahulu sebelum reload Nginx. Jika test gagal, jangan reload.
# 7. Jika CSP memblokir hydration atau analytics setelah rilis, lakukan rollback
#    paket build dan snippet bersamaan. JANGAN menambahkan 'unsafe-inline' ke script-src.
# ==============================================================================

expires off;

# Server-level security headers
add_header X-Content-Type-Options "nosniff" always;
add_header X-Frame-Options "DENY" always;
add_header Referrer-Policy "strict-origin-when-cross-origin" always;
add_header Cross-Origin-Opener-Policy "same-origin" always;
# Tahap 1: max-age=86400 (1 hari). Setelah 24 jam HTTPS stabil, ganti ke max-age=31536000
add_header Strict-Transport-Security "max-age=86400" always;
add_header Content-Security-Policy "${csp}" always;
add_header Content-Security-Policy-Report-Only "require-trusted-types-for 'script'" always;
add_header Cache-Control $prasadev_cache_control always;

index index.html;
error_page 404 /404/index.html;

# Routing
location = /404 {
    return 404;
}

location = /404/ {
    return 404;
}

location = /404/index.html {
    internal;
}

location = /llms.txt {
    default_type "text/plain; charset=utf-8";
    try_files $uri =404;
}

location = /robots.txt {
    try_files $uri =404;
}

location = /sitemap.xml {
    try_files $uri =404;
}

location / {
    try_files $uri $uri/ =404;
}
`

  mkdirSync(nginxDir, { recursive: true })
  writeFileSync(path.join(nginxDir, 'prasadev-http.conf'), httpConf, 'utf8')
  writeFileSync(path.join(nginxDir, 'prasadev-server.conf'), serverConf, 'utf8')

  return {
    hashes: sortedHashes,
    hashedUris,
    csp,
  }
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const result = generateNginx(process.argv[2])
  console.log(`Nginx config generated: ${result.hashes.length} script hashes, ${result.hashedUris.length} immutable assets`)
}
