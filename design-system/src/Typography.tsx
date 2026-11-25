import type { CSSProperties, ReactNode } from 'react';
import { cx } from './cx';

type HeadingVariant = 'statement' | 'headline' | 'condensed' | 'h1' | 'h2' | 'h3';

const DEFAULT_TAG: Record<HeadingVariant, 'h1' | 'h2' | 'h3'> = {
  statement: 'h1', headline: 'h2', condensed: 'h2', h1: 'h1', h2: 'h2', h3: 'h3',
};

export interface HeadingProps {
  /**
   * statement = Archivo expandida 800 en MAYÚSCULAS, 44→128 px (uno por vista, ref. 12) ·
   * headline = Archivo 400 en caja mixta, 40→88 px (ref. 21) ·
   * condensed = Archivo condensado (62 %) 800 en MAYÚSCULAS, 64→176 px, para titulares sobre imagen (lab 3e) ·
   * h1 32→56 · h2 24→40 · h3 20→28.
   */
  variant?: HeadingVariant;
  /** Nivel semántico; por defecto se deriva de la variante. */
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span';
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
}

/**
 * Titular del sistema (Archivo) con escala fluida. Solo un `statement` por vista.
 */
export function Heading({ variant = 'h2', as, className, style, children }: HeadingProps) {
  const Tag = as ?? DEFAULT_TAG[variant];
  return <Tag className={cx(`t-${variant}`, className)} style={style}>{children}</Tag>;
}

export interface TextProps {
  /** body 16/1.6 · body-l 18 · small 14. */
  size?: 'body' | 'body-l' | 'small';
  /** inherit = color del contenedor (correcto sobre Panel, Card y ThemeRoot) · default = fuerza `--text` · muted = `--text-muted` · accent = `--accent-text`. */
  tone?: 'inherit' | 'default' | 'muted' | 'accent';
  as?: 'p' | 'span' | 'div';
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
}

/**
 * Texto de lectura en Geist (medida máxima 68 ch para párrafos).
 */
export function Text({ size = 'body', tone = 'inherit', as: Tag = 'p', className, style, children }: TextProps) {
  const toneStyle: CSSProperties = tone === 'default' ? { color: 'var(--text)' } : {};
  return (
    <Tag
      className={cx(size === 'body-l' && 't-body-l', size === 'small' && 't-small', tone === 'muted' && 't-muted', tone === 'accent' && 't-accent', className)}
      style={{ ...toneStyle, ...style }}
    >
      {children}
    </Tag>
  );
}
