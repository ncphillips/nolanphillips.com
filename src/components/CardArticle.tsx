import { prettyDate } from "../lib/prettyDate"
import Heading from "./typography/Heading"
import Text from "./typography/Text"

export type Article = any

export type CardArticleProps = {
  article: Article
  active?: boolean
}

export const CardArticle: React.FC<CardArticleProps> =({ article, active = false }) => {
  const classes = ["flex flex-col rounded-md hover:bg-zinc-200 dark:hover:bg-zinc-800 dark:active:bg-zinc-800 py-2 px-4"]

  if (active) classes.push("bg-zinc-300 dark:bg-zinc-700")

  return (
    <a href={`/writing/${article.slug}`} rel="prefetch">
      <article className={classes.join(' ')}>
        <Heading as='h3' size={4}>
          {article.frontmatter.title}
        </Heading>
        <Text color='muted'>
          <span className="break-keep">{prettyDate(article.frontmatter.created)} · {article.readingTime.text} min read</span>
        </Text>
      </article>
    </a>
  )
}