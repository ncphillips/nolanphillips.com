import '@tabler/icons/iconfont/tabler-icons.min.css'

export type IconName = string
export type IconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

export type IconProps = {
  name: IconName
  size?: IconSize
  fill?: boolean
}

export const Icon: React.FC<IconProps> = ({ name, fill, size = 'xs' }) => {
  let classes = [`ti ti-${name} inline-flex flex-col justify-center items-center`]

  classes.push(getSize(size))

  if (fill) {
    return (
      <span className="group relative inline-block px-1 mx-2">
        <span className="absolute z-0 -inset-1 group-hover:-inset-2 group-active:-inset-1 rounded-full bg-zinc-200 dark:bg-zinc-800 group-hover:opacity-100 group-active:opacity-100 transition-all duration-200 ease-bounce" />
        <span className="relative z-10">
          <i className={classes.join(' ')} />
        </span>
      </span>
    )
  }

  return (
    <i className={classes.join(' ')} />
  )
}

function getSize(size: IconSize) {
  switch(size) {
    case 'sm':
      return 'w-6 h-6 text-lg'
    case 'md':
        return 'w-8 h-8 text-xl'
    case 'lg':
      return 'w-10 h-10 text-2xl'
    case 'xl':
      return 'w-12 h-12 text-3xl'
    default:
      return 'w-4 h-4 text-md'
  }
}

export default Icon