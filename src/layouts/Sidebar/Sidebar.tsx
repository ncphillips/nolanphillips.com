import { useEffect, useState } from "react"
import { usePreventScroll } from "react-aria"
import { ThemeToggle } from "../../components/ThemeToggle"
import Heading from "../../components/typography/Heading"
import { Menu } from "./Menu"

export const SIDEBAR_EVENT = "sidebar.toggle"

export const useSidebar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const toggleOpen = () => setIsOpen(!isOpen)
  const toggleSidebar = () => {
    const event = new CustomEvent(SIDEBAR_EVENT)
    document.dispatchEvent(event)
  }

  useEffect(() => {
    let cb = () => {
      toggleOpen()
    }

    document.addEventListener(SIDEBAR_EVENT, cb)
  }, [isOpen])

  return [isOpen, toggleSidebar] as const
}

export const Sidebar: React.FC = () => {
  const [open] = useSidebar()

  const navClasses = [...baseNavClasses]

  if (!open) navClasses.push("-translate-x-full")
  else navClasses.push("translate-x-0")

  return (
    <>
      {open && <Backdrop />}
      <nav className={navClasses.join(" ")}>
        <div className={navHeaderClasses}>
          <Heading as="h1" size={4}>
            Nolan Phillips
          </Heading>
        </div>
        <Menu />
        <div className="mt-auto">
          <ThemeToggle />
        </div>
      </nav>
    </>
  )
}

let baseNavClasses = [
  "top-0",
  "right-[33%]",
  "left-0",
  "bottom-0",

  "fixed",
  "lg:relative",
  "min-w-[200px]",

  "z-40",
  "overflow-x-hidden",
  "overflow-y-auto",

  "transition-transform",
  "lg:translate-x-0",

  "flex",
  "flex-col",
  "gap-2",
  "shrink-0",
  "md:gap-4",
  "lg:basis-48",
  "h-screen",

  "bg-zinc-50",
  "bg-opacity-95",
  "backdrop-blur-sm",

  "border-r",
  "border-1",
  "border-zinc-200",

  "dark:bg-zinc-900",
  "dark:bg-opacity-95",
  "dark:border-zinc-800",

  "shadow-md",
  "lg:shadow-none",

  "pt-0",
  "p-5",
]

const navHeaderClasses = [
  "sticky",
  "top-0",
  "bg-opacity-70",
  "bg-zinc-50",
  "dark:bg-zinc-900",
  "backdrop-blur-sm",
  "p-5",
  "pb-2",
  "-mx-5",
].join(" ")

const Backdrop = () => {
  const [, toggleSidebar] = useSidebar()

  usePreventScroll()

  return (
    <button
      className="z-40 lg:hidden fixed top-0 right-0 bottom-0 left-0 bg-black bg-opacity-50 backdrop-blur-sm"
      onClick={toggleSidebar}
    />
  )
}

export default Sidebar
