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
  sport: { title: string; eyebrow: string; sub: string; achievements: Achievement[] };
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
    { label: "GitHub", url: "https://github.com/[COMPLETAR]" },
    { label: "LinkedIn", url: "https://linkedin.com/in/[COMPLETAR]" },
    { label: "Instagram", url: "https://instagram.com/[COMPLETAR]" },
  ],
};

export const content: Record<Lang, Content> = {
  es: {
    nav: { about: "Sobre mí", projects: "Proyectos", stack: "Stack", sport: "Deporte", experience: "Experiencia", contact: "Contacto" },
    hero: {
      eyebrow: "Ingeniero Informático · Atleta",
      name: "[COMPLETAR: Nombre y apellidos]",
      roles: ["Ingeniero Informático", "Atleta de [COMPLETAR: disciplina]", "Desarrollador de software"],
      lead:
        "Construyo software con la misma disciplina con la que entreno: método, constancia y atención al detalle. [COMPLETAR: una frase personal que te defina.]",
      ctaProjects: "Ver proyectos",
      ctaContact: "Hablemos",
    },
    about: {
      eyebrow: "Sobre mí",
      title: "Dos disciplinas, la misma mentalidad",
      paragraphs: [
        "[COMPLETAR: quién eres. Cuenta cómo conviven en ti el ingeniero y el atleta, y qué te aporta cada faceta.]",
        "[COMPLETAR: tu formación en informática — grado, especialidad, dónde y cuándo.]",
        "[COMPLETAR: tu recorrido deportivo — disciplina, club, nivel al que compites.]",
      ],
      facts: [
        { label: "Formación", value: "[COMPLETAR: Grado en Ingeniería Informática — universidad]" },
        { label: "Ubicación", value: "[COMPLETAR: ciudad, país]" },
        { label: "Deporte", value: "[COMPLETAR: disciplina y categoría]" },
        { label: "Idiomas", value: "Español · Inglés · [COMPLETAR]" },
      ],
    },
    projects: {
      eyebrow: "Portfolio",
      title: "Proyectos",
      sub: "Una selección de cosas que he construido. [COMPLETAR: añade, quita o edita las tarjetas.]",
      items: [
        {
          title: "Kaireté",
          description:
            "Aplicación de agenda para atletas y entrenadores: planificación de entrenamientos, sesiones y seguimiento. [COMPLETAR: amplía o ajusta la descripción.]",
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
      eyebrow: "Atleta",
      title: "Trayectoria deportiva",
      sub: "[COMPLETAR: disciplina, club y qué te mueve como deportista.]",
      achievements: [
        { year: "[Año]", title: "[COMPLETAR: logro o marca]", detail: "[COMPLETAR: competición y resultado.]" },
        { year: "[Año]", title: "[COMPLETAR: logro o marca]", detail: "[COMPLETAR: competición y resultado.]" },
        { year: "[Año]", title: "[COMPLETAR: logro o marca]", detail: "[COMPLETAR: competición y resultado.]" },
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
      lead: "¿Un proyecto, una oportunidad o simplemente saludar? Escríbeme.",
      email: shared.email,
      ctaEmail: "Enviar un email",
      socials: shared.socials,
    },
    footer: { tagline: "Ingeniero Informático y Atleta" },
  },

  en: {
    nav: { about: "About", projects: "Projects", stack: "Stack", sport: "Sport", experience: "Experience", contact: "Contact" },
    hero: {
      eyebrow: "Software Engineer · Athlete",
      name: "[COMPLETAR: Full name]",
      roles: ["Software Engineer", "[COMPLETAR: discipline] Athlete", "Software Developer"],
      lead:
        "I build software with the same discipline I bring to training: method, consistency and attention to detail. [COMPLETAR: a personal line that defines you.]",
      ctaProjects: "View projects",
      ctaContact: "Get in touch",
    },
    about: {
      eyebrow: "About",
      title: "Two disciplines, one mindset",
      paragraphs: [
        "[COMPLETAR: who you are. How the engineer and the athlete coexist in you, and what each side brings.]",
        "[COMPLETAR: your CS background — degree, focus, where and when.]",
        "[COMPLETAR: your athletic path — discipline, club, level you compete at.]",
      ],
      facts: [
        { label: "Education", value: "[COMPLETAR: BSc in Computer Engineering — university]" },
        { label: "Location", value: "[COMPLETAR: city, country]" },
        { label: "Sport", value: "[COMPLETAR: discipline and level]" },
        { label: "Languages", value: "Spanish · English · [COMPLETAR]" },
      ],
    },
    projects: {
      eyebrow: "Portfolio",
      title: "Projects",
      sub: "A selection of things I've built. [COMPLETAR: add, remove or edit cards.]",
      items: [
        {
          title: "Kaireté",
          description:
            "Scheduling app for athletes and coaches: training planning, sessions and tracking. [COMPLETAR: expand or adjust the description.]",
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
      eyebrow: "Athlete",
      title: "Athletic background",
      sub: "[COMPLETAR: discipline, club and what drives you as an athlete.]",
      achievements: [
        { year: "[Year]", title: "[COMPLETAR: achievement or PB]", detail: "[COMPLETAR: competition and result.]" },
        { year: "[Year]", title: "[COMPLETAR: achievement or PB]", detail: "[COMPLETAR: competition and result.]" },
        { year: "[Year]", title: "[COMPLETAR: achievement or PB]", detail: "[COMPLETAR: competition and result.]" },
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
      lead: "A project, an opportunity or just to say hi? Drop me a line.",
      email: shared.email,
      ctaEmail: "Send an email",
      socials: shared.socials,
    },
    footer: { tagline: "Software Engineer & Athlete" },
  },
};
