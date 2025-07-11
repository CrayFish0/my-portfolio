import { useEffect, useRef } from 'react'

export const useIntersectionObserver = (options = {}) => {
  const elementRef = useRef(null)
  const isIntersecting = useRef(false)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    const observer = new IntersectionObserver(([entry]) => {
      isIntersecting.current = entry.isIntersecting
      
      if (entry.isIntersecting) {
        element.classList.add('animate-fade-in')
      }
    }, {
      threshold: 0.1,
      rootMargin: '-50px',
      ...options
    })

    observer.observe(element)

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [options])

  return elementRef
}

export const useScrollAnimation = (animationClass = 'animate-slide-up') => {
  const elementRef = useRef(null)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add(animationClass)
          observer.unobserve(element)
        }
      },
      {
        threshold: 0.1,
        rootMargin: '-50px'
      }
    )

    observer.observe(element)

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [animationClass])

  return elementRef
}
