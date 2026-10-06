import type { LucideIcon } from 'lucide-react'
import { BadgeCheck, Flame, HeartPulse, Shield, UserCog } from 'lucide-react'

export type ApplicationType = {
  id: string
  icon: LucideIcon
  title: string
  description: string
  requirements: string[]
  /** 'form' = formulär på sidan, 'discord' = ansökan sker i Discord. */
  method: 'form' | 'discord'
  open: boolean
}

export const applications: ApplicationType[] = [
  {
    id: 'polis',
    icon: Shield,
    title: 'Polis',
    description: 'Bli en del av Polismyndigheten och arbeta för trygghet i Skandinavien.',
    requirements: ['Minst 18 år', 'Fungerande mikrofon', 'Minst 20 timmar speltid'],
    method: 'form',
    open: true,
  },
  {
    id: 'sjukvard',
    icon: HeartPulse,
    title: 'Sjukvård',
    description: 'Arbeta inom ambulanssjukvården eller på akuten och rädda liv.',
    requirements: ['Minst 16 år', 'Fungerande mikrofon', 'Godkänd introduktion'],
    method: 'form',
    open: true,
  },
  {
    id: 'raddningstjanst',
    icon: Flame,
    title: 'Räddningstjänst',
    description: 'Hantera bränder, trafikolyckor och tekniska räddningsinsatser.',
    requirements: ['Minst 16 år', 'Fungerande mikrofon', 'Kunskap om regelverket'],
    method: 'form',
    open: true,
  },
  {
    id: 'staff',
    icon: UserCog,
    title: 'Staff',
    description: 'Hjälp oss att upprätthålla en trygg och rättvis spelmiljö för alla.',
    requirements: ['Minst 18 år', 'Minst 100 timmar speltid', 'Inga aktiva varningar'],
    method: 'discord',
    open: true,
  },
  {
    id: 'whitelist',
    icon: BadgeCheck,
    title: 'Whitelist-jobb',
    description: 'Ansök till kriminella organisationer, advokatbyrå, domstol eller media.',
    requirements: ['Minst 18 år', 'Genomarbetad karaktärsbakgrund', 'Ren historik'],
    method: 'form',
    open: false,
  },
]
