Nav from @japs/encastre. Use via `window.JapsEncastre.Nav` (bundle loaded from the root `_ds_bundle.js`). Wrap the tree in `<ThemeRoot>` (full provider chain in README.md — components read theme/i18n from that context).

Grupo de navegación en vidrio (ref. 12): `Pill`s sobre un `Panel` o una imagen, con la activa en `variant="accent"` y `current`.

```jsx
<Nav label="Principal">
  <Pill variant="accent" current href="#">Inicio</Pill>
  <Pill href="#servicios">Servicios</Pill>
  <Pill href="#proyectos">Proyectos</Pill>
  <Pill href="#estudio">Estudio</Pill>
</Nav>
```

## Props

```ts
interface NavProps {
  /** Nombre accesible de la navegación. */
  label?: string;
  className?: string;
  style?: CSSProperties;
  /** Pills; la activa va con `variant="accent"` y `current`. */
  children: React.ReactNode;
}
```
