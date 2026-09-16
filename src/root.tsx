import { useState, type ReactNode } from 'react'
import { isRouteErrorResponse, Link, Links, Meta, Outlet, Scripts, ScrollRestoration, useRouteError } from 'react-router'
import { SiteHeader } from '@/components/layout/site-header'
import { SiteFooter } from '@/components/layout/site-footer'
import { PageMeta } from '@/components/page-meta'
import { Button } from '@/components/ui/button'
import { site } from '@/content/site'
import { MotionProvider } from '@/components/motion-provider'
import { SmoothScroll } from '@/components/smooth-scroll'
import './index.css'

export function Layout({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark')
  return <html lang="id" className={theme === 'dark' ? 'dark' : undefined}>
    <head><meta charSet="utf-8" /><meta name="viewport" content="width=device-width, initial-scale=1" />{!site.publicationReady && <meta name="robots" content="noindex, nofollow" />}<link rel="icon" href="/favicon.svg" type="image/svg+xml" /><Meta /><Links /></head>
    <body><MotionProvider><SmoothScroll /><SiteHeader theme={theme} onToggleTheme={() => setTheme((current) => current === 'dark' ? 'light' : 'dark')} /><main id="main-content" tabIndex={-1}>{children}</main><SiteFooter /></MotionProvider><ScrollRestoration /><Scripts /></body>
  </html>
}

export default function Root() { return <Outlet /> }

export function ErrorBoundary() {
  const error = useRouteError()
  const notFound = isRouteErrorResponse(error) && error.status === 404
  return <section className="site-container py-24"><PageMeta title={`${notFound ? 'Halaman tidak ditemukan' : 'Halaman tidak dapat dimuat'} | prasadev`} description="Kembali ke beranda prasadev untuk melihat profil dan proyek Prasetyo Ari Wibowo." /><p className="mb-4 font-mono">{notFound ? '404' : 'Terjadi kesalahan'}</p><h1 className="font-display text-4xl font-extrabold">{notFound ? 'Halaman tidak ditemukan' : 'Halaman tidak dapat dimuat'}</h1><p className="my-6 text-muted-foreground">{notFound ? 'Alamat yang Anda buka tidak tersedia. Kembali ke beranda untuk melihat profil dan proyek saya.' : 'Silakan muat ulang halaman atau kembali ke beranda.'}</p><Button asChild><Link to="/">Kembali ke Beranda</Link></Button></section>
}
