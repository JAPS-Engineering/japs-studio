import type { CSSProperties, ReactNode } from 'react';
import { cx } from './cx';

export interface ShellProps {
  as?: 'div' | 'main' | 'section';
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
}

/**
 * Carcasa exterior (radio 40, padding = gap): el fondo que "muerde" los paneles mediante muescas.
 */
export function Shell({ as: Tag = 'div', className, style, children }: ShellProps) {
  return (
    <Tag className={cx('shell', className)} style={style}>
      {children}
    </Tag>
  );
}
