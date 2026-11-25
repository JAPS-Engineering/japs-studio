---
category: Data display
---

Chip de dato relleno en cápsula (mono mayúsculas, cifras tabulares) para **mostrar datos**: versión, índice, estado o contador.

- `variant`: `default` (`--surface-2`) · `accent` (menta) · `inverse` · `signal` (naranja; **una vez por vista** y siempre con texto).
- `live` antepone un `LiveDot`.
- Nunca con esquinas rectas ni cortadas.

```jsx
<div style={{ display: 'flex', gap: 8 }}>
  <Chip>v1.0</Chip>
  <Chip variant="accent">Activo</Chip>
  <Chip variant="inverse">Sistema</Chip>
  <Chip live>En vivo</Chip>
  <Chip variant="signal">Alerta</Chip>
</div>
```
