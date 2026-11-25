import { AccountCluster, ThemeRoot } from '@japs/encastre';

export const Default = () => (
  <div style={{ padding: 24, borderRadius: 28, border: '1px solid var(--hairline)', display: 'flex', justifyContent: 'center' }}>
    <AccountCluster name="Lucía Romero" role="Cliente — Atlas" />
  </div>
);

export const DarkMode = () => (
  <ThemeRoot theme="dark" style={{ padding: 24, borderRadius: 28, display: 'flex', justifyContent: 'center' }}>
    <AccountCluster name="Lucía Romero" role="Cliente — Atlas" theme="dark" />
  </ThemeRoot>
);
