---
category: Cards
---

Hero con acción partida (lab 5a): una card de imagen con el titular arriba y, abajo, una píldora larga + círculo en vidrio tintado (`SplitAction`), cada uno con su propio hover menta.

- `image`: URL del fondo (sin ella, el panel salvia). `badge`: label mono arriba a la derecha.
- `title`: corto, hasta ~340 px de ancho (Archivo 600, 44 px).
- `actionLabel` + `href` para la píldora; `shortcutLabel` y `shortcutIcon` para el círculo.

```jsx
<HeroCard image="/pagos.jpg" badge="Caso 03" title="Rediseño de la app de pagos" actionLabel="Ver plan" href="#ver-plan" />
```
