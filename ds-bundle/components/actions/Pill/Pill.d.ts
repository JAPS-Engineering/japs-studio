import * as React from 'react';

/**
 * Pill — from @japs/encastre@1.0.0.
 */
export interface PillProps {
  /** outline = contorno 1 px · accent = CTA menta (una por vista) · solid = `--inverse` · glass = píldora de vidrio sobre Pan */
  variant?: "glass" | "solid" | "accent" | "outline";
  /** md = 40 px (44 en vidrio) · lg = 52 px (CTA principal). */
  size?: "md" | "lg";
  /** Con href se renderiza como enlace; sin él, como botón. */
  href?: string;
  /** Icono en un círculo menta al final (rota −45° en hover). Úsalo con size="lg" en outline/accent/solid. */
  icon?: React.ReactNode;
  /** Icono al inicio, sin círculo: el formato "icono + label" de la píldora de vidrio. */
  leadingIcon?: React.ReactNode;
  /** Superficie del vidrio (solo `variant="glass"`): clear · light · tinted · solid · bare. */
  glass?: "light" | "solid" | "tinted" | "clear" | "bare";
  /** Relleno al pasar el cursor (solo `variant="glass"`): accent (por defecto) · surface · signal · inverse · halo. */
  hover?: "inverse" | "accent" | "signal" | "surface" | "halo";
  /** Marca la opción activa en una navegación (`aria-current="page"`). */
  current?: boolean;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLElement>;
  className?: string;
  style?: CSSProperties;
  children: React.ReactNode;
}

export declare const Pill: React.ComponentType<PillProps>;
