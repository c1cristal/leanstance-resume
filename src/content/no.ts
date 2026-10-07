import type {
  ResumeCertification,
  ResumeContent,
  ResumeEducation,
  ResumeExperience,
  ResumeHobby,
  ResumeMedia,
  ResumeOffering,
} from "@/types/resume";

import { ASSET_ROOT } from "./locales";

// Norwegian (Bokmål) content, maintained by hand. The English original is en.ts.
// Names, company names, certification titles and technical terms are intentionally kept as they are.
// Post descriptions are the rendered 275-character truncations from the live page.
// The Skydreamer description's unclosed `<i>` tags (a source typo) are closed the way the
// browser normalizes them on the original page, keeping the server HTML valid.

const personal = {
  name: "Cristal Richardson",
  picture: `${ASSET_ROOT}/images/cristal-about.jpeg`,
  illustration: `${ASSET_ROOT}/images/cristal-illustration.png`,
  handle: "leanstance",
  email: "cristal.richardson@leanstance.com",
  phone: "+47 409 55 497",
  location: "Averøy, Møre og Romsdal, Norge",
};

const site = {
  title: "Live-CV - Cristal Richardson",
  description:
    "Hei, jeg er din Performance Partner med over 25 års erfaring fra finans- og telekommunikasjonsbransjen. Les mer i min live-CV!",
  url: "https://leanstance.com",
  lang: "no",
  resumePdf: `${ASSET_ROOT}/docs/cv-norsk.pdf`,
  contactSubject: "Ny melding fra live-CV-en din",
  photoCredits: [
    {
      title: "Yara House in Oslo",
      author: "Esben Tuman",
      license: "CC BY-SA 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Yara_House_in_Oslo.jpg",
    },
  ],
};

const ui: ResumeContent["ui"] = {
  months: ["jan", "feb", "mar", "apr", "mai", "jun", "jul", "aug", "sep", "okt", "nov", "des"],
  currently: "Nå",
  previous: "Forrige",
  next: "Neste",
  copyright: "Opphavsrett",
  nav: {
    about: "Om meg",
    experience: "Erfaring",
    education: "Utdanning",
    offerings: "Tjenester",
    contact: "Kontakt",
    openPdf: "Åpne CV som PDF",
  },
  welcome: {
    hello: "Hei!",
    backgroundAlt: "Bakgrunnssirkel",
    bubbleAlt: "Velkomstboble",
  },
  about: { title: "Om meg", hobbies: "Hobbyer", closePicture: "Lukk bildet" },
  experience: { title: "Erfaring" },
  education: { title: "Utdanning og sertifiseringer", degrees: "Utdanning", certifications: "Sertifiseringer", credentialId: "Sertifikat-ID" },
  offerings: { title: "Tjenester" },
  photoCredit: { photo: "Foto", by: "av" },
  contact: {
    title: "Contact",
    email: "E-post",
    phone: "Telefon",
    city: "By",
    nameLabel: "Navnet ditt:",
    emailLabel: "E-post:",
    messageLabel: "Meldingen din:",
    namePlaceholder: "Ola Nordmann",
    emailPlaceholder: "ola@eksempel.no",
    messagePlaceholder: "Skriv meldingen din her. Jeg svarer deg snart.",
    send: "Send",
    close: "Lukk",
    success: "Takk for at du tok kontakt, jeg svarer deg veldig snart.",
    error: "Beklager, tjenesten er ustabil akkurat nå. Prøv igjen senere, eller kontakt meg på e-post eller sosiale medier.",
    illustrationAlt: "illustrasjon",
    errors: {
      nameRequired: "Navn er påkrevd.",
      namePattern: "Oppgi et gyldig navn.",
      emailRequired: "E-post er påkrevd.",
      emailPattern: "Oppgi en gyldig e-postadresse.",
      messageRequired: "Meldingen er påkrevd.",
    },
  },
};

const aboutDescriptionHtml = "Jeg er din Performance Partner hos Leanstance, med base i Nordmøre. Jeg har over 25 års erfaring fra telekommunikasjons- og finansbransjen, fra roller innen utvikling og systemarbeid til å coache team og ledere gjennom komplekse leveranseprosjekter. Jeg har jobbet med team i USA, Australia, India, Europa og Norden.<br><br>Erfaringen min omfatter å bistå Capgemini i kontraktsforhandlingene med Volvo, å støtte Yaras agile transformasjon i infrastrukturteamet, å jobbe som agile coach for et stort kjernebankprogram i Nordea, og å jobbe som Scrum Master, applikasjonsansvarlig og utvikler hos Hi3G.<br><br>Jeg hjelper team med å komme ut av «autopilot». Jeg bruker Lean- og agile prinsipper, systemtenkning og en direkte, verdibasert tilnærming for å avdekke de virkelige hindringene – og skape rom for bedre samarbeid, raskere læring og løsninger som faktisk lar seg levere.<br><br>Jeg fasiliterer opplæring og workshops, stiller de vanskelige spørsmålene og viser i praksis at det finnes alternative arbeidsmåter. Som coach på GreenTechSee-hackathonet veileder jeg team som skal komme fra en problemstilling til en fungerende prototype på bare 68 timer. Jeg hjelper dem med å definere kjerneproblemet, organisere arbeidet, håndtere friksjon og holde kursen når tiden blir knapp.";

const hobbies: ResumeHobby[] = [
  {
    icon: "hiking",
    title: "Fotturer",
    picture: { src: `${ASSET_ROOT}/images/hobbies/hiking.jpeg`, alt: "Meg på fjellet bak gården vår, et av mine favorittsteder å gå tur" }
  },
  {
    icon: "suitcase-rolling",
    title: "Reiser",
    picture: { src: `${ASSET_ROOT}/images/hobbies/travel.jpeg`, alt: "Meg som svarer mannen min under en weekendtur til en storby" }
  },
  {
    icon: "dog",
    title: "Hunder",
    picture: { src: `${ASSET_ROOT}/images/hobbies/dog.jpeg`, alt: "Vår herlige flatcoat som passende nok heter Happy" }
  },
  {
    icon: "campground",
    title: "Glamping",
    picture: { src: `${ASSET_ROOT}/images/hobbies/camping.jpeg`, alt: "Glampingprosjektet mitt på gården" }
  },
  {
    icon: "utensils",
    title: "Matlaging",
    picture: { src: `${ASSET_ROOT}/images/hobbies/food.jpeg`, alt: "Jeg elsker å lage mat og liker å bake surdeigsbrød" }
  }
];

