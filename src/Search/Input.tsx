export const Input: React.FC = (props: any) => {
  return (
    <input
      {...props}
      type="text"
      className="w-full px-4 py-2 bg-transparent outline-none text-zinc-600 dark:text-zinc-400"
    />
  )
}