/** Rutas del sitio. Los enlaces se escriben aquí una vez y los usan header, menú móvil, footer y CTAs. */
export const routes = {
  home: '/',
  portfolio: '/portafolio',
  contact: '/contacto',
  howItWorks: '/#como-trabajamos',
  workWithUs: '/#que-es',
  about: '/#nosotros',
  faq: '/#a11',
} as const;

export type NavLink = { label: string; href: string };

/** Menú principal. Portafolio va en tercer lugar: en el header abre el panel de productos. */
export const navLinks: NavLink[] = [
  { label: 'Cómo funciona', href: routes.howItWorks },
  { label: 'Trabaja con nosotros', href: routes.workWithUs },
  { label: 'Portafolio', href: routes.portfolio },
  { label: 'Nosotros', href: routes.about },
  { label: 'Preguntas', href: routes.faq },
];

/** Capacidades que se nombran en el footer y en el portafolio. */
export const capabilities = [
  'Software e inteligencia artificial',
  'Deep tech',
  'Hardware o IoT',
  'Robótica',
  'Automatización',
];
