import type { CSSProperties, MouseEventHandler, ReactNode } from 'react';
import { cx } from './cx';
import { glassClasses, type GlassHover, type GlassTone } from './glassTone';

export interface PillProps {
  /**
   * outline = contorno 1 px · accent = CTA menta (una por vista) · solid = `--inverse` ·
   * glass = píldora de vidrio sobre Panel o imagen (con `glass` y `hover`).
   */
  variant?: 'outline' | 'accent' | 'solid' | 'glass';
  /** md = 40 px (44 en vidrio) · lg = 52 px (CTA principal). */
  size?: 'md' | 'lg';
  /** Con href se renderiza como enlace; sin él, como botón. */
  href?: string;
  /** Icono en un círculo menta al final (rota −45° en hover). Úsalo con size="lg" en outline/accent/solid. */
  icon?: ReactNode;
  /** Icono al inicio, sin círculo: el formato "icono + label" de la píldora de vidrio. */
  leadingIcon?: ReactNode;
  /** Superficie del vidrio (solo `variant="glass"`): clear · light · tinted · solid · bare. */
  glass?: GlassTone;
  /** Relleno al pasar el cursor (solo `variant="glass"`): accent (por defecto) · surface · signal · inverse · halo. */
  hover?: GlassHover;
  /** Marca la opción activa en una navegación (`aria-current="page"`). */
  current?: boolean;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLElement>;
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
}

/**
 * Botón o enlace en cápsula: el control base del sistema (CTA, navegación, acciones secundarias) y su versión de vidrio.
 */
export function Pill({
  variant = 'outline', size = 'md', href, icon, leadingIcon, glass = 'clear', hover = 'accent', current = false, type = 'button', disabled, onClick, className, style, children,
}: PillProps) {
  const isGlass = variant === 'glass';
  const cls = isGlass
    ? cx(glassClasses(glass, 'pill', size), className)
    : cx('pill', variant !== 'outline' && `pill--${variant}`, size === 'lg' && 'pill--lg', className);
  const content = (
    <>
      {leadingIcon ? <span className="glass-ctl__icon" aria-hidden="true">{leadingIcon}</span> : null}
      {children}
      {icon ? <span className="pill__icon" aria-hidden="true">{icon}</span> : null}
    </>
  );
  const extra = { 'data-hover': isGlass ? hover : undefined, 'aria-current': current ? ('page' as const) : undefined };
  if (href) {
    return <a href={href} className={cls} style={style} onClick={onClick} {...extra}>{content}</a>;
  }
  return <button type={type} className={cls} style={style} onClick={onClick} disabled={disabled} {...extra}>{content}</button>;
}
