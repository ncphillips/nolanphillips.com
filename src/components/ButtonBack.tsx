import { useState, useEffect } from "react"
import { useButtonSound } from "../hooks/useButtonSound"
import { Button } from "./Button"
import Icon from "./Icon"

export type BackButtonProps = {
  defaultHref?: string
}

export const ButtonBack: React.FC<BackButtonProps> = ({ defaultHref }) => {
  const [play] = useButtonSound()
  const [canGoBack, setCanGoBack] = useState(defaultHref !== undefined)
  const goBack = () => {
    if (document.referrer.includes(window.location.host)) {
      play()
      history.back()
    } else if (defaultHref) {
      play()
      window.location.href = defaultHref
    }
  }

  useEffect(() => {
    if (document.referrer.includes(window.location.host)) {
      setCanGoBack(true)
    }
  }, [])

  if (!canGoBack) {
    return <div />
  }

  return (
    <Button onClick={goBack}>
      <Icon name="chevron-left" />
      <span className="sr-only">Go back</span>
    </Button>
  )
}

export default ButtonBack
