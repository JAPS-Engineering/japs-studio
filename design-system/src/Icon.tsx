import type { CSSProperties } from 'react';

const PATHS = {
  'arrow-right': <path d="M5 12h14M13 6l6 6-6 6" />,
  'arrow-left': <path d="M19 12H5M11 6l-6 6 6 6" />,
  'arrow-up-right': <path d="M7 17L17 7M8 7h9v9" />,
  menu: <path d="M5 9h14M5 15h9" />,
  plus: <path d="M12 5v14M5 12h14" />,
  close: <path d="M6 6l12 12M18 6L6 18" />,
  moon: <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />,
  sun: (
    <>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
    </>
  ),
  play: <path d="M8 5l11 7-11 7z" />,
  search: (
    <>
      <circle cx="10.5" cy="10.5" r="6.5" />
      <path d="M15.5 15.5L20 20" />
    </>
  ),
} as const;

export type IconName = keyof typeof PATHS;

export interface IconProps {
  name: IconName;
  /** Lado en px. */
  size?: number;
  /** Texto accesible; sin él el icono es decorativo (`aria-hidden`). */
  title?: string;
  style?: CSSProperties;
}

/**
 * Icono de trazo redondeado del sistema (2 px, terminaciones round): flechas, menú, más, cerrar, sol, luna, play y búsqueda.
 */
export function Icon({ name, size = 18, title, style }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      role={title ? 'img' : undefined}
      aria-label={title}
      aria-hidden={title ? undefined : true}
      style={{ display: 'block', flex: 'none', ...style }}
    >
      {PATHS[name]}
    </svg>
  );
}
