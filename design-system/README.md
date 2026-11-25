# JAPS Studio

JAPS Studio es el venture studio de JAPS Engineering: construye productos y empresas junto a personas que conocen de cerca un problema y su mercado. Su sitio, studio.japs.ing, presenta el estudio, su portafolio (Consenty, Project Check, Brixor, Melian, Relatio, Sonicali) y un formulario para proponer una idea.

La identidad es oscura y fotográfica: un fondo casi negro sobre el que el contenido va directo, fotos reales de personas trabajando con tecnología, un solo color de acento (agua) y formas redondeadas que encajan entre sí con muescas concéntricas.

Este sistema vive en el repo `JAPS-Engineering/japs-studio`, carpeta `design-system/`, y el sitio lo usa tal cual: `design-system/styles.css` es el CSS del sitio.

## Contenido y voz

- Español de Chile, cercano y directo. Se habla de «tú»: «Cuéntanos qué problema conoces», «Construye con nosotros».
- Frases cortas, en activa, sin exclamaciones ni emojis. Nada de jerga de startup sin explicar.
- Los botones dicen lo que pasa: «Construye con nosotros», «Enviar», «Conocer Consenty», «Ver portafolio».
- Mayúscula inicial solo en la primera palabra y en nombres propios: «Cómo funciona», «Trabaja con nosotros».
- Los estados de producto son de una a cuatro palabras: «Publicado y en venta», «Por confirmar», «En investigación».
- Lo que no está confirmado se marca «Por confirmar». No se prometen plazos.
- **No se publica**: clientes piloto, acuerdos económicos con contrapartes, ventas, costos, precios ni nombres antiguos de productos. De Relatio no se nombra al cliente ni el acuerdo.
- Cada producto construido con una contraparte la muestra con su logo, «Junto a …»: Brixor con Nevermore, Project Check con DueGreen, Melian con Imaginería.

## Color

Solo modo oscuro: no hay modo claro ni botón de tema.

