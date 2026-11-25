import type { CSSProperties } from 'react';

export interface LiveDotProps {
  style?: CSSProperties;
}

/**
 * Punto de 8 px en `--signal` que marca algo en vivo. Decorativo: acompáñalo siempre de texto.
 */
export function LiveDot({ style }: LiveDotProps) {
  return <span className="live-dot" aria-hidden="true" style={style} />;
}
