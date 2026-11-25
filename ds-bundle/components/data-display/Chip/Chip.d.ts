import * as React from 'react';

/**
 * Chip — from @japs/encastre@1.0.0.
 */
export interface ChipProps {
  /** default = `--surface-2` · accent = menta · inverse = `--inverse` · signal = naranja (una por vista). */
  variant?: "default" | "inverse" | "accent" | "signal";
  /** Antepone un LiveDot (estado "en vivo"). */
  live?: boolean;
  className?: string;
  style?: CSSProperties;
  children: React.ReactNode;
}

export declare const Chip: React.ComponentType<ChipProps>;
