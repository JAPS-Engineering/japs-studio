HeroCard from @japs/encastre. Use via `window.JapsEncastre.HeroCard` (bundle loaded from the root `_ds_bundle.js`). Wrap the tree in `<ThemeRoot>` (full provider chain in README.md — components read theme/i18n from that context).

Hero con acción partida (lab 5a): una card de imagen con el titular arriba y, abajo, una píldora larga + círculo en vidrio tintado (`SplitAction`), cada uno con su propio hover menta.

- `image`: URL del fondo (sin ella, el panel salvia). `badge`: label mono arriba a la derecha.
- `title`: corto, hasta ~340 px de ancho (Archivo 600, 44 px).
- `actionLabel` + `href` para la píldora; `shortcutLabel` y `shortcutIcon` para el círculo.

```jsx
<HeroCard image="/pagos.jpg" badge="Caso 03" title="Rediseño de la app de pagos" actionLabel="Ver plan" href="#ver-plan" />
```

## Props

```ts
interface HeroCardProps {
  /** Titular arriba (Archivo 600, 44 px, hasta ~340 px de ancho). */
  title: React.ReactNode;
  /** URL de la imagen de fondo; sin ella, el panel salvia. */
  image?: string;
  /** Label mono arriba a la derecha (p. ej. "Caso 03"). */
  badge?: string;
  /** Texto de la acción principal (píldora). */
  actionLabel: string;
  href?: string;
  onAction?: MouseEventHandler<HTMLElement>;
  /** Atajo del círculo. */
  shortcutLabel?: string;
  shortcutIcon?: React.ReactNode;
  onShortcut?: MouseEventHandler<HTMLElement>;
  /** Hover de las dos piezas (accent por defecto). */
  hover?: "inverse" | "accent" | "signal" | "surface" | "halo";
  /** Alto en px (400 por defecto). */
  height?: number;
  className?: string;
  style?: CSSProperties;
}
```
