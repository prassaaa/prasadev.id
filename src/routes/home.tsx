import { PageMeta } from '@/components/page-meta'
import { site } from '@/content/site'
import { Hero } from '@/features/home/hero'
import { About } from '@/features/home/about'
import { Services } from '@/features/home/services'
import { ProjectShowcase } from '@/features/home/project-showcase'
import { Experience } from '@/features/home/experience'
import { Testimonials } from '@/features/home/testimonials'
import { Faq } from '@/features/home/faq'
import { Contact } from '@/features/home/contact'

export default function Home() {
  return (
    <>
      <PageMeta title={`${site.name} — Portofolio Demo Frontend Architect`} description="Portofolio demo dari template Stitch: keahlian frontend, proyek pilihan, pengalaman, dan kanal kontak contoh Raditya Pratama." />
      <Hero />
      <About />
      <Services />
      <ProjectShowcase />
      <Experience />
      <Testimonials />
      <Faq />
      <Contact />
    </>
  )
}
