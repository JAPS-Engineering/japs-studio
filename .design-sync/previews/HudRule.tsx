import { Card, HudLabel, HudRule, ThemeRoot } from '@japs/encastre';

const Spec = () => (
  <Card variant="muted" style={{ display: 'grid', gap: 12, width: 300 }}>
    <HudLabel tone="muted">Labels y reglas</HudLabel>
    <HudLabel>SN 00.43/20-34</HudLabel>
    <HudRule />
    <HudLabel tone="accent">Estado activo</HudLabel>
  </Card>
);

export const Divider = () => <Spec />;

export const DarkMode = () => <ThemeRoot theme="dark" style={{ padding: 16, borderRadius: 28 }}><Spec /></ThemeRoot>;
