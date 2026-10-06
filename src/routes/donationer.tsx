import { createFileRoute } from '@tanstack/react-router'
import { Check, ShieldCheck } from 'lucide-react'
import { donationPrinciples, packages } from '@/data/packages'
import { site } from '@/config/site'
import { seo } from '@/lib/seo'
import { PageHero } from '@/components/ui/PageHero'
import { Reveal } from '@/components/ui/Reveal'
import { AccordionItem } from '@/components/ui/Accordion'
import { SectionHeader } from '@/components/ui/SectionHeader'

const faq = [
  { q: 'Ger paketen några fördelar i spelet?', a: 'Nej. Paketen ger endast kosmetiska fördelar, köprioritet och community-förmåner. Inga vapen, pengar eller prestandafordon.' },
  { q: 'Hur betalar jag?', a: 'Betalningen sker säkert via Tebex, som är FiveM:s officiella betalningsplattform. Kort, Swish via PayPal och fler alternativ stöds.' },
  { q: 'Kan jag avsluta min prenumeration?', a: 'Ja, du kan avsluta när som helst via Tebex. Förmånerna gäller perioden ut.' },
  { q: 'Vad händer om jag blir avstängd?', a: 'Donationer återbetalas inte vid avstängning på grund av regelbrott. Läs våra användarvillkor för mer information.' },
]

export const Route = createFileRoute('/donationer')({
  head: () => seo({ title: 'Donationer', description: 'Stöd Skandinavien Roleplay med ett supporterpaket. Inga spelmässiga fördelar – bara kosmetik och community-förmåner.', path: '/donationer' }),
  component: Donationer,
})

function Donationer() {
  return (
    <>
      <PageHero eyebrow="Donationer" title="Stöd serverns utveckling">
        Skandinavien Roleplay drivs av communityn. Ditt stöd finansierar hosting, licenser och utveckling av nya
        system – helt utan pay-to-win.
      </PageHero>

      <section className="py-16">
        <div className="container-x">
          <ul className="grid items-stretch gap-5 lg:grid-cols-3">
            {packages.map((p, i) => (
              <Reveal
                as="li"
                key={p.id}
                delay={i * 80}
                className={`card flex flex-col !p-8 ${p.highlighted ? 'border-electric/30 shadow-[0_30px_80px_-35px_rgb(92_200_255/0.55)]' : 'card-hover'}`}
              >
                {p.highlighted && (
                  <span className="absolute -top-3 left-8 rounded-full bg-gradient-to-r from-blue-500 to-electric px-3 py-1 text-[0.68rem] font-bold uppercase tracking-wider text-ink">
                    Mest valt
                  </span>
                )}
                <h2 className="text-xl font-bold [font-stretch:110%]">{p.name}</h2>
                <p className="mt-2 text-sm leading-relaxed text-mist">{p.description}</p>
                <p className="mt-6 flex items-baseline gap-2">
                  <span className="font-display text-5xl font-bold text-white">{p.price}</span>
                  <span className="text-sm text-mist">kr {p.period}</span>
                </p>
                <ul className="mt-7 space-y-3 border-t border-white/5 pt-7">
                  {p.perks.map((perk) => (
                    <li key={perk} className="flex items-start gap-3 text-sm text-frost/90">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-electric" aria-hidden="true" /> {perk}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-8">
                  <a
                    href={`${site.storeUrl}${p.tebexId ? `/package/${p.tebexId}` : ''}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`btn w-full !py-3.5 ${p.highlighted ? 'btn-primary' : 'btn-ghost'}`}
                  >
                    Välj {p.name}
                  </a>
                </div>
              </Reveal>
            ))}
          </ul>

          <ul className="mt-16 grid gap-4 md:grid-cols-3">
            {donationPrinciples.map((d, i) => (
              <Reveal as="li" key={d.title} delay={i * 60} className="flex gap-4">
                <ShieldCheck className="h-6 w-6 shrink-0 text-electric" aria-hidden="true" />
                <div>
                  <h3 className="text-base font-semibold">{d.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-mist">{d.text}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="container-x max-w-3xl">
          <SectionHeader eyebrow="Vanliga frågor" title="Frågor om donationer" align="center" />
          <div className="mt-10 space-y-3">
            {faq.map((f) => (
              <AccordionItem key={f.q} title={f.q}>
                <p className="text-sm leading-relaxed text-mist">{f.a}</p>
              </AccordionItem>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
