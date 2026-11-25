import * as React from 'react';

/**
 * Callout — from @japs/encastre@1.0.0.
 */
export interface CalloutProps {
  /** Posición (esquina superior izquierda) de la card en px dentro del contenedor (con `position: relative`). */
  x: number;
  y: number;
  /** Punto señalado en la imagen, en px. La guía diagonal va del punto a la esquina inferior izquierda de la card. */
  target: Point;
  /** Label mono (p. ej. "Lente — L1"). */
  title: string;
  /** Cifra principal. */
  value: React.ReactNode;
  /** Unidad o total junto a la cifra (p. ej. "/ 100"). */
  unit?: string;
  /** Icono de la pestaña; por defecto una lente sobre menta. */
  icon?: React.ReactNode;
  /** glass = vidrio lechoso translúcido (por defecto) · solid = `--surface`. */
  surface?: "glass" | "solid";
  width?: number;
  height?: number;
  className?: string;
  style?: CSSProperties;
}

export declare const Callout: React.ComponentType<CalloutProps>;
