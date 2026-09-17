import { useEffect } from 'react'
import { motion, stagger, useAnimate, useReducedMotion } from 'motion/react'
import { ExternalLink, Layers, Mail, MapPin, Terminal } from 'lucide-react'
import { Link } from 'react-router'
import { SiteImage } from '@/components/site-image'
import { Button } from '@/components/ui/button'
import { site } from '@/content/site'

const stackColors = [
  'bg-neo-yellow',
  'bg-neo-cyan',
  'bg-neo-pink',
  'bg-neo-lime',
  'bg-white',
  'bg-neo-orange',
]
const capabilityColors = [
  'border-border shadow-neo',
  'border-neo-cyan shadow-neo-cyan',
  'border-neo-lime shadow-neo-lime',
]

export function Hero() {
  const [scope, animate] = useAnimate()
  const reducedMotion = useReducedMotion()
  useEffect(() => {
    if (reducedMotion) return
    const controls = animate(
      '[data-hero-part]',
      { y: [16, 0] },
      { duration: 0.45, delay: stagger(0.06) },
    )
    return () => controls.stop()
  }, [animate, reducedMotion])
  return (
    <section
      id="hero"
      className="section-shell bg-grid-dots relative overflow-hidden bg-background">
      <motion.div
        ref={scope}
        initial={false}
        className="site-container grid items-center gap-12 lg:grid-cols-12">
        <div data-hero-part className="min-w-0 space-y-6 lg:col-span-7">
          <div className="inline-flex items-center gap-2 border-2 border-border bg-neo-pink px-3.5 py-1.5 font-mono text-xs font-bold text-black shadow-neo-cyan">
            <Terminal className="size-4 shrink-0" aria-hidden="true" />
            {site.role}
          </div>
          <h1 className="font-display text-4xl leading-[1.08] font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            {site.headline}
          </h1>
          <p className="max-w-2xl text-lg leading-relaxed font-medium text-muted-foreground sm:text-xl">
            {site.summary}
          </p>
          <dl className="grid grid-cols-3 gap-3 py-3 sm:gap-4">
            {site.capabilities.map((capability, index) => (
              <div
                key={capability.title}
                className={`min-w-0 border-2 bg-card p-2.5 sm:p-3.5 ${capabilityColors[index]}`}>
                <dt className="font-display text-base font-extrabold sm:text-2xl">
                  {capability.title}
                </dt>
                <dd className="mt-1 text-[10px] font-bold text-muted-foreground sm:text-sm">
                  {capability.label}
                </dd>
              </div>
            ))}
          </dl>
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Button asChild size="lg">
              <Link to="/#portfolio">
                <Layers aria-hidden="true" /> Lihat Proyek
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/#contact">
                <Mail aria-hidden="true" /> Mari Berdiskusi
              </Link>
            </Button>
            {site.socials.slice(0, 2).map((social) => (
              <Button key={social.name} asChild variant="outline">
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}>
                  {social.name}
                  <ExternalLink aria-hidden="true" />
                </a>
              </Button>
            ))}
          </div>
        </div>
        <div data-hero-part className="min-w-0 px-3 lg:col-span-5">
          <div className="relative mx-auto max-w-md lg:max-w-none">
            <div
              aria-hidden="true"
              className="absolute -top-3 -right-2 size-full -rotate-2 border-2 border-border bg-neo-purple"
            />
            <div
              aria-hidden="true"
              className="absolute -bottom-3 -left-2 size-full rotate-2 border-2 border-border bg-neo-yellow"
            />
            <div className="relative space-y-4 border-2 border-border bg-card p-4 shadow-neo-cyan sm:p-5">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b-2 border-border/40 pb-3 font-mono text-[10px] font-bold sm:text-xs">
                <div className="flex items-center gap-1.5">
                  <span
                    aria-hidden="true"
                    className="size-3 rounded-full border border-border bg-red-500"
                  />
                  <span
                    aria-hidden="true"
                    className="size-3 rounded-full border border-border bg-neo-yellow"
                  />
                  <span
                    aria-hidden="true"
                    className="size-3 rounded-full border border-border bg-neo-lime"
                  />
                  <span className="ml-1">{site.terminal.prompt}</span>
                </div>
                <span className="bg-neo-lime px-2 py-0.5 text-black">{site.terminal.status} ●</span>
              </div>
              <div className="relative border-2 border-border">
                <SiteImage {...site.portrait} natural loading="eager" fetchPriority="high" />
                <div className="absolute bottom-2 left-2 flex max-w-[calc(100%-1rem)] items-center gap-1.5 border border-neo-yellow bg-black px-2 py-1 font-mono text-[10px] font-bold text-neo-yellow">
                  <MapPin className="size-3 shrink-0" aria-hidden="true" />
                  {site.terminal.location}
                </div>
              </div>
              <div>
                <p className="mb-2 font-mono text-xs font-bold text-muted-foreground uppercase">
                  {site.terminal.stackLabel}
                </p>
                <ul className="flex flex-wrap gap-1.5">
                  {site.stack.map((tag, index) => (
                    <li
                      key={tag}
                      className={`border border-border px-2 py-1 font-mono text-[11px] font-bold text-black ${stackColors[index]}`}>
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
