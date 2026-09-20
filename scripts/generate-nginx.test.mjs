import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import fs from 'node:fs'
import os from 'node:os'
import path from 'node:path'
import { after, test } from 'node:test'
import { generateNginx } from './generate-nginx.mjs'

const tempDirs = []

function createTempBuildDir() {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'nginx-test-'))
  tempDirs.push(dir)
  return dir
}

after(() => {
  for (const dir of tempDirs) {
    fs.rmSync(dir, { recursive: true, force: true })
  }
})

test('missing HTML fails with error', () => {
  const buildDir = createTempBuildDir()
  const clientDir = path.join(buildDir, 'client')
  fs.mkdirSync(clientDir, { recursive: true })

  assert.throws(() => {
    generateNginx(buildDir)
  }, /No HTML files found in client directory/)
})

test('exact-hash whitespace sensitivity: does not normalize whitespace', () => {
  const buildDir = createTempBuildDir()
  const clientDir = path.join(buildDir, 'client')
  fs.mkdirSync(clientDir, { recursive: true })

  const scriptBody1 = 'console.log("hello");\n  const x = 1;'
  const scriptBody2 = 'console.log("hello"); const x = 1;' // different whitespace

  const html1 = `<!DOCTYPE html><html><head><script>${scriptBody1}</script></head><body></body></html>`
  fs.writeFileSync(path.join(clientDir, 'index.html'), html1, 'utf8')

  const res1 = generateNginx(buildDir)
  const expectedHash1 = `'sha256-${createHash('sha256').update(scriptBody1, 'utf8').digest('base64')}'`
  const unexpectedHash2 = `'sha256-${createHash('sha256').update(scriptBody2, 'utf8').digest('base64')}'`

  assert.ok(res1.hashes.includes(expectedHash1), 'Includes exact hash of original script whitespace')
  assert.ok(!res1.hashes.includes(unexpectedHash2), 'Does not include normalized whitespace hash')

  // Verify server.conf contains the exact hash
  const serverConf = fs.readFileSync(path.join(buildDir, 'nginx', 'prasadev-server.conf'), 'utf8')
  assert.ok(serverConf.includes(expectedHash1), 'server.conf contains exact hash')
})

test('hashed vs unhashed cache: excludes public files resembling hash from immutable', () => {
  const buildDir = createTempBuildDir()
  const clientDir = path.join(buildDir, 'client')
  const clientAssetsDir = path.join(clientDir, 'assets')
  fs.mkdirSync(clientAssetsDir, { recursive: true })

  // Valid HTML with inline script
  const html = '<!DOCTYPE html><html><head><script>console.log("test");</script></head><body></body></html>'
  fs.writeFileSync(path.join(clientDir, 'index.html'), html, 'utf8')

  // 1. Real content-hashed build asset
  const hashedFile = 'chunk-abcdef12.js'
  fs.writeFileSync(path.join(clientAssetsDir, hashedFile), 'console.log(1);', 'utf8')

  // 2. Unhashed asset resembling hash but existing in public/
  const publicDir = path.resolve(process.cwd(), 'public')

  // Copy sample to assets with a fake hash name that also exists in public
  const fakeHashInPublic = 'fakehash-12345678.svg'
  const publicFakePath = path.join(publicDir, fakeHashInPublic)
  fs.writeFileSync(publicFakePath, '<svg></svg>', 'utf8')
  fs.writeFileSync(path.join(clientAssetsDir, fakeHashInPublic), '<svg></svg>', 'utf8')

  try {
    const res = generateNginx(buildDir)
    assert.ok(
      res.hashedUris.includes('/assets/chunk-abcdef12.js'),
      'Hashed build asset is classified as immutable',
    )
    assert.ok(
      !res.hashedUris.includes(`/assets/${fakeHashInPublic}`),
      'Asset originating in public is excluded from immutable even if name resembles hash',
    )

    const httpConf = fs.readFileSync(path.join(buildDir, 'nginx', 'prasadev-http.conf'), 'utf8')
    assert.ok(
      httpConf.includes('"/assets/chunk-abcdef12.js" "public, max-age=31536000, immutable";'),
      'prasadev-http.conf maps hashed asset to immutable',
    )
    assert.ok(
      !httpConf.includes(`/assets/${fakeHashInPublic}" "public, max-age=31536000, immutable"`),
      'prasadev-http.conf does NOT map public file to immutable',
    )
  } finally {
    fs.rmSync(publicFakePath, { force: true })
  }
})
