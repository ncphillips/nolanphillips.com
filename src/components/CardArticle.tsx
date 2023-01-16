import { prettyDate } from "../lib/prettyDate"
import Heading from "./typography/Heading"
import Text from "./typography/Text"

export type Article = any

export type CardArticleProps = {
  article: Article
  active?: boolean
}

export const CardArticle: React.FC<CardArticleProps> =({ article, active = false }) => {
  const classes = ["absolute z-0 inset-1 group-hover:-inset-0 group-active:-inset-1 rounded-2xl bg-zinc-200 dark:bg-zinc-800 opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-all duration-200 ease-bounce"]

  if (active) classes.push('opacity-100')

  return (
    <a href={`/writing/${article.slug}`} rel="prefetch">
      <article className="z-0 group relative flex flex-col gap-2 p-4">
        <span className={classes.join(' ')} />
        <span className="relative z-10">
          <Heading as='h3' size={4}>
            {article.frontmatter.title}
          </Heading>
          <Text color='muted'>
            <span className="break-keep">{prettyDate(article.frontmatter.created)} · {article.readingTime.text} min read</span>
          </Text>
          </span>
      </article>
    </a>
  )
}