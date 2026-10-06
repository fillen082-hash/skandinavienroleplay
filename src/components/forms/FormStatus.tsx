import { CheckCircle2 } from 'lucide-react'

export type FormState = 'idle' | 'sending' | 'sent' | 'error'

export function FormSuccess({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="card flex flex-col items-center !p-10 text-center" role="status">
      <CheckCircle2 className="h-12 w-12 text-emerald-400" aria-hidden="true" />
      <h3 className="mt-5 text-xl font-semibold">{title}</h3>
      <p className="mt-2 max-w-md text-sm leading-relaxed text-mist">{children}</p>
    </div>
  )
}

export function Field({ label, children, hint }: { label: string; children: React.ReactNode; hint?: string }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium text-frost">{label}</span>
      {children}
      {hint && <span className="mt-1.5 block text-xs text-mist/70">{hint}</span>}
    </label>
  )
}

export function Honeypot() {
  return (
    <p className="hidden" aria-hidden="true">
      <label>
        Fyll inte i detta: <input name="bot-field" tabIndex={-1} autoComplete="off" />
      </label>
    </p>
  )
}
