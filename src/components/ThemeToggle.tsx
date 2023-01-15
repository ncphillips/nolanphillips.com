import { useButtonSound } from "../hooks/useButtonSound"
import { useTheme } from "../hooks/useTheme"
import { Button } from "./Button"
import Icon from "./Icon"

export const ThemeToggle = () => {
  const [play] = useButtonSound()
  const [theme, toggleThemeRaw] = useTheme()
  const toggleTheme = () => {
    play()
    toggleThemeRaw()
  }
  const isDarkMode = theme === 'dark'

  return (
    <Button onClick={toggleTheme}>
      {isDarkMode && <Icon name='sun' />}
      {!isDarkMode && <Icon name='moon' />}
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}