/* ============================================================
   Noé Pareti | Game Dev Portfolio (FR/EN)
   ============================================================ */

const URLS = {
  steam: "https://store.steampowered.com/app/4194550/ElectroFix_Simulator/",
  fab: "https://www.fab.com/listings/0da4dac5-8190-4b24-8a4c-5db19f417f56",
  fps: "https://www.youtube.com/watch?v=lxqgcCfjygo",
  pong: "https://www.youtube.com/watch?v=FeF9DL43HT0",
  gh: "https://github.com/Noe-prt/"
};

const I18N = {
  fr: {
    "nav.games": "Jeux",
    "nav.experience": "Parcours",
    "nav.skills": "Compétences",
    "nav.about": "À propos",
    "nav.contact": "Contact",
    "hero.status": "Disponible en stage de 6 mois · dès décembre 2026",
    "hero.kicker": "Game Developer · Unreal Engine / C++",
    "hero.sub": "J'ai sorti un jeu coopératif sur Steam en tant que seul développeur et publié un plugin multijoueur sur Fab. Gameplay, systèmes et réplication réseau sous Unreal Engine 5.",
    "hero.cta": "Voir mes jeux",
    "hero.cv": "Télécharger mon CV",
    "hud.steam": "Jeu sorti sur Steam",
    "hud.fab": "Plugin publié sur Fab",
    "hud.years": "Ans d'expérience sur Unreal Engine",
    "hud.stack": "Unreal Engine 5",
    "games.title": "Jeux & plugins",
    "games.sub": "Des projets livrés à de vrais joueurs et utilisateurs, de la conception à la publication.",
    "projects.title": "Autres projets",
    "projects.sub": "Prototypes multijoueur et moteurs écrits from scratch pour comprendre ce qui se passe sous le capot.",
    "experience.title": "Parcours",
    "skills.title": "Compétences",
    "about.title": "À propos",
    "about.body": "Étudiant à 42 Paris depuis novembre 2024, je développe des jeux sous Unreal Engine en parallèle de ma formation. Pendant mon stage chez Adzap, j'ai programmé seul ElectroFix Simulator, de la première ligne de code à la sortie sur Steam, en 3 mois. J'aime particulièrement le gameplay programming et le multijoueur : rendre une mécanique agréable à jouer, puis la faire tenir en réseau. Je recherche un stage de 6 mois à partir de décembre 2026 pour rejoindre une équipe de développement.",
    "contact.kicker": "Player 2 ?",
    "contact.title": "Travaillons ensemble",
    "contact.sub": "Je recherche un stage de 6 mois en Gameplay / Game Programming, disponible dès décembre 2026. Écrivez-moi !",
    "contact.cv": "CV (PDF)",
    "footer.text": "© 2026 Noé Pareti — HTML, CSS & JS.",
    "footer.web": "Aussi développeur web →",
    "link.steam": "Voir sur Steam",
    "link.fab": "Voir sur Fab",
    "link.video": "Vidéo",
    "link.github": "GitHub",
    "cv.file": "assets/cv/Noe-Pareti-CV-GameDev-FR.pdf"
  },
  en: {
    "nav.games": "Games",
    "nav.experience": "Background",
    "nav.skills": "Skills",
    "nav.about": "About",
    "nav.contact": "Contact",
    "hero.status": "Available for a 6-month internship · from December 2026",
    "hero.kicker": "Game Developer · Unreal Engine / C++",
    "hero.sub": "I shipped a co-op game on Steam as the sole developer and published a multiplayer plugin on Fab. Gameplay, systems and network replication in Unreal Engine 5.",
    "hero.cta": "See my games",
    "hero.cv": "Download my resume",
    "hud.steam": "Game released on Steam",
    "hud.fab": "Plugin published on Fab",
    "hud.years": "Years of Unreal Engine experience",
    "hud.stack": "Unreal Engine 5",
    "games.title": "Games & plugins",
    "games.sub": "Projects shipped to real players and users, from design to release.",
    "projects.title": "Other projects",
    "projects.sub": "Multiplayer prototypes and engines written from scratch to understand what happens under the hood.",
    "experience.title": "Background",
    "skills.title": "Skills",
    "about.title": "About",
    "about.body": "I've been studying at 42 Paris since November 2024 and building games in Unreal Engine alongside my studies. During my internship at Adzap, I programmed ElectroFix Simulator on my own, from the first line of code to the Steam release, in 3 months. I especially enjoy gameplay programming and multiplayer: making a mechanic feel good, then making it hold up over the network. I'm looking for a 6-month internship starting December 2026 to join a game development team.",
    "contact.kicker": "Player 2?",
    "contact.title": "Let's work together",
    "contact.sub": "I'm looking for a 6-month Gameplay / Game Programming internship, available from December 2026. Get in touch!",
    "contact.cv": "Resume (PDF)",
    "footer.text": "© 2026 Noé Pareti — HTML, CSS & JS.",
    "footer.web": "Also a web developer →",
    "link.steam": "View on Steam",
    "link.fab": "View on Fab",
    "link.video": "Video",
    "link.github": "GitHub",
    "cv.file": "assets/cv/Noe-Pareti-CV-GameDev-EN.pdf"
  }
};

