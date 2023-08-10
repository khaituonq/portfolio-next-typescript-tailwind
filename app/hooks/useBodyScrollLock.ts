import { useEffect, useState } from "react"

const useBodyScrollLock = (): [boolean, () => void] => {
  const [isLocked, setIsLocked] = useState<boolean>(false)

  const toggle = (): void => setIsLocked(!isLocked)

  useEffect(() => {
    const bodyStyle: CSSStyleDeclaration = document.body.style
    bodyStyle.overflowY = isLocked ? 'hidden' : 'auto'
    bodyStyle.paddingRight = isLocked ? '17px' : '0'

    return () => {
      bodyStyle.overflowY = 'auto'
      bodyStyle.paddingRight = '0'
    }

  }, [isLocked, toggle]);

  return [isLocked, toggle]
}

export default useBodyScrollLock