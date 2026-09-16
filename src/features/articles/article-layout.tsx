import type { ReactNode } from 'react'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router'
import { PageMeta } from '@/components/page-meta'
import { Button } from '@/components/ui/button'
import type { Article } from '@/content/articles'
import { site } from '@/content/site'

export function ArticleLayout({ article, children }: { article: Article; children: ReactNode }) {
  return (
    <>
      <PageMeta title={`${article.title} | ${site.brand}`} description={article.description} />
      <article className="section-shell">
        <div className="site-container">
          <nav aria-label="Breadcrumb" className="mb-10 font-mono text-xs text-muted-foreground">
            <ol className="flex flex-wrap items-center gap-2">
              <li><Link className="underline underline-offset-4" to="/">Beranda</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link className="underline underline-offset-4" to="/artikel">Artikel</Link></li>
              <li aria-hidden="true">/</li>
              <li className="min-w-0 break-words text-foreground" aria-current="page">{article.title}</li>
            </ol>
          </nav>
          <header className="max-w-4xl">
            <h1 className="break-words font-display text-4xl leading-tight font-extrabold sm:text-5xl lg:text-6xl">{article.title}</h1>
            <p className="mt-6 max-w-[72ch] text-lg leading-relaxed text-muted-foreground">{article.description}</p>
            <div className="mt-6 flex flex-wrap gap-2">{article.tags.map((tag) => <span key={tag} className="tag">{tag}</span>)}</div>
          </header>
          <div className="mt-12 border-t-2 border-border pt-10">
            <div className="article-prose min-w-0 max-w-[72ch]">{children}</div>
          </div>
          <footer className="mt-12 max-w-[72ch] space-y-10">
            <Button asChild variant="outline"><Link to="/artikel"><ArrowLeft aria-hidden="true" /> Kembali ke artikel</Link></Button>
            <div className="border-2 border-border bg-card p-6 shadow-neo-cyan sm:p-8">
              <h2 className="font-display text-2xl font-bold">Mari diskusikan proyek Anda.</h2>
              <p className="mt-3 mb-6 leading-relaxed text-muted-foreground">Ceritakan kebutuhan aplikasi atau peluang kerja yang ingin Anda diskusikan.</p>
              <Button asChild className="h-auto whitespace-normal py-3"><Link to="/#contact">Lihat kanal kontak <ArrowUpRight aria-hidden="true" /></Link></Button>
            </div>
          </footer>
        </div>
      </article>
    </>
  )
}
