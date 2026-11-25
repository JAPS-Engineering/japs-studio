---
category: Layout
---

Card de radio 16 para módulos de contenido. `default` = `--surface`, `muted` = `--surface-2`, `inverse` = `--inverse`.

- La profundidad sale del contraste de superficie: **nunca añadas sombras** a una Card.
- Usa el gap (12 px) entre cards y paneles en grillas.
- Puede alojar una `Notch corner="t" radius="card"` como pestaña de sección.

```jsx
<div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--gap)' }}>
  <Card><HudLabel tone="muted">02 — Proceso</HudLabel>…</Card>
  <Card variant="muted"><Heading variant="h2">Piezas que se ensamblan</Heading></Card>
  <Card variant="inverse"><Text>Contenido destacado</Text></Card>
</div>
```
