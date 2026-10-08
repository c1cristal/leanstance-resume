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

// Single source of truth for resume content. Components read from here.
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
  location: "Averøy, Møre og Romsdal, Norway",
};

const site = {
  title: "Live Resume - Cristal Richardson",
  description:
    "Greetings, I'm your Performance Partner with 25+ years of experience in the finance and telecommunications sectors. Find out more in my live-resume!",
  url: "https://leanstance.com",
  lang: "en",
  resumePdf: `${ASSET_ROOT}/docs/cv-english.pdf`,
  contactSubject: "New message from your live resume",
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
  months: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  currently: "Currently",
  previous: "Previous",
  next: "Next",
  copyright: "Copyright",
  nav: {
    about: "About me",
    experience: "Experiences",
    education: "Education",
    offerings: "Offerings",
    contact: "Contact",
    openPdf: "Open Resume as PDF",
  },
  welcome: {
    hello: "Greetings!",
    backgroundAlt: "Background circle",
    bubbleAlt: "Welcome Speech Bobble",
  },
  about: { title: "About me", hobbies: "Hobbies", closePicture: "Close picture", learnMore: "Learn more" },
  experience: { title: "Experiences" },
  education: { title: "Education & Certifications", degrees: "Education", certifications: "Certifications", credentialId: "Credential ID" },
  offerings: { title: "Offerings" },
  photoCredit: { photo: "Photo", by: "by" },
  contact: {
    title: "Contact",
    email: "Email",
    phone: "Phone",
    city: "City",
    nameLabel: "Your name:",
    emailLabel: "Email:",
    messageLabel: "Your Message:",
    namePlaceholder: "Alex Smith",
    emailPlaceholder: "alex@example.com",
    messagePlaceholder: "Write your message here. I'll get back to you soon.",
    send: "Send",
    close: "Close",
    success: "Thank you for contacting me, I'll reply to you very soon.",
    error: "Sorry, there is an instability, try again later, or contact me via email or social media.",
    illustrationAlt: "illustration",
    errors: {
      nameRequired: "The name is required.",
      namePattern: "Please, provide a valid name.",
      emailRequired: "The email is required.",
      emailPattern: "Please, provide a valid email address.",
      messageRequired: "The message is required.",
    },
  },
};

const aboutDescriptionHtml = "I’m your Performance Partner at Leanstance, based in the Nordmøre region. I bring over 25 years of experience from the telecommunications and finance sectors, spanning roles in development and systems work to coaching teams and leaders through complex delivery projects. I’ve worked with teams across the US, Australia, India, Europe, and the Nordic region.<br><br>My experience includes assisting Capgemini with Volvo contract negotiations, supporting Yara’s agile transformation within its infrastructure team, serving as an {{agile-coach}} for a major core banking program at Nordea, and working as a {{scrum-master}}, application manager, and developer at Hi3G.<br><br>I help teams break out of “autopilot” mode. I use {{lean}} and {{agile}} principles, {{systems-thinking}}, and a direct, value-based approach to uncover the real obstacles—creating space for better collaboration, faster learning, and solutions that are genuinely deliverable.<br><br>I facilitate training and workshops, ask the tough questions, and demonstrate in practice that there are alternative ways of working. As a coach at the GreenTechSee hackathon, I mentor teams tasked with moving from a problem statement to a functional prototype in just 68 hours. I help them define the core problem, organize their work, navigate friction, and stay on track when time is running short.";

