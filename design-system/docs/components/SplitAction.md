---
category: Actions
---

Par partido: una píldora de vidrio (acción principal) y un círculo de vidrio (atajo), separados 8 px y cada uno con su propio hover (lab 5f).

- `glass`: `clear` sobre panel, `tinted` sobre imagen oscura (`light` sobre foto clara).
- `hover`: el mismo para las dos piezas (`accent` por defecto, `surface`, `signal`, `inverse`, `halo`).
- `shortcut` es el atajo: `{ icon, label, href?, onClick? }`.

```jsx
<SplitAction label="Agenda una llamada" href="#agenda" leadingIcon={<Icon name="arrow-up-right" />}
  shortcut={{ icon: <Icon name="arrow-right" />, label: 'Siguiente' }} />
<SplitAction glass="tinted" hover="surface" label="Ver portafolio" href="#portafolio" leadingIcon={<Icon name="arrow-up-right" />}
  shortcut={{ icon: <Icon name="plus" />, label: 'Abrir' }} />
```
