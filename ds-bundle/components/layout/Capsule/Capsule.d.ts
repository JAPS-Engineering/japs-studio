import * as React from 'react';

/**
 * Capsule — from @japs/encastre@1.0.0.
 */
export interface CapsuleProps {
  /** vertical = sidebar de ref. 21 · horizontal = barra superior en móvil. */
  orientation?: "vertical" | "horizontal";
  as?: "aside" | "nav" | "div" | "header";
  className?: string;
  style?: CSSProperties;
  children?: React.ReactNode;
}

export declare const Capsule: React.ComponentType<CapsuleProps>;
