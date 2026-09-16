import { articles } from '@/content/articles'
import ArticleContent from '@/content/articles/membangun-komponen-portofolio-modular.mdx'
import { ArticleLayout } from '@/features/articles/article-layout'

export default function ArticleDemo() {
  const article = articles.find((entry) => entry.slug === 'membangun-komponen-portofolio-modular')
  if (!article) throw new Error('Metadata artikel demo tidak ditemukan')

  return <ArticleLayout article={article}><ArticleContent /></ArticleLayout>
}
