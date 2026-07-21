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

/** Proyecto destacado: se muestra en grande, con más contexto. */
export interface FeaturedProject {
  status: string;
  title: string;
  tagline: string;
  /** Bloques de contexto: el problema, tu papel, qué has aprendido… */
  blocks: { label: string; text: string }[];
  /** Decisiones técnicas o retos concretos. Es lo que demuestra criterio. */
  highlights: string[];
  tags: string[];
  link?: string;
  repo?: string;
}

/** Cómo trabajas: demuestra forma de pensar cuando aún hay pocos proyectos. */
export interface ApproachItem {
  title: string;
  text: string;
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

/**
 * Foto de la galería. `src` va SIN extensión: la web sirve .webp y usa .jpg
 * de respaldo. Genera ambas con `npm run fotos`.
 */
export interface Photo {
  src: string;
  alt: string;
  caption: string;
  /** "wide" = apaisada (3:2) · "tall" = vertical (2:3). Determina en cuál de
   *  los dos carruseles aparece, para que llene el marco sin recortes. */
  format: "wide" | "tall";
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
  approach: { title: string; eyebrow: string; sub: string; items: ApproachItem[] };
  projects: {
    title: string;
    eyebrow: string;
    sub: string;
    featured: FeaturedProject;
    /** Proyectos adicionales. Vacío por ahora: añadir aquí los futuros. */
    items: Project[];
    /** Nota que se muestra cuando aún no hay más proyectos. */
    moreSoon: string;
  };
  stack: { title: string; eyebrow: string; groups: { name: string; items: string[] }[] };
  sport: {
    title: string;
    eyebrow: string;
    sub: string;
    bestsTitle: string;
    bests: Best[];
    galleryTitle: string;
    gallery: Photo[];
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
  email: "jgpathletics@gmail.com",
  socials: [
    { label: "GitHub", url: "https://github.com/JGDeveloplete" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/jose-giner-p%C3%A9rez-6107b41a1/" },
    { label: "Instagram", url: "https://www.instagram.com/jgsprinter/" },
    { label: "YouTube", url: "https://www.youtube.com/@jgsprinter" },
    { label: "TikTok", url: "https://www.tiktok.com/@jgsprinter" },
    { label: "World Athletics", url: "https://worldathletics.org/athletes/spain/jose-giner-14879964" },
  ],
};

// Marcas personales. Contrastadas con el perfil oficial de World Athletics.
// w = viento a favor (marca no homologable).
const bestsEs: Best[] = [
  { event: "100 m", mark: "10.72", note: "2026 · 10.64w en 2022" },
  { event: "200 m", mark: "21.80", note: "2022 · 21.58w en 2026" },
  { event: "200 m (i)", mark: "22.57", note: "indoor · 2022" },
  { event: "60 m", mark: "7.12", note: "indoor · 2021" },
  { event: "400 m", mark: "51.23", note: "2021 · 51.45 indoor" },
  { event: "4 × 100 m", mark: "40.80", note: "relevo · Durango, 2026" },
];

const bestsEn: Best[] = [
  { event: "100 m", mark: "10.72", note: "2026 · 10.64w in 2022" },
  { event: "200 m", mark: "21.80", note: "2022 · 21.58w in 2026" },
  { event: "200 m (i)", mark: "22.57", note: "indoor · 2022" },
  { event: "60 m", mark: "7.12", note: "indoor · 2021" },
  { event: "400 m", mark: "51.23", note: "2021 · 51.45 indoor" },
  { event: "4 × 100 m", mark: "40.80", note: "relay · Durango, 2026" },
];

export const content: Record<Lang, Content> = {
  es: {
    nav: { about: "Sobre mí", projects: "Proyectos", stack: "Stack", sport: "Atletismo", experience: "Formación", contact: "Contacto" },
    hero: {
      eyebrow: "Ingeniero Informático · Velocista",
      name: "Jose Giner Pérez",
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
        { label: "Formación", value: "Ingeniería Informática (en curso) · Ingeniería Multimedia · GS en DAM" },
        { label: "Idiomas", value: "Español (nativo) · Inglés B1 certificado" },
      ],
    },
    approach: {
      eyebrow: "Método",
      title: "Cómo trabajo",
      sub: "Entrenar te enseña que el resultado es consecuencia del proceso. Programo con la misma idea.",
      items: [
        {
          title: "Primero entender, luego escribir",
          text: "Antes de teclear intento tener claro qué problema resuelvo y para quién. Un requisito mal entendido cuesta más que cualquier bug.",
        },
        {
          title: "Medir y corregir",
          text: "En la pista se cronometra todo: se mide, se compara y se ajusta. Con el código igual: pruebo, observo el resultado real y corrijo, en vez de asumir que funciona.",
        },
        {
          title: "Constancia sobre inspiración",
          text: "Los proyectos, como las temporadas, se ganan en el trabajo repetido: avances pequeños, documentados y sostenidos en el tiempo.",
        },
      ],
    },
    projects: {
      eyebrow: "Portfolio",
      title: "Proyectos",
      sub: "Prefiero enseñar pocos proyectos y bien explicados que una lista larga sin fondo.",
      featured: {
        status: "En desarrollo",
        title: "Kaireté",
        tagline: "Agenda y planificación para compaginar entrenamientos, estudios y competiciones.",
        blocks: [
          {
            label: "El problema",
            text: "Compaginar entrenamientos, competiciones y estudios es un caos de calendarios sueltos. Como atleta lo vivo en primera persona: no encontraba una herramienta que juntara la planificación deportiva con el día a día.",
          },
          {
            label: "Mi papel",
            text: "Proyecto propio, de principio a fin: diseño del modelo de datos, backend, interfaz y despliegue. El código se mantiene privado mientras sigo desarrollándolo de cara a un lanzamiento.",
          },
          {
            label: "Qué me ha enseñado",
            text: "[COMPLETAR: lo más valioso de este apartado. Cuenta un problema concreto que te encontraste y cómo lo resolviste — eso es lo que de verdad demuestra que eres ingeniero.]",
          },
        ],
        highlights: [
          "Modelo de datos relacional con Prisma sobre PostgreSQL.",
          "Entorno reproducible con Docker para que el despliegue no dependa de mi máquina.",
          "[COMPLETAR: añade 1–2 decisiones técnicas que tomaste y por qué.]",
        ],
        tags: ["TypeScript", "Next.js", "Prisma", "PostgreSQL", "Docker"],
        link: "",
        repo: "",
      },
      items: [],
      moreSoon:
        "Estoy construyendo mi catálogo de proyectos. Los siguientes irán apareciendo aquí.",
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
      sub: "Velocista especializado en 100 y 200 metros, en competición activa. Deportista de élite (2021–2025) y miembro del programa de tecnificación de la Selección Valenciana desde 2018. En 2026 he rebajado mi marca personal de 100 m hasta 10.72.",
      bestsTitle: "Marcas personales",
      bests: bestsEs,
      galleryTitle: "En la pista",
      // Añade aquí las fotos tras pasarlas por `npm run fotos`.
      // `src` sin extensión; el alt describe la imagen (accesibilidad y SEO).
      gallery: [
        // --- Verticales: carrusel de presentación (hero) ---
        {
          src: "/atletismo/coria-front-face",
          alt: "Jose Giner de pie en la pista con la equipación de competición",
          caption: "Meeting de Coria",
          format: "tall",
        },
        {
          src: "/atletismo/memorial-la-rioja-trofeo-100",
          alt: "Jose Giner sosteniendo el trofeo de los 100 metros del Memorial de La Rioja",
          caption: "Trofeo de 100 m · Memorial de La Rioja",
          format: "tall",
        },
        {
          src: "/atletismo/salida-explosiva",
          alt: "Jose Giner impulsándose desde los tacos de salida bajo un cielo azul",
          caption: "Explosión en la salida",
          format: "tall",
        },
        {
          src: "/atletismo/meeting-coria-en-tacos",
          alt: "Jose Giner concentrado en los tacos, junto a sus rivales, antes de la salida",
          caption: "En tacos · Meeting de Coria",
          format: "tall",
        },
        {
          src: "/atletismo/meeting-coria-recta",
          alt: "Jose Giner corriendo por la pista con el dorsal 11",
          caption: "En carrera · Meeting de Coria",
          format: "tall",
        },
        {
          src: "/atletismo/cordoba-salida-200",
          alt: "Jose Giner colocándose en los tacos para una carrera de 200 metros",
          caption: "Salida de 200 m · Córdoba",
          format: "tall",
        },
        {
          src: "/atletismo/universitario-autonomico-100-2022",
          alt: "Jose Giner en la pista durante el campeonato autonómico universitario",
          caption: "Autonómico universitario · 100 m",
          format: "tall",
        },

        // --- Apaisadas: carrusel de la sección de atletismo ---
        {
          src: "/atletismo/la-nucia-salida-de-tacos",
          alt: "Jose Giner saliendo de los tacos de salida en la pista de La Nucía",
          caption: "Salida de tacos · La Nucía",
          format: "wide",
        },
        {
          src: "/atletismo/campeon-autonomico-universitario",
          alt: "Jose Giner con la medalla del campeonato autonómico universitario",
          caption: "Campeón autonómico universitario",
          format: "wide",
        },
        {
          src: "/atletismo/universitario-autonomico-2026",
          alt: "Jose Giner celebrando con los brazos flexionados tras competir con la Universidad de Alicante",
          caption: "Autonómico universitario · 2026",
          format: "wide",
        },
        {
          src: "/atletismo/universitario-ua-aceleracion",
          alt: "Jose Giner acelerando bajo la lluvia con la equipación de la Universidad de Alicante",
          caption: "Con la UA, bajo la lluvia",
          format: "wide",
        },
        {
          src: "/atletismo/universitario-ua-murcia-200",
          alt: "Jose Giner celebrando tras una carrera de 200 metros en Murcia",
          caption: "200 m · Murcia",
          format: "wide",
        },
        {
          src: "/atletismo/universitario-ua-murcia-salida",
          alt: "Jose Giner saliendo de los tacos en el campeonato universitario de Murcia",
          caption: "Salida · Murcia",
          format: "wide",
        },
        {
          src: "/atletismo/colocandose-en-tacos",
          alt: "Jose Giner colocándose en los tacos de salida en la pista",
          caption: "Colocándose en tacos",
          format: "wide",
        },
      ],
      achievements: [
        {
          year: "2026",
          title: "Campeón autonómico universitario — 100 m",
          detail: "Subcampeón autonómico universitario en 4 × 100 m mixto · Victoria en el meeting «II Memorial Antonio Moreno de Frutos».",
        },
        {
          year: "2025",
          title: "Campeón autonómico universitario — 100 m",
          detail: "Subcampeón autonómico absoluto también en 100 m · Finalista autonómico absoluto en 200 m (aire libre e indoor) · Subcampeón autonómico universitario en 4 × 100 m y Bronce universitario en 200 m.",
        },
        {
          year: "2022",
          title: "Campeón autonómico universitario — 100 m y 4 × 100 m",
          detail: "Subcampeón autonómico absoluto en 100 m y universitario en 200 m · Finalista del Campeonato de España universitario en 100 y 200 m.",
        },
        {
          year: "2021",
          title: "Subcampeón de España Sub23 — 4 × 100 m",
          detail: "Semifinalista del Campeonato de España Sub23 en 100 y 200 m · Semifinalista Indoor Sub23 en 60 m · Campeón autonómico universitario en 4 × 100 m y Bronce universitario en 100 m.",
        },
        {
          year: "2020",
          title: "Subcampeón de España Sub23 — 4 × 100 m",
          detail: "Semifinalista del Campeonato de España Sub23 en 100 m · Subcampeón autonómico Sub23 en 100 m y Bronce en 200 m.",
        },
        {
          year: "2019",
          title: "Bronce autonómico Sub23 y absoluto — 200 m (indoor)",
          detail: "",
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
      title: "Formación y experiencia",
      items: [
        {
          period: "2023 — Actualidad",
          role: "Grado en Ingeniería Informática",
          place: "Universidad de Alicante",
          detail: "En curso, compaginando la carrera con la competición al máximo nivel. [COMPLETAR: curso en el que estás y, si la tienes, especialidad o mención.]",
        },
        {
          period: "2020–2023",
          role: "Ingeniería Multimedia (cursada)",
          place: "Universidad de Alicante",
          detail: "Tres años de formación en desarrollo multimedia, gráficos e interacción, antes de continuar en Ingeniería Informática.",
        },
        {
          period: "2018–2020",
          role: "Grado Superior en Desarrollo de Aplicaciones Multiplataforma (DAM)",
          place: "[COMPLETAR: centro]",
          detail: "Desarrollo de software multiplataforma: programación, bases de datos, interfaces y despliegue de aplicaciones.",
        },
        {
          period: "2016–2018",
          role: "Grado Medio en Sistemas Microinformáticos y Redes",
          place: "[COMPLETAR: centro]",
          detail: "Base en sistemas, equipos y redes.",
        },
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
      name: "Jose Giner Pérez",
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
        { label: "Education", value: "Computer Engineering (ongoing) · Multimedia Engineering · Higher Diploma in DAM" },
        { label: "Languages", value: "Spanish (native) · English B1 (certified)" },
      ],
    },
    approach: {
      eyebrow: "Method",
      title: "How I work",
      sub: "Training teaches you that results are a consequence of process. I write code the same way.",
      items: [
        {
          title: "Understand first, type second",
          text: "Before writing code I make sure I know what problem I'm solving and for whom. A misunderstood requirement costs more than any bug.",
        },
        {
          title: "Measure and correct",
          text: "On the track everything is timed: you measure, compare and adjust. Same with code — I test, look at what actually happens and fix it, instead of assuming it works.",
        },
        {
          title: "Consistency over inspiration",
          text: "Projects, like seasons, are won through repeated work: small, documented progress sustained over time.",
        },
      ],
    },
    projects: {
      eyebrow: "Portfolio",
      title: "Projects",
      sub: "I'd rather show a few projects explained properly than a long list with no substance.",
      featured: {
        status: "In progress",
        title: "Kaireté",
        tagline: "Scheduling and planning to juggle training, studies and competitions.",
        blocks: [
          {
            label: "The problem",
            text: "Juggling training, competitions and university is a mess of disconnected calendars. As an athlete I live it first-hand: I couldn't find a tool that combined athletic planning with everyday life.",
          },
          {
            label: "My role",
            text: "A personal project, end to end: data model design, backend, interface and deployment. The code stays private while I keep developing it towards a launch.",
          },
          {
            label: "What it taught me",
            text: "[COMPLETAR: the most valuable part. Describe a concrete problem you hit and how you solved it — that's what really shows you're an engineer.]",
          },
        ],
        highlights: [
          "Relational data model with Prisma on PostgreSQL.",
          "Reproducible environment with Docker so deployment doesn't depend on my machine.",
          "[COMPLETAR: add 1–2 technical decisions you made and why.]",
        ],
        tags: ["TypeScript", "Next.js", "Prisma", "PostgreSQL", "Docker"],
        link: "",
        repo: "",
      },
      items: [],
      moreSoon: "I'm building up my project catalogue. The next ones will show up here.",
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
      sub: "Sprinter specialising in the 100 and 200 metres, still competing. Elite athlete status (2021–2025) and member of the Valencian Regional Team's talent programme since 2018. In 2026 I lowered my 100 m personal best to 10.72.",
      bestsTitle: "Personal bests",
      bests: bestsEn,
      galleryTitle: "On the track",
      gallery: [
        // --- Portrait: hero carousel ---
        {
          src: "/atletismo/coria-front-face",
          alt: "Jose Giner standing on the track in his racing kit",
          caption: "Coria Meeting",
          format: "tall",
        },
        {
          src: "/atletismo/memorial-la-rioja-trofeo-100",
          alt: "Jose Giner holding the 100 metres trophy at the La Rioja Memorial",
          caption: "100 m trophy · La Rioja Memorial",
          format: "tall",
        },
        {
          src: "/atletismo/salida-explosiva",
          alt: "Jose Giner driving out of the starting blocks under a blue sky",
          caption: "Explosive start",
          format: "tall",
        },
        {
          src: "/atletismo/meeting-coria-en-tacos",
          alt: "Jose Giner focused in the blocks alongside his rivals before the start",
          caption: "In the blocks · Coria Meeting",
          format: "tall",
        },
        {
          src: "/atletismo/meeting-coria-recta",
          alt: "Jose Giner racing on the track wearing bib number 11",
          caption: "Racing · Coria Meeting",
          format: "tall",
        },
        {
          src: "/atletismo/cordoba-salida-200",
          alt: "Jose Giner settling into the blocks for a 200 metres race",
          caption: "200 m start · Córdoba",
          format: "tall",
        },
        {
          src: "/atletismo/universitario-autonomico-100-2022",
          alt: "Jose Giner on the track during the regional university championships",
          caption: "Regional university champs · 100 m",
          format: "tall",
        },

        // --- Landscape: athletics section carousel ---
        {
          src: "/atletismo/la-nucia-salida-de-tacos",
          alt: "Jose Giner exploding out of the starting blocks at the La Nucía track",
          caption: "Block start · La Nucía",
          format: "wide",
        },
        {
          src: "/atletismo/campeon-autonomico-universitario",
          alt: "Jose Giner wearing his regional university championship medal",
          caption: "Regional university champion",
          format: "wide",
        },
        {
          src: "/atletismo/universitario-autonomico-2026",
          alt: "Jose Giner celebrating after competing for the University of Alicante",
          caption: "Regional university champs · 2026",
          format: "wide",
        },
        {
          src: "/atletismo/universitario-ua-aceleracion",
          alt: "Jose Giner accelerating in the rain in University of Alicante kit",
          caption: "Racing for UA, in the rain",
          format: "wide",
        },
        {
          src: "/atletismo/universitario-ua-murcia-200",
          alt: "Jose Giner celebrating after a 200 metres race in Murcia",
          caption: "200 m · Murcia",
          format: "wide",
        },
        {
          src: "/atletismo/universitario-ua-murcia-salida",
          alt: "Jose Giner starting from the blocks at the Murcia university championships",
          caption: "Start · Murcia",
          format: "wide",
        },
        {
          src: "/atletismo/colocandose-en-tacos",
          alt: "Jose Giner settling into the starting blocks on the track",
          caption: "Settling into the blocks",
          format: "wide",
        },
      ],
      achievements: [
        {
          year: "2026",
          title: "Regional university champion — 100 m",
          detail: "Regional university runner-up in the 4 × 100 m mixed relay · Win at the «II Memorial Antonio Moreno de Frutos» meeting.",
        },
        {
          year: "2025",
          title: "Regional university champion — 100 m",
          detail: "Also regional senior Runner-up in the 100 m · Finalist in the regional senior 200 m (outdoor and indoor) · Runner-up in the regional university 4 × 100 m and Bronze in the university 200 m.",
        },
        {
          year: "2022",
          title: "Regional university champion — 100 m and 4 × 100 m",
          detail: "Regional senior Runner-up in the 100 m and university runner-up in the 200 m · Finalist at the Spanish University Championship in the 100 m and 200 m.",
        },
        {
          year: "2021",
          title: "Spanish U23 runner-up — 4 × 100 m",
          detail: "Spanish U23 Championship Semi-finalist in the 100 m and 200 m · Indoor U23 Semi-finalist in the 60 m · Regional university champion in the 4 × 100 m and Bronze in the university 100 m.",
        },
        {
          year: "2020",
          title: "Spanish U23 runner-up — 4 × 100 m",
          detail: "Spanish U23 Championship Semi-finalist in the 100 m · Regional U23 Runner-up in the 100 m and Bronze in the 200 m.",
        },
        {
          year: "2019",
          title: "Regional U23 and senior bronze — 200 m (indoor)",
          detail: "",
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
      title: "Education & experience",
      items: [
        {
          period: "2023 — Present",
          role: "BSc in Computer Engineering",
          place: "University of Alicante",
          detail: "Ongoing, combining the degree with competing at the highest level. [COMPLETAR: current year and specialisation if any.]",
        },
        {
          period: "2020–2023",
          role: "Multimedia Engineering (coursework)",
          place: "University of Alicante",
          detail: "Three years studying multimedia development, graphics and interaction, before moving on to Computer Engineering.",
        },
        {
          period: "2018–2020",
          role: "Higher Diploma in Multiplatform Application Development (DAM)",
          place: "[COMPLETAR: institution]",
          detail: "Cross-platform software development: programming, databases, interfaces and application deployment.",
        },
        {
          period: "2016–2018",
          role: "Intermediate Diploma in Microcomputer Systems & Networks",
          place: "[COMPLETAR: institution]",
          detail: "Foundations in systems, hardware and networking.",
        },
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
