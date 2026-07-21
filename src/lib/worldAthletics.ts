/* ============================================================
   Acceso a los datos oficiales de World Athletics.
   Se usa EN TIEMPO DE COMPILACIÓN (build): cada vez que se genera la web
   se piden las marcas de la temporada y quedan "horneadas" en el HTML
   estático. Así la página sigue siendo rápida y sin claves en el navegador.

   Robustez: si la API falla, cambia la clave o no hay red, la función
   devuelve null y la web usa las marcas fijas de content.ts. NUNCA rompe.

   Nota: la API de World Athletics no es pública ni está documentada. El
   endpoint y la clave los usa su propio frontend y PUEDEN cambiar con el
   tiempo; si algún día dejan de responder, hay que actualizarlos aquí (o
   la web seguirá mostrando las marcas de content.ts sin inmutarse).
   ============================================================ */

const ENDPOINT = "https://vceq3dpkzbe5heegyjj4skybnq.appsync-api.eu-west-1.amazonaws.com/graphql";
const API_KEY = "da2-tzmostylynabpfkrgbmmml4toq";
const ATHLETE_ID = 14879964;

// Límite reglamentario de viento a favor: por encima, la marca no homologa.
const LIMITE_VIENTO = 2.0;

// Orden y etiqueta corta de las pruebas que mostramos. Ojo: "200 Metres Short
// Track" (el 200 indoor) es una prueba DISTINTA del "200 Metres" al aire libre,
// así que tiene su propia casilla (si no, la más rápida se comería a la otra).
const PRUEBAS: { match: RegExp; label: string; orden: number }[] = [
  { match: /^60 Metres$/i, label: "60 m", orden: 1 },
  { match: /^100 Metres$/i, label: "100 m", orden: 2 },
  { match: /^200 Metres$/i, label: "200 m", orden: 3 },
  { match: /^200 Metres Short Track$/i, label: "200 m (i)", orden: 4 },
  { match: /^400 Metres($| Short Track$)/i, label: "400 m", orden: 5 },
];

export interface MarcaTemporada {
  event: string;
  mark: string;
  note: string; // fecha + matiz (viento / pista cubierta)
}

interface RawResult {
  indoor: boolean;
  discipline: string;
  mark: string;
  venue: string | null;
  date: string | null;
  wind: string | null;
}

/** Indoor de forma fiable: la API marca mal `indoor`, así que miramos también
 *  el "(i)" del recinto y las pruebas "Short Track". */
function esIndoor(r: RawResult): boolean {
  return r.indoor || /\(i\)/.test(r.venue ?? "") || /short track/i.test(r.discipline);
}

/** ¿La marca es homologable (legal)? Indoor sí; aire libre solo si viento ≤ +2.0. */
function esLegal(r: RawResult): boolean {
  if (esIndoor(r) || r.wind == null) return true;
  const v = parseFloat(r.wind);
  return Number.isNaN(v) ? true : v <= LIMITE_VIENTO;
}

/** Tiempo en segundos para comparar (menor = mejor). */
function aSegundos(mark: string): number {
  const m = mark.replace(",", ".");
  return m.includes(":")
    ? m.split(":").reduce((acc, x) => acc * 60 + parseFloat(x), 0)
    : parseFloat(m);
}

/**
 * Devuelve las mejores marcas LEGALES de la temporada indicada (o la más
 * reciente disponible), una por prueba. null si la API no responde.
 */
export async function marcasTemporada(lang: "es" | "en" = "es"): Promise<{ season: string; marcas: MarcaTemporada[] } | null> {
  const query = `query($id:Int){getSingleCompetitor(id:$id){seasonsBests{activeSeasons results{indoor discipline mark venue date wind}}}}`;
  const txtIndoor = "indoor";
  const txtViento = lang === "es" ? "viento" : "wind";

  try {
    const ctrl = new AbortController();
    const t = setTimeout(() => ctrl.abort(), 12000);
    const res = await fetch(ENDPOINT, {
      method: "POST",
      headers: { "content-type": "application/json", "x-api-key": API_KEY },
      body: JSON.stringify({ query, variables: { id: ATHLETE_ID } }),
      signal: ctrl.signal,
    });
    clearTimeout(t);
    if (!res.ok) return null;

    const json = await res.json();
    const sb = json?.data?.getSingleCompetitor?.seasonsBests;
    const season: string | undefined = sb?.activeSeasons?.[0];
    const results: RawResult[] = sb?.results ?? [];
    if (!season || results.length === 0) return null;

    // Mejor marca legal por prueba.
    const mejores = new Map<number, { r: RawResult; label: string }>();
    for (const r of results) {
      if (!esLegal(r)) continue;
      const p = PRUEBAS.find((x) => x.match.test(r.discipline));
      if (!p) continue;
      const actual = mejores.get(p.orden);
      if (!actual || aSegundos(r.mark) < aSegundos(actual.r.mark)) {
        mejores.set(p.orden, { r, label: p.label });
      }
    }
    if (mejores.size === 0) return null;

    const marcas: MarcaTemporada[] = [...mejores.values()]
      .sort((a, b) => PRUEBAS.find((p) => p.label === a.label)!.orden - PRUEBAS.find((p) => p.label === b.label)!.orden)
      .map(({ r, label }) => {
        const partes: string[] = [];
        if (r.date) partes.push(r.date);
        if (esIndoor(r)) partes.push(txtIndoor);
        else if (r.wind) partes.push(`${txtViento} ${r.wind}`);
        return { event: label, mark: r.mark, note: partes.join(" · ") };
      });

    return { season, marcas };
  } catch {
    return null; // cualquier fallo → la web usa las marcas de content.ts
  }
}
