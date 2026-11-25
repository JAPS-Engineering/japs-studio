import type { CSSProperties } from 'react';
import { cx } from './cx';

export interface TagClusterProps {
  /** Tags que nombran lo que se ve en la imagen (p. ej. "#Producto"). */
  tags: string[];
  /** Posición del racimo dentro de su contenedor (con `position: relative`), en px o %. Sin ella se renderiza en línea. */
  anchor?: { x: number | string; y: number | string };
  /** Lado del punto de anclaje: left (por defecto) o right. */
  side?: 'left' | 'right';
  className?: string;
  style?: CSSProperties;
}

/**
 * Racimo de tags sobre imagen: cápsulas de superficie en mono dentro de un vidrio con un punto de anclaje (lab 3a).
 */
export function TagCluster({ tags, anchor, side = 'left', className, style }: TagClusterProps) {
  const pos: CSSProperties = anchor ? { position: 'absolute', left: anchor.x, top: anchor.y } : {};
  return (
    <div className={cx('tag-cluster', side === 'right' && 'tag-cluster--right', className)} style={{ ...pos, ...style }}>
      <span className="tag-cluster__anchor" aria-hidden="true" />
      {tags.map((t) => <span key={t} className="tag-cluster__tag">{t}</span>)}
    </div>
  );
}
