import type { PropsWithChildren } from "react";

export type PaneProps = PropsWithChildren & {
  dots?: boolean
}

export const Pane: React.FC<PaneProps> = ({ dots = false, children}) => {
  let classes = ['w-full flex flex-col flex-grow']

  if (dots) classes.push('bg-dots-white dark:bg-dots-black')
  else classes.push('bg-white dark:bg-black p-5')

  return (
    <main className={classes.join(' ')}>
      {children}
    </main>
  )
}

export default Pane