import type { CSSProperties, ReactNode } from 'react';
import { cx } from './cx';

export interface NotchProps {
  /**
   * Esquina o borde que muerde: tr, tl, br, bl (esquinas) · t, b (pestaña superior o inferior
   * centrada) · l, r (pestaña lateral centrada en vertical; aloja un control vertical).
   */
  corner: 'tr' | 'tl' | 'br' | 'bl' | 't' | 'b' | 'l' | 'r';
  /** Radio del filete inverso: el del contenedor (`panel` 28 o `card` 16). */
  radius?: 'panel' | 'card';
  /** En móvil (≤720 px), apila una muesca inferior bajo el contenido en vez de morder. */
  stackOnMobile?: boolean;
  className?: string;
  style?: CSSProperties;
  /** El único elemento que aloja la muesca: CTA, menú, titular, selector o pestaña. */
  children: ReactNode;
}

/**
 * Muesca con filete inverso: el shell muerde una esquina o un borde del Panel (o Card) y aloja un único elemento.
 * Firma del sistema (refs. 12 y 21). Máximo 2 por panel, en esquinas o bordes opuestos (tr + bl, tl + br, l + r, t + b).
 */
export function Notch({ corner, radius = 'panel', stackOnMobile = false, className, style, children }: NotchProps) {
  const vars = {
    ...(radius === 'card' ? { '--notch-r': 'var(--r-card)' } : null),
    ...style,
  } as CSSProperties;
  return (
    <div className={cx('notch', `notch--${corner}`, stackOnMobile && 'notch--stack', className)} style={vars}>
      {children}
    </div>
  );
}
