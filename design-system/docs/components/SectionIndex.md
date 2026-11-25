---
category: Navigation
---

Índice lateral de secciones para páginas largas (lab 9a–9c). `items`: `{ n?, label, href }[]`; `current` es el índice (desde 0) de la sección actual.

- `variant="spotlight"` (9a): alineado a la derecha; las secciones en mono y la actual en Archivo expandido con un punto menta. Sin triángulos.
- `variant="rail"` (9b): riel hairline con un marcador menta en la actual; numeración mono (`n`) + nombre.
- `variant="minimal"` (9c): solo números (`n`, p. ej. `001.`); la actual se despliega con su nombre y un trazo corto. Para el borde de la pantalla.

```jsx
const sections = [
  { n: '01', label: 'El estudio', href: '#el-estudio' },
  { n: '02', label: 'Proceso', href: '#proceso' },
  { n: '03', label: 'Software', href: '#software' },
];
<SectionIndex variant="rail" items={sections} current={2} />
<SectionIndex variant="spotlight" items={sections} current={2} />
<SectionIndex variant="minimal" items={sections.map((s, i) => ({ ...s, n: `00${i + 1}.` }))} current={2} />
```
