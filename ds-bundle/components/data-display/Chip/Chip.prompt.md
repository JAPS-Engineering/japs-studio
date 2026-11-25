Chip from @japs/encastre. Use via `window.JapsEncastre.Chip` (bundle loaded from the root `_ds_bundle.js`). Wrap the tree in `<ThemeRoot>` (full provider chain in README.md — components read theme/i18n from that context).

Chip de dato relleno en cápsula (mono mayúsculas, cifras tabulares) para **mostrar datos**: versión, índice, estado o contador.

- `variant`: `default` (`--surface-2`) · `accent` (menta) · `inverse` · `signal` (naranja; **una vez por vista** y siempre con texto).
- `live` antepone un `LiveDot`.
- Nunca con esquinas rectas ni cortadas.

```jsx
<div style={{ display: 'flex', gap: 8 }}>
  <Chip>v1.0</Chip>
  <Chip variant="accent">Activo</Chip>
  <Chip variant="inverse">Sistema</Chip>
  <Chip live>En vivo</Chip>
  <Chip variant="signal">Alerta</Chip>
</div>
```

## Props

```ts
interface ChipProps {
  /** default = `--surface-2` · accent = menta · inverse = `--inverse` · signal = naranja (una por vista). */
  variant?: "default" | "inverse" | "accent" | "signal";
  /** Antepone un LiveDot (estado "en vivo"). */
  live?: boolean;
  className?: string;
  style?: CSSProperties;
  children: React.ReactNode;
}
```
