import { createFileRoute } from '@tanstack/react-router'
import { getDiscordInfo } from '@/server/status.functions'
import { seo } from '@/lib/seo'
import { site } from '@/config/site'
import { PageHero } from '@/components/ui/PageHero'
import { Reveal } from '@/components/ui/Reveal'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { About } from '@/components/sections/About'
import { Staff } from '@/components/sections/Staff'
import { DiscordCta } from '@/components/sections/DiscordCta'

const timeline = [
  { year: '2023', title: 'Grundandet', text: 'Skandinavien Roleplay startar som ett slutet projekt med ett trettiotal testspelare.' },
  { year: '2024', title: 'Officiell lansering', text: 'Servern öppnar för allmänheten med egenutvecklade system för ekonomi och blåljus.' },
  { year: '2025', title: 'Ny stadskärna', text: 'Omfattande uppdatering med ny karta, fastighetssystem och företagsekonomi.' },
  { year: '2026', title: 'Nästa generation', text: 'Nytt skadesystem, utökad polisverksamhet och förbättrad prestanda på serversidan.' },
]

export const Route = createFileRoute('/om-oss')({
  loader: () => getDiscordInfo(),
  head: () => seo({ title: 'Om oss', description: 'Lär känna Skandinavien Roleplay – vår historia, våra värderingar och teamet bakom servern.', path: '/om-oss' }),
  component: OmOss,
})

function OmOss() {
  const discord = Route.useLoaderData()
  return (
    <>
      <PageHero eyebrow="Om oss" title="En svensk roleplay-community med långsiktighet">
        Sedan {site.foundedYear} har vi byggt en server där kvalitet, trygghet och berättande står i centrum.
      </PageHero>
      <About showLink={false} />
      <section className="py-16 sm:py-24">
        <div className="container-x">
          <SectionHeader eyebrow="Vår historia" title="Från idé till etablerad server" />
          <ol className="mt-14 grid gap-4 md:grid-cols-4">
            {timeline.map((t, i) => (
              <Reveal as="li" key={t.year} delay={i * 70} className="card">
                <span className="font-display text-3xl font-bold text-electric [font-stretch:115%]">{t.year}</span>
                <h3 className="mt-4 text-base font-semibold">{t.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-mist">{t.text}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>
      <Staff />
      <DiscordCta discord={discord} />
    </>
  )
}
