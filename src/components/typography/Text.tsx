import type { PropsWithChildren } from "react"

export type TextGradient = "primary" | "success" | "info" | "warning"
export type TextColor = "light" | "dark" | "muted" | "inherit"
export type TextSize = "sm" | "md" | "lg"

export type TextProps = {
  as?: "p" | "span"
  gradient?: TextGradient
  color?: TextColor
  size?: TextSize
} & PropsWithChildren

export const Text: React.FC<TextProps> = ({
  as = "p",
  gradient,
  color = "dark",
  size = "md",
  children,
}) => {
  const El = as as any
  let classes = ["max-w-[40rem] align-top items-center"]

  classes.push(getSize(size))

  if (gradient) classes.push(getGradient(gradient))
  else classes.push(getColor(color))

  return <El className={classes.join(" ")}>{children}</El>
}

function getSize(size: TextSize) {
  switch (size) {
    case "sm":
      return "text-sm"
    case "md":
      return "text-md"
    case "lg":
      return "text-lg"
  }
}

function getGradient(gradient: TextGradient) {
  switch (gradient) {
    case "primary":
      return "text-transparent dark:text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
    case "success":
      return "text-transparent dark:text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-600"
    case "warning":
      return "text-transparent dark:text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-600"
    case "info":
      return "text-transparent dark:text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-600 dark:from-blue-300 dark:to-indigo-400"
  }
}

function getColor(color: TextColor) {
  switch (color) {
    case "light":
      return "text-zinc-50 dark:text-zinc-900"
    case "dark":
      return "text-zinc-900 dark:text-zinc-50"
    case "muted":
      return "text-zinc-500 dark:text-zinc-400"
    case "inherit":
      return ""
  }
}

export default Text
