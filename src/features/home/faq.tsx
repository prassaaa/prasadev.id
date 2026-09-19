import { useState } from 'react'
import { motion, useReducedMotion } from 'motion/react'
import { ChevronDown, Mail, MessageSquare, PhoneCall, Sparkles } from 'lucide-react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { SectionHeading } from '@/components/ui/section-heading'
import { Button } from '@/components/ui/button'
import { faqs, site } from '@/content/site'

const faqMeta = [
  {
    category: 'LINGKUP PROYEK',
    code: 'SCOPE',
    badge: 'bg-neo-yellow text-black',
    accentDot: 'bg-neo-yellow',
    shadow: 'hover:shadow-neo-yellow',
  },
  {
    category: 'AUDIT & UPGRADE',
    code: 'AUDIT',
    badge: 'bg-neo-cyan text-black',
    accentDot: 'bg-neo-cyan',
    shadow: 'hover:shadow-neo-cyan',
  },
  {
    category: 'BIAYA & WAKTU',
    code: 'ESTIMATE',
    badge: 'bg-neo-pink text-black',
    accentDot: 'bg-neo-pink',
    shadow: 'hover:shadow-neo-pink',
  },
  {
    category: 'REKRUTER & KARIR',
    code: 'CAREER',
    badge: 'bg-neo-lime text-black',
    accentDot: 'bg-neo-lime',
    shadow: 'hover:shadow-neo-lime',
  },
]

