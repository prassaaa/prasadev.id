import { ArrowUpRight, Mail, MapPin, MessageSquare, PhoneCall } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { SectionHeading } from '@/components/ui/section-heading'
import { site } from '@/content/site'

const icons = { mail: Mail, 'phone-call': PhoneCall }

export function Contact() {
  return (
    <section id="contact" className="section-shell bg-muted">
      <div className="site-container grid gap-12 lg:grid-cols-12">
        <div className="min-w-0 space-y-6 lg:col-span-5">
          <SectionHeading label={site.contact.eyebrow} accent="lime" className="mb-0">
            {site.contact.title}
          </SectionHeading>
          <p className="leading-relaxed text-muted-foreground">{site.contact.description}</p>
          <div className="space-y-4 pt-2">
            {[site.whatsapp, site.email].map((contact) => {
              const Icon = icons[contact.icon]
              return (
                <a
                  key={contact.href}
                  href={contact.href}
                  {...(contact.icon === 'phone-call'
                    ? { target: '_blank', rel: 'noopener noreferrer' }
                    : {})}
                  className="flex items-center gap-3 border-2 border-border bg-card p-4 shadow-neo hover:bg-background sm:gap-4">
                  <span className="flex size-11 shrink-0 items-center justify-center border-2 border-border bg-neo-cyan text-black">
                    <Icon className="size-6" aria-hidden="true" />
                  </span>
                  <span className="min-w-0">
                    <span className="block font-mono text-xs font-bold text-muted-foreground">
                      {contact.label}
                    </span>
                    <span className="block font-display text-base font-bold break-words sm:text-lg">
                      {contact.value}
                    </span>
                  </span>
                </a>
              )
            })}
            <div className="flex items-center gap-3 border-2 border-border bg-card p-4 shadow-neo sm:gap-4">
              <span className="flex size-11 shrink-0 items-center justify-center border-2 border-border bg-neo-yellow text-black">
                <MapPin className="size-6" aria-hidden="true" />
              </span>
              <div className="min-w-0">
                <p className="font-mono text-xs font-bold text-muted-foreground">
                  {site.contact.locationLabel}
                </p>
                <p className="font-display text-lg font-bold">{site.location}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="min-w-0 lg:col-span-7">
          <div className="border-2 border-border bg-card p-6 shadow-neo-cyan sm:p-10">
            <div className="mb-6 border-b-2 border-border/30 pb-6">
              <MessageSquare
                className="mb-6 size-14 border-2 border-border bg-neo-yellow p-3 text-black shadow-neo"
                aria-hidden="true"
              />
              <h3 className="font-display text-2xl font-extrabold sm:text-3xl">
                {site.contact.panelTitle}
              </h3>
            </div>
            <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
              {site.contact.panelDescription}
            </p>
            <div className="mt-8 flex flex-col items-start gap-5">
              <Button
                asChild
                size="lg"
                className="w-full bg-neo-lime whitespace-normal shadow-neo sm:w-auto">
                <a href={site.whatsapp.href} target="_blank" rel="noopener noreferrer">
                  <PhoneCall aria-hidden="true" />
                  Diskusi via WhatsApp
                  <ArrowUpRight aria-hidden="true" />
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="w-full whitespace-normal sm:w-auto">
                <a href={site.email.href}>
                  <Mail aria-hidden="true" />
                  Kirim Email
                </a>
              </Button>
              {site.socials.map((social) => (
                <Button
                  key={social.name}
                  asChild
                  variant="outline"
                  className="w-full whitespace-normal sm:w-auto">
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}>
                    Terhubung di {social.name}
                    <ArrowUpRight aria-hidden="true" />
                  </a>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
