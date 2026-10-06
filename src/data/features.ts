import type { LucideIcon } from 'lucide-react'
import {
  Building2,
  Car,
  Briefcase,
  Flame,
  Home,
  HeartPulse,
  Shield,
  Wallet,
} from 'lucide-react'

export type Feature = {
  icon: LucideIcon
  title: string
  description: string
  details: string[]
}

export const features: Feature[] = [
  {
    icon: Shield,
    title: 'Polis',
    description:
      'En strukturerad polismyndighet med grader, utbildningar och realistiska arbetsrutiner – från ordningspolis till insatsstyrka.',
    details: ['Egen MDT och registerslagning', 'Gradsystem & utbildningar', 'Utredning och spaning'],
  },
  {
    icon: HeartPulse,
    title: 'Sjukvård',
    description:
      'Region Skandinavien ansvarar för ambulanssjukvård och akutmottagning med medicinska system byggda för realism.',
    details: ['Skadesystem med diagnoser', 'Ambulans & akutmottagning', 'Journalföring'],
  },
  {
    icon: Flame,
    title: 'Räddningstjänst',
    description:
      'Brand, trafikolyckor och tekniska räddningar. Räddningstjänsten samverkar med polis och sjukvård vid större insatser.',
    details: ['Dynamiska bränder', 'Losstagning & räddning', 'Samverkan vid larm'],
  },
  {
    icon: Building2,
    title: 'Företag',
    description:
      'Starta och driv ett eget företag – verkstad, restaurang, mäklarfirma eller transport. Anställ, fakturera och väx.',
    details: ['Egen företagsekonomi', 'Anställningar & löner', 'Fakturering'],
  },
  {
    icon: Car,
    title: 'Fordon',
    description:
      'Svenska registreringsskyltar, besiktning, försäkring och ett noga utvalt fordonsutbud som passar stadsbilden.',
    details: ['Registrering & besiktning', 'Bilhandlare och begagnat', 'Realistisk körkänsla'],
  },
  {
    icon: Briefcase,
    title: 'Jobb',
    description:
      'Ett brett utbud av civila yrken med egna arbetsmoment – från lastbilschaufför och bud till taxi och renhållning.',
    details: ['Över 30 civila yrken', 'Progression & erfarenhet', 'Arbetsförmedling'],
  },
  {
    icon: Home,
    title: 'Fastigheter',
    description:
      'Hyr eller köp lägenheter, villor och lokaler. Inred fritt och bygg upp ditt hem över tid.',
    details: ['Köp, hyra & andrahand', 'Fri inredning', 'Mäklare i spel'],
  },
  {
    icon: Wallet,
    title: 'Ekonomi',
    description:
      'En balanserad ekonomi med bank, skatter och lån. Allt är kalibrerat för att pengar ska ha ett verkligt värde.',
    details: ['Bank, kort & Swish', 'Skatt och avgifter', 'Inflationsskyddad balans'],
  },
]

export const pillars = [
  { title: 'Realistisk roleplay', text: 'Vi värdesätter karaktärsutveckling, konsekvenser och berättelser som håller över tid.' },
  { title: 'Aktiv och mogen community', text: 'Majoriteten av våra spelare är 18+ och spelar för upplevelsen, inte för att vinna.' },
  { title: 'Seriös staff', text: 'Ett utbildat staff-team med tydliga rutiner, dokumenterade beslut och snabb återkoppling.' },
  { title: 'Unika scripts och system', text: 'Kärnsystemen är egenutvecklade och anpassade för svensk roleplay – inga köpta standardpaket.' },
  { title: 'Ekonomi och jobb', text: 'En genomtänkt ekonomi där arbete, företagande och ansvar lönar sig.' },
  { title: 'Blåljus', text: 'Polis, sjukvård och räddningstjänst med egna organisationer, ledning och utbildningar.' },
  { title: 'Företag och civila yrken', text: 'Ett levande samhälle där civila spelare är lika viktiga som blåljus.' },
  { title: 'Kontinuerliga uppdateringar', text: 'Regelbundna uppdateringar baserade på feedback från communityn.' },
]
