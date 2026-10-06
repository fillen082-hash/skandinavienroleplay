import { useId } from 'react'

/** Serverns emblem: en sköld med ett nordiskt kors. */
export function LogoMark({ className = 'h-9 w-9' }: { className?: string }) {
  const id = useId()
  return (
    <svg viewBox="0 0 40 44" className={className} aria-hidden="true">
      <defs>
        <linearGradient id={`${id}-g`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#5cc8ff" />
          <stop offset="1" stopColor="#2459e0" />
        </linearGradient>
        <linearGradient id={`${id}-f`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#12264a" />
          <stop offset="1" stopColor="#070d1a" />
        </linearGradient>
      </defs>
      <path
        d="M20 1.5 37 7v13.2c0 10.6-7 18.6-17 22.3C10 38.8 3 30.8 3 20.2V7L20 1.5Z"
        fill={`url(#${id}-f)`}
        stroke={`url(#${id}-g)`}
        strokeWidth="1.6"
      />
      <path d="M15 8.5v29.2M6.5 19.5h27" stroke={`url(#${id}-g)`} strokeWidth="4.2" strokeLinecap="square" />
    </svg>
  )
}

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <span className="flex items-center gap-3">
      <LogoMark className={compact ? 'h-8 w-8 transition-all' : 'h-9 w-9 transition-all'} />
      <span className="flex flex-col leading-none">
        <span className="font-display text-[0.95rem] font-extrabold tracking-[0.14em] text-white [font-stretch:115%]">
          SKANDINAVIEN
        </span>
        <span className="mt-1 text-[0.62rem] font-semibold tracking-[0.42em] text-electric">ROLEPLAY</span>
      </span>
    </span>
  )
}