const DATA = {
  fr: {
    featured: [
      {
        title: "ElectroFix Simulator",
        pills: [["pro", "Stage · Adzap"], ["live", "Sorti sur Steam"]],
        role: "Seul développeur · 3 mois",
        image: "assets/img/Electrofix.jpg",
        desc: "Jeu de simulation coopératif de réparation d'appareils électroniques : les joueurs reçoivent des ordres de réparation, diagnostiquent les pièces défectueuses et les remplacent contre la montre.",
        list: [
          "Programmation de tous les systèmes de gameplay et de la logique du jeu",
          "Multijoueur coopératif : réplication et architecture client-serveur",
          "Interfaces de jeu (ordres de réparation, pièces disponibles, HUD)",
          "Cycle de livraison complet : versioning Git, builds et publication Steam"
        ],
        stack: ["Unreal Engine 5", "C++", "Blueprint", "Réplication", "Steam"],
        links: [{ label: "link.steam", url: URLS.steam, primary: true }]
      },
      {
        title: "UMPS",
        pills: [["", "Plugin personnel"], ["live", "Publié sur Fab"]],
        role: "Ultimate Multiplayer Phone System",
        image: "assets/img/UMPS.jpg",
        desc: "Plugin Unreal Engine qui ajoute un smartphone utilisable en jeu, entièrement compatible multijoueur. Pensé pour être intégré facilement par d'autres développeurs dans leurs projets.",
        list: [
          "Applis répliquées : messages, appels vidéo, caméra, navigateur web, etc.",
          "Packagé et publié sur la marketplace Fab"
        ],
        stack: ["Unreal Engine 5", "C++", "Blueprint", "Réplication", "UMG"],
        links: [{ label: "link.fab", url: URLS.fab, primary: true }]
      }
    ],
    projects: [
      { title: "FPS multijoueur", kind: "Projet personnel", image: "https://img.youtube.com/vi/lxqgcCfjygo/hqdefault.jpg", video: true,
        desc: "FPS multijoueur inspiré de CS:GO, développé pour maîtriser le C++ et le système de réplication d'Unreal Engine.",
        stack: ["Unreal Engine", "C++", "Réseau"], links: [{ label: "link.video", url: URLS.fps }] },
      { title: "ft_transcendence", kind: "École 42", image: "https://img.youtube.com/vi/FeF9DL43HT0/hqdefault.jpg", video: true,
        desc: "Pong multijoueur en temps réel dans le navigateur, avec parties en ligne via WebSocket et authentification des joueurs.",
        stack: ["TypeScript", "WebSocket", "Next.js"], links: [{ label: "link.video", url: URLS.pong }, { label: "link.github", url: URLS.gh + "ft_transcendence" }] },
      { title: "Cub3D", kind: "École 42", image: "assets/img/Cub3D.jpg",
        desc: "Moteur de raycasting en C : rendu d'un labyrinthe en 3D à partir d'une carte 2D, façon Wolfenstein 3D.",
        stack: ["C", "Raycasting", "MiniLibX"], links: [{ label: "link.github", url: URLS.gh + "42-Cub3D" }] },
      { title: "so_long", kind: "École 42", image: "assets/img/so_long.svg",
        desc: "Jeu 2D en vue de dessus en C : parsing et validation de carte, sprites, objets à collecter et sortie.",
        stack: ["C", "MiniLibX", "2D"], links: [{ label: "link.github", url: URLS.gh + "so_long" }] }
    ],
    timeline: [
      { period: "Déc. 2026 → ?", role: "Stage Gameplay / Game Programmer", org: "Votre studio ?", open: true,
        desc: "À la recherche d'un stage de 6 mois à partir de décembre 2026. Envie de rejoindre une équipe et de contribuer à un jeu en production." },
      { period: "Févr. 2026 → Juil. 2026", role: "Développeur de jeux vidéo · Stage 6 mois", org: "Adzap · startup de jeux vidéo · Paris",
        desc: "Seul développeur d'ElectroFix Simulator, de la conception à la sortie sur Steam en 3 mois : gameplay, réplication multijoueur, UI et publication." },
      { period: "Nov. 2024 → aujourd'hui", role: "En cours : Expert en architecture informatique · RNCP niveau 7", org: "42 Paris",
        desc: "Tronc commun validé : C, C++, algorithmique, systèmes Unix, réseau, Docker. Pédagogie par projets et peer-learning." }
    ],
    skills: [
      { title: "Moteurs", main: ["Unreal Engine 5"], list: ["Unity", "Godot"] },
      { title: "Langages", main: ["C++", "Blueprint"], list: ["C", "C#", "GDScript", "TypeScript"] },
      { title: "Multijoueur", main: ["Réplication"], list: ["Architecture client-serveur", "Synchronisation temps réel", "WebSocket"] },
      { title: "Gameplay", main: ["Gameplay programming"], list: ["Systèmes de jeu", "UI / UMG", "Développement de plugins"] },
      { title: "Outils", main: ["Git / GitHub"], list: ["Visual Studio", "Steam", "Fab", "Docker", "Linux"] },
      { title: "Soft skills", main: ["Autonomie"], list: ["Travail en équipe", "Peer-learning", "Code review", "Résolution de problèmes"] }
    ],
    facts: [
      ["Localisation", "Paris"],
      ["Disponibilité", "Décembre 2026 · 6 mois"],
      ["Langues", "Français (natif), anglais (professionnel)"],
      ["Hors écran", "Tennis, football, guitare"]
    ]
  },
  en: {
    featured: [
      {
        title: "ElectroFix Simulator",
        pills: [["pro", "Internship · Adzap"], ["live", "Released on Steam"]],
        role: "Sole developer · 3 months",
        image: "assets/img/Electrofix.jpg",
        desc: "Co-op simulation game about repairing electronic devices: players take repair orders, diagnose broken parts and swap them against the clock.",
        list: [
          "Programmed every gameplay system and the full game logic",
          "Co-op multiplayer: replication and client-server architecture",
          "In-game interfaces (repair orders, available parts, HUD)",
          "Full release cycle: Git versioning, builds and Steam publishing"
        ],
        stack: ["Unreal Engine 5", "C++", "Blueprint", "Replication", "Steam"],
        links: [{ label: "link.steam", url: URLS.steam, primary: true }]
      },
      {
        title: "UMPS",
        pills: [["", "Personal plugin"], ["live", "Published on Fab"]],
        role: "Ultimate Multiplayer Phone System",
        image: "assets/img/UMPS.jpg",
        desc: "Unreal Engine plugin that adds a usable in-game smartphone, fully compatible with multiplayer. Built to be easily integrated by other developers into their own projects.",
        list: [
          "Replicated apps: messages, video calls, camera, web browser and more",
          "Packaged and published on the Fab marketplace"
        ],
        stack: ["Unreal Engine 5", "C++", "Blueprint", "Replication", "UMG"],
        links: [{ label: "link.fab", url: URLS.fab, primary: true }]
      }
    ],
    projects: [
      { title: "Multiplayer FPS", kind: "Personal project", image: "https://img.youtube.com/vi/lxqgcCfjygo/hqdefault.jpg", video: true,
        desc: "CS:GO-inspired multiplayer FPS, built to master C++ and Unreal Engine's replication system.",
        stack: ["Unreal Engine", "C++", "Networking"], links: [{ label: "link.video", url: URLS.fps }] },
      { title: "ft_transcendence", kind: "42 School", image: "https://img.youtube.com/vi/FeF9DL43HT0/hqdefault.jpg", video: true,
        desc: "Real-time multiplayer Pong in the browser, with online matches over WebSocket and player authentication.",
        stack: ["TypeScript", "WebSocket", "Next.js"], links: [{ label: "link.video", url: URLS.pong }, { label: "link.github", url: URLS.gh + "ft_transcendence" }] },
      { title: "Cub3D", kind: "42 School", image: "assets/img/Cub3D.jpg",
        desc: "Raycasting engine in C: renders a 3D maze from a 2D map, Wolfenstein 3D style.",
        stack: ["C", "Raycasting", "MiniLibX"], links: [{ label: "link.github", url: URLS.gh + "42-Cub3D" }] },
      { title: "so_long", kind: "42 School", image: "assets/img/so_long.svg",
        desc: "2D top-down game in C: map parsing and validation, sprites, collectibles and exit.",
        stack: ["C", "MiniLibX", "2D"], links: [{ label: "link.github", url: URLS.gh + "so_long" }] }
    ],
    timeline: [
      { period: "Dec 2026 → ?", role: "Gameplay / Game Programmer Intern", org: "Your studio?", open: true,
        desc: "Looking for a 6-month internship starting December 2026. Eager to join a team and contribute to a game in production." },
      { period: "Feb 2026 → Jul 2026", role: "Game Developer · 6-month Internship", org: "Adzap · video game startup · Paris",
        desc: "Sole developer of ElectroFix Simulator, from design to Steam release in 3 months: gameplay, multiplayer replication, UI and publishing." },
      { period: "Nov 2024 → present", role: "Pursuing IT Architecture Expert · RNCP level 7", org: "42 Paris",
        desc: "Completed common core: C, C++, algorithms, Unix systems, networking, Docker. Project-based, peer-to-peer learning." }
    ],
    skills: [
      { title: "Engines", main: ["Unreal Engine 5"], list: ["Unity", "Godot"] },
      { title: "Languages", main: ["C++", "Blueprint"], list: ["C", "C#", "GDScript", "TypeScript"] },
      { title: "Multiplayer", main: ["Replication"], list: ["Client-server architecture", "Real-time synchronization", "WebSocket"] },
      { title: "Gameplay", main: ["Gameplay programming"], list: ["Game systems", "UI / UMG", "Plugin development"] },
      { title: "Tools", main: ["Git / GitHub"], list: ["Visual Studio", "Steam", "Fab", "Docker", "Linux"] },
      { title: "Soft skills", main: ["Autonomy"], list: ["Teamwork", "Peer-learning", "Code review", "Problem solving"] }
    ],
    facts: [
      ["Location", "Paris"],
      ["Availability", "December 2026 · 6 months"],
      ["Languages", "French (native), English (professional)"],
      ["Off screen", "Tennis, football, guitar"]
    ]
  }
};

