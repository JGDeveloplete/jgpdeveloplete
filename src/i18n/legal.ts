/* ============================================================
   Textos legales del portafolio (ES / EN).
   Es una web personal informativa: no vende nada ni tiene formularios
   que recojan datos. El contacto es por email (enlace mailto).
   ============================================================ */
import type { Lang } from "./content";

export interface LegalSection {
  h: string;
  p: string[];
}
export interface LegalDoc {
  title: string;
  updated: string;
  back: string;
  sections: LegalSection[];
}

export const legal: Record<Lang, LegalDoc> = {
  es: {
    title: "Aviso legal y privacidad",
    updated: "Última actualización: julio de 2026",
    back: "← Volver al inicio",
    sections: [
      {
        h: "Titular",
        p: [
          "Este sitio es el portafolio personal de Jose Giner Pérez, con fines de presentación profesional y deportiva. Para cualquier consulta puedes escribir a jgpathletics@gmail.com.",
        ],
      },
      {
        h: "Cookies",
        p: [
          "Esta web no utiliza cookies de seguimiento, analítica ni publicidad, y no elabora perfiles de las personas que la visitan.",
          "Únicamente guarda en tu propio navegador (mediante «localStorage») una preferencia técnica: el color de tema que elijas, para recordarlo en tu siguiente visita. Esa información no se envía a ningún servidor y puedes borrarla vaciando los datos del navegador.",
        ],
      },
      {
        h: "Servicios de terceros",
        p: [
          "Para mostrar la tipografía, la web carga fuentes desde Google Fonts, lo que implica una conexión a servidores de Google que puede registrar tu dirección IP. Puedes consultar su tratamiento en la política de privacidad de Google.",
          "Los enlaces a redes sociales (Instagram, YouTube, TikTok, LinkedIn) y al perfil de World Athletics llevan a sitios externos con sus propias políticas.",
        ],
      },
      {
        h: "Datos personales",
        p: [
          "Esta web no recoge datos personales a través de formularios. Si me escribes por correo electrónico, usaré tu mensaje y tu dirección únicamente para responderte, y no los cederé a terceros. Puedes solicitar en cualquier momento que elimine esa comunicación escribiendo al mismo correo.",
        ],
      },
      {
        h: "Propiedad de los contenidos",
        p: [
          "Los textos y las fotografías (imágenes de competición deportiva) se muestran con fines de presentación personal. Si eres autor o autora de alguna imagen y deseas una atribución concreta o su retirada, contacta conmigo y lo resolveré.",
        ],
      },
    ],
  },

  en: {
    title: "Legal notice & privacy",
    updated: "Last updated: July 2026",
    back: "← Back to home",
    sections: [
      {
        h: "Owner",
        p: [
          "This site is the personal portfolio of Jose Giner Pérez, for professional and athletic presentation. For any enquiry you can write to jgpathletics@gmail.com.",
        ],
      },
      {
        h: "Cookies",
        p: [
          "This website uses no tracking, analytics or advertising cookies, and does not profile its visitors.",
          "It only stores one technical preference in your own browser (via localStorage): the colour theme you pick, so it can be remembered on your next visit. That information is never sent to any server and you can remove it by clearing your browser data.",
        ],
      },
      {
        h: "Third-party services",
        p: [
          "To display its typography the site loads fonts from Google Fonts, which involves a connection to Google servers that may log your IP address. See Google's privacy policy for details.",
          "Links to social media (Instagram, YouTube, TikTok, LinkedIn) and to the World Athletics profile lead to external sites with their own policies.",
        ],
      },
      {
        h: "Personal data",
        p: [
          "This website collects no personal data through forms. If you email me, I will use your message and address only to reply, and will not share them with third parties. You can ask me to delete that communication at any time by writing to the same address.",
        ],
      },
      {
        h: "Content ownership",
        p: [
          "The texts and photographs (sports competition images) are shown for personal presentation. If you are the author of any image and would like a specific credit or its removal, contact me and I will sort it out.",
        ],
      },
    ],
  },
};
