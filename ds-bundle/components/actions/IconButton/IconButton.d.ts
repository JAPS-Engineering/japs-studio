import * as React from 'react';

/**
 * IconButton — from @japs/encastre@1.0.0.
 */
export interface IconButtonProps {
  /** Nombre accesible obligatorio (`aria-label`). */
  label: string;
  /** accent = menta (rota −45° en hover) · inverse = `--inverse` (menú en la muesca TR) · glass = vidrio sobre Panel o imagen */
  variant?: "glass" | "inverse" | "accent";
  /** Superficie del vidrio (solo `variant="glass"`): clear · light · tinted · solid (activo) · bare. */
  glass?: "light" | "solid" | "tinted" | "clear" | "bare";
  /** Relleno al pasar el cursor (solo `variant="glass"`): accent (por defecto) · surface · signal · inverse · halo. */
  hover?: "inverse" | "accent" | "signal" | "surface" | "halo";
  /** md = 44 px · lg = 52 px. Por defecto 52 en vidrio y 44 en el resto. */
  size?: "md" | "lg";
  /** Marca la opción activa en un rail (`aria-current="page"`). */
  current?: boolean;
  /** Con href se renderiza como enlace. */
  href?: string;
  onClick?: MouseEventHandler<HTMLElement>;
  className?: string;
  style?: CSSProperties;
  /** El icono (normalmente `<Icon name="…" />`) o unas siglas cortas en mono (p. ej. "GH"). */
  children: React.ReactNode;
}

export declare const IconButton: React.ComponentType<IconButtonProps>;
