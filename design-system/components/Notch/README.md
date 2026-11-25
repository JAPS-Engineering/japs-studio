# Notch

Muesca con filetes concéntricos que muerde una esquina de un `PhotoPanel` y aloja una sola pieza (una CTA, un botón, un titular).

## Cuándo usarlo
- Máximo dos muescas por panel, en esquinas opuestas, y cada una con un solo elemento. Nunca vacías.
- Esquinas: `nt--tl`, `nt--tr`, `nt--bl`, `nt--br`; `nt--b` es una pestaña inferior centrada.
- El panel y la muesca van dentro de `.stage`; el panel ocupa todo el escenario.

## Markup
```html
<div class="stage"><div class="rnd">…foto…</div><div class="nt nt--br"><a class="engbtn" href="…">…</a></div></div>
```

## Reglas
- La muesca es del color de la página (`--bg`): parece un corte en el panel.
- Geometría concéntrica: separación `--ng` 16 (12 en móvil), filete `--f` 28 (24), esquina interior `--r` 44. Para una pieza de radio r con separación g: esquina interior = r + g, filetes = r. Si filete + esquina superan la muesca, aparecen picos.
- En móvil, `stage m-flow` saca la muesca del panel y la deja debajo, en flujo normal.
- Nunca `overflow: hidden` en un panel con muescas: recorta los filetes.
