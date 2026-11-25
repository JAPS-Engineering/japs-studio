import type { CSSProperties } from 'react';
import { cx } from './cx';

export interface TimelineStep {
  label: string;
  description?: string;
}

export interface TimelineProps {
  steps: TimelineStep[];
  /** Índice (desde 0) del paso activo; su nodo va en menta (`aria-current="step"`). */
  current?: number;
  className?: string;
  style?: CSSProperties;
}

/**
 * Línea de tiempo vertical con nodos (ref. 21): etapas de un proceso con etiqueta mono y descripción opcional.
 */
export function Timeline({ steps, current, className, style }: TimelineProps) {
  return (
    <ol className={cx('timeline', className)} style={style}>
      {steps.map((s, i) => (
        <li key={s.label} aria-current={i === current ? 'step' : undefined}>
          <span className="hud-label">{s.label}</span>
          {s.description ? (
            <>
              <br />
              <span className="t-small t-muted">{s.description}</span>
            </>
          ) : null}
        </li>
      ))}
    </ol>
  );
}
