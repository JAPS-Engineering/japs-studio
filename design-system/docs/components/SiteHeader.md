---
category: Navigation
---

Header completo de JAPS Studio (lab 7h): `StudioMark` + logotipo en Archivo expandido, `SearchField` y `AccountCluster`, dentro de una cápsula de radio 28 con hairline.

- `search={false}` oculta el buscador; `search={{ ... }}` le pasa props.
- `account` recibe las props de `AccountCluster`; `end` lo sustituye por contenido propio (p. ej. una `Pill accent`).
- Va arriba de la página, sobre la carcasa, ocupando el ancho del contenido.

```jsx
<SiteHeader
  search={{ placeholder: 'Buscar proyectos, casos…' }}
  account={{ name: 'Lucía Romero', role: 'Cliente — Atlas', theme: 'light' }}
/>
<SiteHeader search={false} end={<Pill variant="accent" href="#contacto">Hablemos</Pill>} />
```
