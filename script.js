// ===== Texter på svenska och engelska =====
// Ändra en text: leta upp nyckeln i både "sv" och "en" nedan.
const i18n = {
  sv: {
    pageTitle: "Khalid Hassan – Junior systemutvecklare & AI-integration",
    pageDescription: "Khalid Hassan, junior systemutvecklare inom backend och system i Göteborg. C#, ASP.NET Core, SQL Server och Azure.",
    skip: "Hoppa till innehållet",
    navLabel: "Huvudmeny",
    menu: "Meny",
    theme: "Byt mellan ljust och mörkt läge",
    navAbout: "Om mig",
    navSkills: "Kompetenser",
    navExperience: "Erfarenhet",
    navProjects: "Projekt",
    navContact: "Kontakt",
    avatarAlt: "Porträtt av Khalid Hassan",
    role: "Junior systemutvecklare & AI-integration",
    lead: "Jag bygger och driftsätter system i C# och .NET, utvecklar AI-agenter och integrerar AI i applikationer. Baserad i Göteborg.",
    cvButton: "Ladda ner CV",
    cvFile: "Bilagor/CV.pdf",
    contactButton: "Kontakta mig",
    emailLabel: "E-post",
    apiLabel: "Sammanfattning av Khalid som ett API-svar",
    api: {
      roll: "Junior systemutvecklare & AI-integration",
      fokus: ["Backend", "Fullstack", "AI-agenter", "AI-integration", "Integration"],
      stack: ["C#", "ASP.NET Core", "React", "SQL Server", "Azure"],
      ort: "Göteborg",
      söker: ["Fullstack", "Applikation", "Integration", "Implementation"],
      tillgänglig: true
    },
    about1: "Jag är systemvetare från Högskolan i Borås med inriktning mot backend- och systemutveckling. Jag har byggt och driftsatt applikationer i C# och .NET – med API-design, databaser och testning – i egna projekt, teamprojekt och under utbildningen. På senare tid har jag fokuserat på att utveckla AI-agenter och integrera AI i system, bland annat med RAG och multiagentflöden.",
    about2: "Under 2026 gjorde jag praktik som applikationstekniker på Estrella, där jag installerade och konfigurerade system som InforMES, hjälpte användare och hanterade IT-incidenter. Det gav mig en bra bild av hur system fungerar när de väl är i drift.",
    about3: "Jag är strukturerad och lösningsorienterad, och trivs bäst när jag får bygga robusta system tillsammans med ett team.",
    factEducation: "Utbildning",
    degree: "Fil.kand. Informatik, systemutveckling",
    school: "Högskolan i Borås, 2022–2025",
    factLocation: "Ort",
    city: "Göteborg",
    skLang: "Språk och ramverk",
    skData: "Data och API",
    skRest: "RESTful API-design",
    skCloud: "Moln och drift",
    skTest: "Test och metodik",
    skSystest: "Systemtest (IEEE 829)",
    skAgile: "Agilt arbetssätt",
    skAgents: "AI-agenter",
    skTools: "Verktyg",
    exp1When: "Mars 2026 – September 2026",
    exp1Title: "Applikationstekniker (praktik)",
    exp1a: "Installerade och konfigurerade nya program, bland annat InforMES, och säkerställde stabil drift.",
    exp1b: "Hjälpte användare med tekniska problem och hanterade IT-incidenter.",
    exp1c: "Underhöll och uppdaterade befintliga system för bättre prestanda.",
    exp2When: "Juni 2024 – pågående",
    exp2Title: "Maskinoperatör",
    exp2a: "Ansvarade för att maskinerna gick som de skulle och löste problem som larm. Körde truck vid transport av råvaror.",
    earlier: "Tidigare erfarenhet",
    dhlWhen: "Okt 2022 – Juni 2024",
    volvoWhen: "Juni 2021 – Feb 2024",
    swipeHint: "Swipa eller använd pilarna för att se fler projekt.",
    prev: "Föregående projekt",
    next: "Nästa projekt",
    goTo: "Gå till projekt",
    of: "av",
    code: "Kod på GitHub",
    demo: "Öppna demo",
    shotOf: "Skärmbild av",
    starS: "Situation",
    starT: "Uppgift",
    starA: "Handling",
    starR: "Resultat",
    allRepos: "Se alla repon på GitHub",
    contactLead: "Jag söker jobb inom fullstack, applikation, integration och implementation i Göteborgsområdet. Hör gärna av dig."
  },
  en: {
    pageTitle: "Khalid Hassan – Junior Software Engineer & AI Integration",
    pageDescription: "Khalid Hassan, junior software engineer focused on backend and systems in Gothenburg, Sweden. C#, ASP.NET Core, SQL Server and Azure.",
    skip: "Skip to content",
    navLabel: "Main menu",
    menu: "Menu",
    theme: "Switch between light and dark mode",
    navAbout: "About",
    navSkills: "Skills",
    navExperience: "Experience",
    navProjects: "Projects",
    navContact: "Contact",
    avatarAlt: "Portrait of Khalid Hassan",
    role: "Junior software engineer & AI integration",
    lead: "I build and deploy systems in C# and .NET, develop AI agents and integrate AI into applications. Based in Gothenburg, Sweden.",
    cvButton: "Download resume",
    cvFile: "Bilagor/CV_EN.pdf",
    contactButton: "Contact me",
    emailLabel: "Email",
    apiLabel: "Summary of Khalid as an API response",
    api: {
      role: "Junior Software Engineer & AI Integration",
      focus: ["Backend", "Full-stack", "AI agents", "AI integration", "Integration"],
      stack: ["C#", "ASP.NET Core", "React", "SQL Server", "Azure"],
      location: "Gothenburg, Sweden",
      lookingFor: ["Full-stack", "Applications", "Integration", "Implementation"],
      available: true
    },
    about1: "I hold a bachelor's degree in Informatics from the University of Borås, specializing in backend and systems development. I have built and deployed applications in C# and .NET – including API design, databases and testing – in personal projects, team projects and during my studies. Recently I have focused on developing AI agents and integrating AI into systems, including RAG and multi-agent workflows.",
    about2: "In 2026 I completed an internship as an application technician at Estrella, where I installed and configured systems such as InforMES, supported users and handled IT incidents. It gave me a clear picture of how systems behave once they are in production.",
    about3: "I am structured and solution-oriented, and I enjoy building robust systems together with a team.",
    factEducation: "Education",
    degree: "B.Sc. in Informatics, Systems Development",
    school: "University of Borås, 2022–2025",
    factLocation: "Location",
    city: "Gothenburg",
    skLang: "Languages and frameworks",
    skData: "Data and APIs",
    skRest: "RESTful API design",
    skCloud: "Cloud and operations",
    skTest: "Testing and methods",
    skSystest: "System testing (IEEE 829)",
    skAgile: "Agile / Scrum",
    skAgents: "AI agents",
    skTools: "Tools",
    exp1When: "March 2026 – September 2026",
    exp1Title: "Application Technician (Internship)",
    exp1a: "Installed and configured new software, including InforMES, and ensured stable operation.",
    exp1b: "Supported users with technical issues and handled IT incidents.",
    exp1c: "Maintained and updated existing systems to improve performance.",
    exp2When: "June 2024 – Present",
    exp2Title: "Machine Operator",
    exp2a: "Keep production machines running and resolve issues such as alarms. Operate forklifts to transport raw materials.",
    earlier: "Earlier experience",
    dhlWhen: "Oct 2022 – June 2024",
    volvoWhen: "June 2021 – Feb 2024",
    swipeHint: "Swipe or use the arrows to see more projects.",
    prev: "Previous project",
    next: "Next project",
    goTo: "Go to project",
    of: "of",
    code: "Code on GitHub",
    demo: "Open demo",
    shotOf: "Screenshot of",
    starS: "Situation",
    starT: "Task",
    starA: "Action",
    starR: "Result",
    allRepos: "See all repositories on GitHub",
    contactLead: "I am looking for roles in full-stack development, applications, integration and implementation in the Gothenburg area. Feel free to get in touch."
  }
};

