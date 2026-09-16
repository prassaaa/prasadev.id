import { PageMeta } from '@/components/page-meta'
import { site } from '@/content/site'
import { Hero } from '@/features/home/hero'
import { About } from '@/features/home/about'
import { Services } from '@/features/home/services'
import { ProjectShowcase } from '@/features/home/project-showcase'
import { Experience } from '@/features/home/experience'
import { Education } from '@/features/home/education'
import { Faq } from '@/features/home/faq'
import { Contact } from '@/features/home/contact'

export default function Home() {
  return (
    <>
      <PageMeta title={`${site.brand} — ${site.name} | Software Engineer`} description="Portofolio Prasetyo Ari Wibowo, Software Engineer di Kediri. Pengembangan website, sistem operasional, dan aplikasi mobile dengan Laravel, React, dan Flutter." />
      <Hero />
      <About />
      <Services />
      <ProjectShowcase />
      <Experience />
      <Education />
      <Faq />
      <Contact />
    </>
  )
}
