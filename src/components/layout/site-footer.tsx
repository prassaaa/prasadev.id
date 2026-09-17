import { Link } from 'react-router'
import { site } from '@/content/site'

export function SiteFooter() {
  return (
    <footer className="border-t-2 bg-background pt-16 pb-10">
      <div className="site-container">
        <div className="grid gap-10 border-b-2 border-border/30 pb-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link to="/" className="flex items-center gap-3 font-display text-3xl font-extrabold">
              <img src="/icons.svg" alt="" className="size-10 shrink-0 object-contain" />
              {site.brand}
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Prasetyo Ari Wibowo — Software Engineer yang mengembangkan aplikasi web dan mobile
              dengan Laravel, React, dan Flutter.
            </p>
          </div>
          <nav aria-label="Navigasi footer">
            <h2 className="mb-4 font-display font-bold">Jelajahi</h2>
            <ul className="space-y-2 text-sm">
              {[
                ['Tentang', 'about'],
                ['Keahlian', 'services'],
                ['Proyek', 'portfolio'],
                ['Pengalaman', 'experience'],
                ['Pendidikan', 'education'],
              ].map(([label, id]) => (
                <li key={id}>
                  <Link className="hover:underline" to={`/#${id}`}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div>
            <h2 className="mb-4 font-display font-bold">Fokus</h2>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {['Aplikasi Web', 'Sistem Informasi', 'Flutter', 'Integrasi API'].map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="mb-4 font-display font-bold">Kontak</h2>
            <div className="flex flex-col items-start gap-3 text-sm">
              <a
                href={site.whatsapp.href}
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4">
                WhatsApp
              </a>
              <a href={site.email.href} className="underline underline-offset-4">
                Email
              </a>
              {site.socials.map((social) => (
                <a
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-4">
                  {social.name}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between gap-3 pt-8 font-mono text-xs text-muted-foreground sm:flex-row">
          <p>© 2026 prasadev. Prasetyo Ari Wibowo.</p>
          <p>Kediri, Jawa Timur.</p>
        </div>
      </div>
    </footer>
  )
}
