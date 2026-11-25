import type { CSSProperties, MouseEventHandler, ReactNode } from 'react';
import { cx } from './cx';
import type { GlassHover } from './glassTone';
import { Icon } from './Icon';
import { SplitAction } from './SplitAction';

export interface HeroCardProps {
  /** Titular arriba (Archivo 600, 44 px, hasta ~340 px de ancho). */
  title: ReactNode;
  /** URL de la imagen de fondo; sin ella, el panel salvia. */
  image?: string;
  /** Label mono arriba a la derecha (p. ej. "Caso 03"). */
  badge?: string;
  /** Texto de la acción principal (píldora). */
  actionLabel: string;
  href?: string;
  onAction?: MouseEventHandler<HTMLElement>;
  /** Atajo del círculo. */
  shortcutLabel?: string;
  shortcutIcon?: ReactNode;
  onShortcut?: MouseEventHandler<HTMLElement>;
  /** Hover de las dos piezas (accent por defecto). */
  hover?: GlassHover;
  /** Alto en px (400 por defecto). */
  height?: number;
  className?: string;
  style?: CSSProperties;
}

/**
 * Hero con acción partida: titular arriba y, abajo, píldora larga + círculo en vidrio tintado sobre la imagen (lab 5a).
 */
export function HeroCard({
  title, image, badge, actionLabel, href, onAction, shortcutLabel = 'Abrir caso', shortcutIcon, onShortcut, hover = 'accent', height = 400, className, style,
}: HeroCardProps) {
  return (
    <section className={cx('hero-card', className)} style={{ height, ...(image ? { backgroundImage: `url(${image})` } : null), ...style }}>
      {badge ? <span className="hero-card__badge">{badge}</span> : null}
      <h3 className="hero-card__title">{title}</h3>
      <SplitAction glass="tinted" hover={hover} label={actionLabel} href={href} onClick={onAction}
        leadingIcon={<Icon name="arrow-up-right" />}
        shortcut={{ icon: shortcutIcon ?? <Icon name="arrow-right" />, label: shortcutLabel, onClick: onShortcut }} />
    </section>
  );
}
