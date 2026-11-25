import * as React from 'react';

/**
 * DisplayTitle — from @japs/encastre@1.0.0.
 */
export interface DisplayTitleProps {
  /** split = la palabra se parte en diagonal (arriba izquierda, abajo derecha), Archivo expandido 800 (9d) · condensed = una  */
  variant: "vertical" | "split" | "condensed";
  /** La palabra o frase del titular. */
  text: string;
  /** Posición del corte en `split` (por defecto, la mitad de la palabra). */
  splitAt?: number;
  /** Tamaño en px (split 200 · condensed 260 · vertical 150). */
  size?: number;
  className?: string;
  style?: CSSProperties;
  /** Capa del objeto que tapa el titular (PNG recortado, render), con z-index superior. */
  children?: React.ReactNode;
}

export declare const DisplayTitle: React.ComponentType<DisplayTitleProps>;
