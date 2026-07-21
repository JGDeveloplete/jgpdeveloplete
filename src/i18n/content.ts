/* ============================================================
   Contenido bilingüe del portafolio.
   Edita aquí los textos: cambiar esto actualiza toda la web.
   Los [COMPLETAR] marcan datos reales que faltan.
   ============================================================ */

export type Lang = "es" | "en";

export interface Project {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  repo?: string;
}

export interface Best {
  event: string;
  mark: string;
  note: string;
}

export interface Achievement {
  year: string;
  title: string;
  detail: string;
}

export interface ExperienceItem {
  period: string;
  role: string;
  place: string;
  detail: string;
}

export interface Content {
  nav: { about: string; projects: string; stack: string; sport: string; experience: string; contact: string };
  hero: {
    eyebrow: string;
    name: string;
    roles: string[];
    lead: string;
    ctaProjects: string;
    ctaContact: string;
  };
  about: { title: string; eyebrow: string; paragraphs: string[]; facts: { label: string; value: string }[] };
  projects: { title: string; eyebrow: string; sub: string; items: Project[] };
  stack: { title: string; eyebrow: string; groups: { name: string; items: string[] }[] };
  sport: {
    title: string;
    eyebrow: string;
    sub: string;
    bestsTitle: string;
    bests: Best[];
    achievements: Achievement[];
  };
  experience: { title: string; eyebrow: string; items: ExperienceItem[] };
  contact: {
    title: string;
    eyebrow: string;
    lead: string;
    email: string;
    ctaEmail: string;
    socials: { label: string; url: string }[];
  };
  footer: { tagline: string };
}

