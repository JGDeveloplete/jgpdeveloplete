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

## 🔴 CONTRASTAR (datos dictados por voz, con dudas)
- [ ] **Grado Medio: los años no cuadran.** En la transcripción sonó «2008»,
      pero naciste en enero de 1999 (tendrías 9 años) y el Grado Superior fue
      2018–2020. Lo más probable es **2016–2018**. Confirma años y el nombre
      exacto del ciclo (puse «Sistemas Microinformáticos y Redes»)
- [ ] **Ingeniería Informática**: en qué curso estás y en qué universidad
- [ ] **Centros** del Grado Medio y del Grado Superior

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

## Extras
- [ ] Foto tuya (retrato o en pista) → carpeta `public/`
- [ ] `site` con tu URL real en `astro.config.mjs`
- [ ] Elegir dónde publicar (ver README)

## Temas de color
La web tiene 4 temas (puntos de la cabecera): **Pista** (naranja, por defecto),
**Velocidad** (verde/cian), **Atardecer** (violeta/rosa) y **Claro** (modo día).
Se guarda la elección del visitante. Para cambiar el que sale por defecto, edita
`:root` en `src/styles/global.css`.
