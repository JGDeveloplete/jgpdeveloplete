# Portafolio de JG — Ingeniero Informático & Atleta

Portafolio personal bilingüe (español/inglés) construido con
[Astro](https://astro.build). Genera HTML estático (rápido y fácil de publicar)
pero se escribe por componentes y crece bien: el punto medio entre una web
estática y un framework.

## Requisitos

- [Node.js](https://nodejs.org) 18 o superior (aquí probado con Node 24).

## Empezar

```bash
npm install      # instalar dependencias (solo la primera vez)
npm run dev      # servidor de desarrollo en http://localhost:4321
npm run build    # genera la web en dist/
npm run preview  # previsualiza la build de producción
```

- Español: `http://localhost:4321/`
- Inglés: `http://localhost:4321/en/`

## Dónde se edita cada cosa

```
JGDeveloplete/
├── src/
│   ├── i18n/content.ts      ← TODOS los textos (ES y EN). Edita aquí.
│   ├── pages/index.astro    ← página en español (raíz)
│   ├── pages/en/index.astro ← página en inglés (/en/)
│   ├── layouts/Base.astro   ← <head>, fuentes, header y footer
│   ├── components/          ← Header, Footer, Sections
│   └── styles/global.css    ← diseño (colores, tipografías, responsive)
├── public/favicon.svg       ← icono
├── astro.config.mjs         ← idiomas y dominio del sitio
└── RELLENAR.md              ← checklist de datos por completar
```

**La mayoría del trabajo es editar `src/i18n/content.ts`.** Ahí están todos los
textos de ambos idiomas y los datos de proyectos, stack, deporte y experiencia.
Busca los `[COMPLETAR]` y sustitúyelos. Lista completa en **RELLENAR.md**.

## Idiomas

- El **español** se sirve en la raíz (`/`).
- El **inglés** en `/en/`.
- El selector ES/EN está en la cabecera.

Para añadir un idioma, se amplía `content.ts` y `astro.config.mjs` y se crea la
página correspondiente.

## Publicar en Cloudflare Pages (elegido)

Dominio: **jgdeveloplete.com** (ya configurado en `astro.config.mjs`).

1. **Registrar el dominio.** Lo más cómodo es hacerlo en el propio
   [Cloudflare](https://dash.cloudflare.com) (Domain Registration): lo venden a
   precio de coste, sin renovaciones infladas, y queda ya conectado.
2. **Crear el proyecto.** Cloudflare Dashboard → *Workers & Pages* → *Create*
   → *Pages* → *Connect to Git* → elegir el repo `jgpdeveloplete`.
   - Framework preset: **Astro**
   - Build command: `npm run build`
   - Output directory: `dist`
3. **Conectar el dominio.** En el proyecto → *Custom domains* → añadir
   `jgdeveloplete.com` y `www.jgdeveloplete.com`. El HTTPS es automático.
4. **A partir de ahí**, cada `git push` a `main` publica sola la web.

### Que las marcas se refresquen solas
El bloque «Temporada» se genera al compilar. Para que se actualice sin tocar
nada, hay un workflow en `.github/workflows/refrescar-marcas.yml` que republica
la web cada lunes. Solo hay que crear un *Deploy hook* en Cloudflare y guardar
su URL como secreto `CLOUDFLARE_DEPLOY_HOOK` en GitHub (instrucciones dentro
del propio fichero).

### SEO (ya montado)
- `sitemap-index.xml` y `robots.txt` generados automáticamente.
- URL canónica y `hreflang` en cada página (para que `/` y `/en/` no compitan).
- Imagen y descripción al compartir el enlace (WhatsApp, LinkedIn, X…).
- **Pendiente tras publicar**: dar de alta la web en
  [Google Search Console](https://search.google.com/search-console) y enviar el
  sitemap. Es lo que hace que Google la encuentre en días en vez de semanas.

## Otras opciones de hosting

Antes de publicar, pon tu URL real en `astro.config.mjs` (campo `site`).

- **GitHub Pages**: con la acción oficial `withastro/action`, o `npm run build`
  y subir `dist/`.
- **Netlify / Cloudflare Pages / Vercel**: conectar el repositorio; detectan
  Astro automáticamente (build `npm run build`, carpeta `dist`).

## Pendiente / ideas

- Fotos reales (retrato y, si quieres, capturas de proyectos en `public/`).
- Rellenar palmarés deportivo y experiencia.
- Enlaces reales de GitHub, LinkedIn e Instagram.
- (Opcional) sección de blog, o CV descargable en PDF.
