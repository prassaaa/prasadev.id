export type Article = {
  slug: string
  title: string
  description: string
  tags: string[]
  routeFile: string
}

// Add an entry only after the author approves the article for publication.
export const articles: Article[] = []
