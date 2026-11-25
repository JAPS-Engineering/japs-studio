import type { CSSProperties, ReactNode } from 'react';
import { cx } from './cx';

export interface HudLabelProps {
  /** default = `--text` · muted = `--text-muted` · accent = `--accent-text`. */
  tone?: 'default' | 'muted' | 'accent';
  /** Gira el label 90° (de abajo arriba) para muescas laterales y columnas verticales. */
  vertical?: boolean;
  as?: 'span' | 'p' | 'div' | 'dt' | 'dd';
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
}

/**
 * Label HUD: Geist Mono 12 px en mayúsculas con tracking +0.08em, para índices (`01 — Proceso`), seriales y metadatos.
 */
export function HudLabel({ tone = 'default', vertical = false, as: Tag = 'span', className, style, children }: HudLabelProps) {
  return (
    <Tag
      className={cx('hud-label', vertical && 'hud-label--vertical', tone === 'muted' && 't-muted', tone === 'accent' && 't-accent', className)}
      style={style}
    >
      {children}
    </Tag>
  );
}

export interface HudCrossProps {
  style?: CSSProperties;
}

/**
 * Cruz "+" de 11 px para marcar intersecciones de retícula. Decorativa; máximo 1–2 detalles HUD por viewport.
 */
export function HudCross({ style }: HudCrossProps) {
  return <span className="hud-cross" aria-hidden="true" style={style} />;
}

export interface HudRuleProps {
  style?: CSSProperties;
}

/**
 * Divisor hairline de 1 px en `--hairline`.
 */
export function HudRule({ style }: HudRuleProps) {
  return <hr className="hud-rule" style={style} />;
}
