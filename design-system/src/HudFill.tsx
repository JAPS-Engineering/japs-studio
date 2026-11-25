import { useRef, type CSSProperties, type ReactNode } from 'react';
import { cx } from './cx';
import { HudCross } from './Hud';
import { useHudMotion } from './hudMotion';

export interface HudFillItem {
  /** Dígitos grandes (ghost-index). */
  digits: string;
  title: string;
  meta?: string;
}

export interface HudFillProps {
  /**
   * registration = cruces de registro con serial (11a) · edge-ticks = regla de borde con índices (11b) ·
   * progress = barra técnica con contador (11c) · ghost-index = dígitos fantasma con ficha (11d) ·
   * dot-strip = tiras de puntos que respiran (11e) · series = coordenadas y fecha en serie (11f) ·
   * marked-card = card menta con código gigante (11g) · leader = guía diagonal con etiqueta (11h).
   */
  fill: 'registration' | 'edge-ticks' | 'progress' | 'ghost-index' | 'dot-strip' | 'series' | 'marked-card' | 'leader';
  /** Activa el movimiento (hover y respiro). Se apaga siempre con prefers-reduced-motion. */
  motion?: boolean;
  /** Texto principal: serial (registration), sección (edge-ticks), etiqueta de barra (progress), coordenadas (series), etiqueta (leader). */
  label?: string;
  /** Título (marked-card) o pie (series). */
  title?: string;
  /** Código corto: "1A" (marked-card), "N1" (leader), "01 >> NUL" (progress). */
  code?: string;
  /** Estado secundario en mono (progress, leader, marked-card). */
  status?: string;
  /** Avance 0–1 (progress). */
  progress?: number;
  /** Valor y total del contador (progress: "7 114" / "25 565"; series: fecha en serie y ratio). */
  value?: string;
  total?: string;
  /** Índices (edge-ticks), etiquetas de fila (dot-strip) o fichas (ghost-index). */
  items?: Array<string | HudFillItem>;
  className?: string;
  style?: CSSProperties;
}

const pct = (n: number) => `${Math.round(Math.min(1, Math.max(0, n)) * 100)}%`;

function Registration({ label }: { label: string }) {
  const bar = 'color-mix(in oklab, var(--text) 12%, var(--surface))';
  return (
    <>
      <span className="hud-fill__abs hud-fill__mono" style={{ left: 24, top: 24 }}>{label}</span>
      <span className="hud-fill__abs" data-hover="spin" style={{ left: '70%', top: 52, display: 'flex' }}><HudCross style={{ color: 'var(--text)' }} /></span>
      <span className="hud-fill__abs" aria-hidden="true" style={{ left: 'calc(70% - 34px)', top: 140, width: 80, height: 12, borderRadius: 999, background: bar }} />
      <span className="hud-fill__abs" aria-hidden="true" style={{ left: '70%', top: 106, width: 12, height: 80, borderRadius: 999, background: bar }} />
      <span className="hud-fill__abs" data-hover="spin" style={{ left: '70%', top: 228, display: 'flex' }}><HudCross style={{ color: 'var(--text)' }} /></span>
      <span className="hud-fill__abs" aria-hidden="true" style={{ left: 'calc(70% - 124px)', top: 252, width: 220, height: 4, borderRadius: 999, background: 'var(--hairline)' }} />
    </>
  );
}

function EdgeTicks({ label, marks }: { label: string; marks: string[] }) {
  const ticks = [32, 52, 140, 236];
  return (
    <>
      <span className="hud-fill__abs hud-fill__mono t-muted" style={{ left: 24, top: 24 }}>{label}</span>
      {ticks.map((top, i) => <span key={top} className="hud-fill__tick" aria-hidden="true" data-hover="extend" data-hdelay={i * 40} style={{ top }} />)}
      {marks[0] ? <span className="hud-fill__abs hud-fill__mono t-muted" style={{ right: 84, top: 134 }}>{marks[0]}</span> : null}
      {marks[1] ? <span className="hud-fill__abs hud-fill__mono t-muted" style={{ right: 84, top: 230 }}>{marks[1]}</span> : null}
    </>
  );
}

