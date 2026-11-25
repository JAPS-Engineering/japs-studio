---
category: Navigation
---

Navegación vertical de borde (lab 10d): enlaces girados, que se leen de abajo arriba, repartidos en el alto del contenedor, con la página activa en píldora.

- `surface="inverse"` sobre un panel `--inverse` (enlaces en papel, activa en papel con texto tinta); `surface="shell"` sobre la carcasa.
- Colócala con `position: absolute` en el borde derecho, con `top` y `bottom`, para que reparta el alto.

```jsx
<div style={{ position: 'relative', height: 640, borderRadius: 28, background: 'var(--inverse)' }}>
  <VerticalNav surface="inverse" current={1} style={{ position: 'absolute', right: 24, top: 24, bottom: 24 }}
    items={[{ label: 'Inicio', href: '#inicio' }, { label: 'Casos', href: '#casos' }, { label: 'Estudio', href: '#estudio' }, { label: 'Contacto', href: '#contacto' }]} />
</div>
```
