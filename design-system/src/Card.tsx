import type { CSSProperties, ReactNode } from 'react';
import { cx, SPACE, type Space } from './cx';

export interface CardProps {
  /** default = `--surface` · muted = `--surface-2` · inverse = `--inverse`. */
  variant?: 'default' | 'muted' | 'inverse';
  /** Padding interior desde la escala de espacio (sm 16 · md 24 · lg 32). */
  padding?: Space;
  as?: 'div' | 'article' | 'section' | 'li';
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
}

/**
 * Card de radio 16 para módulos de contenido. La profundidad sale del color de superficie, nunca de sombras.
 */
export function Card({ variant = 'default', padding = 'md', as: Tag = 'div', className, style, children }: CardProps) {
  return (
    <Tag
      className={cx('card', variant !== 'default' && `card--${variant}`, className)}
      style={{ padding: SPACE[padding], ...style }}
    >
      {children}
    </Tag>
  );
}
