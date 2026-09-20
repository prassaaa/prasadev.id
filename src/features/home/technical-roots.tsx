import { useReducedMotion } from 'motion/react'
import * as m from 'motion/react-m'
import { ArrowUpRight, Check, ShieldAlert, Sparkles, Terminal } from 'lucide-react'
import { SectionHeading } from '@/components/ui/section-heading'
import { site, technicalRoots } from '@/content/site'

const cardStyles = {
  cyan: {
    badge: 'bg-neo-cyan text-black',
    tag: 'bg-neo-cyan/20 border-border/40 text-foreground',
    shadow: 'shadow-neo-cyan',
    accentText: 'text-neo-cyan',
    pulseDot: 'bg-neo-cyan',
  },
  pink: {
    badge: 'bg-neo-pink text-black',
    tag: 'bg-neo-pink/20 border-border/40 text-foreground',
    shadow: 'shadow-neo-pink',
    accentText: 'text-neo-pink',
    pulseDot: 'bg-neo-pink',
  },
} as const

export function TechnicalRoots() {
  const reducedMotion = useReducedMotion()

  return (
    <section id="roots" className="section-shell overflow-hidden bg-background">
      <div className="site-container">
        {/* Section Heading */}
        <m.div
          initial={false}
          whileInView={reducedMotion ? undefined : { y: [35, 0], scale: [0.98, 1] }}
          viewport={{ once: false, amount: 0.2, margin: '200px 0px 0px 0px' }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mb-10 max-w-3xl">
          <SectionHeading label={site.roots.eyebrow} accent="pink">
            {site.roots.title}
          </SectionHeading>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
            {site.roots.description}
          </p>
        </m.div>

        {/* 2-Column High-Contrast Cyber-Terminal Dossiers */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {technicalRoots.map((item, idx) => {
            const style = cardStyles[item.accent as keyof typeof cardStyles]
            const isLeft = idx === 0

            return (
              <m.article
                key={item.brand}
                initial={false}
                whileInView={
                  reducedMotion
                    ? undefined
                    : {
                        x: [isLeft ? -40 : 40, 0],
                        y: [20, 0],
                      }
                }
                viewport={{ once: false, amount: 0.15, margin: '200px 0px 0px 0px' }}
                transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
                whileHover={reducedMotion ? undefined : { y: -3, transition: { duration: 0.15 } }}
                className={`flex flex-col justify-between border-2 border-border bg-card p-5 sm:p-7 md:p-8 ${style.shadow} transition-all`}>
                <div>
                  {/* Terminal Header Bar */}
                  <div className="mb-5 flex flex-wrap items-center justify-between gap-2 border-b-2 border-border/30 pb-3 font-mono text-xs">
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1" aria-hidden="true">
                        <span className="size-2 rounded-full border border-border bg-neo-pink" />
                        <span className="size-2 rounded-full border border-border bg-neo-yellow" />
                        <span className="size-2 rounded-full border border-border bg-neo-lime" />
                      </div>
                      <span className="text-[10px] font-bold tracking-wider text-muted-foreground uppercase sm:text-[11px]">
                        LAB ARCHIVE #{String(idx + 1).padStart(2, '0')}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="border border-border bg-background px-2 py-0.5 font-mono text-[10px] font-bold text-foreground">
                        {item.period}
                      </span>
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center gap-1 border border-border px-2 py-0.5 font-mono text-[10px] font-black uppercase shadow-sm transition-transform hover:scale-105 ${style.badge}`}>
                        <span>@{item.brand}</span>
                        <ArrowUpRight className="size-3" aria-hidden="true" />
                      </a>
                    </div>
                  </div>

                  {/* Title & Authentic Brand Avatar / Logo Image */}
                  <div className="mb-4 flex items-start gap-4">
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={`Buka tautan resmi @${item.brand}`}
                      className="group/avatar relative size-16 shrink-0 border-2 border-border bg-background p-1 shadow-neo transition-all hover:scale-105 hover:shadow-sm sm:size-20">
                      <img
                        src={item.image}
                        alt={`Logo resmi ${item.brand}`}
                        className="size-full object-cover"
                        loading="lazy"
                      />
                      <span
                        className={`py-0.2 absolute -right-2 -bottom-2 border border-border px-1.5 font-mono text-[9px] font-black uppercase ${style.badge}`}>
                        LAB
                      </span>
                    </a>

                    <div className="min-w-0 flex-1">
                      <span className="block font-mono text-[10px] font-bold tracking-wider text-muted-foreground uppercase sm:text-xs">
                        {item.category}
                      </span>
                      <h3 className="mt-0.5 font-display text-xl leading-snug font-extrabold sm:text-2xl">
                        {item.title}
                      </h3>
                    </div>
                  </div>

                  {/* Description Prose */}
                  <p className="text-xs leading-relaxed text-muted-foreground sm:text-sm">
                    {item.summary}
                  </p>

                  {/* Direct Link Channel Banner */}
                  <div className="mt-4">
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/link flex w-full items-center justify-between gap-3 border-2 border-border bg-muted/40 p-2.5 font-mono text-xs font-bold transition-all hover:border-border hover:bg-background hover:shadow-sm">
                      <div className="flex min-w-0 items-center gap-2">
                        <span className={`size-2 shrink-0 rounded-full ${style.pulseDot}`} />
                        <span className="text-[11px] text-muted-foreground uppercase">
                          {item.platform}:
                        </span>
                        <span className="truncate font-black text-foreground group-hover/link:underline">
                          {item.urlDisplay}
                        </span>
                      </div>
                      <ArrowUpRight className="size-3.5 shrink-0 text-muted-foreground transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 group-hover/link:text-foreground" />
                    </a>
                  </div>

                  {/* Core Capabilities Checklist */}
                  <div className="my-5 space-y-2 border-2 border-border bg-muted/60 p-3.5 font-mono text-xs">
                    <div className="mb-2 flex items-center gap-1.5 text-[10px] font-bold text-muted-foreground uppercase sm:text-[11px]">
                      <Terminal className="size-3.5 text-neo-yellow" aria-hidden="true" />
                      <span>Ruang Lingkup Eksekusi & Riset:</span>
                    </div>
                    <ul className="space-y-1.5 text-foreground">
                      {item.capabilities.map((cap) => (
                        <li key={cap} className="flex items-start gap-2 text-xs">
                          <Check
                            className="mt-0.5 size-3.5 shrink-0 text-neo-lime"
                            aria-hidden="true"
                          />
                          <span>{cap}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Tech Stack & Tooling Footer */}
                <div className="mt-4 border-t-2 border-border/20 pt-4">
                  <div className="mb-2 flex items-center gap-1.5 font-mono text-[10px] font-bold text-muted-foreground uppercase sm:text-[11px]">
                    <ShieldAlert className="size-3.5 text-neo-pink" aria-hidden="true" />
                    <span>Tooling & Environment:</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5 font-mono text-xs">
                    {item.stack.map((tech) => (
                      <span
                        key={tech}
                        className="border border-border bg-background px-2.5 py-1 font-bold text-foreground shadow-sm">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-4 flex items-center justify-between border-t border-border/20 pt-2.5 font-mono text-[10px] text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Sparkles className="size-3 text-neo-yellow" aria-hidden="true" />
                      <span>IDENTITAS RISET: @{item.brand}</span>
                    </span>
                    <span className="uppercase">HARDCORE SYSTEMS</span>
                  </div>
                </div>
              </m.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
