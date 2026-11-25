import type { CSSProperties, ReactNode } from 'react';
import { cx } from './cx';

/** Pastilla menta con lente: el icono por defecto de los callouts. Uso interno. */
export function CalloutBadge({ icon }: { icon?: ReactNode }) {
  return <span className="callout-badge" aria-hidden="true">{icon ?? <span className="callout-badge__lens" />}</span>;
}

type Point = { x: number; y: number };

/** Silueta de la card con pestaña (72 × 44) unida por un filete inverso de 16 px. */
function tabPath(w: number, h: number) {
  return `M0 16A16 16 0 0 1 16 0H56A16 16 0 0 1 72 16V28A16 16 0 0 0 88 44H${w - 16}A16 16 0 0 1 ${w} 60V${h - 16}A16 16 0 0 1 ${w - 16} ${h}H16A16 16 0 0 1 0 ${h - 16}Z`;
}

export interface CalloutProps {
  /** Posición (esquina superior izquierda) de la card en px dentro del contenedor (con `position: relative`). */
  x: number;
  y: number;
  /** Punto señalado en la imagen, en px. La guía diagonal va del punto a la esquina inferior izquierda de la card. */
  target: Point;
  /** Label mono (p. ej. "Lente — L1"). */
  title: string;
  /** Cifra principal. */
  value: ReactNode;
  /** Unidad o total junto a la cifra (p. ej. "/ 100"). */
  unit?: string;
  /** Icono de la pestaña; por defecto una lente sobre menta. */
  icon?: ReactNode;
  /** glass = vidrio lechoso translúcido (por defecto) · solid = `--surface`. */
  surface?: 'glass' | 'solid';
  width?: number;
  height?: number;
  className?: string;
  style?: CSSProperties;
}

/**
 * Callout de dato sobre imagen: card con una pestaña que aloja el icono (filete inverso de 16 px) y guía diagonal hasta el punto (lab 6d).
 */
export function Callout({ x, y, target, title, value, unit, icon, surface = 'glass', width = 236, height = 148, className, style }: CalloutProps) {
  const end = { x: x + 4, y: y + height - 4 };
  const dx = end.x - target.x;
  const dy = end.y - target.y;
  const length = Math.hypot(dx, dy);
  const angle = (Math.atan2(dy, dx) * 180) / Math.PI;
  return (
    <>
      <span className="callout-leader" aria-hidden="true" style={{ left: target.x, top: target.y, width: length, rotate: `${angle}deg` }} />
      <span className="callout-target" aria-hidden="true" style={{ left: target.x, top: target.y }} />
      {/* El recorte va en el contenedor: así también recorta el backdrop-filter del vidrio. */}
      <div className={cx('callout', `callout--${surface}`, className)}
        style={{ left: x, top: y, width, height, clipPath: `path('${tabPath(width, height)}')`, ...style }}>
        <div className="callout__shape" aria-hidden="true" />
        <span className="callout__tab"><CalloutBadge icon={icon} /></span>
        <div className="callout__body">
          <span className="callout__label">{title}</span>
          <span className="callout__figure"><strong className="callout__value">{value}</strong>{unit ? <span className="callout__unit">{unit}</span> : null}</span>
        </div>
      </div>
    </>
  );
}
