import * as React from 'react';

/**
 * AccountCluster — from @japs/encastre@1.0.0.
 */
export interface AccountClusterProps {
  /** Nombre visible en la cápsula de perfil. */
  name: string;
  /** Rol o cuenta, en mono (p. ej. "Cliente — Atlas"). */
  role?: string;
  /** URL de la foto de perfil. Sin ella se muestra un avatar de marcador. */
  avatarSrc?: string;
  profileHref?: string;
  /** Modo actual: el círculo muestra el icono para pasar al otro. */
  theme?: "light" | "dark";
  onToggleTheme?: MouseEventHandler<HTMLButtonElement>;
  /** Texto de la píldora de menú. */
  menuLabel?: string;
  onMenu?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
  style?: CSSProperties;
}

export declare const AccountCluster: React.ComponentType<AccountClusterProps>;
