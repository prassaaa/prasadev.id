import { GraduationCap } from 'lucide-react'
import { SectionHeading } from '@/components/ui/section-heading'
import { education, site } from '@/content/site'

const shadows = ['shadow-neo-cyan', 'shadow-neo-pink', 'shadow-neo-lime']

export function Education() {
  return (
    <section id="education" className="section-shell bg-muted">
      <div className="site-container">
        <SectionHeading label={site.education.eyebrow}>{site.education.title}</SectionHeading>
        <div className="mb-8 flex flex-col gap-4 border-2 border-border bg-card p-6 shadow-neo-cyan sm:flex-row sm:items-center sm:p-8">
          <GraduationCap className="size-14 shrink-0 border-2 border-border bg-neo-yellow p-3 text-black" aria-hidden="true" />
          <div className="min-w-0"><p className="font-mono text-sm font-bold text-muted-foreground">{education.period} · {education.gpa}</p><h3 className="mt-2 font-display text-2xl font-bold">{education.degree}</h3><p className="mt-1 text-muted-foreground">{education.institution}</p></div>
        </div>
        <div className="grid gap-6 md:grid-cols-3">{education.contributions.map((item, index) => <article key={item.title} className={`min-w-0 border-2 border-border bg-card p-6 ${shadows[index]}`}><h3 className="font-display text-xl font-bold">{item.title}</h3><p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">{item.description}</p></article>)}</div>
        <div className="mt-10 border-2 border-border bg-card p-6 sm:p-8"><h3 className="mb-6 font-display text-2xl font-bold">Pengalaman Organisasi</h3><ul className="space-y-5">{education.organizations.map((item) => <li key={item.name} className="border-l-2 border-neo-pink pl-4"><p className="font-mono text-xs font-bold text-muted-foreground">{item.period}</p><h4 className="mt-1 font-bold">{item.role}</h4><p className="mt-1 text-sm text-muted-foreground">{item.name}</p></li>)}</ul></div>
      </div>
    </section>
  )
}
