import type { CSSProperties, ReactNode } from 'react';
import { AccountCluster, type AccountClusterProps } from './AccountCluster';
import { cx } from './cx';
import { SearchField, type SearchFieldProps } from './SearchField';
import { StudioMark } from './StudioMark';

export interface SiteHeaderProps {
  /** Logotipo en Archivo expandido junto a la marca. */
  brand?: string;
  brandHref?: string;
  /** Props del buscador; `false` lo oculta. */
  search?: SearchFieldProps | false;
  /** Props del grupo de cuenta (tema, perfil y menú). Sin él, se renderiza `end`. */
  account?: AccountClusterProps;
  /** Contenido propio del extremo derecho (sustituye a `account`). */
  end?: ReactNode;
  className?: string;
  style?: CSSProperties;
}

/**
 * Header completo: StudioMark + logotipo, buscador con atajo y grupo de cuenta, en una cápsula con hairline (lab 7h).
 */
export function SiteHeader({ brand = 'JAPS', brandHref = '#inicio', search, account, end, className, style }: SiteHeaderProps) {
  return (
    <header className={cx('site-header', className)} style={style}>
      <div className="site-header__start">
        <a href={brandHref} className="site-header__brand" aria-label={`${brand} Studio — inicio`}>
          <StudioMark size={42} label={`${brand} Studio`} />
          <span className="wordmark">{brand}</span>
        </a>
        {search === false ? null : <SearchField width={300} {...search} />}
      </div>
      {end ?? (account ? <AccountCluster {...account} /> : null)}
    </header>
  );
}
