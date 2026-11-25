import * as React from 'react';

/**
 * Icon — from @japs/encastre@1.0.0.
 */
export interface IconProps {
  name: "arrow-right" | "arrow-left" | "arrow-up-right" | "menu" | "plus" | "close" | "moon" | "sun" | "play" | "search";
  /** Lado en px. */
  size?: number;
  /** Texto accesible; sin él el icono es decorativo (`aria-hidden`). */
  title?: string;
  style?: CSSProperties;
}

export declare const Icon: React.ComponentType<IconProps>;
