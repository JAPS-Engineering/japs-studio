import * as React from 'react';

/**
 * Timeline — from @japs/encastre@1.0.0.
 */
export interface TimelineProps {
  steps: TimelineStep[];
  /** Índice (desde 0) del paso activo; su nodo va en menta (`aria-current="step"`). */
  current?: number;
  className?: string;
  style?: CSSProperties;
}

export declare const Timeline: React.ComponentType<TimelineProps>;
