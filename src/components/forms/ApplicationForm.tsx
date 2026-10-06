import { useState } from 'react'
import { Send } from 'lucide-react'
import { applications } from '@/data/applications'
import { formDataToObject, submitNetlifyForm } from '@/lib/forms'
import { Field, FormSuccess, Honeypot, type FormState } from './FormStatus'

export function ApplicationForm({ type, onTypeChange }: { type: string; onTypeChange: (t: string) => void }) {
  const [state, setState] = useState<FormState>('idle')
  const formTypes = applications.filter((a) => a.method === 'form' && a.open)

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setState('sending')
    try {
      await submitNetlifyForm('ansokan', formDataToObject(e.currentTarget))
      setState('sent')
    } catch {
      setState('error')
    }
  }

  if (state === 'sent')
    return (
      <FormSuccess title="Tack för din ansökan!">
        Vi har tagit emot din ansökan. Ansvarig avdelning återkommer via Discord inom 3–7 dagar.
      </FormSuccess>
    )

  return (
    <form name="ansokan" method="POST" onSubmit={onSubmit} className="card space-y-5 !p-6 sm:!p-8">
      <input type="hidden" name="form-name" value="ansokan" />
      <Honeypot />
      <Field label="Ansökan gäller">
        <select name="typ" value={type} onChange={(e) => onTypeChange(e.target.value)} className="field" required>
          {formTypes.map((a) => (
            <option key={a.id} value={a.id} className="bg-navy-950">{a.title}</option>
          ))}
        </select>
      </Field>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Karaktärsnamn">
          <input name="karaktar" className="field" required placeholder="Förnamn Efternamn" />
        </Field>
        <Field label="Discord-namn">
          <input name="discord" className="field" required placeholder="dittnamn" />
        </Field>
        <Field label="Ålder (OOC)">
          <input name="alder" type="number" min={13} max={99} className="field" required />
        </Field>
        <Field label="Ungefärlig speltid på servern">
          <input name="speltid" className="field" required placeholder="t.ex. 45 timmar" />
        </Field>
      </div>
      <Field label="Tidigare erfarenhet">
        <textarea name="erfarenhet" rows={3} className="field resize-y" placeholder="Berätta om din erfarenhet av roleplay och liknande roller." />
      </Field>
      <Field label="Varför vill du söka?" hint="Minst några meningar. Seriösa ansökningar prioriteras.">
        <textarea name="motivering" rows={5} className="field resize-y" required minLength={80} />
      </Field>
      <label className="flex items-start gap-3 text-sm text-mist">
        <input type="checkbox" name="regler" value="ja" required className="mt-1 h-4 w-4 accent-[#2f6bff]" />
        Jag har läst och godkänner serverns regler och integritetspolicy.
      </label>
      {state === 'error' && <p className="text-sm text-red-400" role="alert">Något gick fel. Försök igen eller kontakta oss via Discord.</p>}
      <button type="submit" disabled={state === 'sending'} className="btn btn-primary w-full !py-4 disabled:opacity-60 sm:w-auto">
        <Send className="h-4 w-4" aria-hidden="true" />
        {state === 'sending' ? 'Skickar…' : 'Skicka ansökan'}
      </button>
    </form>
  )
}
