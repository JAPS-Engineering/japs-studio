import * as React from 'react';

/**
 * VerticalNav — from @japs/encastre@1.0.0.
 */
export interface VerticalNavProps {
  items: VerticalNavItem[];
  /** Índice (desde 0) de la página activa; va en píldora. */
  current?: number;
  /** shell = sobre la carcasa · inverse = sobre un panel `--inverse` (lab 10d). */
  surface?: "inverse" | "shell";
  label?: string;
  className?: string;
  style?: CSSProperties;
}

export declare const VerticalNav: React.ComponentType<VerticalNavProps>;