// ===== Projekt (nyast först) =====
// Lämna github/demo som null för att dölja knappen.
const projects = [
  {
    name: "SelfLearning Agent (POLARIS)",
    image: null,
    tech: ["Python", "FastAPI", "Claude API", "Groq API", "RAG", "SQLite FTS5", "Vektorsök (fastembed)", "Telegram Bot API", "pytest", "GitHub Actions", "Claude Code"],
    github: "https://github.com/Khalid1754/SelfLearning-Agent",
    demo: null,
    sv: {
      subtitle: "Självlärande AI-agent", period: "Oktober 2026 – pågående",
      summary: "En personlig AI-agent som lär sig av det jag matar in och av det den läser på nätet. Den tränar ingen egen modell, utan bygger upp ett minne som växer för varje körning.",
      points: [
        "Kunskapsbas i SQLite med både ordsökning (FTS5) och vektorsökning, som agenten använder för RAG innan den svarar.",
        "Reflekterar efter varje uppgift och sparar lärdomar och återanvändbara färdigheter. Lärdomar från webben godkänner jag först.",
        "Nås via terminalen, ett eget chattgränssnitt i webbläsaren (FastAPI) och en Telegram-bot i mobilen, med feedback via 👍/👎.",
        "57 automatiska tester som körs i GitHub Actions vid varje push."
      ]
    },
    en: {
      subtitle: "Self-learning AI agent", period: "October 2026 – Present",
      summary: "A personal AI agent that learns from what I feed it and from what it reads on the web. It does not train its own model; instead it builds a memory that grows with every run.",
      points: [
        "Knowledge base in SQLite with both keyword search (FTS5) and vector search, which the agent uses for RAG before it answers.",
        "Reflects after every task and saves lessons and reusable skills. Lessons learned from the web are approved by me first.",
        "Available through the terminal, its own browser chat interface (FastAPI) and a Telegram bot on my phone, with 👍/👎 feedback.",
        "57 automated tests that run in GitHub Actions on every push."
      ]
    }
  },
  {
    name: "AgentFlow",
    image: null,
    tech: ["C#", ".NET 10", "Minimal API", "Entity Framework Core", "SQL Server", "Groq API", "React", "TypeScript", "Vite", "Server-Sent Events", "Docker", "GitHub Actions", "xUnit", "Vitest"],
    github: "https://github.com/Khalid1754/AgentFlow.API",
    demo: null,
    sv: {
      subtitle: "Multiagentsystem med AI", period: "Oktober 2026",
      summary: "Fyra AI-agenter (Researcher, Analyst, Writer och Reviewer) lämnar över uppgifter till varandra och tar fram en rapport med källor utifrån en fråga, där varje överlämning visas live.",
      points: [
        "Researcher söker på Wikipedia och DuckDuckGo och lämnar upp till 8 källor vidare. Reviewer kan skicka tillbaka rapporten till Writer om något saknas.",
        "En orkestrerare i .NET 10 styr flödet via en bakgrundskö, sparar varje steg i SQL Server med EF Core och strömmar dem till React-gränssnittet med Server-Sent Events.",
        "17 automatiska tester som körs i GitHub Actions."
      ]
    },
    en: {
      subtitle: "Multi-agent AI system", period: "October 2026",
      summary: "Four AI agents (Researcher, Analyst, Writer and Reviewer) hand tasks over to each other to produce a sourced report from a question, with every handoff shown live.",
      points: [
        "The Researcher searches Wikipedia and DuckDuckGo and passes on up to 8 sources. The Reviewer can send the report back to the Writer if something is missing.",
        "An orchestrator in .NET 10 runs the flow through a background queue, saves each step in SQL Server with EF Core and streams them to the React front end with Server-Sent Events.",
        "17 automated tests that run in GitHub Actions."
      ]
    }
  },
  {
    name: "TrAInr",
    image: null,
    tech: ["C#", ".NET 10", "ASP.NET Core Web API", "Entity Framework Core", "SQL Server", "Azure SQL", "React", "TypeScript", "Vite", "Claude API", "Groq API", "Gemini API", "Docker", "Azure App Service", "GitHub Actions", "xUnit", "Testcontainers", "Vitest", "PWA"],
    github: "https://github.com/Khalid1754/TrAInr.API",
    demo: null,
    sv: {
      subtitle: "Träningsapp med AI-coach", period: "Oktober 2026 – pågående",
      summary: "En fullstack-app där jag loggar gympass, följer min utveckling i statistik och får råd av en AI-coach.",
      points: [],
      star: {
        s: "Jag ville logga mina gympass och se min utveckling, men vanliga träningsappar gav inga personliga råd utifrån min egen historik.",
        t: "Bygga en egen app från grunden med loggning, statistik och AI-stöd, som fungerar i mobilen och körs i molnet.",
        a: "Byggde ett REST-API i ASP.NET Core med EF Core-migreringar mot SQL Server, konton med hashade lösenord och cookie-inloggning, och ett gränssnitt i React och TypeScript. AI kopplades in via ett utbytbart lager (Claude, Groq, Gemini) med strukturerade JSON-svar, medan kalorier och viktprogression räknas med egna regler så att appen fungerar även utan AI. Allt körs i Docker, och GitHub Actions kör tester före varje publicering till Azure.",
        r: "En driftsatt app i Azure med konton, statistik och grafer, övningsbibliotek, vilotimer, AI-coach med viktförslag och chatt, mörkt läge och svenska/engelska. Den kan installeras på iPhone som app och skyddas av enhets- och integrationstester."
      }
    },
    en: {
      subtitle: "Workout app with an AI coach", period: "October 2026 – Present",
      summary: "A full-stack app where I log gym sessions, follow my progress in statistics and get advice from an AI coach.",
      points: [],
      star: {
        s: "I wanted to log my gym sessions and track my progress, but typical workout apps gave no personal advice based on my own history.",
        t: "Build my own app from scratch with logging, statistics and AI support that works on my phone and runs in the cloud.",
        a: "Built a REST API in ASP.NET Core with EF Core migrations on SQL Server, accounts with hashed passwords and cookie sign-in, and a React and TypeScript front end. AI is plugged in through a swappable layer (Claude, Groq, Gemini) with structured JSON responses, while calories and weight progression use my own rules so the app works without AI. Everything runs in Docker, and GitHub Actions runs the tests before every deployment to Azure.",
        r: "A deployed app on Azure with accounts, statistics and charts, an exercise library, a rest timer, an AI coach with weight suggestions and chat, dark mode and Swedish/English. It installs on iPhone as an app and is covered by unit and integration tests."
      }
    }
  },
  {
    name: "JobbAgent",
    image: null,
    tech: ["C#", ".NET 10", "Claude API", "JobTech API", "Azure SQL", "React", "Vite"],
    github: "https://github.com/Khalid1754/JobbAgent.API",
    demo: null,
    sv: {
      subtitle: "AI-agent för jobbsökning", period: "Oktober 2026",
      summary: "En AI-agent som hämtar lediga jobb från Platsbanken och listar de annonser som matchar mina kompetenser och mitt CV.",
      points: ["Hämtar annonser via JobTechs API för Göteborgsområdet.", "Använder Claude API för att bedöma hur väl varje annons matchar CV:t."]
    },
    en: {
      subtitle: "AI agent for job searching", period: "October 2026",
      summary: "An AI agent that fetches open positions from Platsbanken, the Swedish public job board, and lists the ads that match my skills and resume.",
      points: ["Fetches job ads for the Gothenburg area through the JobTech API.", "Uses the Claude API to assess how well each ad matches the resume."]
    }
  },
  {
    name: "MarketPulse",
    image: null,
    tech: ["C#", "ASP.NET Core Web API", "Azure SQL", "React", "Vite"],
    github: "https://github.com/Khalid1754/MarketPulse.API",
    demo: null,
    sv: {
      subtitle: "Webbapplikation med API", period: "Juli 2026",
      summary: "En webbapplikation med ett API i ASP.NET Core och ett gränssnitt byggt i React.", points: []
    },
    en: {
      subtitle: "Web application with API", period: "July 2026",
      summary: "A web application with an ASP.NET Core API and a React front end.", points: []
    }
  },
  {
    name: "LiFeDenTal",
    image: null, // t.ex. "Bilagor/Project LiFeDenTal.png"
    tech: ["C#", "ASP.NET Core Web API", "SignalR", "React", "Vite", "Azure SQL", "Azure Static Web Apps"],
    github: "https://github.com/Khalid1754/LiFeDenTal",
    demo: null,
    sv: {
      subtitle: "Journalsystem för tandvård", period: "Juni 2026 – September 2026",
      summary: "Ett journalsystem för tandvårdskliniker med patientjournaler och bokning.",
      points: ["Designade och byggde RESTful API:er för patientdata och bokningsflöden.", "Använder SignalR för realtidskommunikation mellan server och klient.", "Modellerade databasen med CRUD för journaler och bokningar."]
    },
    en: {
      subtitle: "Dental records system", period: "June 2026 – September 2026",
      summary: "A records system for dental clinics with patient records and appointment booking.",
      points: ["Designed and built RESTful APIs for patient data and booking flows.", "Uses SignalR for real-time communication between server and client.", "Modeled the database with CRUD for records and bookings."]
    }
  },
  {
    name: "SmartE-School",
    image: "Bilagor/Project SmartE-School.png",
    tech: ["C#", "WPF", "HTML", "CSS", "OpenAI API"],
    github: "https://github.com/Khalid1754/SmartE-School",
    demo: null,
    sv: {
      subtitle: "Hackathon-projekt", period: "Maj 2026",
      summary: "En app som hjälper grundskoleelever att lära sig effektivare, byggd i team under ett hackathon.",
      points: ["Ansvarade för funktionalitet och gränssnitt.", "Integrerade AI-funktioner via OpenAI:s API."]
    },
    en: {
      subtitle: "Hackathon project", period: "May 2026",
      summary: "An app that helps primary school students learn more effectively, built by a team during a hackathon.",
      points: ["Responsible for functionality and the user interface.", "Integrated AI features through the OpenAI API."]
    }
  },
  {
    name: "RestoNation",
    image: "Bilagor/Project RestoNation.png",
    tech: ["C#", "ASP.NET Core Web API", "Azure Static Web Apps", "Scrum", "Git"],
    github: null,
    demo: null,
    sv: {
      subtitle: "Systemutvecklingsprojekt i team", period: "Aug – Nov 2025",
      summary: "En applikation byggd i team utifrån en riktig kunds behov. Vi arbetade agilt i sprintar med löpande avstämning mot kunden.",
      points: ["Bidrog till design och implementation av backend-funktionalitet."]
    },
    en: {
      subtitle: "Team software development project", period: "Aug – Nov 2025",
      summary: "An application built by a team based on a real client's needs. We worked in agile sprints with regular client check-ins.",
      points: ["Contributed to the design and implementation of backend functionality."]
    }
  }
];

