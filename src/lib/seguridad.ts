/**
 * Política de seguridad de contenido (CSP), en un solo sitio.
 *
 * GitHub Pages no permite poner cabeceras HTTP, así que se declara por
 * <meta http-equiv>. Limita de dónde puede cargar recursos el navegador:
 * scripts y estilos propios, fuentes solo de Google Fonts, imágenes propias, y
 * NADA de terceros ni conexiones de salida. Es defensa en profundidad para una
 * web estática (sin formularios ni backend, la superficie ya es mínima).
 *
 * `frame-ancestors` y `X-Frame-Options` NO se pueden fijar por <meta> (solo por
 * cabecera), así que la protección anti-clickjacking queda limitada por GitHub
 * Pages; es un riesgo bajo en un sitio sin acciones sensibles.
 */
export const CSP = [
  "default-src 'self'",
  "base-uri 'self'",
  "object-src 'none'",
  "img-src 'self' data:",
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  "font-src 'self' https://fonts.gstatic.com",
  "script-src 'self' 'unsafe-inline'",
  "connect-src 'self'",
  "form-action 'self'",
].join("; ");
