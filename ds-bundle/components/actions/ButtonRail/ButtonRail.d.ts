import * as React from 'react';

/**
 * ButtonRail — from @japs/encastre@1.0.0.
 */
export interface ButtonRailProps {
  /** vertical = rail lateral sobre imagen (4a) · horizontal = fila social (4b). */
  orientation?: "vertical" | "horizontal";
  /** Nombre accesible de la navegación. */
  label?: string;
  /** Cápsula de cierre en vidrio lechoso (avatar + contador). Va al pie del rail vertical o al final de la fila. */
  capsule?: React.ReactNode;
  className?: string;
  style?: CSSProperties;
  /** IconButton con `variant="glass"`; la opción activa con `glass="solid"` y `current`. */
  children: React.ReactNode;
}

export declare const ButtonRail: React.ComponentType<ButtonRailProps>;
