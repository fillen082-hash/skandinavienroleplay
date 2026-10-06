import type { ReactNode } from 'react'

/** Kompakt sidhuvud för undersidor. */
export function PageHero({ eyebrow, title, children }: { eyebrow: string; title: string; children?: ReactNode }) {
  return (
    <section className="relative overflow-hidden border-b border-white/5 pt-36 pb-16 sm:pt-44 sm:pb-20">
      <div className="grid-lines pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-80 w-[60rem] -translate-x-1/2 rounded-full bg-blue-500/15 blur-3xl" />
      <div className="container-x relative">
        <span className="eyebrow animate-fade-up">{eyebrow}</span>
        <h1 className="mt-5 max-w-3xl animate-fade-up text-4xl font-extrabold leading-[1.05] [font-stretch:115%] sm:text-6xl [animation-delay:80ms]">
          {title}
        </h1>
        {children && (
          <p className="mt-5 max-w-2xl animate-fade-up text-lg leading-relaxed text-mist [animation-delay:160ms]">
            {children}
          </p>
        )}
      </div>
    </section>
  )
}
