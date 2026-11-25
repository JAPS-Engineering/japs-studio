import * as React from 'react';

/**
 * Heading — from @japs/encastre@1.0.0.
 */
export interface HeadingProps {
  /** statement = Archivo expandida 800 en MAYÚSCULAS, 44→128 px (uno por vista, ref. 12) · headline = Archivo 400 en caja mix */
  variant?: "condensed" | "statement" | "headline" | "h1" | "h2" | "h3";
  /** Nivel semántico; por defecto se deriva de la variante. */
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
  className?: string;
  style?: CSSProperties;
  children: React.ReactNode;
}

export declare const Heading: React.ComponentType<HeadingProps>;
