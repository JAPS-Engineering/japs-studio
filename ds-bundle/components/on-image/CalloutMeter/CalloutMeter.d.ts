import * as React from 'react';

/**
 * CalloutMeter — from @japs/encastre@1.0.0.
 */
export interface CalloutMeterProps {
  /** Posición (esquina superior izquierda) de la card en px dentro del contenedor (con `position: relative`). */
  x: number;
  y: number;
  /** Punto señalado, a la derecha y por debajo de la card. La guía sale del borde derecho y baja en codo (curva de 20 px). */
  target: { x: number; y: number; };
  /** Label mono junto al icono. */
  title: string;
  value: React.ReactNode;
  unit?: string;
  /** Avance de la barra (0–1). */
  progress: number;
  icon?: React.ReactNode;
  /** solid = tinta (por defecto) · glass = tinta translúcida sobre la imagen. */
  surface?: "glass" | "solid";
  width?: number;
  /** Altura de la guía horizontal medida desde la cima de la card (66 por defecto: el centro de la card). */
  elbowOffset?: number;
  className?: string;
  style?: CSSProperties;
}

export declare const CalloutMeter: React.ComponentType<CalloutMeterProps>;
