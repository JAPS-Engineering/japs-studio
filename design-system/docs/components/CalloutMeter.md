---
category: On image
---

Callout con medidor sobre imagen (lab 6e): card en tinta con cifra y barra de progreso menta, unida al punto por una guía en codo con curva de 20 px.

- Coordenadas en px dentro de un contenedor con `position: relative`: `x`, `y` (card) y `target` (punto). El punto debe quedar **a la derecha y por debajo** de la card: la guía sale de su borde derecho y baja.
- `progress` (0–1) llena la barra. `surface`: `solid` (tinta, por defecto) o `glass` (tinta translúcida).
- `elbowOffset` ajusta la altura de la guía horizontal desde la cima de la card.

```jsx
<div style={{ position: 'relative', height: 440, borderRadius: 28, background: 'var(--panel)' }}>
  <CalloutMeter x={96} y={88} target={{ x: 440, y: 304 }} title="Lente — L1" value="92" unit="/ 100" progress={0.92} />
</div>
```