/* ============================================================
   Render
   ============================================================ */

const esc = s => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const stackHTML = s => `<div class="stack">${s.map(x => `<span>${esc(x)}</span>`).join("")}</div>`;

function renderFeatured(lang) {
  const t = I18N[lang];
  document.getElementById("featured").innerHTML = DATA[lang].featured.map(g => `
    <article class="feature reveal">
      <div class="feature-media"><img src="${g.image}" alt="${esc(g.title)}" loading="lazy" /></div>
      <div class="feature-body">
        <div class="tag-row">${g.pills.map(([k, v]) => `<span class="pill ${k ? "pill-" + k : ""}">${esc(v)}</span>`).join("")}</div>
        <h3 class="feature-title">${esc(g.title)}</h3>
        <p class="feature-role">${esc(g.role)}</p>
        <p class="feature-desc">${esc(g.desc)}</p>
        <ul class="feature-list">${g.list.map(x => `<li>${esc(x)}</li>`).join("")}</ul>
        ${stackHTML(g.stack)}
        <div class="feature-links">${g.links.map(l => `<a class="btn ${l.primary ? "btn-primary" : "btn-ghost"}" href="${l.url}" target="_blank" rel="noopener noreferrer">${t[l.label]}</a>`).join("")}</div>
      </div>
    </article>`).join("");
}