// ===== Hjälpfunktioner =====
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
let lang = "sv";

function apiJson(obj) {
  const val = (v) => typeof v === "boolean"
    ? `<span class="b">${v}</span>`
    : Array.isArray(v)
      ? "[" + v.map((x) => `<span class="s">"${esc(x)}"</span>`)
          .reduce((rows, x, i) => { if (i % 2 === 0) rows.push([x]); else rows[rows.length - 1].push(x); return rows; }, [])
          .map((r) => r.join(", ")).join(",\n            ") + "]"
      : `<span class="s">"${esc(v)}"</span>`;
  const rows = Object.entries(obj).map(([k, v]) => `  <span class="k">"${esc(k)}"</span>: ${val(v)}`);
  return "{\n" + rows.join(",\n") + "\n}";
}

// ===== Projektkarusell =====
const track = document.getElementById("project-list");
const dots = document.getElementById("dots");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const count = document.getElementById("carousel-count");
let current = 0;

function renderProjects() {
  const t = i18n[lang];
  track.innerHTML = projects.map((p, i) => {
    const c = p[lang];
    const name = lang === "en" && p.nameEn ? p.nameEn : p.name;
    const media = p.image
      ? `<div class="project-media"><img src="${esc(p.image)}" alt="${esc(t.shotOf)} ${esc(name)}" loading="lazy"></div>`
      : `<div class="project-media placeholder" aria-hidden="true">${esc(name)}</div>`;
    const points = c.points.length ? `<ul>${c.points.map((x) => `<li>${esc(x)}</li>`).join("")}</ul>` : "";
    const star = c.star
      ? `<dl class="star">${["s", "t", "a", "r"].map((k) =>
          `<div><dt>${esc(t["star" + k.toUpperCase()])}</dt><dd>${esc(c.star[k])}</dd></div>`).join("")}</dl>`
      : "";
    const links = [
      p.github ? `<a href="${esc(p.github)}" target="_blank" rel="noopener">${esc(t.code)}</a>` : "",
      p.demo ? `<a href="${esc(p.demo)}" target="_blank" rel="noopener">${esc(t.demo)}</a>` : ""
    ].join("");
    return `
      <article class="project" role="group" aria-roledescription="slide" aria-label="${i + 1} ${esc(t.of)} ${projects.length}: ${esc(name)}">
        ${media}
        <div class="project-body">
          <h3>${esc(name)}</h3>
          <p class="project-meta">${esc(c.subtitle)}${c.period ? ", " + esc(c.period) : ""}</p>
          <p>${esc(c.summary)}</p>
          ${star}
          ${points}
          <ul class="tags">${p.tech.map((x) => `<li>${esc(x)}</li>`).join("")}</ul>
          ${links ? `<div class="project-links">${links}</div>` : ""}
        </div>
      </article>`;
  }).join("");

  dots.innerHTML = projects.map((p, i) =>
    `<button type="button" aria-label="${esc(t.goTo)} ${i + 1}"></button>`).join("");
  dots.querySelectorAll("button").forEach((b, i) => b.addEventListener("click", () => goTo(i)));
  updateNav();
}

