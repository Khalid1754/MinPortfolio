// ===== Texter på svenska och engelska =====
// Ändra en text: leta upp nyckeln i både "sv" och "en" nedan.
const i18n = {
  sv: {
    pageTitle: "Khalid Hassan – Junior systemutvecklare",
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
    role: "Junior systemutvecklare inom backend och system",
    lead: "Jag bygger API:er, databaser och system i C# och .NET – och ser till att de fungerar i drift. Baserad i Göteborg.",
    cvButton: "Ladda ner CV",
    cvFile: "Bilagor/CV.pdf",
    contactButton: "Kontakta mig",
    emailLabel: "E-post",
    apiLabel: "Sammanfattning av Khalid som ett API-svar",
    api: {
      roll: "Junior systemutvecklare",
      fokus: ["Backend", "Fullstack", "Applikation", "Integration", "Implementation"],
      stack: ["C#", "ASP.NET Core", "React", "SQL Server", "Azure"],
      ort: "Göteborg",
      söker: ["Fullstack", "Applikation", "Integration", "Implementation"],
      tillgänglig: true
    },
    about1: "Jag är systemvetare från Högskolan i Borås med inriktning mot backend- och systemutveckling. Jag har byggt och driftsatt applikationer i C# och .NET – med API-design, databaser och testning – i egna projekt, teamprojekt och under utbildningen.",
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
    allRepos: "Se alla repon på GitHub",
    contactLead: "Jag söker jobb inom fullstack, applikation, integration och implementation i Göteborgsområdet. Hör gärna av dig."
  },
  en: {
    pageTitle: "Khalid Hassan – Junior Software Engineer",
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
    role: "Junior software engineer – backend and systems",
    lead: "I build APIs, databases and systems in C# and .NET – and make sure they run reliably in production. Based in Gothenburg, Sweden.",
    cvButton: "Download resume",
    cvFile: "Bilagor/CV_EN.pdf",
    contactButton: "Contact me",
    emailLabel: "Email",
    apiLabel: "Summary of Khalid as an API response",
    api: {
      role: "Junior Software Engineer",
      focus: ["Backend", "Full-stack", "Applications", "Integration", "Implementation"],
      stack: ["C#", "ASP.NET Core", "React", "SQL Server", "Azure"],
      location: "Gothenburg, Sweden",
      lookingFor: ["Full-stack", "Applications", "Integration", "Implementation"],
      available: true
    },
    about1: "I hold a bachelor's degree in Informatics from the University of Borås, specializing in backend and systems development. I have built and deployed applications in C# and .NET – including API design, databases and testing – in personal projects, team projects and during my studies.",
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
    allRepos: "See all repositories on GitHub",
    contactLead: "I am looking for roles in full-stack development, applications, integration and implementation in the Gothenburg area. Feel free to get in touch."
  }
};

// ===== Projekt (nyast först) =====
// Lämna github/demo som null för att dölja knappen.
const projects = [
  {
    name: "Jobbansökningsagent",
    nameEn: "Job Application Agent",
    image: null,
    tech: ["C#", ".NET 10", "Claude API", "JobTech API", "Azure SQL", "React", "Vite"],
    github: null, // t.ex. "https://github.com/Khalid1754/JobAgent-2-"
    demo: null,
    sv: {
      subtitle: "AI-agent för jobbsökning", period: "Oktober 2026 – pågående",
      summary: "En AI-agent som hämtar lediga jobb från Platsbanken och listar de annonser som matchar mina kompetenser och mitt CV.",
      points: ["Hämtar annonser via JobTechs API för Göteborgsområdet.", "Använder Claude API för att bedöma hur väl varje annons matchar CV:t."]
    },
    en: {
      subtitle: "AI agent for job searching", period: "October 2026 – Present",
      summary: "An AI agent that fetches open positions from Platsbanken, the Swedish public job board, and lists the ads that match my skills and resume.",
      points: ["Fetches job ads for the Gothenburg area through the JobTech API.", "Uses the Claude API to assess how well each ad matches the resume."]
    }
  },
  {
    name: "MarketPulse",
    image: null,
    tech: ["C#", "ASP.NET Core Web API", "Azure SQL", "React", "Vite"],
    github: null, // t.ex. "https://github.com/Khalid1754/MarketPulse.API"
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
    github: null, // t.ex. "https://github.com/Khalid1754/LiFeDenTal"
    demo: null,
    sv: {
      subtitle: "Journalsystem för tandvård", period: "Juni 2026 – pågående",
      summary: "Ett journalsystem för tandvårdskliniker med patientjournaler och bokning.",
      points: ["Designade och byggde RESTful API:er för patientdata och bokningsflöden.", "Använder SignalR för realtidskommunikation mellan server och klient.", "Modellerade databasen med CRUD för journaler och bokningar."]
    },
    en: {
      subtitle: "Dental records system", period: "June 2026 – Present",
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
