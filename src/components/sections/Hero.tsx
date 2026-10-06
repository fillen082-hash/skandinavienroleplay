import { ArrowRight, Play } from 'lucide-react'
import { site } from '@/config/site'
import type { ServerStatus } from '@/lib/types'
import { cdnImage, cdnSrcSet } from '@/lib/image'
import { DiscordIcon } from '@/components/ui/DiscordIcon'
import { StatusPanel } from './StatusPanel'

const HERO_IMG = '/img/hero-stad.png'

export function Hero({ status }: { status: ServerStatus }) {
  return (
    <section className="relative isolate flex min-h-[100svh] items-center overflow-hidden pt-28 pb-16">
      {/* Bakgrund: nordisk stad i blå timme */}
      <img
        src={cdnImage(HERO_IMG, 1920)}
        srcSet={cdnSrcSet(HERO_IMG, [800, 1280, 1920, 2560])}
        sizes="100vw"
        alt=""
        fetchPriority="high"
        className="absolute inset-0 -z-20 h-full w-full object-cover object-[60%_60%] opacity-80"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink via-ink/85 to-ink/30" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink via-transparent to-ink/70" />
      <div className="grid-lines absolute inset-0 -z-10 opacity-60" />
      <div className="absolute -left-40 top-1/3 -z-10 h-96 w-96 rounded-full bg-blue-500/20 blur-[120px]" />

      <div className="container-x grid items-center gap-14 lg:grid-cols-[1.25fr_0.75fr]">
        <div>
          <span className="eyebrow animate-fade-up">Svensk FiveM-server · Sedan {site.foundedYear}</span>
          <h1 className="mt-6 animate-fade-up font-display text-[2.6rem] font-black leading-[0.95] tracking-tight [font-stretch:125%] [animation-delay:80ms] sm:text-7xl xl:text-[5.5rem]">
            <span className="text-gradient">SKANDINAVIEN</span>
            <br />
            <span className="text-white/90">ROLEPLAY</span>
          </h1>
          <p className="mt-6 max-w-xl animate-fade-up text-lg leading-relaxed text-frost/85 [animation-delay:160ms] sm:text-xl">
            {site.tagline}
          </p>
          <div className="mt-10 flex animate-fade-up flex-wrap gap-3 [animation-delay:240ms]">
            <a href={site.connectUrl} className="btn btn-primary !px-7 !py-4 text-base">
              <Play className="h-4 w-4 fill-current" aria-hidden="true" />
              Spela nu
            </a>
            <a href={site.discordUrl} target="_blank" rel="noopener noreferrer" className="btn btn-ghost !px-7 !py-4 text-base">
              <DiscordIcon className="h-5 w-5" />
              Gå med i Discord
            </a>
          </div>
          <a href="#om" className="mt-12 hidden animate-fade-up items-center gap-2 text-sm text-mist transition hover:text-white [animation-delay:320ms] sm:inline-flex">
            Upptäck servern <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>

        <div className="animate-fade-up [animation-delay:300ms]">
          <StatusPanel initial={status} />
        </div>
      </div>
    </section>
  )
}
