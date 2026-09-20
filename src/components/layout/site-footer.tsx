import { ArrowUpRight, Mail, PhoneCall } from 'lucide-react'
import { motion, useReducedMotion } from 'motion/react'
import { Link } from 'react-router'
import { site } from '@/content/site'
import brandSvgUrl from '@/assets/brand.svg'
import { SocialIcon } from '@/components/ui/social-icons'

export function SiteFooter() {
  const reducedMotion = useReducedMotion()

  return (
    <footer className="border-t-2 border-border bg-background pt-14 pb-10">
      <div className="site-container">
        {/* Main Grid: Clean & Modern Multi-Column */}
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 25 }}
          whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2, margin: '100px 0px 0px 0px' }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-1 gap-10 pb-12 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {/* Brand Column (5 cols) */}
          <div className="space-y-4 lg:col-span-5">
            <Link
              to="/#hero"
              className="inline-flex items-center gap-2.5 font-display text-2xl font-black tracking-tight"
              aria-label={`${site.brand} — kembali ke beranda`}>
              <span className="flex size-9 shrink-0 items-center justify-center border-2 border-border bg-background p-1 shadow-neo">
                <img
                  src={brandSvgUrl}
                  alt=""
                  width={489}
                  height={510}
                  loading="lazy"
                  decoding="async"
                  className="size-full object-contain"
                />
              </span>
              <span className="text-foreground">{site.brand}</span>
            </Link>

            <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
              {site.footer.description}
            </p>

            {/* Quick Contact Chips */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <a
                href={site.whatsapp.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 border border-border bg-card px-3 py-1.5 font-mono text-xs font-bold transition-colors hover:bg-neo-lime hover:text-black">
                <PhoneCall className="size-3.5" />
                <span>WhatsApp</span>
                <ArrowUpRight className="size-3" />
              </a>

              <a
                href={site.email.href}
                className="inline-flex items-center gap-1.5 border border-border bg-card px-3 py-1.5 font-mono text-xs font-bold transition-colors hover:bg-neo-cyan hover:text-black">
                <Mail className="size-3.5" />
                <span>Email</span>
                <ArrowUpRight className="size-3" />
              </a>

              {site.socials.map((social) => {
                const hoverClass =
                  social.name === 'GitHub'
                    ? 'hover:bg-neo-yellow hover:text-black'
                    : 'hover:bg-neo-pink hover:text-black'
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-1.5 border border-border bg-card px-3 py-1.5 font-mono text-xs font-bold transition-colors ${hoverClass}`}>
                    <SocialIcon name={social.icon} className="size-3.5" />
                    <span>{social.name}</span>
                    <ArrowUpRight className="size-3" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Navigation Column (3 cols) */}
          <div className="space-y-3 lg:col-span-3 lg:pl-4">
            <p className="font-mono text-xs font-bold tracking-wider text-muted-foreground uppercase">
              {site.footer.navigationTitle}
            </p>
            <ul className="space-y-2 text-sm">
              {site.footer.navigation.map((nav) => (
                <li key={nav.href}>
                  <Link
                    to={nav.href}
                    className="font-medium text-muted-foreground transition-colors hover:text-foreground hover:underline">
                    {nav.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Technology Column (2 cols) */}
          <div className="space-y-3 lg:col-span-2">
            <p className="font-mono text-xs font-bold tracking-wider text-muted-foreground uppercase">
              {site.footer.technologyTitle}
            </p>
            <ul className="space-y-2 font-mono text-xs text-muted-foreground">
              {site.footer.technologies.map((tech) => (
                <li key={tech} className="transition-colors hover:text-foreground">
                  {tech}
                </li>
              ))}
            </ul>
          </div>

          {/* Location & Status Column (2 cols) */}
          <div className="space-y-3 lg:col-span-2">
            <p className="font-mono text-xs font-bold tracking-wider text-muted-foreground uppercase">
              Lokasi & Status
            </p>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p className="font-medium text-foreground">{site.location}, Indonesia</p>
              <p className="font-mono text-xs">{site.timezone}</p>
              <div className="flex items-center gap-2 pt-1 font-mono text-xs text-neo-lime">
                <span
                  className="size-2 animate-pulse rounded-full bg-neo-lime"
                  aria-hidden="true"
                />
                <span className="font-bold">Tersedia untuk proyek</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar: Copyright & Location */}
        <div className="flex flex-col items-center justify-between gap-3 border-t border-border/30 pt-6 text-xs text-muted-foreground sm:flex-row">
          <p className="font-mono">{site.footer.copyright}</p>
          <p className="font-mono">Software Engineer · Web & Mobile</p>
        </div>
      </div>
    </footer>
  )
}
