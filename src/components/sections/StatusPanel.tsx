import { useState } from 'react'
import { Check, Copy } from 'lucide-react'
import type { ServerStatus } from '@/lib/types'
import { useLiveStatus } from '@/lib/useLiveStatus'
import { formatDate } from '@/lib/format'

export function StatusPanel({ initial }: { initial: ServerStatus }) {
  const status = useLiveStatus(initial)
  const [copied, setCopied] = useState(false)
  const fill = status.maxPlayers ? Math.round((status.players / status.maxPlayers) * 100) : 0

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(status.ip)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {}
  }

  return (
    <div className="glass rounded-2xl p-5 shadow-[0_30px_80px_-30px_rgb(47_107_255/0.45)] sm:p-6" aria-live="polite">
      <div className="flex items-center justify-between">
        <span className="flex items-center gap-2.5 text-sm font-semibold text-white">
          <span
            className={`h-2.5 w-2.5 rounded-full ${status.online ? 'animate-pulse-dot bg-emerald-400' : 'bg-red-500'}`}
            aria-hidden="true"
          />
          {status.online ? 'Server online' : 'Server offline'}
        </span>
        <span className="rounded-md bg-white/5 px-2 py-1 font-mono text-[0.68rem] uppercase tracking-wider text-mist">
          {status.live ? 'Live' : 'Förhandsvisning'}
        </span>
      </div>

      <div className="mt-6 flex items-end justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-mist">Spelare online</p>
          <p className="mt-1 font-display text-4xl font-bold text-white tabular-nums">
            {status.players}
            <span className="text-xl font-medium text-mist"> / {status.maxPlayers}</span>
          </p>
        </div>
        <span className="text-sm font-semibold text-electric tabular-nums">{fill}%</span>
      </div>
      <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/5" role="progressbar" aria-valuenow={fill} aria-valuemin={0} aria-valuemax={100} aria-label="Serverbeläggning">
        <div className="h-full rounded-full bg-gradient-to-r from-blue-500 to-electric transition-all duration-700" style={{ width: `${fill}%` }} />
      </div>

      <dl className="mt-6 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-white/5 bg-white/5 text-sm">
        <div className="col-span-2 flex items-center justify-between bg-night/80 px-4 py-3">
          <dt className="text-mist">Server-IP</dt>
          <dd>
            <button type="button" onClick={copy} className="flex items-center gap-2 font-mono text-frost transition hover:text-electric" aria-label="Kopiera server-IP">
              {status.ip}
              {copied ? <Check className="h-4 w-4 text-emerald-400" /> : <Copy className="h-4 w-4" />}
            </button>
          </dd>
        </div>
        <div className="bg-night/80 px-4 py-3">
          <dt className="text-mist">Ping</dt>
          <dd className="mt-0.5 font-semibold text-white">{status.ping !== null ? `${status.ping} ms` : '—'}</dd>
        </div>
        <div className="bg-night/80 px-4 py-3">
          <dt className="text-mist">Senaste uppdatering</dt>
          <dd className="mt-0.5 font-semibold text-white">{formatDate(status.lastUpdate)}</dd>
        </div>
      </dl>
    </div>
  )
}
