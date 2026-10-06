import type { ReactNode } from 'react'
import { Reveal } from './Reveal'

export function SectionHeader({
  eyebrow,
  title,
  children,
  align = 'left',
}: {
  eyebrow: string
  title: ReactNode
  children?: ReactNode
  align?: 'left' | 'center'
}) {
  const center = align === 'center'
  return (
    <Reveal className={`max-w-2xl ${center ? 'mx-auto text-center' : ''}`}>
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="mt-4 text-3xl font-bold leading-tight [font-stretch:110%] sm:text-4xl">{title}</h2>
      {children && <p className="mt-4 text-base leading-relaxed text-mist sm:text-lg">{children}</p>}
    </Reveal>
  )
}
