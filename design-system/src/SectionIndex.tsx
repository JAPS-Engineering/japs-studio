import type { CSSProperties } from 'react';
import { cx } from './cx';

export interface SectionIndexItem {
  /** Numeración en mono (p. ej. "01" en rail, "001." en minimal). */
  n?: string;
  label: string;
  href: string;
}

export interface SectionIndexProps {
  items: SectionIndexItem[];
  /** Índice (desde 0) de la sección actual. */
  current: number;
  /**
   * spotlight = alineado a la derecha; la actual en Archivo expandido con un punto (9a) ·
   * rail = riel hairline con marcador menta y numeración (9b) ·
   * minimal = solo números; la actual se despliega con nombre y trazo (9c).
   */
  variant?: 'spotlight' | 'rail' | 'minimal';
  label?: string;
  className?: string;
  style?: CSSProperties;
}

/**
 * Índice lateral de secciones para páginas largas: destacado, con riel o mínimo (lab 9a–9c).
 */
export function SectionIndex({ items, current, variant = 'rail', label = 'Secciones', className, style }: SectionIndexProps) {
  return (
    <nav aria-label={label} className={cx('section-index', `section-index--${variant}`, className)} style={style}>
      {variant === 'rail' ? (
        <>
          <span className="section-index__rail" aria-hidden="true" />
          <span className="section-index__marker" aria-hidden="true" style={{ top: current * 36 + 2 }} />
        </>
      ) : null}
      {items.map((it, i) => {
        const isCurrent = i === current;
        const aria = isCurrent ? ('location' as const) : undefined;
        if (variant === 'spotlight') {
          return (
            <a key={it.href} href={it.href} aria-current={aria}>
              {isCurrent ? <span className="section-index__dot" aria-hidden="true" /> : null}
              {it.label}
            </a>
          );
        }
        if (variant === 'minimal') {
          return isCurrent ? (
            <a key={it.href} href={it.href} aria-current={aria}>
              <span className="section-index__trace" aria-hidden="true" />{it.n} {it.label}
            </a>
          ) : (
            <a key={it.href} href={it.href} aria-label={it.label}>{it.n}</a>
          );
        }
        return (
          <a key={it.href} href={it.href} aria-current={aria}>
            <span className="section-index__n">{it.n}</span>
            <span className="section-index__label">{it.label}</span>
          </a>
        );
      })}
    </nav>
  );
}
