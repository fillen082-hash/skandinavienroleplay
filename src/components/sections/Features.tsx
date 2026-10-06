import { features } from '@/data/features'
import { Reveal } from '@/components/ui/Reveal'
import { SectionHeader } from '@/components/ui/SectionHeader'

export function Features({ detailed = false }: { detailed?: boolean }) {
  return (
    <section id="funktioner" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-x-0 top-1/2 h-96 -translate-y-1/2 bg-blue-500/5 blur-3xl" />
      <div className="container-x relative">
        <SectionHeader eyebrow="Serverfunktioner" title="Ett samhälle byggt på riktigt">
          Varje del av staden har egna system, egna organisationer och en tydlig roll i helheten.
        </SectionHeader>
        <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <Reveal as="li" key={f.title} delay={(i % 4) * 60} className="card card-hover group">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-electric/20 bg-gradient-to-br from-blue-500/20 to-transparent text-electric transition group-hover:shadow-[0_0_30px_-5px_rgb(92_200_255/0.6)]">
                <f.icon className="h-6 w-6" aria-hidden="true" strokeWidth={1.75} />
              </span>
              <h3 className="mt-6 text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-mist">{f.description}</p>
              {detailed && (
                <ul className="mt-5 space-y-2 border-t border-white/5 pt-5">
                  {f.details.map((d) => (
                    <li key={d} className="flex items-center gap-2 text-sm text-frost/80">
                      <span className="h-1 w-1 rounded-full bg-electric" aria-hidden="true" />
                      {d}
                    </li>
                  ))}
                </ul>
              )}
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
