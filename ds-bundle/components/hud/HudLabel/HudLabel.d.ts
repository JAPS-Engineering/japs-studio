import * as React from 'react';

/**
 * HudLabel — from @japs/encastre@1.0.0.
 */
export interface HudLabelProps {
  /** default = `--text` · muted = `--text-muted` · accent = `--accent-text`. */
  tone?: "default" | "muted" | "accent";
  /** Gira el label 90° (de abajo arriba) para muescas laterales y columnas verticales. */
  vertical?: boolean;
  as?: "div" | "p" | "span" | "dt" | "dd";
  className?: string;
  style?: CSSProperties;
  children: React.ReactNode;
}

export declare const HudLabel: React.ComponentType<HudLabelProps>;
