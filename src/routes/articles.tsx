import { ArrowUpRight, BookOpen } from 'lucide-react'
import { Link } from 'react-router'
import { PageMeta } from '@/components/page-meta'
import { Button } from '@/components/ui/button'
import { articles } from '@/content/articles'
import { site } from '@/content/site'

export default function Articles() {
  return (
    <>
      <PageMeta title={`Catatan Frontend & Desain | ${site.name}`} description="Kumpulan artikel contoh tentang React, arsitektur frontend, dan desain. Konten demo, bukan publikasi pribadi." />
      <section className="section-shell">
        <div className="site-container">
          <span className="tag mb-6 bg-neo-cyan text-black">Artikel</span>
          <h1 className="max-w-4xl font-display text-4xl leading-tight font-extrabold sm:text-5xl lg:text-6xl">Catatan Frontend &amp; Desain</h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">Ruang untuk membahas komponen, kode, dan pengalaman digital. Artikel di sini adalah konten contoh untuk mendemonstrasikan portofolio, bukan publikasi pribadi.</p>
          {articles.length > 0 ? (
            <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {articles.map((article) => (
                <article key={article.slug} className="flex min-w-0 flex-col border-2 border-border bg-card shadow-neo-cyan">
                  <div className="flex items-center justify-between gap-4 border-b-2 border-border bg-muted p-6">
                    <BookOpen className="size-8 text-neo-cyan" aria-hidden="true" />
                    {article.isDemo && <span className="tag bg-neo-yellow text-black">Artikel contoh</span>}
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <div className="mb-5 flex flex-wrap gap-2">{article.tags.map((tag) => <span key={tag} className="tag">{tag}</span>)}</div>
                    <h2 className="font-display text-2xl leading-snug font-bold"><Link className="underline-offset-4 hover:underline" to={`/artikel/${article.slug}`}>{article.title}</Link></h2>
                    <p className="mt-4 mb-8 leading-relaxed text-muted-foreground">{article.description}</p>
                    <Button asChild variant="outline" className="mt-auto w-full">
                      <Link to={`/artikel/${article.slug}`}>Baca artikel <ArrowUpRight aria-hidden="true" /><span className="sr-only">: {article.title}</span></Link>
                    </Button>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="mt-12 border-2 border-border bg-card p-8"><h2 className="font-display text-2xl font-bold">Belum ada artikel</h2><p className="mt-3 text-muted-foreground">Anda tetap dapat menjelajahi karya yang tersedia.</p><Button asChild variant="outline" className="mt-6"><Link to="/#portfolio">Lihat karya</Link></Button></div>
          )}
        </div>
      </section>
    </>
  )
}
