import { Link } from '@tanstack/react-router'
import { ArrowRight } from 'lucide-react'
import { pillars } from '@/data/features'
import { cdnImage, cdnSrcSet } from '@/lib/image'
import { Reveal } from '@/components/ui/Reveal'

const IMG = '/img/community.png'

export function About({ showLink = true }: { showLink?: boolean }) {
  return (
    <section id="om" className="scroll-mt-24 py-24 sm:py-32">
      <div className="container-x grid gap-14 lg:grid-cols-2 lg:gap-20">
        <div>
          <Reveal>
            <span className="eyebrow">Om Skandinavien Roleplay</span>
            <h2 className="mt-4 text-3xl font-bold leading-tight [font-stretch:110%] sm:text-5xl">
              Välkommen till Skandinavien Roleplay
            </h2>
          </Reveal>
          <Reveal delay={80} className="mt-6 space-y-4 text-base leading-relaxed text-mist sm:text-lg">
            <p>
              Skandinavien Roleplay är en svensk FiveM-server för spelare som söker seriös och genomtänkt roleplay.
              Här skapar du en karaktär som lever i ett trovärdigt samhälle – med lagar, ekonomi, yrken och konsekvenser.
            </p>
            <p>
              Vi har byggt servern med långsiktighet i fokus. Våra system är egenutvecklade, vår staff är utbildad
              och vår community består av spelare som värdesätter kvalitet framför kvantitet.
            </p>
          </Reveal>
          <Reveal delay={140} className="relative mt-10 overflow-hidden rounded-2xl border border-white/5">
            <img
              src={cdnImage(IMG, 1200)}
              srcSet={cdnSrcSet(IMG, [640, 960, 1200])}
              sizes="(min-width: 1024px) 40vw, 100vw"
              alt="Ambulans och räddningstjänst på plats en regnig kväll i staden"
              loading="lazy"
              className="aspect-[16/9] w-full object-cover object-bottom transition duration-700 hover:scale-[1.03]"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />
            <p className="absolute bottom-4 left-5 text-xs font-medium uppercase tracking-[0.2em] text-frost/80">
              Blåljussamverkan · Södermalm
            </p>
          </Reveal>
          {showLink && (
            <Reveal delay={180}>
              <Link to="/om-oss" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-electric hover:text-white">
                Läs mer om oss <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </Reveal>
          )}
        </div>

        <ul className="grid content-start gap-3 sm:grid-cols-2">
          {pillars.map((p, i) => (
            <Reveal as="li" key={p.title} delay={i * 50} className="card card-hover !p-6">
              <span className="font-mono text-xs text-electric/80">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="mt-3 text-base font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-mist">{p.text}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
