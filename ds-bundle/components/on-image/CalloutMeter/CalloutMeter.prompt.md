CalloutMeter from @japs/encastre. Use via `window.JapsEncastre.CalloutMeter` (bundle loaded from the root `_ds_bundle.js`). Wrap the tree in `<ThemeRoot>` (full provider chain in README.md — components read theme/i18n from that context).

Callout con medidor sobre imagen (lab 6e): card en tinta con cifra y barra de progreso menta, unida al punto por una guía en codo con curva de 20 px.

- Coordenadas en px dentro de un contenedor con `position: relative`: `x`, `y` (card) y `target` (punto). El punto debe quedar **a la derecha y por debajo** de la card: la guía sale de su borde derecho y baja.
- `progress` (0–1) llena la barra. `surface`: `solid` (tinta, por defecto) o `glass` (tinta translúcida).
- `elbowOffset` ajusta la altura de la guía horizontal desde la cima de la card.

```jsx
<div style={{ position: 'relative', height: 440, borderRadius: 28, background: 'var(--panel)' }}>
  <CalloutMeter x={96} y={88} target={{ x: 440, y: 304 }} title="Lente — L1" value="92" unit="/ 100" progress={0.92} />
</div>
```

## Props

```ts
interface CalloutMeterProps {
  /** Posición (esquina superior izquierda) de la card en px dentro del contenedor (con `position: relative`). */
  x: number;
  y: number;
  /** Punto señalado, a la derecha y por debajo de la card. La guía sale del borde derecho y baja en codo (curva de 20 px). */
  target: { x: number; y: number; };
  /** Label mono junto al icono. */
  title: string;
  value: React.ReactNode;
  unit?: string;
  /** Avance de la barra (0–1). */
  progress: number;
  icon?: React.ReactNode;
  /** solid = tinta (por defecto) · glass = tinta translúcida sobre la imagen. */
  surface?: "glass" | "solid";
  width?: number;
  /** Altura de la guía horizontal medida desde la cima de la card (66 por defecto: el centro de la card). */
  elbowOffset?: number;
  className?: string;
  style?: CSSProperties;
}
```
