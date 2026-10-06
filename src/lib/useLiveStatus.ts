import { useEffect, useState } from 'react'
import { getServerStatus } from '@/server/status.functions'
import type { ServerStatus } from './types'

/** Startar med serverrenderad status och uppdaterar den var 60:e sekund. */
export function useLiveStatus(initial: ServerStatus, intervalMs = 60_000) {
  const [status, setStatus] = useState(initial)
  useEffect(() => {
    const id = setInterval(() => {
      getServerStatus().then(setStatus).catch(() => {})
    }, intervalMs)
    return () => clearInterval(id)
  }, [intervalMs])
  return status
}
