import type { CSSProperties } from 'react';
import { cx } from './cx';

export interface VerticalNavItem {
  label: string;
  href: string;
}

export interface VerticalNavProps {
  items: VerticalNavItem[];
  /** Índice (desde 0) de la página activa; va en píldora. */
  current?: number;
  /** shell = sobre la carcasa · inverse = sobre un panel `--inverse` (lab 10d). */
  surface?: 'shell' | 'inverse';
  label?: string;
  className?: string;
  style?: CSSProperties;
}

/**
 * Navegación vertical de borde: enlaces girados (de abajo arriba) repartidos en el alto, con la página activa en píldora (lab 10d).
 */
export function VerticalNav({ items, current, surface = 'shell', label = 'Principal', className, style }: VerticalNavProps) {
  return (
    <nav aria-label={label} className={cx('vertical-nav', surface === 'inverse' && 'vertical-nav--inverse', className)} style={style}>
      {items.map((it, i) => (
        <a key={it.href} href={it.href} aria-current={i === current ? 'page' : undefined}>{it.label}</a>
      ))}
    </nav>
  );
}
