import { useEffect, useMemo, useState } from 'react'
import { motion, useReducedMotion } from 'motion/react'
import { ArrowUpRight, GitCommit, Terminal, Users } from 'lucide-react'
import { SectionHeading } from '@/components/ui/section-heading'
import { site } from '@/content/site'
import rawGithubData from '@/content/github.json'

interface Day {
  date: string
  contributionCount: number
  contributionLevel:
    'NONE' | 'FIRST_QUARTILE' | 'SECOND_QUARTILE' | 'THIRD_QUARTILE' | 'FOURTH_QUARTILE'
  weekday: number
}

interface Week {
  contributionDays: Day[]
}

interface Organization {
  name: string
  login: string
  avatarUrl: string
  url: string
}

interface GithubData {
  username: string
  name: string
  url: string
  totalContributions: number
  weeks: Week[]
  organizations: Organization[]
}

const githubData = rawGithubData as GithubData

const levelMap: Record<number, Day['contributionLevel']> = {
  0: 'NONE',
  1: 'FIRST_QUARTILE',
  2: 'SECOND_QUARTILE',
  3: 'THIRD_QUARTILE',
  4: 'FOURTH_QUARTILE',
}

function parseApiToWeeks(contributions: { date: string; count: number; level: number }[]): Week[] {
  const weeks: Week[] = []
  let currentWeekDays: Day[] = []

  contributions.forEach((item) => {
    const d = new Date(item.date)
    const weekday = d.getUTCDay()

    currentWeekDays.push({
      date: item.date,
      contributionCount: item.count,
      contributionLevel: levelMap[item.level] || 'NONE',
      weekday,
    })

    if (currentWeekDays.length === 7) {
      weeks.push({ contributionDays: currentWeekDays })
      currentWeekDays = []
    }
  })

  if (currentWeekDays.length > 0) {
    weeks.push({ contributionDays: currentWeekDays })
  }

  return weeks
}

const levelClasses: Record<Day['contributionLevel'], string> = {
  NONE: 'bg-muted/70 border-border/20',
  FIRST_QUARTILE: 'bg-neo-lime/30 border-border/40',
  SECOND_QUARTILE: 'bg-neo-lime/55 border-border/60',
  THIRD_QUARTILE: 'bg-neo-lime/80 border-border',
  FOURTH_QUARTILE: 'bg-neo-lime border-border shadow-[0_0_8px_rgba(74,222,128,0.5)]',
}

const monthNames = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'Mei',
  'Jun',
  'Jul',
  'Agu',
  'Sep',
  'Okt',
  'Nov',
  'Des',
]

function formatIndoDate(dateStr: string) {
  const d = new Date(dateStr)
  if (Number.isNaN(d.getTime())) return dateStr
  const day = d.getDate()
  const month = monthNames[d.getMonth()]
  const year = d.getFullYear()
  return `${day} ${month} ${year}`
}

