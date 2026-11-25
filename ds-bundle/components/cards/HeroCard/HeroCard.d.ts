import * as React from 'react';

/**
 * HeroCard — from @japs/encastre@1.0.0.
 */
export interface HeroCardProps {
  /** Titular arriba (Archivo 600, 44 px, hasta ~340 px de ancho). */
  title: React.ReactNode;
  /** URL de la imagen de fondo; sin ella, el panel salvia. */
  image?: string;
  /** Label mono arriba a la derecha (p. ej. "Caso 03"). */
  badge?: string;
  /** Texto de la acción principal (píldora). */
  actionLabel: string;
  href?: string;
  onAction?: MouseEventHandler<HTMLElement>;
  /** Atajo del círculo. */
  shortcutLabel?: string;
  shortcutIcon?: React.ReactNode;
  onShortcut?: MouseEventHandler<HTMLElement>;
  /** Hover de las dos piezas (accent por defecto). */
  hover?: "inverse" | "accent" | "signal" | "surface" | "halo";
  /** Alto en px (400 por defecto). */
  height?: number;
  className?: string;
  style?: CSSProperties;
}

export declare const HeroCard: React.ComponentType<HeroCardProps>;
