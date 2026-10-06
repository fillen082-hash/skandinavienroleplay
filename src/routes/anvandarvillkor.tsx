import { createFileRoute } from '@tanstack/react-router'
import { seo } from '@/lib/seo'
import { PageHero } from '@/components/ui/PageHero'

export const Route = createFileRoute('/anvandarvillkor')({
  head: () => seo({ title: 'Användarvillkor', path: '/anvandarvillkor' }),
  component: () => (
    <>
      <PageHero eyebrow="Juridiskt" title="Användarvillkor">
        Villkor som gäller när du använder Skandinavien Roleplays server, Discord och webbplats.
      </PageHero>
      <article className="container-x prose-legal max-w-3xl py-12">
        <h2>Godkännande</h2>
        <p>Genom att ansluta till servern eller vår Discord godkänner du dessa villkor samt serverns regler.</p>
        <h2>Uppförande</h2>
        <p>Du ansvarar för ditt agerande och för att följa gällande regler. Staff har rätt att utfärda varningar, avstängningar och permanenta bannlysningar vid regelbrott.</p>
        <h2>Donationer</h2>
        <ul>
          <li>Donationer är frivilliga och ger inga spelmässiga fördelar.</li>
          <li>Donationer återbetalas inte vid avstängning på grund av regelbrott.</li>
          <li>Kosmetiska förmåner kan förändras i samband med serveruppdateringar.</li>
        </ul>
        <h2>Ansvarsbegränsning</h2>
        <p>Servern tillhandahålls i befintligt skick. Vi ansvarar inte för förlorad speldata till följd av tekniska fel, men strävar alltid efter att återställa det som är möjligt.</p>
        <h2>Ändringar</h2>
        <p>Villkoren kan uppdateras. Väsentliga ändringar meddelas i vår Discord.</p>
      </article>
    </>
  ),
})
