import type { CSSProperties } from 'react';
import { Chip } from './Chip';
import { cx } from './cx';

export interface PointerLabelProps {
  /** Número de la cápsula (p. ej. "01"). */
  index: string;
  label: string;
  /** left = el anillo señala a la izquierda (label a la derecha) · right = espejado. */
  side?: 'left' | 'right';
  /** Largo de la guía en px. */
  length?: number;
  /**
   * Posición del anillo dentro del contenedor (con `position: relative`). Con side="right", `x` se mide desde el borde derecho.
   * Sin ella se renderiza en línea.
   */
  anchor?: { x: number | string; y: number | string };
  className?: string;
  style?: CSSProperties;
}

/**
 * Label con guía sobre imagen: anillo + guía hairline + cápsula de vidrio numerada; se espeja según el lado (lab 3b).
 */
export function PointerLabel({ index, label, side = 'left', length = 56, anchor, className, style }: PointerLabelProps) {
  const pos: CSSProperties = anchor
    ? { position: 'absolute', top: anchor.y, ...(side === 'right' ? { right: anchor.x } : { left: anchor.x }) }
    : {};
  return (
    <div className={cx('pointer-label', side === 'right' && 'pointer-label--right', className)} style={{ ...pos, ...style }}>
      <span className="pointer-label__ring" aria-hidden="true" />
      <span className="pointer-label__leader" aria-hidden="true" style={{ width: length }} />
      <span className="pointer-label__body"><Chip variant="inverse">{index}</Chip>{label}</span>
    </div>
  );
}
