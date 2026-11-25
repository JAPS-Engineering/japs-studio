HudRule from @japs/encastre. Use via `window.JapsEncastre.HudRule` (bundle loaded from the root `_ds_bundle.js`). Wrap the tree in `<ThemeRoot>` (full provider chain in README.md — components read theme/i18n from that context).

Divisor hairline de 1 px en `--hairline`. Las líneas rectas están permitidas (divisores, líneas de tiempo); las cajas con esquinas rectas no.

```jsx
<Card variant="muted">
  <HudLabel>SN 00.43/20-34</HudLabel>
  <HudRule />
  <HudLabel tone="accent">Estado activo</HudLabel>
</Card>
```

## Props

```ts
interface HudRuleProps {
  style?: CSSProperties;
}
```
