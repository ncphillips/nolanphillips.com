import type { PropsWithChildren } from "react";

export type HeadingSize = 1 | 2 | 3 | 4
export type HeadingWeight = 'light' | 'medium' | 'bold'

export type HeadingProps = {
    as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
    size?: HeadingSize
    weight?: HeadingWeight
} & PropsWithChildren

export const Heading: React.FC<HeadingProps> = ({as = 'h2', size = 1, weight = 'medium', children}) => {
    const El = as as any
    let classes = ["w-full max-w-[40rem] text-zinc-900 tracking-tight dark:text-white"]

    classes.push(getSize(size))
    classes.push(getWeight(weight))

    return (
        <El className={classes.join(" ")}>
            {children}
        </El>        
    )
}

function getSize(size: HeadingSize) {
  switch (size) {
    case 1:
      return 'font-extrabold text-xl sm:text-2xl lg:text-3xl'
    case 2:
      return 'font-extrabold text-lg sm:text-xl lg:text-2xl'
    case 3:
      return 'font-extrabold text-md sm:text-lg lg:text-xl'
    case 4:
      return 'font-extrabold text-sm sm:text-md lg:text-lg'
  }
}

function getWeight(weight: HeadingWeight) {
  switch(weight) {
    case 'light':
      return 'font-light'
    case 'medium':
      return 'font-medium'
    case 'bold':
      return 'font-bold'
  }
}

export default Heading