function slides() { return Array.from(track.children); }

function goTo(i) {
  const s = slides();
  i = Math.max(0, Math.min(i, s.length - 1));
  current = i;
  track.scrollTo({ left: s[i].offsetLeft - track.offsetLeft - 2 });
}

function updateNav() {
  const s = slides();
  if (!s.length) return;
  const left = track.scrollLeft;
  let best = 0, bestDist = Infinity;
  s.forEach((el, i) => {
    const d = Math.abs(el.offsetLeft - track.offsetLeft - 2 - left);
    if (d < bestDist) { bestDist = d; best = i; }
  });
  const atEnd = left + track.clientWidth >= track.scrollWidth - 4;
  current = atEnd ? s.length - 1 : best;
  prevBtn.disabled = left <= 4;
  nextBtn.disabled = atEnd;
  dots.querySelectorAll("button").forEach((b, i) => b.setAttribute("aria-current", String(i === current)));
  count.textContent = `${current + 1} ${i18n[lang].of} ${s.length}`;
}

let scrollTimer;
track.addEventListener("scroll", () => { clearTimeout(scrollTimer); scrollTimer = setTimeout(updateNav, 60); }, { passive: true });
window.addEventListener("resize", updateNav);
prevBtn.addEventListener("click", () => goTo(current - 1));
nextBtn.addEventListener("click", () => goTo(current + 1));
track.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight") { e.preventDefault(); goTo(current + 1); }
  if (e.key === "ArrowLeft") { e.preventDefault(); goTo(current - 1); }
});

