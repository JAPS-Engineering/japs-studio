# GlassPanel

Panel de vidrio ahumado que se monta sobre una foto para llevar texto encima sin perder la imagen.

## Cuándo usarlo
- Solo sobre fotos (`PhotoPanel`), nunca sobre el fondo de página: ahí el contenido va directo.
- Para una etiqueta y una o dos líneas, o una lista corta de ideas o pasos.

## Markup
```html
<div class="glass"><span class="label">Quiénes somos</span><p>…</p></div>
```

## Reglas
- Fondo `--glass` (tinta al 65 %), borde interior `--glass-edge`, blur 18, radio 24.
