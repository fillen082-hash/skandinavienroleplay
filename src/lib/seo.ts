import { site } from '@/config/site'

/** Gemensam SEO-metadata för varje route. */
export function seo({ title, description, path = '/' }: { title?: string; description?: string; path?: string }) {
  const fullTitle = title ? `${title} | ${site.name}` : `${site.name} – Svensk FiveM Roleplay`
  const desc = description ?? site.description
  const url = `${site.url}${path}`
  const image = `${site.url}/.netlify/images?url=/img/hero-stad.png&w=1200&h=630&fit=cover&fm=jpg`
  return {
    meta: [
      { title: fullTitle },
      { name: 'description', content: desc },
      { property: 'og:title', content: fullTitle },
      { property: 'og:description', content: desc },
      { property: 'og:url', content: url },
      { property: 'og:image', content: image },
      { name: 'twitter:title', content: fullTitle },
      { name: 'twitter:description', content: desc },
      { name: 'twitter:image', content: image },
    ],
    links: [{ rel: 'canonical', href: url }],
  }
}
