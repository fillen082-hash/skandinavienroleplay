import { useState } from 'react'
import { createFileRoute } from '@tanstack/react-router'
import { ArrowRight, ArrowUpRight, Check } from 'lucide-react'
import { applications } from '@/data/applications'
import { site } from '@/config/site'
import { seo } from '@/lib/seo'
import { PageHero } from '@/components/ui/PageHero'
import { Reveal } from '@/components/ui/Reveal'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { DiscordIcon } from '@/components/ui/DiscordIcon'
import { ApplicationForm } from '@/components/forms/ApplicationForm'

export const Route = createFileRoute('/ansokningar')({
  head: () => seo({ title: 'Ansökningar', description: 'Ansök till Polis, Sjukvård, Räddningstjänst, Staff eller whitelistade yrken på Skandinavien Roleplay.', path: '/ansokningar' }),
  component: Ansokningar,
})

function Ansokningar() {
  const [type, setType] = useState('polis')

  const choose = (id: string) => {
    setType(id)
    document.getElementById('formular')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <>
      <PageHero eyebrow="Ansökningar" title="Bli en del av något större">
        Vissa roller kräver en ansökan för att vi ska kunna garantera kvalitet och seriositet. Läs kraven noggrant
        innan du skickar in.
      </PageHero>

      <section className="py-16">
        <div className="container-x">
          <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {applications.map((a, i) => (
              <Reveal as="li" key={a.id} delay={(i % 3) * 60} className="card card-hover flex scroll-mt-28 flex-col" >
                <div id={a.id} className="flex items-start justify-between">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-electric/20 bg-blue-500/10 text-electric">
                    <a.icon className="h-6 w-6" aria-hidden="true" strokeWidth={1.75} />
                  </span>
                  <span className={`rounded-full px-2.5 py-1 text-[0.68rem] font-semibold uppercase tracking-wider ${a.open ? 'bg-emerald-400/10 text-emerald-300' : 'bg-white/5 text-mist'}`}>
                    {a.open ? 'Öppen' : 'Stängd just nu'}
                  </span>
                </div>
                <h2 className="mt-6 text-xl font-semibold">{a.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-mist">{a.description}</p>
                <ul className="mt-5 space-y-2">
                  {a.requirements.map((r) => (
                    <li key={r} className="flex items-center gap-2 text-sm text-frost/85">
                      <Check className="h-4 w-4 text-electric" aria-hidden="true" /> {r}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-7">
                  {!a.open ? (
                    <button type="button" disabled className="btn btn-ghost w-full cursor-not-allowed opacity-50">Ansökan stängd</button>
                  ) : a.method === 'discord' ? (
                    <a href={site.discordUrl} target="_blank" rel="noopener noreferrer" className="btn btn-ghost w-full">
                      <DiscordIcon className="h-4 w-4" /> Ansök via Discord <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                    </a>
                  ) : (
                    <button type="button" onClick={() => choose(a.id)} className="btn btn-primary w-full">
                      Ansök till {a.title.toLowerCase()} <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </button>
                  )}
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section id="formular" className="scroll-mt-24 py-16 sm:py-24">
        <div className="container-x grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <SectionHeader eyebrow="Ansökningsformulär" title="Skicka in din ansökan">
              Ansökningar behandlas av respektive avdelning. Du får besked via Discord, så se till att ditt
              Discord-namn är korrekt.
            </SectionHeader>
            <ol className="mt-8 space-y-4 text-sm text-mist">
              {['Ansökan granskas av ansvarig avdelning', 'Godkända kallas till intervju i Discord', 'Introduktion och utbildning i spel'].map((s, i) => (
                <li key={s} className="flex items-center gap-3">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-500/10 font-mono text-xs text-electric ring-1 ring-electric/20">{i + 1}</span>
                  {s}
                </li>
              ))}
            </ol>
          </div>
          <ApplicationForm type={type} onTypeChange={setType} />
        </div>
      </section>
    </>
  )
}
