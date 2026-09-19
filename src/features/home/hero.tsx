import {
  cubicBezier,
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useTransform,
} from 'motion/react'
import { ArrowRight } from 'lucide-react'
import { useEffect, useRef } from 'react'
import { WordsPullUp } from '@/components/ui/words-pull-up'

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
  const contentBlur = useTransform(scrollYProgress, [0.08, 0.55], ['blur(0px)', 'blur(10px)'])
  const backdropOpacity = useTransform(scrollYProgress, [0.6, 1], [0, 0.5])

  useMotionValueEvent(scrollYProgress, 'change', (progress) => {
    if (!contentRef.current || reducedMotion) return
    contentRef.current.inert = progress >= 0.55
    contentRef.current.style.visibility = progress >= 0.55 ? 'hidden' : 'visible'
  })

  useEffect(() => {
    if (reducedMotion) videoRef.current?.pause()
  }, [reducedMotion])

  return (
    <section ref={sectionRef} id="hero" className="-mt-20.5 h-[180svh] w-full motion-reduce:h-dvh">
      <div className="sticky top-0 h-dvh w-full overflow-hidden rounded-2xl md:rounded-4xl">
        <motion.video
          ref={videoRef}
          autoPlay={!reducedMotion}
          loop
          muted
          playsInline
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover"
          style={{ scale: reducedMotion ? 1 : videoScale }}
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_170732_8a9ccda6-5cff-4628-b164-059c500a2b41.mp4"
        />
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
            filter: reducedMotion ? 'none' : contentBlur,
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
              <motion.a
                href="#portfolio"
                initial={reducedMotion ? false : { y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="group inline-flex items-center gap-2 self-start rounded-full bg-primary py-1 pr-1 pl-5 text-sm font-medium text-black transition-all hover:gap-3 sm:text-base">
                Lihat proyek
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-black transition-transform group-hover:scale-110 sm:h-10 sm:w-10">
                  <ArrowRight className="h-4 w-4" style={{ color: '#E1E0CC' }} />
                </span>
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
