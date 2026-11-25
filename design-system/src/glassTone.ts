/**
 * Superficie de un control de vidrio:
 * clear = vidrio del sistema (`--glass`) · light = lechoso, sobre panel o foto clara ·
 * tinted = tintado, sobre imagen oscura · solid = superficie sólida (opción activa) ·
 * bare = sin fondo (contadores dentro de un rail).
 */
export type GlassTone = 'clear' | 'light' | 'tinted' | 'solid' | 'bare';

/**
 * Relleno al pasar el cursor: accent (menta, por defecto) · surface (blanco, el más neutro
 * sobre imágenes oscuras) · signal (naranja; un solo botón por vista) · inverse (tinta, sobre
 * imágenes claras) · halo (aro menta; se rellena solo al pulsar).
 */
export type GlassHover = 'accent' | 'surface' | 'signal' | 'inverse' | 'halo';

/** Clases de un control de vidrio. Uso interno. */
export function glassClasses(tone: GlassTone, shape: 'circle' | 'pill', size: 'md' | 'lg'): string {
  return [
    'glass-ctl',
    `glass-ctl--${shape}`,
    size === 'md' && 'glass-ctl--md',
    tone !== 'clear' && `glass-ctl--${tone}`,
  ].filter(Boolean).join(' ');
}
