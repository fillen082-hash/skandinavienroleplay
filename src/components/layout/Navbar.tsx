import { useEffect, useState } from 'react'
import { Link, useRouterState } from '@tanstack/react-router'
import { ArrowUpRight, Menu, Play, X } from 'lucide-react'
import { navItems, site } from '@/config/site'
import { Logo } from '@/components/ui/Logo'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const pathname = useRouterState({ select: (s) => s.location.pathname })

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setOpen(false), [pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
  }, [open])

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5">
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between rounded-2xl px-4 transition-all duration-300 sm:px-5 ${
          scrolled || open
            ? 'glass h-14 shadow-[0_10px_40px_-15px_rgb(0_0_0/0.8)]'
            : 'h-[4.5rem] border border-transparent bg-transparent'
        }`}
      >
        <Link to="/" aria-label={`${site.name} – startsida`} className="shrink-0">
          <Logo compact={scrolled} />
        </Link>

        <nav aria-label="Huvudmeny" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {navItems.map((item) => (
              <li key={item.label}>
                {item.external ? (
                  <a
                    href={item.to}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium text-mist transition hover:text-white"
                  >
                    {item.label}
                    <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </a>
                ) : (
                  <Link
                    to={item.to as '/'}
                    activeOptions={{ exact: item.to === '/' }}
                    className="relative rounded-lg px-3 py-2 text-sm font-medium text-mist transition hover:text-white data-[status=active]:text-white after:absolute after:inset-x-3 after:-bottom-px after:h-px after:scale-x-0 after:bg-electric after:transition data-[status=active]:after:scale-x-100"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a href={site.connectUrl} className={`btn btn-primary hidden sm:inline-flex ${scrolled ? '!py-2' : ''}`}>
            <Play className="h-4 w-4 fill-current" aria-hidden="true" />
            Spela nu
          </a>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl text-white transition hover:bg-white/5 lg:hidden"
            aria-label={open ? 'Stäng meny' : 'Öppna meny'}
            aria-expanded={open}
            aria-controls="mobilmeny"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobilmeny */}
      <div
        id="mobilmeny"
        className={`glass mx-auto mt-2 max-w-7xl origin-top overflow-hidden rounded-2xl transition-all duration-300 lg:hidden ${
          open ? 'visible max-h-[80vh] opacity-100' : 'invisible max-h-0 opacity-0'
        }`}
      >
        <nav aria-label="Mobilmeny" className="p-3">
          <ul className="grid gap-1">
            {navItems.map((item) => (
              <li key={item.label}>
                {item.external ? (
                  <a href={item.to} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between rounded-xl px-4 py-3 text-base font-medium text-frost hover:bg-white/5">
                    {item.label}
                    <ArrowUpRight className="h-4 w-4 text-electric" aria-hidden="true" />
                  </a>
                ) : (
                  <Link
                    to={item.to as '/'}
                    activeOptions={{ exact: item.to === '/' }}
                    className="block rounded-xl px-4 py-3 text-base font-medium text-frost hover:bg-white/5"
                    activeProps={{ className: 'bg-white/5 text-white' }}
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
          <a href={site.connectUrl} className="btn btn-primary mt-3 w-full">
            <Play className="h-4 w-4 fill-current" aria-hidden="true" /> Spela nu
          </a>
        </nav>
      </div>
    </header>
  )
}
