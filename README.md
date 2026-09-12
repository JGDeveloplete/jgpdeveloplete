# JGP Developlete — Portafolio de Jose Giner Pérez

Portafolio personal **bilingüe (español / inglés)** de **Jose Giner Pérez**,
ingeniero informático y velocista. Es una web **estática**, rápida y sin backend,
con catálogo de demos, sistema de temas de color con modo claro/oscuro, logo y
favicon propios, y datos deportivos **en vivo** desde World Athletics.

🌐 **En producción: https://jgpdeveloplete.com** (ES en la raíz, EN en `/en/`).

> Marca **con “p”**: **jgpDeveloplete**.

---

## 1. Stack tecnológico

| Capa | Tecnología |
|---|---|
| Framework | [**Astro 5**](https://astro.build) — genera **HTML estático** (sin runtime de framework en el cliente) |
| Lenguaje | **TypeScript** (contenido, i18n y lógica) + JavaScript de navegador para la interactividad |
| Estilos | **CSS puro** con variables (`src/styles/global.css`), sin Tailwind ni preprocesador |
| Interactividad | JS “vanilla” en bloques `<script>` (temas, carruseles, menú, efecto typing) — **cero dependencias de cliente** |
| Datos | Sitemap (`@astrojs/sitemap`) y marcas deportivas en vivo (fetch en tiempo de *build*) |
| Tipografías | Google Fonts: **Inter**, **Space Grotesk**, **JetBrains Mono** |
| Hosting | **GitHub Pages** (build por **GitHub Actions**) |
| Dominio / DNS | **DonDominio** (registrador) + **Cloudflare** (DNS en modo *DNS-only*) |
| Correo | **Cloudflare Email Routing** (reenvío) |

Dependencias de producción: solo `astro` y `@astrojs/sitemap`. No hay adaptador
de servidor: la web es 100 % estática.

---

## 2. Requisitos y comandos

- **Node.js 22** (fijado en `.nvmrc`).

```bash
npm install      # instalar dependencias (solo la primera vez)
npm run dev      # desarrollo en http://localhost:4321
npm run build    # genera la web en dist/
npm run preview  # previsualiza la build de producción
```

- Español: `http://localhost:4321/`
- Inglés: `http://localhost:4321/en/`

Scripts de utilidad para fotos (optimizan a `.webp` + `.jpg`):

```bash
npm run fotos           # fotos-originales/  → public/atletismo/
npm run fotos:kairete   # fotos-kairete/     → public/kairete/
```

---

## 3. Estructura del proyecto

```
JGDeveloplete/
├── src/
│   ├── i18n/
│   │   ├── content.ts        ← TODOS los textos y datos (ES y EN). El fichero clave.
│   │   └── legal.ts          ← aviso legal y política de privacidad (ES/EN)
│   ├── pages/
│   │   ├── index.astro       ← home en español (/)
│   │   ├── en/index.astro    ← home en inglés (/en/)
│   │   ├── legal.astro       ← /legal  (y /en/legal)
│   │   └── demos/
│   │       ├── index.astro   ← catálogo de demos (/demos)
│   │       └── [slug].astro   ← plantilla de cada demo (/demos/psicologia, …)
│   ├── layouts/Base.astro    ← <head>, SEO/JSON-LD, fuentes, script de tema, header y footer
│   ├── components/
│   │   ├── Header.astro       ← navegación + selector de gama + interruptor claro/oscuro
│   │   ├── Footer.astro
│   │   ├── Sections.astro     ← todas las secciones de la home + su JS (carrusel, typing)
│   │   ├── Logo.astro         ← logo JGP (SVG)
│   │   └── Gallery.astro      ← carrusel de fotos reutilizable
│   ├── lib/
│   │   ├── demos.ts           ← datos de las demos (data-driven)
│   │   ├── seguridad.ts       ← cabecera CSP + Referrer-Policy (por <meta>)
│   │   └── worldAthletics.ts  ← marcas de la temporada en vivo (build-time)
│   └── styles/global.css      ← temas de color, tipografía, layout, responsive
├── public/
│   ├── favicon.svg            ← icono a juego con el logo
│   ├── CNAME                  ← dominio para GitHub Pages (jgpdeveloplete.com)
│   ├── robots.txt
│   └── atletismo/ · kairete/  ← imágenes optimizadas
├── .github/workflows/deploy.yml  ← despliegue a GitHub Pages
├── astro.config.mjs           ← site, i18n y sitemap
├── .nvmrc                     ← Node 22
└── RELLENAR.md                ← notas de contenido pendiente / cómo añadir cosas
```

**Casi todo el contenido se edita en `src/i18n/content.ts`** (bloques `es` y `en`).

---

## 4. Idiomas (i18n)

- El **español** se sirve en la raíz (`/`), el **inglés** en `/en/`.
- Los textos de ambos idiomas viven en `src/i18n/content.ts` (y los legales en
  `legal.ts`). El selector **ES/EN** está en la cabecera.
- SEO multi-idioma: URL canónica + `hreflang` en cada página para que `/` y
  `/en/` no compitan en Google.

---

## 5. Sistema de temas de color (gamas + claro/oscuro)

Doble interruptor, inspirado en el de la app **Kaireté** (mismas gamas):

- **Selector de gama** (los puntitos de la cabecera): **Pista** (naranja + azul,
  por defecto), **Bosque** (verde + oro), **Grafito** (gris + ámbar) y **Regata**
  (azul marino + dorado).
- **Interruptor de modo** (botón ☀️/🌙): claro u oscuro. Por defecto **oscuro**.

Cómo funciona en `src/styles/global.css`:

- Cada gama define **su versión clara (`--l-*`) y oscura (`--d-*`)**.
- Un “mapa activo” copia esas variables a las reales (`--bg`, `--accent`, …)
  según el modo: por defecto usa las oscuras; con `:root[data-mode="claro"]`
  usa las claras.
- La **gama** se aplica con `data-theme="bosque|grafito|regata"` (Pista es el
  `:root` por defecto); el **modo** con `data-mode="claro"`.
- La elección del visitante se guarda en `localStorage` (`jg-theme` y `jg-mode`)
  y se aplica **antes de pintar** (script en `Base.astro`) para que no parpadee.
  Hay una **lista blanca** de gamas: un valor manipulado no puede colar un
  atributo arbitrario.

**Firma visual propia:** cada gama es bicolor, y ese carácter se remarca con una
barrita **partida 50/50** (los dos acentos) delante de cada eyebrow, en la franja
superior de las tarjetas de proyecto y en el subrayado del nombre del hero.

---

## 6. Secciones de la home

1. **Hero** — nombre, roles con efecto *typing* y un carrusel de fotos.
2. **Sobre mí** — texto + datos rápidos.
3. **Experiencia y formación** — línea de tiempo de trabajo y estudios.
4. **Proyectos** — **carrusel** (autoavance, flechas, puntos y *swipe*) con la
   tarjeta de **Kaireté**, la del **servicio** (webs con reservas → `/demos`) y
   la de **GitHub**; debajo, el bloque **“Tecnologías con las que trabajo”**.
5. **Trayectoria deportiva** — marcas de la **temporada en vivo**, marcas
   personales, galería y palmarés (con “ver más”).
6. **Contacto** — email, botón y redes.

---

## 7. Catálogo de demos (`/demos`)

Escaparate del producto “webs a medida con reservas”. Son **maquetas estáticas**:
todo se genera y valida **en el navegador**, no se envía nada; los profesionales
son **ficticios** (apellido “Ejemplo”) y llevan `noindex`.

Es **data-driven** desde `src/lib/demos.ts`: **añadir un oficio = añadir un
objeto** al array. Cada demo varía en dos ejes —`estilo.formato` (la disposición)
y `tipo` (la funcionalidad: reservas / contacto / catálogo / onboarding /
mascota)— para que sea un catálogo de opciones real. La plantilla es
`src/pages/demos/[slug].astro`.

---

## 8. Marcas de la temporada (en vivo)

El bloque **“Temporada”** muestra las mejores marcas legales del año desde
**World Athletics**. Se piden **en tiempo de compilación** (`src/lib/worldAthletics.ts`):

- Se refrescan **cada vez que se publica** la web. El workflow de despliegue
  incluye un **cron semanal (lunes)** que reconstruye para mantenerlas al día.
- Si la API falla, el bloque simplemente no aparece y quedan las marcas fijas de
  `content.ts`. **La web nunca se rompe** por esto.
- La API **no es oficial**; si cambia, se ajusta en `worldAthletics.ts`.

---

## 9. Logo y favicon

- **`src/components/Logo.astro`** — logo `‹JGP/›`: estelas de velocidad
  (deporte) + iniciales en itálica + barra y chevrón de cierre de etiqueta
  (informática). Las letras usan el color del tema (siempre legibles); los
  adornos van en **dorado + teal fijos** como color de marca. Se usa en cabecera
  y pie.
- **`public/favicon.svg`** — el mismo glifo, **vectorial** (sin fuentes) para
  verse nítido a 16 px.

---

## 10. Seguridad

- **CSP** (Content-Security-Policy) y **Referrer-Policy** por `<meta>` en todas
  las páginas, centralizadas en `src/lib/seguridad.ts`.
- **JSON-LD escapado** (`<` → `<`) para que ningún texto pueda romper el
  bloque de datos estructurados.
- **Lista blanca** en el selector de tema.
- Nota: GitHub Pages no permite cabeceras HTTP reales (HSTS, X-Frame-Options…);
  por eso la política va por `<meta>`. Riesgo bajo para una web estática sin
  formularios que envíen datos.

---

## 11. SEO

- `sitemap-index.xml` y `robots.txt` automáticos.
- Canónica + `hreflang` por idioma.
- Open Graph / Twitter Card (imagen y descripción al compartir el enlace).
- Datos estructurados **JSON-LD** (`Person`) con `sameAs` a todas las redes.

---

## 12. Despliegue (GitHub Pages)

**Por qué GitHub Pages y no Cloudflare:** los operadores españoles (Vodafone
confirmado) **bloquean rangos de IP de Cloudflare** por las órdenes
antipiratería de LaLiga, y eso tumbaba la web desde España. GitHub Pages usa
otras IPs no bloqueadas.

El despliegue es automático con **GitHub Actions** (`.github/workflows/deploy.yml`,
`withastro/action`, Node 22):

- Cada **push a `main`** reconstruye y publica.
- **Cron semanal (lunes 06:00 UTC)** para refrescar las marcas en vivo.
- También se puede lanzar a mano (*Run workflow*).

Requisitos en GitHub: repositorio **público**, y *Settings → Pages → Source =
GitHub Actions*.

### Dominio, DNS y correo

- **Dominio** registrado en **DonDominio** (verificado por ICANN).
- **DNS en Cloudflare pero en modo gris (*DNS-only*)** — **crítico**: registros
  **A** del apex a las IPs de GitHub Pages (`185.199.108–111.153`) + `CNAME www`.
  Si se pusiera en naranja (proxy), volvería el bloqueo del operador.
- El dominio para Pages está en `public/CNAME`.
- **Correo de contacto:** `contacto@jgpdeveloplete.com` mediante **Cloudflare
  Email Routing** (reenvía a la bandeja real). Los registros MX/SPF de correo son
  independientes de los A de la web.

---

## 13. Cómo hacer cambios habituales

- **Cambiar textos** → `src/i18n/content.ts` (recuerda: los dos idiomas).
- **Añadir un proyecto** → objeto en `projects.items` (aparece como tarjeta nueva
  en el carrusel).
- **Añadir/editar una demo** → objeto en `src/lib/demos.ts`.
- **Añadir tecnologías** → `stack.groups` en `content.ts`.
- **Cambiar la gama por defecto** → variables de `:root` en `global.css`.
- **Añadir fotos** → ver `RELLENAR.md` (usa `npm run fotos`).

---

Hecho con [Astro](https://astro.build). © Jose Giner Pérez.
