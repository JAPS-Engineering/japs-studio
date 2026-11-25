import * as React from 'react';

/**
 * SectionIndex — from @japs/encastre@1.0.0.
 */
export interface SectionIndexProps {
  items: SectionIndexItem[];
  /** Índice (desde 0) de la sección actual. */
  current: number;
  /** spotlight = alineado a la derecha; la actual en Archivo expandido con un punto (9a) · rail = riel hairline con marcador  */
  variant?: "spotlight" | "rail" | "minimal";
  label?: string;
  className?: string;
  style?: CSSProperties;
}

export declare const SectionIndex: React.ComponentType<SectionIndexProps>;
