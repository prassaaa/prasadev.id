import type { ReactNode } from 'react'
import { cn } from 'cn'

export function SectionHeading({ label, children, className, accent = 'yellow' }: { label: string; children: ReactNode; className?: string; accent?: 'yellow' | 'cyan' | 'pink' | 'lime' | 'purple' }) {
  const colors = { yellow: 'bg-neo-yellow text-black', cyan: 'bg-neo-cyan text-black', pink: 'bg-neo-pink text-black', lime: 'bg-neo-lime text-black', purple: 'bg-neo-purple text-black' }
  return <div className={cn('mb-12 max-w-3xl', className)}><span className={cn('inline-block border-2 border-border px-3.5 py-1.5 font-mono text-xs font-bold uppercase', colors[accent])}>{label}</span><h2 className="mt-3 font-display text-3xl leading-[1.12] font-extrabold tracking-tight sm:text-4xl lg:text-5xl">{children}</h2></div>
}
