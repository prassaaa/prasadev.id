import { useState, useRef, useEffect } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { ArrowUpRight, X } from 'lucide-react'
import { site } from '@/content/site'

const waUrl = `${site.whatsapp.href}?text=${encodeURIComponent(
  'Halo Prasetyo, saya ingin berdiskusi tentang kebutuhan proyek atau peluang kerja.',
)}`

const whatsappIcon = (
  <svg viewBox="0 0 24 24" fill="currentColor" className="size-6" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884a9.82 9.82 0 016.988 2.896 9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
)

export function WhatsAppWidget() {
  const [open, setOpen] = useState(false)
  const reducedMotion = useReducedMotion()
  const toggleRef = useRef<HTMLButtonElement>(null)
  const closeRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (open) closeRef.current?.focus()
  }, [open])

  const close = () => {
    setOpen(false)
    toggleRef.current?.focus()
  }

  return (
    <div className="fixed right-4 bottom-4 z-90 sm:right-6 sm:bottom-6">
      <AnimatePresence>
        {open && (
          <motion.div
            id="whatsapp-chat"
            role="dialog"
            aria-label="Chat WhatsApp prasadev"
            onKeyDown={(event) => {
              if (event.key === 'Escape') close()
            }}
            initial={reducedMotion ? false : { opacity: 0, y: 14, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={reducedMotion ? undefined : { opacity: 0, y: 14, scale: 0.95 }}
            transition={{ duration: reducedMotion ? 0 : 0.24, ease: 'easeOut' }}
            className="origin-bottom-right border-2 border-border bg-card shadow-neo-cyan"
            style={{ width: 'min(340px, calc(100vw - 2rem))' }}>
            <div className="flex items-center gap-3 border-b-2 border-border bg-neo-lime p-3 text-black">
              <span className="grid size-11 shrink-0 place-items-center border-2 border-black bg-black text-neo-lime">
                {whatsappIcon}
              </span>
              <div className="min-w-0 flex-1 leading-tight">
                <p className="font-display text-base font-extrabold">Prasetyo Ari Wibowo</p>
                <p className="font-mono text-[10px] font-bold uppercase">
                  prasadev · membalas chat
                </p>
              </div>
              <button
                ref={closeRef}
                type="button"
                aria-label="Tutup chat WhatsApp"
                onClick={close}
                className="grid size-9 shrink-0 place-items-center border-2 border-black bg-neo-yellow hover:bg-white">
                <X className="size-4" aria-hidden="true" />
              </button>
            </div>
            <div className="space-y-3 p-4">
              <div className="max-w-[88%] border-2 border-border bg-muted p-3">
                <p className="mb-1 font-mono text-[10px] font-bold text-muted-foreground">
                  prasadev · baru saja
                </p>
                <p className="text-sm leading-relaxed">
                  Halo, saya Prasetyo. Butuh koordinasi untuk proyek atau peluang kerja? Ceritakan
                  kebutuhan Anda — kita bahas dulu sebelum memulai.
                </p>
              </div>
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-2 border-2 border-border bg-neo-lime px-4 py-3 text-sm font-extrabold text-black shadow-neo hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none">
                {whatsappIcon}
                Lanjut ke WhatsApp
                <ArrowUpRight className="size-4" aria-hidden="true" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="mt-3 flex items-center justify-end gap-3">
        <AnimatePresence>
          {!open && (
            <motion.button
              key="label"
              type="button"
              onClick={() => setOpen(true)}
              aria-expanded={open}
              aria-controls="whatsapp-chat"
              initial={reducedMotion ? false : { opacity: 0, x: 12 }}
              animate={{ opacity: 1, x: 0 }}
              exit={reducedMotion ? undefined : { opacity: 0, x: 12 }}
              transition={{ duration: reducedMotion ? 0 : 0.2 }}
              className="flex cursor-pointer items-center gap-2 border-2 border-border bg-card px-3 py-2 shadow-neo hover:bg-muted">
              <span aria-hidden="true" className="size-2.5 shrink-0 bg-neo-lime" />
              <span className="font-mono text-[11px] font-extrabold whitespace-nowrap sm:text-xs">
                <span className="sm:hidden">Chat di sini</span>
                <span className="hidden sm:inline">Butuh koordinasi?</span>
              </span>
            </motion.button>
          )}
        </AnimatePresence>
        <motion.button
          ref={toggleRef}
          type="button"
          aria-label={open ? 'Tutup chat WhatsApp' : 'Buka chat WhatsApp'}
          aria-expanded={open}
          aria-controls="whatsapp-chat"
          onClick={() => (open ? close() : setOpen(true))}
          whileHover={reducedMotion ? undefined : { x: -2, y: -2 }}
          whileTap={reducedMotion ? undefined : { x: 1, y: 1 }}
          className="relative grid size-14 shrink-0 cursor-pointer place-items-center border-2 border-border bg-neo-lime text-black shadow-neo">
          <span className="grid size-11 place-items-center border-2 border-border bg-background text-foreground dark:border-black dark:bg-black dark:text-neo-lime">
            {whatsappIcon}
          </span>
          {!reducedMotion && !open && (
            <motion.span
              aria-hidden="true"
              className="absolute inset-0 border-2 border-neo-lime"
              animate={{ opacity: [0.9, 0], scale: [1, 1.4] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'easeOut' }}
            />
          )}
        </motion.button>
      </div>
    </div>
  )
}
