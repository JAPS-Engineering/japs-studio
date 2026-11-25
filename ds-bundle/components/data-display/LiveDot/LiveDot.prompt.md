LiveDot from @japs/encastre. Use via `window.JapsEncastre.LiveDot` (bundle loaded from the root `_ds_bundle.js`). Wrap the tree in `<ThemeRoot>` (full provider chain in README.md — components read theme/i18n from that context).

Punto de 8 px en `--signal` que indica algo en vivo. Es decorativo: acompáñalo siempre de texto (o usa `<Chip live>`).

```jsx
<HudLabel><LiveDot /> En vivo</HudLabel>
```

## Props

```ts
interface LiveDotProps {
  style?: CSSProperties;
}
```
