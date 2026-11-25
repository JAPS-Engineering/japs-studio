import * as React from 'react';

/**
 * Glass — from @japs/encastre@1.0.0.
 */
export interface GlassProps {
  /** Padding interior desde la escala de espacio (sm 16 · md 24 · lg 32). */
  padding?: "none" | "sm" | "md" | "lg";
  className?: string;
  style?: CSSProperties;
  children?: React.ReactNode;
}

export declare const Glass: React.ComponentType<GlassProps>;
