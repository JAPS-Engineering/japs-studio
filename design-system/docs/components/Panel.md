---
category: Layout
---

Panel salvia de radio 28: la superficie protagonista de Encastre (el hero de ref. 12). Es igual en claro y en oscuro; el texto interior usa `--text-on-panel`.

- Aloja muescas (`Notch`), un `Heading variant="statement"`, `Nav`, `Glass` y el objeto 3D protagonista.
- `position: relative` ya incluido: las muescas se anclan a sus esquinas.
- Si el panel no está directo sobre la carcasa (p. ej. dentro de una Card), pasa `shellColor="var(--surface)"` para que las muescas pinten el color correcto.
- Usa `padding` (sm 16 · md 24 · lg 32). Deja aire inferior (~96 px) cuando hay muesca BL.

```jsx
<Panel padding="lg" style={{ minHeight: 560, paddingBottom: 96 }}>
  <Nav><Pill variant="accent" current href="#">Inicio</Pill><Pill href="#">Servicios</Pill></Nav>
  <Notch corner="tr">
    <Pill href="#contacto">Contacto</Pill>
    <IconButton label="Abrir menú" variant="inverse"><Icon name="menu" /></IconButton>
  </Notch>
  <Heading variant="statement">Software que encaja.</Heading>
  <Notch corner="bl" stackOnMobile>
    <Pill variant="solid" size="lg" href="#agenda" icon={<Icon name="arrow-right" size={16} />}>Agenda una conversación</Pill>
  </Notch>
</Panel>
```
