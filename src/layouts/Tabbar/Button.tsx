import type { HTMLAttributes, PropsWithChildren } from "react"
import { useButtonSound } from "../../hooks/useButtonSound"
import { useVolume } from "../../hooks/useVolume"
import { Icon, IconName } from "../../components/Icon"

export type ButtonProps = PropsWithChildren &
  Omit<HTMLAttributes<HTMLButtonElement>, "onClick"> & {
    icon: IconName
    onClick?: () => void
  }

export const Button: React.FC<ButtonProps> = ({
  icon,
  children,
  onClick: propOnClick,
  ...props
}) => {
  const [volume] = useVolume()
  const [buttonSound] = useButtonSound()
  const onClick = () => {
    if (volume) buttonSound()
    if (propOnClick) propOnClick()
  }

  return (
    <button
      {...props}
      onClick={onClick}
      className="flex h-32 w-32 flex-col items-center justify-center text-zinc-500 hover:text-zinc-400 active:text-zinc-500 dark:text-zinc-200 dark:hover:text-zinc-50 dark:active:text-zinc-50"
    >
      <Icon name={icon} size="md" />
      {children}
    </button>
  )
}
