import { motion, useReducedMotion } from 'motion/react'
import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router'
import { SiteImage } from '@/components/site-image'
import { Button } from '@/components/ui/button'
import type { Project } from '@/content/projects'

const colors = {
  web: { badge: 'bg-neo-yellow', shadow: 'shadow-neo-cyan' },
  systems: { badge: 'bg-neo-pink', shadow: 'shadow-neo-pink' },
  mobile: { badge: 'bg-neo-cyan', shadow: 'shadow-neo-lime' },
}

export function ProjectCard({ project }: { project: Project }) {
  const color = colors[project.category]
  const reducedMotion = useReducedMotion()
  const shadowColor =
    project.category === 'systems'
      ? '#ff2a85'
      : project.category === 'mobile'
        ? '#4ade80'
        : '#00f0ff'
  const href = `/proyek/${project.slug}`
  return (
    <motion.article
      initial={false}
      whileHover={
        reducedMotion ? undefined : { x: -2, y: -2, boxShadow: `6px 6px 0 ${shadowColor}` }
      }
      transition={{ duration: reducedMotion ? 0 : 0.18 }}
      className={`flex min-w-0 flex-col border-2 border-border bg-card ${color.shadow}`}>
      <figure className="border-b-2 border-border">
        <div className="relative">
          <SiteImage {...project.image} loading="lazy" className="aspect-video" />
          <span
            className={`absolute top-3 left-3 border border-border px-2 py-1 font-mono text-[10px] font-bold text-black ${color.badge}`}>
            {project.categoryLabel}
          </span>
        </div>
        <figcaption className="px-3 py-2 text-xs text-muted-foreground">
          Ilustrasi sementara; bukan tampilan proyek.
        </figcaption>
      </figure>
      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex flex-wrap justify-between gap-2 font-mono text-xs text-muted-foreground">
          <span>ORGANISASI: {project.client}</span>
          <span>{project.period}</span>
        </div>
        <h3 className="font-display text-2xl leading-tight font-bold">
          <Link to={href} className="underline-offset-4 hover:underline">
            {project.title}
          </Link>
        </h3>
        <p className="text-sm leading-relaxed text-muted-foreground">{project.description}</p>
        {project.tags.length > 0 && (
          <ul className="flex flex-wrap gap-1.5 pt-2" aria-label="Teknologi proyek">
            {project.tags.map((tag) => (
              <li className="tag" key={tag}>
                {tag}
              </li>
            ))}
          </ul>
        )}
        <Button asChild variant="outline" className="mt-auto w-full text-xs">
          <Link to={href}>
            Lihat Detail Proyek <ArrowUpRight aria-hidden="true" />
          </Link>
        </Button>
      </div>
    </motion.article>
  )
}
