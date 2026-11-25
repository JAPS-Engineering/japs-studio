import * as React from 'react';

/**
 * ConsoleCard — from @japs/encastre@1.0.0.
 */
export interface ConsoleCardProps {
  /** Label mono de la cabecera (p. ej. "Vista — Caso 03"). */
  label: string;
  /** Opciones del control segmentado (p. ej. Móvil, Tablet, Escritorio). */
  options: string[];
  /** Índice (desde 0) de la opción activa. */
  current?: number;
  onSelect?: (index: number) => void;
  onPrev?: MouseEventHandler<HTMLElement>;
  onNext?: MouseEventHandler<HTMLElement>;
  /** La única CTA accent de la consola. */
  cta: { label: string; href?: string; onClick?: MouseEventHandler<HTMLElement>; };
  className?: string;
  style?: CSSProperties;
}

export declare const ConsoleCard: React.ComponentType<ConsoleCardProps>;
