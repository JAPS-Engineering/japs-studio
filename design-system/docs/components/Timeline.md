---
category: Data display
---

Línea de tiempo vertical con nodos (ref. 21): etapas de un proceso con etiqueta mono y descripción opcional. `current` (índice desde 0) pinta en menta el nodo del paso activo.

```jsx
<Timeline
  current={1}
  steps={[
    { label: 'Diagnóstico', description: 'Mapa del problema y alcance' },
    { label: 'Prototipo', description: 'Interfaz navegable y validada' },
    { label: 'Producción', description: 'Software en manos del equipo' },
  ]}
/>
```
