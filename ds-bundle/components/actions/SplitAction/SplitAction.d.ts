import * as React from 'react';

/**
 * SplitAction — from @japs/encastre@1.0.0.
 */
export interface SplitActionProps {
  /** Texto de la acción principal (píldora). */
  label: string;
  href?: string;
  onClick?: MouseEventHandler<HTMLElement>;
  /** Icono al inicio de la píldora. */
  leadingIcon?: React.ReactNode;
  /** Atajo en el círculo: icono y nombre accesible. */
  shortcut: { icon: ReactNode; label: string; href?: string; onClick?: MouseEventHandler<HTMLElement>; };
  /** Superficie del vidrio de las dos piezas: clear (sobre panel) · tinted (sobre imagen oscura) · light. */
  glass?: "light" | "solid" | "tinted" | "clear" | "bare";
  /** Hover de las dos piezas: accent (por defecto) · surface · signal · inverse · halo. */
  hover?: "inverse" | "accent" | "signal" | "surface" | "halo";
  className?: string;
  style?: CSSProperties;
}

export declare const SplitAction: React.ComponentType<SplitActionProps>;
