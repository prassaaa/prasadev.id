import { useEffect, useState } from 'react'
import { motion, stagger, useAnimate, useReducedMotion } from 'motion/react'
import { Code2, ExternalLink, Layers, Mail, Network, Smartphone, Workflow } from 'lucide-react'
import { Link } from 'react-router'
import { Button } from '@/components/ui/button'
import { site } from '@/content/site'

const typewriterPhrases = [
  'Aplikasi Web Skalabel',
  'Sistem Operasional & Kasir',
  'Aplikasi Mobile Flutter',
  'REST API & Integrasi Layanan',
] as const

function useTypewriter(
  phrases: readonly string[],
  reducedMotion = false,
  speed = 60,
  pause = 1800,
  deleteSpeed = 30,
) {
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [text, setText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    if (reducedMotion) return

    const currentPhrase = phrases[phraseIndex]

    if (!isDeleting && text === currentPhrase) {
      const timeout = setTimeout(() => setIsDeleting(true), pause)
      return () => clearTimeout(timeout)
    }

    if (isDeleting && text === '') {
      const timeout = setTimeout(() => {
        setIsDeleting(false)
        setPhraseIndex((prev) => (prev + 1) % phrases.length)
      }, speed)
      return () => clearTimeout(timeout)
    }

    const nextSpeed = isDeleting ? deleteSpeed : speed
    const timeout = setTimeout(() => {
      setText((prev) =>
        isDeleting
          ? currentPhrase.slice(0, prev.length - 1)
          : currentPhrase.slice(0, prev.length + 1),
      )
    }, nextSpeed)

    return () => clearTimeout(timeout)
  }, [text, isDeleting, phraseIndex, phrases, speed, pause, deleteSpeed, reducedMotion])

  if (reducedMotion) {
    return 'Aplikasi Web, Mobile & Sistem Operasional'
  }

  return text
}

