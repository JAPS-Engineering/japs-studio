import * as React from 'react';

/**
 * IndexList — from @japs/encastre@1.0.0.
 */
export interface IndexListProps {
  items: IndexListItem[];
  /** overlay = card translúcida que cabalga entre el shell y una imagen (7d) · notch = la lista dentro de una muesca bl, dire */
  variant?: "overlay" | "notch";
  /** Nombre accesible de la navegación. */
  label?: string;
  /** Ancho en px (300 en overlay, 320 en notch). */
  width?: number;
  className?: string;
  style?: CSSProperties;
}

export declare const IndexList: React.ComponentType<IndexListProps>;
