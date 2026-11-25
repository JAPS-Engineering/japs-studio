SiteHeader from @japs/encastre. Use via `window.JapsEncastre.SiteHeader` (bundle loaded from the root `_ds_bundle.js`). Wrap the tree in `<ThemeRoot>` (full provider chain in README.md — components read theme/i18n from that context).

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

## Props

```ts
interface SiteHeaderProps {
  /** Logotipo en Archivo expandido junto a la marca. */
  brand?: string;
  brandHref?: string;
  /** Props del buscador; `false` lo oculta. */
  search?: false | SearchFieldProps;
  /** Props del grupo de cuenta (tema, perfil y menú). Sin él, se renderiza `end`. */
  account?: AccountClusterProps;
  /** Contenido propio del extremo derecho (sustituye a `account`). */
  end?: React.ReactNode;
  className?: string;
  style?: CSSProperties;
}
```
