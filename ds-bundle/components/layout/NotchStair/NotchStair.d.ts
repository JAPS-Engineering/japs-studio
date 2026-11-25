import * as React from 'react';

/**
 * NotchStair — from @japs/encastre@1.0.0.
 */
export interface NotchStairProps {
  /** Esquina inferior que muerde: br (escalera a la derecha) o bl (a la izquierda). */
  corner: "br" | "bl";
  /** Peldaños de arriba abajo, cada uno más ancho que el anterior. 2–3 peldaños. */
  steps: NotchStairStep[];
  /** stack = cada peldaño aloja su contenido en su propia franja (1c) · ledge = el primer peldaño es una columna estrecha que */
  layout?: "stack" | "ledge";
  className?: string;
  style?: CSSProperties;
}

export declare const NotchStair: React.ComponentType<NotchStairProps>;
