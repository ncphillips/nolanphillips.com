import { basename } from "path"
import type React from "react"

type RawArticle = {
  file: any
  Content: React.FC<{ components: any }>
  frontmatter: {
    title: string
    description?: string
    category?: string
    created?: string
    draft?: boolean
  }
}

type Article = RawArticle & {
  slug: string
}

type Options = {
  category?: string
}

export const getArticles = (options?: Options) => {
  const pathsToArticles = import.meta.glob<true, string, any>(
    "../../content/articles/*.{md,mdx}",
    { eager: true }
  )

  const articles: Article[] = []

  for (const path in pathsToArticles) {
    articles.push(addSlugToArticle(pathsToArticles[path]))
  }

  return articles.filter(byCategory(options?.category)).sort(byCreated)
}

export const getArticleBySlug = (slug: string) => {
  return getArticles().find((article) => article.slug === slug)!
}

function addSlugToArticle(
  rawArticle: RawArticle
): RawArticle & { slug: string } {
  return { ...rawArticle, slug: basename(rawArticle.file).split(".")[0] }
}

function byCreated(a: Article, b: Article) {
  return (
    Date.parse(b.frontmatter.created || "") -
    Date.parse(a.frontmatter.created || "")
  )
}

const byCategory = (category: string | undefined) => {
  if (!category) return () => true

  return (article: Article) => article.frontmatter.category === category
}
