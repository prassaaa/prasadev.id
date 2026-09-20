import { ReactLenis } from 'lenis/react'

const options = {
  autoRaf: true,
  anchors: false,
  syncTouch: false,
  stopInertiaOnNavigate: true,
  respectReducedMotion: true,
}

export default function LenisScroll() {
  return <ReactLenis root options={options} />
}
