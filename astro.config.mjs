// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// https://astro.build
export default defineConfig({
  // Dominio definitivo. Lo usan el sitemap, las URLs canónicas y las
  // etiquetas para redes sociales, así que tiene que ser el real.
  site: "https://jgpdeveloplete.com",

  i18n: {
    defaultLocale: "es",
    locales: ["es", "en"],
    routing: {
      // El español se sirve en la raíz (/), el inglés en /en/.
      prefixDefaultLocale: false,
    },
  },

  integrations: [
    // Genera sitemap-index.xml para que Google descubra todas las páginas,
    // indicando qué versión corresponde a cada idioma.
    sitemap({
      i18n: {
        defaultLocale: "es",
        locales: { es: "es-ES", en: "en" },
      },
    }),
  ],
});
