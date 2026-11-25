---
category: Typography
---

Titulares en Archivo con escala fluida (`clamp()` entre 360 y 1440 px).

- `statement`: Archivo expandida (wdth 125), peso 800, MAYÚSCULAS, 44→128 px. **Uno solo por vista** (ref. 12: "WE BUILD DIGITAL").
- `headline`: Archivo 400 en caja mixta, 40→88 px (ref. 21: "Futuristic technologies").
- `condensed`: Archivo condensado (62 %), 800, MAYÚSCULAS, 64→176 px (lab 3e). Para titulares sobre la zona tranquila de una imagen, normalmente alineados a la derecha. Dentro de una `Notch corner="tl"` con un serial en mono (lab 3f), el shell lo aísla de la imagen y garantiza el contraste.
- `h1` 32→56 · `h2` 24→40 · `h3` 20→28.
- El nivel semántico se deriva de la variante; cámbialo con `as`.

```jsx
<Heading variant="statement">Software<br />que<br />encaja.</Heading>
<Heading variant="headline">Futuro modular</Heading>
<Panel style={{ height: 400 }}>
  <Notch corner="tl" style={{ flexDirection: 'column', alignItems: 'flex-start', padding: '4px 24px 16px 8px' }}>
    <Heading variant="condensed" style={{ fontSize: 88 }}>Atlas 3.0</Heading>
    <HudLabel tone="muted">@japs_studio — 2026</HudLabel>
  </Notch>
</Panel>
```
