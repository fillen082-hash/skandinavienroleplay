const nf = new Intl.NumberFormat('sv-SE')
export const formatNumber = (n: number) => nf.format(n)

export const formatDate = (iso: string) =>
  new Intl.DateTimeFormat('sv-SE', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' }).format(
    new Date(iso),
  )
