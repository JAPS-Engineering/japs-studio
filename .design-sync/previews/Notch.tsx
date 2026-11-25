import { Card, Chip, Heading, HudLabel, Icon, IconButton, Notch, Panel, Pill, ThemeRoot } from '@japs/encastre';

const tile = { minHeight: 170 } as const;

export const CanonicalPair = () => (
  <Panel padding="md" style={{ minHeight: 220 }}>
    <HudLabel>tr + bl · esquinas opuestas</HudLabel>
    <Notch corner="tr">
      <Pill href="#contacto">Contacto</Pill>
      <IconButton label="Abrir menú" variant="inverse"><Icon name="menu" /></IconButton>
    </Notch>
    <Notch corner="bl">
      <Pill variant="solid" size="lg" href="#agenda" icon={<Icon name="arrow-right" size={16} />}>Agenda una conversación</Pill>
    </Notch>
  </Panel>
);

export const LateralTab = () => (
  <Panel padding="lg" style={{ height: 400, paddingLeft: 100, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
    <HudLabel>01 — Estudio · corner="l"</HudLabel>
    <Heading variant="headline" style={{ fontSize: 44 }}>Software<br />que encaja.</Heading>
    <Notch corner="l">
      <IconButton label="Abrir caso" variant="inverse"><Icon name="arrow-right" /></IconButton>
      <HudLabel vertical>Caso 03 — Atlas</HudLabel>
    </Notch>
  </Panel>
);

export const BottomTab = () => (
  <Panel padding="lg" style={{ height: 320, paddingBottom: 108, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 16, textAlign: 'center' }}>
    <HudLabel>02 — Casos · corner="b"</HudLabel>
    <Heading variant="headline" style={{ fontSize: 40 }}>Piezas que<br />se ensamblan.</Heading>
    <Notch corner="b"><Pill variant="solid" size="lg" href="#casos" icon={<Icon name="arrow-right" size={16} />}>Ver casos</Pill></Notch>
  </Panel>
);

export const TopLeftAndBottomRight = () => (
  <Panel padding="md" style={tile}>
    <div style={{ position: 'absolute', right: 24, top: 20 }}><HudLabel>tl + br</HudLabel></div>
    <Notch corner="tl"><IconButton label="Volver"><Icon name="arrow-left" /></IconButton></Notch>
    <Notch corner="br"><Pill href="#caso">Ver caso</Pill></Notch>
  </Panel>
);

export const SectionTab = () => (
  <div style={{ padding: 16 }}>
  <Card style={{ paddingTop: 56, minHeight: 150 }}>
    <Notch corner="t" radius="card"><Chip variant="inverse">Sistema</Chip></Notch>
    <HudLabel tone="muted">t · pestaña de sección sobre Card</HudLabel>
  </Card>
  </div>
);

export const DarkMode = () => (
  <ThemeRoot theme="dark" style={{ padding: 12, borderRadius: 28 }}>
    <Panel padding="lg" style={{ height: 320, paddingRight: 100 }}>
      <HudLabel>El shell oscuro muerde el panel · corner="r"</HudLabel>
      <Notch corner="r">
        <IconButton label="Siguiente" variant="inverse"><Icon name="arrow-right" /></IconButton>
        <HudLabel vertical>Siguiente caso</HudLabel>
      </Notch>
    </Panel>
  </ThemeRoot>
);
