import type { CSSProperties, ReactNode } from 'react';
import { cx, SPACE, type Space } from './cx';

export interface GlassProps {
  /** Padding interior desde la escala de espacio (sm 16 · md 24 · lg 32). */
  padding?: Space;
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
}

/**
 * Superficie de vidrio esmerilado (blur 16, radio 16). Solo sobre Panel, imagen o render; nunca sobre fondos planos.
 */
export function Glass({ padding = 'md', className, style, children }: GlassProps) {
  return (
    <div className={cx('glass', className)} style={{ padding: SPACE[padding], ...style }}>
      {children}
    </div>
  );
}
