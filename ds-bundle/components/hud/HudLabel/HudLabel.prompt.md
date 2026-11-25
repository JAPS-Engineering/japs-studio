HudLabel from @japs/encastre. Use via `window.JapsEncastre.HudLabel` (bundle loaded from the root `_ds_bundle.js`). Wrap the tree in `<ThemeRoot>` (full provider chain in README.md — components read theme/i18n from that context).

Label de la capa de datos: Geist Mono 12 px en mayúsculas, tracking +0.08em y cifras tabulares con cero cruzado. Úsalo para índices (`01 — Proceso`), seriales, metadatos y encabezados de módulo.

- `tone`: `default` · `muted` · `accent` (usa `--accent-text`, que cumple contraste en ambos modos).
- `vertical`: lo gira 90° (se lee de abajo arriba) para muescas laterales (`Notch corner="l"`) y columnas de `NotchStair`.
- Con mesura: máximo 1–2 detalles HUD por viewport, y cada índice o serial debe referirse a algo real.

```jsx
<HudLabel tone="muted">02 — Proceso</HudLabel>
<HudLabel>SN 00.43/20-34 · <HudLabel tone="accent">activo</HudLabel></HudLabel>
<HudLabel vertical>Caso 03 — Atlas</HudLabel>
```

## Props

```ts
interface HudLabelProps {
  /** default = `--text` · muted = `--text-muted` · accent = `--accent-text`. */
  tone?: "default" | "muted" | "accent";
  /** Gira el label 90° (de abajo arriba) para muescas laterales y columnas verticales. */
  vertical?: boolean;
  as?: "div" | "p" | "span" | "dt" | "dd";
  className?: string;
  style?: CSSProperties;
  children: React.ReactNode;
}
```
