import * as React from 'react';

/**
 * SiteHeader — from @japs/encastre@1.0.0.
 */
export interface SiteHeaderProps {
  /** Logotipo en Archivo expandido junto a la marca. */
  brand?: string;
  brandHref?: string;
  /** Props del buscador; `false` lo oculta. */
  search?: false | SearchFieldProps;
  /** Props del grupo de cuenta (tema, perfil y menú). Sin él, se renderiza `end`. */
  account?: AccountClusterProps;
  /** Contenido propio del extremo derecho (sustituye a `account`). */
  end?: React.ReactNode;
  className?: string;
  style?: CSSProperties;
}

export declare const SiteHeader: React.ComponentType<SiteHeaderProps>;
