import type { CSSProperties } from 'react';
import { cx } from './cx';

export interface StudioMarkProps {
  /** Lado de la marca en px (56 por defecto; 42 en paneles, 28 en chips). Todo escala en `em`. */
  size?: number;
  /** Con href se renderiza como enlace; en hover pasa a `--accent-text`. */
  href?: string;
  /** Nombre accesible (obligatorio como enlace). */
  label?: string;
  className?: string;
  style?: CSSProperties;
}

/**
 * Marca de JAPS Studio: cuatro cápsulas a 45° (rayado diagonal), en `currentColor`. Su sitio natural es la muesca tr.
 */
export function StudioMark({ size = 56, href, label = 'JAPS Studio', className, style }: StudioMarkProps) {
  const art = (
    <span className="studio-mark__box" aria-hidden="true">
      <span className="studio-mark__bars"><span /><span /><span /><span /></span>
    </span>
  );
  const s = { fontSize: `${size / 3.5}px`, ...style };
  if (href) {
    return <a href={href} aria-label={label} className={cx('studio-mark', className)} style={s}>{art}</a>;
  }
  return <span role="img" aria-label={label} className={cx('studio-mark', className)} style={s}>{art}</span>;
}
