import * as React from 'react';

/**
 * Popover — from @japs/encastre@1.0.0.
 */
export interface PopoverProps {
  /** Nombre accesible del menú. */
  label?: string;
  className?: string;
  style?: CSSProperties;
  children?: React.ReactNode;
}

export declare const Popover: React.ComponentType<PopoverProps>;