const tabs = [
  {
    id: 'ts',
    filename: 'prasadev.ts',
    lang: 'TypeScript',
    accentColor: 'text-neo-yellow',
    activeBorder: 'border-neo-yellow',
    code: [
      { line: 1, text: '// Full-Stack & Mobile Software Engineer', type: 'comment' },
      {
        line: 2,
        parts: [
          { text: 'const ', color: 'text-neo-pink font-bold' },
          { text: 'engineer', color: 'text-foreground font-bold' },
          { text: ' = {', color: 'text-foreground' },
        ],
      },
      {
        line: 3,
        parts: [
          { text: '  name: ', color: 'text-muted-foreground' },
          { text: `'Prasetyo Ari Wibowo'`, color: 'text-neo-lime' },
          { text: ',', color: 'text-foreground' },
        ],
      },
      {
        line: 4,
        parts: [
          { text: '  role: ', color: 'text-muted-foreground' },
          { text: `'Software Engineer'`, color: 'text-neo-lime' },
          { text: ',', color: 'text-foreground' },
        ],
      },
      {
        line: 5,
        parts: [
          { text: '  stack: [', color: 'text-muted-foreground' },
          { text: `'Laravel'`, color: 'text-neo-cyan' },
          { text: ', ', color: 'text-foreground' },
          { text: `'React'`, color: 'text-neo-cyan' },
          { text: ', ', color: 'text-foreground' },
          { text: `'Flutter'`, color: 'text-neo-cyan' },
          { text: '],', color: 'text-foreground' },
        ],
      },
      {
        line: 6,
        parts: [
          { text: '  focus: ', color: 'text-muted-foreground' },
          { text: `'Alur Kerja & Integrasi Sistem'`, color: 'text-neo-lime' },
          { text: ',', color: 'text-foreground' },
        ],
      },
      {
        line: 7,
        parts: [{ text: '};', color: 'text-foreground' }],
      },
    ],
  },
  {
    id: 'php',
    filename: 'api.php',
    lang: 'Laravel / PHP',
    accentColor: 'text-neo-pink',
    activeBorder: 'border-neo-pink',
    code: [
      { line: 1, text: '// REST API Architecture & Endpoints', type: 'comment' },
      {
        line: 2,
        parts: [
          { text: 'Route', color: 'text-neo-cyan font-bold' },
          { text: '::', color: 'text-foreground' },
          { text: 'prefix', color: 'text-neo-yellow' },
          { text: `('v1')`, color: 'text-neo-lime' },
          { text: '->', color: 'text-foreground' },
          { text: 'group', color: 'text-neo-yellow' },
          { text: '(function () {', color: 'text-foreground' },
        ],
      },
      {
        line: 3,
        parts: [
          { text: '  Route::', color: 'text-muted-foreground' },
          { text: 'post', color: 'text-neo-yellow' },
          { text: `('/auth/verify', [AuthController::`, color: 'text-foreground' },
          { text: 'class', color: 'text-neo-pink font-bold' },
          { text: `, 'login']);`, color: 'text-foreground' },
        ],
      },
      {
        line: 4,
        parts: [
          { text: '  Route::', color: 'text-muted-foreground' },
          { text: 'apiResource', color: 'text-neo-yellow' },
          { text: `('/operasional', SistemController::`, color: 'text-foreground' },
          { text: 'class', color: 'text-neo-pink font-bold' },
          { text: `);`, color: 'text-foreground' },
        ],
      },
      {
        line: 5,
        parts: [
          { text: '  Route::', color: 'text-muted-foreground' },
          { text: 'post', color: 'text-neo-yellow' },
          { text: `('/payment/gateway', [PayController::`, color: 'text-foreground' },
          { text: 'class', color: 'text-neo-pink font-bold' },
          { text: `, 'charge']);`, color: 'text-foreground' },
        ],
      },
      {
        line: 6,
        parts: [{ text: '});', color: 'text-foreground' }],
      },
      {
        line: 7,
        parts: [
          { text: '// Response: 200 OK (Validated Data)', color: 'text-muted-foreground italic' },
        ],
      },
    ],
  },
  {
    id: 'dart',
    filename: 'app.dart',
    lang: 'Flutter / Dart',
    accentColor: 'text-neo-cyan',
    activeBorder: 'border-neo-cyan',
    code: [
      { line: 1, text: '// Mobile Android Native Client', type: 'comment' },
      {
        line: 2,
        parts: [
          { text: 'class ', color: 'text-neo-pink font-bold' },
          { text: 'PrasadevApp ', color: 'text-neo-cyan font-bold' },
          { text: 'extends ', color: 'text-neo-pink font-bold' },
          { text: 'StatelessWidget {', color: 'text-foreground' },
        ],
      },
      {
        line: 3,
        parts: [
          { text: '  final ', color: 'text-neo-pink font-bold' },
          { text: 'ApiClient ', color: 'text-neo-cyan' },
          { text: 'api = ', color: 'text-foreground' },
          { text: 'ApiClient', color: 'text-neo-cyan' },
          { text: '(baseUrl: ', color: 'text-muted-foreground' },
          { text: "'https://api.prasadev.id');", color: 'text-neo-lime' },
        ],
      },
      {
        line: 4,
        parts: [{ text: '  @override', color: 'text-neo-yellow italic' }],
      },
      {
        line: 5,
        parts: [
          { text: '  Widget ', color: 'text-neo-cyan' },
          { text: 'build', color: 'text-neo-yellow' },
          { text: '(BuildContext context) => ', color: 'text-foreground' },
          { text: 'MaterialApp', color: 'text-neo-cyan font-bold' },
          { text: '(', color: 'text-foreground' },
        ],
      },
      {
        line: 6,
        parts: [
          { text: '    home: ', color: 'text-muted-foreground' },
          { text: 'OperationalDashboard', color: 'text-neo-cyan' },
          { text: '(),', color: 'text-foreground' },
        ],
      },
      {
        line: 7,
        parts: [{ text: '  );', color: 'text-foreground' }],
      },
    ],
  },
]

