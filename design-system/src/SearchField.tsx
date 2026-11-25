import type { ChangeEventHandler, CSSProperties, MouseEventHandler } from 'react';
import { cx } from './cx';
import { Icon } from './Icon';

export interface SearchFieldProps {
  /** Texto de ayuda dentro del campo. */
  placeholder?: string;
  /** Nombre accesible del campo. */
  label?: string;
  defaultValue?: string;
  value?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  /** Atajo de teclado mostrado en el círculo (p. ej. "⌘K"). Sin él no se muestra el círculo. */
  shortcut?: string;
  /** Nombre accesible del atajo. */
  shortcutLabel?: string;
  onShortcut?: MouseEventHandler<HTMLButtonElement>;
  /** Ancho de la cápsula en px (360 por defecto; 300 dentro de SiteHeader). */
  width?: number;
  className?: string;
  style?: CSSProperties;
}

/**
 * Buscador en cápsula de 52 px con la lupa en un círculo interior y, al lado, el atajo en mono (lab 7f).
 */
export function SearchField({
  placeholder = 'Buscar proyectos, casos…', label = 'Buscar', defaultValue, value, onChange,
  shortcut = '⌘K', shortcutLabel = 'Atajo de búsqueda: Comando K', onShortcut, width = 360, className, style,
}: SearchFieldProps) {
  return (
    <div className={cx('search-group', className)} style={style}>
      <label className="search-field" style={{ width }}>
        <span className="search-field__icon" aria-hidden="true"><Icon name="search" size={18} /></span>
        <input className="search-field__input" type="search" aria-label={label} placeholder={placeholder}
          defaultValue={defaultValue} value={value} onChange={onChange} />
      </label>
      {shortcut ? <button type="button" className="shortcut-btn" aria-label={shortcutLabel} onClick={onShortcut}>{shortcut}</button> : null}
    </div>
  );
}
