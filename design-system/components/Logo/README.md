# Logo

Logo 07d de JAPS Studio: «JAPS» monolínea en `--text` y «Studio» manuscrito en agua, subrayado.

## Cuándo usarlo
- En el header (148 px; 136 al bajar; 118 en móvil), el footer (160) y la pantalla de carga.
- Se alinea solo por la caja de «JAPS» (`viewBox="138 120 724 128"`, `overflow: visible`): «Studio» cuelga fuera de la caja y no empuja el layout.

## Markup
```html
<svg class="logo" viewBox="138 120 724 128" role="img" aria-label="JAPS Studio"><use href="#logo-g"/></svg>
```
El símbolo `logo-g` está en el sprite del sitio. Para usarlo fuera del sitio están `logo-japs-studio.svg` (transparente) y `logo-japs-studio-sobre-fondo.svg` en el grupo de assets Logos.

## Reglas
- `--logo-studio` pinta «Studio»; `--logo-knock` (el fondo) recorta las letras de «JAPS» donde «Studio» las cruza.
- No es el logo: el `StudioMark` de cuatro cápsulas ni el isotipo octogonal (ese es de JAPS Engineering).
