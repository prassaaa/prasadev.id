import { useEffect, useState, type ComponentType } from 'react'
import { useReducedMotion } from 'motion/react'

const STORAGE_KEY = 'prasadev_splash_shown'

export function SplashScreen() {
  const reducedMotion = useReducedMotion()
  const [OverlayComponent, setOverlayComponent] = useState<ComponentType<{
    onDismiss: () => void
  }> | null>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return

    // Never show splashscreen if reduced motion is requested or already shown in this session
    if (reducedMotion) return
    try {
      if (sessionStorage.getItem(STORAGE_KEY)) return
    } catch {
      return
    }

    let cancelled = false
    document.body.style.overflow = 'hidden'

    import('./splash-overlay')
      .then((mod) => {
        if (!cancelled) {
          setOverlayComponent(() => mod.default)
        }
      })
      .catch(() => {
        document.body.style.overflow = ''
      })

    return () => {
      cancelled = true
      document.body.style.overflow = ''
    }
  }, [reducedMotion])

  const handleDismiss = () => {
    try {
      sessionStorage.setItem(STORAGE_KEY, 'true')
    } catch {
      // Storage quota or restricted access
    }
    document.body.style.overflow = ''
    setOverlayComponent(null)
  }

  if (!OverlayComponent) return null

  return <OverlayComponent onDismiss={handleDismiss} />
}
