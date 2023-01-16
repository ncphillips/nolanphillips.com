import type { PropsWithChildren } from "react"
import ButtonBack from "../../components/ButtonBack"
import Heading from "../../components/typography/Heading"

export type HeaderProps = PropsWithChildren & {
  title: string
  backHref?: string
}

export const Header: React.FC<HeaderProps> = ({ title, backHref, children }) => {
    return (
      <header className="flex width:100% lg:hidden flex-row items-center gap-1 basis-full shrink-0 h-12 relative z-30 sticky top-0 bg-zinc-100 bg-opacity-70 dark:bg-opacity-70 backdrop-blur-sm dark:bg-zinc-900 border-b border-1 border-zinc-200 dark:border-zinc-800 p-5">
        {backHref && (
          <div className="-ml-3">
            <ButtonBack defaultHref={backHref} />
          </div>
        )}

        <div>
          <Heading as='h2' size={2}>
            Nolan Phillips
          </Heading>
        </div>
        
        {children}
      </header>
    )
}

export default Header