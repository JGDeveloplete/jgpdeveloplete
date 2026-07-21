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

## ⚠️ Por confirmar
- [ ] **TikTok**: puse `tiktok.com/@jgsprinter` por coherencia con Instagram/YouTube.
      Confírmalo o corrígelo en `content.ts` → `shared.socials`
- [ ] **Email**: usé el del CV (`jose.giner18@gmail.com`). Si prefieres
      `jgpathletics@gmail.com`, cámbialo en `shared.email`
- [ ] ¿Publicar el **teléfono** (634 23 61 24)? Ahora NO aparece, por privacidad

## ❌ Falta (la parte de ingeniero)
- [ ] **Formación**: grado, universidad y año (`about.facts` → Formación)
- [ ] **Tercer párrafo de "Sobre mí"**: qué te gusta construir y en qué quieres
      especializarte (`about.paragraphs`, último)
- [ ] **Proyectos 2 y 3**: título, qué resuelven y tecnologías (`projects.items`)
- [ ] **Enlaces de Kaireté**: demo (`link`) y repositorio (`repo`)
- [ ] **Experiencia**: puestos/prácticas con periodos (`experience.items`)
- [ ] **Stack**: ajustar a lo que dominas de verdad (`stack.groups`)
- [ ] Idiomas y nivel (`about.facts`)

## Extras
- [ ] Foto tuya (retrato o en pista) → carpeta `public/`
- [ ] `site` con tu URL real en `astro.config.mjs`
- [ ] Elegir dónde publicar (ver README)

## Temas de color
La web tiene 4 temas (puntos de la cabecera): **Pista** (naranja, por defecto),
**Velocidad** (verde/cian), **Atardecer** (violeta/rosa) y **Claro** (modo día).
Se guarda la elección del visitante. Para cambiar el que sale por defecto, edita
`:root` en `src/styles/global.css`.
