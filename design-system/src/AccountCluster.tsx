import type { CSSProperties, MouseEventHandler } from 'react';
import { cx } from './cx';
import { Icon } from './Icon';

export interface AccountClusterProps {
  /** Nombre visible en la cápsula de perfil. */
  name: string;
  /** Rol o cuenta, en mono (p. ej. "Cliente — Atlas"). */
  role?: string;
  /** URL de la foto de perfil. Sin ella se muestra un avatar de marcador. */
  avatarSrc?: string;
  profileHref?: string;
  /** Modo actual: el círculo muestra el icono para pasar al otro. */
  theme?: 'light' | 'dark';
  onToggleTheme?: MouseEventHandler<HTMLButtonElement>;
  /** Texto de la píldora de menú. */
  menuLabel?: string;
  onMenu?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
  style?: CSSProperties;
}

/**
 * Grupo de cuenta del header: círculo de tema en tinta, cápsula de perfil con avatar y píldora Menú, todo a 52 px (lab 7g).
 */
export function AccountCluster({
  name, role, avatarSrc, profileHref = '#perfil', theme = 'light', onToggleTheme, menuLabel = 'Menú', onMenu, className, style,
}: AccountClusterProps) {
  return (
    <div className={cx('account-cluster', className)} style={style}>
      <button type="button" className="account-cluster__theme" onClick={onToggleTheme}
        aria-label={theme === 'dark' ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}>
        <Icon name={theme === 'dark' ? 'sun' : 'moon'} size={18} />
      </button>
      <a href={profileHref} className="account-cluster__profile">
        <span className="account-cluster__who">
          <span className="account-cluster__name">{name}</span>
          {role ? <span className="account-cluster__role">{role}</span> : null}
        </span>
        {avatarSrc ? <img className="avatar" src={avatarSrc} alt="" /> : <span className="avatar" aria-hidden="true" />}
      </a>
      <button type="button" className="account-cluster__menu" onClick={onMenu}>
        {menuLabel}<Icon name="menu" size={18} />
      </button>
    </div>
  );
}
