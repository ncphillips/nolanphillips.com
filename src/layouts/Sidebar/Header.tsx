import type { PropsWithChildren } from "react"
import ButtonBack from "../../components/ButtonBack"
import Heading from "../../components/typography/Heading"

export type HeaderProps = PropsWithChildren & {
  title: string
  backHref?: string
}

export const Header: React.FC<HeaderProps> = ({
  title,
  backHref,
  children,
}) => {
  return (
    <header className="width:100% border-1 relative sticky top-0 z-30 flex h-12 shrink-0 basis-full flex-row items-center gap-1 border-b border-zinc-200 bg-zinc-100 bg-opacity-70 p-5 backdrop-blur-sm dark:border-zinc-800 dark:bg-zinc-900 dark:bg-opacity-70 lg:hidden">
      {backHref && (
        <div className="-ml-3">
          <ButtonBack defaultHref={backHref} />
        </div>
      )}

      <div>
        <Heading as="h2" size={2}>
          Nolan Phillips
        </Heading>
      </div>

      {children}
    </header>
  )
}

export default Header
