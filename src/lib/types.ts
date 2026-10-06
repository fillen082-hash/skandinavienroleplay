/** Delade typer för data som senare hämtas från externa API:er. */

export type ServerStatus = {
  online: boolean
  players: number
  maxPlayers: number
  /** Svarstid i millisekunder mot FiveM-servern. */
  ping: number | null
  ip: string
  lastUpdate: string
  /** true när värdena kommer från en riktig FiveM-endpoint, false vid demo-data. */
  live: boolean
}

export type ServerStats = {
  activePlayers: number
  registeredPlayers: number
  jobs: number
  companies: number
  uptime: number
}

export type DiscordInfo = {
  members: number
  online: number
  live: boolean
}
