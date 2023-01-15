import type { PropsWithChildren } from "react"
import Heading from "../../components/typography/Heading"

export type HeaderProps = PropsWithChildren & {
  title: string
}

export const Header: React.FC<HeaderProps> = ({ title, children }) => {
    return (
        <header className="flex lg:hidden flex-row justify-between gap-2 basis-full shrink-0 h-12 relative z-30 sticky top-0 bg-zinc-100 bg-opacity-70 dark:bg-opacity-70 backdrop-blur-sm dark:bg-zinc-900 border-b border-1 border-zinc-200 dark:border-zinc-800 p-5">
            <Heading as='h2' size={4}>
              {title}
            </Heading>
            {children}
        </header>
    )
}

export default Header