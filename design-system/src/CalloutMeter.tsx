import type { CSSProperties, ReactNode } from 'react';
import { CalloutBadge } from './Callout';
import { cx } from './cx';

export interface CalloutMeterProps {
  /** Posición (esquina superior izquierda) de la card en px dentro del contenedor (con `position: relative`). */
  x: number;
  y: number;
  /** Punto señalado, a la derecha y por debajo de la card. La guía sale del borde derecho y baja en codo (curva de 20 px). */
  target: { x: number; y: number };
  /** Label mono junto al icono. */
  title: string;
  value: ReactNode;
  unit?: string;
  /** Avance de la barra (0–1). */
  progress: number;
  icon?: ReactNode;
  /** solid = tinta (por defecto) · glass = tinta translúcida sobre la imagen. */
  surface?: 'solid' | 'glass';
  width?: number;
  /** Altura de la guía horizontal medida desde la cima de la card (66 por defecto: el centro de la card). */
  elbowOffset?: number;
  className?: string;
  style?: CSSProperties;
}

/**
 * Callout con medidor sobre imagen: card en tinta con cifra y barra de progreso menta, unida al punto por una guía en codo (lab 6e).
 */
export function CalloutMeter({
  x, y, target, title, value, unit, progress, icon, surface = 'solid', width = 248, elbowOffset = 66, className, style,
}: CalloutMeterProps) {
  const pct = Math.round(Math.min(1, Math.max(0, progress)) * 100);
  const elbowTop = y + elbowOffset;
  return (
    <>
      <span className="callout-elbow" aria-hidden="true"
        style={{ left: x + width, top: elbowTop, width: Math.max(0, target.x - (x + width)), height: Math.max(0, target.y - elbowTop) }} />
      <span className="callout-target" aria-hidden="true" style={{ left: target.x, top: target.y }} />
      <div className={cx('callout-meter', surface === 'glass' && 'callout-meter--glass', className)} style={{ left: x, top: y, width, ...style }}>
        <div className="callout-meter__head"><CalloutBadge icon={icon} /><span className="callout__label">{title}</span></div>
        <span className="callout__figure"><strong className="callout__value">{value}</strong>{unit ? <span className="callout__unit">{unit}</span> : null}</span>
        <span className="callout-meter__track" role="meter" aria-valuemin={0} aria-valuemax={100} aria-valuenow={pct} aria-label={title}>
          <span className="callout-meter__bar" style={{ width: `${pct}%` }} />
        </span>
      </div>
    </>
  );
}
