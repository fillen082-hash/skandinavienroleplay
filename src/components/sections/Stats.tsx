import type { ServerStats } from '@/lib/types'
import { CountUp } from '@/components/ui/CountUp'
import { Reveal } from '@/components/ui/Reveal'

export function Stats({ stats }: { stats: ServerStats }) {
  const items = [
    { label: 'Aktiva spelare', value: stats.activePlayers },
    { label: 'Registrerade spelare', value: stats.registeredPlayers },
    { label: 'Antal jobb', value: stats.jobs },
    { label: 'Antal företag', value: stats.companies },
    { label: 'Server uptime', value: stats.uptime, decimals: 1, suffix: '%' },
  ]
  return (
    <section aria-label="Serverstatistik" className="py-12">
      <div className="container-x">
        <Reveal className="glass relative overflow-hidden rounded-3xl">
          <div className="pointer-events-none absolute -top-24 left-1/2 h-48 w-2/3 -translate-x-1/2 rounded-full bg-electric/10 blur-3xl" />
          <dl className="relative grid grid-cols-2 divide-white/5 sm:grid-cols-3 lg:grid-cols-5 lg:divide-x">
            {items.map((it, i) => (
              <div key={it.label} className={`px-6 py-9 text-center sm:py-12 ${i === 4 ? 'col-span-2 sm:col-span-1' : ''}`}>
                <dd className="font-display text-3xl font-bold text-white [font-stretch:110%] sm:text-4xl">
                  <CountUp value={it.value} decimals={it.decimals} suffix={it.suffix} />
                </dd>
                <dt className="mt-2 text-xs font-medium uppercase tracking-[0.16em] text-mist">{it.label}</dt>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  )
}
