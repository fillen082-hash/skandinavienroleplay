import { Crown } from 'lucide-react'
import { roleOrder, staff } from '@/data/staff'
import { Avatar } from '@/components/ui/Avatar'
import { DiscordIcon } from '@/components/ui/DiscordIcon'
import { Reveal } from '@/components/ui/Reveal'
import { SectionHeader } from '@/components/ui/SectionHeader'

export function Staff() {
  const owner = staff.find((s) => s.featured)
  const rest = staff
    .filter((s) => !s.featured)
    .sort((a, b) => roleOrder.indexOf(a.role as never) - roleOrder.indexOf(b.role as never))

  return (
    <section id="staff" className="scroll-mt-24 py-24 sm:py-32">
      <div className="container-x">
        <SectionHeader eyebrow="Staff" title="Teamet bakom servern" align="center">
          Ett engagerat team som arbetar för en trygg, rättvis och levande spelmiljö.
        </SectionHeader>

        {owner && (
          <Reveal className="mx-auto mt-14 max-w-xl">
            <div className="card relative overflow-hidden border-electric/25 text-center !p-10 shadow-[0_30px_80px_-40px_rgb(92_200_255/0.6)]">
              <div className="pointer-events-none absolute -top-20 left-1/2 h-40 w-80 -translate-x-1/2 rounded-full bg-electric/15 blur-3xl" />
              <div className="relative flex flex-col items-center">
                <Avatar name={owner.name} src={owner.avatar} size="lg" />
                <span className="mt-5 inline-flex items-center gap-1.5 rounded-full border border-electric/30 bg-electric/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-electric">
                  <Crown className="h-3.5 w-3.5" aria-hidden="true" /> {owner.role}
                </span>
                <h3 className="mt-4 text-2xl font-bold">{owner.name}</h3>
                <p className="mt-2 flex items-center gap-2 text-sm text-mist">
                  <DiscordIcon className="h-4 w-4" /> {owner.discord}
                </p>
              </div>
            </div>
          </Reveal>
        )}

        <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {rest.map((m, i) => (
            <Reveal as="li" key={m.discord} delay={(i % 4) * 50} className="card card-hover flex items-center gap-4 !p-5">
              <Avatar name={m.name} src={m.avatar} />
              <div className="min-w-0">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-electric">{m.role}</p>
                <p className="mt-1 truncate font-semibold text-white">{m.name}</p>
                <p className="mt-0.5 flex items-center gap-1.5 truncate text-xs text-mist">
                  <DiscordIcon className="h-3.5 w-3.5 shrink-0" /> {m.discord}
                </p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