// ===== Språk =====
function setLang(next) {
  lang = i18n[next] ? next : "sv";
  const t = i18n[lang];
  document.documentElement.lang = lang;
  document.title = t.pageTitle;
  const meta = document.querySelector('meta[name="description"]');
  if (meta) meta.setAttribute("content", t.pageDescription);

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const v = t[el.dataset.i18n]; if (typeof v === "string") el.textContent = v;
  });
  document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
    const v = t[el.dataset.i18nAria]; if (typeof v === "string") el.setAttribute("aria-label", v);
  });
  document.querySelectorAll("[data-i18n-alt]").forEach((el) => {
    const v = t[el.dataset.i18nAlt]; if (typeof v === "string") el.setAttribute("alt", v);
  });
  document.getElementById("cv-link").setAttribute("href", t.cvFile);
  document.getElementById("api-json").innerHTML = apiJson(t.api);
  document.querySelectorAll(".lang-switch button").forEach((b) =>
    b.setAttribute("aria-pressed", String(b.dataset.lang === lang)));

  const keep = current;
  renderProjects();
  track.scrollLeft = 0;
  if (keep) goTo(keep);
  try { localStorage.setItem("lang", lang); } catch (e) {}
}

document.querySelectorAll(".lang-switch button").forEach((b) =>
  b.addEventListener("click", () => setLang(b.dataset.lang)));

