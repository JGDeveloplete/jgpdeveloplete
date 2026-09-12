# Notas de contenido y cómo añadir cosas

La web está **completa y en producción**. Este fichero recoge (1) los pocos
detalles de contenido que quedan abiertos y (2) cómo añadir material en el futuro.
Casi todo se edita en `src/i18n/content.ts` (bloques `es` **y** `en`).

## 1. Detalles de contenido aún abiertos

- [ ] **Ingeniería Multimedia (2020–2023): ¿terminada o cambio a Informática?**
      Importante para redactarlo con rigor (no dar a entender un título no
      obtenido). Según la respuesta se ajusta en `experience.items`.
- [ ] **Universidades / centros** de cada estudio, si se quieren mostrar.
- [ ] **Logros deportivos extra** que no estén en el palmarés → `sport.achievements`.
- [ ] **Kaireté**: si algún día se quiere ampliar, contar un problema técnico
      concreto y su solución en `projects.featured.blocks`. Por ahora se mantiene
      escueto y **el código privado** (sin enlace al repo), a propósito.

## 2. Ya resuelto

- **Email de contacto**: `contacto@jgpdeveloplete.com` (reenvío por Cloudflare
  Email Routing a la bandeja real). Está en `content.ts` (`shared.email`) y en
  `legal.ts`.
- **Datos deportivos**: marcas personales, palmarés y bloque de temporada en vivo.
- **Redes**: GitHub, LinkedIn, Instagram, YouTube, TikTok y World Athletics.
- **Teléfono**: NO se publica, por privacidad (decisión tomada).

## 3. Añadir un proyecto

Mete un objeto en `projects.items` (título, descripción, tags, link, repo) y
aparecerá como **una tarjeta más del carrusel** de Proyectos, junto a Kaireté.

## 4. Añadir/editar una demo

Añade un objeto en `src/lib/demos.ts` (slug, oficio, paleta, `estilo.formato` y
`tipo`) y se genera sola en `/demos/<slug>`. La plantilla es
`src/pages/demos/[slug].astro`.

## 5. Galería de atletismo (fotos)

1. Deja los originales en **`fotos-originales/`** (sin tocar).
2. Ejecuta **`npm run fotos`** → los optimiza a `public/atletismo/` (webp + jpg).
3. Añade cada foto en `content.ts` → `sport.gallery`, **en los dos idiomas**, con
   `src` (sin extensión), `alt`, `caption` y **`format`**:
   - `format: "wide"` (3:2) → galería «En la pista».
   - `format: "tall"` (2:3) → se usa como retrato en el hero.

   Si una foto no es exactamente 3:2 / 2:3, se ve entera sobre un fondo
   desenfocado de ella misma (nunca se recorta). Con 2+ fotos aparecen flechas y
   puntos automáticamente.

Para las capturas de Kaireté: carpeta `fotos-kairete/` + `npm run fotos:kairete`.

## 6. Temas de color

4 gamas (puntitos de la cabecera): **Pista** (naranja+azul, por defecto),
**Bosque** (verde+oro), **Grafito** (gris+ámbar) y **Regata** (azul marino+dorado),
cada una con **modo claro/oscuro** (botón ☀️/🌙, por defecto oscuro). Se guarda la
elección del visitante. Para cambiar la gama por defecto, edita las variables de
`:root` en `src/styles/global.css`. Más detalle en el README.
