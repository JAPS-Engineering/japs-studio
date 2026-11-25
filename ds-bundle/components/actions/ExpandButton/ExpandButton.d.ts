import * as React from 'react';

/**
 * ExpandButton — from @japs/encastre@1.0.0.
 */
export interface ExpandButtonProps {
  /** Texto que aparece al expandirse; también es el nombre accesible. */
  label: string;
  /** Icono (normalmente `<Icon name="…" />`). */
  icon: React.ReactNode;
  /** Superficie del vidrio: clear · light (por defecto, sobre foto clara) · tinted · solid. */
  glass?: "light" | "solid" | "tinted" | "clear" | "bare";
  /** Relleno al pasar el cursor: accent (por defecto) · surface · signal · inverse · halo. */
  hover?: "inverse" | "accent" | "signal" | "surface" | "halo";
  /** Lo muestra abierto de forma controlada (p. ej. la opción activa del rail). */
  expanded?: boolean;
  href?: string;
  onClick?: MouseEventHandler<HTMLElement>;
  className?: string;
  style?: CSSProperties;
}

export declare const ExpandButton: React.ComponentType<ExpandButtonProps>;
