import type { CSSProperties, ReactNode } from 'react';
import { cx, SPACE, type Space } from './cx';

export interface PanelProps {
  /** Padding interior desde la escala de espacio (sm 16 · md 24 · lg 32). */
  padding?: Space;
  /**
   * Color que pintan las muescas (`Notch`) de este panel. Por defecto `var(--shell)`;
   * pásalo cuando el panel no esté directamente sobre la carcasa (p. ej. `var(--surface)`).
   */
  shellColor?: string;
  as?: 'div' | 'section' | 'article' | 'header';
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
}

/**
 * Panel salvia de radio 28 (hero de ref. 12): la superficie protagonista que aloja muescas,
 * statement, vidrio y el objeto 3D. Texto en `--text-on-panel`.
 */
export function Panel({ padding = 'md', shellColor, as: Tag = 'section', className, style, children }: PanelProps) {
  const vars = {
    padding: SPACE[padding],
    ...(shellColor ? { '--shell-color': shellColor } : null),
    ...style,
  } as CSSProperties;
  return (
    <Tag className={cx('panel', className)} style={vars}>
      {children}
    </Tag>
  );
}
