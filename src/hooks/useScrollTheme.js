import { useEffect } from 'react'

function throttle(fn, ms) {
  let lastTime = 0
  return function (...args) {
    const now = Date.now()
    if (now - lastTime >= ms) {
      fn(...args)
      lastTime = now
    }
  }
}

export default function useScrollTheme() {
  useEffect(() => {
    const metaTag = document.querySelector('meta[name="theme-color"]')
    const ogColor = metaTag?.getAttribute('content')

    const handleScroll = throttle(() => {
      const targets = document.querySelectorAll('[data-scroll-theme]')
      const topmost = Array.from(targets)
        .map(target => {
          const rect = target.getBoundingClientRect()
          return rect.y > 1 ? null : { target, rect }
        })
        .filter(Boolean)
        .sort((a, b) => b.rect.y - a.rect.y)[0]

      if (topmost) {
        const color = window.getComputedStyle(topmost.target).getPropertyValue('background-color')
        if (color) metaTag?.setAttribute('content', color)
      } else if (ogColor) {
        metaTag?.setAttribute('content', ogColor)
      }
    }, 100)

    document.addEventListener('scroll', handleScroll, { passive: true })
    return () => document.removeEventListener('scroll', handleScroll)
  }, [])
}
