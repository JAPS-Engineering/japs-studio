import type { CSSProperties, ReactNode } from 'react';
import { cx } from './cx';

export interface DisplayTitleProps {
  /**
   * split = la palabra se parte en diagonal (arriba izquierda, abajo derecha), Archivo expandido 800 (9d) ·
   * condensed = una sola línea centrada en Archivo condensado (9e) ·
   * vertical = Archivo expandido girado sobre el borde derecho, de abajo arriba (10d).
   */
  variant: 'split' | 'condensed' | 'vertical';
  /** La palabra o frase del titular. */
  text: string;
  /** Posición del corte en `split` (por defecto, la mitad de la palabra). */
  splitAt?: number;
  /** Tamaño en px (split 200 · condensed 260 · vertical 150). */
  size?: number;
  className?: string;
  style?: CSSProperties;
  /** Capa del objeto que tapa el titular (PNG recortado, render), con z-index superior. */
  children?: ReactNode;
}

/**
 * Titular de exhibición tras un objeto: llena su contenedor (con `position: relative` y alto fijo) y deja el objeto por encima (lab 9d, 9e, 10d).
 */
export function DisplayTitle({ variant, text, splitAt, size, className, style, children }: DisplayTitleProps) {
  const vars = { ...(size ? { '--dt-size': `${size}px` } : null), ...style } as CSSProperties;
  const cut = splitAt ?? Math.ceil(text.length / 2);
  return (
    <div className={cx('display-title', `display-title--${variant}`, className)} style={vars}>
      {variant === 'split' ? (
        <h2 className="display-title__text" aria-label={text}>
          <span className="display-title__part" aria-hidden="true">{text.slice(0, cut)}</span>
          <span className="display-title__part" aria-hidden="true">{text.slice(cut)}</span>
        </h2>
      ) : (
        <h2 className="display-title__text">{text}</h2>
      )}
      {children ? <div className="display-title__object">{children}</div> : null}
    </div>
  );
}
