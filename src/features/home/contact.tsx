import { ArrowUpRight, Compass, Mail, MapPin, MessageSquare, PhoneCall } from 'lucide-react'
import { SiteImage } from '@/components/site-image'
import { Button } from '@/components/ui/button'
import { SectionHeading } from '@/components/ui/section-heading'
import { site } from '@/content/site'

const icons = { mail: Mail, 'phone-call': PhoneCall }

export function Contact() {
  return (
    <section id="contact" className="section-shell bg-muted">
      <div className="site-container grid gap-12 lg:grid-cols-12">
        <div className="min-w-0 space-y-6 lg:col-span-5">
          <SectionHeading label={site.contact.eyebrow} accent="lime" className="mb-0">{site.contact.title}</SectionHeading>
          <p className="leading-relaxed text-muted-foreground">{site.contact.description}</p>
          <div className="space-y-4 pt-2">
            {[site.whatsapp, site.email].map((contact) => { const Icon = icons[contact.icon]; return <a key={contact.href} href={contact.href} {...(contact.icon === 'phone-call' ? { target: '_blank', rel: 'noopener noreferrer' } : {})} className="flex items-center gap-3 border-2 border-border bg-card p-4 shadow-neo hover:bg-background sm:gap-4"><span className="flex size-11 shrink-0 items-center justify-center border-2 border-border bg-neo-cyan text-black"><Icon className="size-6" aria-hidden="true" /></span><span className="min-w-0"><span className="block font-mono text-xs font-bold text-muted-foreground">{contact.label}</span><span className="block break-words font-display text-base font-bold sm:text-lg">{contact.value}</span></span></a> })}
            <div className="flex items-center gap-3 border-2 border-border bg-card p-4 shadow-neo sm:gap-4"><span className="flex size-11 shrink-0 items-center justify-center border-2 border-border bg-neo-yellow text-black"><MapPin className="size-6" aria-hidden="true" /></span><div className="min-w-0"><p className="font-mono text-xs font-bold text-muted-foreground">{site.contact.locationLabel}</p><p className="font-display text-lg font-bold">{site.location}</p></div></div>
          </div>
          <div className="border-2 border-border bg-card p-4"><div className="mb-2 flex flex-wrap items-center justify-between gap-2 font-mono text-[10px] font-bold"><span className="flex items-center gap-1"><Compass className="size-3.5" aria-hidden="true" />{site.contact.coordinates}</span><span className="border border-border bg-neo-yellow px-1.5 py-0.5 text-black">{site.timezone}</span></div><div className="relative border-2 border-border"><SiteImage {...site.contact.map} loading="lazy" className="aspect-[5/2] [&_img]:grayscale [&_img]:contrast-150" /><div className="absolute inset-0 flex items-center justify-center p-2"><span className="flex items-center gap-1.5 border-2 border-border bg-neo-pink px-3 py-1.5 text-center text-xs font-bold text-black shadow-neo"><MapPin className="size-4 shrink-0" aria-hidden="true" />{site.contact.mapLabel} — contoh</span></div></div></div>
        </div>
        <div className="min-w-0 lg:col-span-7">
          <div className="border-2 border-border bg-card p-6 shadow-neo-cyan sm:p-10">
            <div className="mb-6 border-b-2 border-border/30 pb-6"><MessageSquare className="mb-6 size-14 border-2 border-border bg-neo-yellow p-3 text-black shadow-neo" aria-hidden="true" /><h3 className="font-display text-2xl font-extrabold sm:text-3xl">{site.contact.panelTitle}</h3></div>
            <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">{site.contact.panelDescription}</p>
            <div className="mt-8 flex flex-col items-start gap-5">
              <Button asChild size="lg" className="w-full whitespace-normal bg-neo-lime shadow-neo sm:w-auto"><a href={site.whatsapp.href} target="_blank" rel="noopener noreferrer"><PhoneCall aria-hidden="true" />WhatsApp — kontak contoh<ArrowUpRight aria-hidden="true" /></a></Button>
              <Button asChild size="lg" variant="outline" className="w-full whitespace-normal sm:w-auto"><a href={site.email.href}><Mail aria-hidden="true" />Email — kontak contoh</a></Button>
            </div>
            <p className="mt-8 border-t-2 border-border/20 pt-6 font-mono text-xs leading-relaxed text-muted-foreground">{site.demoNotice}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
