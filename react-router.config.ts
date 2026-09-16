import type { Config } from '@react-router/dev/config'
import { projects } from './src/content/projects.ts'
import { articles } from './src/content/articles.ts'

export default {
  appDirectory: 'src',
  ssr: false,
  prerender: ['/', '/artikel', ...projects.map(({ slug }) => `/proyek/${slug}`), ...articles.map(({ slug }) => `/artikel/${slug}`), '/404'],
} satisfies Config
