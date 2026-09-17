import { Activity, ArrowRight, Check, Code2, Palette, Sparkles } from 'lucide-react'
import { Link } from 'react-router'
import { Button } from '@/components/ui/button'
import { SectionHeading } from '@/components/ui/section-heading'
import { services, site } from '@/content/site'

const icons = { 'code-2': Code2, palette: Palette, activity: Activity, sparkles: Sparkles }
const colors = {
  yellow: 'bg-neo-yellow',
  pink: 'bg-neo-pink',
  cyan: 'bg-neo-cyan',
  lime: 'bg-neo-lime',
}
const shadows = {
  yellow: 'shadow-neo-cyan',
  pink: 'shadow-neo-pink',
  cyan: 'shadow-neo-cyan',
  lime: 'shadow-neo-lime',
}

export function Services() {
  return (
    <section id="services" className="section-shell bg-background">
      <div className="site-container">
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
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
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => {
            const Icon = icons[service.icon]
            return (
              <article
                key={service.title}
                className={`flex min-w-0 flex-col border-2 border-border bg-card p-6 ${shadows[service.accent]}`}>
                <div
                  className={`mb-4 flex size-14 items-center justify-center border-2 border-border text-black shadow-neo ${colors[service.accent]}`}>
                  <Icon className="size-7" aria-hidden="true" />
                </div>
                <h3 className="font-display text-xl font-bold">{service.title}</h3>
                <p className="my-4 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
                <ul className="space-y-1.5 border-t-2 border-border/20 pt-3 font-mono text-xs font-bold text-muted-foreground">
                  {service.features.map((feature) => (
                    <li className="flex items-start gap-1.5" key={feature}>
                      <Check className="mt-0.5 size-3.5 shrink-0" aria-hidden="true" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
