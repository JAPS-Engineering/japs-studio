Callout from @japs/encastre. Use via `window.JapsEncastre.Callout` (bundle loaded from the root `_ds_bundle.js`). Wrap the tree in `<ThemeRoot>` (full provider chain in README.md — components read theme/i18n from that context).

Callout de dato sobre imagen (lab 6d): una card con una **pestaña** que aloja el icono, unida por un **filete inverso de 16 px**, y una guía diagonal desde el punto señalado hasta la esquina inferior izquierda de la card.

- Coordenadas en px dentro de un contenedor con `position: relative`: `x`, `y` (card) y `target` (punto).
- `surface`: `glass` (vidrio lechoso, por defecto; sobre fotos claras) o `solid` (`--surface`).
- `title` (label mono), `value` (cifra en Archivo 56) y `unit` (p. ej. `/ 100`). `icon` sustituye la lente menta de la pestaña.

```jsx
<div style={{ position: 'relative', height: 440, borderRadius: 28, background: 'url(/render.jpg) center/cover' }}>
  <Callout x={352} y={64} target={{ x: 168, y: 300 }} title="Lente — L1" value="92" unit="/ 100" />
</div>
```

## Props

```ts
interface CalloutProps {
  /** Posición (esquina superior izquierda) de la card en px dentro del contenedor (con `position: relative`). */
  x: number;
  y: number;
  /** Punto señalado en la imagen, en px. La guía diagonal va del punto a la esquina inferior izquierda de la card. */
  target: Point;
  /** Label mono (p. ej. "Lente — L1"). */
  title: string;
  /** Cifra principal. */
  value: React.ReactNode;
  /** Unidad o total junto a la cifra (p. ej. "/ 100"). */
  unit?: string;
  /** Icono de la pestaña; por defecto una lente sobre menta. */
  icon?: React.ReactNode;
  /** glass = vidrio lechoso translúcido (por defecto) · solid = `--surface`. */
  surface?: "glass" | "solid";
  width?: number;
  height?: number;
  className?: string;
  style?: CSSProperties;
}
```
