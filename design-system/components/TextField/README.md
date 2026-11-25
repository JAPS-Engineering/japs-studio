# TextField

Campo de texto con etiqueta, ayuda opcional y mensaje de error.

## Cuándo usarlo
- Para datos cortos (`input.inp`) o largos (`textarea.inp`, mínimo 132 px).
- `fld is-err` muestra el error en ámbar y un borde de 2 px `--signal`.

## Markup
Lo genera `src/components/form/TextField.astro`:
```html
<div class="fld"><label class="fld__l" for="nombre">Nombre<span class="req">*</span></label><input class="inp" id="nombre" …><p class="fld__e">…Falta este dato</p></div>
```

## Reglas
- Fondo `--step`, radio `--r-control`, alto 56, texto 16 (no se hace zoom en iOS).
- El asterisco de obligatorio va en agua (`.req`); el mensaje de error dice qué falta, sin disculpas.
