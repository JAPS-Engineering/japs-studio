/** Une nombres de clase e ignora los valores vacíos. Uso interno. */
export function cx(...parts: Array<string | false | null | undefined>): string {
  return parts.filter(Boolean).join(' ');
}

/** Escala de espacio de tokens.json expresada como variables CSS. */
export const SPACE = {
  none: '0',
  sm: 'var(--space-4)',
  md: 'var(--space-5)',
  lg: 'var(--space-6)',
} as const;

export type Space = keyof typeof SPACE;
