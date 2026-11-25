---
category: Layout
---

Muesca con filete inverso: la firma estructural de Encastre (refs. 12 y 21). El color del shell muerde una esquina o un borde del `Panel` y lo une con una curva en S continua; dentro va un único elemento.

`corner`:
- `tr` `tl` `br` `bl`: esquinas.
- `t` · `b`: pestaña superior o inferior centrada (título de sección, CTA o control de scroll).
- `l` · `r`: pestaña lateral centrada en vertical (lab 1a). Aloja un control vertical: `IconButton` + `HudLabel vertical`, separados 20 px. El panel debe reservar ~100 px de padding en ese lado.

Reglas no negociables:
- **Máximo 2 por panel, en posiciones opuestas** (`tr` + `bl`, `tl` + `br`, `l` + `r`, `t` + `b`). `NotchStair` cuenta como una muesca.
- **Cada muesca aloja un solo elemento.** Nunca vacía.
- El hueco es siempre el gap (12 px) y el filete usa el radio del contenedor (`radius="card"` sobre una Card).
- Debe ser hija directa de un `Panel` o una `Card` (necesita su `position: relative`). En móvil usa `stackOnMobile` en las inferiores.

```jsx
<Panel style={{ minHeight: 440, paddingLeft: 100 }}>
  <Notch corner="l">
    <IconButton label="Abrir caso" variant="inverse"><Icon name="arrow-right" /></IconButton>
    <HudLabel vertical>Caso 03 — Atlas</HudLabel>
  </Notch>
  <Heading variant="headline">Software que encaja.</Heading>
</Panel>

<Panel style={{ minHeight: 360, paddingBottom: 108 }}>
  <Notch corner="b"><Pill variant="solid" size="lg" href="#casos" icon={<Icon name="arrow-right" size={16} />}>Ver casos</Pill></Notch>
</Panel>

<Panel style={{ minHeight: 320 }}>
  <Notch corner="tr"><Pill href="#contacto">Contacto</Pill></Notch>
  <Notch corner="bl" stackOnMobile><Pill variant="solid" size="lg" icon={<Icon name="arrow-right" size={16} />}>Empezar</Pill></Notch>
</Panel>
```
