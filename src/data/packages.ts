export type SupporterPackage = {
  id: string
  name: string
  price: number
  period: string
  description: string
  perks: string[]
  highlighted?: boolean
  /** Tebex-paketets ID – fylls i när butiken kopplas in. */
  tebexId?: string
}

export const packages: SupporterPackage[] = [
  {
    id: 'supporter',
    name: 'Supporter',
    price: 49,
    period: 'per månad',
    description: 'För dig som vill visa ditt stöd och hjälpa servern att växa.',
    perks: [
      'Supporter-roll och färg i Discord',
      'Tillgång till supporterkanaler',
      'Prioriterad plats i kön (nivå 1)',
      'Tack i månadens nyhetsbrev',
    ],
  },
  {
    id: 'premium',
    name: 'Premium',
    price: 99,
    period: 'per månad',
    description: 'Vårt mest valda paket med fler kosmetiska fördelar.',
    perks: [
      'Allt i Supporter',
      'Prioriterad plats i kön (nivå 2)',
      'Extra karaktärsplats',
      'Utökade klädval och kosmetiska föremål',
      'Röst i månatliga community-omröstningar',
    ],
    highlighted: true,
  },
  {
    id: 'elite',
    name: 'Elite',
    price: 199,
    period: 'per månad',
    description: 'För de som vill bidra mest till serverns utveckling.',
    perks: [
      'Allt i Premium',
      'Högsta köprioritet (nivå 3)',
      'Unik registreringsskylt (kosmetisk)',
      'Tidig tillgång till testservern',
      'Exklusiv Elite-roll i Discord',
    ],
  },
]

export const donationPrinciples = [
  { title: 'Ingen pay-to-win', text: 'Paketen ger aldrig vapen, pengar, fordon med bättre prestanda eller andra spelmässiga fördelar.' },
  { title: 'Full transparens', text: 'Alla intäkter går till serverhosting, licenser och utveckling av nya system.' },
  { title: 'Avsluta när du vill', text: 'Prenumerationer hanteras via Tebex och kan avslutas när som helst.' },
]
