import {
  Activity,
  Boxes,
  Briefcase,
  Building2,
  Factory,
  Gauge,
  GitFork,
  GraduationCap,
  MapPin,
  ShieldCheck,
  Store,
  Users,
} from 'lucide-react'
import { motion, useReducedMotion } from 'motion/react'
import { SectionHeading } from '@/components/ui/section-heading'
import { principles, site } from '@/content/site'

const principleIcons = {
  gauge: Gauge,
  boxes: Boxes,
  'git-fork': GitFork,
  'shield-check': ShieldCheck,
}

const sectorIcons = {
  activity: Activity,
  factory: Factory,
  'building-2': Building2,
  users: Users,
  store: Store,
}

const accents = {
  yellow: { bg: 'bg-neo-yellow text-black', shadow: 'shadow-neo-cyan' },
  pink: { bg: 'bg-neo-pink text-black', shadow: 'shadow-neo-pink' },
  lime: { bg: 'bg-neo-lime text-black', shadow: 'shadow-neo-lime' },
  cyan: { bg: 'bg-neo-cyan text-black', shadow: 'shadow-neo' },
}

export function About() {
  const reducedMotion = useReducedMotion()

  return (
    <section id="about" className="section-shell bg-muted">
      <div className="site-container">
        <SectionHeading label={site.about.eyebrow} accent="yellow" className="max-w-3xl">
          {site.about.title}
        </SectionHeading>

        <div className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-12">
          {/* Left Column: Profile & Credentials Bento Card */}
          <motion.article
            initial={false}
            whileHover={
              reducedMotion ? undefined : { x: -2, y: -2, transition: { duration: 0.15 } }
            }
            className="flex flex-col justify-between border-2 border-border bg-card p-5 shadow-neo-cyan sm:p-6 lg:col-span-5">
            <div>
              {/* Window Header */}
              <div className="mb-5 flex flex-wrap items-center justify-between gap-2 border-b-2 border-border/30 pb-3">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1" aria-hidden="true">
                    <span className="size-2 rounded-full border border-border bg-neo-pink" />
                    <span className="size-2 rounded-full border border-border bg-neo-yellow" />
                    <span className="size-2 rounded-full border border-border bg-neo-lime" />
                  </div>
                  <span className="font-mono text-[10px] font-bold tracking-wider text-muted-foreground uppercase sm:text-xs">
                    PROFILE & CREDENTIALS
                  </span>
                </div>
                <span className="border border-border bg-neo-yellow px-2 py-0.5 font-mono text-[10px] font-extrabold text-black uppercase sm:text-xs">
                  SOFTWARE ENGINEER
                </span>
              </div>

              {/* Bio Summary */}
              <div className="space-y-2">
                <h3 className="font-display text-2xl leading-tight font-bold sm:text-3xl">
                  {site.name}
                </h3>
                <p className="font-mono text-xs font-bold text-muted-foreground">
                  {site.role} · Web & Mobile Integration
                </p>
                <p className="pt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {site.about.description}
                </p>
              </div>

              {/* Quick Facts Box */}
              <div className="my-5 space-y-2.5 border-2 border-border bg-muted/60 p-3.5 font-mono text-xs">
                <div className="flex items-center gap-2.5">
                  <Briefcase className="size-4 shrink-0 text-neo-pink" aria-hidden="true" />
                  <span className="text-muted-foreground">Peran:</span>
                  <span className="font-bold text-foreground">
                    Software Developer @ RS Bhayangkara
                  </span>
                </div>
                <div className="flex items-center gap-2.5">
                  <GraduationCap className="size-4 shrink-0 text-neo-cyan" aria-hidden="true" />
                  <span className="text-muted-foreground">Pendidikan:</span>
                  <span className="font-bold text-foreground">
                    S1 Sistem Informasi (UNP Kediri)
                  </span>
                </div>
                <div className="flex items-center gap-2.5">
                  <MapPin className="size-4 shrink-0 text-neo-lime" aria-hidden="true" />
                  <span className="text-muted-foreground">Domisili:</span>
                  <span className="font-bold text-foreground">Kediri, Jawa Timur (WIB)</span>
                </div>
              </div>
            </div>

            {/* Sectors Experience */}
            <div className="mt-4 border-t-2 border-border/20 pt-4">
              <p className="mb-2.5 font-mono text-xs font-bold tracking-wider text-muted-foreground uppercase">
                Sektor yang Pernah Ditangani:
              </p>
              <div className="flex flex-wrap gap-2">
                {site.about.sectors.map((sector) => {
                  const SectorIcon = sectorIcons[sector.icon as keyof typeof sectorIcons]
                  return (
                    <div
                      key={sector.name}
                      className="flex items-center gap-1.5 border border-border bg-background px-2.5 py-1 font-mono text-xs font-bold text-foreground">
                      <SectorIcon
                        className="size-3.5 shrink-0 text-neo-yellow"
                        aria-hidden="true"
                      />
                      <span>{sector.name}</span>
                    </div>
                  )
                })}
              </div>
            </div>
          </motion.article>

          {/* Right Column: 4 Core Principles 2x2 Bento Grid */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:col-span-7">
            {principles.map((principle) => {
              const Icon = principleIcons[principle.icon as keyof typeof principleIcons]
              const color = accents[principle.accent]
              return (
                <motion.article
                  key={principle.number}
                  initial={false}
                  whileHover={
                    reducedMotion ? undefined : { x: -3, y: -3, transition: { duration: 0.15 } }
                  }
                  className={`flex min-w-0 flex-col justify-between border-2 border-border bg-card p-5 sm:p-6 ${color.shadow}`}>
                  <div>
                    {/* Card Top: Number Box & Category Pill */}
                    <div className="mb-4 flex items-center justify-between">
                      <div
                        className={`flex size-11 items-center justify-center border-2 border-border font-display text-xl font-black shadow-neo ${color.bg}`}>
                        {principle.number}
                      </div>
                      <span className="flex items-center gap-1.5 border border-border bg-muted px-2 py-0.5 font-mono text-[10px] font-bold text-muted-foreground uppercase">
                        <Icon className="size-3 shrink-0" aria-hidden="true" />
                        Prinsip {principle.number}
                      </span>
                    </div>

                    {/* Title & Body */}
                    <h3 className="font-display text-xl leading-snug font-bold sm:text-2xl">
                      {principle.title}
                    </h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                      {principle.description}
                    </p>
                  </div>

                  {/* Bottom Tag */}
                  <div className="mt-6 border-t-2 border-border/20 pt-3">
                    <p className="flex items-center gap-2 font-mono text-xs font-bold text-foreground">
                      <span className="size-2 shrink-0 bg-neo-lime" aria-hidden="true" />
                      {principle.detail}
                    </p>
                  </div>
                </motion.article>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
