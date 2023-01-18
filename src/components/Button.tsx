import type { HTMLAttributes } from "react"

export type ButtonProps = Omit<HTMLAttributes<HTMLButtonElement>, "className">

export const Button: React.FC<ButtonProps> = ({ children, ...props }) => (
  <button
    {...props}
    className="flex items-center p-2 mr-2 text-xs font-medium text-zinc-700 bg-white border border-zinc-200 rounded-lg toggle-dark-state-example hover:bg-zinc-100 hover:text-black focus:z-10 focus:ring-2 focus:ring-zinc-300 dark:focus:ring-zinc-500 dark:bg-zinc-800 focus:outline-none dark:text-zinc-400 dark:border-zinc-600 dark:hover:text-white dark:hover:bg-zinc-700"
  >
    {children}
  </button>
)
