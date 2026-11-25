import { HudLabel, Icon, ThemeRoot } from '@japs/encastre';

const NAMES = ['arrow-right', 'arrow-left', 'arrow-up-right', 'menu', 'plus', 'close', 'sun', 'moon', 'play', 'search'] as const;

const IconSet = () => (
  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(10, 1fr)', gap: 12 }}>
    {NAMES.map((n) => (
      <div key={n} style={{ display: 'grid', justifyItems: 'center', gap: 8 }}>
        <Icon name={n} size={24} />
        <HudLabel tone="muted" style={{ fontSize: 10 }}>{n}</HudLabel>
      </div>
    ))}
  </div>
);

export const AllIcons = () => <div style={{ padding: 16 }}><IconSet /></div>;

export const DarkMode = () => <ThemeRoot theme="dark" style={{ padding: 16, borderRadius: 16 }}><IconSet /></ThemeRoot>;
