/**
 * Skickar ett formulär till Netlify Forms.
 * Formulären registreras via public/__forms.html – fälten där måste matcha.
 */
export async function submitNetlifyForm(formName: string, data: Record<string, string>) {
  const body = new URLSearchParams({ 'form-name': formName, ...data }).toString()
  const res = await fetch('/__forms.html', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body,
  })
  if (!res.ok) throw new Error(`Formuläret kunde inte skickas (${res.status})`)
}

export const formDataToObject = (form: HTMLFormElement) =>
  Object.fromEntries(
    Array.from(new FormData(form).entries()).map(([k, v]) => [k, String(v)]),
  ) as Record<string, string>
