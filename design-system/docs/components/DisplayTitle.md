---
category: Typography
---

Titular de exhibición tras un objeto (lab 9d, 9e y 10d). **Llena su contenedor**, que debe tener `position: relative`, un alto fijo y `overflow: hidden`. Los `children` son la capa del objeto (PNG recortado, render), que queda por encima del texto.

- `variant="split"` (9d): la palabra se parte en diagonal, la primera mitad arriba a la izquierda y la segunda abajo a la derecha, en Archivo expandido 800 (200 px). `splitAt` elige el corte. El objeto tapa la unión.
- `variant="condensed"` (9e): una sola línea centrada en Archivo condensado (260 px); un objeto vertical tapa el centro.
- `variant="vertical"` (10d): Archivo expandido (150 px) girado sobre el borde derecho, de abajo arriba; acompáñalo de `VerticalNav`.
- Úsalo una vez por página, como pieza de exhibición. Combínalo con `SectionIndex` (spotlight con split, minimal con condensed).

```jsx
<Card style={{ position: 'relative', height: 560, overflow: 'hidden' }}>
  <DisplayTitle variant="split" text="Software" splitAt={4}>
    <img src="/objeto.png" alt="" style={{ width: 380 }} />
  </DisplayTitle>
</Card>

<Card style={{ position: 'relative', height: 520, overflow: 'hidden' }}>
  <DisplayTitle variant="condensed" text="Encastre"><img src="/figura.png" alt="" style={{ height: 420 }} /></DisplayTitle>
</Card>
```
