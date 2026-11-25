import * as React from 'react';

/**
 * PopoverItem — from @japs/encastre@1.0.0.
 */
export interface PopoverItemProps {
  href?: string;
  /** Marca el ítem activo (`aria-current`). */
  current?: boolean;
  onClick?: () => void;
  className?: string;
  children: React.ReactNode;
}

export declare const PopoverItem: React.ComponentType<PopoverItemProps>;
