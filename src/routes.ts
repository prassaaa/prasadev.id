import { index, route, type RouteConfig } from '@react-router/dev/routes'
import { articles } from './content/articles'

export default [
  index('routes/home.tsx'),
  route('proyek/:slug', 'routes/project-detail.tsx'),
  route('artikel', 'routes/articles.tsx'),
  ...articles.map((article) => route(`artikel/${article.slug}`, article.routeFile)),
  route('404', 'routes/not-found.tsx', { id: 'not-found-page' }),
  route('*', 'routes/not-found.tsx', { id: 'not-found-catchall' }),
] satisfies RouteConfig
