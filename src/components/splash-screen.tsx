import { useCallback, useEffect, useRef, useState, useSyncExternalStore } from 'react'
import { motion, useReducedMotion } from 'motion/react'
import { LottieLight } from 'lottie-react'
import developerAnimation from '@/assets/developer.json'

const STORAGE_KEY = 'prasadev_intro_seen'
const INTRO_DURATION = 3600 // 3.6 seconds total display

const emptySubscribe = () => () => {}
const getClientSnapshot = () => true
const getServerSnapshot = () => false

const getIntroSeenSnapshot = () => {
  // In development, allow user to test and view the intro on reload
  if (import.meta.env.DEV) {
    return false
  }
  try {
    return !!sessionStorage.getItem(STORAGE_KEY)
  } catch {
    return true
  }
}
const getServerIntroSeenSnapshot = () => false

export function SplashScreen() {
  const isClient = useSyncExternalStore(emptySubscribe, getClientSnapshot, getServerSnapshot)
  const isAlreadySeen = useSyncExternalStore(
    emptySubscribe,
    getIntroSeenSnapshot,
    getServerIntroSeenSnapshot,
  )
  const reducedMotion = useReducedMotion()

  // Phase: 'playing' -> 'opening' (curtains slide away) -> 'done' (unmounted)
  const [phase, setPhase] = useState<'playing' | 'opening' | 'done'>('playing')
  const [progress, setProgress] = useState(0)
  const animationFrameRef = useRef<number | null>(null)

  const shouldRender = isClient && !isAlreadySeen && !reducedMotion && phase !== 'done'

  // Curtain opening trigger
  const triggerCurtainOpen = useCallback(() => {
    if (phase !== 'playing') return
    setPhase('opening')
    try {
      sessionStorage.setItem(STORAGE_KEY, 'true')
    } catch {
      // Storage restricted
    }
  }, [phase])

  // Timer & progress bar loop
  useEffect(() => {
    if (!shouldRender || phase !== 'playing') return

    document.body.style.overflow = 'hidden'
    document.documentElement.classList.add('intro-active')

    const startTime = performance.now()

    const step = (now: number) => {
      const elapsed = now - startTime
      const p = Math.min(100, Math.round((elapsed / INTRO_DURATION) * 100))
      setProgress(p)

      if (elapsed < INTRO_DURATION) {
        animationFrameRef.current = requestAnimationFrame(step)
      } else {
        triggerCurtainOpen()
      }
    }

    animationFrameRef.current = requestAnimationFrame(step)

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' || e.key === ' ') {
        e.preventDefault()
        triggerCurtainOpen()
      }
    }
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [shouldRender, phase, triggerCurtainOpen])

  // Final cleanup when curtain finishes opening
  const handleCurtainAnimationComplete = () => {
    if (phase === 'opening') {
      document.body.style.overflow = ''
      document.documentElement.classList.remove('intro-active')
      setPhase('done')
    }
  }

  // SSR or before hydration: render initial closed curtain panels matching SSR first paint
  if (!isClient) {
    return (
      <div id="intro-screen" aria-hidden="true" className="fixed inset-0 z-9999 select-none">
        {/* Left Curtain */}
        <div className="absolute top-0 bottom-0 left-0 w-[50.5%] bg-[#0a0a0e]" />
        {/* Right Curtain */}
        <div className="absolute top-0 right-0 bottom-0 w-[50.5%] bg-[#0a0a0e]" />

        {/* Center Stage Box */}
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
          <div className="relative w-full max-w-xs sm:max-w-sm border-2 border-border bg-card p-5 shadow-neo-cyan sm:p-6">
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
                INITIALIZING
              </span>
            </div>
            <div className="relative mx-auto flex aspect-square w-40 items-center justify-center overflow-hidden border border-border/60 bg-background/60 p-2 sm:w-52">
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
                <span className="hidden sm:inline">[ESC] LEWATI INTRO</span>
                <span className="font-bold text-foreground sm:ml-auto">Lewati Intro ↗</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (!shouldRender) return null

  const isOpening = phase === 'opening'

  return (
    <div
      id="intro-screen"
      role="dialog"
      aria-modal="true"
      aria-label="Intro prasadev"
      className="fixed inset-0 z-9999 select-none overflow-hidden">
      {/* 1. LEFT CURTAIN PANEL */}
      <motion.div
        className="absolute top-0 bottom-0 left-0 w-[50.5%] bg-[#0a0a0e] shadow-[25px_0_50px_rgba(0,0,0,0.95)] z-10"
        initial={{ x: 0 }}
        animate={isOpening ? { x: '-100%' } : { x: 0 }}
        transition={{
          delay: isOpening ? 0.22 : 0,
          duration: 0.95,
          ease: [0.76, 0, 0.24, 1], // Dramatic theater curtain easing
        }}
        onAnimationComplete={handleCurtainAnimationComplete}
      />

      {/* 2. RIGHT CURTAIN PANEL */}
      <motion.div
        className="absolute top-0 right-0 bottom-0 w-[50.5%] bg-[#0a0a0e] shadow-[-25px_0_50px_rgba(0,0,0,0.95)] z-10"
        initial={{ x: 0 }}
        animate={isOpening ? { x: '100%' } : { x: 0 }}
        transition={{
          delay: isOpening ? 0.22 : 0,
          duration: 0.95,
          ease: [0.76, 0, 0.24, 1],
        }}
      />

      {/* 3. CENTER FLOATING TERMINAL DOSSIER CARD */}
      <motion.div
        className="absolute inset-0 flex flex-col items-center justify-center px-4 z-20 pointer-events-auto"
        initial={{ opacity: 1, scale: 1 }}
        animate={isOpening ? { opacity: 0, scale: 0.85, y: -10 } : { opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.2, ease: 'easeOut' }}>
        <div className="relative w-full max-w-xs sm:max-w-sm border-2 border-border bg-card p-5 shadow-neo-cyan sm:p-6">
          {/* Header Bar */}
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

          {/* Center Lottie Animation Box */}
          <div className="relative mx-auto flex aspect-square w-40 items-center justify-center overflow-hidden border border-border/60 bg-background/60 p-2 sm:w-52">
            <LottieLight src={developerAnimation} autoplay loop className="size-full" />
          </div>

          {/* Telemetry Progress Strip */}
          <div className="mt-4 space-y-2 font-mono">
            <div className="flex items-center justify-between text-[11px] font-bold">
              <span className="text-muted-foreground">
                {progress < 40
                  ? '[1/3] MEMUAT ASET...'
                  : progress < 85
                    ? '[2/3] MENYIAPKAN WORKSPACE...'
                    : '[3/3] AKSES TERBUKA'}
              </span>
              <span className="text-neo-lime font-black">{progress}%</span>
            </div>

            {/* Glowing Neon Progress Bar */}
            <div className="h-1.5 w-full overflow-hidden border border-border/40 bg-muted">
              <div
                className="h-full bg-neo-lime transition-all duration-75 ease-out shadow-[0_0_8px_rgba(74,222,128,0.8)]"
                style={{ width: `${progress}%` }}
              />
            </div>

            {/* Bottom Actions: Skip Intro */}
            <div className="flex items-center justify-between pt-2.5 text-[10px] text-muted-foreground">
              <span className="hidden sm:inline">[ESC] LEWATI INTRO</span>
              <button
                type="button"
                onClick={triggerCurtainOpen}
                className="group inline-flex items-center gap-1.5 border border-border bg-neo-yellow px-2.5 py-1 font-mono text-xs font-black text-black shadow-xs transition-transform hover:-translate-y-0.5 hover:shadow-neo sm:ml-auto cursor-pointer">
                <span>Lewati Intro</span>
                <span className="transition-transform group-hover:translate-x-0.5">↘</span>
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
