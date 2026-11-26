# TextLink

Enlace de texto con una flecha que avanza 3 px al pasar el cursor; para «Ver cómo funciona» o «Conocer <producto>».

## Cuándo usarlo
- `tlink`: enlace suelto en una sección, se pone agua al pasar el cursor.
- `golink`: dentro de una tarjeta que ya es enlace (el hover lo da la tarjeta).

## Markup
```html
<a class="tlink" href="/#como-trabajamos">Ver cómo funciona <svg class="ico ico--s"><use href="#i-arrow"/></svg></a>
<a href="/portafolio#consenty"><span class="golink">Conocer Consenty<svg class="ico ico--s"><use href="#i-arrow"/></svg></span></a>
```