const aboutMedias: ResumeMedia[] = [
  {
    icon: "linkedin",
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/cristal.richardson/"
  },
  {
    icon: "github",
    title: "GitHub",
    href: "https://github.com/c1cristal"
  }
];

const experiences: ResumeExperience[] = [
  {
    position: 1,
    companyName: "Lower Colorado River Authority",
    website: "https://www.lcra.org/",
    logo: `${ASSET_ROOT}/images/experience/logo/LCRA.svg`,
    startAt: "09-01-1998",
    endAt: "08-31-1999",
    city: "Austin, Texas",
    country: "USA",
    role: "Regnskapsfører",
    descriptionHtml: "<b>LCRA</b> er det offentlige kraftselskapet i Texas, som betjener delstaten gjennom vannforvaltning, energi og samfunnstjenester.<br><br><ul><li>Forvaltet investeringsregnskapet for en portefølje på over 900 millioner dollar, i tråd med GASB 31.</li><li>Bygde et MS Access-system som automatiserte import av bankdata og avstemming av betalinger, og kuttet avstemmingstiden med to tredjedeler.</li><li>Bidro til å utarbeide og presentere resultatregnskapet og balansen for Texas’ lovgivende forsamling hvert kvartal, og hjalp dermed LCRA med å oppfylle kravene til offentlig rapportering.</li></ul>",
    technologies: ["MS Excel", "MS Access", "MS Word", "MS PowerPoint"],
    medias: [
      {
        icon: "facebook",
        title: "Facebook Lower Colorado River Authority",
        href: "https://www.facebook.com/lowercoloradoriverauthority/"
      },
      {
        icon:  "linkedin",
        title: "LinkedIn LCRA",
        href:  "https://www.linkedin.com/company/lcra/"
      },
      {
        icon: "youtube",
        title: "YouTube LCRA",
         href: "https://www.youtube.com/user/LCRAVideo"
      }
    ],
    backgroundUrl: `${ASSET_ROOT}/images/experience/austin-colorado-river.jpg`
  },
  {
    position: 2,
    companyName: "Lower Colorado River Authority",
    website: "https://www.lcra.org/",
    logo: `${ASSET_ROOT}/images/experience/logo/LCRA.svg`,
    startAt: "09-01-1999",
    endAt: "03-31-2000",
    city: "Austin, Texas",
    country: "USA",
    role: "Tariffanalytiker",
    descriptionHtml: "<b>LCRA</b> er det offentlige kraftselskapet i Texas, som betjener delstaten gjennom vannforvaltning, energi og samfunnstjenester.<br><br><ul><li>Omstrukturerte prisingen for fire kommunale forsyningsselskaper og ett elektrisk andelslag, og anbefalte målere som tar betalt for topp- og lavlasttimer slik at avgiftene fulgte forbruket.</li><li>Anbefalte skreddersydde tariffer for husholdnings-, bedrifts- og høylastkunder, fra bilforhandlere til kirker og fabrikker.</li><li>Presenterte funnene for bystyrer og hjalp til med å innføre de nye tariffene, slik at byene fikk en inntektskilde utover politiets bøteinntekter.</li></ul>",
    technologies: ["MS Excel", "MS Access", "MS Word", "MS PowerPoint"],
    medias: [
      {
        icon: "facebook",
        title: "Facebook Lower Colorado River Authority",
        href: "https://www.facebook.com/lowercoloradoriverauthority/"
      },
      {
        icon:  "linkedin",
        title: "LinkedIn LCRA",
        href:  "https://www.linkedin.com/company/lcra/"
      },
      {
        icon: "youtube",
        title: "YouTube LCRA",
         href: "https://www.youtube.com/user/LCRAVideo"
      }
    ],
    backgroundUrl: `${ASSET_ROOT}/images/experience/austin-colorado-river.jpg`
  },
  {
    position: 3,
    companyName: "Allegiance Telecom / XO Communications",
    logo: `${ASSET_ROOT}/images/experience/logo/xo.svg`,
    startAt: "04-01-2000",
    endAt: "02-28-2001",
    city: "Plano, Texas",
    country: "USA",
    role: "Senior økonomisystemanalytiker",
    descriptionHtml: "<b>Allegiance Telecom</b> var en amerikansk lokal teleoperatør (competitive local exchange carrier) som leverte teletjenester til bedrifter; i 2004 ble nettverket og kundene kjøpt opp av <b>XO Communications</b>, en nasjonal leverandør av lokale telekommunikasjons- og bredbåndstjenester rettet mot bedriftskunder.<br><br><ul><li>Automatiserte bokføring av faktureringstransaksjoner i hovedboken med et grensesnitt mellom Singl.eView Convergent Billing (CB), JD Edwards og Oracle Financials, pluss avstemmingsrapporter for regnskapsavdelingen.</li><li>Automatiserte kundereskontro for om lag 100 000 kunder med månedlig fakturering (tidligere ført i Excel), og reduserte teamet fra tre personer til én.</li><li>Bygde en VBA-applikasjon med MS Access som frontend som hentet samlerapporter etter kundestørrelse, marked og inntekt, slik at Markedsføring kunne tilby mer lønnsomme tariffer og Økonomi brukte mindre tid på å samle inn data.</li></ul>",
    technologies: ["Singl.eView CB", "JD Edwards", "Oracle Financials", "VBA", "MS Access"],
    medias: [],
    backgroundUrl: `${ASSET_ROOT}/images/experience/dallas-skyline.jpg`
  },
  {
    position: 4,
    companyName: "Allegiance Telecom / XO Communications",
    logo: `${ASSET_ROOT}/images/experience/logo/xo.svg`,
    startAt: "03-01-2001",
    endAt: "03-31-2002",
    city: "Plano, Texas",
    country: "USA",
    role: "Systemintegrasjonsanalytiker",
    descriptionHtml: "<b>Allegiance Telecom</b>, en teleoperatør for bedrifter som ble kjøpt opp av <b>XO Communications</b> i 2004.<br><br><ul><li>Bygde et sanntidsgrensesnitt for kredittkortbetaling mellom Singl.eView Convergent Billing (CB), VisaNet og flere finansinstitusjoner som automatiserte betalinger og håndterte avviste transaksjoner, og kuttet manuelt arbeid med om lag 75 %.</li><li>Laget en import av anropsdetaljposter (CDR) med leverandørens Data Interface Language, og definerte dataflyten for CDR-er fra flere leverandører.</li><li>Innførte et rammeverk for bruksfeil som reduserte en annen avdelings tid til undersøkelser og rettinger.</li></ul>",
    technologies: ["Singl.eView CB", "VisaNet", "CDR", "DIL"],
    medias: [],
    backgroundUrl: `${ASSET_ROOT}/images/experience/dallas-skyline.jpg`
  },
  {
    position: 5,
    companyName: "Allegiance Telecom / XO Communications",
    logo: `${ASSET_ROOT}/images/experience/logo/xo.svg`,
    startAt: "04-01-2002",
    endAt: "02-28-2005",
    city: "Plano, Texas",
    country: "USA",
    role: "Programmeringsanalytiker",
    descriptionHtml: "<b>Allegiance Telecom</b>, en teleoperatør for bedrifter som ble kjøpt opp av <b>XO Communications</b> i 2004.<br><br><ul><li>Kuttet konfigurasjonstiden for tilleggsprodukter for telefonbruk fra over to uker til under én dag ved å lage et fleksibelt rammeverk.</li><li>Koordinerte automatiseringen av oppsigelse og salg av flere produkter på et felles rammeverk.</li><li>Laget og testet tale- og dataprodukter ut fra Markedsføringens krav, blant annet bruksprisplaner som gjør bryterdata om til fakturerbare CDR-avgifter i tråd med PUC- og forretningsregler.</li><li>Bygde et rapportrammeverk i SQL Server som hjalp ledelsen med å oppfylle kundenes servicenivåavtaler.</li></ul>",
    technologies: ["Singl.eView CB", "Perl", "SQL Server"],
    medias: [],
    backgroundUrl: `${ASSET_ROOT}/images/experience/dallas-skyline.jpg`
  },
  {
    position: 6,
    companyName: "Electronic Data Systems (EDS)",
    logo: `${ASSET_ROOT}/images/experience/logo/eds.svg`,
    startAt: "03-01-2005",
    endAt: "09-30-2005",
    city: "Plano, Texas",
    country: "USA",
    role: "Senior programmeringsanalytiker (konsulent)",
    descriptionHtml: "<b>Electronic Data Systems (EDS)</b> var et amerikansk IT-tjenesteselskap med base i Plano, Texas, kjøpt opp av Hewlett-Packard i 2008.<br><br><ul><li>Ledet den tekniske leveransen av en seks måneder lang implementering av Singl.eView Convergent Billing (CB) for en stor amerikansk bank, fra krav via design og konfigurasjon til testing.</li><li>Automatiserte betalinger med et sanntidsgrensesnitt mellom CB og flere finansinstitusjoner som justerte beløp ved avviste transaksjoner.</li><li>Leverte et nytt rammeverk for bruk og et finansielt rapporteringssystem for en stor finanskonto.</li><li>Verifiserte hvert prosjekt gjennom endringskontroll, testplaner og strengtesting.</li><li>Bidro til å planlegge produktveikartet sammen med produktledelsen, og presenterte arkitektur og retning for interne team, kunder og potensielle kunder.</li></ul>",
    technologies: ["Singl.eView CB", "Testplanlegging", "Endringskontroll"],
    medias: [],
    backgroundUrl: `${ASSET_ROOT}/images/experience/eds-plano-campus.jpg`,
  },
  {
    position: 7,
    companyName: "Intec Billing",
    logo: `${ASSET_ROOT}/images/experience/logo/intec.png`,
    startAt: "10-01-2005",
    endAt: "04-30-2006",
    city: "Brisbane",
    country: "Australia",
    role: "Senior konfigurasjonsspesialist (konsulent)",
    descriptionHtml: "<b>Intec</b> var en britisk leverandør av fakturerings- og forretningsstøtteprogramvare til teleoperatører, mest kjent for plattformen Singl.eView Convergent Billing (CB).<br><br><ul><li>Designet og konfigurerte CB for Carphone Warehouse.</li><li>Koblet Cordiant til CB ved å designe API-løsninger ut fra kravene og lage XML-skjemaene (XSD) for Tibco-adapteren.</li><li>Ledet rapporterings- og grensesnittteamet og veiledet 12 medlemmer av offshore-teamet gjennom enhetstesting av de Perl-baserte rapportene og grensesnittene som kjøres fra CB.</li><li>Gjennomgikk dokumenter, konfigurasjon og enhetstestplaner for å sikre nøyaktighet og fullstendighet.</li></ul>",
    technologies: ["Singl.eView CB", "XML / XSD", "Tibco", "Perl"],
    medias: [],
    backgroundUrl: `${ASSET_ROOT}/images/experience/intec-brisbane-tower.jpg`,
    backgroundPosition: "center 35%",
  },
  {
    position: 8,
    companyName: "Intec Billing",
    logo: `${ASSET_ROOT}/images/experience/logo/intec.png`,
    startAt: "05-01-2006",
    endAt: "09-30-2006",
    city: "Bangalore",
    country: "India",
    role: "Senior CB-konfigurasjonsspesialist / rådgiver (konsulent)",
    descriptionHtml: "<b>Intec</b>, den britiske programvareleverandøren bak Singl.eView Convergent Billing (CB).<br><br><ul><li>Veiledet Bangalore-teamet i å implementere en CB-fase for en nigeriansk telekomkunde.</li><li>Veiledet og rådet det nye utkontraktede teamet, inkludert prosjektledere og programmerere, om ferdighetene og metodene som trengs for å gjennomføre prosjektplanen.</li><li>Var bindeleddet mellom ledelsen i vest og de ansatte i Bangalore, og forbedret offshore-driften på tvers av kulturelle forskjeller og tidssoner.</li><li>Gjorde Bangalore-kontoret selvstendig i CB-prosjektet ved å fokusere på prosessen, og skrev prosedyrer for å sikre at teamet forsto og fulgte dem.</li></ul>",
    technologies: ["Singl.eView CB"],
    medias: [],
    backgroundUrl: `${ASSET_ROOT}/images/experience/bangalore-glass-house.jpg`,
  },
  {
    position: 9,
    companyName: "Tele2",
    website: "https://www.tele2.com/",
    logo: `${ASSET_ROOT}/images/experience/logo/tele2.svg`,
    startAt: "10-01-2006",
    endAt: "04-30-2008",
    city: "Stockholm",
    country: "Sverige",
    role: "Senior konfigurasjonsspesialist (konsulent)",
    descriptionHtml: "<b>Tele2s</b> misjon er å tilby rimelig og enkel tilkobling for alle, når som helst.<br><br><ul><li>Utviklet innenfor rammeverket Singl.eView Convergent Billing (CB) i avdelingen Applications Enhancements, med analyse, design og arkitektur, løsningsforslag, implementering og enhetstesting av EPM-kode.</li><li>Utviklet sammen med teamet et integrert meldingssystem med en JMS-meldingsserver for kommunikasjon mellom flere applikasjoner.</li><li>Dokumenterte utviklingsprosesser på en wiki for å fremme effektiv bruk av tid og dele informasjon på tvers av fagområder.</li></ul>",
    technologies: ["Singl.eView CB", "EPM", "JMS", "Perl", "Wiki"],
    medias: [
      {
        icon: "linkedin",
        title: "LinkedIn Tele2",
        href: "https://www.linkedin.com/company/2831"
      },
      {
        icon: "facebook",
        title: "Facebook Tele2",
        href: "https://www.facebook.com/WeAreTele2/"
      },
      {
        icon: "youtube",
        title: "YouTube Tele2",
        href: "https://www.youtube.com/user/Tele2AB"
      },
      {
        icon: "instagram",
        title: "Instagram Tele2",
        href: "https://www.instagram.com/wearetele2/"
      }
    ],
    backgroundUrl: `${ASSET_ROOT}/images/experience/tele2-headquarters.jpg`,
  },
  {
    position: 10,
    companyName: "Hutchison 3G Australia",
    logo: `${ASSET_ROOT}/images/experience/logo/three.svg`,
    startAt: "05-01-2008",
    endAt: "11-30-2008",
    city: "Sydney",
    country: "Australia",
    role: "Løsningsdesigner",
    descriptionHtml: "<b>Hutchison 3G Australia</b> lanserte Australias første 3G-mobilnett og -tjenester i 2003 under merkevaren 3.<br><br><ul><li>Analyserte infrastrukturen sammen med teamet og ga råd om hvordan flere forretningssystemer kunne integreres, blant annet Singl.eView Convergent Billing (CB), PeopleSoft, Tallyman, trykkeriet og mediering.</li><li>Leverte ende-til-ende-løsninger for viktige Hutch-prosjekter, blant annet klargjøring og fakturering av mobilforsikring og fleksible rabatter på tariffer.</li><li>Hjalp Billing Operations med løsninger rundt eksisterende omveier, blant annet rotårsaksanalyse av symptomer og råd om estimert kostnad og tidsramme for automatiserte faktureringsalternativer.</li><li>Leverte overordnede analyser av prosjekter i pipeline: berørte systemer, estimert implementeringskostnad per system og estimert tid til ferdigstillelse.</li></ul>",
    technologies: ["Singl.eView CB", "PeopleSoft", "Tallyman", "Mediation"],
    medias: [],
    backgroundUrl: `${ASSET_ROOT}/images/experience/hutchison-bridge.jpg`,
  },
  {
    position: 11,
    companyName: "Optus",
    website: "https://www.optus.com.au/",
    logo: `${ASSET_ROOT}/images/experience/logo/optus.svg`,
    startAt: "01-01-2009",
    endAt: "09-30-2009",
    city: "Brisbane",
    country: "Australia",
    role: "Seniorkonsulent",
    descriptionHtml: "<b>Optus</b>, et datterselskap av Singtel, er Australias nest største telekommunikasjonsselskap.<br><br><ul><li>Arbeidet som forretningsanalytiker for Brisbane-teamet og laget dokumenter for systemkravspesifikasjon (SRS) ut fra dokumenter for forretningskravspesifikasjon (BRS), etter å ha kartlagt egenskapene til Singl.eView Convergent Billing (CB) og til Optus’ systemer oppstrøms og nedstrøms.</li><li>Brukte CB til å levere konseptbevis (løsningsdesign) for foreslåtte funksjonelle endringer.</li><li>Laget funksjonelle designdokumenter slik at juniorutviklere kunne jobbe mer effektivt.</li><li>Ga teknisk teamleder-bistand til teamene i Brisbane og Bangalore i prosjekter.</li><li>Leverte konsulenttjenester, blant annet detaljerte tids- og kostnadsestimater for prosjekter.</li><li>Var bindeleddet mellom Optus’ forretning og Intecs tekniske ansatte for å styre forventninger gjennom hele prosjektets livssyklus.</li></ul>",
    technologies: ["Singl.eView CB", "SRS / BRS", "Funksjonell design"],
    medias: [
      {
        icon: "linkedin",
        title: "LinkedIn Optus",
        href: "https://www.linkedin.com/company/optus"
      },
      {
        icon: "facebook",
        title: "Facebook Optus",
        href: "https://www.facebook.com/optus"
      },
      {
        icon: "youtube",
        title: "YouTube Optus",
        href: "https://www.youtube.com/user/yesoptus"
      },
      {
        icon: "instagram",
        title: "Instagram Optus",
        href: "https://www.instagram.com/optus/"
      }
    ],
    backgroundUrl: `${ASSET_ROOT}/images/experience/optus-campus.jpg`,
  },
  {
    position: 12,
    companyName: "Vodafone Italia",
    logo: `${ASSET_ROOT}/images/experience/logo/vodafone.svg`,
    startAt: "10-01-2009",
    endAt: "06-30-2010",
    city: "Skopje",
    country: "Nord-Makedonia",
    role: "Mentor / seniorkonsulent",
    descriptionHtml: "<b>Vodafone Italia</b> var den italienske mobiloperatøren i Vodafone-konsernet, med hovedkontor i Milano; den startet som Omnitel i 1994 og ble kjøpt opp av Swisscom i 2024.<br><br><ul><li>Ga veiledning om beste praksis gjennom hele utviklingslivssyklusen til et uerfarent utviklingsteam.</li><li>Leverte løsningsdesign, inkludert dokumentasjon, for å støtte teamet under utviklingen.</li><li>Bidro til å planlegge leveranser ved å gi estimater og gjennomførbarhetsvurderinger for ønskede applikasjonsendringer.</li><li>Var bindeleddet mellom forretningen i Milano og utviklingsteamet i Skopje, og gjorde abstrakte forretningsønsker om til konkrete applikasjonskonsepter og dokumenter for funksjonell kravspesifikasjon (FRS).</li><li>Opplærte juniorer i beste praksis for utvikling i Singl.eView Convergent Billing (CB), utviklingslivssyklusen og feilsøking i kode under oppfølging av feilmeldinger.</li></ul>",
    technologies: ["Singl.eView CB", "Løsningsdesign", "FRS-dokumenter"],
    medias: [
      {
        icon: "linkedin",
        title: "LinkedIn Vodafone Italia",
        href: "https://www.linkedin.com/company/vodafone-italiaspa"
      },
      {
        icon: "facebook",
        title: "Facebook Vodafone Italia",
        href: "https://www.facebook.com/vodafoneit"
      },
      {
        icon: "youtube",
        title: "YouTube Vodafone Italia",
        href: "https://www.youtube.com/user/vodafoneit"
      },
      {
        icon: "instagram",
        title: "Instagram Vodafone Italia",
        href: "https://www.instagram.com/vodafoneit/"
      }
    ],
    backgroundUrl: `${ASSET_ROOT}/images/experience/vodafone-village-milan.jpg`,
  },
  {
    position: 13,
    companyName: "Hi3G (Tre)",
    website: "https://www.tre.se/",
    logo: `${ASSET_ROOT}/images/experience/logo/three.svg`,
    startAt: "07-01-2010",
    endAt: "09-30-2011",
    city: "Stockholm",
    country: "Sverige",
    role: "Senior utviklerkonsulent",
    descriptionHtml: "<b>Tre</b> (Hi3G Access) er en av Sveriges største mobilnettoperatører og tilbyr mobiltelefoni og bredbånd til privat- og bedriftskunder.<br><br><ul><li>Oppgraderte Singl.eView Convergent Billing (CB) fra v5.01 til v6.01.</li><li>Leverte løsningsdesign til offshore-teamet basert på funksjonelle krav.</li><li>Innførte prosessforbedringer i utviklingsteamet for å bedre kodekvaliteten.</li></ul>",
    technologies: ["Singl.eView CB"],
    medias: [
      {
        icon: "linkedin",
        title: "LinkedIn Tre",
        href: "https://www.linkedin.com/company/3sverige/"
      },
      {
        icon: "facebook",
        title: "Facebook Tre",
        href: "https://www.facebook.com/3Sverige"
      },
      {
        icon: "youtube",
        title: "YouTube Tre",
        href: "https://www.youtube.com/@3Sverige"
      },
      {
        icon: "instagram",
        title: "Instagram Tre",
        href: "https://www.instagram.com/3sverige/"
      }
    ],
    backgroundUrl: `${ASSET_ROOT}/images/experience/tre-facade-logo.jpg`,
  },
  {
    position: 14,
    companyName: "Hi3G (Tre)",
    website: "https://www.tre.se/",
    logo: `${ASSET_ROOT}/images/experience/logo/three.svg`,
    startAt: "09-01-2011",
    endAt: "12-31-2012",
    city: "Stockholm",
    country: "Sverige",
    role: "CB-applikasjonsansvarlig (konsulent)",
    descriptionHtml: "<b>Tre</b> (Hi3G Access), en av Sveriges største mobilnettoperatører.<br><br><ul><li>Bidro til å starte prosjektet for stabilitet i fakturering (Billing), blant annet vurdering av rammeverk og opprydding i koden.</li><li>Sto til ansvar overfor eksterne grupper for leveransene i Billing.</li><li>Laget en strømlinjeformet releaseprosess for å få kontroll over hva som ble satt i produksjon, blant annet ved å innføre kodegjennomgang og automatisert enhetstesting.</li><li>Koordinerte utviklings- og releaseleveranser mellom eksterne utviklingsgrupper og Billing.</li><li>Tok initiativ til endringer i trunk- og branch-miljøene for å gi stabilitet til testløpene.</li><li>Opprettet et forum for Singl.eView Convergent Billing (CB) for å utdanne, informere og brainstorme om Billing-saker sammen med det tverrfaglige teamet for Billing (Cross Functional Team, CFT) og andre eksterne CFT-er.</li></ul>",
    technologies: ["Singl.eView CB", "Kodegjennomgang", "Release-styring"],
    medias: [
      {
        icon: "linkedin",
        title: "LinkedIn Tre",
        href: "https://www.linkedin.com/company/3sverige/"
      },
      {
        icon: "facebook",
        title: "Facebook Tre",
        href: "https://www.facebook.com/3Sverige"
      },
      {
        icon: "youtube",
        title: "YouTube Tre",
        href: "https://www.youtube.com/@3Sverige"
      },
      {
        icon: "instagram",
        title: "Instagram Tre",
        href: "https://www.instagram.com/3sverige/"
      }
    ],
    backgroundUrl: `${ASSET_ROOT}/images/experience/tre-facade-logo.jpg`,
  },
  {
    position: 15,
    companyName: "Hi3G (Tre)",
    website: "https://www.tre.se/",
    logo: `${ASSET_ROOT}/images/experience/logo/three.svg`,
    startAt: "12-01-2012",
    endAt: "06-30-2014",
    city: "Stockholm",
    country: "Sverige",
    role: "Agile endringsagent / CB-applikasjonsansvarlig (konsulent)",
    descriptionHtml: "<b>Tre</b> (Hi3G Access), en av Sveriges største mobilnettoperatører.<br><br><ul><li>Innførte nye arbeidsmåter og støttet faktureringsavdelingen i å bli bedre ved hjelp av agile og Lean-teknikker og -prosesser.</li><li>Begynte å innføre en agil prosess, etter føringer fra forretningen, for å korte ned tiden til marked (TTM).</li><li>Gikk foran med et godt eksempel under overgangen fra fossefall til en agil forretningspraksis.</li><li>Hjalp nylig opprettede tverrfaglige team (CFT-er) med å fungere som selvstendige, sammenhengende enheter.</li><li>Bidro til å innføre Kanban for utviklingsgruppen i Billing.</li><li>Tok initiativ til en daglig stand-up for å løse saker utenfor de agile funksjonsgruppene.</li><li>Laget et verktøy for kontinuerlig integrasjon.</li><li>Holdt release-planene og håndterte samtidig forretningens forventninger til nye krav.</li><li>Brukte en wiki til å dokumentere endrede prosesser og oppmuntret til å bruke den for raskt å dokumentere krav og releaseartefakter.</li></ul>",
    technologies: ["Agile", "Lean", "Kanban", "Kontinuerlig integrasjon", "Wiki"],
    medias: [
      {
        icon: "linkedin",
        title: "LinkedIn Tre",
        href: "https://www.linkedin.com/company/3sverige/"
      },
      {
        icon: "facebook",
        title: "Facebook Tre",
        href: "https://www.facebook.com/3Sverige"
      },
      {
        icon: "youtube",
        title: "YouTube Tre",
        href: "https://www.youtube.com/@3Sverige"
      },
      {
        icon: "instagram",
        title: "Instagram Tre",
        href: "https://www.instagram.com/3sverige/"
      }
    ],
    backgroundUrl: `${ASSET_ROOT}/images/experience/tre-facade-logo.jpg`,
  },
  {
    position: 16,
    companyName: "Hi3G (Tre)",
    website: "https://www.tre.se/",
    logo: `${ASSET_ROOT}/images/experience/logo/three.svg`,
    startAt: "06-01-2014",
    endAt: "2015",
    city: "Stockholm",
    country: "Sverige",
    role: "Agile coach / senior utviklerkonsulent",
    descriptionHtml: "<b>Tre</b> (Hi3G Access), en av Sveriges største mobilnettoperatører.<br><br><ul><li>Hjalp teamet med å gå fra Kanban til Scrum.</li><li>Fasiliterte agile artefakter for teamet, blant annet backlog grooming, sprintplanlegging og visualisering av arbeid.</li><li>Oppmuntret til parprogrammering og flere «tenk utenfor boksen»-arbeidsmåter.</li><li>Bidro til teamets motivasjon ved å gi folk myndighet til å ta egne avgjørelser, og tok selv på meg noen av de mindre «morsomme» oppgavene slik at teamet kunne konsentrere seg om ny og spennende utvikling.</li></ul>",
    technologies: ["Agile", "Scrum", "Kanban", "Parprogrammering"],
    medias: [
      {
        icon: "linkedin",
        title: "LinkedIn Tre",
        href: "https://www.linkedin.com/company/3sverige/"
      },
      {
        icon: "facebook",
        title: "Facebook Tre",
        href: "https://www.facebook.com/3Sverige"
      },
      {
        icon: "youtube",
        title: "YouTube Tre",
        href: "https://www.youtube.com/@3Sverige"
      },
      {
        icon: "instagram",
        title: "Instagram Tre",
        href: "https://www.instagram.com/3sverige/"
      }
    ],
    backgroundUrl: `${ASSET_ROOT}/images/experience/tre-facade-logo.jpg`,
  },
  {
    position: 17,
    companyName: "Nordea",
    website: "https://www.nordea.com/",
    logo: `${ASSET_ROOT}/images/experience/logo/nordea.svg`,
    startAt: "2015",
    endAt: "2019",
    city: ["Stockholm", "København", "Helsinki", "Oslo", "Gdańsk"],
    country: ["Sverige", "Danmark", "Finland", "Norge", "Polen"],
    role: "Agile coach",
    descriptionHtml: "<b>Nordea</b> er en ledende nordisk bank; Core Banking Programme, en flerårig utskifting av bankens kjernesystemer i hele Norden, var blant de største prosjektene i europeisk bankvirksomhet.<br><br><ul><li>Coachet flere Scrum-, Kanban- og ikke-agile team i Core Banking Program (CBP), Europas største endringsprosjekt.</li><li>Fasiliterte opplæring i arbeidsmåter, tankesett og verdier.</li><li>Fremmet endring ved å påvirke ledergruppen og gå foran med et godt eksempel.</li><li>Hjalp ledelsen med å utforske egne verdier og bankens verdier for å gjøre endring mulig.</li><li>Bidro på ledernivå gjennom opplæring og bedre kommunikasjon.</li></ul>",
    technologies: ["Scrum", "Kanban", "Agile coaching", "Core Banking Program"],
    medias: [
      {
        icon: "linkedin",
        title: "LinkedIn Nordea",
        href: "https://www.linkedin.com/company/nordea"
      },
      {
        icon: "facebook",
        title: "Facebook Nordea",
        href: "https://www.facebook.com/Nordea"
      },
      {
        icon: "youtube",
        title: "YouTube Nordea",
        href: "https://www.youtube.com/user/Nordea"
      }
    ],
    backgroundUrl: `${ASSET_ROOT}/images/experience/nordea-headquarters.jpg`,
  },
  {
    position: 18,
    companyName: "Jobbsjansen",
    startAt: "2019",
    endAt: "2021",
    city: "Kristiansund",
    country: "Norge",
    role: "Deltaker i Jobbsjansen",
    descriptionHtml: "<b>Jobbsjansen</b> er et norsk program, finansiert av IMDi (Integrerings- og mangfoldsdirektoratet), som hjelper nyankomne inn i arbeidslivet.<br><br><ul><li><b>Kristiansund voksenopplæring:</b> Gikk på norskkurs og øvde på å snakke språket med nordmenn.</li><li><b>Høgskolen i Molde i Kristiansund:</b> Fasiliterte interaktive undervisningsøkter der studentene opplevde Lean-prinsipper gjennom praktisk utforsking og dialog.</li></ul>",
    technologies: ["Lean", "NorskKurs"],
    medias: [],
    backgroundUrl: `${ASSET_ROOT}/images/experience/kristiansund-voksenopplaering.jpg`,
  },
  {
    position: 19,
    companyName: "Capgemini / Yara",
    logo: `${ASSET_ROOT}/images/experience/logo/capgemini.svg`,
    startAt: "2021",
    endAt: "2022",
    city: "Digitalt fra Averøy",
    country: "Norge",
    role: "Senior agile coach",
    descriptionHtml: "<b>Capgemini</b> er en global leder innen rådgivning, teknologi og ingeniørtjenester; dette oppdraget var for <b>Yara</b>, hvis misjon er å mette verden på en ansvarlig måte og beskytte planeten.<br><br><ul><li>Brukte Lean/agile-konsepter for å oppmuntre en avdeling til å sette i gang en endringsprosess for å tilpasse IT-systemer og rutiner.</li><li>Motiverte til å tette gapet mellom leverandør og kunde gjennom et felles veikart og mer samarbeid.</li><li>Jobbet med de delene av organisasjonen som ville utforske flere agile og Lean arbeidsmåter.</li></ul>",
    technologies: ["Lean", "Agile"],
    medias: [
      {
        icon: "linkedin",
        title: "LinkedIn Capgemini",
        href: "https://www.linkedin.com/company/capgemini"
      },
      {
        icon: "facebook",
        title: "Facebook Capgemini",
        href: "https://www.facebook.com/Capgemini/"
      },
      {
        icon: "youtube",
        title: "YouTube Capgemini",
        href: "https://www.youtube.com/user/capgeminimedia"
      },
      {
        icon: "instagram",
        title: "Instagram Capgemini",
        href: "https://www.instagram.com/capgemini/"
      }
    ],
    backgroundUrl: `${ASSET_ROOT}/images/experience/yara-house-oslo.jpg`,
  },
  {
    position: 20,
    companyName: "Capgemini / Volvo",
    logo: `${ASSET_ROOT}/images/experience/logo/capgemini.svg`,
    startAt: "2021",
    endAt: "2022",
    city: "Digitalt fra Averøy",
    country: "Norge",
    role: "Senior agile coach",
    descriptionHtml: "<b>Capgemini</b> er en global leder innen rådgivning, teknologi og ingeniørtjenester; dette oppdraget var for <b>Volvo Group</b>, en svensk produsent av lastebiler, busser og anleggsmaskiner.<br><br><ul><li>Samlet agile coacher og Release Train Engineers (RTE-er) fra flere leverandører ved å etablere et praksisfellesskap (community of practice, CoP).</li><li>Bidro til å starte et nytt prosjekt ved å gi veiledning og organisere planleggingsmøter.</li><li>Utviklet og fasiliterte en opplæringsøkt for å få alle leverandørene med på agile arbeidsmåter.</li><li>Bistod i kontraktsforhandlinger for å gå bort fra prosjektbaserte leveranser.</li><li>Jobbet med ledelsen for å bygge forståelse for «Hva er agilt?».</li></ul>",
    technologies: ["Agile", "Praksisfellesskap", "Release Train Engineer"],
    medias: [
      {
        icon: "linkedin",
        title: "LinkedIn Capgemini",
        href: "https://www.linkedin.com/company/capgemini"
      },
      {
        icon: "facebook",
        title: "Facebook Capgemini",
        href: "https://www.facebook.com/Capgemini/"
      },
      {
        icon: "youtube",
        title: "YouTube Capgemini",
        href: "https://www.youtube.com/user/capgeminimedia"
      },
      {
        icon: "instagram",
        title: "Instagram Capgemini",
        href: "https://www.instagram.com/capgemini/"
      }
    ],
    backgroundUrl: `${ASSET_ROOT}/images/experience/volvo-museum-gothenburg.jpg`,
  },
  {
    position: 21,
    companyName: "Tørristua AS (Leanstance)",
    startAt: "2021",
    endAt: null,
    city: "",
    country: "Norge",
    role: "Performance Partner",
    descriptionHtml: "<b>Leanstance</b> (Tørristua AS) er et norsk rådgivningsselskap som hjelper organisasjoner med å ta i bruk Lean og agile arbeidsmåter.<br><br><ul><li>Innfører Lean/agile metoder i organisasjoner.</li><li>Oppmuntrer til endringer i tankesett og kultur.</li><li>Hjelper organisasjoner med å eksperimentere med endringer i team, strukturer, ledelsesstiler og arbeidsmåter.</li></ul>",
    technologies: ["Lean", "Agile"],
    medias: [],
  },
  {
    position: 22,
    companyName: "Bjørnådal Arkitektstudio",
    startAt: "2023",
    endAt: "2023",
    city: "Kristiansund",
    country: "Norge",
    role: "Agile coach",
    descriptionHtml: "<b>Bjørnådal Arkitektstudio</b> er et arkitektkontor grunnlagt i 2007, kjent for en pragmatisk, men poetisk tilnærming til arkitektur.<br><br><ul><li>Fasiliterte arbeidet med selskapets arbeidsmåter og forretningsmål.</li><li>Jobbet for å bygge en tilbakemeldingsdrevet organisasjon ved å utforske hvordan man gir og mottar tilbakemeldinger, og innførte samtidig systemer for innspill og tilbakemeldinger.</li></ul>",
    technologies: ["Agile", "Tilbakemeldingskultur"],
    medias: [],
  },
  {
    position: 23,
    companyName: "Høgskolen i Molde",
    website: "https://www.himolde.no/",
    logo: `${ASSET_ROOT}/images/experience/logo/molde.svg`,
    startAt: "2026",
    endAt: "2026",
    city: "Kristiansund",
    country: "Norge",
    role: "Praksisplass (norskopplæring)",
    descriptionHtml: "<b>Høgskolen i Molde i Kristiansund</b> er et norsk spesialisert universitet, grunnlagt i 1994, med særlig fokus på logistikk; dette praksisoppholdet var ved campus i Kristiansund.<br><br><ul><li>Oppdaterte PowerPoint for kurset i Lean-produksjon.</li><li>Fasiliterte Lean i praksis med LEGO.</li><li>Holdt et foredrag om mine erfaringer som agile coach.</li><li>Deltok i veiledning av studenter.</li><li>Var en del av arbeidsmiljøet.</li></ul>",
    technologies: ["Lean", "Lean-produksjon", "LEGO"],
    medias: [
      {
        icon: "facebook",
        title: "Facebook Høgskolen i Molde",
        href: "https://www.facebook.com/himolde/"
      },
      {
        icon: "youtube",
        title: "YouTube Høgskolen i Molde",
        href: "https://www.youtube.com/user/himolde"
      },
      {
        icon: "instagram",
        title: "Instagram Høgskolen i Molde",
        href: "https://www.instagram.com/himolde/"
      }
    ],
    backgroundUrl: `${ASSET_ROOT}/images/experience/molde-campus-kristiansund.jpg`,
  }
];

