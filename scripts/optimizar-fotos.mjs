/**
 * Optimiza imágenes para la web (galería de atletismo o capturas de proyectos).
 *
 * Uso:
 *   Atletismo:  deja los originales en  fotos-originales/  y  npm run fotos
 *               → salen en  public/atletismo/
 *   Kaireté:    deja las capturas en  fotos-kairete/  y  npm run fotos:kairete
 *               → salen en  public/kairete/
 *
 * O directamente:  node scripts/optimizar-fotos.mjs <carpeta-origen> <carpeta-destino>
 *
 * Genera dos versiones de cada imagen: .webp (moderna, mucho más ligera) y
 * .jpg (respaldo). Los originales NO se suben al repositorio.
 */
import { readdir, mkdir, stat } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import sharp from "sharp";

const ORIGEN = process.argv[2] || "fotos-originales";
const DESTINO = process.argv[3] || path.join("public", "atletismo");
const ANCHO_MAX = 1600; // suficiente para pantallas grandes sin engordar la web
const CALIDAD = 80;

if (!existsSync(ORIGEN)) {
  console.error(`No existe la carpeta "${ORIGEN}". Créala y deja ahí las fotos.`);
  process.exit(1);
}

await mkdir(DESTINO, { recursive: true });

const ficheros = (await readdir(ORIGEN)).filter((f) => /\.(jpe?g|png|webp)$/i.test(f));

if (ficheros.length === 0) {
  console.log(`No hay imágenes en "${ORIGEN}".`);
  process.exit(0);
}

let totalOriginal = 0;
let totalFinal = 0;

for (const fichero of ficheros) {
  const entrada = path.join(ORIGEN, fichero);
  const nombre = path.parse(fichero).name
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")   // quita acentos
    .replace(/[^a-z0-9]+/g, "-")        // todo a guiones
    .replace(/^-+|-+$/g, "");

  const original = await stat(entrada);
  totalOriginal += original.size;

  const base = sharp(entrada).rotate().resize({
    width: ANCHO_MAX,
    withoutEnlargement: true,
  });

  const salidaWebp = path.join(DESTINO, `${nombre}.webp`);
  const salidaJpg = path.join(DESTINO, `${nombre}.jpg`);

  await base.clone().webp({ quality: CALIDAD }).toFile(salidaWebp);
  await base.clone().jpeg({ quality: CALIDAD, mozjpeg: true }).toFile(salidaJpg);

  const final = await stat(salidaWebp);
  totalFinal += final.size;

  const mb = (n) => (n / 1024 / 1024).toFixed(2);
  console.log(`✓ ${fichero}  ${mb(original.size)} MB → ${mb(final.size)} MB  (${nombre}.webp)`);
}

const mb = (n) => (n / 1024 / 1024).toFixed(2);
console.log(`\n${ficheros.length} imagen(es) en ${DESTINO}. Total: ${mb(totalOriginal)} MB → ${mb(totalFinal)} MB en webp.`);
console.log(`Añade las rutas (sin extensión) en src/i18n/content.ts.`);
