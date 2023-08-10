import { useEffect, useState } from "react"

const useBodyScrollLock = (): [boolean, () => void] => {
  const bodyStyle: CSSStyleDeclaration = document.body.style

  const [isLocked, setIsLocked] = useState<boolean>(bodyStyle.overflowY === 'hidden')

  const toggle = (): void => setIsLocked(!isLocked)
  useEffect(() => {
    bodyStyle.overflowY = isLocked ? 'hidden' : 'auto'
    
  }, [isLocked, toggle]);

  return [isLocked, toggle]
}

export default useBodyScrollLock