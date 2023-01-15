import { PropsWithChildren, useEffect, useState } from "react"

export type SidebarProps = PropsWithChildren

export const SIDEBAR_EVENT = 'sidebar.toggle'

export const useSidebar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const toggleOpen = () => setIsOpen(!isOpen)

  useEffect(() => {
    let cb = () => {
      toggleOpen()
    }
    
    document.addEventListener(SIDEBAR_EVENT, cb)
  }, [])
  const toggleSidebar = () => {
    const event = new CustomEvent(SIDEBAR_EVENT)
    document.dispatchEvent(event)
  }

  return [isOpen, toggleSidebar] as const
}

export const Sidebar: React.FC<SidebarProps> = ({ children }) => {
  const [open] = useSidebar()
  let classes = ["lg:flex flex-col gap-2 lg:basis-48 shrink-0 min-h-screen sticky top-0 md:gap-4 border-r border-1 border-zinc-200 dark:border-zinc-800 p-5"]

  if (!open) classes.push('hidden')

  return (
      <nav className={classes.join(' ')}>
          {children}
      </nav>
  )
}

export default Sidebar