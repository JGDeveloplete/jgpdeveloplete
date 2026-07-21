/**
 * Optimiza las fotos de la galería de atletismo.
 *
 * Uso:
 *   1. Deja los originales (tal cual salen de la cámara) en  fotos-originales/
 *   2. npm run fotos
 *   3. Aparecerán optimizadas en  public/atletismo/  listas para la web.
 *
 * Genera dos versiones de cada foto: .webp (moderna, mucho más ligera) y
 * .jpg (respaldo). Los originales NO se suben al repositorio.
 */
import { readdir, mkdir, stat } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import sharp from "sharp";

const ORIGEN = "fotos-originales";
const DESTINO = path.join("public", "atletismo");
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
console.log(`\n${ficheros.length} foto(s). Total: ${mb(totalOriginal)} MB → ${mb(totalFinal)} MB en webp.`);
console.log(`Ahora añade las rutas en src/i18n/content.ts → sport.gallery.photos`);
