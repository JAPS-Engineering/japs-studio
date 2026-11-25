import { SearchField, ThemeRoot } from '@japs/encastre';

export const Default = () => (
  <div style={{ padding: 24, borderRadius: 28, border: '1px solid var(--hairline)', display: 'flex', justifyContent: 'center' }}>
    <SearchField />
  </div>
);

export const WithoutShortcut = () => (
  <div style={{ padding: 24 }}><SearchField shortcut="" placeholder="Buscar en el blog" width={320} /></div>
);

export const DarkMode = () => (
  <ThemeRoot theme="dark" style={{ padding: 24, borderRadius: 28 }}><SearchField /></ThemeRoot>
);
