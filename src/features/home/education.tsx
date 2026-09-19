import { motion, useReducedMotion } from 'motion/react'
import { Award, Users } from 'lucide-react'
import { SectionHeading } from '@/components/ui/section-heading'
import { SiteImage } from '@/components/site-image'
import { education, site } from '@/content/site'

const contributionStyles = [
  { badge: 'bg-neo-yellow text-black', shadow: 'shadow-neo-yellow' },
  { badge: 'bg-neo-cyan text-black', shadow: 'shadow-neo-cyan' },
  { badge: 'bg-neo-lime text-black', shadow: 'shadow-neo-lime' },
  { badge: 'bg-neo-pink text-black', shadow: 'shadow-neo-pink' },
  { badge: 'bg-neo-yellow text-black', shadow: 'shadow-neo-cyan' },
]
const orgShadows = ['shadow-neo-pink', 'shadow-neo-cyan', 'shadow-neo-yellow']
const orgBadges = ['bg-neo-pink text-black', 'bg-neo-cyan text-black', 'bg-neo-yellow text-black']
const orgScopes = ['BEM KAMPUS', 'KORWIL 7 (IMSII)', 'HIMPUNAN PRODI']
const contributionEvidenceMap: Record<string, { href: string; label: string }> = {
  'Pemateri Workshop Kebudayaan Digital Pusakakediri.com (2026)': {
    href: '#evidence-dokumentasi-disparbud',
    label: 'Lihat Foto Dokumentasi ↘',
  },
  'Juri Lomba Lawatan Budaya SMA/SMK se-Kabupaten Kediri': {
    href: '#evidence-juri-lawatan',
    label: 'Lihat Sertifikat Juri ↘',
  },
  'Aplikasi Mobile "HortiKita" Bersertifikat HAKI': {
    href: '#evidence-haki-flutter',
    label: 'Lihat Sertifikat HAKI ↘',
  },
  'Pemateri Workshop Mengenal WordPress & Instalasi CMS': {
    href: '#evidence-workshop-kampus',
    label: 'Lihat Sertifikat Pemateri ↘',
  },
  'Asisten Dosen Praktek Dasar Pemrograman Web': {
    href: '#evidence-asisten-dosen',
    label: 'Lihat Surat Keterangan Asdos ↘',
  },
}

