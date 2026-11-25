import * as React from 'react';

/**
 * Text — from @japs/encastre@1.0.0.
 */
export interface TextProps {
  /** body 16/1.6 · body-l 18 · small 14. */
  size?: "body" | "body-l" | "small";
  /** inherit = color del contenedor (correcto sobre Panel, Card y ThemeRoot) · default = fuerza `--text` · muted = `--text-mu */
  tone?: "default" | "muted" | "accent" | "inherit";
  as?: "div" | "p" | "span";
  className?: string;
  style?: CSSProperties;
  children: React.ReactNode;
}

export declare const Text: React.ComponentType<TextProps>;
