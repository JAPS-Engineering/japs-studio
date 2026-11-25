import type { CSSProperties, MouseEventHandler } from 'react';
import { cx } from './cx';
import { Icon } from './Icon';
import { IconButton } from './IconButton';
import { Pill } from './Pill';

export interface ConsoleCardProps {
  /** Label mono de la cabecera (p. ej. "Vista — Caso 03"). */
  label: string;
  /** Opciones del control segmentado (p. ej. Móvil, Tablet, Escritorio). */
  options: string[];
  /** Índice (desde 0) de la opción activa. */
  current?: number;
  onSelect?: (index: number) => void;
  onPrev?: MouseEventHandler<HTMLElement>;
  onNext?: MouseEventHandler<HTMLElement>;
  /** La única CTA accent de la consola. */
  cta: { label: string; href?: string; onClick?: MouseEventHandler<HTMLElement> };
  className?: string;
  style?: CSSProperties;
}

/**
 * Consola con aro: un vidrio de 8 px abraza una card de superficie (radio 36 = 28 + 8) con control segmentado, flechas y una sola CTA accent (lab 3d).
 */
export function ConsoleCard({ label, options, current = 0, onSelect, onPrev, onNext, cta, className, style }: ConsoleCardProps) {
  return (
    <div className={cx('console-ring', className)} style={style}>
      <div className="console-card">
        <div className="console-card__row">
          <span className="console-card__label">{label}</span>
          <IconButton label="Anterior" onClick={onPrev}><Icon name="arrow-left" /></IconButton>
          <IconButton label="Siguiente" variant="inverse" onClick={onNext}><Icon name="arrow-right" /></IconButton>
        </div>
        <div className="console-card__row" role="group" aria-label={label}>
          {options.map((o, i) => (
            <Pill key={o} variant={i === current ? 'solid' : 'outline'} current={i === current} onClick={() => onSelect?.(i)}>{o}</Pill>
          ))}
          <Pill variant="accent" href={cta.href} onClick={cta.onClick} className="console-card__cta">{cta.label}</Pill>
        </div>
      </div>
    </div>
  );
}
