import { motion, useReducedMotion } from 'motion/react'
import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router'
import { SiteImage } from '@/components/site-image'
import { Button } from '@/components/ui/button'
import type { Project } from '@/content/projects'

const colors = {
  saas: { badge: 'bg-neo-yellow', shadow: 'shadow-neo-cyan' },
  'design-system': { badge: 'bg-neo-pink', shadow: 'shadow-neo-pink' },
  creative: { badge: 'bg-neo-cyan', shadow: 'shadow-neo-lime' },
}

export function ProjectCard({ project }: { project: Project }) {
  const color = colors[project.category]
  const reducedMotion = useReducedMotion()
  const shadowColor = project.category === 'design-system' ? '#ff2a85' : project.category === 'creative' ? '#4ade80' : '#00f0ff'
  const href = `/proyek/${project.slug}`
  return (
    <motion.article initial={false} whileHover={reducedMotion ? undefined : { x: -2, y: -2, boxShadow: `6px 6px 0 ${shadowColor}` }} transition={{ duration: reducedMotion ? 0 : 0.18 }} className={`flex min-w-0 flex-col border-2 border-border bg-card ${color.shadow}`}>
      <div className="relative border-b-2 border-border">
        <SiteImage {...project.image} loading="lazy" className="aspect-video" />
        <div className="absolute inset-x-3 top-3 flex flex-wrap justify-between gap-2 font-mono text-[10px] font-bold">
          <span className={`border border-border px-2 py-1 text-black ${color.badge}`}>{project.categoryLabel}</span>
          <span className="border border-border bg-neo-lime px-2 py-1 text-black">{project.status}</span>
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex flex-wrap justify-between gap-2 font-mono text-xs text-muted-foreground">
          <span>KLIEN: {project.client}</span><span>{project.period}</span>
        </div>
        <h3 className="font-display text-2xl leading-tight font-bold"><Link to={href} className="hover:underline underline-offset-4">{project.title}</Link></h3>
        <p className="text-sm leading-relaxed text-muted-foreground">{project.description}</p>
        <ul className="flex flex-wrap gap-1.5 pt-2" aria-label="Teknologi proyek">{project.tags.map((tag) => <li className="tag" key={tag}>{tag}</li>)}</ul>
        <Button asChild variant="outline" className="mt-auto w-full text-xs"><Link to={href}>Lihat Detail Proyek <ArrowUpRight aria-hidden="true" /></Link></Button>
      </div>
    </motion.article>
  )
}
