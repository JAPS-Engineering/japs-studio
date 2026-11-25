import * as React from 'react';

/**
 * Panel — from @japs/encastre@1.0.0.
 */
export interface PanelProps {
  /** Padding interior desde la escala de espacio (sm 16 · md 24 · lg 32). */
  padding?: "none" | "sm" | "md" | "lg";
  /** Color que pintan las muescas (`Notch`) de este panel. Por defecto `var(--shell)`; pásalo cuando el panel no esté directa */
  shellColor?: string;
  as?: "div" | "header" | "article" | "section";
  className?: string;
  style?: CSSProperties;
  children?: React.ReactNode;
}

export declare const Panel: React.ComponentType<PanelProps>;
