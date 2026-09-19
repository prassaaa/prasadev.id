import { useRef } from 'react'
import { motion, useReducedMotion, useScroll, useSpring } from 'motion/react'
import { Briefcase, MapPin } from 'lucide-react'
import { SectionHeading } from '@/components/ui/section-heading'
import { experience, site } from '@/content/site'
const nodeColors: Record<string, { bg: string; dot: string; shadow: string; badge: string }> = {
  yellow: {
    bg: 'bg-neo-yellow text-black',
    dot: 'bg-neo-yellow',
    shadow: 'shadow-neo-cyan',
    badge: 'bg-neo-yellow text-black',
  },
  pink: {
    bg: 'bg-neo-pink text-black',
    dot: 'bg-neo-pink',
    shadow: 'shadow-neo-pink',
    badge: 'bg-neo-pink text-black',
  },
  cyan: {
    bg: 'bg-neo-cyan text-black',
    dot: 'bg-neo-cyan',
    shadow: 'shadow-neo-lime',
    badge: 'bg-neo-cyan text-black',
  },
  lime: {
    bg: 'bg-neo-lime text-black',
    dot: 'bg-neo-lime',
    shadow: 'shadow-neo',
    badge: 'bg-neo-lime text-black',
  },
}

export function Experience() {
  const reducedMotion = useReducedMotion()
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 85%', 'end 75%'],
  })

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    restDelta: 0.001,
  })

  return (
    <section id="experience" className="section-shell overflow-hidden bg-background">
      <div className="site-container">
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 35, scale: 0.98 }}
          whileInView={reducedMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.2, margin: '200px 0px 0px 0px' }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mb-10 max-w-3xl">
          <SectionHeading label={site.experience.eyebrow} accent="purple">
            {site.experience.title}
          </SectionHeading>
          <p className="font-mono text-xs font-bold tracking-wider text-muted-foreground uppercase">
            Jejak Pengembangan Perangkat Lunak & Sistem Operasional
          </p>
        </motion.div>
        {/* Partner & Company Logos Showcase Bar */}
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 25 }}
          whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2, margin: '200px 0px 0px 0px' }}
          transition={{ duration: 0.45, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12 border-2 border-border bg-card p-4 shadow-neo sm:p-5">
          <div className="mb-3.5 flex flex-wrap items-center justify-between gap-2 border-b-2 border-border/30 pb-2.5 font-mono text-xs">
            <div className="flex items-center gap-2">
              <span className="size-2 rounded-full bg-neo-lime" aria-hidden="true" />
              <span className="font-bold tracking-wider text-muted-foreground uppercase">
                INSTANSI & PERUSAHAAN MITRA
              </span>
            </div>
            <span className="border border-border bg-neo-yellow px-2 py-0.5 font-mono text-[10px] font-black text-black uppercase shadow-sm">
              {experience.length} MITRA TERVERIFIKASI
            </span>
          </div>
          {/* Infinite Smooth Looping Marquee */}
          <div className="marquee-container edge-fade relative overflow-hidden py-1">
            <div className="marquee-left flex w-max gap-3 sm:gap-4">
              {/* Set 1 */}
              {experience.map((exp) => (
                <div
                  key={`track1-${exp.company}`}
                  title={exp.company}
                  className="group flex h-14 w-36 shrink-0 items-center justify-center border-2 border-border bg-white px-3 py-2 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-neo sm:w-44">
                  <img
                    src={exp.logo}
                    alt={`Logo ${exp.company}`}
                    className="max-h-full max-w-full object-contain grayscale filter transition-all group-hover:scale-105 group-hover:grayscale-0"
                    loading="lazy"
                  />
                </div>
              ))}
              {/* Set 2 (for seamless -50% infinite loop) */}
              {experience.map((exp) => (
                <div
                  key={`track2-${exp.company}`}
                  title={exp.company}
                  className="group flex h-14 w-36 shrink-0 items-center justify-center border-2 border-border bg-white px-3 py-2 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-neo sm:w-44">
                  <img
                    src={exp.logo}
                    alt={`Logo ${exp.company}`}
                    className="max-h-full max-w-full object-contain grayscale filter transition-all group-hover:scale-105 group-hover:grayscale-0"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Neon Circuit Timeline Container with Scroll Target */}
        <div ref={containerRef} className="relative pl-7 sm:pl-10 md:pl-0">
          {/* Inactive Dashed Circuit Track */}
          <div
            className="absolute top-6 bottom-6 left-3 w-0.5 border-l-2 border-dashed border-border/40 sm:left-4 md:left-1/2 md:-translate-x-1/2"
            aria-hidden="true"
          />

          {/* Active Glowing Neon Beam that extends down on scroll */}
          {!reducedMotion && (
            <motion.div
              style={{ scaleY, originY: 0 }}
              className="absolute top-6 bottom-6 left-3 w-1 -translate-x-[1px] bg-gradient-to-b from-neo-lime via-neo-cyan to-neo-pink shadow-[0_0_12px_#00f0ff] sm:left-4 md:left-1/2 md:-translate-x-1/2"
              aria-hidden="true"
            />
          )}

          <ol className="space-y-8 sm:space-y-10 md:space-y-12">
            {experience.map((item, index) => {
              const color = nodeColors[item.accent] || nodeColors.yellow
              const isCurrent = index === 0
              const isEven = index % 2 === 0

              return (
                <li key={item.company} className="relative">
                  {/* Circuit Chrono Node on the Timeline (Centered on desktop, Left on mobile) */}
                  <motion.div
                    initial={reducedMotion ? false : { scale: 0 }}
                    whileInView={reducedMotion ? undefined : { scale: 1 }}
                    viewport={{ once: false, amount: 0.2, margin: '200px 0px 0px 0px' }}
                    transition={{ duration: 0.35, ease: 'backOut', delay: 0.05 }}
                    className="absolute top-5 -left-7 z-10 flex items-center justify-center sm:-left-10 md:top-6 md:left-1/2 md:-translate-x-1/2"
                    aria-hidden="true">
                    {isCurrent ? (
                      <span className="relative flex size-6 sm:size-7 md:size-8">
                        <span className="absolute inline-flex size-full animate-ping rounded-full bg-neo-lime opacity-75" />
                        <span className="relative inline-flex size-full items-center justify-center rounded-full border-2 border-border bg-neo-lime text-[10px] font-black text-black shadow-sm">
                          ●
                        </span>
                      </span>
                    ) : (
                      <div className="flex size-6 items-center justify-center rounded-full border-2 border-border bg-card shadow-sm sm:size-7 md:size-8">
                        <span className={`size-2.5 rounded-full sm:size-3 ${color.dot}`} />
                      </div>
                    )}
                  </motion.div>

                  {/* Alternating Experience Dossier Card */}
                  <motion.div
                    initial={
                      reducedMotion
                        ? false
                        : {
                            opacity: 0,
                            x: isEven ? -45 : 45,
                          }
                    }
                    whileInView={
                      reducedMotion
                        ? undefined
                        : {
                            opacity: 1,
                            x: 0,
                          }
                    }
                    viewport={{ once: false, amount: 0.15, margin: '200px 0px 0px 0px' }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className={`w-full md:w-[calc(50%-2.25rem)] ${
                      isEven ? 'md:mr-auto' : 'md:ml-auto'
                    }`}>
                    <motion.article
                      initial={false}
                      whileHover={
                        reducedMotion
                          ? undefined
                          : {
                              x: isEven ? -4 : 4,
                              y: -3,
                              transition: { duration: 0.15 },
                            }
                      }
                      className={`border-2 border-border bg-card p-4 sm:p-5 md:p-6 ${color.shadow} transition-shadow`}>
                      {/* Card Top Window Bar */}
                      <div className="mb-4 flex flex-wrap items-center justify-between gap-2 border-b-2 border-border/30 pb-2.5 font-mono text-xs">
                        <div className="flex items-center gap-2">
                          <div className="flex items-center gap-1" aria-hidden="true">
                            <span className="size-2 rounded-full border border-border bg-neo-pink" />
                            <span className="size-2 rounded-full border border-border bg-neo-yellow" />
                            <span className="size-2 rounded-full border border-border bg-neo-lime" />
                          </div>
                          <span className="text-[10px] font-bold tracking-wider text-muted-foreground uppercase sm:text-[11px]">
                            LOG · #{String(index + 1).padStart(2, '0')}
                          </span>
                        </div>

                        <div className="flex flex-wrap items-center gap-2">
                          {isCurrent && (
                            <span className="border border-border bg-neo-lime px-2 py-0.5 font-mono text-[9px] font-black text-black uppercase shadow-sm sm:text-[10px]">
                              ● AKTIF
                            </span>
                          )}
                          <span className="flex items-center gap-1 font-mono text-[11px] font-bold text-muted-foreground sm:text-xs">
                            <MapPin
                              className="size-3.5 shrink-0 text-neo-yellow"
                              aria-hidden="true"
                            />
                            <span>{item.location}</span>
                          </span>
                        </div>
                      </div>

                      {/* Company Header with Logo & Role */}
                      <div className="space-y-2.5">
                        <div className="flex items-start gap-3 sm:gap-4">
                          {item.logo && (
                            <div className="flex size-12 shrink-0 items-center justify-center border-2 border-border bg-white p-1.5 shadow-sm sm:size-14">
                              <img
                                src={item.logo}
                                alt={`Logo ${item.company}`}
                                className="size-full object-contain"
                                loading="lazy"
                              />
                            </div>
                          )}
                          <div className="min-w-0 flex-1">
                            <div className="flex flex-col justify-between gap-1.5 sm:flex-row sm:items-baseline">
                              <h3 className="font-display text-base leading-tight font-extrabold sm:text-lg md:text-xl">
                                {item.company}
                              </h3>
                              <span
                                className={`inline-block self-start border border-border px-2 py-0.5 font-mono text-[10px] font-black uppercase sm:self-auto sm:text-[11px] ${color.badge}`}>
                                {item.title}
                              </span>
                            </div>
                            <p className="mt-1 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      </div>
                      {/* Deliverable & Stack Tags */}
                      <div className="mt-4 border-t-2 border-border/20 pt-3">
                        <div className="mb-2 flex items-center gap-1.5 font-mono text-[10px] font-bold text-muted-foreground uppercase sm:text-[11px]">
                          <Briefcase
                            className="size-3.5 shrink-0 text-neo-lime"
                            aria-hidden="true"
                          />
                          <span>Fokus & Kapabilitas:</span>
                        </div>
                        <ul className="flex flex-wrap gap-1.5" aria-label="Teknologi dan modul">
                          {item.tags.map((tag) => (
                            <li
                              key={tag}
                              className="border border-border bg-muted/80 px-2 py-0.5 font-mono text-[11px] font-bold text-foreground">
                              {tag}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.article>
                  </motion.div>
                </li>
              )
            })}
          </ol>
        </div>
      </div>
    </section>
  )
}
