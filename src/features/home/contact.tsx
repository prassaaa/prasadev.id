import { useState } from 'react'
import { motion, useReducedMotion } from 'motion/react'
import {
  ArrowUpRight,
  Check,
  Clock,
  Copy,
  Mail,
  MapPin,
  MessageSquare,
  PhoneCall,
  Sparkles,
  Workflow,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { SectionHeading } from '@/components/ui/section-heading'
import { site } from '@/content/site'
import { SocialIcon } from '@/components/ui/social-icons'

const consultationSteps = [
  {
    step: '01',
    title: 'Kebutuhan & Alur Kerja',
    desc: 'Ceritakan proses operasional yang ingin didukung atau fitur aplikasi yang Anda perlukan.',
    accent: 'border-neo-yellow text-neo-yellow',
  },
  {
    step: '02',
    title: 'Pemetaan Arsitektur',
    desc: 'Penentuan platform dan stack yang tepat: Web Dashboard, Laravel API, atau Mobile Flutter.',
    accent: 'border-neo-cyan text-neo-cyan',
  },
  {
    step: '03',
    title: 'Ruang Lingkup & Estimasi',
    desc: 'Pembahasan modul kerja, batasan sistem, serta estimasi waktu dan biaya yang transparan.',
    accent: 'border-neo-pink text-neo-pink',
  },
  {
    step: '04',
    title: 'Pengembangan & Delivery',
    desc: 'Pengerjaan modular dengan validasi berkala hingga sistem siap beroperasi untuk kerja.',
    accent: 'border-neo-lime text-neo-lime',
  },
]

export function Contact() {
  const reducedMotion = useReducedMotion()
  const [copiedKey, setCopiedKey] = useState<string | null>(null)

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard?.writeText(text)
    setCopiedKey(key)
    setTimeout(() => setCopiedKey(null), 2000)
  }

  return (
    <section id="contact" className="section-shell overflow-hidden bg-muted">
      <div className="site-container">
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12 lg:gap-12">
          {/* Left Column: Heading & Interactive Direct Channels */}
          <div className="space-y-6 lg:col-span-5">
            <motion.div
              initial={reducedMotion ? false : { opacity: 0, x: -35 }}
              whileInView={reducedMotion ? undefined : { opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.2, margin: '200px 0px 0px 0px' }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}>
              <SectionHeading label={site.contact.eyebrow} accent="lime">
                {site.contact.title}
              </SectionHeading>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                {site.contact.description}
              </p>
            </motion.div>

            {/* Direct Channel Cards Deck */}
            <div className="space-y-4">
              {/* 1. WhatsApp Card */}
              <motion.div
                initial={reducedMotion ? false : { opacity: 0, x: -35, y: 15 }}
                whileInView={reducedMotion ? undefined : { opacity: 1, x: 0, y: 0 }}
                viewport={{ once: false, amount: 0.15, margin: '200px 0px 0px 0px' }}
                transition={{ duration: 0.45, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}>
                <article className="border-2 border-border bg-card p-4 shadow-neo transition-all hover:shadow-neo-lime sm:p-5">
                  <div className="mb-3 flex items-center justify-between border-b border-border/30 pb-2.5 font-mono text-xs">
                    <div className="flex items-center gap-1.5">
                      <span className="size-2 rounded-full bg-neo-lime" aria-hidden="true" />
                      <span className="font-bold tracking-wider text-muted-foreground uppercase">
                        CHANNEL #01 · DIRECT CHAT
                      </span>
                    </div>
                    <span className="border border-border bg-neo-lime px-2 py-0.5 font-mono text-[10px] font-black text-black uppercase shadow-sm">
                      ● RESPON CEPAT
                    </span>
                  </div>

                  <div className="flex items-center justify-between gap-3">
                    <div className="flex min-w-0 flex-1 items-center gap-2.5 sm:gap-3">
                      <span className="flex size-9 shrink-0 items-center justify-center border-2 border-border bg-neo-lime text-black shadow-sm sm:size-11">
                        <PhoneCall className="size-4 sm:size-5" aria-hidden="true" />
                      </span>
                      <div className="min-w-0 flex-1">
                        <span className="block font-mono text-[10px] font-bold text-muted-foreground uppercase sm:text-[11px]">
                          Nomor WhatsApp
                        </span>
                        <a
                          href={site.whatsapp.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block truncate font-mono text-xs font-bold hover:text-neo-lime hover:underline sm:font-display sm:text-base sm:font-extrabold md:text-lg">
                          {site.whatsapp.value}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5">
                      <button
                        type="button"
                        onClick={() => handleCopy(site.whatsapp.value, 'wa')}
                        aria-label="Salin nomor WhatsApp"
                        className="flex size-8 items-center justify-center border border-border bg-muted text-foreground transition-colors hover:bg-background sm:size-9">
                        {copiedKey === 'wa' ? (
                          <Check className="size-4 text-neo-lime" />
                        ) : (
                          <Copy className="size-4 text-muted-foreground" />
                        )}
                      </button>
                      <a
                        href={site.whatsapp.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Buka obrolan WhatsApp"
                        className="flex size-8 items-center justify-center border border-border bg-neo-lime text-black transition-transform hover:scale-105 sm:size-9">
                        <ArrowUpRight className="size-4" />
                      </a>
                    </div>
                  </div>
                </article>
              </motion.div>

              {/* 2. Email Card */}
              <motion.div
                initial={reducedMotion ? false : { opacity: 0, x: -35, y: 15 }}
                whileInView={reducedMotion ? undefined : { opacity: 1, x: 0, y: 0 }}
                viewport={{ once: false, amount: 0.15, margin: '200px 0px 0px 0px' }}
                transition={{ duration: 0.45, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}>
                <article className="border-2 border-border bg-card p-4 shadow-neo transition-all hover:shadow-neo-cyan sm:p-5">
                  <div className="mb-3 flex items-center justify-between border-b border-border/30 pb-2.5 font-mono text-xs">
                    <div className="flex items-center gap-1.5">
                      <span className="size-2 rounded-full bg-neo-cyan" aria-hidden="true" />
                      <span className="font-bold tracking-wider text-muted-foreground uppercase">
                        CHANNEL #02 · EMAIL RESMI
                      </span>
                    </div>
                    <span className="border border-border bg-neo-cyan px-2 py-0.5 font-mono text-[10px] font-black text-black uppercase shadow-sm">
                      OFFICIAL
                    </span>
                  </div>

                  <div className="flex items-center justify-between gap-3">
                    <div className="flex min-w-0 flex-1 items-center gap-2.5 sm:gap-3">
                      <span className="flex size-9 shrink-0 items-center justify-center border-2 border-border bg-neo-cyan text-black shadow-sm sm:size-11">
                        <Mail className="size-4 sm:size-5" aria-hidden="true" />
                      </span>
                      <div className="min-w-0 flex-1">
                        <span className="block font-mono text-[10px] font-bold text-muted-foreground uppercase sm:text-[11px]">
                          Alamat Surel
                        </span>
                        <a
                          href={site.email.href}
                          className="block truncate font-mono text-xs font-bold hover:text-neo-cyan hover:underline sm:font-display sm:text-base sm:font-extrabold md:text-lg">
                          {site.email.value}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5">
                      <button
                        type="button"
                        onClick={() => handleCopy(site.email.value, 'email')}
                        aria-label="Salin alamat email"
                        className="flex size-8 items-center justify-center border border-border bg-muted text-foreground transition-colors hover:bg-background sm:size-9">
                        {copiedKey === 'email' ? (
                          <Check className="size-4 text-neo-cyan" />
                        ) : (
                          <Copy className="size-4 text-muted-foreground" />
                        )}
                      </button>
                      <a
                        href={site.email.href}
                        aria-label="Kirim surel baru"
                        className="flex size-8 items-center justify-center border border-border bg-neo-cyan text-black transition-transform hover:scale-105 sm:size-9">
                        <ArrowUpRight className="size-4" />
                      </a>
                    </div>
                  </div>
                </article>
              </motion.div>

              {/* 3. Basecamp Location & Timezone Card */}
              <motion.div
                initial={reducedMotion ? false : { opacity: 0, x: -35, y: 15 }}
                whileInView={reducedMotion ? undefined : { opacity: 1, x: 0, y: 0 }}
                viewport={{ once: false, amount: 0.15, margin: '200px 0px 0px 0px' }}
                transition={{ duration: 0.45, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}>
                <article className="border-2 border-border bg-card p-4 shadow-neo transition-all hover:shadow-neo-yellow sm:p-5">
                  <div className="mb-3 flex items-center justify-between border-b border-border/30 pb-2.5 font-mono text-xs">
                    <div className="flex items-center gap-1.5">
                      <span className="size-2 rounded-full bg-neo-yellow" aria-hidden="true" />
                      <span className="font-bold tracking-wider text-muted-foreground uppercase">
                        BASECAMP · KEDIRI, JAWA TIMUR
                      </span>
                    </div>
                    <span className="border border-border bg-neo-yellow px-2 py-0.5 font-mono text-[10px] font-black text-black uppercase shadow-sm">
                      {site.timezone}
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="flex size-10 shrink-0 items-center justify-center border-2 border-border bg-neo-yellow text-black shadow-sm sm:size-11">
                      <MapPin className="size-5" aria-hidden="true" />
                    </span>
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-2">
                        <h4 className="font-display text-base font-extrabold sm:text-lg">
                          {site.location}, Indonesia
                        </h4>
                        <span className="inline-flex items-center gap-1 font-mono text-[10px] font-bold text-neo-lime">
                          <Clock className="size-3" aria-hidden="true" />
                          <span>Senin – Sabtu</span>
                        </span>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        Terbuka untuk kolaborasi jarak jauh (remote) maupun koordinasi tatap muka.
                      </p>
                    </div>
                  </div>
                </article>
              </motion.div>
            </div>
          </div>

          {/* Right Column: Interactive Consultation Dispatch Blueprint */}
          <div className="min-w-0 lg:col-span-7">
            <motion.div
              initial={reducedMotion ? false : { opacity: 0, x: 35 }}
              whileInView={reducedMotion ? undefined : { opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.15, margin: '200px 0px 0px 0px' }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="border-2 border-border bg-card p-5 shadow-neo-cyan sm:p-8 md:p-10">
              {/* Window Header Bar */}
              <div className="mb-6 flex flex-wrap items-center justify-between gap-3 border-b-2 border-border/30 pb-4 font-mono text-xs">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1" aria-hidden="true">
                    <span className="size-2 rounded-full border border-border bg-neo-pink" />
                    <span className="size-2 rounded-full border border-border bg-neo-yellow" />
                    <span className="size-2 rounded-full border border-border bg-neo-lime" />
                  </div>
                  <span className="text-[10px] font-bold tracking-wider text-muted-foreground uppercase sm:text-xs">
                    DISPATCH // CONSULTATION PROTOCOL
                  </span>
                </div>
                <span className="flex items-center gap-1.5 border border-border bg-neo-lime px-2.5 py-0.5 font-mono text-[10px] font-black text-black uppercase shadow-sm">
                  <span className="size-1.5 animate-pulse rounded-full bg-black" />
                  SIAP BERDISKUSI
                </span>
              </div>

              {/* Title & Description */}
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="flex size-11 shrink-0 items-center justify-center border-2 border-border bg-neo-yellow text-black shadow-neo">
                    <MessageSquare className="size-6" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="font-display text-2xl font-extrabold sm:text-3xl">
                      {site.contact.panelTitle}
                    </h3>
                    <p className="font-mono text-xs font-bold text-muted-foreground">
                      Langkah Awal Sebelum Kesepakatan Proyek
                    </p>
                  </div>
                </div>

                <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {site.contact.panelDescription}
                </p>
              </div>

              {/* 4-Step Consultation Blueprint */}
              <div className="my-8 border-y-2 border-border/20 py-6">
                <div className="mb-4 flex items-center gap-2 font-mono text-xs font-bold text-muted-foreground uppercase">
                  <Workflow className="size-4 text-neo-cyan" aria-hidden="true" />
                  <span>Tahapan Diskusi Terstruktur:</span>
                </div>

                <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
                  {consultationSteps.map((step) => (
                    <div
                      key={step.step}
                      className="border-2 border-border/40 bg-muted/40 p-3.5 transition-colors hover:border-border hover:bg-background">
                      <div className="mb-1.5 flex items-center justify-between font-mono text-xs">
                        <span className="font-display text-base font-black text-foreground">
                          {step.title}
                        </span>
                        <span
                          className={`py-0.2 border px-1.5 font-mono text-[10px] font-black ${step.accent}`}>
                          {step.step}
                        </span>
                      </div>
                      <p className="text-xs leading-relaxed text-muted-foreground">{step.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons Row */}
              <div className="space-y-4">
                <div className="flex flex-wrap items-center gap-3">
                  <Button
                    asChild
                    size="lg"
                    className="group bg-neo-lime text-sm font-bold text-black shadow-neo hover:bg-neo-lime/90 sm:text-base">
                    <a href={site.whatsapp.href} target="_blank" rel="noopener noreferrer">
                      <PhoneCall className="size-4.5" aria-hidden="true" />
                      <span>Diskusi via WhatsApp</span>
                      <ArrowUpRight
                        className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        aria-hidden="true"
                      />
                    </a>
                  </Button>

                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="group text-sm font-bold shadow-neo hover:bg-background sm:text-base">
                    <a href={site.email.href}>
                      <Mail className="size-4.5" aria-hidden="true" />
                      <span>Kirim Surel Langsung</span>
                    </a>
                  </Button>
                </div>

                {/* Social Connect Link */}
                <div className="flex flex-wrap items-center gap-3 pt-2 font-mono text-xs">
                  <span className="text-muted-foreground">Profil Profesional:</span>
                  {site.socials.map((social) => {
                    const hoverClass =
                      social.name === 'GitHub'
                        ? 'hover:bg-neo-yellow hover:text-black hover:shadow-neo-yellow'
                        : 'hover:bg-neo-pink hover:text-black hover:shadow-neo-pink'
                    return (
                      <a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center gap-1.5 border border-border bg-background px-2.5 py-1 font-bold text-foreground shadow-sm transition-all ${hoverClass}`}>
                        <SocialIcon name={social.icon} className="size-3.5" />
                        <span>{social.label}</span>
                        <ArrowUpRight className="size-3" aria-hidden="true" />
                      </a>
                    )
                  })}
                </div>
              </div>

              {/* Terminal Bottom Telemetry */}
              <div className="mt-8 flex flex-wrap items-center justify-between gap-2 border-t-2 border-border/20 pt-4 font-mono text-[10px] text-muted-foreground sm:text-[11px]">
                <div className="flex items-center gap-1.5">
                  <Sparkles className="size-3.5 text-neo-yellow" aria-hidden="true" />
                  <span>STATUS: SIAP BERKOLABORASI</span>
                </div>
                <span>SOFTWARE DEVELOPER · KEDIRI, ID</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
