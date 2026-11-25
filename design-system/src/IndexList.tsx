import type { CSSProperties } from 'react';
import { cx } from './cx';
import { Notch } from './Notch';

export interface IndexListItem {
  /** Número en mono (p. ej. "01"). */
  n: string;
  label: string;
  href: string;
}

export interface IndexListProps {
  items: IndexListItem[];
  /**
   * overlay = card translúcida que cabalga entre el shell y una imagen (7d) ·
   * notch = la lista dentro de una muesca bl, directamente sobre el shell (7e; hija directa de un Panel).
   */
  variant?: 'overlay' | 'notch';
  /** Nombre accesible de la navegación. */
  label?: string;
  /** Ancho en px (300 en overlay, 320 en notch). */
  width?: number;
  className?: string;
  style?: CSSProperties;
}

/**
 * Índice numerado: filas de 44 px con número en mono y hairline entre ellas; hover en `--accent-text` (lab 7d, 7e).
 */
export function IndexList({ items, variant = 'overlay', label = 'Índice', width, className, style }: IndexListProps) {
  const list = (
    <nav aria-label={label} className={cx('index-list', `index-list--${variant}`, variant === 'overlay' && className)}
      style={variant === 'overlay' ? { width: width ?? 300, ...style } : undefined}>
      {items.map((it) => (
        <a key={it.href} href={it.href} className="index-list__row">
          <span className="index-list__n">{it.n}</span>
          <span>{it.label}</span>
        </a>
      ))}
    </nav>
  );
  if (variant === 'notch') {
    return (
      <Notch corner="bl" className={cx('index-list-notch', className)}
        style={{ display: 'block', padding: '16px 24px 4px 4px', width: width ?? 320, boxSizing: 'border-box', ...style }}>
        {list}
      </Notch>
    );
  }
  return list;
}
