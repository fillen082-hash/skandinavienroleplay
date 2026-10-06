import { useEffect, useRef, useState } from 'react'

/** Animerar ett tal från 0 till `value` när det syns på skärmen. */
export function CountUp({
  value,
  decimals = 0,
  suffix = '',
  duration = 1800,
}: {
  value: number
  decimals?: number
  suffix?: string
  duration?: number
}) {
  const ref = useRef<HTMLSpanElement>(null)
  const [display, setDisplay] = useState(value)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    setDisplay(0)
    const io = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting || started.current) return
      started.current = true
      const t0 = performance.now()
      const tick = (t: number) => {
        const p = Math.min(1, (t - t0) / duration)
        const eased = 1 - Math.pow(1 - p, 4)
        setDisplay(value * eased)
        if (p < 1) requestAnimationFrame(tick)
      }
      requestAnimationFrame(tick)
      io.disconnect()
    })
    io.observe(el)
    return () => io.disconnect()
  }, [value, duration])

  const text = new Intl.NumberFormat('sv-SE', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(display)

  return (
    <span ref={ref} className="tabular-nums">
      {text}
      {suffix}
    </span>
  )
}
