Timeline from @japs/encastre. Use via `window.JapsEncastre.Timeline` (bundle loaded from the root `_ds_bundle.js`). Wrap the tree in `<ThemeRoot>` (full provider chain in README.md — components read theme/i18n from that context).

Línea de tiempo vertical con nodos (ref. 21): etapas de un proceso con etiqueta mono y descripción opcional. `current` (índice desde 0) pinta en menta el nodo del paso activo.

```jsx
<Timeline
  current={1}
  steps={[
    { label: 'Diagnóstico', description: 'Mapa del problema y alcance' },
    { label: 'Prototipo', description: 'Interfaz navegable y validada' },
    { label: 'Producción', description: 'Software en manos del equipo' },
  ]}
/>
```

## Props

```ts
interface TimelineProps {
  steps: TimelineStep[];
  /** Índice (desde 0) del paso activo; su nodo va en menta (`aria-current="step"`). */
  current?: number;
  className?: string;
  style?: CSSProperties;
}
```
