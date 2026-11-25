import type { CSSProperties, MouseEventHandler, ReactNode } from 'react';
import { cx } from './cx';
import { glassClasses, type GlassHover, type GlassTone } from './glassTone';

export interface IconButtonProps {
  /** Nombre accesible obligatorio (`aria-label`). */
  label: string;
  /**
   * accent = menta (rota −45° en hover) · inverse = `--inverse` (menú en la muesca TR) ·
   * glass = vidrio sobre Panel o imagen, con `glass` y `hover`.
   */
  variant?: 'accent' | 'inverse' | 'glass';
  /** Superficie del vidrio (solo `variant="glass"`): clear · light · tinted · solid (activo) · bare. */
  glass?: GlassTone;
  /** Relleno al pasar el cursor (solo `variant="glass"`): accent (por defecto) · surface · signal · inverse · halo. */
  hover?: GlassHover;
  /** md = 44 px · lg = 52 px. Por defecto 52 en vidrio y 44 en el resto. */
  size?: 'md' | 'lg';
  /** Marca la opción activa en un rail (`aria-current="page"`). */
  current?: boolean;
  /** Con href se renderiza como enlace. */
  href?: string;
  onClick?: MouseEventHandler<HTMLElement>;
  className?: string;
  style?: CSSProperties;
  /** El icono (normalmente `<Icon name="…" />`) o unas siglas cortas en mono (p. ej. "GH"). */
  children: ReactNode;
}

/**
 * Botón circular con un icono: menta, inverso o de vidrio (52 px, cinco hovers) para usar sobre paneles e imágenes.
 */
export function IconButton({
  label, variant = 'accent', glass = 'clear', hover = 'accent', size, current = false, href, onClick, className, style, children,
}: IconButtonProps) {
  const isGlass = variant === 'glass';
  const resolvedSize = size ?? (isGlass ? 'lg' : 'md');
  const monogram = typeof children === 'string';
  const cls = isGlass
    ? cx(glassClasses(glass, 'circle', resolvedSize), monogram && 'glass-ctl--mono', className)
    : cx('icon-btn', variant === 'inverse' && 'icon-btn--inverse', resolvedSize === 'lg' && 'icon-btn--lg', className);
  const extra = { 'data-hover': isGlass ? hover : undefined, 'aria-current': current ? ('page' as const) : undefined };
  if (href) {
    return <a href={href} aria-label={label} className={cls} style={style} onClick={onClick} {...extra}>{children}</a>;
  }
  return <button type="button" aria-label={label} className={cls} style={style} onClick={onClick} {...extra}>{children}</button>;
}
