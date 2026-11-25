Capsule from @japs/encastre. Use via `window.JapsEncastre.Capsule` (bundle loaded from the root `_ds_bundle.js`). Wrap the tree in `<ThemeRoot>` (full provider chain in README.md — components read theme/i18n from that context).

Cápsula en `--inverse` (la sidebar negra de ref. 21): marca, labels verticales y el toggle de tema. `orientation="horizontal"` es la versión de barra superior para móvil.

```jsx
<Capsule>
  <IconButton label="JAPS Studio" variant="accent"><Icon name="plus" /></IconButton>
  <HudLabel style={{ writingMode: 'vertical-rl', rotate: '180deg' }}>JAPS · Studio</HudLabel>
  <div style={{ flex: 1 }} />
  <IconButton label="Cambiar a modo oscuro"><Icon name="moon" /></IconButton>
</Capsule>
```

## Props

```ts
interface CapsuleProps {
  /** vertical = sidebar de ref. 21 · horizontal = barra superior en móvil. */
  orientation?: "vertical" | "horizontal";
  as?: "aside" | "nav" | "div" | "header";
  className?: string;
  style?: CSSProperties;
  children?: React.ReactNode;
}
```
