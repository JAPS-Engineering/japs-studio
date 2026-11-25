import { Capsule, Card, Heading, HudLabel, Icon, IconButton, Panel, ThemeRoot, Shell } from '@japs/encastre';

const Layout = () => (
  <Shell style={{ display: 'grid', gridTemplateColumns: '64px 1fr', gap: 'var(--gap)', minHeight: 260 }}>
    <Capsule style={{ width: 64 }}>
      <IconButton label="JAPS Studio"><Icon name="plus" /></IconButton>
    </Capsule>
    <div style={{ display: 'grid', gap: 'var(--gap)', gridTemplateRows: '1fr auto' }}>
      <Panel padding="md"><HudLabel>Panel · radio 28</HudLabel><Heading variant="h2" style={{ marginTop: 8 }}>Encastre</Heading></Panel>
      <Card padding="sm"><HudLabel tone="muted">Card · radio 16</HudLabel></Card>
    </div>
  </Shell>
);

export const Light = () => <ThemeRoot theme="light" style={{ padding: 12, background: 'var(--c-mist)' }}><Layout /></ThemeRoot>;

export const Dark = () => <ThemeRoot theme="dark" style={{ padding: 12, background: 'var(--c-graphite-2)' }}><Layout /></ThemeRoot>;
