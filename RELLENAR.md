# Checklist para completar el portafolio

Casi todo se edita en `src/i18n/content.ts` (bloques `es` e `en`, hay que
rellenar los dos idiomas). Busca los `[COMPLETAR]`.

## ✅ Ya cargado (del CV deportivo)
- Nombre: José Giner Pérez · Sant Joan d'Alacant (Alicante)
- Velocista 100 m / 200 m · C.A. Cordobés
- Marcas personales: 100 m 10.78 · 200 m 21.80 · 60 m 7.12 · 400 m 51.23
- Palmarés completo 2017–2026 (autonómicos, Cto. de España Sub23, universitario)
- Deportista de élite 2021–2025 · tecnificación Selección Valenciana desde 2018
- Email: jose.giner18@gmail.com
- Redes: GitHub, LinkedIn, Instagram, YouTube, TikTok y World Athletics

Marcas contrastadas con el perfil oficial de World Athletics (incluye la MP de
100 m de 2026 y el relevo 4 × 100). TikTok confirmado.

## ⚠️ Por confirmar
- [ ] **Email**: usé el del CV (`jose.giner18@gmail.com`). Si prefieres
      `jgpathletics@gmail.com`, cámbialo en `shared.email`
- [ ] ¿Publicar el **teléfono** (634 23 61 24)? Ahora NO aparece, por privacidad
- [ ] **Logros extra**: dijiste que hay más de los que salen en el CV. Pásamelos
      y los añado a `sport.achievements`

## ✅ Formación (confirmada y coherente)
2016–2018 Grado Medio · 2018–2020 GS en DAM · 2020–2023 Ing. Multimedia ·
2023–actualidad Ing. Informática · Inglés B1 certificado.

## 🔴 Una duda importante
- [ ] **Ingeniería Multimedia (2020–2023): ¿la terminaste o cambiaste a
      Informática?** Es importante afinarlo: en un portafolio no se puede dar a
      entender que tienes un título que no terminaste. Según la respuesta lo
      redacto como «Grado completado» o como «cursado 2020–2023, cambio a
      Ingeniería Informática»
- [ ] **Universidades y centros** de los cuatro estudios (¿la Universidad de
      Alicante, por cercanía y porque ofrece Ing. Multimedia?)

## ❌ Falta (la parte de ingeniero)
Lo más importante, por orden de impacto:

- [ ] **Kaireté → "Qué me ha enseñado"** (`projects.featured.blocks`, el 3º):
      cuenta **un problema técnico concreto** que te encontraste y cómo lo
      resolviste. Es lo que más demuestra criterio de ingeniero.
- [ ] **Kaireté → decisiones técnicas** (`projects.featured.highlights`):
      añade 1–2 decisiones tuyas y **por qué** las tomaste
- [ ] **Tercer párrafo de "Sobre mí"**: qué te gusta construir y en qué quieres
      especializarte (`about.paragraphs`, último)
- [ ] **Experiencia laboral / prácticas** (FCT del ciclo, etc.), si quieres
      añadirla a `experience.items`
- [ ] **Stack**: ajustar a lo que dominas de verdad (`stack.groups`)
- [ ] Idiomas y nivel (`about.facts`)
- [ ] **Revisar "Cómo trabajo"** (`approach.items`): lo redacté yo como borrador.
      Hazlo tuyo o cámbialo entero

## 🔒 Decisión tomada: Kaireté privado
No se publica el código ni se enlaza el repositorio. Se mantiene privado hasta
un posible lanzamiento, por su recorrido comercial. La web lo explica en el
apartado «Mi papel», para que se entienda la ausencia de enlace al código.

### Añadir proyectos en el futuro
La sección está preparada: mete objetos en `projects.items` (título,
descripción, tags, link, repo) y aparecerán en una rejilla bajo Kaireté,
sustituyendo al aviso de "estoy construyendo mi catálogo".

## 📸 Galería de atletismo (carrusel)
Ya está montado el carrusel, con **1 foto** (La Nucía). Para añadir el resto:

1. Deja los originales (tal cual, sin tocar) en la carpeta **`fotos-originales/`**
2. Ejecuta **`npm run fotos`** → los optimiza a `public/atletismo/`
   (la de prueba pasó de 8,54 MB a 0,15 MB, un 98% menos)
3. Añade cada una en `src/i18n/content.ts` → `sport.gallery`, **en los dos
   idiomas**, con `src` (sin extensión), `alt`, `caption` y **`format`**

**Importante — `format`**: hay **dos carruseles**, uno apaisado (3:2) y otro
vertical (2:3), para que cada foto llene su marco sin recortes ni bandas.
- `format: "wide"` → foto horizontal · va a «En la pista»
- `format: "tall"` → foto vertical · va a «De cerca»

Si una foto no es exactamente 3:2 o 2:3, se verá entera sobre un fondo
desenfocado de ella misma (no se recorta nunca).

Con 2 o más fotos aparecen automáticamente las flechas y los puntos.

- [ ] Añadir las 9 fotos restantes (podio con la medalla, bíceps con el dorsal
      85, salidas de tacos, Memorial de La Rioja, etc.)

## Extras
- [ ] `site` con tu URL real en `astro.config.mjs`
- [ ] Elegir dónde publicar (ver README)

## Marcas de la temporada (en vivo)
La sección de Atletismo muestra un bloque **"Temporada 2026"** con las mejores
marcas **legales** (viento ≤ +2.0) sacadas de World Athletics. Se piden **al
compilar** (`npm run build`), así que:
- Se actualizan **cada vez que se publica** la web (ver «Publicar» para
  automatizar con un rebuild programado).
- Si la API falla, el bloque simplemente no aparece y las marcas fijas de
  `content.ts` siguen ahí. La web nunca se rompe por esto.
- La API de World Athletics **no es oficial**: si el endpoint o la clave dejan
  de funcionar, se actualizan en `src/lib/worldAthletics.ts` (hay un barrido
  de sus chunks JS que los localiza; pídemelo y lo hago).

## Temas de color
La web tiene 4 temas (puntos de la cabecera): **Pista** (naranja, por defecto),
**Velocidad** (verde/cian), **Atardecer** (violeta/rosa) y **Claro** (modo día).
Se guarda la elección del visitante. Para cambiar el que sale por defecto, edita
`:root` en `src/styles/global.css`.
