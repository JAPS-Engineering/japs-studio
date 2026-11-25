import * as React from 'react';

/**
 * StudioMark — from @japs/encastre@1.0.0.
 */
export interface StudioMarkProps {
  /** Lado de la marca en px (56 por defecto; 42 en paneles, 28 en chips). Todo escala en `em`. */
  size?: number;
  /** Con href se renderiza como enlace; en hover pasa a `--accent-text`. */
  href?: string;
  /** Nombre accesible (obligatorio como enlace). */
  label?: string;
  className?: string;
  style?: CSSProperties;
}

export declare const StudioMark: React.ComponentType<StudioMarkProps>;
