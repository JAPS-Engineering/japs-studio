---
category: Layout
---

Escalera: muesca de esquina inferior con 2–3 peldaños y **una pieza por peldaño** (lab 1c y 1d). Es la versión escalonada de `Notch` y **cuenta como una muesca** dentro del límite de 2 por panel.

- `corner`: `br` (escalera a la derecha) o `bl` (a la izquierda).
- `steps`: de arriba abajo, cada uno más ancho que el anterior: `{ width, height, content }` en px. **Cada escalón debe medir ≥ 56 px** (2 × filete) para que la S se complete.
- `layout="stack"` (1c): cada peldaño aloja una Card en su propia franja, a 12 px de los bordes.
- `layout="ledge"` (1d, escalera en L): el primer peldaño es una columna estrecha que baja hasta el pie (IconButton + `HudLabel vertical`) y el segundo es una repisa ancha a su lado.
- Va como hija directa de un `Panel` cuyo alto sea al menos la suma de los `height`. El contenido del panel debe quedar fuera de la zona de la escalera.

```jsx
<Panel padding="lg" style={{ height: 440 }}>
  <HudLabel>03 — Seguimiento</HudLabel>
  <Heading variant="headline" style={{ fontSize: 40, marginTop: 16 }}>Cada entrega,<br />en su sitio.</Heading>
  <NotchStair corner="br" steps={[
    { width: 232, height: 132, content: <Card padding="sm"><HudLabel tone="muted"><LiveDot /> En curso</HudLabel><Heading variant="h3">Plataforma Atlas</Heading></Card> },
    { width: 300, height: 76, content: <Card padding="sm"><Text size="small" tone="muted">Próxima entrega · 14 NOV</Text></Card> },
    { width: 368, height: 120, content: <Card padding="sm"><Text size="small">Revisamos el prototipo el jueves.</Text></Card> },
  ]} />
</Panel>

<Panel padding="lg" style={{ height: 440 }}>
  <NotchStair corner="bl" layout="ledge" steps={[
    { width: 68, height: 152, content: <><IconButton label="Ver reel" variant="inverse"><Icon name="play" size={16} /></IconButton><HudLabel vertical>Reel 2026 — 01:24</HudLabel></> },
    { width: 432, height: 120, content: <Card padding="sm"><Text size="small">Diseño y código en un mismo equipo.</Text></Card> },
  ]} />
</Panel>
```
