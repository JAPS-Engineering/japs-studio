import type { CSSProperties, ReactNode } from 'react';
import { cx } from './cx';

export interface TagProps {
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
}

/**
 * Tag de contorno 1 px en mono mayúsculas (ref. 21) para clasificar contenido: servicios, tecnologías, temas.
 */
export function Tag({ className, style, children }: TagProps) {
  return <span className={cx('tag', className)} style={style}>{children}</span>;
}
