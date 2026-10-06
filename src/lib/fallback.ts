import { site } from '@/config/site'
import type { DiscordInfo, ServerStats, ServerStatus } from './types'

/**
 * Demo-värden som visas tills riktiga API:er är konfigurerade.
 * Håll alla platshållare här så att de är lätta att hitta och ta bort.
 */
export const lastServerUpdate = '2026-10-04'

export const fallbackStatus: ServerStatus = {
  online: true,
  players: 187,
  maxPlayers: 256,
  ping: 24,
  ip: site.serverIp,
  lastUpdate: lastServerUpdate,
  live: false,
}

export const fallbackStats: ServerStats = {
  activePlayers: 187,
  registeredPlayers: 14820,
  jobs: 34,
  companies: 62,
  uptime: 99.8,
}

export const fallbackDiscord: DiscordInfo = {
  members: 9450,
  online: 1320,
  live: false,
}
