import { useEffect, useState, type ComponentType } from 'react'
import { useReducedMotion } from 'motion/react'

export function SmoothScroll() {
  const reducedMotion = useReducedMotion()
  const [LenisComponent, setLenisComponent] = useState<ComponentType | null>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return

    const isFinePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    if (!isFinePointer || reducedMotion) return

    let cancelled = false
    let idleHandle: number | undefined = undefined
    let timerHandle: ReturnType<typeof setTimeout> | undefined = undefined

    const scheduleImport = () => {
      const runImport = () => {
        if (cancelled) return
        import('./lenis-scroll')
          .then((mod) => {
            if (!cancelled) {
              setLenisComponent(() => mod.default)
            }
          })
          .catch(() => {
            // Native scroll remains active on import error
          })
      }

      if ('requestIdleCallback' in window) {
        idleHandle = window.requestIdleCallback(runImport)
      } else {
        timerHandle = setTimeout(runImport, 0)
      }
    }

    if (document.readyState === 'complete') {
      scheduleImport()
    } else {
      window.addEventListener('load', scheduleImport, { once: true })
    }

    return () => {
      cancelled = true
      window.removeEventListener('load', scheduleImport)
      if (idleHandle !== undefined && 'cancelIdleCallback' in window) {
        window.cancelIdleCallback(idleHandle)
      }
      clearTimeout(timerHandle)
    }
  }, [reducedMotion])

  const isEligible =
    typeof window !== 'undefined' &&
    window.matchMedia('(hover: hover) and (pointer: fine)').matches &&
    !reducedMotion

  if (!isEligible || !LenisComponent) return null
  return <LenisComponent />
}
