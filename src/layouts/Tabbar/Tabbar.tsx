import { useButtonSound } from "../../hooks/useButtonSound"
import { useSidebar } from "../Sidebar"
import { Button } from "./Button"
import { Container } from "./Container"

export const TabBar: React.FC = () => {
  const [play] = useButtonSound()
  const [,toggleSidebarRaw] = useSidebar()
  const toggleSidebar = () => {
    play()
    toggleSidebarRaw()
  }

  return (
    <Container>
      <a href="/">
        <Button icon='home'>
          Home
        </Button>
      </a>
      <a href="/writing">
        <Button icon='article'>
          Writing
        </Button>
      </a>
      <Button icon='menu-2' onClick={toggleSidebar}>
        More
      </Button>
    </Container>
  )
}