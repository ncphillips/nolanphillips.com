import type { PropsWithChildren } from "react"

export type CardProps = {} & PropsWithChildren

export const Card: React.FC<CardProps> = ({ children }) => {
  return (
    <div className="border-1 w-full overflow-hidden rounded-md border-white bg-zinc-50 p-3 shadow-md ring-1 ring-zinc-200 dark:border-zinc-900 dark:bg-zinc-800 dark:ring-zinc-700 dark:drop-shadow-md">
      {children}
    </div>
  )
}

export default Card
