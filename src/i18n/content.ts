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
  experience: {
    title: string;
    eyebrow: string;
    /** Experiencia laboral: va primero, es lo que más pesa. */
    workTitle: string;
    work: ExperienceItem[];
    /** Formación académica. */
    educationTitle: string;
    items: ExperienceItem[];
  };
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
    nav: { about: "Sobre mí", projects: "Proyectos", stack: "Stack", sport: "Atletismo", experience: "Experiencia", contact: "Contacto" },
    hero: {
      eyebrow: "Ingeniero Informático · Velocista",
      name: "Jose Giner Pérez",
      roles: ["Ingeniero Informático", "Velocista 100 m / 200 m", "Desarrollador PL/SQL"],
      lead:
        "Compito en 100 y 200 metros y escribo código con la misma receta: constancia, disciplina y resiliencia dentro y fuera de la pista.",
      ctaProjects: "Ver proyectos",
      ctaContact: "Hablemos",
    },
    about: {
      eyebrow: "Sobre mí",
      title: "Dos disciplinas, la misma mentalidad",
      paragraphs: [
        "Corro los 100 y los 200 metros. Desde 2020 lo hago en Primera División y División de Honor, la máxima categoría del atletismo español por equipos.",
        "Entrenar a ese nivel te enseña algo que se queda: los resultados no llegan de golpe ni por talento, llegan por repetir bien durante años.",
        "Esa forma de entrenar —medir, repetir, corregir y volver a empezar— es la misma con la que me siento a programar. Hoy trabajo como desarrollador PL/SQL a jornada completa, compaginándolo con la carrera de Ingeniería Informática y la competición al máximo nivel.",
        "De ahí el nombre: Developlete nace de unir developer y athlete. No son dos caminos que compitan, son el mismo.",
      ],
      facts: [
        { label: "Ubicación", value: "Sant Joan d'Alacant, Alicante" },
        { label: "Deporte", value: "Velocidad 100 m / 200 m · C.A. Cordobés" },
        { label: "Formación", value: "Ingeniería Informática (en curso) · Ingeniería Multimedia · GS en DAM · GM en SMR" },
        { label: "Idiomas", value: "Español (nativo) · Inglés B1 certificado" },
      ],
    },
    approach: {
      eyebrow: "Método",
      title: "Cómo trabajo",
      sub: "Tres cosas que aplico igual en la pista que delante del teclado.",
      items: [
        {
          title: "Primero entender, luego escribir",
          text: "Antes de teclear intento tener claro qué problema resuelvo y para quién. Un requisito mal entendido cuesta más que cualquier bug.",
        },
        {
          title: "Los datos mandan",
          text: "En la pista el cronómetro no opina. Con los datos igual: prefiero ir a comprobarlo a la fuente antes que dar nada por supuesto.",
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
        tagline: "Proyecto propio en desarrollo: una aplicación en formato agenda.",
        // Deliberadamente escueto: JG prefiere no destapar el producto hasta
        // que esté más maduro. Ampliar solo cuando él lo decida.
        blocks: [
          {
            label: "Estado",
            text: "En desarrollo activo. Iré contando más a medida que el proyecto avance.",
          },
        ],
        highlights: [],
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
        { name: "Lenguajes", items: ["Java", "C#", "SQL", "PL/SQL", "JavaScript", "TypeScript"] },
        { name: "Frontend", items: ["React", "Vue", "Next.js", "HTML/CSS"] },
        { name: "Backend y datos", items: ["Oracle", "PostgreSQL", "Node.js", "Prisma"] },
        { name: "Herramientas", items: ["Docker", "Git", "Linux", "TOAD", "Jira"] },
        { name: "Aprendiendo", items: ["Python", "C++"] },
      ],
    },
    sport: {
      eyebrow: "Atletismo",
      title: "Trayectoria deportiva",
      sub: "Velocista especializado en 100 y 200 metros, en competición activa. Deportista de élite (2021–2025) y miembro del programa de tecnificación de la Selección Valenciana desde 2018.",
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
      title: "Experiencia y formación",
      workTitle: "Experiencia profesional",
      work: [
        {
          period: "feb. 2025 — Actualidad",
          role: "Desarrollador PL/SQL",
          place: "Grupo gtt · Gestión Tributaria Territorial",
          detail: "Mi función principal es la explotación de datos: consultas SQL sobre Oracle para extraer y cruzar información de los sistemas de gestión tributaria, lo que exige conocer a fondo el modelo de datos. También desarrollo en PL/SQL (procedimientos, paquetes, vistas y triggers). Trabajo con TOAD, tickets en Jira y documentación en Confluence, en un equipo de unas 20 personas organizado en células de cinco. Jornada completa en modalidad híbrida.",
        },
        {
          period: "oct. — nov. 2022",
          role: "Desarrollador back-end",
          place: "MindDen · Alicante",
          detail: "Desarrollo de back-end con PHP.",
        },
        {
          period: "abr. — jun. 2018",
          role: "Técnico de reparación de equipos informáticos",
          place: "TL Computer Systems (Wales) Ltd · Cardiff, Reino Unido",
          detail: "Reparación y mantenimiento de equipos. Primera experiencia profesional, trabajando en inglés.",
        },
      ],
      educationTitle: "Formación",
      items: [
        {
          period: "2023 — Actualidad",
          role: "Grado en Ingeniería Informática",
          place: "Universidad de Alicante",
          detail: "Cursando 4º, compaginado con el trabajo a jornada completa y la competición al máximo nivel.",
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
          place: "FEMPA · Alicante",
          detail: "Desarrollo de software multiplataforma: programación, bases de datos, interfaces y despliegue de aplicaciones.",
        },
        {
          period: "2016–2018",
          role: "Grado Medio en Sistemas Microinformáticos y Redes",
          place: "IES Mutxamel · Alicante",
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
      roles: ["Software Engineer", "100 m / 200 m Sprinter", "PL/SQL Developer"],
      lead:
        "A 100 and 200 m sprinter who writes code with the same mindset the track demands: consistency, discipline and the resolve to keep improving.",
      ctaProjects: "View projects",
      ctaContact: "Get in touch",
    },
    about: {
      eyebrow: "About",
      title: "Two disciplines, one mindset",
      paragraphs: [
        "I run the 100 and 200 metres. Since 2020 I've raced in Spain's First Division and División de Honor, the top tier of national team athletics.",
        "Training at that level teaches you something that sticks: results don't arrive all at once, and they don't come from talent — they come from repeating things well, for years.",
        "That way of training — measure, repeat, correct, start again — is exactly how I approach code. I currently work full-time as a PL/SQL developer, alongside my Computer Engineering degree and competing at the highest level.",
        "Hence the name: Developlete comes from blending developer and athlete. They aren't two competing paths — they're the same one.",
      ],
      facts: [
        { label: "Location", value: "Sant Joan d'Alacant, Alicante (Spain)" },
        { label: "Sport", value: "Sprints 100 m / 200 m · C.A. Cordobés" },
        { label: "Education", value: "Computer Engineering (ongoing) · Multimedia Engineering · Higher Diploma in DAM · Intermediate Diploma in SMR" },
        { label: "Languages", value: "Spanish (native) · English B1 (certified)" },
      ],
    },
    approach: {
      eyebrow: "Method",
      title: "How I work",
      sub: "Three things I apply the same way on the track and at the keyboard.",
      items: [
        {
          title: "Understand first, type second",
          text: "Before writing code I make sure I know what problem I'm solving and for whom. A misunderstood requirement costs more than any bug.",
        },
        {
          title: "Let the data decide",
          text: "On the track, the stopwatch doesn't have opinions. Same with data: I'd rather go and check it at the source than assume anything.",
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
        tagline: "A personal project in development: a scheduling app.",
        blocks: [
          {
            label: "Status",
            text: "In active development. I'll share more as the project takes shape.",
          },
        ],
        highlights: [],
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
        { name: "Languages", items: ["Java", "C#", "SQL", "PL/SQL", "JavaScript", "TypeScript"] },
        { name: "Frontend", items: ["React", "Vue", "Next.js", "HTML/CSS"] },
        { name: "Backend & data", items: ["Oracle", "PostgreSQL", "Node.js", "Prisma"] },
        { name: "Tools", items: ["Docker", "Git", "Linux", "TOAD", "Jira"] },
        { name: "Learning", items: ["Python", "C++"] },
      ],
    },
    sport: {
      eyebrow: "Athletics",
      title: "Athletic background",
      sub: "Sprinter specialising in the 100 and 200 metres, still competing. Elite athlete status (2021–2025) and member of the Valencian Regional Team's talent programme since 2018.",
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
          detail: "Regional university runner-up in the 4 × 100 m mixed relay · Winner of the «II Memorial Antonio Moreno de Frutos» meeting.",
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
      title: "Experience & education",
      workTitle: "Professional experience",
      work: [
        {
          period: "Feb 2025 — Present",
          role: "PL/SQL Developer",
          place: "Grupo gtt · Gestión Tributaria Territorial",
          detail: "My main focus is data extraction and reporting: SQL queries on Oracle to pull and cross-reference data from tax management systems, which means knowing the data model inside out. I also develop in PL/SQL (stored procedures, packages, views and triggers). I work with TOAD, track tickets in Jira and document in Confluence, within a team of around 20 split into squads of five. Full-time, hybrid.",
        },
        {
          period: "Oct — Nov 2022",
          role: "Back-end Developer",
          place: "MindDen · Alicante",
          detail: "Back-end development in PHP.",
        },
        {
          period: "Apr — Jun 2018",
          role: "IT Repair Technician",
          place: "TL Computer Systems (Wales) Ltd · Cardiff, UK",
          detail: "Hardware repair and maintenance. My first job, working in English.",
        },
      ],
      educationTitle: "Education",
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
          place: "FEMPA · Alicante",
          detail: "Cross-platform software development: programming, databases, interfaces and application deployment.",
        },
        {
          period: "2016–2018",
          role: "Intermediate Diploma in Microcomputer Systems & Networks",
          place: "IES Mutxamel · Alicante",
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
