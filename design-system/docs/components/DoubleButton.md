---
category: Actions
---

Cápsula de 52 px con dos segmentos circulares de 44 px y 4 px de aire; cada segmento tiene su propio hover menta (lab 6a–6c).

- `variant="arrows"` (6a): anterior y siguiente separados por un hairline. Para carruseles y galerías.
- `variant="counter"` (6b): el hueco central muestra `index / total` en mono tabular (`02 / 06`).
- `variant="action"` (6c): label + círculo relleno fusionados (acción con atajo); el círculo marca la acción principal.
- `surface`: `glass` (sobre panel) · `tinted` (sobre imagen oscura) · `solid` (sobre superficie).

```jsx
<DoubleButton variant="arrows" onPrev={prev} onNext={next} />
<DoubleButton variant="counter" index={2} total={6} surface="tinted" />
<DoubleButton variant="action" label="Ver detalle" href="#detalle" actionLabel="Abrir detalle" surface="solid" />
```
