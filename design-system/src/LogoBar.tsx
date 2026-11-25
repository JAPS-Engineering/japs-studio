import { Fragment, type CSSProperties, type ReactNode } from 'react';
import { Chip } from './Chip';
import { cx } from './cx';

export interface LogoBarLogo {
  /** SVG monocromo del cliente en `currentColor` (se dibuja a 23 px). */
  logo: ReactNode;
  /** Nombre del cliente (nombre accesible). */
  name: string;
  href?: string;
}

export interface LogoBarProps {
  /** logos = marcas de clientes (8a) · stack = tecnologías en mono (8b) · glass = logos en vidrio sobre panel o imagen (8c). */
  variant?: 'logos' | 'stack' | 'glass';
  /** Label HUD de la izquierda. */
  label: string;
  /** Marcas para `logos` y `glass`. */
  logos?: LogoBarLogo[];
  /** Tecnologías para `stack`. */
  items?: string[];
  /** Chip inverso final que resume el resto (p. ej. "+12"). */
  more?: string;
  className?: string;
  style?: CSSProperties;
}

/**
 * Barra de marcas en cápsula de 60 px: label HUD a la izquierda y marcas monocromas o tecnologías a la derecha (lab 8a–8c).
 */
export function LogoBar({ variant = 'logos', label, logos = [], items = [], more, className, style }: LogoBarProps) {
  const list = variant === 'stack'
    ? (
      <ul className="logo-bar__list">
        {items.map((it, i) => (
          <Fragment key={it}>
            {i > 0 ? <li className="logo-bar__dot" aria-hidden="true" /> : null}
            <li><a href={`#stack-${it.toLowerCase()}`} className="logo-bar__item">{it}</a></li>
          </Fragment>
        ))}
      </ul>
    )
    : (
      <ul className="logo-bar__list">
        {logos.map((l) => (
          <li key={l.name} style={{ display: 'flex' }}>
            <a href={l.href ?? '#'} aria-label={l.name} className="logo-bar__logo">{l.logo}</a>
          </li>
        ))}
      </ul>
    );
  return (
    <div className={cx('logo-bar', `logo-bar--${variant}`, className)} style={style}>
      <span className="logo-bar__label">{label}</span>
      <div className="logo-bar__end">
        {list}
        {more ? <Chip variant="inverse">{more}</Chip> : null}
      </div>
    </div>
  );
}
