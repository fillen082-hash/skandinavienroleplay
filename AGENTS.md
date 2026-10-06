# AGENTS.md

Webbplats för den svenska FiveM-servern **Skandinavien Roleplay**. TanStack Start (React 19, SSR) + Tailwind CSS 4,
deployad på Netlify. **All text på sidan ska vara på svenska.**

## Struktur

```
src/
├── config/site.ts           # Namn, IP, Discord/Tebex-länkar, navigering – ändra här först
├── data/                    # Statiskt innehåll: features, rules, staff, applications, packages
├── lib/
│   ├── types.ts             # ServerStatus, ServerStats, DiscordInfo
│   ├── fallback.ts          # ALLA demo-/platshållarvärden samlade här
│   ├── forms.ts             # submitNetlifyForm() – postar till /__forms.html
│   ├── image.ts             # cdnImage()/cdnSrcSet() för Netlify Image CDN
│   ├── seo.ts               # seo({title, description, path}) för route head()
│   └── useLiveStatus.ts     # Pollar serverstatus på klienten
├── server/status.functions.ts  # createServerFn: getServerStatus, getServerStats, getDiscordInfo
├── components/
│   ├── layout/              # Navbar (glass, kompakt vid scroll), Footer
│   ├── sections/            # Hero, StatusPanel, About, Features, Stats, Staff, DiscordCta, ApplicationsTeaser
│   ├── forms/               # ApplicationForm, SupportForm, delade fält
│   └── ui/                  # Logo, Reveal, SectionHeader, PageHero, CountUp, Accordion, Avatar, DiscordIcon
├── routes/                  # En fil per sida (svenska slugs: om-oss, regler, ansokningar …)
└── styles.css               # Tema (@theme-färger: ink, night, navy-*, electric, frost, mist) + komponentklasser
public/
├── __forms.html             # Dold mall som registrerar Netlify Forms "ansokan" och "support"
└── img/                     # Genererade bilder (refereras alltid via Image CDN)
```

## Konventioner

- Komponentklasser i `styles.css`: `.card`, `.card-hover`, `.glass`, `.btn btn-primary`, `.btn btn-ghost`, `.eyebrow`, `.field`, `.container-x`.
- Rubriker använder `font-display` (Archivo) med `[font-stretch:110–125%]` för den breda stilen.
- Fade-in: wrappa i `<Reveal>`; den tar bort sin transition när animationen är klar så hover-effekter fungerar normalt.
- Nya formulärfält måste även läggas till i `public/__forms.html`, annars ignorerar Netlify dem.
- Externa API:er anropas endast i `src/server/*.functions.ts` och faller alltid tillbaka på `lib/fallback.ts`.
- Bilder: använd `cdnImage()` – länka aldrig till originalfilerna i `public/img`.

## Miljövariabler

`FIVEM_SERVER_ENDPOINT`, `FIVEM_CFX_CODE`, `DISCORD_INVITE_CODE` – se README. Alla är valfria.

## Nästa steg

Se Roadmap i README.md (riktig statistik, Tebex Headless, Discord-inloggning, adminpanel, nyheter).
Persistens ska byggas med Netlify Database (`@netlify/database` + Drizzle, schema i `db/schema.ts`).
