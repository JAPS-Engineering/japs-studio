---
category: Theme
---

Raíz de tema de Encastre: fija `data-theme` (`light` | `dark`), pinta el fondo `--shell` y aplica la tipografía base (Geist 16/1.6). Los dos modos van al mismo nivel.

- Envuelve cada pantalla en un `ThemeRoot`. Sin él no hay fondo de carcasa ni modo explícito (se usa light por defecto y `prefers-color-scheme`).
- Se puede anidar: una sección dentro de una pantalla clara puede ir en `<ThemeRoot theme="dark">`.
- No cambies colores a mano: todo resuelve desde los tokens semánticos (`--shell`, `--surface`, `--text`, `--accent`…).

```jsx
<ThemeRoot theme="dark" style={{ padding: 'var(--gap)', minHeight: '100vh' }}>
  <Panel padding="lg">…</Panel>
</ThemeRoot>
```
