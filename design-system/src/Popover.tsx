import type { CSSProperties, ReactNode } from 'react';
import { cx } from './cx';

export interface PopoverProps {
  /** Nombre accesible del menú. */
  label?: string;
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
}

/**
 * Superficie flotante para menús y popovers: la única que lleva sombra (`--shadow-float`).
 */
export function Popover({ label, className, style, children }: PopoverProps) {
  return (
    <div role="menu" aria-label={label} className={cx('popover', className)} style={style}>
      {children}
    </div>
  );
}

export interface PopoverItemProps {
  href?: string;
  /** Marca el ítem activo (`aria-current`). */
  current?: boolean;
  onClick?: () => void;
  className?: string;
  children: ReactNode;
}

/**
 * Ítem de un Popover: enlace o botón con hover en `--surface-2`.
 */
export function PopoverItem({ href = '#', current = false, onClick, className, children }: PopoverItemProps) {
  return (
    <a role="menuitem" href={href} onClick={onClick} aria-current={current ? 'page' : undefined} className={cx('popover__item', className)}>
      {children}
    </a>
  );
}
