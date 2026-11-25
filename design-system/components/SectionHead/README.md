# SectionHead

Encabezado de sección: etiqueta y título a la izquierda (7/12), bajada y acción a la derecha (5/12).

## Markup
```html
<header class="sh"><div class="sh__t"><span class="label">…</span><h2>…</h2></div><div class="sh__r"><p>…</p></div></header>
```

## Reglas
- El título usa el estilo `section` (clamp 32–58 px, 30 en móvil) y puede acentuar una o dos palabras con `<span class="ac">`.
- Va dentro de un contenedor `.cq`: responde al ancho de la sección, no de la ventana.
