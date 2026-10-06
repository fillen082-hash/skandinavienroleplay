export type StaffMember = {
  name: string
  role: string
  discord: string
  /** Sökväg eller URL till profilbild. Lämnas tom för initialer. */
  avatar?: string
  /** Ägaren lyfts fram separat högst upp. */
  featured?: boolean
}

export const roleOrder = ['Ägare', 'Grundare', 'Serverchef', 'Head Admin', 'Admin', 'Moderator'] as const

export const staff: StaffMember[] = [
  { name: 'Filip Lindqvist', role: 'Ägare', discord: 'fillen', featured: true },
  { name: 'Oskar Berg', role: 'Grundare', discord: 'oskarb' },
  { name: 'Elin Holm', role: 'Grundare', discord: 'elinh' },
  { name: 'Viktor Sandberg', role: 'Serverchef', discord: 'vsandberg' },
  { name: 'Alexander Nyström', role: 'Head Admin', discord: 'alexnys' },
  { name: 'Moa Ekström', role: 'Head Admin', discord: 'moae' },
  { name: 'Lukas Wikström', role: 'Admin', discord: 'lukasw' },
  { name: 'Sara Lund', role: 'Admin', discord: 'saralund' },
  { name: 'Hugo Dahl', role: 'Admin', discord: 'hugodahl' },
  { name: 'Isak Forsberg', role: 'Moderator', discord: 'isakf' },
  { name: 'Ella Sjöberg', role: 'Moderator', discord: 'ellasj' },
  { name: 'Noah Engström', role: 'Moderator', discord: 'noahe' },
]
