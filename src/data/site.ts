/** Datos de marca y contacto de JAPS Studio. Fuente única para header, footer, SEO y formulario. */
export const site = {
  name: 'JAPS Studio',
  url: 'https://studio.japs.ing',
  description:
    'JAPS Studio es una constructora de startups. Construimos soluciones y empresas junto a personas que conocen de cerca un problema y su mercado, con ciencia, ingeniería, diseño e investigación.',
  email: 'contacto@japs.ing',
  phone: '+56 9 9318 3282',
  whatsapp: 'https://wa.me/56993183282',
  linkedin: 'https://linkedin.japs.ing',
  instagram: 'https://instagram.japs.ing',
  ogImage: '/img/og.jpg',
  ogImageAlt: 'JAPS Studio: Construyamos el futuro juntos',
  /** Formulario de contacto: mismo endpoint que japs.ing (JAPS Core). */
  contactEndpoint: 'https://core.japs.ing/api/publico/contacto/',
} as const;

export const engineering = {
  name: 'JAPS Engineering',
  url: 'https://japs.ing',
  about: 'https://japs.ing/nosotros',
  terms: 'https://japs.ing/terminos',
  privacy: 'https://japs.ing/privacidad',
} as const;

export const ciuc = {
  name: 'Centro de Innovación UC',
  url: 'https://centrodeinnovacion.uc.cl/',
} as const;
