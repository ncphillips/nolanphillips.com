import type { PropsWithChildren } from "react"

export type SidebarProps = {} & PropsWithChildren

export const Sidebar: React.FC<SidebarProps> = ({ children }) => {
    return (
        <nav className="hidden lg:flex flex-col gap-2 basis-48 shrink-0 h-screen sticky top-0 md:gap-4 border-r border-1 border-zinc-200 dark:border-zinc-800 p-5">
            {children}
        </nav>
    )
}

export default Sidebar