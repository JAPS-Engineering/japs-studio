---
category: Navigation
---

Índice numerado: filas de 44 px con número en mono y hairline entre ellas; hover en `--accent-text` (lab 7d y 7e).

- `variant="overlay"` (7d): card translúcida (`--surface` al 80 %, blur) que cabalga entre la carcasa y una imagen; colócala con `position: absolute`.
- `variant="notch"` (7e): la misma lista dentro de una muesca `bl`, sin card, directamente sobre el shell. Va como hija directa de un `Panel` (cuenta como una de sus 2 muescas).
- `items`: `{ n, label, href }[]`.

```jsx
<div style={{ position: 'relative', height: 400 }}>
  <div style={{ position: 'absolute', left: 232, right: 0, top: 0, bottom: 0, borderRadius: 28, background: 'var(--panel)' }} />
  <IndexList style={{ position: 'absolute', left: 120, top: 176 }} items={[
    { n: '01', label: 'Producto digital', href: '#servicio-01' },
    { n: '02', label: 'Diseño de interfaz', href: '#servicio-02' },
    { n: '03', label: 'Desarrollo a medida', href: '#servicio-03' },
  ]} />
</div>

<Panel style={{ height: 400 }}>
  <IndexList variant="notch" items={services} />
</Panel>
```