const education: ResumeEducation[] = [
  {
    title: "M.B.A., MIS",
    institution: "The University of Texas at Dallas",
    year: "2003",
  },
  {
    title: "B.B.A., Management",
    institution: "The University of Texas at San Antonio",
    year: "1998",
  },
  {
    title: "B.B.A., Accounting",
    institution: "The University of Texas at San Antonio",
    year: "1998",
  },
];

const certifications: ResumeCertification[] = [
  {
    title: "Deep Time Walk Facilitator",
    issuer: "Deep Time Walk C.I.C",
    year: "2026",
  },
  {
    title: "Facilitator of Transformation",
    issuer: "Corp Evolution",
    year: "2018",
  },
  {
    title: "The Responsibility Process",
    issuer: "The Responsibility Company",
    year: "2018",
  },
  {
    title: "Certified Scrum Professional®",
    issuer: "Scrum Alliance®",
    year: "2018",
  },
  {
    title: "SAFe Program Consultant (SPC4)",
    issuer: "SAFe",
    year: "2017",
  },
  {
    title: "Certified Wallbreakers Facilitator",
    issuer: "Workz",
    year: "2017",
  },
  {
    title: "Certified LeSS Practitioner",
    issuer: "The LeSS Company B.V.",
    year: "2016",
  },
  {
    title: "Certified Business Facilitator",
    issuer: "Facilitators International",
    year: "2016",
  },
  {
    title: "Certified ScrumMaster®",
    issuer: "Scrum Alliance®",
    year: "2014",
  },
];

