# PhotoPanel

Panel redondeado con una foto real y un scrim que oscurece donde va el texto.

## Cuándo usarlo
- Todo panel lleva una foto de producto, concepto o idea: personas trabajando con tecnología en contextos chilenos, o el producto en uso. Nunca formas 3D en CSS (esferas, cápsulas, anillos).
- `scrim--b` cuando el texto va abajo, `scrim--l` cuando va a la izquierda, `scrim--all` para un velo parejo.

## Markup
```html
<div class="rnd"><div class="rnd__clip"><img class="ph" src="/img/heros/melian.jpg" alt=""><i class="scrim scrim--b"></i></div>…</div>
```

## Reglas
- Radio `--r-panel` (40; 28 en móvil). El recorte va en `.rnd__clip`, no en `.rnd`: así las muescas (`Notch`) no se recortan.
- Mientras carga la foto se ve el degradado `--render-hi` → `--render-lo`.
- Fotos en `public/img/heros/`, 1600 px de ancho, JPG calidad 80.
