import { useSyncExternalStore } from 'react'
import { useReducedMotion } from 'motion/react'
import { ReactLenis } from 'lenis/react'

const subscribe = () => () => {}
const clientSnapshot = () => true
const serverSnapshot = () => false
const options = {
  autoRaf: true,
  anchors: false,
  syncTouch: false,
  stopInertiaOnNavigate: true,
  respectReducedMotion: true,
}

export function SmoothScroll() {
  const mounted = useSyncExternalStore(subscribe, clientSnapshot, serverSnapshot)
  const reducedMotion = useReducedMotion()
  return mounted && !reducedMotion ? <ReactLenis root options={options} /> : null
}
