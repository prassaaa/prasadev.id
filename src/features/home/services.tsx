import {
  Activity,
  ArrowRight,
  Check,
  Code2,
  Layers,
  Network,
  Smartphone,
  Terminal,
} from 'lucide-react'
import { useReducedMotion } from 'motion/react'
import * as m from 'motion/react-m'
import { Link } from 'react-router'
import { Button } from '@/components/ui/button'
import { SectionHeading } from '@/components/ui/section-heading'
import { services, site } from '@/content/site'

const bentoConfig = [
  {
    span: 'md:col-span-2 lg:col-span-7',
    eyebrow: 'WEB ARCHITECTURE',
    badge: 'LARAVEL + REACT',
    badgeColor: 'bg-neo-yellow text-black',
    accentColor: 'bg-neo-yellow text-black',
    shadowColor: 'shadow-neo-cyan',
    icon: Code2,
    preview: (
      <div className="mt-auto border-2 border-border bg-muted/60 p-3.5 font-mono text-xs">
        <div className="flex items-center justify-between border-b border-border/30 pb-2 text-[11px]">
          <span className="flex items-center gap-1.5 font-bold">
            <Terminal className="size-3.5 text-neo-yellow" aria-hidden="true" />
            stack-overview.json
          </span>
          <span className="border border-border/50 bg-background px-1.5 py-0.5 text-[10px] font-bold text-foreground">
            SSR · SPA · RESPONSIVE
          </span>
        </div>
        <div className="mt-2.5 grid grid-cols-1 gap-1.5 text-muted-foreground sm:grid-cols-2">
          <div className="flex items-center justify-between border border-border/20 bg-background/50 px-2 py-1 text-[11px]">
            <span>Frontend</span>
            <span className="font-bold text-foreground">React · Tailwind</span>
          </div>
          <div className="flex items-center justify-between border border-border/20 bg-background/50 px-2 py-1 text-[11px]">
            <span>Backend</span>
            <span className="font-bold text-foreground">Laravel · PHP</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    span: 'md:col-span-1 lg:col-span-5',
    eyebrow: 'MOBILE ECOSYSTEM',
    badge: 'FLUTTER & DART',
    badgeColor: 'bg-neo-cyan text-black',
    accentColor: 'bg-neo-cyan text-black',
    shadowColor: 'shadow-neo-lime',
    icon: Smartphone,
    preview: (
      <div className="mt-auto border-2 border-border bg-muted/60 p-3.5 font-mono text-xs">
        <div className="flex items-center justify-between border-b border-border/30 pb-2 text-[11px]">
          <span className="flex items-center gap-1.5 font-bold">
            <Activity className="size-3.5 text-neo-cyan" aria-hidden="true" />
            mobile-target: android
          </span>
          <span className="border border-border/50 bg-neo-cyan px-1.5 py-0.5 text-[10px] font-extrabold text-black">
            CROSS-PLATFORM
          </span>
        </div>
        <div className="mt-2.5 space-y-1.5 text-muted-foreground">
          <div className="flex items-center justify-between border border-border/20 bg-background/50 px-2 py-1 text-[11px]">
            <span>Runtime</span>
            <span className="font-bold text-foreground">Flutter SDK · Dart</span>
          </div>
          <div className="flex items-center justify-between border border-border/20 bg-background/50 px-2 py-1 text-[11px]">
            <span>Distribution</span>
            <span className="font-bold text-foreground">Google Play Store & APK</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    span: 'md:col-span-1 lg:col-span-5',
    eyebrow: 'WORKFLOW & OPS',
    badge: 'MODULAR SYSTEM',
    badgeColor: 'bg-neo-pink text-black',
    accentColor: 'bg-neo-pink text-black',
    shadowColor: 'shadow-neo-pink',
    icon: Layers,
    preview: (
      <div className="mt-auto border-2 border-border bg-muted/60 p-3.5 font-mono text-xs">
        <div className="flex items-center justify-between border-b border-border/30 pb-2 text-[11px]">
          <span className="flex items-center gap-1.5 font-bold">
            <Layers className="size-3.5 text-neo-pink" aria-hidden="true" />
            alur-operasional
          </span>
          <span className="border border-border/50 bg-neo-pink px-1.5 py-0.5 text-[10px] font-extrabold text-black">
            MODULAR
          </span>
        </div>
        <div className="mt-2.5 grid grid-cols-3 gap-1.5 text-center font-mono text-[11px]">
          <div className="border border-border/30 bg-background p-1.5">
            <p className="text-[9px] text-muted-foreground">STEP 01</p>
            <p className="font-bold text-foreground">Input Data</p>
          </div>
          <div className="border border-border/30 bg-background p-1.5">
            <p className="text-[9px] text-muted-foreground">STEP 02</p>
            <p className="font-bold text-foreground">Validasi</p>
          </div>
          <div className="border border-border/30 bg-background p-1.5">
            <p className="text-[9px] text-muted-foreground">STEP 03</p>
            <p className="font-bold text-foreground">Laporan</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    span: 'md:col-span-2 lg:col-span-7',
    eyebrow: 'DATA PIPELINE',
    badge: 'REST API & GATEWAY',
    badgeColor: 'bg-neo-lime text-black',
    accentColor: 'bg-neo-lime text-black',
    shadowColor: 'shadow-neo',
    icon: Network,
    preview: (
      <div className="mt-auto border-2 border-border bg-muted/60 p-3.5 font-mono text-xs">
        <div className="flex items-center justify-between border-b border-border/30 pb-2 text-[11px]">
          <span className="flex items-center gap-1.5 font-bold">
            <Network className="size-3.5 text-neo-lime" aria-hidden="true" />
            api-endpoints & services
          </span>
          <span className="border border-border/50 bg-neo-lime px-1.5 py-0.5 text-[10px] font-extrabold text-black">
            REST API
          </span>
        </div>
        <div className="mt-2.5 grid grid-cols-1 gap-1.5 sm:grid-cols-2">
          <div className="flex items-center justify-between border border-border/20 bg-background/50 px-2 py-1 text-[11px]">
            <span className="flex items-center gap-1.5">
              <span className="py-0.2 border border-border/40 bg-neo-yellow px-1 font-mono text-[9px] font-black text-black">
                POST
              </span>
              <span className="font-mono text-muted-foreground">/payment/gateway</span>
            </span>
            <span className="font-mono font-bold text-neo-lime">200 OK</span>
          </div>
          <div className="flex items-center justify-between border border-border/20 bg-background/50 px-2 py-1 text-[11px]">
            <span className="flex items-center gap-1.5">
              <span className="py-0.2 border border-border/40 bg-neo-cyan px-1 font-mono text-[9px] font-black text-black">
                GET
              </span>
              <span className="font-mono text-muted-foreground">/data/sync</span>
            </span>
            <span className="font-mono font-bold text-neo-lime">200 OK</span>
          </div>
        </div>
      </div>
    ),
  },
]

export function Services() {
  const reducedMotion = useReducedMotion()

  return (
    <section id="services" className="section-shell bg-background">
      <div className="site-container">
        <m.div
          initial={false}
          whileInView={reducedMotion ? undefined : { y: [35, 0], scale: [0.98, 1] }}
          viewport={{ once: false, amount: 0.2, margin: '200px 0px 0px 0px' }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading label={site.services.eyebrow} accent="cyan" className="mb-0 max-w-2xl">
            {site.services.title}
          </SectionHeading>
          <Button
            asChild
            variant="outline"
            className="max-w-full self-start whitespace-normal md:self-auto">
            <Link to="/#contact">
              {site.services.cta}
              <ArrowRight aria-hidden="true" />
            </Link>
          </Button>
        </m.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-12">
          {services.map((service, index) => {
            const config = bentoConfig[index]
            const Icon = config.icon
            const isLeft = index % 2 === 0
            return (
              <m.article
                key={service.title}
                initial={false}
                whileInView={
                  reducedMotion
                    ? undefined
                    : {
                        x: [isLeft ? -35 : 35, 0],
                        y: [20, 0],
                      }
                }
                viewport={{ once: false, amount: 0.15, margin: '200px 0px 0px 0px' }}
                transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                whileHover={
                  reducedMotion ? undefined : { x: -3, y: -3, transition: { duration: 0.15 } }
                }
                className={`flex min-w-0 flex-col border-2 border-border bg-card p-5 sm:p-6 ${config.shadowColor} ${config.span}`}>
                {/* Card Window Header */}
                <div className="mb-5 flex flex-wrap items-center justify-between gap-2 border-b-2 border-border/30 pb-3">
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1" aria-hidden="true">
                      <span className="size-2 rounded-full border border-border bg-neo-pink" />
                      <span className="size-2 rounded-full border border-border bg-neo-yellow" />
                      <span className="size-2 rounded-full border border-border bg-neo-lime" />
                    </div>
                    <span className="font-mono text-[10px] font-bold tracking-wider text-muted-foreground uppercase sm:text-xs">
                      {config.eyebrow}
                    </span>
                  </div>
                  <span
                    className={`border border-border px-2 py-0.5 font-mono text-[10px] font-extrabold sm:text-xs ${config.badgeColor}`}>
                    {config.badge}
                  </span>
                </div>

                {/* Main Service Info */}
                <div className="mb-4 flex flex-col items-start gap-3.5 sm:flex-row sm:items-start sm:gap-4">
                  <div
                    className={`flex size-14 shrink-0 items-center justify-center border-2 border-border shadow-neo ${config.accentColor}`}>
                    <Icon className="size-7" aria-hidden="true" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-display text-xl font-bold sm:text-2xl">{service.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Feature Pills */}
                <div className="my-4 flex flex-wrap gap-2">
                  {service.features.map((feature) => (
                    <span
                      key={feature}
                      className="inline-flex items-center gap-1.5 border border-border bg-muted/70 px-2.5 py-1 font-mono text-xs font-bold text-foreground">
                      <Check className="size-3.5 shrink-0 text-neo-lime" aria-hidden="true" />
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Inset Service Module */}
                {config.preview}
              </m.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
