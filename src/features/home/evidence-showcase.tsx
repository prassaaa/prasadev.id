import { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'motion/react'
import { Award, Camera, Check, ExternalLink, FileCheck, Maximize2, Sparkles, X } from 'lucide-react'
import { SectionHeading } from '@/components/ui/section-heading'
import { evidenceItems, site } from '@/content/site'

type EvidenceType = 'all' | 'certificate' | 'documentation'

const typeFilters: { value: EvidenceType; label: string }[] = [
  { value: 'all', label: 'Semua Bukti' },
  { value: 'certificate', label: 'Sertifikat Resmi' },
  { value: 'documentation', label: 'Dokumentasi Lapangan' },
]

const accentStyles = {
  yellow: {
    badge: 'bg-neo-yellow text-black',
    borderGlow: 'border-neo-yellow',
    shadow: 'shadow-neo-cyan',
    icon: Award,
  },
  cyan: {
    badge: 'bg-neo-cyan text-black',
    borderGlow: 'border-neo-cyan',
    shadow: 'shadow-neo-lime',
    icon: Camera,
  },
  lime: {
    badge: 'bg-neo-lime text-black',
    borderGlow: 'border-neo-lime',
    shadow: 'shadow-neo',
    icon: FileCheck,
  },
  pink: {
    badge: 'bg-neo-pink text-black',
    borderGlow: 'border-neo-pink',
    shadow: 'shadow-neo-pink',
    icon: Sparkles,
  },
} as const

type EvidenceItem = (typeof evidenceItems)[number]

export function EvidenceShowcase() {
  const reducedMotion = useReducedMotion()
  const [activeFilter, setActiveFilter] = useState<EvidenceType>('all')
  const [selectedItem, setSelectedItem] = useState<EvidenceItem | null>(null)
  const [highlightedId, setHighlightedId] = useState<string | null>(null)

  // Detect anchor hash in URL for targeted glow
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '')
      if (hash && hash.startsWith('evidence-')) {
        setHighlightedId(hash)
        const el = document.getElementById(hash)
        if (el) {
          setTimeout(() => {
            el.scrollIntoView({ behavior: reducedMotion ? 'instant' : 'smooth', block: 'center' })
          }, 100)
        }
      }
    }

    handleHash()
    window.addEventListener('hashchange', handleHash)
    return () => window.removeEventListener('hashchange', handleHash)
  }, [reducedMotion])

  // ESC key listener for modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedItem(null)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  const filteredItems =
    activeFilter === 'all'
      ? evidenceItems
      : evidenceItems.filter((item) => item.type === activeFilter)

  return (
    <section id="evidence" className="section-shell overflow-hidden bg-background">
      <div className="site-container">
        {/* Section Heading & Filter Bar */}
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 35, scale: 0.98 }}
          whileInView={reducedMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.2, margin: '200px 0px 0px 0px' }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mb-10 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <SectionHeading label={site.evidence.eyebrow} accent="yellow" className="mb-0">
              {site.evidence.title}
            </SectionHeading>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
              {site.evidence.description}
            </p>
          </div>

          {/* Cyber Brutalist Filter Controls */}
          <div
            className="flex max-w-full items-center gap-1.5 overflow-x-auto border-2 border-border bg-card p-1.5 shadow-neo sm:flex-wrap"
            role="group"
            aria-label="Filter jenis bukti">
            {typeFilters.map((tab) => {
              const count =
                tab.value === 'all'
                  ? evidenceItems.length
                  : evidenceItems.filter((i) => i.type === tab.value).length
              const isActive = activeFilter === tab.value

              return (
                <button
                  key={tab.value}
                  type="button"
                  onClick={() => setActiveFilter(tab.value)}
                  className={`shrink-0 cursor-pointer border px-3 py-1.5 font-mono text-xs font-bold whitespace-nowrap transition-all ${
                    isActive
                      ? 'border-border bg-neo-yellow font-black text-black shadow-sm'
                      : 'border-transparent text-muted-foreground hover:border-border hover:bg-muted hover:text-foreground'
                  }`}>
                  {tab.label}{' '}
                  <span
                    className={`ml-1 inline-block px-1.5 font-mono text-[10px] ${
                      isActive
                        ? 'bg-black/15 font-black text-black'
                        : 'border border-border/40 bg-background text-muted-foreground'
                    }`}>
                    {count}
                  </span>
                </button>
              )
            })}
          </div>
        </motion.div>

        {/* 6-Card Evidence Gallery Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredItems.map((item, idx) => {
            const style = accentStyles[item.accent as keyof typeof accentStyles]
            const isHighlighted = highlightedId === item.id

            return (
              <motion.article
                key={item.id}
                id={item.id}
                initial={
                  reducedMotion
                    ? false
                    : {
                        opacity: 0,
                        y: 30,
                        scale: 0.98,
                      }
                }
                whileInView={
                  reducedMotion
                    ? undefined
                    : {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                      }
                }
                viewport={{ once: false, amount: 0.15, margin: '200px 0px 0px 0px' }}
                transition={{ duration: 0.45, delay: idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className={`group relative flex flex-col justify-between border-2 bg-card p-4 transition-all duration-300 sm:p-5 ${style.shadow} ${
                  isHighlighted ? 'border-neo-yellow ring-4 ring-neo-yellow/40' : 'border-border'
                }`}>
                <div>
                  {/* Dossier Top Bar */}
                  <div className="mb-3 flex items-center justify-between border-b border-border/30 pb-2.5 font-mono text-xs">
                    <div className="flex items-center gap-1.5">
                      <span className="size-2 rounded-full bg-neo-lime" aria-hidden="true" />
                      <span className="font-bold text-muted-foreground uppercase">
                        DOC #{String(idx + 1).padStart(2, '0')}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs font-bold text-muted-foreground">
                        {item.year}
                      </span>
                      <span
                        className={`border border-border px-2 py-0.5 font-mono text-[9px] font-black uppercase shadow-sm ${style.badge}`}>
                        {item.category}
                      </span>
                    </div>
                  </div>

                  {/* Image Viewport Frame with Click-to-Zoom */}
                  <div
                    onClick={() => setSelectedItem(item)}
                    className="group/img relative mb-4 aspect-[4/3] w-full cursor-pointer overflow-hidden border-2 border-border bg-muted/40">
                    <img
                      src={item.image}
                      alt={item.title}
                      className={`size-full object-cover transition-transform duration-300 group-hover/img:scale-105 ${
                        item.id === 'evidence-magang-polres'
                          ? 'object-[center_16%]'
                          : 'object-center'
                      }`}
                      loading="lazy"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity group-hover/img:opacity-100">
                      <span className="flex items-center gap-1.5 border-2 border-border bg-primary px-3 py-1.5 font-mono text-xs font-black text-black shadow-neo">
                        <Maximize2 className="size-3.5" aria-hidden="true" />
                        <span>Perbesar Bukti</span>
                      </span>
                    </div>
                  </div>

                  {/* Content & Metadata */}
                  <div className="space-y-1.5">
                    <h3 className="font-display text-base leading-snug font-extrabold text-foreground sm:text-lg">
                      {item.title}
                    </h3>
                    <p className="font-mono text-xs font-bold text-muted-foreground">
                      Penerbit: {item.issuer}
                    </p>
                    <p className="pt-1 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Card Action Bar */}
                <div className="mt-4 flex items-center justify-between border-t border-border/20 pt-3 font-mono text-xs">
                  {'verificationUrl' in item && Boolean(item.verificationUrl) ? (
                    <a
                      href={item.verificationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 font-bold text-neo-lime hover:underline">
                      <Check className="size-3.5" aria-hidden="true" />
                      <span>DJKI Resmi ↗</span>
                    </a>
                  ) : (
                    <span className="flex items-center gap-1 text-[11px] font-bold text-neo-lime">
                      <Check className="size-3.5" aria-hidden="true" />
                      <span>Terverifikasi Fisik</span>
                    </span>
                  )}

                  <button
                    type="button"
                    onClick={() => setSelectedItem(item)}
                    className="flex cursor-pointer items-center gap-1 font-bold text-foreground hover:text-neo-yellow hover:underline">
                    <span>Lihat Full</span>
                    <Maximize2 className="size-3" aria-hidden="true" />
                  </button>
                </div>
              </motion.article>
            )
          })}
        </div>
      </div>

      {/* Lightbox Pop-up Modal */}
      {selectedItem && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={selectedItem.title}
          className="fixed inset-0 z-100 flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
          onClick={() => setSelectedItem(null)}>
          <div
            className="relative flex max-h-[90vh] w-full max-w-4xl flex-col border-2 border-border bg-card shadow-2xl"
            onClick={(e) => e.stopPropagation()}>
            {/* Modal Top Bar */}
            <div className="flex items-center justify-between border-b-2 border-border bg-background px-4 py-3 font-mono text-xs sm:px-6">
              <div className="flex items-center gap-2">
                <span className="size-2.5 rounded-full bg-neo-lime" aria-hidden="true" />
                <span className="truncate font-bold uppercase">{selectedItem.category}</span>
                <span className="text-muted-foreground">· {selectedItem.year}</span>
              </div>
              <button
                type="button"
                onClick={() => setSelectedItem(null)}
                aria-label="Tutup jendela bukti"
                className="flex size-7 items-center justify-center border border-border bg-muted font-bold transition-colors hover:bg-neo-pink hover:text-black sm:size-8">
                <X className="size-4" />
              </button>
            </div>

            {/* Modal Image Display */}
            <div className="relative flex-1 overflow-auto bg-black p-2 sm:p-4">
              <img
                src={selectedItem.image}
                alt={selectedItem.title}
                className="max-h-[60vh] w-full object-contain"
              />
            </div>

            {/* Modal Caption & Actions */}
            <div className="border-t-2 border-border bg-background p-4 sm:p-6">
              <h3 className="font-display text-lg font-extrabold sm:text-xl">
                {selectedItem.title}
              </h3>
              <p className="mt-1 font-mono text-xs font-bold text-muted-foreground">
                Instansi/Penerbit: {selectedItem.issuer}
              </p>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                {selectedItem.description}
              </p>

              <div className="mt-4 flex flex-wrap items-center justify-between gap-3 pt-2">
                <span className="font-mono text-[11px] text-muted-foreground">
                  File: {selectedItem.image}
                </span>

                <div className="flex flex-wrap items-center gap-2">
                  {'verificationUrl' in selectedItem && Boolean(selectedItem.verificationUrl) && (
                    <a
                      href={selectedItem.verificationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 border-2 border-border bg-neo-lime px-3 py-1.5 font-mono text-xs font-black text-black shadow-sm transition-transform hover:scale-105">
                      <span>Verifikasi Resmi DJKI</span>
                      <ExternalLink className="size-3.5" aria-hidden="true" />
                    </a>
                  )}

                  <a
                    href={selectedItem.image}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 border-2 border-border bg-neo-yellow px-3 py-1.5 font-mono text-xs font-black text-black shadow-sm transition-transform hover:scale-105">
                    <span>Buka Gambar Asli</span>
                    <ExternalLink className="size-3.5" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
