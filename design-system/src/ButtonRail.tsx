import type { CSSProperties, ReactNode } from 'react';
import { cx } from './cx';

export interface ButtonRailProps {
  /** vertical = rail lateral sobre imagen (4a) · horizontal = fila social (4b). */
  orientation?: 'vertical' | 'horizontal';
  /** Nombre accesible de la navegación. */
  label?: string;
  /** Cápsula de cierre en vidrio lechoso (avatar + contador). Va al pie del rail vertical o al final de la fila. */
  capsule?: ReactNode;
  className?: string;
  style?: CSSProperties;
  /** IconButton con `variant="glass"`; la opción activa con `glass="solid"` y `current`. */
  children: ReactNode;
}

/**
 * Rail de botones circulares de vidrio sobre imagen: navegación vertical (4a) o fila social (4b).
 */
export function ButtonRail({ orientation = 'vertical', label = 'Principal', capsule, className, style, children }: ButtonRailProps) {
  return (
    <nav aria-label={label} className={cx('button-rail', `button-rail--${orientation}`, className)} style={style}>
      {children}
      {capsule ? <div className="button-rail__capsule">{capsule}</div> : null}
    </nav>
  );
}
