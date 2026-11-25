import * as React from 'react';

/**
 * Key — from @japs/encastre@1.0.0.
 */
export interface KeyProps {
  /** square = 112×112 menta, se vuelve círculo (7a) · wide = 216×92 en `--inverse` con titular (7b) · stat = 112×112 con labe */
  shape: "square" | "wide" | "stat" | "corner" | "drop";
  href?: string;
  onClick?: MouseEventHandler<HTMLElement>;
  /** Nombre accesible. Obligatorio en square, corner y drop (solo llevan icono). */
  label?: string;
  /** Titular corto de `wide` (admite `<br />`). */
  title?: React.ReactNode;
  /** Label mono de `stat`. */
  caption?: string;
  /** Cifra de `stat`. */
  value?: React.ReactNode;
  /** Icono propio; por defecto arrow-up-right (apunta abajo-izquierda en corner y drop). */
  icon?: React.ReactNode;
  className?: string;
  style?: CSSProperties;
}

export declare const Key: React.ComponentType<KeyProps>;
