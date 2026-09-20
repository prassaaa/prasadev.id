import { motion, useReducedMotion } from 'motion/react'
import { ArrowUpRight, Check } from 'lucide-react'
import { Link } from 'react-router'
import { SiteImage } from '@/components/site-image'
import { Button } from '@/components/ui/button'
import type { Project } from '@/content/projects'

const colors = {
  web: {
    badge: 'bg-neo-yellow text-black',
    shadow: 'shadow-neo-cyan',
  },
  systems: {
    badge: 'bg-neo-pink text-black',
    shadow: 'shadow-neo-pink',
  },
  mobile: {
    badge: 'bg-neo-cyan text-black',
    shadow: 'shadow-neo-lime',
  },
}

export function ProjectCard({
  project,
  variant = 'card',
  index = 0,
}: {
  project: Project
  variant?: 'card' | 'dossier'
  index?: number
}) {
  const color = colors[project.category]
  const reducedMotion = useReducedMotion()
  const shadowColor =
    project.category === 'systems'
      ? '#ff2a85'
      : project.category === 'mobile'
        ? '#4ade80'
        : '#00f0ff'
  const href = `/proyek/${project.slug}`
  const isEven = index % 2 === 0

  if (variant === 'dossier') {
    return (
      <motion.article
        initial={false}
        whileHover={
          reducedMotion ? undefined : { x: -3, y: -3, boxShadow: `6px 6px 0 ${shadowColor}` }
        }
        transition={{ duration: reducedMotion ? 0 : 0.18 }}
        className={`group border-2 border-border bg-card p-5 sm:p-7 lg:p-8 ${color.shadow}`}>
        {/* Dossier Header Bar */}
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3 border-b-2 border-border/40 pb-4 font-mono text-xs">
          <div className="flex items-center gap-2.5 sm:gap-3">
            <span className="flex h-7 min-w-9 items-center justify-center border-2 border-border bg-foreground px-1.5 font-mono text-xs font-black text-background">
              #{String(index + 1).padStart(2, '0')}
            </span>
            <div className="flex items-center gap-1" aria-hidden="true">
              <span className="size-2 rounded-full border border-border bg-neo-pink" />
              <span className="size-2 rounded-full border border-border bg-neo-yellow" />
              <span className="size-2 rounded-full border border-border bg-neo-lime" />
            </div>
            <span className="font-mono text-[10px] font-bold tracking-wider text-muted-foreground uppercase sm:text-xs">
              CASE STUDY DOSSIER
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <span className="border border-border bg-background px-2.5 py-0.5 font-mono text-[11px] font-bold text-foreground">
              {project.client}
            </span>
            <span
              className={`border border-border px-2.5 py-0.5 font-mono text-[11px] font-extrabold ${color.badge}`}>
              {project.categoryLabel}
            </span>
          </div>
        </div>

        {/* Dossier Content Grid */}
        <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-12 lg:gap-10">
          {/* Image Box */}
          <div className={`lg:col-span-6 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
            <div className="relative overflow-hidden border-2 border-border bg-background p-1 shadow-neo">
              <SiteImage
                {...project.image}
                loading="lazy"
                className="aspect-video w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              />
              <div className="absolute bottom-3 left-3">
                <span className="border border-border bg-black/90 px-2.5 py-1 font-mono text-[10px] font-bold text-white backdrop-blur">
                  PROD · VERIFIED RELEASE
                </span>
              </div>
            </div>
          </div>

          {/* Narrative Story */}
          <div className={`space-y-4 lg:col-span-6 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
            <div>
              <p className="font-mono text-xs font-bold tracking-wider text-muted-foreground uppercase">
                {project.client}
              </p>
              <h3 className="mt-1 font-display text-2xl leading-tight font-extrabold tracking-tight transition-colors group-hover:text-primary sm:text-3xl lg:text-4xl">
                <Link to={href} className="underline-offset-4 hover:underline">
                  {project.title}
                </Link>
              </h3>
            </div>

            <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
              {project.description}
            </p>

            {/* Key Deliverables */}
            {project.features.length > 0 && (
              <div className="border-t-2 border-border/20 pt-3">
                <p className="mb-2 font-mono text-[11px] font-bold text-muted-foreground uppercase">
                  Fitur & Solusi Utama:
                </p>
                <ul className="grid grid-cols-1 gap-2 font-mono text-xs sm:grid-cols-2">
                  {project.features.slice(0, 4).map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-foreground">
                      <Check
                        className="mt-0.5 size-3.5 shrink-0 text-neo-lime"
                        aria-hidden="true"
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Tech Tags & CTA Action */}
            <div className="flex flex-col items-start justify-between gap-4 pt-2 sm:flex-row sm:items-center">
              {project.tags.length > 0 && (
                <ul className="flex flex-wrap gap-1.5" aria-label="Teknologi proyek">
                  {project.tags.map((tag) => (
                    <li
                      key={tag}
                      className="border border-border bg-background px-2.5 py-1 font-mono text-xs font-bold text-foreground">
                      {tag}
                    </li>
                  ))}
                </ul>
              )}

              <Button asChild size="default" className="w-full shrink-0 shadow-neo sm:w-auto">
                <Link to={href}>
                  Buka Studi Kasus<span className="sr-only">: {project.title}</span> <ArrowUpRight className="size-4" aria-hidden="true" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </motion.article>
    )
  }

  // Compact Card Layout (Used in Related Projects)
  return (
    <motion.article
      initial={false}
      whileHover={
        reducedMotion ? undefined : { x: -3, y: -3, boxShadow: `6px 6px 0 ${shadowColor}` }
      }
      transition={{ duration: reducedMotion ? 0 : 0.18 }}
      className={`group flex min-w-0 flex-col border-2 border-border bg-card ${color.shadow} h-full`}>
      {/* Window Header Bar */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b-2 border-border bg-muted/80 px-3.5 py-2 font-mono text-xs">
        <div className="flex items-center gap-1.5">
          <div className="flex items-center gap-1" aria-hidden="true">
            <span className="size-2 rounded-full border border-border bg-neo-pink" />
            <span className="size-2 rounded-full border border-border bg-neo-yellow" />
            <span className="size-2 rounded-full border border-border bg-neo-lime" />
          </div>
          <span className="text-[10px] font-bold tracking-wider text-muted-foreground uppercase">
            {project.categoryLabel}
          </span>
        </div>
        <span className="max-w-40 truncate border border-border bg-background px-1.5 py-0.5 text-[10px] font-bold text-foreground">
          {project.client}
        </span>
      </div>

      <figure className="relative overflow-hidden border-b-2 border-border bg-background">
        <SiteImage
          {...project.image}
          loading="lazy"
          className="aspect-video w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
        />
      </figure>

      <div className="flex flex-1 flex-col justify-between p-5">
        <div className="space-y-2.5">
          <h3 className="font-display text-xl leading-tight font-bold transition-colors group-hover:text-primary sm:text-2xl">
            <Link to={href} className="underline-offset-4 hover:underline">
              {project.title}
            </Link>
          </h3>
          <p className="line-clamp-3 text-sm leading-relaxed text-muted-foreground">
            {project.description}
          </p>
        </div>

        <div className="mt-5 space-y-3 border-t-2 border-border/20 pt-3">
          {project.tags.length > 0 && (
            <ul className="flex flex-wrap gap-1.5" aria-label="Teknologi proyek">
              {project.tags.map((tag) => (
                <li
                  key={tag}
                  className="border border-border bg-background px-2 py-0.5 font-mono text-[11px] font-bold text-foreground">
                  {tag}
                </li>
              ))}
            </ul>
          )}

          <Button asChild variant="outline" className="w-full text-xs shadow-neo">
            <Link to={href}>
              Detail Proyek<span className="sr-only">: {project.title}</span> <ArrowUpRight className="size-3.5" aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </div>
    </motion.article>
  )
}
