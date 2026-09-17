import { Component, Gauge, GitFork } from 'lucide-react'
import { SectionHeading } from '@/components/ui/section-heading'
import { principles, site } from '@/content/site'

const icons = { gauge: Gauge, component: Component, 'git-fork': GitFork }
const accents = { yellow: 'bg-neo-yellow', pink: 'bg-neo-pink', lime: 'bg-neo-lime' }
const shadows = { yellow: 'shadow-neo-cyan', pink: 'shadow-neo-pink', lime: 'shadow-neo-lime' }

export function About() {
  return (
    <section id="about" className="section-shell bg-muted">
      <div className="site-container">
        <SectionHeading label={site.about.eyebrow}>{site.about.title}</SectionHeading>
        <p className="mb-8 max-w-3xl text-lg leading-relaxed text-muted-foreground">
          {site.about.description}
        </p>
        <div className="grid gap-6 md:grid-cols-3">
          {principles.map((principle) => {
            const Icon = icons[principle.icon]
            return (
              <article
                key={principle.number}
                className={`flex min-w-0 flex-col justify-between border-2 border-border bg-card p-6 ${shadows[principle.accent]}`}>
                <div className="space-y-4">
                  <div
                    className={`flex size-12 items-center justify-center border-2 border-border text-xl font-black text-black shadow-neo ${accents[principle.accent]}`}>
                    {principle.number}
                  </div>
                  <h3 className="font-display text-2xl font-bold">{principle.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {principle.description}
                  </p>
                </div>
                <p className="mt-6 flex items-center gap-2 border-t-2 border-border/20 pt-4 font-mono text-xs font-bold">
                  <Icon className="size-4 shrink-0" aria-hidden="true" />
                  {principle.detail}
                </p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