export function Faq() {
  const reducedMotion = useReducedMotion()
  const [activeFaq, setActiveFaq] = useState<string | undefined>(faqs[0]?.question)

  return (
    <section id="faq" className="section-shell overflow-hidden bg-muted">
      <div className="site-container">
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12 lg:gap-12">
          {/* Left Column: Heading, Subtitle & Direct Inquiry Deck */}
          <motion.div
            initial={reducedMotion ? false : { opacity: 0, x: -35 }}
            whileInView={reducedMotion ? undefined : { opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2, margin: '200px 0px 0px 0px' }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-6 lg:sticky lg:top-28 lg:col-span-5">
            <div>
              <SectionHeading label={site.faq.eyebrow} accent="pink">
                {site.faq.title}
              </SectionHeading>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                Ringkasan penjelasan seputar alur diskusi, ruang lingkup pengerjaan sistem, audit
                aplikasi eksisting, transparansi estimasi, hingga informasi untuk rekan recruiter.
              </p>
            </div>

            {/* Quick Inquiry Support Card */}
            <div className="border-2 border-border bg-card p-5 shadow-neo-cyan sm:p-6">
              <div className="mb-4 flex items-center justify-between border-b-2 border-border/30 pb-3 font-mono text-xs">
                <div className="flex items-center gap-1.5" aria-hidden="true">
                  <span className="size-2 rounded-full border border-border bg-neo-pink" />
                  <span className="size-2 rounded-full border border-border bg-neo-yellow" />
                  <span className="size-2 rounded-full border border-border bg-neo-lime" />
                  <span className="ml-1 text-[10px] font-bold text-muted-foreground">
                    FAST-TRACK // DIRECT
                  </span>
                </div>
                <span className="flex items-center gap-1 text-[10px] font-black text-neo-lime">
                  <span className="size-1.5 animate-pulse rounded-full bg-neo-lime" />
                  RESPONSIF
                </span>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <MessageSquare className="size-4 text-neo-yellow" aria-hidden="true" />
                  <h4 className="font-display text-base font-extrabold sm:text-lg">
                    Pertanyaan Belum Terjawab?
                  </h4>
                </div>
                <p className="text-xs leading-relaxed text-muted-foreground sm:text-sm">
                  Jika Anda memiliki studi kasus atau kebutuhan arsitektur spesifik, kirim pesan
                  singkat melalui WhatsApp atau email untuk respon cepat.
                </p>
              </div>

              <div className="mt-5 flex flex-wrap gap-2.5 pt-1">
                <Button
                  asChild
                  size="sm"
                  className="bg-neo-lime font-mono text-xs font-black text-black shadow-sm hover:bg-neo-lime/90">
                  <a
                    href={site.whatsapp.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5">
                    <PhoneCall className="size-3.5" aria-hidden="true" />
                    <span>WhatsApp</span>
                  </a>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="font-mono text-xs font-bold shadow-sm">
                  <a href={site.email.href} className="inline-flex items-center gap-1.5">
                    <Mail className="size-3.5" aria-hidden="true" />
                    <span>Kirim Email</span>
                  </a>
                </Button>
              </div>
            </div>

            {/* Quick Topics Pills */}
            <div className="flex flex-wrap items-center gap-1.5 font-mono text-[11px] font-bold">
              <span className="text-muted-foreground uppercase">Topik:</span>
              <span className="border border-border bg-muted/80 px-2 py-0.5">#LingkupSistem</span>
              <span className="border border-border bg-muted/80 px-2 py-0.5">#AuditAplikasi</span>
              <span className="border border-border bg-muted/80 px-2 py-0.5">#EstimasiBiaya</span>
              <span className="border border-border bg-muted/80 px-2 py-0.5">#RecruiterInfo</span>
            </div>
          </motion.div>

          {/* Right Column: Interactive Cyber-Brutalist Q&A Dossiers */}
          <div className="space-y-4 lg:col-span-7">
            <Accordion
              type="single"
              collapsible
              value={activeFaq}
              onValueChange={setActiveFaq}
              className="space-y-4">
              {faqs.map((faq, idx) => {
                const meta = faqMeta[idx] || faqMeta[0]
                const isOpen = activeFaq === faq.question

                return (
                  <motion.div
                    key={faq.question}
                    initial={reducedMotion ? false : { opacity: 0, x: 35, y: 15 }}
                    whileInView={reducedMotion ? undefined : { opacity: 1, x: 0, y: 0 }}
                    viewport={{ once: false, amount: 0.15, margin: '200px 0px 0px 0px' }}
                    transition={{ duration: 0.45, delay: idx * 0.08, ease: [0.22, 1, 0.36, 1] }}>
                    <AccordionItem
                      value={faq.question}
                      className={`group border-2 border-border bg-card shadow-neo ${meta.shadow} transition-shadow`}>
                      {/* Dossier Header Bar */}
                      <div className="flex flex-wrap items-center justify-between gap-2 border-b-2 border-border/30 bg-muted/50 px-4 py-2 font-mono text-xs sm:px-5">
                        <div className="flex items-center gap-2">
                          <span
                            className={`size-2 rounded-full ${meta.accentDot}`}
                            aria-hidden="true"
                          />
                          <span className="font-bold tracking-wider text-muted-foreground uppercase">
                            QUERY #{String(idx + 1).padStart(2, '0')} · {meta.code}
                          </span>
                        </div>
                        <span
                          className={`border border-border px-2 py-0.5 text-[10px] font-black uppercase shadow-sm ${meta.badge}`}>
                          {meta.category}
                        </span>
                      </div>

                      {/* Interactive Trigger */}
                      <AccordionTrigger className="flex items-center justify-between gap-4 px-4 py-4 text-left hover:bg-muted/30 sm:px-6 sm:py-5 [&>[data-slot=accordion-trigger-icon]]:hidden">
                        <span className="font-display text-base leading-snug font-extrabold sm:text-lg md:text-xl">
                          {faq.question}
                        </span>
                        <div
                          className={`flex size-8 shrink-0 items-center justify-center rounded-full border-2 border-border transition-colors sm:size-9 ${
                            isOpen ? 'bg-primary text-black' : 'bg-background text-foreground'
                          }`}>
                          <ChevronDown
                            className={`size-4 transition-transform duration-200 sm:size-5 ${
                              isOpen ? 'rotate-180' : ''
                            }`}
                            aria-hidden="true"
                          />
                        </div>
                      </AccordionTrigger>

                      {/* Expanded Content with Clean Typography */}
                      <AccordionContent className="border-t-2 border-border/20 px-4 pt-3 pb-5 text-sm leading-relaxed text-muted-foreground sm:px-6 sm:pb-6 sm:text-base">
                        <div className="space-y-3">
                          <p>{faq.answer}</p>
                          <div className="flex items-center gap-2 pt-1 font-mono text-xs font-bold text-foreground">
                            <Sparkles className="size-3.5 text-neo-yellow" aria-hidden="true" />
                            <span className="text-muted-foreground">Status Pembahasan:</span>
                            <span className="underline decoration-neo-lime decoration-2 underline-offset-4">
                              Terbuka untuk konsultasi
                            </span>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </motion.div>
                )
              })}
            </Accordion>

            {/* NoScript Fallback for SEO & pure HTML */}
            <noscript>
              <div className="mt-6 space-y-4">
                {faqs.map((faq) => (
                  <div key={faq.question} className="border-2 border-border bg-card p-6">
                    <h3 className="mb-3 font-display text-lg font-bold">{faq.question}</h3>
                    <p className="leading-relaxed text-muted-foreground">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </noscript>
          </div>
        </div>
      </div>
    </section>
  )
}
