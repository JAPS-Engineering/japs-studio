---
category: On image
---

Racimo de tags sobre imagen (lab 3a): cápsulas de superficie en mono de 11 px dentro de un vidrio con un punto de anclaje. Nombra lo que se ve en la imagen. Usa 2–3 racimos por imagen, como máximo.

- `anchor={{ x, y }}` lo posiciona de forma absoluta dentro de un contenedor con `position: relative` (la imagen o el Panel).
- `side="right"` lleva el punto de anclaje al otro extremo.

```jsx
<Panel style={{ position: 'relative', height: 400, background: 'url(/caso.jpg) center/cover' }}>
  <TagCluster anchor={{ x: 56, y: 88 }} tags={['#Producto', '#UI/UX']} />
  <TagCluster anchor={{ x: 300, y: 184 }} tags={['#IA aplicada']} />
</Panel>
```
