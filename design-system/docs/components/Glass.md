---
category: Layout
---

Superficie de vidrio esmerilado (blur 16 px, radio 16, hairline blanco). Va **solo sobre un Panel, una imagen o un render**, nunca sobre fondos planos. Ejemplo: la card "¿Qué hacemos?" de ref. 12.

```jsx
<Panel style={{ position: 'relative', minHeight: 360 }}>
  <Glass style={{ position: 'absolute', right: 32, bottom: 32, width: 300 }}>
    <HudLabel>¿Qué hacemos?</HudLabel>
    <Text size="small">Estrategia, diseño de interfaz y desarrollo de software a medida.</Text>
  </Glass>
</Panel>
```
