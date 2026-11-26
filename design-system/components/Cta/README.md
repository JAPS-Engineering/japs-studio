# Cta

Botón principal de JAPS Studio: píldora agua con la flecha en un círculo negro al final; al pasar el cursor el agua se aclara y la flecha gira a ↗.

## Cuándo usarlo
- Para la acción que más importa en la vista: «Construye con nosotros», «Enviar». Uno por vista; el resto de las acciones van como `PillLink` o `TextLink`.
- `cta--lg` en el hero, el cierre y el formulario (64 px de alto; 56 en móvil).
- `cta--icon` en el header móvil, donde no cabe el texto: círculo agua de 44 px con la flecha negra.

## Markup
```html
<a class="cta" href="/contacto"><span>Construye con nosotros</span><i class="cta__ico"><svg class="ico"><use href="#i-arrow"/></svg></i></a>
<a class="cta cta--lg" href="/contacto">…</a>
<a class="cta cta--icon" href="/contacto" aria-label="Construye con nosotros"><i class="cta__ico">…</i></a>
```

## Reglas
- Relleno `--accent`, texto e ícono `--on-accent` (negro). Nunca texto blanco sobre el agua.
- Radios concéntricos: píldora `--r-pill`, círculo de 40 a 6 px del borde (48 en `cta--lg`).
- El ícono `i-arrow` sale del sprite del sitio (`IconSprite`).
