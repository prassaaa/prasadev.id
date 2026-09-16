import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import { data, Link } from 'react-router'
import { PageMeta } from '@/components/page-meta'
import { SiteImage } from '@/components/site-image'
import { Button } from '@/components/ui/button'
import { SectionHeading } from '@/components/ui/section-heading'
import { projects } from '@/content/projects'
import { site } from '@/content/site'
import { ProjectCard } from '@/features/projects/project-card'
import type { Route } from './+types/project-detail'

export function loader({ params }: Route.LoaderArgs) {
  const index = projects.findIndex((project) => project.slug === params.slug)
  const project = projects[index]
  if (!project) throw data('Proyek tidak ditemukan', { status: 404 })

  const relatedProjects = [...projects.slice(index + 1), ...projects.slice(0, index)].slice(0, 2)
  return { project, relatedProjects }
}

export default function ProjectDetail({ loaderData }: Route.ComponentProps) {
  const { project, relatedProjects } = loaderData

  return (
    <>
      <PageMeta
        title={`${project.title} | ${site.name}`}
        description={`${site.isDemo ? 'Proyek demo dari template Stitch. ' : ''}${project.description}`}
      />
      <section className="section-shell">
        <div className="site-container">
          <nav aria-label="Breadcrumb" className="mb-10 font-mono text-xs text-muted-foreground">
            <ol className="flex flex-wrap items-center gap-2">
              <li><Link className="underline underline-offset-4" to="/">Beranda</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link className="underline underline-offset-4" to="/#portfolio">Karya</Link></li>
              <li aria-hidden="true">/</li>
              <li className="min-w-0 break-words text-foreground" aria-current="page">{project.title}</li>
            </ol>
          </nav>
          <div className="mb-6 flex flex-wrap gap-3">
            <span className="tag bg-neo-yellow text-black">{project.categoryLabel}</span>
            <span className="tag">{project.status}{site.isDemo ? ' · demo' : ''}</span>
          </div>
          <h1 className="max-w-5xl break-words font-display text-4xl leading-tight font-extrabold sm:text-5xl lg:text-6xl">{project.title}</h1>
          <div className="mt-10 grid items-start gap-8 lg:grid-cols-12">
            <div className="min-w-0 space-y-8 lg:col-span-8">
              <p className="max-w-3xl text-lg leading-relaxed text-muted-foreground">{project.description}</p>
              <SiteImage {...project.image} className="aspect-video border-2 border-border shadow-neo" loading="eager" />
              {site.isDemo && (
                <p className="border-l-4 border-neo-yellow pl-4 text-sm leading-relaxed text-muted-foreground">
                  Ringkasan, status, klien, dan teknologi ini berasal dari template Stitch. Halaman ini menampilkan proyek contoh, bukan dokumentasi pekerjaan pribadi yang terverifikasi.
                </p>
              )}
            </div>
            <aside aria-label="Informasi proyek" className="min-w-0 border-2 border-border bg-card p-6 shadow-neo-cyan lg:col-span-4">
              <h2 className="mb-6 font-display text-2xl font-bold">Detail proyek</h2>
              <dl className="space-y-6">
                <div>
                  <dt className="mb-2 font-mono text-xs text-muted-foreground">Klien{site.isDemo ? ' contoh' : ''}</dt>
                  <dd className="break-words font-bold">{project.client}</dd>
                </div>
                <div>
                  <dt className="mb-2 font-mono text-xs text-muted-foreground">Periode</dt>
                  <dd>{project.period}</dd>
                </div>
                <div>
                  <dt className="mb-3 font-mono text-xs text-muted-foreground">Teknologi</dt>
                  <dd className="flex flex-wrap gap-2">{project.tags.map((tag) => <span key={tag} className="tag">{tag}</span>)}</dd>
                </div>
              </dl>
              <div className="mt-8 border-t-2 border-border pt-6">
                <Button asChild className="h-auto w-full whitespace-normal py-3 text-center">
                  <Link to="/#contact">Diskusikan proyek Anda <ArrowUpRight aria-hidden="true" /></Link>
                </Button>
              </div>
            </aside>
          </div>
          <Button asChild variant="outline" className="mt-10">
            <Link to="/#portfolio"><ArrowLeft aria-hidden="true" /> Kembali ke karya</Link>
          </Button>
        </div>
      </section>
      {relatedProjects.length > 0 && (
        <section className="section-shell" aria-labelledby="related-projects-heading">
          <div className="site-container">
            <SectionHeading label="Eksplorasi karya" accent="cyan"><span id="related-projects-heading">Proyek lainnya.</span></SectionHeading>
            <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {relatedProjects.map((relatedProject) => <ProjectCard key={relatedProject.slug} project={relatedProject} />)}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
