# Skandinavien Roleplay – webbplats

Officiell webbplats för **Skandinavien Roleplay**, en svensk FiveM-server för seriös roleplay. Sidan presenterar
servern, visar serverstatus och statistik, samlar regler, ansökningar, supporterpaket, support och staff.

## Sidor

| Route | Innehåll |
| --- | --- |
| `/` | Hero med serverstatus, statistik, om oss, serverfunktioner, ansökningar, staff och Discord-CTA |
| `/om-oss` | Presentation, historik och staff |
| `/servern` | Live-status, guide för att ansluta, detaljerade serverfunktioner |
| `/regler` | Regelverk i accordion med sök och kategorinavigering |
| `/ansokningar` | Ansökningstyper och ansökningsformulär (Netlify Forms) |
| `/donationer` | Supporterpaket (Tebex-länkar), principer och FAQ |
| `/support` | Kontaktvägar, FAQ och supportformulär (Netlify Forms) |
| `/integritetspolicy`, `/anvandarvillkor` | Juridiska sidor |

## Teknik

- [TanStack Start](https://tanstack.com/start) (React 19, SSR, filbaserad routing)
- Tailwind CSS 4 med eget tema i `src/styles.css`
- Netlify Forms för ansökningar och supportärenden
- Netlify Image CDN för optimerade bilder (`/.netlify/images`)
- Lucide-ikoner, typsnitten Archivo, Manrope och JetBrains Mono

## Kom igång lokalt

```bash
pnpm install
netlify dev        # eller: pnpm dev
```

Formulär och Image CDN fungerar fullt ut först på Netlify (deploy preview eller produktion).

## Administrera innehåll

Allt innehåll ligger i vanliga TypeScript-filer:

- `src/config/site.ts` – server-IP, Discord-länk, Tebex-butik, navigering
- `src/data/rules.ts` – regler
- `src/data/staff.ts` – staff-lista (lägg till `avatar` för profilbild)
- `src/data/applications.ts` – ansökningstyper, krav och om de är öppna
- `src/data/packages.ts` – supporterpaket
- `src/data/features.ts` – serverfunktioner och värdeord

## Koppla in live-data

Sätt miljövariabler i Netlify (Site configuration → Environment variables):

| Variabel | Effekt |
| --- | --- |
| `FIVEM_SERVER_ENDPOINT` | `ip:port` till FiveM-servern – spelarantal och ping läses från `/dynamic.json` |
| `FIVEM_CFX_CODE` | Alternativ: Cfx.re-serverkod, läses från FiveM:s serverlista |
| `DISCORD_INVITE_CODE` | Koden efter `discord.gg/` – visar medlemmar och online i Discord-sektionen |

Utan variabler visas demo-värden från `src/lib/fallback.ts` och statuspanelen märks "Förhandsvisning".

## Roadmap

1. Riktig statistik (registrerade spelare, jobb, företag) från spelserverns databas eller Netlify Database
2. Tebex Headless API för paket och köp direkt på sidan
3. Inloggning med Discord (OAuth) och "Mina ansökningar"
4. Adminpanel för ansökningar, staff-lista och regler
5. Nyhetssystem för uppdateringar och patch notes
