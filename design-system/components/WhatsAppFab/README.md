# WhatsAppFab

Botón flotante de WhatsApp, igual al de japs.ing pero en el agua de la página.

## Cuándo usarlo
- Uno por página, fijo abajo a la derecha (40 px del borde; 16 en móvil). Lo genera `src/components/site/WhatsAppFab.astro` con el número de `src/data/site.ts`.

## Reglas
- Fondo `--wa`, ícono negro; cada 15 s hace un pequeño gesto, que se apaga con `prefers-reduced-motion`.