function Progress({ label, progress, value, total, status, code }: { label: string; progress: number; value: string; total: string; status: string; code: string }) {
  const p = Math.min(1, Math.max(0.05, progress));
  return (
    <div className="hud-fill__abs" style={{ inset: 0, padding: '32px 24px', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 36 }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <span style={{ font: '500 13px/1 var(--font-mono)' }}>{label}</span>
          <span aria-hidden="true" style={{ position: 'relative', flex: 1, height: 12 }}>
            <span style={{ position: 'absolute', left: 0, right: 0, top: 4, height: 4, borderRadius: 999, background: 'var(--text)' }} />
            <span data-hover="complete" data-scale={(1 / p).toFixed(2)} style={{ position: 'absolute', left: 0, top: 0, width: pct(p), height: 12, borderRadius: 999, background: 'var(--text)', transformOrigin: '0 50%' }} />
            <span style={{ position: 'absolute', left: `calc(${pct(p)} + 8px)`, top: 16, font: '500 11px/1 var(--font-mono)' }}>~~</span>
          </span>
        </div>
        <span style={{ alignSelf: 'flex-end', font: '500 11px/1 var(--font-mono)', color: 'var(--text-muted)', fontVariantNumeric: 'tabular-nums' }}>[ {value} / {total} ]</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <span className="hud-fill__mono t-muted">{status}</span>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <span aria-hidden="true" style={{ flex: 1, height: 8, borderRadius: 999, background: 'var(--hairline)', display: 'flex' }}><span style={{ width: '55%', borderRadius: 999, background: 'var(--hairline-strong)' }} /></span>
          <span style={{ font: '500 13px/1 var(--font-mono)', whiteSpace: 'nowrap' }}>{code}</span>
          <span aria-hidden="true" style={{ width: 24, height: 16, borderRadius: 6, background: 'var(--hairline)' }} />
        </div>
      </div>
    </div>
  );
}

function GhostIndex({ items }: { items: HudFillItem[] }) {
  let d = 0;
  return (
    <div className="hud-fill__abs" style={{ inset: 0, padding: '32px 24px', display: 'grid', gridTemplateColumns: `repeat(${items.length}, minmax(0, 1fr))`, gap: 24 }}>
      {items.map((it) => (
        <div key={it.digits + it.title} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <span aria-hidden="true" style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 130, lineHeight: 0.8, letterSpacing: '-0.03em', color: 'color-mix(in oklab, var(--text) 12%, transparent)' }}>
            {it.digits.split('').map((ch, i) => <span key={i} data-hover="pulse" data-hdelay={(d++) * 50}>{ch}</span>)}
          </span>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 2, fontSize: 15, lineHeight: 1.25 }}>
            <strong style={{ fontWeight: 600 }}>{it.title}</strong>
            {it.meta ? <><span>—</span><span>{it.meta}</span></> : null}
          </div>
        </div>
      ))}
    </div>
  );
}

const DOT_PATTERN = '1010101001010101';

function DotStrip({ labels }: { labels: string[] }) {
  const rowLabels: Record<number, string | undefined> = { 0: labels[0], 3: labels[1], 5: labels[2] };
  return (
    <>
      <div className="hud-fill__abs" style={{ left: 24, top: 32, display: 'flex', flexDirection: 'column', gap: 16 }}>
        {Array.from({ length: 7 }, (_, r) => {
          let lit = 0;
          return (
            <div key={r} style={{ display: 'flex', alignItems: 'center', gap: 20, height: 13 }}>
              <span aria-hidden="true" className="hud-fill__dots" data-hover="slide" data-hdelay={r * 30}>
                {DOT_PATTERN.split('').map((on, i) => on === '1'
                  ? <span key={i} className="hud-fill__dot hud-fill__dot--on" data-breathe="dot" data-delay={r * 90 + (lit++) * 240} />
                  : <span key={i} className="hud-fill__dot" />)}
              </span>
              {rowLabels[r] ? <span className="hud-fill__mono">{rowLabels[r]}</span> : null}
            </div>
          );
        })}
      </div>
      <span className="hud-fill__abs" aria-hidden="true" style={{ right: 24, bottom: 24, width: 28, height: 18, borderRadius: 6, background: 'var(--text)' }} />
    </>
  );
}

