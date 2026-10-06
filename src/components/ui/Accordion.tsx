import { useId, useState, type ReactNode } from 'react'
import { ChevronDown } from 'lucide-react'

export function AccordionItem({
  title,
  meta,
  children,
  defaultOpen = false,
}: {
  title: ReactNode
  meta?: ReactNode
  children: ReactNode
  defaultOpen?: boolean
}) {
  const [open, setOpen] = useState(defaultOpen)
  const id = useId()
  return (
    <div className={`card !p-0 overflow-hidden ${open ? 'border-electric/25' : ''}`}>
      <h3>
        <button
          type="button"
          aria-expanded={open}
          aria-controls={id}
          onClick={() => setOpen((o) => !o)}
          className="flex w-full items-center gap-4 px-6 py-5 text-left transition hover:bg-white/[0.02]"
        >
          <span className="flex-1">
            <span className="block text-lg font-semibold text-white">{title}</span>
            {meta && <span className="mt-1 block text-sm font-normal text-mist">{meta}</span>}
          </span>
          <ChevronDown
            className={`h-5 w-5 shrink-0 text-electric transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
            aria-hidden="true"
          />
        </button>
      </h3>
      <div
        id={id}
        role="region"
        className={`grid transition-[grid-template-rows] duration-300 ease-out ${open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
      >
        <div className="overflow-hidden">
          <div className="border-t border-white/5 px-6 py-5">{children}</div>
        </div>
      </div>
    </div>
  )
}
