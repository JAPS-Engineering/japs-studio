import * as React from 'react';

/**
 * Nav — from @japs/encastre@1.0.0.
 */
export interface NavProps {
  /** Nombre accesible de la navegación. */
  label?: string;
  className?: string;
  style?: CSSProperties;
  /** Pills; la activa va con `variant="accent"` y `current`. */
  children: React.ReactNode;
}

export declare const Nav: React.ComponentType<NavProps>;