function Series({ label, value, total, title, ratio }: { label: string; value: string; total: string; title: string; ratio: number }) {
  const lines = (s: string) => s.split('\n').map((l, i, a) => <span key={i}>{l}{i < a.length - 1 ? <br /> : null}</span>);
  const decimals = (String(ratio).split('.')[1] ?? '').length;
  return (
    <div className="hud-fill__abs" style={{ inset: 0, padding: '28px 24px', display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) auto', gap: '24px 32px', alignContent: 'start' }}>
      <span style={{ font: '500 14px/1.35 var(--font-mono)', textAlign: 'right', fontVariantNumeric: 'tabular-nums' }}>{lines(label)}</span>
      <span data-count={value} data-pad={value.length} style={{ font: '500 44px/1 var(--font-mono)', fontVariantNumeric: 'tabular-nums', letterSpacing: '-0.02em' }}>{value}</span>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10, paddingTop: 28 }}>
        <span aria-hidden="true" style={{ height: 6, borderRadius: 999, background: 'var(--text)' }} />
        <span style={{ alignSelf: 'flex-end', font: '500 11px/1 var(--font-mono)', color: 'var(--text-muted)', fontVariantNumeric: 'tabular-nums' }}>
          [ <span data-count={ratio} data-decimals={decimals}>{ratio.toFixed(decimals)}</span> / {total} ]
        </span>
      </div>
      <span style={{ font: '500 14px/1.35 var(--font-mono)', textAlign: 'right', textTransform: 'uppercase' }}>{lines(title)}</span>
    </div>
  );
}

function MarkedCard({ code, title, status }: { code: string; title: string; status: string }) {
  const tone = 'color-mix(in oklab, var(--accent) 82%, var(--c-ink))';
  return (
    <>
      <span className="hud-fill__abs" aria-hidden="true" style={{ left: 12, right: 12, top: 20, height: 3, borderRadius: 999, background: 'color-mix(in oklab, var(--c-surface) 85%, transparent)' }} />
      <span className="hud-fill__abs" aria-hidden="true" style={{ right: 16, top: 32, width: 6, height: 6, borderRadius: 2, background: tone }} />
      <span className="hud-fill__abs" aria-hidden="true" style={{ right: 28, top: 48, fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 200, lineHeight: 0.8, letterSpacing: '-0.03em', color: tone }}>{code}</span>
      <span className="hud-fill__abs" aria-hidden="true" data-hover="grow" style={{ left: 32, top: 112, width: 32, height: 6, borderRadius: 999, background: 'var(--c-ink)', transformOrigin: '0 50%' }} />
      <span className="hud-fill__abs" aria-hidden="true" style={{ left: 32, top: 236, display: 'flex', alignItems: 'center', gap: 6 }}>
        <span data-hover="grow" data-hdelay="60" style={{ width: 32, height: 6, borderRadius: 999, background: 'var(--c-ink)', transformOrigin: '0 50%' }} />
        <span style={{ font: '500 11px/1 var(--font-mono)' }}>~~</span>
      </span>
      <div className="hud-fill__abs" style={{ right: 32, top: 176, display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 2, fontSize: 15, lineHeight: 1.25, textAlign: 'right' }}>
        <strong style={{ fontWeight: 600 }}>{title}</strong><span>—</span><span>{status}</span>
      </div>
      <span className="hud-fill__abs" aria-hidden="true" style={{ left: 32, right: 32, bottom: 40, height: 6, borderRadius: 999, background: tone }} />
      <span className="hud-fill__abs" aria-hidden="true" data-hover="travel" style={{ left: 32, bottom: 35, width: 32, height: 16, borderRadius: 6, background: 'var(--c-ink)' }} />
    </>
  );
}

