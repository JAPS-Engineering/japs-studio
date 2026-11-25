---
category: Layout
---

Cápsula en `--inverse` (la sidebar negra de ref. 21): marca, labels verticales y el toggle de tema. `orientation="horizontal"` es la versión de barra superior para móvil.

```jsx
<Capsule>
  <IconButton label="JAPS Studio" variant="accent"><Icon name="plus" /></IconButton>
  <HudLabel style={{ writingMode: 'vertical-rl', rotate: '180deg' }}>JAPS · Studio</HudLabel>
  <div style={{ flex: 1 }} />
  <IconButton label="Cambiar a modo oscuro"><Icon name="moon" /></IconButton>
</Capsule>
```
