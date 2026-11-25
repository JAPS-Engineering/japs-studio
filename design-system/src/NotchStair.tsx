import type { CSSProperties, ReactNode } from 'react';
import { cx } from './cx';

export interface NotchStairStep {
  /** Ancho del peldaño en px, medido desde el borde del panel. Debe crecer de arriba abajo. */
  width: number;
  /** Alto del peldaño en px (hasta el siguiente). Cada escalón debe medir ≥ 56 px para que la S se complete. */
  height: number;
  /** Contenido del peldaño (normalmente una Card). Queda a 12 px de los bordes del peldaño. */
  content: ReactNode;
}

export interface NotchStairProps {
  /** Esquina inferior que muerde: br (escalera a la derecha) o bl (a la izquierda). */
  corner: 'br' | 'bl';
  /** Peldaños de arriba abajo, cada uno más ancho que el anterior. 2–3 peldaños. */
  steps: NotchStairStep[];
  /**
   * stack = cada peldaño aloja su contenido en su propia franja (1c) ·
   * ledge = el primer peldaño es una columna estrecha que baja hasta el pie (IconButton + label vertical)
   * y el resto ocupa la repisa a su lado (escalera en L, 1d).
   */
  layout?: 'stack' | 'ledge';
  className?: string;
  style?: CSSProperties;
}

const px = (n: number) => `${n}px`;

/**
 * Escalera: muesca de esquina inferior con 2–3 peldaños y una pieza por peldaño (lab 1c, 1d).
 * Cuenta como una muesca. Hija directa de un Panel; el panel debe medir al menos la suma de los altos.
 */
export function NotchStair({ corner, steps, layout = 'stack', className, style }: NotchStairProps) {
  const side = corner === 'br' ? 'right' : 'left';
  const g = 12;
  // Alto acumulado desde el pie hasta la cima de cada peldaño.
  const fromBottom = steps.map((_, i) => steps.slice(i).reduce((s, st) => s + st.height, 0));
  const last = steps.length - 1;

  const blocks = steps.map((st, i) => (
    <div key={`b${i}`} className="notch-stair__step" style={{ [side]: 0, width: px(st.width), height: px(fromBottom[i]) }} />
  ));
  const fillets = [
    <div key="f-top" className="notch-stair__fillet" style={{ [side]: 0, bottom: px(fromBottom[0]) }} />,
    ...steps.map((st, i) => (
      <div key={`f${i}`} className="notch-stair__fillet" style={{ [side]: px(st.width), bottom: px(fromBottom[i + 1] ?? 0) }} />
    )),
  ];

  const slots = steps.map((st, i) => {
    const isLast = i === last;
    if (layout === 'ledge' && i === 0) {
      return (
        <div key={`s${i}`} className="notch-stair__slot notch-stair__slot--column"
          style={{ [side]: px(g), width: px(st.width - 2 * g), bottom: px(2 * g), height: px(fromBottom[0] - 3 * g) }}>
          {st.content}
        </div>
      );
    }
    const inset = layout === 'ledge' ? steps[i - 1].width : g;
    const width = layout === 'ledge' ? st.width - steps[i - 1].width - g : st.width - 2 * g;
    return (
      <div key={`s${i}`} className="notch-stair__slot"
        style={{ [side]: px(inset), width: px(width), bottom: px((fromBottom[i + 1] ?? 0) + (isLast ? g : 0)), height: px(st.height - g - (isLast ? g : 0)) }}>
        {st.content}
      </div>
    );
  });

  return (
    <div className={cx('notch-stair', `notch-stair--${corner}`, className)} style={style}>
      {blocks}
      {fillets}
      {slots}
    </div>
  );
}
