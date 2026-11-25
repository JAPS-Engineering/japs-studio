import type { CSSProperties, MouseEventHandler, ReactNode } from 'react';
import { cx } from './cx';
import { glassClasses, type GlassHover, type GlassTone } from './glassTone';

export interface ExpandButtonProps {
  /** Texto que aparece al expandirse; también es el nombre accesible. */
  label: string;
  /** Icono (normalmente `<Icon name="…" />`). */
  icon: ReactNode;
  /** Superficie del vidrio: clear · light (por defecto, sobre foto clara) · tinted · solid. */
  glass?: GlassTone;
  /** Relleno al pasar el cursor: accent (por defecto) · surface · signal · inverse · halo. */
  hover?: GlassHover;
  /** Lo muestra abierto de forma controlada (p. ej. la opción activa del rail). */
  expanded?: boolean;
  href?: string;
  onClick?: MouseEventHandler<HTMLElement>;
  className?: string;
  style?: CSSProperties;
}

/**
 * Círculo de vidrio de 52 px que al pasar el cursor (o con foco) se alarga hasta 176 px y revela su label (lab 5g).
 */
export function ExpandButton({ label, icon, glass = 'light', hover = 'accent', expanded = false, href, onClick, className, style }: ExpandButtonProps) {
  const cls = cx(glassClasses(glass, 'pill', 'lg'), 'glass-ctl--expand', className);
  const content = (
    <>
      <span className="glass-ctl__icon" aria-hidden="true">{icon}</span>
      <span>{label}</span>
    </>
  );
  if (href) {
    return <a href={href} aria-label={label} className={cls} style={style} onClick={onClick} data-hover={hover} data-expanded={expanded || undefined}>{content}</a>;
  }
  return <button type="button" aria-label={label} className={cls} style={style} onClick={onClick} data-hover={hover} data-expanded={expanded || undefined}>{content}</button>;
}
