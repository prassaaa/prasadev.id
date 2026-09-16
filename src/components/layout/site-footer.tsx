import { Link } from 'react-router'
import { ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { site } from '@/content/site'

const icons = { github: ExternalLink, linkedin: ExternalLink, twitter: ExternalLink, dribbble: ExternalLink }

export function SiteFooter() {
  return <>
    <aside className="border-b-2 bg-neo-yellow py-12 text-black" aria-label="Artikel frontend dan desain"><div className="site-container flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center"><div><h2 className="font-display text-2xl font-extrabold sm:text-3xl">{site.articleBanner.title}</h2><p className="mt-2 font-medium">{site.articleBanner.description}</p></div><Button variant="outline" asChild><Link to="/artikel">{site.articleBanner.cta}</Link></Button></div></aside>
    <footer className="bg-background pt-16 pb-12"><div className="site-container">
      <div className="grid grid-cols-1 gap-10 border-b-2 border-border/30 pb-12 md:grid-cols-2 lg:grid-cols-5">
        <div className="space-y-4 lg:col-span-2"><Link to="/" className="flex items-center gap-3"><span className="flex size-10 shrink-0 items-center justify-center border-2 bg-neo-yellow font-display text-xl font-extrabold text-black shadow-neo">{site.initials}.</span><span className="font-display text-xl font-extrabold uppercase">{site.name}</span></Link><p className="max-w-sm text-sm leading-relaxed text-muted-foreground">{site.footer.description}</p><div className="flex flex-wrap gap-3">{site.socials.map((social) => { const Icon = icons[social.icon]; return <Button key={social.name} variant="outline" size="icon" asChild><a href={social.href} aria-label={social.label} title={social.label} target="_blank" rel="noopener noreferrer"><Icon aria-hidden="true" /></a></Button> })}</div><p className="text-xs text-muted-foreground">Tautan sosial adalah akun contoh.</p></div>
        <div><h2 className="mb-3 font-display font-bold">{site.footer.navigationTitle}</h2><ul className="space-y-2 text-sm text-muted-foreground">{site.footer.navigation.map((link) => <li key={link.href}><Link className="hover:underline" to={link.href}>{link.label}</Link></li>)}<li><Link to="/artikel" className="hover:underline">Artikel</Link></li></ul></div>
        <div><h2 className="mb-3 font-display font-bold">{site.footer.technologyTitle}</h2><ul className="space-y-2 font-mono text-xs text-muted-foreground">{site.footer.technologies.map((tech) => <li key={tech}>{tech}</li>)}</ul></div>
        <div className="min-w-0"><h2 className="mb-3 font-display font-bold">{site.footer.contactTitle}</h2><p className="mb-4 text-xs text-muted-foreground">{site.footer.contactDescription}</p><a className="block text-sm font-bold underline underline-offset-4" href={site.whatsapp.href} target="_blank" rel="noopener noreferrer">{site.whatsapp.label}</a><a className="mt-3 block break-words text-sm font-bold underline underline-offset-4" href={site.email.href}>{site.email.label}</a></div>
      </div><div className="flex flex-col justify-between gap-3 pt-8 font-mono text-xs text-muted-foreground sm:flex-row"><p>{site.footer.copyright}</p><p>Portofolio demo · Template Stitch</p></div>
    </div></footer>
  </>
}
