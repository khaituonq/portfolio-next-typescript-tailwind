import { useState, useEffect } from 'react'

const useScrollDirection = () => {
  const [scrollDirection, setScrollDirection] = useState('')

  useEffect(() => { 
    let lastScrollY: number = window.pageYOffset

    const updateScrollDirection = () => {
      const scrollY: number = window.pageYOffset
      const direction: string = scrollY > lastScrollY ? 'down' : 'up'

      if (direction !== scrollDirection && scrollY - lastScrollY > 5 || scrollY - lastScrollY < -5) {
        setScrollDirection(direction)
      }
      lastScrollY =  scrollY > 0 ? scrollY : 0
    }

    window.addEventListener('scroll', updateScrollDirection)

    return () => {
      window.removeEventListener('scroll', updateScrollDirection)
    }

  }, [scrollDirection]);

  return scrollDirection
}

export default useScrollDirection