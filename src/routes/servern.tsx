import { createFileRoute } from '@tanstack/react-router'
import { Cpu, Download, Plug, UserPlus } from 'lucide-react'
import { getServerStats, getServerStatus } from '@/server/status.functions'
import { seo } from '@/lib/seo'
import { site } from '@/config/site'
import { PageHero } from '@/components/ui/PageHero'
import { Reveal } from '@/components/ui/Reveal'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { StatusPanel } from '@/components/sections/StatusPanel'
import { Features } from '@/components/sections/Features'
import { Stats } from '@/components/sections/Stats'

const steps = [
  { icon: Download, title: 'Installera FiveM', text: 'Ladda ner FiveM från fivem.net och logga in med ditt Cfx.re-konto. Du behöver en legitim kopia av GTA V.' },
  { icon: UserPlus, title: 'Gå med i Discord', text: 'Anslut till vår Discord och läs igenom reglerna. Där hittar du även nyheter och support.' },
  { icon: Plug, title: 'Anslut till servern', text: `Tryck F8 i FiveM och skriv: connect ${site.serverIp} – eller klicka på Spela nu.` },
  { icon: Cpu, title: 'Skapa din karaktär', text: 'Bygg en genomtänkt karaktär med bakgrund och mål. Välkommen till Skandinavien!' },
]

export const Route = createFileRoute('/servern')({
  loader: async () => {
    const [status, stats] = await Promise.all([getServerStatus(), getServerStats()])
    return { status, stats }
  },
  head: () => seo({ title: 'Servern', description: 'Serverstatus, funktioner och hur du ansluter till Skandinavien Roleplay.', path: '/servern' }),
  component: Servern,
})

function Servern() {
  const { status, stats } = Route.useLoaderData()
  return (
    <>
      <PageHero eyebrow="Servern" title="Allt du behöver veta för att komma igång">
        Aktuell serverstatus, våra system och en guide för att ansluta på några minuter.
      </PageHero>

      <section className="py-20">
        <div className="container-x grid gap-12 lg:grid-cols-[1fr_0.8fr] lg:items-start">
          <div>
            <SectionHeader eyebrow="Kom igång" title="Fyra steg till staden" />
            <ol className="mt-10 space-y-3">
              {steps.map((s, i) => (
                <Reveal as="li" key={s.title} delay={i * 60} className="card flex gap-5 !p-6">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-electric ring-1 ring-electric/20">
                    <s.icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="text-base font-semibold">
                      <span className="mr-2 font-mono text-xs text-electric/70">0{i + 1}</span>
                      {s.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-mist">{s.text}</p>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>
          <div className="lg:sticky lg:top-28">
            <StatusPanel initial={status} />
            <a href={site.connectUrl} className="btn btn-primary mt-4 w-full !py-4">Anslut till servern</a>
          </div>
        </div>
      </section>

      <Stats stats={stats} />
      <Features detailed />
    </>
  )
}
