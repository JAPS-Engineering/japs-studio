import type { CSSProperties, ReactNode } from 'react';
import { cx } from './cx';
import { LiveDot } from './LiveDot';

export interface ChipProps {
  /** default = `--surface-2` · accent = menta · inverse = `--inverse` · signal = naranja (una por vista). */
  variant?: 'default' | 'accent' | 'inverse' | 'signal';
  /** Antepone un LiveDot (estado "en vivo"). */
  live?: boolean;
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
}

/**
 * Chip de dato relleno en cápsula (mono mayúsculas, cifras tabulares): versión, índice, estado o contador.
 */
export function Chip({ variant = 'default', live = false, className, style, children }: ChipProps) {
  return (
    <span className={cx('chip', variant !== 'default' && `chip--${variant}`, className)} style={style}>
      {live ? <LiveDot /> : null}
      {children}
    </span>
  );
}
