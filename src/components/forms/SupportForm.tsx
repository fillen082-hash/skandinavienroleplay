import { useState } from 'react'
import { Send } from 'lucide-react'
import { formDataToObject, submitNetlifyForm } from '@/lib/forms'
import { Field, FormSuccess, Honeypot, type FormState } from './FormStatus'

export const supportCategories = ['Teknisk support', 'Rapportera spelare', 'Överklagan av straff', 'Donationer & köp', 'Övrigt']

export function SupportForm() {
  const [state, setState] = useState<FormState>('idle')

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setState('sending')
    try {
      await submitNetlifyForm('support', formDataToObject(e.currentTarget))
      setState('sent')
    } catch {
      setState('error')
    }
  }

  if (state === 'sent')
    return (
      <FormSuccess title="Ärendet är skickat">
        Tack! Vi har tagit emot ditt ärende och återkommer så snart vi kan, normalt inom 24 timmar.
      </FormSuccess>
    )

  return (
    <form name="support" method="POST" onSubmit={onSubmit} className="card space-y-5 !p-6 sm:!p-8">
      <input type="hidden" name="form-name" value="support" />
      <Honeypot />
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Namn">
          <input name="namn" className="field" required autoComplete="name" />
        </Field>
        <Field label="Discord-namn">
          <input name="discord" className="field" required />
        </Field>
      </div>
      <Field label="E-post" hint="Valfritt – används endast för att svara på ditt ärende.">
        <input name="epost" type="email" className="field" autoComplete="email" />
      </Field>
      <Field label="Kategori">
        <select name="kategori" className="field" required defaultValue="">
          <option value="" disabled className="bg-navy-950">Välj kategori</option>
          {supportCategories.map((c) => (
            <option key={c} className="bg-navy-950">{c}</option>
          ))}
        </select>
      </Field>
      <Field label="Beskriv ditt ärende">
        <textarea name="meddelande" rows={6} className="field resize-y" required />
      </Field>
      {state === 'error' && <p className="text-sm text-red-400" role="alert">Något gick fel. Försök igen eller kontakta oss via Discord.</p>}
      <button type="submit" disabled={state === 'sending'} className="btn btn-primary !py-4 disabled:opacity-60">
        <Send className="h-4 w-4" aria-hidden="true" />
        {state === 'sending' ? 'Skickar…' : 'Skicka ärende'}
      </button>
    </form>
  )
}
