---
category: Actions
---

Botón o enlace en cápsula, el control base de Encastre. Con `href` es un enlace; sin él, un botón.

- `variant`: `outline` (contorno 1 px, por defecto) · `accent` (CTA menta, **una por vista**) · `solid` (`--inverse`) · `glass` (vidrio sobre Panel o imagen).
- `size="lg"` (52 px) es la CTA principal. `icon` se dibuja al final en un círculo menta que rota −45° en hover (outline, accent, solid).
- **Píldora de vidrio** (lab 5e): `variant="glass" size="lg"` con `leadingIcon` (icono + label). Usa `glass` (`clear` sobre panel, `tinted` sobre imagen oscura, `light` sobre foto clara) y `hover` (`accent` por defecto, `surface`, `signal`, `inverse`, `halo`), igual que `IconButton variant="glass"`.
- Todo es cápsula: nunca esquinas rectas.

```jsx
<div style={{ display: 'flex', gap: 8 }}>
  <Pill variant="accent" href="#empezar">Empezar</Pill>
  <Pill variant="solid">Ver proyectos</Pill>
  <Pill href="#contacto">Contacto</Pill>
</div>
<Pill variant="solid" size="lg" href="#agenda" icon={<Icon name="arrow-right" size={16} />}>Agenda una conversación</Pill>

<Panel>
  <Pill variant="glass" size="lg" leadingIcon={<Icon name="arrow-up-right" />}>Ver plan</Pill>
  <Pill variant="glass" size="lg" hover="halo" leadingIcon={<Icon name="plus" />}>Explorar</Pill>
</Panel>
```
