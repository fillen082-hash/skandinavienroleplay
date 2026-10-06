const initials = (name: string) =>
  name
    .split(' ')
    .map((p) => p[0])
    .slice(0, 2)
    .join('')
    .toUpperCase()

export function Avatar({ name, src, size = 'md' }: { name: string; src?: string; size?: 'md' | 'lg' }) {
  const dim = size === 'lg' ? 'h-24 w-24 text-2xl' : 'h-14 w-14 text-base'
  return (
    <span
      className={`relative inline-flex ${dim} shrink-0 items-center justify-center overflow-hidden rounded-2xl font-display font-bold text-white`}
      style={{
        background: 'linear-gradient(140deg, #1a3566, #0a1426)',
        boxShadow: 'inset 0 0 0 1px rgb(92 200 255 / 0.25)',
      }}
    >
      {src ? <img src={src} alt={`Profilbild för ${name}`} className="h-full w-full object-cover" loading="lazy" /> : initials(name)}
    </span>
  )
}
