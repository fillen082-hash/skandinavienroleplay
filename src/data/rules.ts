export type RuleCategory = {
  id: string
  title: string
  summary: string
  rules: { code: string; title: string; text: string }[]
}

export const rulesUpdated = '2026-09-28'

export const ruleCategories: RuleCategory[] = [
  {
    id: 'allmant',
    title: 'Allmänna regler',
    summary: 'Grundläggande regler som gäller alla spelare på servern och i Discord.',
    rules: [
      { code: '1.1', title: 'Respekt', text: 'Behandla alla spelare och staff med respekt. Rasism, sexism, hot och trakasserier tolereras inte, varken i eller utanför roleplay.' },
      { code: '1.2', title: 'Åldersgräns', text: 'Lägsta ålder för att spela på servern är 16 år. Vissa yrken och organisationer kräver 18 år.' },
      { code: '1.3', title: 'Fusk och exploits', text: 'All form av fusk, modmenyer, makron eller utnyttjande av buggar är förbjudet och leder till permanent avstängning.' },
      { code: '1.4', title: 'Rapportera buggar', text: 'Buggar ska rapporteras via supportkanalen i Discord. Den som medvetet utnyttjar en bugg kan stängas av.' },
      { code: '1.5', title: 'Staffs beslut', text: 'Staffs beslut ska respekteras i stunden. Är du missnöjd kan du överklaga via ett supportärende i efterhand.' },
    ],
  },
  {
    id: 'roleplay',
    title: 'Roleplay-regler',
    summary: 'Regler som säkerställer realistisk och rättvis roleplay för alla inblandade.',
    rules: [
      { code: '2.1', title: 'Metagaming', text: 'Det är förbjudet att använda information som din karaktär inte har fått i spelet, t.ex. från streams eller Discord.' },
      { code: '2.2', title: 'Powergaming', text: 'Du får inte tvinga fram situationer eller agera på sätt som är orealistiska eller inte ger motparten en chans att reagera.' },
      { code: '2.3', title: 'Fear RP', text: 'Din karaktär ska värdesätta sitt liv. Hotas du med vapen ska du agera därefter.' },
      { code: '2.4', title: 'RDM och VDM', text: 'Att döda eller köra på andra spelare utan ett tydligt och giltigt roleplay-skäl är förbjudet.' },
      { code: '2.5', title: 'New Life Rule', text: 'Efter att din karaktär har dött minns den inte händelserna som ledde till döden och får inte återvända till platsen inom 15 minuter.' },
      { code: '2.6', title: 'Bryta karaktär', text: 'Stanna i karaktär så länge du är i spelet. Problem tas med staff via /report, inte i roleplay.' },
    ],
  },
  {
    id: 'kriminellt',
    title: 'Kriminella regler',
    summary: 'Ramverk för kriminell roleplay så att den blir spännande, rimlig och rättvis.',
    rules: [
      { code: '3.1', title: 'Rån', text: 'Butiksrån kräver minst 2 poliser i tjänst, bankrån minst 6. Max antal rånare anges vid varje rånobjekt.' },
      { code: '3.2', title: 'Gisslan', text: 'Gisslan får inte vara en medlem i den egna gruppen eller en vän som är med frivilligt.' },
      { code: '3.3', title: 'Gängstorlek', text: 'En kriminell organisation får ha högst 12 aktiva medlemmar och kräver godkänd whitelist-ansökan.' },
      { code: '3.4', title: 'Säkra zoner', text: 'Sjukhus, polisstationer och jobbcenter räknas som säkra zoner där kriminell aktivitet inte får initieras.' },
    ],
  },
  {
    id: 'polis',
    title: 'Polisregler',
    summary: 'Regler för spelare som tjänstgör inom Polismyndigheten.',
    rules: [
      { code: '4.1', title: 'Tjänsteutövning', text: 'Poliser ska följa myndighetens interna riktlinjer och agera professionellt även mot provocerande spelare.' },
      { code: '4.2', title: 'Våldsanvändning', text: 'Våld ska stå i proportion till situationen. Skjutvapen används endast vid direkt hot mot liv.' },
      { code: '4.3', title: 'Korruption', text: 'Korrupt roleplay som polis är inte tillåtet utan godkännande från polisledningen och staff.' },
      { code: '4.4', title: 'Utrustning', text: 'Polisutrustning och fordon får aldrig användas privat eller lämnas ut till civila spelare.' },
    ],
  },
  {
    id: 'kommunikation',
    title: 'Kommunikationsregler',
    summary: 'Hur vi kommunicerar i spelet, i röstchatten och i Discord.',
    rules: [
      { code: '5.1', title: 'Mikrofon', text: 'En fungerande mikrofon med acceptabel ljudkvalitet krävs. Röstförvrängare är inte tillåtna.' },
      { code: '5.2', title: 'Språk', text: 'Svenska är huvudspråket på servern. Andra språk får användas om det passar karaktären och situationen.' },
      { code: '5.3', title: 'OOC-kommunikation', text: 'Håll OOC-chatt till ett minimum och använd den aldrig för att påverka pågående roleplay.' },
      { code: '5.4', title: 'Radio', text: 'Radiokanaler ska användas realistiskt. Tänk på att andra kan avlyssna okrypterade kanaler.' },
    ],
  },
  {
    id: 'staff',
    title: 'Staffregler',
    summary: 'Krav och riktlinjer för servers staff-team.',
    rules: [
      { code: '6.1', title: 'Opartiskhet', text: 'Staff ska vara opartiska och får inte hantera ärenden som rör vänner eller den egna gruppen.' },
      { code: '6.2', title: 'Dokumentation', text: 'Alla sanktioner ska dokumenteras med anledning och bevis i staffsystemet.' },
      { code: '6.3', title: 'Befogenheter', text: 'Staff-verktyg får endast användas i tjänst och aldrig för att påverka eget roleplay.' },
      { code: '6.4', title: 'Tystnadsplikt', text: 'Information från staffkanaler och ärenden är konfidentiell.' },
    ],
  },
  {
    id: 'fordon',
    title: 'Fordonsregler',
    summary: 'Regler för fordon, körning och trafik.',
    rules: [
      { code: '7.1', title: 'Realistisk körning', text: 'Kör realistiskt efter fordonets egenskaper. Terrängkörning med sportbilar är inte tillåtet.' },
      { code: '7.2', title: 'Biljakter', text: 'Vid biljakt ska fordonets skador respekteras. Kraftigt skadade fordon får inte användas för fortsatt flykt.' },
      { code: '7.3', title: 'Utryckningsfordon', text: 'Civila spelare får inte stjäla eller använda utryckningsfordon utan tydligt roleplay-skäl.' },
      { code: '7.4', title: 'Parkering', text: 'Fordon ska parkeras på ett rimligt sätt. Felparkerade fordon kan bogseras av bärgare eller staff.' },
    ],
  },
]
