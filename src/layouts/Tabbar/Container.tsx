import type { PropsWithChildren } from "react"
import { LayoutProps, useLayout } from "./Layout"

export type ContainerProps = PropsWithChildren & LayoutProps

export const Container: React.FC<ContainerProps> = ({ children, ...props }) => {
  let classes = [
    "h-16 py-2 fixed z-30 bottom-0 left-0 right-0 bg-zinc-50 dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-800 flex flex-row justify-around items-center shadow-md",
  ]
  const { sm, md, lg } = useLayout()

  classes.push(getBreakpoints(props.sm || sm, props.md || md, props.lg || lg))

  return <nav className={classes.join(" ")}>{children}</nav>
}

function getBreakpoints(sm: boolean, md: boolean, lg: boolean) {
  let classes = ["xl:hidden"]

  if (!sm) classes.push("sm:hidden")
  if (!md) classes.push("md:hidden")
  if (!lg) classes.push("lg:hidden")

  return classes.join(" ")
}
