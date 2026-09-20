import { useState } from 'react'
import { AnimatePresence, useReducedMotion } from 'motion/react'
import * as m from 'motion/react-m'
import { Button } from '@/components/ui/button'
import { SectionHeading } from '@/components/ui/section-heading'
import { projects, type Project } from '@/content/projects'
import { site } from '@/content/site'
import { ProjectCard } from '@/features/projects/project-card'

const filters: { value: 'all' | Project['category']; label: string }[] = [
  { value: 'all', label: 'Semua' },
  { value: 'systems', label: 'Sistem Operasional' },
  { value: 'web', label: 'Web Apps' },
  { value: 'mobile', label: 'Mobile Flutter' },
]

const filterColors: Record<string, string> = {
  all: 'bg-neo-lime text-black border-border shadow-neo',
  systems: 'bg-neo-pink text-black border-border shadow-neo',
  web: 'bg-neo-yellow text-black border-border shadow-neo',
  mobile: 'bg-neo-cyan text-black border-border shadow-neo',
}

export function ProjectShowcase() {
  const [category, setCategory] = useState<'all' | Project['category']>('all')
  const reducedMotion = useReducedMotion()
  const visibleProjects =
    category === 'all' ? projects : projects.filter((project) => project.category === category)

  return (
    <section id="portfolio" className="section-shell bg-muted">
      <div className="site-container">
        {/* Section Header & Cyber Filter Controls */}
        <m.div
          initial={false}
          whileInView={reducedMotion ? undefined : { y: [35, 0], scale: [0.98, 1] }}
          viewport={{ once: false, amount: 0.2, margin: '200px 0px 0px 0px' }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <SectionHeading label={site.portfolio.eyebrow} accent="lime" className="mb-0 max-w-lg">
            {site.portfolio.title}
          </SectionHeading>

          {/* Cyber Brutalist Filter Bar */}
          <div
            className="flex max-w-full items-center gap-1.5 overflow-x-auto border-2 border-border bg-card p-1.5 shadow-neo sm:flex-wrap"
            role="group"
            aria-label="Filter kategori proyek">
            {filters.map((filter) => {
              const count =
                filter.value === 'all'
                  ? projects.length
                  : projects.filter((project) => project.category === filter.value).length
              const isActive = category === filter.value
              const activeStyle = filterColors[filter.value] || filterColors.all
              return (
                <button
                  key={filter.value}
                  type="button"
                  aria-pressed={isActive}
                  aria-controls="portfolio-grid"
                  onClick={() => setCategory(filter.value)}
                  className={`shrink-0 cursor-pointer border px-3 py-1.5 font-mono text-xs font-bold whitespace-nowrap transition-all ${
                    isActive
                      ? `${activeStyle} font-black`
                      : 'border-transparent text-muted-foreground hover:border-border hover:bg-muted hover:text-foreground'
                  }`}>
                  {filter.label}{' '}
                  <span
                    className={`py-0.2 ml-1 inline-block px-1.5 font-mono text-[10px] ${
                      isActive
                        ? 'bg-black/15 font-black text-black'
                        : 'border border-border/40 bg-background text-muted-foreground'
                    }`}>
                    {count}
                  </span>
                </button>
              )
            })}
          </div>
        </m.div>

        {/* Status Strip */}
        <m.div
          initial={false}
          whileInView={reducedMotion ? undefined : { y: [20, 0] }}
          viewport={{ once: false, amount: 0.3, margin: '200px 0px 0px 0px' }}
          transition={{ duration: 0.45, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8 flex items-center justify-between border-b-2 border-border/30 pb-3 font-mono text-xs text-muted-foreground">
          <div className="flex items-center gap-2">
            <span className="size-2 animate-pulse rounded-full bg-neo-lime" aria-hidden="true" />
            <span>{visibleProjects.length} sistem & aplikasi terverifikasi produksi</span>
          </div>
          <span className="hidden text-[11px] font-bold tracking-wider text-muted-foreground uppercase sm:inline">
            LARAVEL · REACT · FLUTTER · ANDROID
          </span>
        </m.div>

        <p className="sr-only" role="status">
          {visibleProjects.length} proyek ditampilkan
        </p>

        {/* Stacking Case Study Dossier Feed */}
        <div
          id="portfolio-grid"
          className="relative space-y-12 pb-12 sm:space-y-16 lg:space-y-20 lg:pb-20">
          <AnimatePresence initial={false}>
            {visibleProjects.map((project, index) => (
              <m.div
                key={project.slug}
                layout={!reducedMotion}
                initial={false}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: reducedMotion ? 0 : 0.25 }}
                className="sticky min-w-0"
                style={{
                  top: `calc(5rem + ${index * 24}px)`,
                  zIndex: index + 1,
                }}>
                <ProjectCard project={project} variant="dossier" index={index} />
              </m.div>
            ))}
          </AnimatePresence>
        </div>

        {visibleProjects.length === 0 ? (
          <div className="space-y-4 border-2 border-border bg-card p-8 text-center">
            <p>Belum ada proyek untuk kategori ini</p>
            <Button type="button" onClick={() => setCategory('all')}>
              Kembali ke Semua Proyek
            </Button>
          </div>
        ) : null}
      </div>
    </section>
  )
}
