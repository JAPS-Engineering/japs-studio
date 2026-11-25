import * as React from 'react';

/**
 * HistoryStack — from @japs/encastre@1.0.0.
 */
export interface HistoryStackProps {
  items: HistoryItem[];
  /** Índice (desde 0) de la versión actual; va en `--inverse`. */
  current?: number;
  label?: string;
  className?: string;
  style?: CSSProperties;
}

export declare const HistoryStack: React.ComponentType<HistoryStackProps>;
