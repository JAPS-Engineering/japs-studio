import type { CSSProperties, ReactNode } from 'react';
import { cx } from './cx';

export interface ThemeRootProps {
  /** Modo de color del subárbol. Los dos modos van al mismo nivel. */
  theme?: 'light' | 'dark';
  /** Elemento HTML que se renderiza. */
  as?: 'div' | 'main' | 'section' | 'body';
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
}

/**
 * Raíz de tema: fija `data-theme` y pinta el fondo `--shell` con la tipografía base.
 * Envuelve cada pantalla (y cualquier sección que deba ir en el otro modo) para que los tokens resuelvan.
 */
export function ThemeRoot({ theme = 'light', as: Tag = 'div', className, style, children }: ThemeRootProps) {
  return (
    <Tag data-theme={theme} className={cx('encastre-root', className)} style={style}>
      {children}
    </Tag>
  );
}
