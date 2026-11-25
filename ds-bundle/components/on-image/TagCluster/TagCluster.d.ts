import * as React from 'react';

/**
 * TagCluster — from @japs/encastre@1.0.0.
 */
export interface TagClusterProps {
  /** Tags que nombran lo que se ve en la imagen (p. ej. "#Producto"). */
  tags: string[];
  /** Posición del racimo dentro de su contenedor (con `position: relative`), en px o %. Sin ella se renderiza en línea. */
  anchor?: { x: number | string; y: number | string; };
  /** Lado del punto de anclaje: left (por defecto) o right. */
  side?: "left" | "right";
  className?: string;
  style?: CSSProperties;
}

export declare const TagCluster: React.ComponentType<TagClusterProps>;
