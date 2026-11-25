import type { CSSProperties } from 'react';
import { cx } from './cx';
import { Icon } from './Icon';

export interface HistoryItem {
  /** Hora o marca de tiempo en mono (p. ej. "19:02"). */
  time: string;
  /** Descripción corta (p. ej. "Versión 03"). */
  label: string;
  href: string;
  /** URL de la miniatura; sin ella se muestra un marcador. */
  thumb?: string;
}

export interface HistoryStackProps {
  items: HistoryItem[];
  /** Índice (desde 0) de la versión actual; va en `--inverse`. */
  current?: number;
  label?: string;
  className?: string;
  style?: CSSProperties;
}

/**
 * Historial en cápsulas sobre imagen: miniatura, hora en mono y acceso; la versión actual en `--inverse` (lab 3c).
 */
export function HistoryStack({ items, current = 0, label = 'Historial', className, style }: HistoryStackProps) {
  return (
    <nav aria-label={label} className={cx('history-stack', className)} style={style}>
      {items.map((it, i) => (
        <a key={it.href} href={it.href} className="history-item" aria-current={i === current ? 'true' : undefined}>
          {it.thumb ? <img className="history-item__thumb" src={it.thumb} alt="" /> : <span className="history-item__thumb" aria-hidden="true" />}
          <span className="history-item__text">
            <span className="history-item__time">{it.time}</span>
            <span className="history-item__label">{it.label}</span>
          </span>
          <span className="history-item__go" aria-hidden="true"><Icon name="arrow-up-right" size={16} /></span>
        </a>
      ))}
    </nav>
  );
}
