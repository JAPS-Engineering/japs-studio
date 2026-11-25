import * as React from 'react';

/**
 * PointerLabel — from @japs/encastre@1.0.0.
 */
export interface PointerLabelProps {
  /** Número de la cápsula (p. ej. "01"). */
  index: string;
  label: string;
  /** left = el anillo señala a la izquierda (label a la derecha) · right = espejado. */
  side?: "left" | "right";
  /** Largo de la guía en px. */
  length?: number;
  /** Posición del anillo dentro del contenedor (con `position: relative`). Con side="right", `x` se mide desde el borde derec */
  anchor?: { x: number | string; y: number | string; };
  className?: string;
  style?: CSSProperties;
}

export declare const PointerLabel: React.ComponentType<PointerLabelProps>;
