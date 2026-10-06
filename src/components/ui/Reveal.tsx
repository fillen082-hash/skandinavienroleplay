import { useEffect, useRef, type ElementType, type ReactNode } from 'react'

/** Tonar in innehållet när det scrollas in i vyn. */
export function Reveal({
  children,
  as: Tag = 'div',
  delay = 0,
  className = '',
}: {
  children: ReactNode
  as?: ElementType
  delay?: number
  className?: string
}) {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    let timer: number | undefined
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-visible')
          io.disconnect()
          // Släpp reveal-transitionen efteråt så att hover-effekter får sin egen timing.
          timer = window.setTimeout(() => {
            el.classList.remove('reveal', 'is-visible')
            el.style.transitionDelay = ''
          }, delay + 850)
        }
      },
      { rootMargin: '0px 0px -8% 0px' },
    )
    io.observe(el)
    return () => {
      io.disconnect()
      window.clearTimeout(timer)
    }
  }, [delay])

  return (
    <Tag ref={ref} className={`reveal ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </Tag>
  )
}
