/**
 * Catálogo de demos de escaparate.
 *
 * Cada entrada genera una página de ejemplo en /demos/<slug> con una web de
 * reservas de mentira, para enseñar en el portfolio qué tipo de web con citas
 * monto para cada oficio. Todo es FICTICIO a propósito: los profesionales se
 * apellidan «Ejemplo» y no se reserva nada real (ver el aviso en la plantilla).
 *
 * Para añadir un oficio nuevo, se añade un objeto aquí y ya: la plantilla
 * `/demos/[slug].astro` y el índice `/demos` lo recogen solos.
 */
export interface ServicioDemo {
  nombre: string;
  dur: string;
  precio: string;
  /** Descripción corta, usada en el formato «catálogo». */
  desc?: string;
}

export interface Paleta {
  fondo: string;
  tinta: string;
  principal: string;
  acento: string;
  suave: string;
  linea: string;
}

/** El «vestido» de cada demo: lo que hace que no parezcan la misma plantilla.
 *  - fuenteImport: la etiqueta <link> de Google Fonts de esa demo.
 *  - fuenteTitulo: la familia CSS para los titulares.
 *  - formato: la disposición de la reserva (cambia el layout, no solo el color).
 *  - boton: la forma de los botones. */
export interface EstiloDemo {
  fuenteImport: string;
  fuenteTitulo: string;
  formato: "centrado" | "lateral" | "banda" | "elegante";
  boton: "pastilla" | "recto" | "contorno";
}

export interface Demo {
  slug: string;
  /** Oficio, para el catálogo. */
  profesion: string;
  /** Frase corta bajo el nombre en el catálogo. */
  gancho: string;
  /** Profesional ficticio. */
  nombre: string;
  inicial: string;
  rol: string;
  /** Titular y entradilla del hero de la demo. */
  titulo: string;
  lead: string;
  servicios: ServicioDemo[];
  paleta: Paleta;
  estilo: EstiloDemo;
  /** Qué FUNCIONALIDAD demuestra la web, no solo el aspecto:
   *  - reservas: calendario + horas (pedir cita).
   *  - contacto: formulario de captación («cuéntanos tu caso»).
   *  - catalogo: carta de servicios/tratamientos con reserva por tarjeta. */
  tipo: "reservas" | "contacto" | "catalogo";
  /** Solo para `tipo: "contacto"`: opciones del desplegable de asunto/área. */
  areas?: string[];
}

export const demos: Demo[] = [
  {
    slug: "psicologia",
    profesion: "Psicología",
    gancho: "Consulta de psicología con reserva online",
    nombre: "Elena Ejemplo",
    inicial: "E",
    rol: "Psicóloga · Ejemplo",
    titulo: "Pide cita cuando mejor te venga",
    lead: "Elige el día y la hora en el calendario y reserva en un minuto, sin llamadas ni esperas. Así funcionaría la web de reservas de tu consulta.",
    servicios: [
      { nombre: "Primera consulta", dur: "50 min", precio: "60 €" },
      { nombre: "Sesión de seguimiento", dur: "45 min", precio: "50 €" },
      { nombre: "Sesión online", dur: "45 min", precio: "50 €" },
    ],
    paleta: { fondo: "#fdfaf6", tinta: "#332f2a", principal: "#7d8f6c", acento: "#c9835b", suave: "#f2eae0", linea: "#e7ddd0" },
    estilo: {
      fuenteImport: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600&family=Inter:wght@400;500;600&display=swap",
      fuenteTitulo: "'Fraunces', Georgia, serif",
      formato: "centrado",
      boton: "pastilla",
    },
    tipo: "reservas",
  },
  {
    slug: "fisioterapia",
    profesion: "Fisioterapia",
    gancho: "Clínica de fisioterapia con agenda online",
    nombre: "Carlos Ejemplo",
    inicial: "C",
    rol: "Fisioterapeuta · Ejemplo",
    titulo: "Reserva tu sesión en dos toques",
    lead: "Consulta los huecos libres y reserva la sesión que necesites sin llamar. Tus pacientes gestionan su cita desde el móvil, a cualquier hora.",
    servicios: [
      { nombre: "Primera valoración", dur: "40 min", precio: "40 €" },
      { nombre: "Sesión de fisioterapia", dur: "45 min", precio: "45 €" },
      { nombre: "Punción seca", dur: "30 min", precio: "35 €" },
    ],
    paleta: { fondo: "#f5fbfb", tinta: "#1f2a30", principal: "#2a9d8f", acento: "#e76f51", suave: "#dff0ed", linea: "#cfe6e2" },
    estilo: {
      fuenteImport: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&display=swap",
      fuenteTitulo: "'Space Grotesk', system-ui, sans-serif",
      formato: "lateral",
      boton: "recto",
    },
    tipo: "reservas",
  },
  {
    slug: "abogacia",
    profesion: "Abogacía",
    gancho: "Despacho de abogados con captación de casos online",
    nombre: "Daniel Ejemplo",
    inicial: "D",
    rol: "Abogado · Ejemplo",
    titulo: "Cuéntanos tu caso",
    lead: "Escríbenos tu situación y te contactamos en menos de 24 horas para valorarla. Sin compromiso y con total discreción.",
    servicios: [
      { nombre: "Primera consulta", dur: "45 min", precio: "60 €" },
      { nombre: "Consulta online", dur: "45 min", precio: "60 €" },
      { nombre: "Revisión de documentación", dur: "30 min", precio: "40 €" },
    ],
    paleta: { fondo: "#ffffff", tinta: "#1c2530", principal: "#16273d", acento: "#b08d57", suave: "#f4f1ea", linea: "#e2e6ea" },
    estilo: {
      fuenteImport: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600;700&family=Inter:wght@400;500;600&display=swap",
      fuenteTitulo: "'Cormorant Garamond', Georgia, serif",
      formato: "banda",
      boton: "contorno",
    },
    tipo: "contacto",
    areas: ["Derecho laboral", "Derecho penal", "Derecho de familia", "Arrendamientos", "Otro asunto"],
  },
  {
    slug: "estetica",
    profesion: "Estética y belleza",
    gancho: "Centro de estética con reserva de tratamientos",
    nombre: "Sofía Ejemplo",
    inicial: "S",
    rol: "Centro de estética · Ejemplo",
    titulo: "Nuestra carta de tratamientos",
    lead: "Descubre los tratamientos, elige el tuyo y resérvalo al momento. Tus clientas piden cita desde el móvil, sin tener que llamar al centro.",
    servicios: [
      { nombre: "Consulta de valoración", dur: "20 min", precio: "Gratis", desc: "Analizamos tu piel y te recomendamos el tratamiento ideal, sin compromiso." },
      { nombre: "Limpieza facial", dur: "60 min", precio: "45 €", desc: "Higiene profunda, exfoliación e hidratación para una piel luminosa." },
      { nombre: "Tratamiento personalizado", dur: "75 min", precio: "60 €", desc: "Diseñado según tu tipo de piel y objetivos tras la valoración." },
    ],
    paleta: { fondo: "#fdf7f8", tinta: "#3a2c31", principal: "#a76a83", acento: "#cf8aa2", suave: "#f5e6ec", linea: "#ecd9e0" },
    estilo: {
      fuenteImport: "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;600;700&family=Inter:wght@400;500;600&display=swap",
      fuenteTitulo: "'Playfair Display', Georgia, serif",
      formato: "elegante",
      boton: "pastilla",
    },
    tipo: "catalogo",
  },
];
