SearchField from @japs/encastre. Use via `window.JapsEncastre.SearchField` (bundle loaded from the root `_ds_bundle.js`). Wrap the tree in `<ThemeRoot>` (full provider chain in README.md — components read theme/i18n from that context).

Buscador en cápsula de 52 px con la lupa en un círculo interior y, al lado, un círculo con el atajo en mono (lab 7f). Va en headers y barras de herramientas, sobre la carcasa o una superficie.

- `shortcut` (por defecto `⌘K`) se dibuja en un círculo con hairline que pasa a `--inverse` en hover; `shortcut=""` lo oculta.
- `width`: 360 por defecto; 300 dentro de `SiteHeader`.
- Controlado (`value` + `onChange`) o no controlado (`defaultValue`).

```jsx
<SearchField placeholder="Buscar proyectos, casos…" onShortcut={openCommandPalette} />
```

## Props

```ts
interface SearchFieldProps {
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
```
