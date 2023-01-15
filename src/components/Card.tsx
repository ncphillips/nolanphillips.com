import type { PropsWithChildren } from "react";

export type CardProps = {} & PropsWithChildren

export const Card: React.FC<CardProps> = ({children}) => {
    return ( 
        <div className="w-full bg-zinc-50 dark:bg-zinc-800 overflow-hidden rounded-md border-1 border-white dark:border-zinc-900 ring-1 ring-zinc-200 dark:ring-zinc-700 shadow-md dark:drop-shadow-md p-3">
            {children}
        </div>
    )
}

export default Card