import * as React from 'react';

/**
 * MediaCard — from @japs/encastre@1.0.0.
 */
export interface MediaCardProps {
  /** media = la imagen ocupa el borde superior con su propio radio 28 (5b) · inset = la imagen flota con 8 px de aire y radio */
  variant?: "media" | "inset" | "link";
  /** URL de la imagen o un nodo propio (render, video, ilustración). */
  image?: React.ReactNode;
  /** Label mono sobre la imagen (p. ej. "Caso 03"). */
  badge?: string;
  title: string;
  /** Categoría bajo el título (p. ej. "Producto digital"). */
  category?: string;
  /** Destino del enlace (`link`) o del título. */
  href?: string;
  /** Ancho en px (los anchos son libres; 380 por defecto). */
  width?: string | number;
  /** Alto total en px (400 por defecto). */
  height?: number;
  className?: string;
  style?: CSSProperties;
}

export declare const MediaCard: React.ComponentType<MediaCardProps>;
