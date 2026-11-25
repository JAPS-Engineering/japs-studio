---
category: On image
---

Callout de dato sobre imagen (lab 6d): una card con una **pestaña** que aloja el icono, unida por un **filete inverso de 16 px**, y una guía diagonal desde el punto señalado hasta la esquina inferior izquierda de la card.

- Coordenadas en px dentro de un contenedor con `position: relative`: `x`, `y` (card) y `target` (punto).
- `surface`: `glass` (vidrio lechoso, por defecto; sobre fotos claras) o `solid` (`--surface`).
- `title` (label mono), `value` (cifra en Archivo 56) y `unit` (p. ej. `/ 100`). `icon` sustituye la lente menta de la pestaña.

```jsx
<div style={{ position: 'relative', height: 440, borderRadius: 28, background: 'url(/render.jpg) center/cover' }}>
  <Callout x={352} y={64} target={{ x: 168, y: 300 }} title="Lente — L1" value="92" unit="/ 100" />
</div>
```
