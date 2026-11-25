---
category: Actions
---

Círculo de vidrio de 52 px idéntico a los del rail en reposo; al pasar el cursor (o con foco) se alarga hasta 176 px y revela su label (lab 5g). Úsalo en rails verticales cuando el icono solo no basta.

- `glass`: `light` por defecto (sobre foto clara); `clear` sobre panel, `tinted` sobre imagen oscura.
- `hover`: `accent` por defecto (`surface`, `signal`, `inverse`, `halo`).
- `label` es a la vez el texto revelado y el nombre accesible. En reposo el label queda oculto.
- `expanded` lo muestra abierto de forma controlada (por ejemplo, la opción activa del rail).

```jsx
<nav style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 10 }}>
  <ExpandButton label="Menú" icon={<Icon name="menu" />} />
  <ExpandButton label="Nuevo proyecto" icon={<Icon name="plus" />} />
  <ExpandButton label="Ver reel" icon={<Icon name="play" size={16} />} />
</nav>
```