const glossary: ResumeContent["glossary"] = {
  "agile-coach": {
    label: "Agile Coach",
    definition: "An agile coach helps individuals, teams, and organizations embrace a culture shift based on proven human-centric agile principles, practices, and values.",
    href: "https://www.scrumalliance.org/agile-coaching",
  },
  "scrum-master": {
    label: "Scrum Master",
    definition: "Guide teams and organizations to success with scrum. You can unlock new possibilities in any career with scrum master skills.",
    href: "https://www.scrumalliance.org/what-is-a-scrum-master",
  },
  lean: {
    label: "Lean",
    definition: "Lean is a set of management practices that delivers value to customers quickly by cutting delays and waste, improving quality and lowering cost. It rests on two pillars: respect for people and continuous improvement.",
    href: "https://www.lean.org/explore-lean/what-is-lean/",
  },
  agile: {
    label: "Agile",
    definition: "Agile is a flexible, iterative approach to project management that values people, customer feedback and working solutions over rigid processes. Teams tailor practices to their needs, blending frameworks like Scrum and Kanban, and regularly review what works to keep improving.",
    href: "https://www.atlassian.com/agile",
  },
  "systems-thinking": {
    label: "systems thinking",
    definition: "Systems thinking is a way of understanding how the connected parts of a business and its environment interact to produce outcomes. Instead of treating problems in isolation, it looks at the relationships and structures that link the organization into a whole.",
    href: "https://executive.mit.edu/blog/what-is-systems-thinking-in-business.html",
  },
  "gasb-31": {
    label: "GASB 31",
    definition: "Governmental Accounting Standards Board Statement No. 31: Accounting and Financial Reporting for Certain Investments and for External Investment Pools",
    href: "https://gasb.org/page/ShowPdf?path=GASBS-31.pdf&title=GASB%20STATEMENT%20NO.%2031,%20ACCOUNTING%20AND%20FINANCIAL%20REPORTING%20FOR%20CERTAIN%20INVESTMENTS%20AND%20FOR%20EXTERNAL%20INVESTMENT%20POOLS",
  },
};

