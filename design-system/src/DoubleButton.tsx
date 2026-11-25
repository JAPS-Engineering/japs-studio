import type { CSSProperties, MouseEventHandler, ReactNode } from 'react';
import { cx } from './cx';
import { Icon } from './Icon';

export interface DoubleButtonProps {
  /** arrows = anterior / siguiente (6a) · counter = flechas con `n / total` (6b) · action = label + círculo relleno (6c). */
  variant?: 'arrows' | 'counter' | 'action';
  /** glass = vidrio sobre panel · tinted = sobre imagen oscura · solid = sobre superficie. */
  surface?: 'glass' | 'tinted' | 'solid';
  /** Posición actual (desde 1) para `counter`. */
  index?: number;
  /** Total de elementos para `counter`. */
  total?: number;
  onPrev?: MouseEventHandler<HTMLButtonElement>;
  onNext?: MouseEventHandler<HTMLButtonElement>;
  /** Texto de la acción (`action`). */
  label?: string;
  /** Enlace de la acción (`action`). */
  href?: string;
  /** Nombre accesible del círculo de la acción (`action`). */
  actionLabel?: string;
  onAction?: MouseEventHandler<HTMLElement>;
  /** Icono del círculo de la acción (por defecto arrow-right). */
  icon?: ReactNode;
  /** Nombre accesible del grupo. */
  groupLabel?: string;
  className?: string;
  style?: CSSProperties;
}

const pad = (n: number) => String(n).padStart(2, '0');

/**
 * Cápsula de 52 px con dos segmentos de 44 px y hover menta por segmento: carrusel, carrusel con contador o acción con atajo (lab 6a–6c).
 */
export function DoubleButton({
  variant = 'arrows', surface = 'glass', index = 1, total = 1, onPrev, onNext, label = '', href = '#', actionLabel, onAction, icon, groupLabel, className, style,
}: DoubleButtonProps) {
  const cls = cx('double-btn', surface !== 'glass' && `double-btn--${surface}`, className);
  if (variant === 'action') {
    return (
      <div role="group" aria-label={groupLabel ?? label} className={cls} style={style}>
        <a href={href} className="double-btn__label" onClick={onAction}>{label}</a>
        <button type="button" aria-label={actionLabel ?? label} className="double-btn__seg double-btn__seg--filled" onClick={onAction}>
          {icon ?? <Icon name="arrow-right" size={18} />}
        </button>
      </div>
    );
  }
  return (
    <div role="group" aria-label={groupLabel ?? 'Carrusel'} className={cls} style={style}>
      <button type="button" aria-label="Anterior" className="double-btn__seg" onClick={onPrev}><Icon name="arrow-left" size={18} /></button>
      {variant === 'counter'
        ? <span className="double-btn__count" aria-live="polite">{pad(index)} / {pad(total)}</span>
        : <span className="double-btn__divider" aria-hidden="true" />}
      <button type="button" aria-label="Siguiente" className="double-btn__seg" onClick={onNext}><Icon name="arrow-right" size={18} /></button>
    </div>
  );
}
