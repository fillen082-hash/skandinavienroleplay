import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowUpRight, BookOpen, Mail } from 'lucide-react'
import { site } from '@/config/site'
import { seo } from '@/lib/seo'
import { PageHero } from '@/components/ui/PageHero'
import { Reveal } from '@/components/ui/Reveal'
import { AccordionItem } from '@/components/ui/Accordion'
import { DiscordIcon } from '@/components/ui/DiscordIcon'
import { SupportForm } from '@/components/forms/SupportForm'

const faq = [
  { q: 'Jag kommer inte in på servern – vad gör jag?', a: 'Kontrollera att FiveM är uppdaterat, rensa cachen (FiveM Application Data → data → cache) och försök igen. Fungerar det inte, skapa ett ärende.' },
  { q: 'Hur överklagar jag en avstängning?', a: 'Skapa ett ärende med kategorin "Överklagan av straff". Ange ditt Discord-namn, datum och varför du anser att beslutet bör omprövas.' },
  { q: 'Hur rapporterar jag en spelare?', a: 'Använd /report i spelet vid pågående situationer. I efterhand kan du skapa ett ärende med klipp eller bilder som bevis.' },
  { q: 'Hur lång är svarstiden?', a: 'Vi strävar efter att besvara alla ärenden inom 24 timmar. Överklaganden kan ta upp till 72 timmar.' },
]

export const Route = createFileRoute('/support')({
  head: () => seo({ title: 'Support', description: 'Få hjälp med tekniska problem, rapporter, överklaganden och donationer på Skandinavien Roleplay.', path: '/support' }),
  component: Support,
})

function Support() {
  const channels = [
    { icon: DiscordIcon, title: 'Discord-support', text: 'Snabbast hjälp. Öppna en ticket i #support.', href: site.discordUrl, label: 'Öppna Discord', external: true },
    { icon: Mail, title: 'E-post', text: 'För ärenden som inte passar i Discord.', href: `mailto:${site.supportEmail}`, label: site.supportEmail },
    { icon: BookOpen, title: 'Regelverket', text: 'Svaret på många frågor finns i reglerna.', to: '/regler', label: 'Läs reglerna' },
  ] as const

  return (
    <>
      <PageHero eyebrow="Support" title="Vi hjälper dig">
        Behöver du hjälp med något? Kontakta oss via Discord, e-post eller formuläret nedan.
      </PageHero>

      <section className="py-16">
        <div className="container-x">
          <ul className="grid gap-4 md:grid-cols-3">
            {channels.map((c, i) => (
              <Reveal as="li" key={c.title} delay={i * 60} className="card card-hover">
                <c.icon className="h-6 w-6 text-electric" aria-hidden="true" />
                <h2 className="mt-5 text-lg font-semibold">{c.title}</h2>
                <p className="mt-1.5 text-sm text-mist">{c.text}</p>
                {'to' in c ? (
                  <Link to={c.to} className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-electric hover:text-white">
                    {c.label} <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                ) : (
                  <a href={c.href} {...('external' in c ? { target: '_blank', rel: 'noopener noreferrer' } : {})} className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-electric hover:text-white">
                    {c.label} <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                )}
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-16">
        <div className="container-x grid gap-12 lg:grid-cols-2">
          <div>
            <span className="eyebrow">Vanliga frågor</span>
            <h2 className="mt-4 text-3xl font-bold [font-stretch:110%]">Snabba svar</h2>
            <div className="mt-8 space-y-3">
              {faq.map((f) => (
                <AccordionItem key={f.q} title={f.q}>
                  <p className="text-sm leading-relaxed text-mist">{f.a}</p>
                </AccordionItem>
              ))}
            </div>
          </div>
          <div>
            <span className="eyebrow">Skapa ärende</span>
            <h2 className="mb-8 mt-4 text-3xl font-bold [font-stretch:110%]">Kontakta oss</h2>
            <SupportForm />
          </div>
        </div>
      </section>
    </>
  )
}
