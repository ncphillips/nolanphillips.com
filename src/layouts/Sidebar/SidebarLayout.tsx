import type { PropsWithChildren } from "react"

export type SidebarLayoutProps = PropsWithChildren & {}

export const SidebarLayout: React.FC<SidebarLayoutProps> = ({ children }) => (
  <div className="relative flex min-h-screen min-w-full flex-row bg-zinc-50 dark:bg-zinc-900">
    {children}
  </div>
)
