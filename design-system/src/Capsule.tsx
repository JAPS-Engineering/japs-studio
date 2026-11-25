import type { CSSProperties, ReactNode } from 'react';
import { cx } from './cx';

export interface CapsuleProps {
  /** vertical = sidebar de ref. 21 · horizontal = barra superior en móvil. */
  orientation?: 'vertical' | 'horizontal';
  as?: 'aside' | 'nav' | 'div' | 'header';
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
}

/**
 * Cápsula en `--inverse` (sidebar negra de ref. 21): marca, navegación vertical y toggle de tema.
 */
export function Capsule({ orientation = 'vertical', as: Tag = 'aside', className, style, children }: CapsuleProps) {
  const layout: CSSProperties = orientation === 'vertical'
    ? { display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--space-5)', padding: 'var(--space-3) 0', width: 'var(--layout-sidebar)' }
    : { display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 'var(--space-3)', padding: 'var(--space-2)' };
  return (
    <Tag className={cx('capsule', className)} style={{ ...layout, ...style }}>
      {children}
    </Tag>
  );
}