// ===== Tema =====
function setupTheme() {
  const root = document.documentElement;
  let saved = null;
  try { saved = localStorage.getItem("theme"); } catch (e) {}
  if (saved === "light" || saved === "dark") root.dataset.theme = saved;
  const btn = document.querySelector(".theme-toggle");
  if (!btn) return;
  btn.addEventListener("click", () => {
    const isDark = root.dataset.theme
      ? root.dataset.theme === "dark"
      : window.matchMedia("(prefers-color-scheme: dark)").matches;
    const next = isDark ? "light" : "dark";
    root.dataset.theme = next;
    try { localStorage.setItem("theme", next); } catch (e) {}
  });
}

// ===== Mobilmeny =====
function setupMenu() {
  const toggle = document.querySelector(".menu-toggle");
  const menu = document.getElementById("menu");
  if (!toggle || !menu) return;
  toggle.addEventListener("click", () => {
    const open = menu.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
  });
  menu.addEventListener("click", (e) => {
    if (e.target.tagName === "A") {
      menu.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    }
  });
}

// ===== Start =====
document.getElementById("year").textContent = new Date().getFullYear();
let startLang = "sv";
try {
  const saved = localStorage.getItem("lang");
  const fromUrl = new URLSearchParams(location.search).get("lang");
  startLang = fromUrl || saved || (navigator.language && !navigator.language.toLowerCase().startsWith("sv") ? "en" : "sv");
} catch (e) {}
setLang(startLang);
setupTheme();
setupMenu();
