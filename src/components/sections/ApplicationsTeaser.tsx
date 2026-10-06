import { Link } from '@tanstack/react-router'
import { ArrowRight } from 'lucide-react'
import { applications } from '@/data/applications'
import { Reveal } from '@/components/ui/Reveal'
import { SectionHeader } from '@/components/ui/SectionHeader'

export function ApplicationsTeaser() {
  return (
    <section className="py-24 sm:py-32">
      <div className="container-x grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <SectionHeader eyebrow="Ansökningar" title="Ta nästa steg i din karriär">
            Blåljus, staff och whitelistade yrken kräver en ansökan. Det ger oss en mogen och engagerad spelarbas.
          </SectionHeader>
          <Reveal delay={100}>
            <Link to="/ansokningar" className="btn btn-primary mt-8">
              Se alla ansökningar <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </Reveal>
        </div>
        <ul className="grid gap-3 sm:grid-cols-2">
          {applications.map((a, i) => (
            <Reveal as="li" key={a.id} delay={i * 50} className={i === 0 ? 'sm:col-span-2' : ''}>
              <Link
                to="/ansokningar"
                hash={a.id}
                className="card card-hover flex items-center gap-4 !p-5"
              >
                <a.icon className="h-6 w-6 shrink-0 text-electric" aria-hidden="true" strokeWidth={1.75} />
                <span className="flex-1 font-semibold text-white">{a.title}</span>
                <span className={`rounded-full px-2.5 py-1 text-[0.68rem] font-semibold uppercase tracking-wider ${a.open ? 'bg-emerald-400/10 text-emerald-300' : 'bg-white/5 text-mist'}`}>
                  {a.open ? 'Öppen' : 'Stängd'}
                </span>
              </Link>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
