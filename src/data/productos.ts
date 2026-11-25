/**
 * Productos del portafolio. Header (panel y menú móvil), portada (hero,
 * selector y carrusel), portafolio y footer se generan desde esta lista.
 */
export type Partner = {
  name: string;
  logo: string;
  /** El logo es solo un símbolo: se muestra junto al nombre. */
  mark?: boolean;
};

export type Status = { label: string; on: boolean };

export type Product = {
  slug: string;
  name: string;
  logo: string;
  /** Fondo de la ficha del logo. */
  logoBg: string;
  img: string;
  /** Categoría corta (SaaS · Ley 21.719). */
  cat: string;
  /** Categoría con el socio, para listas (SaaS · Construcción · con Nevermore). */
  catLong: string;
  /** Titular de venta. */
  headline: string;
  /** Descripción del selector de la portada. */
  pitch: string;
  /** Descripción breve del hero y del portafolio. */
  summary: string;
  status: Status;
  partner?: Partner;
  /** Ficha del portafolio. */
  label: string;
  meta?: string;
  site?: string;
};

const published: Status = { label: 'Publicado y en venta', on: true };
const pending: Status = { label: 'Por confirmar', on: false };
const research: Status = { label: 'En investigación', on: false };

const partners = {
  duegreen: { name: 'DueGreen', logo: '/img/socios/duegreen.png' },
  nevermore: { name: 'Nevermore', logo: '/img/socios/nevermore.svg', mark: true },
  imagineria: { name: 'Imaginería', logo: '/img/socios/imagineria.svg' },
} satisfies Record<string, Partner>;

export const products: Product[] = [
  {
    slug: 'consenty',
    name: 'Consenty',
    logo: '/img/logos/consenty.svg',
    logoBg: '#EEF0FC',
    img: '/img/heros/consenty.jpg',
    cat: 'SaaS · Ley 21.719',
    catLong: 'SaaS · Ley 21.719',
    headline: 'Cumple la nueva ley de protección de datos personales',
    pitch: 'Gestión de consentimientos segura y sencilla, con evidencia auditable.',
    summary: 'Gestión de consentimientos según la Ley 21.719 de protección de datos.',
    status: published,
    label: 'Software · Protección de datos',
    meta: 'Un producto de JAPS Studio · consenty.japs.ing',
    site: 'https://consenty.japs.ing/',
  },
  {
    slug: 'projectcheck',
    name: 'Project Check',
    logo: '/img/logos/projectcheck.svg',
    logoBg: '#E7EDE3',
    img: '/img/heros/projectcheck.jpg',
    cat: 'SaaS · Medio ambiente',
    catLong: 'SaaS · Medio ambiente · con DueGreen',
    headline: 'Sepa lo que su terreno permite, antes de invertir',
    pitch:
      'Informes de prefactibilidad ambiental para cualquier predio en Chile, con fuentes oficiales del Estado, en el mismo día.',
    summary: 'Prefactibilidad ambiental de predios en Chile.',
    status: published,
    partner: partners.duegreen,
    label: 'Software · Medio ambiente',
    meta: 'Un producto de JAPS Studio · projectcheck.japs.ing',
    site: 'https://projectcheck.japs.ing/',
  },
  {
    slug: 'brixor',
    name: 'Brixor',
    logo: '/img/logos/brixor.svg',
    logoBg: '#EDF5FF',
    img: '/img/heros/brixor.jpg',
    cat: 'SaaS · Construcción',
    catLong: 'SaaS · Construcción · con Nevermore',
    headline: 'Cubicación automática de planos en minutos',
    pitch: 'Cubica planos y conecta las cantidades aprobadas con presupuestos, compras y avance de obra.',
    summary: 'Cubicación automática de planos en minutos.',
    status: pending,
    partner: partners.nevermore,
    label: 'Software · Construcción',
    site: 'https://brixor.cl/',
  },
  {
    slug: 'melian',
    name: 'Melian',
    logo: '/img/logos/melian.svg',
    logoBg: '#F5F5F5',
    img: '/img/heros/melian.jpg',
    cat: 'SaaS · Minería',
    catLong: 'SaaS · Minería · con Imaginería',
    headline: 'Gestiona los riesgos críticos de tu operación minera',
    pitch: 'Gestiona controles críticos, matrices de riesgo y riesgos de fatalidad en operaciones mineras.',
    summary: 'Gestión de riesgos críticos en operaciones mineras.',
    status: pending,
    partner: partners.imagineria,
    label: 'Software · Minería',
    meta: 'Un producto de JAPS Studio',
    site: 'https://melian.japs.ing/',
  },
  {
    slug: 'relatio',
    name: 'Relatio',
    logo: '/img/logos/relatio.svg',
    logoBg: '#F7F8FA',
    img: '/img/heros/relatio.jpg',
    cat: 'SaaS · Seguros',
    catLong: 'SaaS · Seguros',
    headline: 'La siniestralidad de cada póliza, clara y a tiempo',
    pitch: 'Consolida pólizas, primas y siniestros para generar informes de siniestralidad y de gestión.',
    summary: 'Informes de siniestralidad y de gestión para seguros.',
    status: pending,
    label: 'Software · Seguros',
    site: 'https://relatio.japs.ing/',
  },
  {
    slug: 'sonicali',
    name: 'Sonicali',
    logo: '/img/logos/sonicali.svg',
    logoBg: '#FFFFFF',
    img: '/img/heros/sonicali.jpg',
    cat: 'Hardware · Acuicultura',
    catLong: 'Hardware · Acuicultura',
    headline: 'Ultrasonido contra el piojo de mar',
    pitch: 'Dispositivo de ultrasonido para combatir el piojo de mar en la industria salmonera.',
    summary: 'Dispositivo de ultrasonido para combatir el piojo de mar en la industria salmonera.',
    status: research,
    label: 'Deep tech y hardware · Acuicultura',
  },
];

const bySlug = (slugs: string[]) => slugs.map((s) => products.find((p) => p.slug === s)!);

/** Paginador del hero de la portada. */
export const heroProducts = bySlug(['brixor', 'projectcheck', 'melian', 'relatio']);
/** Columna «Portafolio» del footer. */
export const footerProducts = bySlug(['consenty', 'projectcheck', 'melian', 'sonicali']);

/** Ficha del producto dentro del portafolio. */
export const productHref = (p: Product) => `/portafolio#${p.slug}`;

/** Socios con su partner, para los bloques «Junto a» que cambian con el producto activo. */
export const partnered = products.filter((p) => p.partner);

export const prototypes = [
  {
    name: 'Rendi JAPS',
    img: '/img/heros/laboratorio.jpg',
    text: 'Rendición de gastos para proyectos financiados con fondos concursables.',
    status: { label: 'Prueba de concepto', on: false },
  },
  {
    name: 'Recolección de datos sin señal',
    img: '/img/heros/hardware.jpg',
    status: pending,
  },
];
