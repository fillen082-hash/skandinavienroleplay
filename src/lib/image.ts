/** Bygger en URL via Netlify Image CDN så att vi aldrig skickar originalfilen. */
export const cdnImage = (path: string, width: number, quality = 75) =>
  `/.netlify/images?url=${encodeURIComponent(path)}&w=${width}&fm=webp&q=${quality}`

export const cdnSrcSet = (path: string, widths: number[]) =>
  widths.map((w) => `${cdnImage(path, w)} ${w}w`).join(', ')
