import { useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { Button } from '@/components/ui/button'
import { SectionHeading } from '@/components/ui/section-heading'
import { projects, type Project } from '@/content/projects'
import { site } from '@/content/site'
import { ProjectCard } from '@/features/projects/project-card'

const filters: { value: 'all' | Project['category']; label: string }[] = [
  { value: 'all', label: 'Semua' },
  { value: 'saas', label: 'SaaS & Fintech' },
  { value: 'design-system', label: 'Design System' },
  { value: 'creative', label: 'Creative & 3D' },
]

export function ProjectShowcase() {
  const [category, setCategory] = useState<'all' | Project['category']>('all')
  const reducedMotion = useReducedMotion()
  const visibleProjects = category === 'all' ? projects : projects.filter((project) => project.category === category)
  return (
    <section id="portfolio" className="section-shell bg-muted">
      <div className="site-container">
        <div className="mb-10 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <SectionHeading label={site.portfolio.eyebrow} accent="lime" className="mb-0 max-w-xl">{site.portfolio.title}</SectionHeading>
          <div className="flex flex-wrap gap-2" role="group" aria-label="Filter kategori proyek">{filters.map((filter) => <Button key={filter.value} type="button" size="sm" variant={category === filter.value ? 'default' : 'outline'} aria-pressed={category === filter.value} aria-controls="portfolio-grid" onClick={() => setCategory(filter.value)}>{filter.label} ({filter.value === 'all' ? projects.length : projects.filter((project) => project.category === filter.value).length})</Button>)}</div>
        </div>
        <p className="sr-only" role="status">{visibleProjects.length} proyek ditampilkan</p>
        <div id="portfolio-grid" className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"><AnimatePresence initial={false}>{visibleProjects.map((project) => <motion.div key={project.slug} layout={!reducedMotion} initial={false} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: reducedMotion ? 0 : 0.2 }} className="min-w-0 [&>article]:h-full"><ProjectCard project={project} /></motion.div>)}</AnimatePresence></div>
        {visibleProjects.length === 0 ? <div className="space-y-4 border-2 border-border bg-card p-8 text-center"><p>Belum ada proyek untuk kategori ini</p><Button type="button" onClick={() => setCategory('all')}>Kembali ke Semua</Button></div> : null}
      </div>
    </section>
  )
}
