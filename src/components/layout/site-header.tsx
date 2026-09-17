import { useRef, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { Link } from 'react-router'
import { Menu, Moon, Sun, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { site } from '@/content/site'

const navigation = [
  ['Tentang', '/#about'],
  ['Keahlian', '/#services'],
  ['Proyek', '/#portfolio'],
  ['Pengalaman', '/#experience'],
  ['Pendidikan', '/#education'],
  ['Kontak', '/#contact'],
]

export function SiteHeader({
  theme,
  onToggleTheme,
}: {
  theme: 'dark' | 'light'
  onToggleTheme: () => void
}) {
  const [open, setOpen] = useState(false)
  const reducedMotion = useReducedMotion()
  const menuButton = useRef<HTMLButtonElement>(null)
  const ThemeIcon = theme === 'dark' ? Sun : Moon
  return (
    <>
      <a
        href="#main-content"
        className="fixed top-2 left-2 z-100 -translate-y-24 bg-primary px-4 py-3 font-bold text-black focus:translate-y-0">
        Lewati ke konten utama
      </a>
      <header
        className="sticky top-0 z-50 border-b-2 bg-background"
        onKeyDown={(event) => {
          if (event.key === 'Escape' && open) {
            setOpen(false)
            menuButton.current?.focus()
          }
        }}>
        <div className="site-container flex min-h-20 items-center justify-between gap-3 py-3">
          <Link
            to="/#hero"
            onClick={() => setOpen(false)}
            className="flex min-w-0 items-center gap-3"
            aria-label={`${site.brand} — beranda`}>
            <span
              className="flex size-11 shrink-0 items-center justify-center border-2 bg-background p-1 shadow-neo"
              aria-hidden="true">
              <img src="/icons.svg" alt="" className="size-full object-contain" />
            </span>
            <span className="min-w-0 leading-tight">
              <span className="block font-display text-lg font-extrabold sm:text-xl">
                {site.brand}
              </span>
              <span className="font-mono text-[10px] font-bold sm:text-xs">Software Engineer</span>
            </span>
          </Link>
          <nav
            aria-label="Navigasi utama"
            className="hidden items-center gap-4 text-sm font-bold xl:flex">
            {navigation.map(([label, href]) => (
              <Link
                className="decoration-2 underline-offset-4 hover:underline"
                key={href}
                to={href}>
                {label}
              </Link>
            ))}
          </nav>
          <div className="flex shrink-0 items-center gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={onToggleTheme}
              aria-label={theme === 'dark' ? 'Aktifkan tema terang' : 'Aktifkan tema gelap'}>
              <ThemeIcon aria-hidden="true" />
            </Button>
            <Button asChild className="hidden xl:inline-flex">
              <Link to="/#contact">Diskusikan Kebutuhan</Link>
            </Button>
            <Button
              ref={menuButton}
              size="icon"
              className="xl:hidden"
              aria-label={open ? 'Tutup menu' : 'Buka menu'}
              aria-expanded={open}
              aria-controls="mobile-navigation"
              onClick={() => setOpen(!open)}>
              {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
            </Button>
          </div>
        </div>
        <AnimatePresence initial={false}>
          {open && (
            <motion.nav
              key="mobile"
              id="mobile-navigation"
              initial={reducedMotion ? false : { height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: reducedMotion ? 0 : 0.18 }}
              aria-label="Navigasi mobile"
              className="overflow-hidden bg-muted xl:hidden">
              <div className="site-container border-t-2 py-4">
                {navigation.map(([label, href]) => (
                  <Link
                    key={href}
                    to={href}
                    onClick={() => setOpen(false)}
                    className="block px-3 py-2 font-bold hover:bg-primary hover:text-black">
                    {label}
                  </Link>
                ))}
                <Button asChild className="mt-3 w-full">
                  <Link to="/#contact" onClick={() => setOpen(false)}>
                    Mulai Diskusi Proyek
                  </Link>
                </Button>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>
    </>
  )
}
