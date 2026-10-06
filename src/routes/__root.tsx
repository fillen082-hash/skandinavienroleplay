import { HeadContent, Link, Scripts, createRootRoute } from '@tanstack/react-router'
import { site } from '@/config/site'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'

import '../styles.css'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'theme-color', content: '#05080f' },
      { title: `${site.name} – Svensk FiveM Roleplay` },
      { name: 'description', content: site.description },
      { property: 'og:site_name', content: site.name },
      { property: 'og:type', content: 'website' },
      { property: 'og:locale', content: 'sv_SE' },
      { name: 'twitter:card', content: 'summary_large_image' },
    ],
    links: [
      { rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Archivo:wdth,wght@100..125,500..900&family=JetBrains+Mono:wght@400;500&family=Manrope:wght@400..700&display=swap',
      },
    ],
    scripts: [
      {
        type: 'application/ld+json',
        children: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: site.name,
          url: site.url,
          sameAs: [site.discordUrl],
        }),
      },
    ],
  }),
  shellComponent: RootDocument,
  notFoundComponent: NotFound,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sv">
      <head>
        <HeadContent />
        <noscript>
          <style>{'.reveal{opacity:1!important;transform:none!important}'}</style>
        </noscript>
      </head>
      <body>
        <a href="#innehall" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-blue-500 focus:px-4 focus:py-2 focus:text-white">
          Hoppa till innehåll
        </a>
        <Navbar />
        <main id="innehall">{children}</main>
        <Footer />
        <Scripts />
      </body>
    </html>
  )
}

function NotFound() {
  return (
    <section className="container-x flex min-h-[70vh] flex-col items-start justify-center pt-32">
      <span className="eyebrow">404</span>
      <h1 className="mt-4 text-4xl font-extrabold [font-stretch:115%] sm:text-6xl">Sidan hittades inte</h1>
      <p className="mt-4 max-w-md text-mist">Sidan du letar efter finns inte eller har flyttats.</p>
      <Link to="/" className="btn btn-primary mt-8">Till startsidan</Link>
    </section>
  )
}