export function Education() {
  const reducedMotion = useReducedMotion()

  return (
    <section id="education" className="section-shell overflow-hidden bg-muted">
      <div className="site-container">
        {/* Section Header */}
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 35, scale: 0.98 }}
          whileInView={reducedMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.2, margin: '200px 0px 0px 0px' }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mb-10 max-w-3xl">
          <SectionHeading label={site.education.eyebrow} accent="cyan">
            {site.education.title}
          </SectionHeading>
          <p className="font-mono text-xs font-bold tracking-wider text-muted-foreground uppercase">
            Pendidikan Formal, Kontribusi Akademik, dan Jejak Organisasi
          </p>
        </motion.div>

        {/* 1. Academic Diploma & Degree Showcase */}
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 40, scale: 0.98 }}
          whileInView={reducedMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.2, margin: '200px 0px 0px 0px' }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          whileHover={reducedMotion ? undefined : { x: -3, y: -3, transition: { duration: 0.15 } }}
          className="relative mb-10 border-2 border-border bg-card p-6 shadow-neo-cyan sm:p-8">
          {/* Window Header Bar */}
          <div className="mb-6 flex flex-wrap items-center justify-between gap-2 border-b-2 border-border/30 pb-3 font-mono text-xs">
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1" aria-hidden="true">
                <span className="size-2 rounded-full border border-border bg-neo-pink" />
                <span className="size-2 rounded-full border border-border bg-neo-yellow" />
                <span className="size-2 rounded-full border border-border bg-neo-lime" />
              </div>
              <span className="text-[10px] font-bold tracking-wider text-muted-foreground uppercase sm:text-xs">
                ACADEMIC CREDENTIAL & FORMAL DIPLOMA
              </span>
            </div>
            <span className="border border-border bg-neo-lime px-2.5 py-0.5 font-mono text-[10px] font-black text-black uppercase shadow-sm">
              ● TERVERIFIKASI LULUS
            </span>
          </div>

          <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-12">
            {/* University Logo & GPA */}
            <div className="flex items-center gap-4 lg:col-span-4">
              <div className="relative shrink-0 border-2 border-border bg-background p-2 shadow-neo">
                <SiteImage
                  src="/assets/images/unp.webp"
                  alt="Logo Universitas Nusantara PGRI Kediri"
                  natural
                  className="size-16 object-contain sm:size-20"
                />
              </div>
              <div className="space-y-1 font-mono">
                <span className="inline-block border border-border bg-neo-yellow px-2.5 py-0.5 text-xs font-black text-black shadow-sm">
                  {education.gpa}
                </span>
                <p className="text-xs font-bold text-muted-foreground">
                  Periode: {education.period}
                </p>
              </div>
            </div>

            {/* Degree & Program Info */}
            <div className="space-y-1.5 lg:col-span-8">
              <h3 className="font-display text-2xl leading-tight font-extrabold sm:text-3xl lg:text-4xl">
                {education.degree}
              </h3>
              <p className="text-base font-medium text-foreground sm:text-lg">
                {education.institution}
              </p>
              <p className="pt-1 text-sm leading-relaxed text-muted-foreground">
                Program studi Sistem Informasi dengan fokus pada perancangan arsitektur perangkat
                lunak, sistem basis data, dan integrasi aplikasi web & mobile.
              </p>
            </div>
          </div>
        </motion.div>

        {/* 2. Split Showcase: Kontribusi Teknis (Kiri) & Rekam Jejak Organisasi (Kanan) */}
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
          {/* Kiri (6 cols): Kontribusi Akademik & HAKI */}
          <div className="space-y-4 lg:col-span-6">
            <motion.div
              initial={reducedMotion ? false : { opacity: 0, x: -20 }}
              whileInView={reducedMotion ? undefined : { opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3, margin: '200px 0px 0px 0px' }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center gap-2.5 border-b-2 border-border/40 pb-3">
              <Award className="size-5 text-neo-yellow" aria-hidden="true" />
              <h3 className="font-display text-xl font-bold sm:text-2xl">
                Kontribusi, Pelatihan & Kepakaran
              </h3>
            </motion.div>

            <div className="space-y-4">
              {education.contributions.map((item, idx) => {
                const style = contributionStyles[idx % contributionStyles.length]
                return (
                  <motion.article
                    key={item.title}
                    initial={reducedMotion ? false : { opacity: 0, x: -35, y: 15 }}
                    whileInView={reducedMotion ? undefined : { opacity: 1, x: 0, y: 0 }}
                    viewport={{ once: false, amount: 0.15, margin: '200px 0px 0px 0px' }}
                    transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
                    whileHover={
                      reducedMotion ? undefined : { x: 4, y: -2, transition: { duration: 0.15 } }
                    }
                    className={`border-2 border-border bg-card p-5 sm:p-6 ${style.shadow} transition-shadow`}>
                    <div className="mb-2.5 flex flex-wrap items-center justify-between gap-2">
                      <h4 className="font-display text-lg leading-snug font-bold sm:text-xl">
                        {item.title}
                      </h4>
                      <div className="flex items-center gap-2">
                        {'period' in item && Boolean(item.period) && (
                          <span className="font-mono text-xs font-bold text-muted-foreground">
                            {item.period}
                          </span>
                        )}
                        <span
                          className={`border border-border px-2 py-0.5 font-mono text-[10px] font-black uppercase shadow-sm ${style.badge}`}>
                          {('category' in item && item.category) || 'KONTRIBUSI'}
                        </span>
                      </div>
                    </div>
                    <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                      {item.description}
                    </p>

                    {contributionEvidenceMap[item.title] && (
                      <div className="mt-3.5 border-t border-border/20 pt-2.5">
                        <a
                          href={contributionEvidenceMap[item.title].href}
                          className="inline-flex items-center gap-1.5 border border-border bg-background px-2.5 py-1 font-mono text-[11px] font-bold text-foreground transition-all hover:bg-neo-yellow hover:text-black hover:shadow-sm">
                          <span>{contributionEvidenceMap[item.title].label}</span>
                        </a>
                      </div>
                    )}
                  </motion.article>
                )
              })}
            </div>
          </div>

          {/* Kanan (6 cols): Pengalaman Organisasi & Kepemimpinan */}
          <div className="space-y-4 lg:col-span-6">
            <motion.div
              initial={reducedMotion ? false : { opacity: 0, x: 20 }}
              whileInView={reducedMotion ? undefined : { opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3, margin: '200px 0px 0px 0px' }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center gap-2.5 border-b-2 border-border/40 pb-3">
              <Users className="size-5 text-neo-cyan" aria-hidden="true" />
              <h3 className="font-display text-xl font-bold sm:text-2xl">Pengalaman Organisasi</h3>
            </motion.div>
            <div className="space-y-4">
              {education.organizations.map((item, idx) => (
                <motion.article
                  key={item.name}
                  initial={reducedMotion ? false : { opacity: 0, x: 35, y: 15 }}
                  whileInView={reducedMotion ? undefined : { opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: false, amount: 0.15, margin: '200px 0px 0px 0px' }}
                  transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={
                    reducedMotion ? undefined : { x: -4, y: -2, transition: { duration: 0.15 } }
                  }
                  className={`border-2 border-border bg-card p-5 sm:p-6 ${orgShadows[idx]} transition-shadow`}>
                  <div className="mb-2.5 flex flex-wrap items-center justify-between gap-2 font-mono text-xs">
                    <span
                      className={`border border-border px-2 py-0.5 text-[10px] font-black uppercase shadow-sm ${orgBadges[idx]}`}>
                      {orgScopes[idx]}
                    </span>
                    <span className="font-bold text-muted-foreground">{item.period}</span>
                  </div>
                  <h4 className="font-display text-base leading-snug font-bold text-foreground sm:text-lg">
                    {item.role}
                  </h4>
                  <p className="mt-1 font-mono text-xs text-muted-foreground">{item.name}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
