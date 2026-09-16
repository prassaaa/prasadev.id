export type Article = {
  slug: string
  title: string
  description: string
  tags: string[]
  isDemo: boolean
  routeFile: string
}

export const articles: Article[] = [
  {
    slug: 'membangun-komponen-portofolio-modular',
    title: 'Membangun Komponen Portofolio yang Mudah Dirawat',
    description:
      'Contoh artikel tentang memisahkan konten, komponen, dan state pada portofolio React.',
    tags: ['React', 'Arsitektur Frontend'],
    isDemo: true,
    routeFile: 'routes/article-demo.tsx',
  },
]
