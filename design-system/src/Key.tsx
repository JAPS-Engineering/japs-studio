import type { CSSProperties, MouseEventHandler, ReactNode } from 'react';
import { cx } from './cx';
import { Icon } from './Icon';

export interface KeyProps {
  /**
   * square = 112×112 menta, se vuelve círculo (7a) · wide = 216×92 en `--inverse` con titular (7b) ·
   * stat = 112×112 con label y cifra (7c) · corner = 96×88 con la esquina tr abierta (10a) ·
   * drop = gota de 88 px que se completa en círculo (10b).
   */
  shape: 'square' | 'wide' | 'stat' | 'corner' | 'drop';
  href?: string;
  onClick?: MouseEventHandler<HTMLElement>;
  /** Nombre accesible. Obligatorio en square, corner y drop (solo llevan icono). */
  label?: string;
  /** Titular corto de `wide` (admite `<br />`). */
  title?: ReactNode;
  /** Label mono de `stat`. */
  caption?: string;
  /** Cifra de `stat`. */
  value?: ReactNode;
  /** Icono propio; por defecto arrow-up-right (apunta abajo-izquierda en corner y drop). */
  icon?: ReactNode;
  className?: string;
  style?: CSSProperties;
}

const ICON_SIZE = { square: 36, wide: 22, stat: 16, corner: 20, drop: 20 } as const;

/**
 * Tecla: acceso directo grande con forma propia que cambia de radio al pasar el cursor (lab 7a–7c, 10a, 10b).
 */
export function Key({ shape, href = '#', onClick, label, title, caption, value, icon, className, style }: KeyProps) {
  const glyph = icon ?? <Icon name="arrow-up-right" size={ICON_SIZE[shape]} />;
  let body: ReactNode;
  if (shape === 'wide') {
    body = <><span className="key__title">{title}</span><span className="key__icon" aria-hidden="true">{glyph}</span></>;
  } else if (shape === 'stat') {
    body = (
      <>
        <span className="key__top"><span className="key__caption">{caption}</span><span aria-hidden="true" style={{ display: 'flex' }}>{glyph}</span></span>
        <strong className="key__value">{value}</strong>
      </>
    );
  } else if (shape === 'corner' || shape === 'drop') {
    body = <span className="key__arrow-down" aria-hidden="true">{glyph}</span>;
  } else {
    body = <span aria-hidden="true" style={{ display: 'flex' }}>{glyph}</span>;
  }
  return (
    <a href={href} onClick={onClick} aria-label={label} className={cx('key', `key--${shape}`, className)} style={style}>
      {body}
    </a>
  );
}
