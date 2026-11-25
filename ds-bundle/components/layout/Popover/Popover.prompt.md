Popover from @japs/encastre. Use via `window.JapsEncastre.Popover` (bundle loaded from the root `_ds_bundle.js`). Wrap the tree in `<ThemeRoot>` (full provider chain in README.md — components read theme/i18n from that context).

Superficie flotante para menús y popovers. Es **la única superficie con sombra** (`--shadow-float`). Contiene `PopoverItem`.

```jsx
<Popover label="Navegación" style={{ width: 220 }}>
  <PopoverItem href="#servicios" current>Servicios</PopoverItem>
  <PopoverItem href="#proyectos">Proyectos</PopoverItem>
  <PopoverItem href="#estudio">Estudio</PopoverItem>
</Popover>
```

## Props

```ts
interface PopoverProps {
  /** Nombre accesible del menú. */
  label?: string;
  className?: string;
  style?: CSSProperties;
  children?: React.ReactNode;
}
```
