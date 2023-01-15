import type { PropsWithChildren, ReactElement } from "react"
import { Dialog } from "../Dialog"

export type ContainerProps = {
  isOpen: boolean
  onClose: () => void
  children: ({ titleProps }: any) => ReactElement | null
}

export const Container: React.FC<ContainerProps> = ({ isOpen, onClose, children }) => {
  return (
    <Dialog.Provider>
      <Dialog.Modal isOpen={isOpen} onClose={onClose} isDismissable>
        {({ modalProps, titleProps }) => (
            <div className="relative -top-32 w-full p-4 flex flex-col justify-center items-center">
              <div className="w-full max-w-[45rem] rounded-xl backdrop-blur-xl bg-opacity-80 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800" {...modalProps}>
                {children({ titleProps })}
              </div>
            </div>
        )}
      </Dialog.Modal>
    </Dialog.Provider>
  )
}