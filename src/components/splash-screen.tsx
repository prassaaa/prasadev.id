import { useCallback, useEffect, useState, useSyncExternalStore } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { LottieLight } from 'lottie-react'
import developerAnimation from '@/assets/developer.json'

const STORAGE_KEY = 'prasadev_splash_shown'

const emptySubscribe = () => () => {}
const getClientSnapshot = () => true
const getServerSnapshot = () => false

const getSplashShownSnapshot = () => {
  try {
    return !!sessionStorage.getItem(STORAGE_KEY)
  } catch {
    return true
  }
}
const getServerSplashShownSnapshot = () => false

export function SplashScreen() {
  const isClient = useSyncExternalStore(emptySubscribe, getClientSnapshot, getServerSnapshot)
  const isAlreadyShown = useSyncExternalStore(
    emptySubscribe,
    getSplashShownSnapshot,
    getServerSplashShownSnapshot,
  )
  const reducedMotion = useReducedMotion()

  const [dismissed, setDismissed] = useState(false)
  const [closing, setClosing] = useState(false)
  const [progress, setProgress] = useState(0)

  const shouldShow = isClient && !isAlreadyShown && !reducedMotion && !dismissed

  const handleDismiss = useCallback(() => {
    setClosing(true)
    try {
      sessionStorage.setItem(STORAGE_KEY, 'true')
    } catch {
      // Storage quota or restricted access
    }
    document.documentElement.classList.remove('splash-active')
    setTimeout(() => {
      setDismissed(true)
    }, 350)
  }, [])

  useEffect(() => {
    if (!shouldShow) {
      document.documentElement.classList.remove('splash-active')
      return
    }

    const startTime = performance.now()
    const duration = 2200 // 2.2s total display
    let animationFrameId: number

    const updateProgress = (now: number) => {
      const elapsed = now - startTime
      const p = Math.min(100, Math.round((elapsed / duration) * 100))
      setProgress(p)

      if (elapsed < duration) {
        animationFrameId = requestAnimationFrame(updateProgress)
      } else {
        handleDismiss()
      }
    }

    animationFrameId = requestAnimationFrame(updateProgress)

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' || e.key === ' ') {
        handleDismiss()
      }
    }
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener('keydown', handleKeyDown)
      document.documentElement.classList.remove('splash-active')
    }
  }, [shouldShow, handleDismiss])

  // SSR or before client hydration: render static preloader frame
  // Controlled by html.splash-active class set in <head>
  if (!isClient) {
    return (
      <div
        id="splash-screen"
        aria-hidden="true"
        className="fixed inset-0 z-999 flex flex-col items-center justify-center bg-[#0a0a0e] px-4 select-none">
        <div className="relative w-full max-w-sm border-2 border-border bg-card p-5 shadow-neo-cyan sm:p-6">
          <div className="mb-4 flex items-center justify-between border-b-2 border-border/40 pb-3 font-mono text-xs">
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1" aria-hidden="true">
                <span className="size-2 rounded-full border border-border bg-neo-pink" />
                <span className="size-2 rounded-full border border-border bg-neo-yellow" />
                <span className="size-2 rounded-full border border-border bg-neo-lime" />
              </div>
              <span className="text-[10px] font-bold tracking-wider text-muted-foreground uppercase sm:text-xs">
                BOOT // PRASADEV.ID
              </span>
            </div>
            <span className="border border-border bg-neo-lime px-1.5 py-0.5 font-mono text-[9px] font-black text-black uppercase shadow-xs">
              ONLINE
            </span>
          </div>
          <div className="relative mx-auto flex aspect-square w-48 items-center justify-center overflow-hidden border border-border/60 bg-background/60 p-2 sm:w-56">
            <div className="size-full" />
          </div>
          <div className="mt-4 space-y-2 font-mono">
            <div className="flex items-center justify-between text-[11px] font-bold">
              <span className="text-muted-foreground">MEMUAT MODUL SISTEM</span>
              <span className="text-neo-lime">0%</span>
            </div>
            <div className="h-1.5 w-full overflow-hidden border border-border/40 bg-muted">
              <div className="h-full w-0 bg-neo-lime" />
            </div>
            <div className="flex items-center justify-between pt-2 text-[10px] text-muted-foreground">
              <span className="hidden sm:inline">[ESC] UNTUK LEWATI</span>
              <span className="font-bold text-foreground sm:ml-auto">Lewati ↗</span>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (!shouldShow) return null

  return (
    <AnimatePresence>
      {!closing && (
        <motion.div
          id="splash-screen"
          key="splash-screen"
          role="dialog"
          aria-modal="true"
          aria-label="Memuat aplikasi prasadev"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 0.98,
            transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
          }}
          className="fixed inset-0 z-999 flex flex-col items-center justify-center bg-[#0a0a0e] px-4 select-none">
          <div className="relative w-full max-w-sm border-2 border-border bg-card p-5 shadow-neo-cyan sm:p-6">
            <div className="mb-4 flex items-center justify-between border-b-2 border-border/40 pb-3 font-mono text-xs">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1" aria-hidden="true">
                  <span className="size-2 rounded-full border border-border bg-neo-pink" />
                  <span className="size-2 rounded-full border border-border bg-neo-yellow" />
                  <span className="size-2 rounded-full border border-border bg-neo-lime" />
                </div>
                <span className="text-[10px] font-bold tracking-wider text-muted-foreground uppercase sm:text-xs">
                  BOOT // PRASADEV.ID
                </span>
              </div>
              <span className="border border-border bg-neo-lime px-1.5 py-0.5 font-mono text-[9px] font-black text-black uppercase shadow-xs">
                ONLINE
              </span>
            </div>

            <div className="relative mx-auto flex aspect-square w-48 items-center justify-center overflow-hidden border border-border/60 bg-background/60 p-2 sm:w-56">
              <LottieLight src={developerAnimation} autoplay loop className="size-full" />
            </div>

            <div className="mt-4 space-y-2 font-mono">
              <div className="flex items-center justify-between text-[11px] font-bold">
                <span className="text-muted-foreground">MEMUAT MODUL SISTEM</span>
                <span className="text-neo-lime">{progress}%</span>
              </div>

              <div className="h-1.5 w-full overflow-hidden border border-border/40 bg-muted">
                <div
                  className="h-full bg-neo-lime transition-all duration-75 ease-out"
                  style={{ width: `${progress}%` }}
                />
              </div>

              <div className="flex items-center justify-between pt-2 text-[10px] text-muted-foreground">
                <span className="hidden sm:inline">[ESC] UNTUK LEWATI</span>
                <button
                  type="button"
                  onClick={handleDismiss}
                  className="cursor-pointer font-bold text-foreground transition-colors hover:text-neo-yellow hover:underline sm:ml-auto">
                  Lewati ↗
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
