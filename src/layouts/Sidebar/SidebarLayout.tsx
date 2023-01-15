import type { PropsWithChildren } from "react"

export type SidebarLayoutProps = PropsWithChildren & {}

export const SidebarLayout: React.FC<SidebarLayoutProps> = ({ children }) => (
  <div className="relative bg-zinc-50 dark:bg-zinc-900 flex flex-row min-w-full min-h-screen">
    {children}
  </div>
)