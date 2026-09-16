import { ArrowLeft, BookOpen } from 'lucide-react'
import { Link } from 'react-router'
import { PageMeta } from '@/components/page-meta'
import { Button } from '@/components/ui/button'
import { site } from '@/content/site'

export default function NotFound() {
  return (
    <>
      <PageMeta title={`Halaman tidak ditemukan | ${site.name}`} description="Halaman yang Anda cari tidak tersedia. Kembali ke beranda atau jelajahi artikel portofolio." />
      <section className="section-shell">
        <div className="site-container">
          <div className="max-w-3xl border-2 border-border bg-card p-6 shadow-neo sm:p-10">
            <p className="mb-6 font-mono text-6xl font-bold text-neo-yellow sm:text-8xl">404</p>
            <h1 className="font-display text-3xl leading-tight font-extrabold sm:text-5xl">Halaman tidak ditemukan</h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">Alamat ini tidak tersedia. Gunakan tautan berikut untuk kembali ke beranda atau membaca artikel.</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button asChild><Link to="/"><ArrowLeft aria-hidden="true" /> Ke beranda</Link></Button>
              <Button asChild variant="outline"><Link to="/artikel"><BookOpen aria-hidden="true" /> Lihat artikel</Link></Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
