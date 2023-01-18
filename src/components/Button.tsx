import type { HTMLAttributes } from "react"

export type ButtonProps = Omit<HTMLAttributes<HTMLButtonElement>, "className">

export const Button: React.FC<ButtonProps> = ({ children, ...props }) => (
  <button
    {...props}
    className="toggle-dark-state-example mr-2 flex items-center rounded-lg border border-zinc-200 bg-white p-2 text-xs font-medium text-zinc-700 hover:bg-zinc-100 hover:text-black focus:z-10 focus:outline-none focus:ring-2 focus:ring-zinc-300 dark:border-zinc-600 dark:bg-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-700 dark:hover:text-white dark:focus:ring-zinc-500"
  >
    {children}
  </button>
)
