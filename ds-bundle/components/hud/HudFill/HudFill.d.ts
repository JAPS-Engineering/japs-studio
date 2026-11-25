import * as React from 'react';

/**
 * HudFill — from @japs/encastre@1.0.0.
 */
export interface HudFillProps {
  /** registration = cruces de registro con serial (11a) · edge-ticks = regla de borde con índices (11b) · progress = barra té */
  fill: "registration" | "edge-ticks" | "progress" | "ghost-index" | "dot-strip" | "series" | "marked-card" | "leader";
  /** Activa el movimiento (hover y respiro). Se apaga siempre con prefers-reduced-motion. */
  motion?: boolean;
  /** Texto principal: serial (registration), sección (edge-ticks), etiqueta de barra (progress), coordenadas (series), etique */
  label?: string;
  /** Título (marked-card) o pie (series). */
  title?: string;
  /** Código corto: "1A" (marked-card), "N1" (leader), "01 >> NUL" (progress). */
  code?: string;
  /** Estado secundario en mono (progress, leader, marked-card). */
  status?: string;
  /** Avance 0–1 (progress). */
  progress?: number;
  /** Valor y total del contador (progress: "7 114" / "25 565"; series: fecha en serie y ratio). */
  value?: string;
  total?: string;
  /** Índices (edge-ticks), etiquetas de fila (dot-strip) o fichas (ghost-index). */
  items?: (string | HudFillItem)[];
  className?: string;
  style?: CSSProperties;
}

export declare const HudFill: React.ComponentType<HudFillProps>;
