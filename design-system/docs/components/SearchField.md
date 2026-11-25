---
category: Navigation
---

Buscador en cápsula de 52 px con la lupa en un círculo interior y, al lado, un círculo con el atajo en mono (lab 7f). Va en headers y barras de herramientas, sobre la carcasa o una superficie.

- `shortcut` (por defecto `⌘K`) se dibuja en un círculo con hairline que pasa a `--inverse` en hover; `shortcut=""` lo oculta.
- `width`: 360 por defecto; 300 dentro de `SiteHeader`.
- Controlado (`value` + `onChange`) o no controlado (`defaultValue`).

```jsx
<SearchField placeholder="Buscar proyectos, casos…" onShortcut={openCommandPalette} />
```
