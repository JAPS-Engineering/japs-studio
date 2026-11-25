import * as React from 'react';

/**
 * LogoBar — from @japs/encastre@1.0.0.
 */
export interface LogoBarProps {
  /** logos = marcas de clientes (8a) · stack = tecnologías en mono (8b) · glass = logos en vidrio sobre panel o imagen (8c). */
  variant?: "glass" | "logos" | "stack";
  /** Label HUD de la izquierda. */
  label: string;
  /** Marcas para `logos` y `glass`. */
  logos?: LogoBarLogo[];
  /** Tecnologías para `stack`. */
  items?: string[];
  /** Chip inverso final que resume el resto (p. ej. "+12"). */
  more?: string;
  className?: string;
  style?: CSSProperties;
}

export declare const LogoBar: React.ComponentType<LogoBarProps>;