function Leader({ code, label, status }: { code: string; label: string; status: string }) {
  return (
    <>
      <span className="hud-fill__abs" style={{ left: 32, top: 48, display: 'flex', alignItems: 'center', gap: 8, font: '500 13px/1 var(--font-mono)' }}>
        {code}<span aria-hidden="true" style={{ width: 28, height: 18, borderRadius: 6, background: 'var(--hairline)' }} />
      </span>
      {/* Medidas en cqw (ancho del relleno) para que la guía escale con el contenedor; referencia a 640 px. */}
      <span className="hud-fill__abs" aria-hidden="true" style={{ left: '31.25cqw', top: 58, width: '6.9cqw', height: 4, borderRadius: 999, background: 'var(--text)' }} />
      <span className="hud-fill__abs" aria-hidden="true" data-hover="draw" style={{ left: '37.5cqw', top: 58, width: '34.4cqw', height: 4, borderRadius: 999, background: 'var(--text)', transformOrigin: '2px 2px', transform: 'rotate(42deg)' }} />
      <span className="hud-fill__abs hud-fill__mono" style={{ left: '62cqw', top: 'calc(72px + 23cqw)', whiteSpace: 'nowrap' }}>{label}</span>
      <span className="hud-fill__abs hud-fill__mono t-muted" style={{ left: 32, bottom: 32 }}>{status}</span>
    </>
  );
}

/**
 * Relleno HUD para zonas vacías: ocho composiciones técnicas con movimiento al pasar el cursor (lab 11a–11h).
 * Llena su contenedor (300 px de alto mínimo; marked-card es la card en sí, 360 px). Cuenta para el límite de 1–2 detalles HUD por viewport.
 */
export function HudFill({
  fill, motion = true, label, title, code, status, progress, value, total, items, className, style,
}: HudFillProps) {
  const ref = useRef<HTMLDivElement>(null);
  useHudMotion(ref, motion);
  const strings = (items ?? []).filter((x): x is string => typeof x === 'string');
  const cards = (items ?? []).filter((x): x is HudFillItem => typeof x !== 'string');
  let body: ReactNode;
  switch (fill) {
    case 'registration': body = <Registration label={label ?? 'Encastre — v1.0 — R/28 G/12'} />; break;
    case 'edge-ticks': body = <EdgeTicks label={label ?? '03 — Proceso'} marks={strings.length ? strings : ['1.', '2c']} />; break;
    case 'progress': body = <Progress label={label ?? 'SPRINT_07'} progress={progress ?? 0.34} value={value ?? '7 114'} total={total ?? '25 565'} status={status ?? 'Incompleto'} code={code ?? '01 >> NUL'} />; break;
    case 'ghost-index': body = <GhostIndex items={cards.length ? cards : [{ digits: '00', title: 'Archivo ExtraBold', meta: '130 px' }, { digits: '01', title: 'Archivo ExtraBold', meta: '130 px' }]} />; break;
    case 'dot-strip': body = <DotStrip labels={strings.length ? strings : ['0A', '2B', '23']} />; break;
    case 'series': body = <Series label={label ?? '[ 40°25\'08"N —\n3°42\'13"W ]'} value={value ?? '211026'} total={total ?? '3.33'} title={title ?? 'JS/\nSerie_diaria'} ratio={progress ?? 1.6} />; break;
    case 'marked-card': body = <MarkedCard code={code ?? '1A'} title={title ?? 'Plataforma Atlas'} status={status ?? 'Caso 1A'} />; break;
    default: body = <Leader code={code ?? 'N1'} label={label ?? '02 — Detalle'} status={status ?? 'Incompleto — 3 / 8'} />;
  }
  return (
    <div ref={ref} className={cx('hud-fill', `hud-fill--${fill}`, fill === 'marked-card' && 'hud-fill--marked', className)} style={style}>
      {body}
    </div>
  );
}
