# StatusChip

Chip con punto que dice en qué estado está un producto.

## Cuándo usarlo
- Siempre que se muestre un producto del portafolio. El estado va en el chip, nunca como texto suelto.
- `pchip`: punto agua relleno (publicado, en curso). `pchip off`: punto de contorno (por confirmar, en investigación).

## Markup
```html
<span class="pchip">Publicado y en venta</span>
<span class="pchip off">Por confirmar</span>
```

## Reglas
- Lo que no está confirmado se marca «Por confirmar»: no se promete fecha ni estado.