function renderProjects(lang) {
  const t = I18N[lang];
  document.getElementById("projects-grid").innerHTML = DATA[lang].projects.map(p => `
    <article class="card reveal">
      <a class="card-media" href="${p.links[0].url}" target="_blank" rel="noopener noreferrer" aria-label="${esc(p.title)}">
        <img src="${p.image}" alt="" loading="lazy" />${p.video ? '<span class="play" aria-hidden="true"></span>' : ""}
      </a>
      <div class="card-body">
        <p class="card-kind">${esc(p.kind)}</p>
        <h3 class="card-title">${esc(p.title)}</h3>
        <p class="card-desc">${esc(p.desc)}</p>
        ${stackHTML(p.stack)}
        <div class="card-links">${p.links.map(l => `<a href="${l.url}" target="_blank" rel="noopener noreferrer">${t[l.label]}</a>`).join("")}</div>
      </div>
    </article>`).join("");
}

function renderTimeline(lang) {
  document.getElementById("timeline").innerHTML = DATA[lang].timeline.map(e => `
    <div class="tl-item reveal${e.open ? " open" : ""}">
      <p class="tl-period">${esc(e.period)}</p>
      <h3 class="tl-role">${esc(e.role)}</h3>
      <p class="tl-org">${esc(e.org)}</p>
      <p class="tl-desc">${esc(e.desc)}</p>
    </div>`).join("");
}

