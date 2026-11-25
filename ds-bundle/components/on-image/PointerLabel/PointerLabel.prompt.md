PointerLabel from @japs/encastre. Use via `window.JapsEncastre.PointerLabel` (bundle loaded from the root `_ds_bundle.js`). Wrap the tree in `<ThemeRoot>` (full provider chain in README.md — components read theme/i18n from that context).

Label con guía sobre imagen (lab 3b): anillo + guía hairline + cápsula de vidrio numerada (`Chip` inverso). Señala una zona concreta de una captura o un render.

- `side="left"`: el anillo queda a la izquierda y el label a la derecha. `side="right"` lo espeja; entonces `anchor.x` se mide desde el borde derecho.
- `length`: largo de la guía en px (56 por defecto).

```jsx
<Panel style={{ position: 'relative', height: 400, background: 'url(/app.png) center/cover' }}>
  <PointerLabel anchor={{ x: 72, y: 112 }} index="01" label="Onboarding en 3 pasos" />
  <PointerLabel anchor={{ x: 64, y: 236 }} side="right" index="02" label="Pagos con un toque" />
</Panel>
```

## Props

```ts
interface PointerLabelProps {
  /** Número de la cápsula (p. ej. "01"). */
  index: string;
  label: string;
  /** left = el anillo señala a la izquierda (label a la derecha) · right = espejado. */
  side?: "left" | "right";
  /** Largo de la guía en px. */
  length?: number;
  /** Posición del anillo dentro del contenedor (con `position: relative`). Con side="right", `x` se mide desde el borde derec */
  anchor?: { x: number | string; y: number | string; };
  className?: string;
  style?: CSSProperties;
}
```
