# ProductLogo

Isotipo de un producto del portafolio sobre el color real de fondo de su marca.

## Cuándo usarlo
- `pfx-logo pfx-logo--brand` (48 px, radio 14) en el selector, el carrusel y las fichas.
- `pfb` (44) en el panel del menú Portafolio; `pfb pfb--s` (26, circular) en el menú móvil.
- El color de fondo va en `style`, tomado de la marca: Consenty #EEF0FC, Project Check #E7EDE3, Brixor #EDF5FF, Melian #F5F5F5, Relatio #F7F8FA, Sonicali #FFFFFF.

## Markup
```html
<span class="pfx-logo pfx-logo--brand" style="background:#EEF0FC"><img src="/img/logos/consenty.svg" alt="" width="32" height="32"></span>
```

## Reglas
- Nunca un isotipo directo sobre una foto: siempre sobre su color.
- Los archivos están en `public/img/logos/` (y en el grupo de assets Productos).
