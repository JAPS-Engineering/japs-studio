import * as React from 'react';

/**
 * SearchField — from @japs/encastre@1.0.0.
 */
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

export declare const SearchField: React.ComponentType<SearchFieldProps>;