function renderSkills(lang) {
  document.getElementById("skills-grid").innerHTML = DATA[lang].skills.map((s, i) => `
    <div class="skill-card reveal">
      <h3><span>0${i + 1}</span>${esc(s.title)}</h3>
      <div class="chips">${s.main.map(x => `<span class="main">${esc(x)}</span>`).join("")}${s.list.map(x => `<span>${esc(x)}</span>`).join("")}</div>
    </div>`).join("");
}

function renderFacts(lang) {
  document.getElementById("about-facts").innerHTML = DATA[lang].facts.map(([k, v]) => `<li><b>${esc(k)}</b>${esc(v)}</li>`).join("");
}

/* ============================================================
   Reveal on scroll
   ============================================================ */

let observer = null;
function observeReveals() {
  const els = document.querySelectorAll(".reveal:not(.in)");
  if (!("IntersectionObserver" in window)) { els.forEach(el => el.classList.add("in")); return; }
  if (!observer) {
    observer = new IntersectionObserver(entries => {
      entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add("in"); observer.unobserve(en.target); } });
    }, { threshold: 0.12 });
  }
  els.forEach(el => observer.observe(el));
}

/* ============================================================
   i18n
   ============================================================ */

function applyLang(lang) {
  const t = I18N[lang];
  document.documentElement.lang = lang;
  document.documentElement.dataset.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (t[key]) el.textContent = t[key];
  });
  document.querySelectorAll(".lang-btn").forEach(btn => {
    const active = btn.dataset.lang === lang;
    btn.classList.toggle("active", active);
    btn.setAttribute("aria-pressed", String(active));
  });
  ["cv-link", "cv-link-2"].forEach(id => { const a = document.getElementById(id); if (a) a.href = t["cv.file"]; });
  renderFeatured(lang);
  renderProjects(lang);
  renderTimeline(lang);
  renderSkills(lang);
  renderFacts(lang);
  observeReveals();
  try { localStorage.setItem("lang", lang); } catch (e) {}
}

document.addEventListener("DOMContentLoaded", () => {
  let saved = null;
  try { saved = localStorage.getItem("lang"); } catch (e) {}
  if (!saved) saved = (navigator.language || "fr").toLowerCase().startsWith("fr") ? "fr" : "en";
  applyLang(saved === "en" ? "en" : "fr");

  document.querySelectorAll(".lang-btn").forEach(btn =>
    btn.addEventListener("click", () => applyLang(btn.dataset.lang === "en" ? "en" : "fr")));

  const nav = document.getElementById("nav");
  const onScroll = () => nav.classList.toggle("scrolled", window.scrollY > 20);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
});