const shared = {
  // Email del CV deportivo. Cámbialo si prefieres jgpathletics@gmail.com.
  email: "jose.giner18@gmail.com",
  socials: [
    { label: "GitHub", url: "https://github.com/JGDeveloplete" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/jose-giner-p%C3%A9rez-6107b41a1/" },
    { label: "Instagram", url: "https://www.instagram.com/jgsprinter/" },
    { label: "YouTube", url: "https://www.youtube.com/@jgsprinter" },
    // CONFIRMAR: enlace supuesto por el mismo usuario que Instagram/YouTube.
    { label: "TikTok", url: "https://www.tiktok.com/@jgsprinter" },
    { label: "World Athletics", url: "https://worldathletics.org/athletes/spain/jose-giner-14879964" },
  ],
};

// Marcas personales (del CV deportivo). i = pista cubierta, w = viento a favor.
const bestsEs: Best[] = [
  { event: "100 m", mark: "10.78", note: "(+0.6) · 2022 · 10.64w" },
  { event: "200 m", mark: "21.80", note: "(0.0) · 2022 · 22.57 indoor" },
  { event: "60 m", mark: "7.12", note: "indoor · 2021" },
  { event: "400 m", mark: "51.23", note: "2021 · 51.45 indoor" },
];

const bestsEn: Best[] = [
  { event: "100 m", mark: "10.78", note: "(+0.6) · 2022 · 10.64w" },
  { event: "200 m", mark: "21.80", note: "(0.0) · 2022 · 22.57 indoor" },
  { event: "60 m", mark: "7.12", note: "indoor · 2021" },
  { event: "400 m", mark: "51.23", note: "2021 · 51.45 indoor" },
];

export const content: Record<Lang, Content> = {
  es: {
    nav: { about: "Sobre mí", projects: "Proyectos", stack: "Stack", sport: "Atletismo", experience: "Experiencia", contact: "Contacto" },
    hero: {
      eyebrow: "Ingeniero Informático · Velocista",
      name: "José Giner Pérez",
      roles: ["Ingeniero Informático", "Velocista 100 m / 200 m", "Desarrollador de software"],
      lead:
        "Compito en 100 y 200 metros y escribo código con la misma receta: constancia, disciplina y resiliencia dentro y fuera de la pista.",
      ctaProjects: "Ver proyectos",
      ctaContact: "Hablemos",
    },
    about: {
      eyebrow: "Sobre mí",
      title: "Dos disciplinas, la misma mentalidad",
      paragraphs: [
        "Soy velocista especializado en 100 y 200 metros, con experiencia en competiciones autonómicas, nacionales e internacionales. Desde 2020 compito en clubes de Primera División y División de Honor, la máxima categoría del atletismo español por equipos.",
        "Formo parte del programa de tecnificación de la Selección Valenciana desde 2018 y he sido reconocido como deportista de élite entre 2021 y marzo de 2025.",
        "Esa forma de entrenar —medir, repetir, corregir y volver a empezar— es la misma con la que me siento a programar. [COMPLETAR: añade aquí tu lado ingeniero: qué te gusta construir y en qué quieres especializarte.]",
      ],
      facts: [
        { label: "Ubicación", value: "Sant Joan d'Alacant, Alicante" },
        { label: "Deporte", value: "Velocidad 100 m / 200 m · C.A. Cordobés" },
        { label: "Formación", value: "[COMPLETAR: Grado en Ingeniería Informática — universidad y año]" },
        { label: "Idiomas", value: "Español · Inglés · [COMPLETAR]" },
      ],
    },
    projects: {
      eyebrow: "Portfolio",
      title: "Proyectos",
      sub: "Una selección de cosas que he construido. [COMPLETAR: añade tus otros proyectos.]",
      items: [
        {
          title: "Kaireté",
          description:
            "Aplicación de agenda para atletas y entrenadores: planificación de entrenamientos, sesiones y seguimiento. Nace de mi propia experiencia compitiendo.",
          tags: ["TypeScript", "Next.js", "Prisma", "PostgreSQL", "Docker"],
          link: "",
          repo: "",
        },
        {
          title: "[COMPLETAR: Proyecto 2]",
          description: "[COMPLETAR: qué resuelve, tu papel y el resultado.]",
          tags: ["[Tecnología]", "[Tecnología]"],
          link: "",
          repo: "",
        },
        {
          title: "[COMPLETAR: Proyecto 3]",
          description: "[COMPLETAR: qué resuelve, tu papel y el resultado.]",
          tags: ["[Tecnología]", "[Tecnología]"],
          link: "",
          repo: "",
        },
      ],
    },
    stack: {
      eyebrow: "Herramientas",
      title: "Stack tecnológico",
      groups: [
        { name: "Lenguajes", items: ["TypeScript", "JavaScript", "Python", "[COMPLETAR]"] },
        { name: "Frontend", items: ["React", "Next.js", "Astro", "HTML/CSS"] },
        { name: "Backend", items: ["Node.js", "Prisma", "PostgreSQL", "[COMPLETAR]"] },
        { name: "Herramientas", items: ["Git", "Docker", "Linux", "[COMPLETAR]"] },
      ],
    },
    sport: {
      eyebrow: "Atletismo",
      title: "Trayectoria deportiva",
      sub: "Velocista especializado en 100 y 200 metros. Deportista de élite (2021–2025) y miembro del programa de tecnificación de la Selección Valenciana desde 2018.",
      bestsTitle: "Marcas personales",
      bests: bestsEs,
      achievements: [
        {
          year: "2025–26",
          title: "Campeón y subcampeón autonómico absoluto — 100 m",
          detail: "Bronce autonómico universitario en 200 m · 4º autonómico absoluto en 200 m · 4º absoluto Indoor 200 m · Subcampeón autonómico universitario 4 × 100 m.",
        },
        {
          year: "2022",
          title: "Campeón autonómico universitario — 100 m y 4 × 100 m",
          detail: "Subcampeón autonómico absoluto en 100 m y universitario en 200 m · Finalista del Campeonato de España universitario: 6º en 100 m y 7º en 200 m.",
        },
        {
          year: "2021",
          title: "Subcampeón de España Sub23 — 4 × 100 m",
          detail: "Semifinalista del Cto. de España Sub23 en 100 m (18º) y 200 m (21º) · Semifinalista Indoor Sub23 en 60 m (13º) · Campeón autonómico universitario 4 × 100 m · Bronce autonómico universitario 100 m.",
        },
        {
          year: "2020",
          title: "Semifinalista del Cto. de España Sub23 — 100 m",
          detail: "13º en la general · Subcampeón autonómico Sub23 en 100 m · Bronce autonómico Sub23 en 200 m.",
        },
        {
          year: "2019",
          title: "Bronce autonómico absoluto Indoor — 200 m",
          detail: "Consolidación en categoría absoluta en pista cubierta.",
        },
        {
          year: "2017",
          title: "Subcampeón autonómico Sub20 — 200 m",
          detail: "Subcampeón del meeting Toni Bonet en 400 m.",
        },
      ],
    },
    experience: {
      eyebrow: "Recorrido",
      title: "Experiencia",
      items: [
        { period: "[Año–Año]", role: "[COMPLETAR: puesto]", place: "[Empresa]", detail: "[COMPLETAR: qué hiciste y con qué impacto.]" },
        { period: "[Año–Año]", role: "[COMPLETAR: puesto o formación]", place: "[Lugar]", detail: "[COMPLETAR]" },
      ],
    },
    contact: {
      eyebrow: "Contacto",
      title: "Hablemos",
      lead: "¿Un proyecto, una oportunidad o un patrocinio? Escríbeme.",
      email: shared.email,
      ctaEmail: "Enviar un email",
      socials: shared.socials,
    },
    footer: { tagline: "Ingeniero Informático y Velocista" },
  },

  en: {
    nav: { about: "About", projects: "Projects", stack: "Stack", sport: "Athletics", experience: "Experience", contact: "Contact" },
    hero: {
      eyebrow: "Software Engineer · Sprinter",
      name: "José Giner Pérez",
      roles: ["Software Engineer", "100 m / 200 m Sprinter", "Software Developer"],
      lead:
        "I race the 100 and 200 metres and write code with the same recipe: consistency, discipline and resilience, on and off the track.",
      ctaProjects: "View projects",
      ctaContact: "Get in touch",
    },
    about: {
      eyebrow: "About",
      title: "Two disciplines, one mindset",
      paragraphs: [
        "I'm a sprinter specialising in the 100 and 200 metres, with experience in regional, national and international competition. Since 2020 I've competed for clubs in Spain's First Division and División de Honor, the top tier of Spanish team athletics.",
        "I've been part of the Valencian Regional Team's talent development programme since 2018 and was recognised as an elite athlete from 2021 to March 2025.",
        "That way of training — measure, repeat, correct, start again — is exactly how I approach code. [COMPLETAR: add your engineering side: what you like building and where you want to specialise.]",
      ],
      facts: [
        { label: "Location", value: "Sant Joan d'Alacant, Alicante (Spain)" },
        { label: "Sport", value: "Sprints 100 m / 200 m · C.A. Cordobés" },
        { label: "Education", value: "[COMPLETAR: BSc in Computer Engineering — university and year]" },
        { label: "Languages", value: "Spanish · English · [COMPLETAR]" },
      ],
    },
    projects: {
      eyebrow: "Portfolio",
      title: "Projects",
      sub: "A selection of things I've built. [COMPLETAR: add your other projects.]",
      items: [
        {
          title: "Kaireté",
          description:
            "Scheduling app for athletes and coaches: training planning, sessions and tracking. Born out of my own experience as a competing athlete.",
          tags: ["TypeScript", "Next.js", "Prisma", "PostgreSQL", "Docker"],
          link: "",
          repo: "",
        },
        {
          title: "[COMPLETAR: Project 2]",
          description: "[COMPLETAR: what it solves, your role and the outcome.]",
          tags: ["[Tech]", "[Tech]"],
          link: "",
          repo: "",
        },
        {
          title: "[COMPLETAR: Project 3]",
          description: "[COMPLETAR: what it solves, your role and the outcome.]",
          tags: ["[Tech]", "[Tech]"],
          link: "",
          repo: "",
        },
      ],
    },
    stack: {
      eyebrow: "Tooling",
      title: "Tech stack",
      groups: [
        { name: "Languages", items: ["TypeScript", "JavaScript", "Python", "[COMPLETAR]"] },
        { name: "Frontend", items: ["React", "Next.js", "Astro", "HTML/CSS"] },
        { name: "Backend", items: ["Node.js", "Prisma", "PostgreSQL", "[COMPLETAR]"] },
        { name: "Tooling", items: ["Git", "Docker", "Linux", "[COMPLETAR]"] },
      ],
    },
    sport: {
      eyebrow: "Athletics",
      title: "Athletic background",
      sub: "Sprinter specialising in the 100 and 200 metres. Elite athlete status (2021–2025) and member of the Valencian Regional Team's talent programme since 2018.",
      bestsTitle: "Personal bests",
      bests: bestsEn,
      achievements: [
        {
          year: "2025–26",
          title: "Regional champion & runner-up (senior) — 100 m",
          detail: "Regional university bronze in 200 m · 4th regional senior 200 m · 4th senior indoor 200 m · Regional university runner-up 4 × 100 m.",
        },
        {
          year: "2022",
          title: "Regional university champion — 100 m and 4 × 100 m",
          detail: "Regional senior runner-up 100 m and university runner-up 200 m · Finalist at the Spanish University Championship: 6th in 100 m, 7th in 200 m.",
        },
        {
          year: "2021",
          title: "Spanish U23 runner-up — 4 × 100 m",
          detail: "Semi-finalist at the Spanish U23 Championship in 100 m (18th) and 200 m (21st) · Indoor U23 semi-finalist 60 m (13th) · Regional university champion 4 × 100 m · Regional university bronze 100 m.",
        },
        {
          year: "2020",
          title: "Spanish U23 Championship semi-finalist — 100 m",
          detail: "13th overall · Regional U23 runner-up 100 m · Regional U23 bronze 200 m.",
        },
        {
          year: "2019",
          title: "Regional senior indoor bronze — 200 m",
          detail: "Establishing myself in the senior category indoors.",
        },
        {
          year: "2017",
          title: "Regional U20 runner-up — 200 m",
          detail: "Runner-up at the Toni Bonet meeting in the 400 m.",
        },
      ],
    },
    experience: {
      eyebrow: "Path",
      title: "Experience",
      items: [
        { period: "[Year–Year]", role: "[COMPLETAR: role]", place: "[Company]", detail: "[COMPLETAR: what you did and its impact.]" },
        { period: "[Year–Year]", role: "[COMPLETAR: role or studies]", place: "[Place]", detail: "[COMPLETAR]" },
      ],
    },
    contact: {
      eyebrow: "Contact",
      title: "Let's talk",
      lead: "A project, an opportunity or a sponsorship? Drop me a line.",
      email: shared.email,
      ctaEmail: "Send an email",
      socials: shared.socials,
    },
    footer: { tagline: "Software Engineer & Sprinter" },
  },
};
