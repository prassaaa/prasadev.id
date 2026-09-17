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
      <PageMeta title={`${project.title} | ${site.brand}`} description={project.description} />
      <section className="section-shell">
        <div className="site-container">
          <nav aria-label="Breadcrumb" className="mb-10 font-mono text-xs text-muted-foreground">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link className="underline underline-offset-4" to="/">
                  Beranda
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link className="underline underline-offset-4" to="/#portfolio">
                  Karya
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="min-w-0 wrap-break-word text-foreground" aria-current="page">
                {project.title}
              </li>
            </ol>
          </nav>
          <div className="mb-6 flex flex-wrap gap-3">
            <span className="tag bg-neo-yellow text-black">{project.categoryLabel}</span>
          </div>
          <h1 className="max-w-5xl font-display text-4xl leading-tight font-extrabold wrap-break-word sm:text-5xl lg:text-6xl">
            {project.title}
          </h1>
          <div className="mt-10 grid items-start gap-8 lg:grid-cols-12">
            <div className="min-w-0 space-y-8 lg:col-span-8">
              <p className="max-w-3xl text-lg leading-relaxed text-muted-foreground">
                {project.description}
              </p>
              <figure className="space-y-3">
                <SiteImage
                  {...project.image}
                  className="aspect-video border-2 border-border shadow-neo"
                  loading="eager"
                />
                <figcaption className="text-sm text-muted-foreground">
                  Ilustrasi sementara; bukan tampilan proyek.
                </figcaption>
              </figure>
              <section aria-labelledby="project-context-heading" className="space-y-4">
                <h2 id="project-context-heading" className="font-display text-2xl font-bold">
                  Konteks pekerjaan
                </h2>
                <p className="leading-relaxed text-muted-foreground">{project.context}</p>
              </section>
              <section aria-labelledby="project-contributions-heading" className="space-y-4">
                <h2 id="project-contributions-heading" className="font-display text-2xl font-bold">
                  Kontribusi saya
                </h2>
                <ul className="list-disc space-y-3 pl-5 leading-relaxed text-muted-foreground">
                  {project.contributions.map((contribution) => (
                    <li key={contribution}>{contribution}</li>
                  ))}
                </ul>
              </section>
              <section aria-labelledby="project-features-heading" className="space-y-4">
                <h2 id="project-features-heading" className="font-display text-2xl font-bold">
                  Cakupan fitur
                </h2>
                <ul className="list-disc space-y-3 pl-5 leading-relaxed text-muted-foreground">
                  {project.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              </section>
            </div>
            <aside
              aria-label="Informasi proyek"
              className="min-w-0 border-2 border-border bg-card p-6 shadow-neo-cyan lg:col-span-4">
              <h2 className="mb-6 font-display text-2xl font-bold">Detail proyek</h2>
              <dl className="space-y-6">
                <div>
                  <dt className="mb-2 font-mono text-xs text-muted-foreground">Organisasi</dt>
                  <dd className="font-bold wrap-break-word">{project.client}</dd>
                </div>
                <div>
                  <dt className="mb-2 font-mono text-xs text-muted-foreground">
                    Periode keterlibatan
                  </dt>
                  <dd>{project.period}</dd>
                </div>
                <div>
                  <dt className="mb-3 font-mono text-xs text-muted-foreground">Teknologi</dt>
                  <dd>
                    {project.tags.length > 0 ? (
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span key={tag} className="tag">
                            {tag}
                          </span>
                        ))}
                      </div>
                    ) : (
                      <span className="text-sm text-muted-foreground">
                        Stack spesifik tidak dicantumkan dalam CV.
                      </span>
                    )}
                  </dd>
                </div>
              </dl>
              <div className="mt-8 border-t-2 border-border pt-6">
                <Button asChild className="h-auto w-full py-3 text-center whitespace-normal">
                  <Link to="/#contact">
                    Diskusikan proyek Anda <ArrowUpRight aria-hidden="true" />
                  </Link>
                </Button>
              </div>
            </aside>
          </div>
          <Button asChild variant="outline" className="mt-10">
            <Link to="/#portfolio">
              <ArrowLeft aria-hidden="true" /> Kembali ke karya
            </Link>
          </Button>
        </div>
      </section>
      {relatedProjects.length > 0 && (
        <section className="section-shell" aria-labelledby="related-projects-heading">
          <div className="site-container">
            <SectionHeading label="Eksplorasi karya" accent="cyan">
              <span id="related-projects-heading">Proyek lainnya.</span>
            </SectionHeading>
            <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {relatedProjects.map((relatedProject) => (
                <ProjectCard key={relatedProject.slug} project={relatedProject} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
