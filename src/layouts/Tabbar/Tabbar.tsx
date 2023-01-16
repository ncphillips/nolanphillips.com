import { useButtonSound } from "../../hooks/useButtonSound";
import { useSidebar } from "../Sidebar";
import { Button } from "./Button";
import { Container } from "./Container";
import type { LayoutProps } from "./Layout";

export const TabBar: React.FC<LayoutProps> = ({ sm, md, lg }) => {
  const [play] = useButtonSound();
  const [, toggleSidebarRaw] = useSidebar();
  const toggleSidebar = () => {
    play();
    toggleSidebarRaw();
  };

  return (
    <Container sm md>
      <a href="/">
        <Button icon="home">Home</Button>
      </a>
      <a href="/writing">
        <Button icon="article">Writing</Button>
      </a>
      <Button icon="menu-2" onClick={toggleSidebar}>
        More
      </Button>
    </Container>
  );
};