const hobbies: ResumeHobby[] = [
  {
    icon: "hiking",
    title: "Hiking",
    picture: { src: `${ASSET_ROOT}/images/hobbies/hiking.jpeg`, alt: "On the mountain behind our farm, snowshoes are my friend in winter" }
  },
  {
    icon: "suitcase-rolling",
    title: "Travel",
    picture: { src: `${ASSET_ROOT}/images/hobbies/travel.jpeg`, alt: "Responding to my husband during a big city weekend trip" }
  },
  {
    icon: "dog",
    title: "Dogs",
    picture: { src: `${ASSET_ROOT}/images/hobbies/dog.jpeg`, alt: "Our lovely flat coat, appropriately named Happy" }
  },
  {
    icon: "campground",
    title: "Glamping",
    picture: { src: `${ASSET_ROOT}/images/hobbies/camping.jpeg`, alt: "My glamping project on the farm" }
  },
  {
    icon: "utensils",
    title: "Cooking",
    picture: { src: `${ASSET_ROOT}/images/hobbies/food.jpeg`, alt: "I love to cook and enjoy making sourdough bread" }
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
    country: "United States",
    role: "Accountant",
    descriptionHtml: "<b>LCRA</b> is the Texas public utility serving the state through water stewardship, energy and community services.<br><br><ul><li>Managed investment accounting for a $900M+ portfolio, in line with {{gasb-31}}.</li><li>Built an MS Access system that automated bank-data import and payment reconciliation, cutting reconciliation time by two-thirds.</li><li>Helped prepare and present the income statement and balance sheet to the Texas Legislature every quarter, helping LCRA comply with its governmental reporting requirements.</li></ul>",
    technologies: ["MS Excel", 
      "MS Access", 
      "MS Word", 
      "MS PowerPoint"],
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
    country: "United States",
    role: "Rating Analyst",
    descriptionHtml: "<b>LCRA</b> is the Texas public utility serving the state through water stewardship, energy and community services.<br><br><ul><li>Restructured pricing for four city utilities and one electric cooperative, recommending electronic meters that charge for peak and off-peak hours so fees tracked usage.</li><li>Recommended tailored rate plans for residential, commercial and high-peak customers, from car dealerships to churches and factories.</li><li>Presented findings to city councils and helped implement the new rates, giving cities a revenue source beyond police ticket fines.</li></ul>",
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
    country: "United States",
    role: "Senior Financial Systems Analyst",
    descriptionHtml: "<b>Allegiance Telecom</b> was a US competitive local exchange carrier providing telecom services to businesses; in 2004 its network and customers were acquired by <b>XO Communications</b>, a national provider of local telecommunications and broadband services focused on business customers.<br><br><ul><li>Automated general-ledger posting of billing transactions with an interface between Singl.eView Convergent Billing (CB), JD Edwards and Oracle Financials, plus reconciliation reports for Accounting.</li><li>Automated accounts receivable for about 100,000 monthly-billed customers (previously tracked in Excel), reducing the team from three people to one.</li><li>Built a VBA application with an MS Access front end that pulled consolidated reports by customer size, market and revenue, helping Marketing offer more profitable rate plans and Finance spend less time gathering data.</li></ul>",
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
    country: "United States",
    role: "Systems Integration Analyst",
    descriptionHtml: "<b>Allegiance Telecom</b>, a business telecom carrier acquired by <b>XO Communications</b> in 2004.<br><br><ul><li>Built a real-time credit-card payment interface between Singl.eView Convergent Billing (CB), VisaNet and multiple financial institutions that automated payments and handled declines, cutting manual work by about 75%.</li><li>Created a call-detail-record (CDR) import using the vendor’s Data Interface Language, and defined the data flow for CDRs arriving from multiple vendors.</li><li>Implemented a usage error framework that reduced another department’s research and correction time.</li></ul>",
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
    country: "United States",
    role: "Programmer Analyst",
    descriptionHtml: "<b>Allegiance Telecom</b>, a business telecom carrier acquired by <b>XO Communications</b> in 2004.<br><br><ul><li>Cut configuration time for phone-usage companion products from over two weeks to under one day by creating a flexible framework.</li><li>Coordinated the automation of cancelling and selling multiple products on a consolidated framework.</li><li>Created and tested voice and data products from Marketing’s requirements, including usage tariffs that turn switch data into billable CDR charges in line with the Public Utility Commission (PUC) and business rules.</li><li>Built a SQL Server report framework that helped management meet customers’ service level agreements.</li></ul>",
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
    country: "United States",
    role: "Consultant: Senior Programmer Analyst",
    descriptionHtml: "<b>Electronic Data Systems (EDS)</b> was an American IT services company based in Plano, Texas, acquired by Hewlett-Packard in 2008.<br><br><ul><li>Led the technical delivery of a six-month Singl.eView Convergent Billing (CB) implementation for a large US bank, from requirements through design, configuration and testing.</li><li>Automated payments with a real-time interface between CB and multiple financial institutions that adjusted amounts for declines.</li><li>Delivered a new usage framework and a financial reporting system for a large financial account.</li><li>Verified each project through change control, test plans and string testing.</li><li>Helped plan the product roadmap with Product Management, and presented architecture and direction to internal teams, customers and prospects.</li></ul>",
    technologies: ["Singl.eView CB", "Test planning", "Change control"],
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
    role: "Consultant: Senior Configuration Specialist",
    descriptionHtml: "<b>Intec</b> was a UK provider of billing and business-support software to telecom operators, best known for its Singl.eView Convergent Billing (CB) platform.<br><br><ul><li>Designed and configured CB for <a href=\"https://www.carphonewarehouse.com\" target=\"_blank\" rel=\"noopener noreferrer\">Carphone Warehouse</a>.</li><li>Connected Cordiant to CB by designing API solutions from the requirements and creating the XML schemas (XSD) for the Tibco adaptor.</li><li>Led the Reporting and Interface team, mentoring 12 offshore team members through unit testing of the Perl-based reports and interfaces run from CB.</li><li>Reviewed documents, configuration and unit test plans to ensure accuracy and completeness.</li></ul>",
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
    role: "Consultant: Senior CB Configuration Specialist / Adviser",
    descriptionHtml: "<b>Intec</b>, the UK billing software provider behind Singl.eView Convergent Billing (CB). Singl.eView has changed hands several times, from ADC to Intec, then to CSG, and most recently to NEC.<br><br><ul><li>Mentored the Bangalore team to implement a CB phase for <a href=\"https://www.mtn.ng\" target=\"_blank\" rel=\"noopener noreferrer\">MTN Nigeria</a>.</li><li>Guided and advised the new outsourced team, including project managers and programmers, on the skills and methods needed to execute the project plan.</li><li>Acted as liaison between Western management and the Bangalore staff, improving offshore operations across cultural and time-zone differences.</li><li>Made the Bangalore office independent on the CB project by focusing on its process, and wrote procedures to make sure the team understood and followed them.</li></ul>",
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
    country: "Sweden",
    role: "Consultant: Senior Configuration Specialist",
    descriptionHtml: "<b>Tele2's</b> mission is to provide affordable and easy connectivity for everyone, anytime.<br><br><ul><li>Developed within the Singl.eView Convergent Billing (CB) framework in the Applications Enhancements department, covering analysis, design and architecture, solution proposals, implementation and unit testing of Expression Parser Module (EPM) code.</li><li>Worked with the team to develop an integrated messaging system using a Java Message Service (JMS) to communicate between multiple applications.</li><li>Documented development processes on a wiki to promote efficient use of time and share information across functional areas.</li></ul>",
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
    role: "Consultant: Solution Designer",
    descriptionHtml: "<b>Hutchison 3G Australia</b> launched Australia's first 3G mobile network and services in 2003 under the 3 brand.<br><br><ul><li>Analysed infrastructure with the team and advised on how multiple business systems could be integrated, including Singl.eView Convergent Billing (CB), PeopleSoft, Tallyman, the print vendor and mediation.</li><li>Provided end-to-end solutions for key Hutch projects, including the provisioning and billing of handset insurance and flexible rate plan discounting.</li><li>Helped Billing Operations with solutions around existing workarounds, including root-cause analysis of symptoms and advice on the estimated cost and timeframe of automated billing options.</li><li>Provided high-level analysis of pipeline projects: the systems impacted, the estimated cost of implementation per system and the estimated time to completion.</li></ul>",
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
    role: "Senior Consultant",
    descriptionHtml: "<b>Optus</b>, a subsidiary of Singtel, is the second-largest telecommunications company in Australia.<br><br><ul><li>Worked as Business Analyst for the Brisbane team, producing System Requirements Specification (SRS) documents from Business Requirements Specification (BRS) documents after establishing the capabilities of Singl.eView Convergent Billing (CB) and of the upstream and downstream Optus systems.</li><li>Used CB to provide proofs of concept (solution designs) for proposed functional changes.</li><li>Created Functional Design Documents so junior developers could work more efficiently.</li><li>Gave Technical Team Lead assistance to the Brisbane and Bangalore teams on a project basis.</li><li>Provided consulting services, including detailed time and cost estimates for projects.</li><li>Liaised between the Optus business and Intec technical staff to manage expectations throughout the project life cycle.</li></ul>",
    technologies: ["Singl.eView CB", "SRS / BRS", "Functional design"],
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
    companyName: "Vodafone Italy",
    logo: `${ASSET_ROOT}/images/experience/logo/vodafone.svg`,
    startAt: "10-01-2009",
    endAt: "06-30-2010",
    city: "Skopje",
    country: "North Macedonia",
    role: "Mentor / Senior Consultant",
    descriptionHtml: "<b>Vodafone Italy</b> (Vodafone Italia) was the Italian mobile operator of the Vodafone Group, headquartered in Milan; it began life as Omnitel in 1994 and was acquired by Swisscom in 2024.<br><br><ul><li>Provided direction on best practices throughout the development life cycle to an inexperienced development team.</li><li>Provided solution designs, including documentation, to support the team during development.</li><li>Helped plan deliverables by providing estimates and feasibility assessments for requested application changes.</li><li>Acted as liaison between the business in Milan, Italy and the development team in Skopje, turning abstract business requests into tangible application concepts and Functional Requirements Specification (FRS) documents.</li><li>Trained junior staff in development best practices for Singl.eView Convergent Billing (CB), the development life cycle and troubleshooting code during trouble-ticket assignments.</li></ul>",
    technologies: ["Singl.eView CB", "Solution design", "FRS documents"],
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
    country: "Sweden",
    role: "Consultant: Senior Developer",
    descriptionHtml: "<b>Tre</b> (Hi3G Access) is one of Sweden's largest mobile network operators, offering mobile telephony and broadband to private and business customers.<br><br><ul><li>Assisted with the upgrade of Singl.eView Convergent Billing (CB) from v5.01 to v6.01.</li><li>Provided solution designs to the offshore team based on functional requirements.</li><li>Implemented process improvements within the development team to improve code quality.</li></ul>",
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
    country: "Sweden",
    role: "Consultant: CB Application Lead",
    descriptionHtml: "<b>Tre</b> (Hi3G Access), one of Sweden's largest mobile network operators.<br><br><ul><li>Helped initiate the Billing stability project, including framework evaluation and code clean-up.</li><li>Provided accountability to external groups for Billing deliverables.</li><li>Created a streamlined release process to gain control of what was released to production, including introducing a code review and automated unit test process.</li><li>Coordinated development and release drops between external development groups and Billing.</li><li>Initiated changes to the trunk and branch environments to provide stability to the testing streams.</li><li>Implemented a Singl.eView Convergent Billing (CB) forum to educate, inform and brainstorm on Billing-related items with the Billing Cross Functional Team (CFT) and other external CFTs.</li></ul>",
    technologies: ["Singl.eView CB", "Code review", "Release management"],
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
    country: "Sweden",
    role: "Consultant: Agile Change Agent / CB Application Lead",
    descriptionHtml: "<b>Tre</b> (Hi3G Access), one of Sweden's largest mobile network operators.<br><br><ul><li>Introduced new ways of working and supported the billing department in improving by using Agile/Lean techniques and processes.</li><li>Began implementing an Agile process, on directives from the business, to speed up time to market (TTM).</li><li>Led by example during the transition from a Waterfall to an Agile business practice model.</li><li>Helped newly formed Cross Functional Teams (CFTs) work as self-contained, cohesive units.</li><li>Helped implement Kanban for the Billing development group.</li><li>Initiated a daily stand-up to address issues outside the Agile functional groups.</li><li>Created a tool used for continuous integration.</li><li>Kept to release plans while managing business expectations of new requirements.</li><li>Used a wiki to document changing processes and encouraged its use to quickly document requirements and release artifacts.</li></ul>",
    technologies: ["Agile", "Lean", "Kanban", "Continuous integration", "Wiki"],
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
    country: "Sweden",
    role: "Consultant: Agile Coach / Senior Developer",
    descriptionHtml: "<b>Tre</b> (Hi3G Access), one of Sweden's largest mobile network operators.<br><br><ul><li>Helped the team change from Kanban to Scrum.</li><li>Facilitated Agile artifacts for the team, including backlog grooming, sprint planning and visualization of work.</li><li>Encouraged pair programming and additional “outside the box” ways of working.</li><li>Helped with team motivation by empowering people to make their own decisions, and took on some of the less “fun” tasks myself so the team could concentrate on new, enjoyable development.</li></ul>",
    technologies: ["Agile", "Scrum", "Kanban", "Pair programming"],
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
    city: ["Stockholm", "Copenhagen", "Helsinki", "Oslo", "Gdańsk"],
    country: ["Sweden", "Denmark", "Finland", "Norway", "Poland"],
    role: "Agile Coach",
    descriptionHtml: "<b>Nordea</b> is a leading Nordic bank; its Core Banking Programme, a multi-year replacement of its core banking systems across the Nordics, was among the largest projects in European banking.<br><br><ul><li>Coached several Scrum, Kanban and non-Agile teams in the Core Banking Program (CBP), Europe's largest change project.</li><li>Facilitated training on ways of working, mindset and values.</li><li>Promoted change by influencing the leadership group and leading by example.</li><li>Helped management explore their own values and the bank's values to make change possible.</li><li>Contributed at leadership level through training and improved communication.</li></ul>",
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
    country: "Norway",
    role: "Jobbsjansen participant",
    descriptionHtml: "<b>Jobbsjansen</b> is a Norwegian programme, funded by IMDi (the Norwegian Directorate of Integration and Diversity), that supports newcomers into work.<br><br><ul><li><b>Kristiansund voksenopplæring:</b> Attended Norwegian language class while practicing speaking the language with Norwegians.</li><li><b>Molde University College in Kristiansund (Molde Høgskolen i Kristiansund):</b> Facilitated interactive teaching sessions in which students experienced Lean principles through hands-on exploration and dialogue.</li></ul>",
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
    city: "Online from Averøy",
    country: "Norway",
    role: "Consultant: Senior Agile Coach",
    descriptionHtml: "<b>Capgemini</b> is a global leader in consulting, technology and engineering services; this assignment was for <b>Yara</b>, whose mission is to responsibly feed the world and protect the planet.<br><br><ul><li>Used Lean/Agile concepts to encourage a department to start a change process to adapt its IT systems and routines.</li><li>Motivated closing the gap between supplier and customer through a shared roadmap and more collaboration.</li><li>Worked with the parts of the organization that wanted to explore more Agile/Lean ways of working.</li></ul>",
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
    city: "Online from Averøy",
    country: "Norway",
    role: "Consultant: Senior Agile Coach",
    descriptionHtml: "<b>Capgemini</b> is a global leader in consulting, technology and engineering services; this assignment was for the <b>Volvo Group</b>, a Swedish manufacturer of trucks, buses and construction equipment.<br><br><ul><li>Brought together Agile Coaches and Release Train Engineers (RTEs) from several suppliers by establishing a community of practice (CoP).</li><li>Helped start a new project by providing guidance and organizing planning meetings.</li><li>Developed and facilitated a training session to bring all suppliers on board with Agile ways of working.</li><li>Assisted in contract negotiations to move away from project-based deliveries.</li><li>Worked with management to build an understanding of “What is Agile?”.</li></ul>",
    technologies: ["Agile", "Community of practice", "Release Train Engineer"],
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
    country: "Norway",
    role: "Performance Partner",
    descriptionHtml: "<b>Leanstance</b> (Tørristua AS) is a Norwegian consultancy that helps organizations adopt Lean and Agile ways of working.<br><br><ul><li>Introduce Lean/Agile methods in organizations.</li><li>Encourage changes in mindset and culture.</li><li>Help organizations experiment with changes in teams, structures, leadership styles and ways of working.</li></ul>",
    technologies: ["Lean", "Agile"],
    medias: [],
  },
  {
    position: 22,
    companyName: "Bjørnådal Arkitektstudio",
    startAt: "2023",
    endAt: "2023",
    city: "Kristiansund",
    country: "Norway",
    role: "Agile Coach",
    descriptionHtml: "<b>Bjørnådal Arkitektstudio</b> is an architecture studio founded in 2007, known for a pragmatic yet poetic approach to architecture.<br><br><ul><li>Facilitated work on the company's ways of working and business goals.</li><li>Worked to build a feedback-driven organization by exploring how to give and receive feedback, while introducing systems for input and feedback.</li></ul>",
    technologies: ["Agile", "Feedback culture"],
    medias: [],
  },
  {
    position: 23,
    companyName: "Molde University College",
    website: "https://www.himolde.no/",
    logo: `${ASSET_ROOT}/images/experience/logo/molde.svg`,
    startAt: "2026",
    endAt: "2026",
    city: "Kristiansund",
    country: "Norway",
    role: "Work placement (Norwegian language training)",
    descriptionHtml: "<b>Molde University College in Kristiansund</b> (Molde Høgskolen i Kristiansund) is a Norwegian specialised university, founded in 1994, with a particular focus on logistics; this placement was at its Kristiansund campus.<br><br><ul><li>Updated the PowerPoint for the Lean Production course.</li><li>Facilitated Lean in practice using LEGO.</li><li>Gave a lecture on my experiences as an Agile Coach.</li><li>Took part in supervising students.</li><li>Was part of the work environment.</li></ul>",
    technologies: ["Lean", "Lean production", "LEGO"],
    medias: [
      {
        icon: "facebook",
        title: "Facebook Molde University College",
        href: "https://www.facebook.com/himolde/"
      },
      {
        icon: "youtube",
        title: "YouTube Molde University College",
        href: "https://www.youtube.com/user/himolde"
      },
      {
        icon: "instagram",
        title: "Instagram Molde University College",
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
    id: "facilitator",
    title: "The Impartial Facilitator",
    descriptionHtml: "<p>A neutral outside voice for the conversations that are hard to have from the inside.</p><p>I facilitate sessions where a team breaks through a problem, reaches a decision or brainstorms new ideas. Because I have no stake in the outcome, everyone can speak freely and the group stays focused on the goal.</p><ul><li>Problem-solving and breakthrough sessions</li><li>Brainstorming and idea generation</li><li>Decisions and alignment between teams or departments</li></ul>",
    pictures: [],
  },
  {
    id: "ice-breaker",
    title: "Ice Breaker for Events",
    hidden: true,
    descriptionHtml: "<p>Strangers become a team in minutes.</p><p>I open hackathons, conferences and public meetups with playful, high-energy ice breakers that get people talking, laughing and ready to collaborate.</p><ul><li>Hackathon kick-offs where participants meet and form teams</li><li>Conference and meetup openers</li><li>Energisers that bring the room back after a break</li></ul>",
    pictures: [],
  },
  {
    id: "performance-check-up",
    title: "Performance Check-Up",
    descriptionHtml: "<p>Find out what is really slowing your team down.</p><p>I talk with the team and its leaders, look at how the work flows, and give you a clear picture of what is helping and what is getting in the way, along with the first improvements to try.</p><ul><li>Conversations with the team and its leaders</li><li>A clear summary of strengths and obstacles</li><li>Practical first steps, in order of priority</li></ul>",
    pictures: [],
  },
  {
    id: "performance-sprint",
    title: "Team Performance Sprint",
    descriptionHtml: "<p>Focused, hands-on partnership with one team on one performance goal.</p><p>Working alongside the team over a set period, I help you agree the goal, try new ways of working, and build the habits that keep improving after I leave.</p><ul><li>A clear goal agreed up front</li><li>Hands-on coaching in the team's real work</li><li>Regular reflection on what is working</li><li>Habits and tools the team keeps</li></ul>",
    pictures: [],
  },
  {
    id: "team-retreat",
    title: "Team Retreat with Deep Time Walk",
    descriptionHtml: "<p>Step away from the daily pressure and see the bigger picture.</p><p>A guided Deep Time Walk gives a team a shared, memorable experience of time and change. Afterwards I facilitate a conversation about what it means for their own work and direction.</p><ul><li>A guided walk in nature</li><li>Facilitated reflection afterwards</li><li>A shared perspective for a team facing change</li></ul>",
    pictures: [],
  },
  {
    id: "value-stream-mapping",
    title: "Value Stream Mapping Workshop",
    hidden: false,
    descriptionHtml: "<p>See where the time really goes in one team's way of working.</p><p>In a half-day workshop, the team maps the steps a single piece of work takes from request to delivery, and measures how much of that time is work and how much is waiting. You leave with a shared picture of your own flow and the first waste worth removing.</p><ul><li>One team's flow mapped step by step, by the people who do the work</li><li>Working time compared with waiting time and rework</li><li>The few improvements most worth trying first</li></ul>",
    pictures: [],
  },
  {
    id: "cross-team-dependency",
    title: "Cross-Team Dependency Workshop",
    hidden: false,
    descriptionHtml: "<p>Get several teams, or several suppliers, planning as one.</p><p>When teams rely on each other's deliveries, a plan only works if everyone's commitments line up. I facilitate a planning session where teams say what they need from each other, agree who delivers what and when, and flag the risks that cross team boundaries.</p><ul><li>Needs between teams and suppliers laid out on one board</li><li>Clear agreements on who delivers what, and when</li><li>Cross-team risks named early, with owners</li></ul>",
    pictures: [],
  },
  {
    id: "leadership-lab",
    title: "Leadership Coaching Lab",
    hidden: false,
    descriptionHtml: "<p>Lead in a way that helps teams deliver.</p><p>A small series of sessions for managers, Product Owners and team leads who want to move from directing the work to enabling it. We use your real situations, practice new approaches together, and you try them between sessions.</p><ul><li>Small group, with confidential discussion of real situations</li><li>Practical ways to ask better questions, delegate and remove obstacles</li><li>Experiments between sessions and reflection on what worked</li></ul>",
    pictures: [],
  },
];

const typingPhrases = ["I'm Cristal, your Performance Partner.", "Coaching teams to deliver more value.", "Take a look at my journey below."];

export const en: ResumeContent = {
  locale: "en",
  personal,
  site,
  ui,
  aboutDescriptionHtml,
  glossary,
  hobbies,
  aboutMedias,
  experiences,
  education,
  certifications,
  offerings,
  typingPhrases,
};