- `bg` (#020304) es el fondo de toda página. Las secciones van directo sobre él, separadas por aire y una línea `hairline`; no hay «doble fondo» ni carcasa redondeada alrededor del contenido. `html` y `body` fijan siempre `background-color: var(--bg)`.
- `surface` (#172F31) es para dar énfasis: una card con un dato, una comparación, una acción o un estado, y los menús desplegables. Nunca una sección completa dentro de una card.
- `accent` (agua, #6ADCDC) es el único color de acción: relleno de la `Cta`, una o dos palabras acentuadas del titular (`.ac`), el foco y los puntos de estado. Encima siempre texto negro (`on-accent`): blanco sobre agua no se lee.
- `text` para el texto principal; `muted` para bajadas, categorías y metadatos.
- `tint` es el fondo de las etiquetas, con texto blanco.
- `signal` (ámbar, #EEC158) marca errores de formulario y, como mucho, un dato por vista.
- `glass` es el vidrio ahumado sobre fotos y en la cápsula del header; `glass-edge` su borde.
- `paper` es solo la cápsula blanca de logos de contrapartes y sellos.

Contraste sobre `bg`: `text` 18,8:1, `muted` 12,1:1, `accent` 12,7:1, `signal` 12,2:1. Sobre `surface`: `text` 12,9:1, `muted` 8,2:1. Negro sobre `accent` 12,9:1; blanco sobre `tint` 7,0:1; `text` sobre `step` (campos) 6,8:1.

## Tipografía

Sora para todo: titulares, texto, cifras y etiquetas. No hay fuente monoespaciada. Se carga desde Google Fonts (pesos 300, 400, 500 y 600).

- Titulares en 400, con espaciado negativo (−0,04 em en el hero, −0,03 em en secciones) y `text-wrap: balance`. Sora es ancha: vigilar que los titulares no desborden en móvil.
- Un solo titular `display` por vista. Los títulos de sección usan `section`; los de card, `card-title` en `text` (con presencia, nunca gris pequeño).
- Etiquetas y categorías en mayúsculas de 11 px, 500, espaciado 0,08 em.
- Los tamaños de titular escalan con el contenedor (`cqw`), no con la ventana: cada sección es un contenedor (`.cq`).

## Formas, espacio y muescas

- Todo es redondeado. Radios: `r-pill` para píldoras y CTA, `r-panel` 40 para paneles con foto, `r-card` 32 para cards, `r-tile` 28 para menús y tarjetas, `r-control` 20 para campos e ítems. En móvil los paneles bajan a 28.
- **Esquinas concéntricas**: el radio interior es el exterior menos la separación. Una CTA de radio 26 dentro de un panel deja 6 px y su círculo interior tiene radio 20.
- **Muescas** (`Notch`): una esquina del panel se muerde para alojar una sola pieza. Máximo dos por panel, en esquinas opuestas, nunca vacías. Para una pieza de radio r con separación g: esquina interior r + g, filetes r. Nunca `overflow: hidden` en un panel con muescas.
- Separación de 24 px entre secciones de la portada y 48 en las páginas interiores. Contenedor de 1440 px con 40 px de margen (16 en móvil).
- Botones grandes: CTA de 52 (64 la grande), píldoras de 52–64, círculos de 44–52. En móvil 44–56.

## Imágenes

- Todo panel lleva una foto real: personas trabajando con tecnología en contextos chilenos, o el producto en uso. **Nunca formas ni figuras 3D en CSS** (esferas, cápsulas, anillos, piedras).
- Las fotos se ven a través de un scrim (`scrim--b`, `scrim--l`, `scrim--all`) que oscurece donde va el texto.
- Archivos en `public/img/heros/`, 1600 px de ancho, JPG calidad 80. El grupo de assets Fotos tiene las que usa el sitio.

## Logo y marcas

- El logo de JAPS Studio es el **07d**: «JAPS» monolínea y «Studio» manuscrito en agua, subrayado. Se alinea por la caja de «JAPS»; «Studio» cuelga fuera. Archivos en el grupo Logos.
- El `StudioMark` de cuatro cápsulas y el isotipo octogonal no son el logo de Studio.
- El acceso a JAPS Engineering usa su imagotipo (`EngMark`) con sus colores invertidos (#EDEDED y #0F0F0F), sin fondo blanco y nunca en agua.
- Los isotipos de producto van sobre el color real de su marca (`ProductLogo`), nunca directo sobre una foto.
- El botón del Centro de Innovación UC (`CiucButton`) va en cada hero, junto a la CTA.
- Ícono de pestaña: la «S» manuscrita en agua sobre un cuadrado #020304 redondeado (`favicon.svg`).

## Iconografía

Íconos de línea de 24 × 24 con trazo de 1,75, extremos redondeados y sin relleno, que heredan el color del texto (`.ico`, 22 px; `.ico--s`, 16 px). Viven como `<symbol>` en el sprite del sitio (`src/components/site/IconSprite.astro`) y se usan con `<svg class="ico"><use href="#i-arrow"/></svg>`. La flecha `i-arrow` gira a ↗ dentro de la CTA y avanza 3 px en los enlaces.

## Movimiento

- Una curva para todo (`ease`) y 320 ms de base (`dur`).
- La primera visita muestra la pantalla de carga: se dibuja «JAPS», se escribe «Studio» y aparece el subrayado (mínimo 1,8 s). Al navegar entre páginas solo hay un fundido corto.
- Con `prefers-reduced-motion` no hay transiciones ni animaciones.

## Componentes

Cada componente tiene su ficha con guía y vista previa. Las clases están en `css/components.css` (acciones, etiquetas, superficies, marca, formulario) y `css/site.css` (layout, header, footer). En el sitio, los componentes Astro de `src/components/` generan ese markup.

## Usar el sistema en el repo

- `styles.css` importa, en orden, `css/tokens.css`, `css/base.css`, `css/components.css` y `css/site.css`. `src/layouts/Base.astro` lo importa una vez.
- `tokens.json` es la fuente de los tokens; `npm run tokens` regenera `css/tokens.css` y `npm run check` falla si quedó desactualizado.
- `npm run ds:artifact` arma la carpeta que se publica en el Design System de Claude (ver `SOURCE.md`).
