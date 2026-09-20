import { writeFileSync } from 'node:fs'
import { articles } from '../src/content/articles.ts'
import { projects } from '../src/content/projects.ts'
import { site } from '../src/content/site.ts'

const paths = [
  '/',
  ...projects.map(({ slug }) => `/proyek/${slug}`),
  ...(articles.length ? ['/artikel', ...articles.map(({ slug }) => `/artikel/${slug}`)] : []),
]

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${paths.map((path) => `  <url>\n    <loc>${new URL(path, site.url).href}</loc>\n  </url>`).join('\n')}
</urlset>
`

writeFileSync(new URL('../public/sitemap.xml', import.meta.url), sitemap)
console.log(`sitemap.xml: ${paths.length} URL`)

const escapeMd = (text) => text.replace(/[[\]]/g, '\\$&')

const publicPages = [
  `- [Beranda](${new URL('/', site.url).href})`,
  ...projects.map((p) => `- [${escapeMd(p.title)}](${new URL(`/proyek/${p.slug}`, site.url).href})`),
  ...(articles.length
    ? [
        `- [Artikel](${new URL('/artikel', site.url).href})`,
        ...articles.map((a) => `- [${escapeMd(a.title)}](${new URL(`/artikel/${a.slug}`, site.url).href})`),
      ]
    : []),
]

const llms = `# prasadev — Prasetyo Ari Wibowo

> ${site.summary}

## Halaman publik

${publicPages.join('\n')}
`

writeFileSync(new URL('../public/llms.txt', import.meta.url), llms)
console.log(`llms.txt: ${publicPages.length} link`)
