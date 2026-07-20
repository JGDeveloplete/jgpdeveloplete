// @ts-check
import { defineConfig } from "astro/config";

// https://astro.build
export default defineConfig({
  // Cambia esto por tu dominio o URL de GitHub Pages cuando publiques,
  // p. ej. "https://jgdeveloplete.github.io" o "https://tudominio.com".
  site: "https://example.com",

  i18n: {
    defaultLocale: "es",
    locales: ["es", "en"],
    routing: {
      // El español se sirve en la raíz (/), el inglés en /en/.
      prefixDefaultLocale: false,
    },
  },
});
