DoubleButton from @japs/encastre. Use via `window.JapsEncastre.DoubleButton` (bundle loaded from the root `_ds_bundle.js`). Wrap the tree in `<ThemeRoot>` (full provider chain in README.md — components read theme/i18n from that context).

Cápsula de 52 px con dos segmentos circulares de 44 px y 4 px de aire; cada segmento tiene su propio hover menta (lab 6a–6c).

- `variant="arrows"` (6a): anterior y siguiente separados por un hairline. Para carruseles y galerías.
- `variant="counter"` (6b): el hueco central muestra `index / total` en mono tabular (`02 / 06`).
- `variant="action"` (6c): label + círculo relleno fusionados (acción con atajo); el círculo marca la acción principal.
- `surface`: `glass` (sobre panel) · `tinted` (sobre imagen oscura) · `solid` (sobre superficie).

```jsx
<DoubleButton variant="arrows" onPrev={prev} onNext={next} />
<DoubleButton variant="counter" index={2} total={6} surface="tinted" />
<DoubleButton variant="action" label="Ver detalle" href="#detalle" actionLabel="Abrir detalle" surface="solid" />
```

## Props

```ts
interface DoubleButtonProps {
  /** arrows = anterior / siguiente (6a) · counter = flechas con `n / total` (6b) · action = label + círculo relleno (6c). */
  variant?: "arrows" | "counter" | "action";
  /** glass = vidrio sobre panel · tinted = sobre imagen oscura · solid = sobre superficie. */
  surface?: "glass" | "solid" | "tinted";
  /** Posición actual (desde 1) para `counter`. */
  index?: number;
  /** Total de elementos para `counter`. */
  total?: number;
  onPrev?: MouseEventHandler<HTMLButtonElement>;
  onNext?: MouseEventHandler<HTMLButtonElement>;
  /** Texto de la acción (`action`). */
  label?: string;
  /** Enlace de la acción (`action`). */
  href?: string;
  /** Nombre accesible del círculo de la acción (`action`). */
  actionLabel?: string;
  onAction?: MouseEventHandler<HTMLElement>;
  /** Icono del círculo de la acción (por defecto arrow-right). */
  icon?: React.ReactNode;
  /** Nombre accesible del grupo. */
  groupLabel?: string;
  className?: string;
  style?: CSSProperties;
}
```
