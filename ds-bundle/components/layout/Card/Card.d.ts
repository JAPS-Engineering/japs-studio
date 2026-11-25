import * as React from 'react';

/**
 * Card — from @japs/encastre@1.0.0.
 */
export interface CardProps {
  /** default = `--surface` · muted = `--surface-2` · inverse = `--inverse`. */
  variant?: "default" | "muted" | "inverse";
  /** Padding interior desde la escala de espacio (sm 16 · md 24 · lg 32). */
  padding?: "none" | "sm" | "md" | "lg";
  as?: "div" | "article" | "section" | "li";
  className?: string;
  style?: CSSProperties;
  children?: React.ReactNode;
}

export declare const Card: React.ComponentType<CardProps>;
