import { ArrowUpRight } from 'lucide-react'
import { site } from '@/config/site'
import type { DiscordInfo } from '@/lib/types'
import { formatNumber } from '@/lib/format'
import { DiscordIcon } from '@/components/ui/DiscordIcon'
import { Reveal } from '@/components/ui/Reveal'

export function DiscordCta({ discord }: { discord: DiscordInfo }) {
  return (
    <section id="discord" className="scroll-mt-24 py-24 sm:py-32">
      <div className="container-x">
        <Reveal className="relative overflow-hidden rounded-[2rem] border border-electric/15 px-6 py-16 text-center sm:px-16 sm:py-24">
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-navy-800 via-navy-950 to-ink" />
          <div className="grid-lines absolute inset-0 -z-10" />
          <div className="absolute -bottom-40 left-1/2 -z-10 h-80 w-[40rem] -translate-x-1/2 rounded-full bg-blue-500/30 blur-[100px]" />

          <span className="mx-auto inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-[#5865F2]/15 text-[#8b94ff] ring-1 ring-[#5865F2]/30">
            <DiscordIcon className="h-8 w-8" />
          </span>
          <h2 className="mx-auto mt-8 max-w-3xl text-3xl font-extrabold leading-tight [font-stretch:115%] sm:text-5xl">
            Bli en del av Skandinaviens community
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-mist sm:text-lg">
            Gå med i vår Discord för att få nyheter, support, ansökningar och kontakt med communityn.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm">
            <span className="flex items-center gap-2 text-frost">
              <span className="h-2 w-2 rounded-full bg-emerald-400" aria-hidden="true" />
              <strong className="font-semibold text-white">{formatNumber(discord.online)}</strong> online
            </span>
            <span className="flex items-center gap-2 text-frost">
              <span className="h-2 w-2 rounded-full bg-mist" aria-hidden="true" />
              <strong className="font-semibold text-white">{formatNumber(discord.members)}</strong> medlemmar
            </span>
          </div>

          <a href={site.discordUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary mt-10 !px-8 !py-4 text-base">
            Gå med i Discord <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </Reveal>
      </div>
    </section>
  )
}
