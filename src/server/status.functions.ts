import { createServerFn } from '@tanstack/react-start'
import { site } from '@/config/site'
import type { DiscordInfo, ServerStats, ServerStatus } from '@/lib/types'
import { fallbackDiscord, fallbackStats, fallbackStatus, lastServerUpdate } from '@/lib/fallback'

/**
 * Serverstatus från FiveM.
 *
 * Konfigureras med miljövariabler i Netlify:
 *  - FIVEM_SERVER_ENDPOINT  t.ex. "123.45.67.89:30120" (läser /dynamic.json)
 *  - FIVEM_CFX_CODE         t.ex. "abc123" (läser från FiveM:s serverlista)
 * Utan variabler returneras demo-data så att sidan alltid fungerar.
 */
export const getServerStatus = createServerFn({ method: 'GET' }).handler(
  async (): Promise<ServerStatus> => {
    const endpoint = process.env.FIVEM_SERVER_ENDPOINT
    const cfxCode = process.env.FIVEM_CFX_CODE
    const started = Date.now()

    try {
      if (endpoint) {
        const res = await fetch(`http://${endpoint}/dynamic.json`, {
          signal: AbortSignal.timeout(4000),
        })
        if (!res.ok) throw new Error(String(res.status))
        const data = (await res.json()) as { clients: number; sv_maxclients: number | string }
        return {
          online: true,
          players: data.clients,
          maxPlayers: Number(data.sv_maxclients),
          ping: Date.now() - started,
          ip: site.serverIp,
          lastUpdate: lastServerUpdate,
          live: true,
        }
      }
      if (cfxCode) {
        const res = await fetch(
          `https://servers-frontend.fivem.net/api/servers/single/${encodeURIComponent(cfxCode)}`,
          { signal: AbortSignal.timeout(4000), headers: { 'User-Agent': 'SkandinavienRP-Web' } },
        )
        if (!res.ok) throw new Error(String(res.status))
        const { Data } = (await res.json()) as {
          Data: { clients: number; sv_maxclients: number }
        }
        return {
          online: true,
          players: Data.clients,
          maxPlayers: Data.sv_maxclients,
          ping: Date.now() - started,
          ip: site.serverIp,
          lastUpdate: lastServerUpdate,
          live: true,
        }
      }
    } catch {
      return { ...fallbackStatus, online: false, players: 0, ping: null, live: true }
    }

    return fallbackStatus
  },
)

/** Statistik för statistiksektionen. Byt ut mot riktig källa (t.ex. Netlify Database) senare. */
export const getServerStats = createServerFn({ method: 'GET' }).handler(
  async (): Promise<ServerStats> => {
    const status = await getServerStatus()
    return { ...fallbackStats, activePlayers: status.players }
  },
)

/**
 * Discord-medlemmar via den publika invite-endpointen.
 * Konfigureras med DISCORD_INVITE_CODE (koden efter discord.gg/).
 */
export const getDiscordInfo = createServerFn({ method: 'GET' }).handler(
  async (): Promise<DiscordInfo> => {
    const code = process.env.DISCORD_INVITE_CODE
    if (!code) return fallbackDiscord
    try {
      const res = await fetch(
        `https://discord.com/api/v10/invites/${encodeURIComponent(code)}?with_counts=true`,
        { signal: AbortSignal.timeout(4000) },
      )
      if (!res.ok) throw new Error(String(res.status))
      const data = (await res.json()) as {
        approximate_member_count: number
        approximate_presence_count: number
      }
      return {
        members: data.approximate_member_count,
        online: data.approximate_presence_count,
        live: true,
      }
    } catch {
      return fallbackDiscord
    }
  },
)
