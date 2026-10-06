import { useMemo, useState } from 'react'
import { createFileRoute } from '@tanstack/react-router'
import { Search } from 'lucide-react'
import { ruleCategories, rulesUpdated } from '@/data/rules'
import { seo } from '@/lib/seo'
import { formatDate } from '@/lib/format'
import { PageHero } from '@/components/ui/PageHero'
import { AccordionItem } from '@/components/ui/Accordion'

export const Route = createFileRoute('/regler')({
  head: () => seo({ title: 'Regler', description: 'Serverregler för Skandinavien Roleplay – allmänna regler, roleplay, kriminalitet, polis, kommunikation, staff och fordon.', path: '/regler' }),
  component: Regler,
})

function Regler() {
  const [query, setQuery] = useState('')
  const q = query.trim().toLowerCase()

  const filtered = useMemo(
    () =>
      ruleCategories
        .map((c) => ({
          ...c,
          rules: q
            ? c.rules.filter((r) => `${r.code} ${r.title} ${r.text}`.toLowerCase().includes(q))
            : c.rules,
        }))
        .filter((c) => c.rules.length > 0),
    [q],
  )

  return (
    <>
      <PageHero eyebrow="Regelverk" title="Serverns regler">
        Reglerna finns till för att alla ska få en rättvis och givande upplevelse. Okunskap om reglerna är ingen
        ursäkt – läs igenom dem innan du spelar.
      </PageHero>

      <section className="py-16">
        <div className="container-x grid gap-10 lg:grid-cols-[16rem_1fr]">
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <label className="relative block">
              <span className="sr-only">Sök i reglerna</span>
              <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-mist" aria-hidden="true" />
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Sök regel…"
                className="field !pl-10"
              />
            </label>
            <nav aria-label="Regelkategorier" className="mt-6 hidden lg:block">
              <ul className="space-y-1 border-l border-white/5">
                {ruleCategories.map((c) => (
                  <li key={c.id}>
                    <a href={`#${c.id}`} className="-ml-px block border-l border-transparent py-1.5 pl-4 text-sm text-mist transition hover:border-electric hover:text-white">
                      {c.title}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <p className="mt-6 text-xs text-mist/70">Senast uppdaterad {formatDate(rulesUpdated)}</p>
          </aside>

          <div className="space-y-4">
            {filtered.length === 0 && <p className="card text-mist">Inga regler matchar din sökning.</p>}
            {filtered.map((c, i) => (
              <div key={c.id} id={c.id} className="scroll-mt-28">
                <AccordionItem
                  key={`${c.id}-${q ? 'q' : ''}`}
                  defaultOpen={i === 0 || !!q}
                  title={
                    <>
                      <span className="mr-3 font-mono text-sm text-electric/80">
                        §{ruleCategories.findIndex((x) => x.id === c.id) + 1}
                      </span>
                      {c.title}
                    </>
                  }
                  meta={c.summary}
                >
                  <ol className="divide-y divide-white/5">
                    {c.rules.map((r) => (
                      <li key={r.code} className="grid gap-1 py-4 first:pt-0 last:pb-0 sm:grid-cols-[4rem_1fr]">
                        <span className="font-mono text-sm text-electric">{r.code}</span>
                        <div>
                          <p className="font-semibold text-white">{r.title}</p>
                          <p className="mt-1 text-sm leading-relaxed text-mist">{r.text}</p>
                        </div>
                      </li>
                    ))}
                  </ol>
                </AccordionItem>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
