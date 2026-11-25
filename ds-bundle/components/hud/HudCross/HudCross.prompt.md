HudCross from @japs/encastre. Use via `window.JapsEncastre.HudCross` (bundle loaded from the root `_ds_bundle.js`). Wrap the tree in `<ThemeRoot>` (full provider chain in README.md — components read theme/i18n from that context).

Cruz "+" de 11 px para marcar intersecciones de retícula o esquinas de un módulo. Es decorativa y cuenta como detalle HUD (máximo 1–2 por viewport).

```jsx
<div style={{ display: 'flex', justifyContent: 'space-between' }}>
  <HudLabel tone="muted">02 — Proceso</HudLabel>
  <HudCross />
</div>
```

## Props

```ts
interface HudCrossProps {
  style?: CSSProperties;
}
```
