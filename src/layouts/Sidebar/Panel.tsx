import type { PropsWithChildren } from "react";
import Heading from "../../components/typography/Heading";

export type PanelProps = PropsWithChildren & {
  title: string;
  selected?: boolean;
};

export const Panel: React.FC<PanelProps> = ({
  title,
  selected = false,
  children,
}) => {
  let classes = [
    "sticky h-screen flex-col gap-2 basis-full lg:basis-96 shrink-0 min-h-screen sticky top-0 md:gap-4 border-r border-1 border-zinc-200 dark:border-zinc-800 py-4 px-6 lg:pt-0 lg:overflow-y-auto lg:overflow-x-hidden",
  ];

  if (selected) classes.push("hidden lg:flex");
  else classes.push("flex");

  return (
    <nav className={classes.join(" ")}>
      <header className="hidden relative -mx-6 lg:flex flex-row justify-between gap-2 shrink-0 sticky top-0 bg-zinc-100 bg-opacity-70 dark:bg-opacity-70 backdrop-blur-sm dark:bg-zinc-900 border-b border-1 border-zinc-200 dark:border-zinc-800 p-5 pb-2">
        <Heading as="h2" size={4}>
          {title}
        </Heading>
      </header>
      {children}
    </nav>
  );
};

export default Panel;
