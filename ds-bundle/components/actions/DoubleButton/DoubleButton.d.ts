import * as React from 'react';

/**
 * DoubleButton — from @japs/encastre@1.0.0.
 */
export interface DoubleButtonProps {
  /** arrows = anterior / siguiente (6a) · counter = flechas con `n / total` (6b) · action = label + círculo relleno (6c). */
  variant?: "arrows" | "counter" | "action";
  /** glass = vidrio sobre panel · tinted = sobre imagen oscura · solid = sobre superficie. */
  surface?: "glass" | "solid" | "tinted";
  /** Posición actual (desde 1) para `counter`. */
  index?: number;
  /** Total de elementos para `counter`. */
  total?: number;
  onPrev?: MouseEventHandler<HTMLButtonElement>;
  onNext?: MouseEventHandler<HTMLButtonElement>;
  /** Texto de la acción (`action`). */
  label?: string;
  /** Enlace de la acción (`action`). */
  href?: string;
  /** Nombre accesible del círculo de la acción (`action`). */
  actionLabel?: string;
  onAction?: MouseEventHandler<HTMLElement>;
  /** Icono del círculo de la acción (por defecto arrow-right). */
  icon?: React.ReactNode;
  /** Nombre accesible del grupo. */
  groupLabel?: string;
  className?: string;
  style?: CSSProperties;
}

export declare const DoubleButton: React.ComponentType<DoubleButtonProps>;
