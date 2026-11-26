# EngMark

Imagotipo de JAPS Engineering con sus colores invertidos para fondo oscuro: en reposo solo el octágono; al pasar el cursor o al enfocar, se arma con la secuencia de carga de japs.ing.

## Cuándo usarlo
- Para el acceso a JAPS Engineering en el header, el menú móvil, los sellos del footer y la sección de cierre.
- Ancho con `--w` (148 por defecto, igual que «JAPS» del logo de Studio). El espacio del logo completo queda reservado desde el inicio: nada se corre al armarse.
- `is-open` lo deja armado sin animación.

## Markup
Lo genera el componente `EngMark` del sitio (`src/components/site/EngMark.astro`), con un `id` único por instancia para su `clipPath`.

## Reglas
- Sus colores siempre: letras y octágono #EDEDED, anillo #0F0F0F. Nunca toma el agua.
- Sin fondo blanco. Nunca el texto «JAPS Engineering» imitando un logo.
