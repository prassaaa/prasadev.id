import { useLocation } from 'react-router'
import { site } from '@/content/site'

export function PageMeta({
  title,
  description,
  type = 'website',
  noindex = false,
}: {
  title: string
  description: string
  type?: 'website' | 'article'
  noindex?: boolean
}) {
  const { pathname } = useLocation()
  const path = pathname.length > 1 ? pathname.replace(/\/$/, '') : pathname
  const url = `${site.url}${path}`
  const image = `${site.url}${site.ogImage}`
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      {noindex && <meta name="robots" content="noindex" />}
      <link rel="canonical" href={url} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={site.brand} />
      <meta property="og:locale" content="id_ID" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="489" />
      <meta property="og:image:height" content="510" />
      <meta property="og:image:alt" content={`Logo ${site.brand}`} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </>
  )
}
