import { SectionHeading } from '@/components/ui/section-heading'
import { experience, site } from '@/content/site'

const shadows = { yellow: 'shadow-neo-cyan', pink: 'shadow-neo-pink', cyan: 'shadow-neo-lime' }

export function Experience() {
  return (
    <section id="experience" className="section-shell bg-background">
      <div className="site-container">
        <SectionHeading label={site.experience.eyebrow} accent="purple">
          {site.experience.title}
        </SectionHeading>
        <ol className="space-y-6">
          {experience.map((item) => (
            <li
              key={item.company}
              className={`grid gap-6 border-2 border-border bg-card p-6 sm:p-8 md:grid-cols-12 ${shadows[item.accent]}`}>
              <div className="min-w-0 md:col-span-3">
                <p className="font-mono text-xs font-bold text-muted-foreground">{item.location}</p>
              </div>
              <div className="min-w-0 space-y-3 md:col-span-9">
                <div className="flex flex-col items-start gap-2">
                  <h3 className="font-display text-2xl font-bold">{item.company}</h3>
                  <span className="max-w-full border border-border bg-neo-cyan px-2.5 py-0.5 text-sm font-bold text-black">
                    {item.title}
                  </span>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {item.description}
                </p>
                <ul className="flex flex-wrap gap-2 pt-2">
                  {item.tags.map((tag) => (
                    <li key={tag} className="tag">
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
