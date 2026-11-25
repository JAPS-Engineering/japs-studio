import * as React from 'react';

/**
 * Shell — from @japs/encastre@1.0.0.
 */
export interface ShellProps {
  as?: "div" | "section" | "main";
  className?: string;
  style?: CSSProperties;
  children?: React.ReactNode;
}

export declare const Shell: React.ComponentType<ShellProps>;
