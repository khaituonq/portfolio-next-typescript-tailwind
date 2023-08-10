import { useEffect, useState } from "react"
import { isMobile } from 'react-device-detect'

const useBodyScrollLock = (): [boolean, () => void] => {
  const [isLocked, setIsLocked] = useState<boolean>(false)

  const toggle = (): void => setIsLocked(!isLocked)

  useEffect(() => {
    const bodyStyle: CSSStyleDeclaration = document.body.style
    if (!isMobile) {
      bodyStyle.overflowY = isLocked ? 'hidden' : 'auto'
    }
   

    return () => {
      bodyStyle.overflowY = 'auto'
      bodyStyle.paddingRight = '0'
    }

  }, [isLocked, toggle]);

  return [isLocked, toggle]
}

export default useBodyScrollLock