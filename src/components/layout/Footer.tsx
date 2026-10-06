import { Link } from '@tanstack/react-router'
import { site } from '@/config/site'
import { LogoMark } from '@/components/ui/Logo'

const columns = [
  {
    title: 'Community',
    links: [
      { label: 'Discord', href: site.discordUrl, external: true },
      { label: 'Om oss', to: '/om-oss' },
      { label: 'Ansökningar', to: '/ansokningar' },
      { label: 'Donationer', to: '/donationer' },
    ],
  },
  {
    title: 'Information',
    links: [
      { label: 'Regler', to: '/regler' },
      { label: 'Servern', to: '/servern' },
      { label: 'Support', to: '/support' },
    ],
  },
  {
    title: 'Juridiskt',
    links: [
      { label: 'Integritetspolicy', to: '/integritetspolicy' },
      { label: 'Användarvillkor', to: '/anvandarvillkor' },
    ],
  },
] as const

export function Footer() {
  return (
    <footer className="relative mt-24 border-t border-white/5">
      <div className="divider-glow absolute inset-x-0 top-0" />
      <div className="container-x grid gap-12 py-16 md:grid-cols-[1.4fr_repeat(3,1fr)]">
        <div>
          <div className="flex items-center gap-3">
            <LogoMark className="h-10 w-10" />
            <span className="font-display text-lg font-extrabold tracking-[0.14em] text-white [font-stretch:115%]">
              SKANDINAVIEN ROLEPLAY
            </span>
          </div>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-mist">
            En svensk FiveM Roleplay-community byggd för seriös roleplay.
          </p>
          <p className="mt-6 font-mono text-xs text-mist/70">
            Server-IP: <span className="text-frost">{site.serverIp}</span>
          </p>
        </div>
        {columns.map((col) => (
          <nav key={col.title} aria-label={col.title}>
            <h2 className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-mist">{col.title}</h2>
            <ul className="mt-5 space-y-3">
              {col.links.map((l) => (
                <li key={l.label}>
                  {'external' in l ? (
                    <a href={l.href} target="_blank" rel="noopener noreferrer" className="text-sm text-frost/80 transition hover:text-electric">
                      {l.label}
                    </a>
                  ) : (
                    <Link to={l.to} className="text-sm text-frost/80 transition hover:text-electric">
                      {l.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>
      <div className="border-t border-white/5">
        <div className="container-x flex flex-col items-start justify-between gap-3 py-6 text-xs text-mist/70 sm:flex-row sm:items-center">
          <p>© 2026 Skandinavien Roleplay. Alla rättigheter förbehållna.</p>
          <p>Skandinavien Roleplay är inte anslutet till Rockstar Games eller Cfx.re.</p>
        </div>
      </div>
    </footer>
  )
}
