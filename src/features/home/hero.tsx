import {
  cubicBezier,
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useTransform,
} from 'motion/react'
import { ArrowRight } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { WordsPullUp } from '@/components/ui/words-pull-up'
import heroDesktopMp4 from '@/assets/hero-desktop.mp4?url'
import heroMobileMp4 from '@/assets/hero-mobile.mp4?url'
import heroPosterWebp from '@/assets/hero-poster.webp?url'
export function Hero() {
  const reducedMotion = useReducedMotion()
  const videoRef = useRef<HTMLVideoElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  })
  const exitEase = cubicBezier(0.22, 1, 0.36, 1)
  const videoScale = useTransform(scrollYProgress, [0, 1], [1, 1.65], { ease: exitEase })
  const contentScale = useTransform(scrollYProgress, [0, 0.55], [1, 1.12], { ease: exitEase })
  const contentY = useTransform(scrollYProgress, [0, 0.55], ['0%', '-65%'], { ease: exitEase })
  const contentOpacity = useTransform(scrollYProgress, [0, 0.08, 0.55], [1, 1, 0])
  const backdropOpacity = useTransform(scrollYProgress, [0.6, 1], [0, 0.5])
  const isHiddenRef = useRef(false)
  const [videoSource, setVideoSource] = useState<string | null>(null)
  const [hasVideoError, setHasVideoError] = useState(false)
  const [hasPosterError, setHasPosterError] = useState(false)
  useMotionValueEvent(scrollYProgress, 'change', (progress) => {
    if (!contentRef.current || reducedMotion) return
    const shouldHide = progress >= 0.55
    if (shouldHide !== isHiddenRef.current) {
      isHiddenRef.current = shouldHide
      contentRef.current.inert = shouldHide
      contentRef.current.style.visibility = shouldHide ? 'hidden' : 'visible'
    }
  })

  useEffect(() => {
    if (reducedMotion) {
      videoRef.current?.pause()
      if (contentRef.current) {
        contentRef.current.inert = false
        contentRef.current.style.visibility = 'visible'
        isHiddenRef.current = false
      }
      return
    }

    let frameId1 = 0
    let frameId2 = 0
    let cancelled = false

    const startPlayback = () => {
      frameId1 = requestAnimationFrame(() => {
        frameId2 = requestAnimationFrame(() => {
          if (cancelled) return
          const isMobile = window.matchMedia('(max-width: 767px)').matches
          setVideoSource(isMobile ? heroMobileMp4 : heroDesktopMp4)
        })
      })
    }

    if (document.readyState === 'complete') {
      startPlayback()
    } else {
      window.addEventListener('load', startPlayback, { once: true })
    }

    return () => {
      cancelled = true
      window.removeEventListener('load', startPlayback)
      if (frameId1) cancelAnimationFrame(frameId1)
      if (frameId2) cancelAnimationFrame(frameId2)
    }
  }, [reducedMotion])

  useEffect(() => {
    if (!videoSource || reducedMotion || !videoRef.current) return
    videoRef.current.play().catch(() => {
      // Autoplay rejection handled gracefully without retry loop
    })
  }, [videoSource, reducedMotion])
  return (
    <section ref={sectionRef} id="hero" className="-mt-20.5 h-[180svh] w-full motion-reduce:h-dvh">
      <link rel="preload" as="image" href={heroPosterWebp} />
      <div className="sticky top-0 h-dvh w-full overflow-hidden rounded-2xl md:rounded-4xl">
        {!hasVideoError ? (
          <motion.video
            ref={videoRef}
            poster={heroPosterWebp}
            src={videoSource ?? undefined}
            width={1280}
            height={716}
            preload="none"
            muted
            loop
            playsInline
            aria-hidden="true"
            onError={() => setHasVideoError(true)}
            className="absolute inset-0 h-full w-full object-cover"
            style={{ scale: reducedMotion ? 1 : videoScale }}
          />
        ) : (
          !hasPosterError && (
            <motion.img
              src={heroPosterWebp}
              alt=""
              width={1280}
              height={716}
              aria-hidden="true"
              onError={() => setHasPosterError(true)}
              className="absolute inset-0 h-full w-full object-cover"
              style={{ scale: reducedMotion ? 1 : videoScale }}
            />
          )
        )}
        <div className="noise-overlay pointer-events-none absolute inset-0 opacity-[0.7] mix-blend-overlay" />
        <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-black/30 via-transparent to-black/60" />
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-muted"
          style={{ opacity: reducedMotion ? 0 : backdropOpacity }}
        />
        <motion.div
          ref={contentRef}
          style={{
            scale: reducedMotion ? 1 : contentScale,
            y: reducedMotion ? 0 : contentY,
            opacity: reducedMotion ? 1 : contentOpacity,
          }}
          className="absolute right-0 bottom-0 left-0 origin-bottom-left px-4 pb-2 sm:px-6 md:px-10">
          <div className="grid grid-cols-12 items-end gap-4">
            <div className="col-span-12 lg:col-span-8">
              <h1
                className="text-[26vw] leading-[0.85] font-medium tracking-[-0.07em] sm:text-[24vw] md:text-[22vw] lg:text-[20vw] xl:text-[19vw] 2xl:text-[20vw]"
                style={{ color: '#E1E0CC' }}>
                <WordsPullUp text="Prasa" showAsterisk />
              </h1>
            </div>
            <div className="col-span-12 flex flex-col gap-5 pb-6 lg:col-span-4 lg:pb-10">
              <a
                href="#portfolio"
                className="group inline-flex items-center gap-2 self-start rounded-full bg-primary py-1 pr-1 pl-5 text-sm font-medium text-black outline-none focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-ring sm:text-base">
                Lihat proyek
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-black transition-transform group-hover:scale-110 sm:h-10 sm:w-10">
                  <ArrowRight className="h-4 w-4" style={{ color: '#E1E0CC' }} />
                </span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
