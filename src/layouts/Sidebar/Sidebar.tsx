import { useEffect, useState } from "react";
import { usePreventScroll } from "react-aria";
import { ThemeToggle } from "../../components/ThemeToggle";
import Heading from "../../components/typography/Heading";
import { Menu } from "./Menu";

export const SIDEBAR_EVENT = "sidebar.toggle";

export const useSidebar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggleOpen = () => setIsOpen(!isOpen);
  const toggleSidebar = () => {
    const event = new CustomEvent(SIDEBAR_EVENT);
    document.dispatchEvent(event);
  };

  useEffect(() => {
    let cb = () => {
      toggleOpen();
    };

    document.addEventListener(SIDEBAR_EVENT, cb);
  }, [isOpen]);

  return [isOpen, toggleSidebar] as const;
};

export const Sidebar: React.FC = () => {
  const [open] = useSidebar();
  let classes = [
    "overflow-x-hidden overflow-y-auto z-40 fixed top-0 right-[33%] bottom-0 left-0 lg:relative transition-transform lg:translate-x-0 flex flex-col gap-2 md:gap-4 lg:basis-48 shrink-0 h-screen bg-zinc-50 bg-opacity-95 backrdrop-blur-sm dark:bg-zinc-900 dark:bg-opacity-95 border-r border-1 border-zinc-200 dark:border-zinc-800 shadow-md lg:shadow-none pt-0 p-5",
  ];

  if (!open) classes.push("-translate-x-full");
  else classes.push("translate-x-0");

  return (
    <>
      {open && <Backdrop />}
      <nav className={classes.join(" ")}>
        <div className="sticky top-0 bg-zinc-50 dark:bg-zinc-900 bg-opacity-70 backdrop-blur-sm p-5 pb-2 -mx-5">
          <Heading as="h1" size={4}>
            Nolan Phillips
          </Heading>
        </div>
        <Menu />
        <div className="mt-auto">
          <ThemeToggle />
        </div>
      </nav>
    </>
  );
};

const Backdrop = () => {
  const [, toggleSidebar] = useSidebar();

  usePreventScroll();

  return (
    <button
      className="z-40 lg:hidden fixed top-0 right-0 bottom-0 left-0 bg-black bg-opacity-50 backdrop-blur-sm"
      onClick={toggleSidebar}
    />
  );
};

export default Sidebar;
