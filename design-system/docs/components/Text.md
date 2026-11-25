---
category: Typography
---

Texto de lectura en Geist (16/1.6; `body-l` 18; `small` 14), con medida máxima de 68 ch en párrafos.

- `tone`: `inherit` (por defecto; correcto sobre `Panel`, `Card` y `ThemeRoot`) · `default` (fuerza `--text`) · `muted` · `accent` (`--accent-text`).
- Nunca pongas menta (`--accent`) como color de texto sobre fondos claros: usa `tone="accent"`.

```jsx
<Text size="body-l">Diseñamos y construimos producto digital modular.</Text>
<Text size="small" tone="muted">Texto secundario y notas de apoyo.</Text>
```