export function GithubActivity() {
  const reducedMotion = useReducedMotion()
  const [data, setData] = useState<GithubData>(githubData)
  const [isLiveSynced, setIsLiveSynced] = useState(false)
  const [hoveredDay, setHoveredDay] = useState<Day | null>(null)

  // Background Auto-Refresh (Option B): checks latest GitHub contributions silently
  useEffect(() => {
    const controller = new AbortController()

    async function autoSync() {
      try {
        const res = await fetch(
          `https://github-contributions-api.jogruber.de/v4/${githubData.username}?y=last`,
          { signal: controller.signal },
        )
        if (!res.ok) return
        const json = await res.json()
        if (!json.contributions || !Array.isArray(json.contributions)) return

        const updatedWeeks = parseApiToWeeks(json.contributions)
        if (updatedWeeks.length > 0) {
          setData((prev) => ({
            ...prev,
            totalContributions: json.total?.lastYear ?? prev.totalContributions,
            weeks: updatedWeeks,
          }))
          setIsLiveSynced(true)
        }
      } catch {
        // Silently preserve pre-rendered data if offline or blocked
      }
    }

    autoSync()
    return () => controller.abort()
  }, [])

  // Compute month positions along the 53 weeks
  const monthLabels = useMemo(() => {
    const labels: { month: string; colIndex: number }[] = []
    let lastMonth = -1

    data.weeks.forEach((week, colIdx) => {
      const firstDay = week.contributionDays[0]
      if (!firstDay) return
      const date = new Date(firstDay.date)
      const month = date.getMonth()
      if (month !== lastMonth) {
        labels.push({ month: monthNames[month], colIndex: colIdx })
        lastMonth = month
      }
    })

    return labels
  }, [data.weeks])

  // Quick stats calculations
  const stats = useMemo(() => {
    let activeDays = 0
    let maxInDay = 0

    data.weeks.forEach((week) => {
      week.contributionDays.forEach((day) => {
        if (day.contributionCount > 0) activeDays += 1
        if (day.contributionCount > maxInDay) maxInDay = day.contributionCount
      })
    })

    return {
      activeDays,
      maxInDay,
      total: data.totalContributions,
    }
  }, [data.weeks, data.totalContributions])

  return (
    <section id="activity" className="section-shell overflow-hidden bg-background">
      <div className="site-container">
        {/* Section Heading & Quick Stats Strip */}
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 35, scale: 0.98 }}
          whileInView={reducedMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.2, margin: '200px 0px 0px 0px' }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mb-10 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <SectionHeading
              label={site.activity?.eyebrow || 'AKTIVITAS KODE & KONTRIBUSI'}
              accent="lime"
              className="mb-0">
              {site.activity?.title || 'Konsistensi Pengerjaan & Jejak Komit GitHub.'}
            </SectionHeading>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
              Pencatatan repositori, pemeliharaan modul, dan kontribusi organisasi publik dalam 1
              tahun terakhir yang disinkronisasi langsung dari akun GitHub saya.
            </p>
          </div>

          {/* Quick GitHub Metric Badge */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="border-2 border-border bg-card p-3 shadow-neo sm:p-4">
              <span className="block font-mono text-[10px] font-bold text-muted-foreground uppercase">
                TOTAL KONTRIBUSI (1 TAHUN)
              </span>
              <div className="flex items-baseline gap-2">
                <span className="font-display text-2xl font-black text-neo-lime sm:text-3xl">
                  {stats.total.toLocaleString('id-ID')}
                </span>
                <span className="font-mono text-xs font-bold text-muted-foreground">
                  Komit / Aksi
                </span>
              </div>
            </div>

            <a
              href={data.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 border-2 border-border bg-card px-4 py-3 font-mono text-xs font-black shadow-neo transition-all hover:bg-neo-lime hover:text-black hover:shadow-neo-lime sm:text-sm">
              <GitCommit className="size-4" aria-hidden="true" />
              <span>Buka @{data.username}</span>
              <ArrowUpRight
                className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden="true"
              />
            </a>
          </div>
        </motion.div>

        {/* 1. Cyber-Brutalist Contribution Calendar Terminal */}
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, x: -35, y: 15 }}
          whileInView={reducedMotion ? undefined : { opacity: 1, x: 0, y: 0 }}
          viewport={{ once: false, amount: 0.15, margin: '200px 0px 0px 0px' }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="border-2 border-border bg-card p-4 shadow-neo-cyan sm:p-6 md:p-8">
          {/* Terminal Window Header Bar */}
          <div className="mb-6 flex flex-wrap items-center justify-between gap-3 border-b-2 border-border/30 pb-4 font-mono text-xs">
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1" aria-hidden="true">
                <span className="size-2 rounded-full border border-border bg-neo-pink" />
                <span className="size-2 rounded-full border border-border bg-neo-yellow" />
                <span className="size-2 rounded-full border border-border bg-neo-lime" />
              </div>
              <span className="text-[10px] font-bold tracking-wider text-muted-foreground uppercase sm:text-xs">
                01 // GITHUB CONTRIBUTION MATRIX · 53 WEEKS
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="flex items-center gap-1.5 border border-border bg-neo-lime px-2 py-0.5 font-mono text-[10px] font-black text-black uppercase shadow-sm">
                <span className="size-1.5 animate-pulse rounded-full bg-black" />
                {isLiveSynced ? 'AUTO-SYNC AKTIF (TERBARU)' : 'LIVE SYNC AKTIF'}
              </span>
            </div>
          </div>

          {/* Interactive Heatmap Grid Container */}
          <div className="scrollbar-thin overflow-x-auto pb-4">
            <div className="min-w-[780px]">
              {/* Month Header Row */}
              <div className="relative mb-2 flex h-5 font-mono text-[11px] font-bold text-muted-foreground">
                <div className="w-8 shrink-0" />
                <div className="relative flex-1">
                  {monthLabels.map((item) => (
                    <span
                      key={`${item.month}-${item.colIndex}`}
                      className="absolute uppercase"
                      style={{ left: `${(item.colIndex / 53) * 100}%` }}>
                      {item.month}
                    </span>
                  ))}
                </div>
              </div>

              {/* 7 Rows (Days) x 53 Columns (Weeks) */}
              <div className="flex gap-1">
                {/* Day Labels (Left) */}
                <div className="flex w-8 shrink-0 flex-col justify-between py-0.5 font-mono text-[9px] font-bold text-muted-foreground uppercase">
                  <span>Min</span>
                  <span>Sen</span>
                  <span>Sel</span>
                  <span>Rab</span>
                  <span>Kam</span>
                  <span>Jum</span>
                  <span>Sab</span>
                </div>

                {/* 53 Columns of Weeks */}
                <div className="flex flex-1 gap-1">
                  {data.weeks.map((week, wIdx) => (
                    <div key={wIdx} className="flex flex-1 flex-col gap-1">
                      {week.contributionDays.map((day) => (
                        <div
                          key={day.date}
                          onMouseEnter={() => setHoveredDay(day)}
                          onMouseLeave={() => setHoveredDay(null)}
                          className={`aspect-square w-full cursor-pointer rounded-none border transition-transform hover:z-10 hover:scale-125 ${levelClasses[day.contributionLevel]}`}
                          title={`${day.contributionCount} kontribusi pada ${day.date}`}
                        />
                      ))}
                    </div>
                  ))}
                </div>
              </div>

              {/* Mobile Swipe Hint */}
              <p className="mt-3 font-mono text-[10px] text-muted-foreground sm:hidden">
                ⟷ Geser horizontal untuk melihat riwayat 53 minggu penuh
              </p>
            </div>
          </div>

          {/* Terminal Bottom Bar: Live Hover Inspector & Legend */}
          <div className="mt-4 flex flex-wrap items-center justify-between gap-4 border-t-2 border-border/20 pt-4 font-mono text-xs">
            {/* Live Inspector readout */}
            <div className="flex items-center gap-2">
              <Terminal className="size-3.5 text-neo-yellow" aria-hidden="true" />
              {hoveredDay ? (
                <span>
                  <strong className="text-neo-lime">
                    {hoveredDay.contributionCount} kontribusi
                  </strong>{' '}
                  pada {formatIndoDate(hoveredDay.date)}
                </span>
              ) : (
                <span className="text-muted-foreground">
                  Arahkan kursor ke kotak untuk melihat detail harian
                </span>
              )}
            </div>

            {/* Heatmap Legend */}
            <div className="flex items-center gap-2 text-[10px] text-muted-foreground">
              <span>Sedikit</span>
              <div className="flex items-center gap-1">
                <span className="size-2.5 border border-border/20 bg-muted/70" />
                <span className="size-2.5 border border-border/40 bg-neo-lime/30" />
                <span className="size-2.5 border border-border/60 bg-neo-lime/55" />
                <span className="size-2.5 border border-border bg-neo-lime/80" />
                <span className="size-2.5 border border-border bg-neo-lime" />
              </div>
              <span>Banyak</span>
            </div>
          </div>
        </motion.div>

        {/* 2. Organizations Contributed To (Organisasi yang Pernah Dikomit) */}
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, x: 35, y: 15 }}
          whileInView={reducedMotion ? undefined : { opacity: 1, x: 0, y: 0 }}
          viewport={{ once: false, amount: 0.15, margin: '200px 0px 0px 0px' }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 border-2 border-border bg-card p-4 shadow-neo sm:p-6">
          {/* Sub Header */}
          <div className="mb-4 flex flex-wrap items-center justify-between gap-2 border-b-2 border-border/30 pb-3">
            <div className="flex items-center gap-2 font-mono text-xs">
              <Users className="size-4 text-neo-cyan" aria-hidden="true" />
              <span className="font-bold tracking-wider text-muted-foreground uppercase">
                02 // ORGANISASI & TIM TERKAIT
              </span>
            </div>
            <span className="border border-border bg-neo-cyan px-2 py-0.5 font-mono text-[10px] font-black text-black uppercase shadow-sm">
              {data.organizations.length} ORGANISASI TERVERIFIKASI
            </span>
          </div>

          <p className="mb-5 text-xs text-muted-foreground sm:text-sm">
            Organisasi GitHub tempat saya berkontribusi dalam perancangan kode, manajemen repositori
            tim, dan pengembangan modul sistem:
          </p>

          {/* 4 Organization Cards Grid */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {data.organizations.map((org) => (
              <a
                key={org.login}
                href={org.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 border-2 border-border bg-muted/40 p-3.5 transition-all hover:border-border hover:bg-background hover:shadow-neo">
                <img
                  src={org.avatarUrl}
                  alt={org.name}
                  className="size-11 shrink-0 border-2 border-border bg-background object-cover shadow-sm"
                  loading="lazy"
                />
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-1">
                    <h4 className="truncate font-display text-sm font-extrabold text-foreground group-hover:text-neo-lime">
                      {org.name}
                    </h4>
                    <ArrowUpRight className="size-3.5 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground" />
                  </div>
                  <p className="truncate font-mono text-[11px] text-muted-foreground">
                    @{org.login}
                  </p>
                  <span className="py-0.2 mt-1 inline-block border border-border/40 bg-background px-1.5 font-mono text-[9px] font-bold text-foreground">
                    KONTRIBUTOR
                  </span>
                </div>
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
