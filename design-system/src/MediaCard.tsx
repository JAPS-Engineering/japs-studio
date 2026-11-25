import type { CSSProperties, ReactNode } from 'react';
import { cx } from './cx';
import { Icon } from './Icon';

export interface MediaCardProps {
  /**
   * media = la imagen ocupa el borde superior con su propio radio 28 (5b) ·
   * inset = la imagen flota con 8 px de aire y radio 20 (5c) ·
   * link = el pie de media con un círculo de 44 px; toda la card es enlace (5d).
   */
  variant?: 'media' | 'inset' | 'link';
  /** URL de la imagen o un nodo propio (render, video, ilustración). */
  image?: string | ReactNode;
  /** Label mono sobre la imagen (p. ej. "Caso 03"). */
  badge?: string;
  title: string;
  /** Categoría bajo el título (p. ej. "Producto digital"). */
  category?: string;
  /** Destino del enlace (`link`) o del título. */
  href?: string;
  /** Ancho en px (los anchos son libres; 380 por defecto). */
  width?: number | string;
  /** Alto total en px (400 por defecto). */
  height?: number;
  className?: string;
  style?: CSSProperties;
}

/**
 * Card con imagen y pie de superficie (título + categoría) para casos y portafolio (lab 5b–5d).
 */
export function MediaCard({
  variant = 'media', image, badge, title, category, href = '#', width = 380, height = 400, className, style,
}: MediaCardProps) {
  const bg = typeof image === 'string' ? { backgroundImage: `url(${image})` } : undefined;
  const body = (
    <>
      <div className="media-card__media" style={bg}>
        {badge ? <span className="media-card__badge">{badge}</span> : null}
        {typeof image === 'string' ? null : image}
      </div>
      <div className="media-card__foot">
        <span className="media-card__text">
          <strong className="media-card__title">{title}</strong>
          {category ? <span className="media-card__category">{category}</span> : null}
        </span>
        {variant === 'link' ? <span className="media-card__go" aria-hidden="true"><Icon name="arrow-up-right" size={16} /></span> : null}
      </div>
    </>
  );
  const cls = cx('media-card', `media-card--${variant}`, className);
  const s = { width, height, ...style };
  if (variant === 'link') {
    return <a href={href} className={cls} style={s} aria-label={`Abrir ${title}`}>{body}</a>;
  }
  return <article className={cls} style={s}>{body}</article>;
}
