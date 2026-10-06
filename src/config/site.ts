/**
 * Central konfiguration för Skandinavien Roleplay.
 * Ändra länkar, IP och kontaktuppgifter här – allt annat på sidan läser härifrån.
 */
export const site = {
  name: 'Skandinavien Roleplay',
  shortName: 'SRP',
  tagline: 'Svensk FiveM Roleplay – Gemenskap, realism och kvalitet.',
  description:
    'Skandinavien Roleplay är en seriös svensk FiveM-server med fokus på realistisk roleplay, en mogen community och egenutvecklade system.',
  url: 'https://zingy-cendol-dd0e81.netlify.app',
  serverIp: 'connect.skandinavienrp.se',
  /** Direktlänk som öppnar FiveM-klienten. */
  connectUrl: 'fivem://connect/connect.skandinavienrp.se',
  discordUrl: 'https://discord.gg/skandinavienrp',
  /** Butik för supporterpaket (Tebex). */
  storeUrl: 'https://skandinavienrp.tebex.io',
  supportEmail: 'support@skandinavienrp.se',
  foundedYear: 2023,
} as const

export type NavItem = { label: string; to: string; external?: boolean }

export const navItems: NavItem[] = [
  { label: 'Hem', to: '/' },
  { label: 'Om oss', to: '/om-oss' },
  { label: 'Servern', to: '/servern' },
  { label: 'Regler', to: '/regler' },
  { label: 'Ansökningar', to: '/ansokningar' },
  { label: 'Donationer', to: '/donationer' },
  { label: 'Support', to: '/support' },
  { label: 'Discord', to: site.discordUrl, external: true },
]
