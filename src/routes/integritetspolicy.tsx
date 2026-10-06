import { createFileRoute } from '@tanstack/react-router'
import { site } from '@/config/site'
import { seo } from '@/lib/seo'
import { PageHero } from '@/components/ui/PageHero'

export const Route = createFileRoute('/integritetspolicy')({
  head: () => seo({ title: 'Integritetspolicy', path: '/integritetspolicy' }),
  component: () => (
    <>
      <PageHero eyebrow="Juridiskt" title="Integritetspolicy">
        Så hanterar vi dina personuppgifter i enlighet med GDPR.
      </PageHero>
      <article className="container-x prose-legal max-w-3xl py-12">
        <h2>Vilka uppgifter vi samlar in</h2>
        <p>Vi behandlar de uppgifter du själv lämnar i ansöknings- och supportformulär, till exempel Discord-namn, ålder och e-postadress. På servern loggas även speltekniska identifierare (Cfx.re-, Discord- och Steam-ID) för att upprätthålla reglerna.</p>
        <h2>Varför vi behandlar uppgifterna</h2>
        <ul>
          <li>För att hantera ansökningar och supportärenden.</li>
          <li>För att upprätthålla serverns regler och förhindra fusk.</li>
          <li>För att hantera donationer via vår betalningspartner Tebex.</li>
        </ul>
        <h2>Lagring</h2>
        <p>Formulärdata sparas så länge ärendet är aktivt och raderas senast 12 månader efter avslut. Loggar för regelefterlevnad sparas i upp till 24 månader.</p>
        <h2>Dina rättigheter</h2>
        <p>Du har rätt att begära utdrag, rättelse eller radering av dina uppgifter. Kontakta oss på {site.supportEmail}.</p>
      </article>
    </>
  ),
})