export function Hero() {
  const [scope, animate] = useAnimate()
  const reducedMotion = useReducedMotion()
  const typewriterText = useTypewriter(typewriterPhrases, !!reducedMotion)
  const [activeTab, setActiveTab] = useState<(typeof tabs)[number]['id']>('ts')

  useEffect(() => {
    if (reducedMotion) return
    const controls = animate(
      '[data-hero-part]',
      { y: [16, 0], opacity: [0, 1] },
      { duration: 0.45, delay: stagger(0.06) },
    )
    return () => controls.stop()
  }, [animate, reducedMotion])

  const currentTab = tabs.find((t) => t.id === activeTab) || tabs[0]

  return (
    <section
      id="hero"
      className="section-shell bg-grid-dots relative overflow-hidden bg-background pt-8 pb-16 lg:py-20">
      <motion.div
        ref={scope}
        initial={false}
        className="site-container grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
        {/* Left Column: Headlines, Typewriter & CTAs */}
        <div data-hero-part className="min-w-0 space-y-6 lg:col-span-7">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2.5 border-2 border-border bg-card px-3.5 py-1.5 font-mono text-xs font-bold text-foreground shadow-neo">
            <span className="relative flex size-2.5">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-neo-lime opacity-75" />
              <span className="relative inline-flex size-2.5 rounded-full bg-neo-lime" />
            </span>
            <span>BERBASIS DI KEDIRI</span>
            <span className="text-muted-foreground">/</span>
            <span className="text-muted-foreground uppercase">{site.availability}</span>
          </div>

          {/* Big Headline with Typewriter */}
          <h1 className="min-h-[2.2em] font-display text-4xl leading-[1.08] font-extrabold tracking-tight sm:min-h-[2.18em] sm:text-5xl lg:text-6xl">
            Membangun{' '}
            <span className="block text-foreground sm:inline">
              <span className="underline decoration-neo-yellow decoration-4 underline-offset-8">
                {typewriterText}
              </span>
              {!reducedMotion && (
                <span
                  className="ml-1 inline-block h-[0.9em] w-[4px] animate-pulse bg-neo-yellow align-middle"
                  aria-hidden="true"
                />
              )}
            </span>
          </h1>

          {/* Subheadline value proposition */}
          <p className="max-w-2xl text-base leading-relaxed font-medium text-muted-foreground sm:text-lg">
            {site.summary}
          </p>

          {/* Capability Highlight Chips */}
          <div className="grid grid-cols-1 gap-2.5 py-1 font-mono text-xs sm:grid-cols-3 sm:gap-3">
            <div className="flex items-center gap-2 border-2 border-border bg-card p-2.5 shadow-neo">
              <div className="flex size-7 shrink-0 items-center justify-center border border-border bg-neo-yellow font-bold text-black">
                <Code2 className="size-4" aria-hidden="true" />
              </div>
              <div className="min-w-0">
                <p className="leading-tight font-bold text-foreground">Web Apps</p>
                <p className="text-[10px] text-muted-foreground">Laravel & React</p>
              </div>
            </div>

            <div className="flex items-center gap-2 border-2 border-border bg-card p-2.5 shadow-neo-cyan">
              <div className="flex size-7 shrink-0 items-center justify-center border border-border bg-neo-cyan font-bold text-black">
                <Smartphone className="size-4" aria-hidden="true" />
              </div>
              <div className="min-w-0">
                <p className="leading-tight font-bold text-foreground">Mobile Android</p>
                <p className="text-[10px] text-muted-foreground">Flutter & Dart</p>
              </div>
            </div>

            <div className="flex items-center gap-2 border-2 border-border bg-card p-2.5 shadow-neo-lime">
              <div className="flex size-7 shrink-0 items-center justify-center border border-border bg-neo-lime font-bold text-black">
                <Network className="size-4" aria-hidden="true" />
              </div>
              <div className="min-w-0">
                <p className="leading-tight font-bold text-foreground">REST API</p>
                <p className="text-[10px] text-muted-foreground">Integrasi Layanan</p>
              </div>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3.5 pt-2">
            <Button asChild size="lg" className="shadow-neo">
              <Link to="/#portfolio">
                <Layers aria-hidden="true" /> Lihat Proyek
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="shadow-neo">
              <Link to="/#contact">
                <Mail aria-hidden="true" /> Diskusikan Kebutuhan
              </Link>
            </Button>
            {site.socials.slice(0, 1).map((social) => (
              <Button key={social.name} asChild variant="outline" size="icon">
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}>
                  <ExternalLink aria-hidden="true" />
                </a>
              </Button>
            ))}
          </div>
        </div>

        {/* Right Column: Developer Code Console & Architecture Simulator */}
        <div data-hero-part className="min-w-0 px-2 sm:px-3 lg:col-span-5">
          <div className="relative mx-auto max-w-lg lg:max-w-none">
            {/* Angled decorative backdrops */}
            <div
              aria-hidden="true"
              className="absolute -top-3 -right-2 size-full -rotate-1 border-2 border-border bg-neo-purple"
            />
            <div
              aria-hidden="true"
              className="absolute -bottom-3 -left-2 size-full rotate-1 border-2 border-border bg-neo-yellow"
            />

            {/* Main Console Box */}
            <div className="relative flex flex-col border-2 border-border bg-card shadow-neo-cyan">
              {/* Window Header with Controls and Tabs */}
              <div className="flex flex-wrap items-center justify-between gap-2 border-b-2 border-border bg-muted/80 px-3.5 py-2.5 font-mono text-xs">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1" aria-hidden="true">
                    <span className="size-2.5 rounded-full border border-border bg-red-500" />
                    <span className="size-2.5 rounded-full border border-border bg-neo-yellow" />
                    <span className="size-2.5 rounded-full border border-border bg-neo-lime" />
                  </div>
                  <span className="ml-1 text-[11px] font-bold text-muted-foreground">
                    code-console
                  </span>
                </div>

                {/* Language / File Tabs */}
                <div className="flex items-center gap-1 font-mono text-[11px]" role="tablist">
                  {tabs.map((tab) => {
                    const isActive = tab.id === activeTab
                    return (
                      <button
                        key={tab.id}
                        type="button"
                        role="tab"
                        aria-selected={isActive}
                        onClick={() => setActiveTab(tab.id)}
                        className={`cursor-pointer px-2 py-0.5 font-bold transition-colors ${
                          isActive
                            ? `border-b-2 bg-background text-foreground ${tab.activeBorder}`
                            : 'text-muted-foreground hover:text-foreground'
                        }`}>
                        {tab.filename}
                      </button>
                    )
                  })}
                </div>
              </div>

              {/* Code Display Area */}
              <div className="min-h-[220px] overflow-x-auto p-4 font-mono text-xs leading-relaxed sm:text-[13px]">
                <div className="mb-2 flex items-center justify-between border-b border-border/20 pb-2 text-[10px] text-muted-foreground">
                  <span className="font-bold tracking-wider uppercase">{currentTab.lang}</span>
                  <span className="font-bold text-neo-lime">● SYNTAX READY</span>
                </div>
                <pre className="space-y-1">
                  <code>
                    {currentTab.code.map((lineItem) => (
                      <div key={lineItem.line} className="flex items-start">
                        <span className="w-6 shrink-0 text-[11px] text-muted-foreground/60 select-none">
                          {lineItem.line}
                        </span>
                        <span className="flex-1">
                          {lineItem.type === 'comment' ? (
                            <span className="text-muted-foreground italic">{lineItem.text}</span>
                          ) : (
                            lineItem.parts?.map((part, pIdx) => (
                              <span key={pIdx} className={part.color}>
                                {part.text}
                              </span>
                            ))
                          )}
                        </span>
                      </div>
                    ))}
                  </code>
                </pre>
              </div>

              {/* Live Architecture Pipeline Strip */}
              <div className="border-t-2 border-border bg-muted/70 p-3.5 font-mono text-xs">
                <div className="flex items-center justify-between border-b border-border/20 pb-2 text-[11px]">
                  <span className="flex items-center gap-1.5 font-bold text-foreground">
                    <Workflow className="size-3.5 text-neo-lime" aria-hidden="true" />
                    architecture-pipeline
                  </span>
                  <span className="flex items-center gap-1.5 text-[10px] font-extrabold text-neo-lime">
                    <span className="size-1.5 animate-pulse rounded-full bg-neo-lime" />
                    CONNECTED
                  </span>
                </div>
                <div className="mt-2.5 flex items-center justify-between gap-1 text-[10px] font-bold sm:text-[11px]">
                  <div className="flex-1 border border-border bg-background px-2 py-1 text-center">
                    React Web
                  </div>
                  <span className="px-0.5 font-black text-neo-yellow">⟷</span>
                  <div className="flex-1 border border-border bg-background px-2 py-1 text-center">
                    Laravel API
                  </div>
                  <span className="px-0.5 font-black text-neo-cyan">⟷</span>
                  <div className="flex-1 border border-border bg-background px-2 py-1 text-center">
                    Flutter App
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
