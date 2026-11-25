---
category: Cards
---

Consola con aro (lab 3d): un aro de vidrio de 8 px abraza una card de superficie (radio exterior 36 = 28 + 8). Lleva un label mono, flechas (anterior en menta, siguiente en inverso), un control segmentado (`options`, la activa en `solid`) y **una sola** CTA accent (`cta`).

- Va sobre una imagen o un `Panel` (el aro es vidrio), posicionada en una esquina.

```jsx
<ConsoleCard label="Vista — Caso 03" options={['Móvil', 'Tablet', 'Escritorio']} current={0}
  onSelect={setDevice} cta={{ label: 'Ver en vivo', href: '#en-vivo' }} />
```
