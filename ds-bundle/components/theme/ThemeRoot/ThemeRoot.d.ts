import * as React from 'react';

/**
 * ThemeRoot — from @japs/encastre@1.0.0.
 */
export interface ThemeRootProps {
  /** Modo de color del subárbol. Los dos modos van al mismo nivel. */
  theme?: "light" | "dark";
  /** Elemento HTML que se renderiza. */
  as?: "div" | "section" | "main" | "body";
  className?: string;
  style?: CSSProperties;
  children?: React.ReactNode;
}

export declare const ThemeRoot: React.ComponentType<ThemeRootProps>;
