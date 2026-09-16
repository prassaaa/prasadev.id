import { Star } from 'lucide-react'
import { SiteImage } from '@/components/site-image'
import { SectionHeading } from '@/components/ui/section-heading'
import { site, testimonials } from '@/content/site'

const shadows = { cyan: 'shadow-neo-cyan', pink: 'shadow-neo-pink', lime: 'shadow-neo-lime' }
const borders = { cyan: 'border-neo-cyan', pink: 'border-neo-pink', lime: 'border-neo-lime' }

export function Testimonials() {
  return (
    <section id="testimonials" className="section-shell bg-muted">
      <div className="site-container">
        <SectionHeading label={site.testimonials.eyebrow} className="mx-auto max-w-2xl text-center">{site.testimonials.title}</SectionHeading>
        <div className="grid gap-6 md:grid-cols-3">{testimonials.map((testimonial) => <figure key={testimonial.name} className={`flex min-w-0 flex-col justify-between border-2 border-border bg-card p-6 ${shadows[testimonial.accent]}`}>
          <div><div className="mb-4 flex gap-1" role="img" aria-label={`${testimonial.rating} dari 5 bintang — testimoni contoh`}>{Array.from({ length: testimonial.rating }, (_, index) => <Star key={index} className="size-5 fill-neo-yellow text-foreground" aria-hidden="true" />)}</div><blockquote className="text-sm leading-relaxed font-medium italic sm:text-base">“{testimonial.quote}”</blockquote></div>
          <figcaption className="mt-6 flex items-center gap-3 border-t-2 border-border/20 pt-4"><SiteImage {...testimonial.avatar} loading="lazy" className={`aspect-square w-12 shrink-0 rounded-full border-2 ${borders[testimonial.accent]}`} /><div className="min-w-0"><p className="font-display text-base font-bold">{testimonial.name}</p><p className="font-mono text-xs font-bold text-muted-foreground">{testimonial.role}</p></div></figcaption>
        </figure>)}</div>
      </div>
    </section>
  )
}
