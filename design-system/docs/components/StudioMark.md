---
category: Brand
---

Marca de JAPS Studio: cuatro cápsulas a 45° (rayado diagonal) dibujadas en `currentColor` y escaladas en `em` (lab 2a). Toma el color de su contenedor: tinta sobre la carcasa, papel sobre el panel y menta sobre `--inverse`.

- `size`: lado en px. Usa 56 en una muesca o un header, 42 en paneles y 28 en chips.
- Con `href` es un enlace (hover en `--accent-text`) y necesita `label`.
- Su sitio natural es la muesca `tr` del hero.

```jsx
<Panel style={{ minHeight: 320 }}>
  <Notch corner="tr"><StudioMark href="#inicio" label="JAPS Studio — inicio" /></Notch>
</Panel>
<Card variant="inverse"><span style={{ color: 'var(--accent)' }}><StudioMark size={28} /></span></Card>
```
