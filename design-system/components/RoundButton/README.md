# RoundButton

Botón circular de contorno para acciones secundarias sin texto: abrir el menú, avanzar o retroceder un paginador.

## Cuándo usarlo
- `round` (52 px) para el menú móvil; `round round--sm` (44 px) en paginadores y controles del carrusel.
- Siempre con `aria-label`: no tiene texto visible.

## Markup
```html
<button class="round" type="button" aria-label="Abrir menú"><svg class="ico"><use href="#i-menu"/></svg></button>
```

## Reglas
- Borde interior `--hairline-strong`; al pasar el cursor, capa `--hover`.
- No lleva relleno de color: el agua es solo de la CTA.
