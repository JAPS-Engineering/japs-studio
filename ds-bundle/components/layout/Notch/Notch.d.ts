import * as React from 'react';

/**
 * Notch — from @japs/encastre@1.0.0.
 */
export interface NotchProps {
  /** Esquina o borde que muerde: tr, tl, br, bl (esquinas) · t, b (pestaña superior o inferior centrada) · l, r (pestaña late */
  corner: "tr" | "tl" | "br" | "bl" | "t" | "b" | "l" | "r";
  /** Radio del filete inverso: el del contenedor (`panel` 28 o `card` 16). */
  radius?: "panel" | "card";
  /** En móvil (≤720 px), apila una muesca inferior bajo el contenido en vez de morder. */
  stackOnMobile?: boolean;
  className?: string;
  style?: CSSProperties;
  /** El único elemento que aloja la muesca: CTA, menú, titular, selector o pestaña. */
  children: React.ReactNode;
}

export declare const Notch: React.ComponentType<NotchProps>;