const offerings: ResumeOffering[] = [
  {
    title: "Den upartiske fasilitatoren",
    descriptionHtml: "<p>En nøytral stemme utenfra for samtaler som er vanskelige å ta innenfra.</p><p>Jeg fasiliterer økter der et team løser et problem, tar en beslutning eller kommer opp med nye ideer. Fordi jeg ikke har noen interesse i utfallet, kan alle snakke fritt, og gruppen holder fokus på målet.</p><ul><li>Problemløsning og gjennombruddsøkter</li><li>Idédugnad og idéutvikling</li><li>Beslutninger og samkjøring mellom team eller avdelinger</li></ul>",
    pictures: [],
  },
  {
    title: "Isbryter for arrangementer",
    hidden: true,
    descriptionHtml: "<p>Fremmede blir et team i løpet av minutter.</p><p>Jeg åpner hackathons, konferanser og åpne treff med lekne isbrytere med høy energi som får folk til å snakke, le og bli klare for å samarbeide.</p><ul><li>Oppstart av hackathons der deltakerne møtes og danner team</li><li>Åpning av konferanser og treff</li><li>Energiøkter som får rommet i gang igjen etter en pause</li></ul>",
    pictures: [],
  },
  {
    title: "Performance-sjekk",
    descriptionHtml: "<p>Finn ut hva som egentlig bremser teamet ditt.</p><p>Jeg snakker med teamet og lederne, ser på hvordan arbeidet flyter, og gir deg et tydelig bilde av hva som hjelper og hva som står i veien, sammen med de første forbedringene å prøve.</p><ul><li>Samtaler med teamet og lederne</li><li>En tydelig oppsummering av styrker og hindringer</li><li>Praktiske første steg, i prioritert rekkefølge</li></ul>",
    pictures: [],
  },
  {
    title: "Teamets Performance-sprint",
    descriptionHtml: "<p>Fokusert, praktisk samarbeid med ett team om ett prestasjonsmål.</p><p>Sammen med teamet over en avgrenset periode hjelper jeg dere med å bli enige om målet, prøve nye arbeidsmåter og bygge vaner som fortsetter å forbedre dere etter at jeg er borte.</p><ul><li>Et tydelig mål avtalt på forhånd</li><li>Praktisk coaching i teamets faktiske arbeid</li><li>Jevnlig refleksjon over hva som fungerer</li><li>Vaner og verktøy teamet beholder</li></ul>",
    pictures: [],
  },
  {
    title: "Teamretreat med Deep Time Walk",
    descriptionHtml: "<p>Ta et steg bort fra hverdagens press og se det store bildet.</p><p>En guidet Deep Time Walk gir et team en felles, minneverdig opplevelse av tid og endring. Etterpå fasiliterer jeg en samtale om hva det betyr for teamets eget arbeid og retning.</p><ul><li>En guidet tur i naturen</li><li>Fasilitert refleksjon etterpå</li><li>Et felles perspektiv for et team som står overfor endring</li></ul>",
    pictures: [],
  },
];

const typingPhrases = ["Jeg er Cristal, din Performance Partner.", "Jeg coacher team til å skape mer verdi.", "Ta en titt på reisen min nedenfor."];

export const no: ResumeContent = {
  locale: "no",
  personal,
  site,
  ui,
  aboutDescriptionHtml,
  hobbies,
  aboutMedias,
  experiences,
  education,
  certifications,
  offerings,
  typingPhrases,
};
