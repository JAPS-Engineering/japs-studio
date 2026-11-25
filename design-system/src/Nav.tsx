import type { CSSProperties, ReactNode } from 'react';
import { cx } from './cx';

export interface NavProps {
  /** Nombre accesible de la navegación. */
  label?: string;
  className?: string;
  style?: CSSProperties;
  /** Pills; la activa va con `variant="accent"` y `current`. */
  children: ReactNode;
}

/**
 * Grupo de navegación en vidrio (ref. 12): pills sobre un Panel con la opción activa en menta.
 */
export function Nav({ label = 'Principal', className, style, children }: NavProps) {
  return (
    <nav aria-label={label} className={cx('encastre-nav', className)} style={style}>
      {children}
    </nav>
  );
}
