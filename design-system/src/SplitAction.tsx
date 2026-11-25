import type { CSSProperties, MouseEventHandler, ReactNode } from 'react';
import { cx } from './cx';
import type { GlassHover, GlassTone } from './glassTone';
import { IconButton } from './IconButton';
import { Pill } from './Pill';

export interface SplitActionProps {
  /** Texto de la acción principal (píldora). */
  label: string;
  href?: string;
  onClick?: MouseEventHandler<HTMLElement>;
  /** Icono al inicio de la píldora. */
  leadingIcon?: ReactNode;
  /** Atajo en el círculo: icono y nombre accesible. */
  shortcut: { icon: ReactNode; label: string; href?: string; onClick?: MouseEventHandler<HTMLElement> };
  /** Superficie del vidrio de las dos piezas: clear (sobre panel) · tinted (sobre imagen oscura) · light. */
  glass?: GlassTone;
  /** Hover de las dos piezas: accent (por defecto) · surface · signal · inverse · halo. */
  hover?: GlassHover;
  className?: string;
  style?: CSSProperties;
}

/**
 * Par partido: píldora de vidrio (acción principal) + círculo (atajo) separados 8 px, cada uno con su hover (lab 5f).
 */
export function SplitAction({ label, href, onClick, leadingIcon, shortcut, glass = 'clear', hover = 'accent', className, style }: SplitActionProps) {
  return (
    <div className={cx('split-action', className)} style={style}>
      <Pill variant="glass" size="lg" glass={glass} hover={hover} href={href} onClick={onClick} leadingIcon={leadingIcon}>{label}</Pill>
      <IconButton variant="glass" glass={glass} hover={hover} label={shortcut.label} href={shortcut.href} onClick={shortcut.onClick}>{shortcut.icon}</IconButton>
    </div>
  );
}
