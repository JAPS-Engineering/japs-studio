import { useEffect, type RefObject } from 'react';

/**
 * Movimiento de los rellenos HUD (lab 11), portado de la referencia NotchLab.
 * Marcado: `data-hover="spin|extend|complete|lift|slide|grow|travel|draw|pulse"` (+ `data-hdelay` ms),
 * `data-count="<valor>"` (+ `data-decimals`, `data-pad`) y `data-breathe="dot"` (+ `data-delay` ms).
 * Hover: 420 ms cubic-bezier(.2,.8,.2,1), fill both, se invierte al salir (travel 900 ms; draw se reinicia;
 * pulse es una ola de una pasada). Respiro: bucle alternate. Todo se apaga con prefers-reduced-motion.
 */
type MotionEl = HTMLElement & { _ha?: Animation | null; _raf?: number };

const EASE = 'cubic-bezier(.2,.8,.2,1)';

function framesFor(el: HTMLElement, root: HTMLElement): Keyframe[] | null {
  switch (el.dataset.hover) {
    case 'spin': return [{ transform: 'rotate(0deg)' }, { transform: 'rotate(90deg)' }];
    case 'extend': return [{ transform: 'scaleX(1)' }, { transform: 'scaleX(1.8)' }];
    case 'complete': return [{ transform: 'scaleX(1)' }, { transform: `scaleX(${el.dataset.scale ?? '2.94'})` }];
    case 'lift': return [{ transform: 'translateY(0)' }, { transform: 'translateY(-8px)' }];
    case 'slide': return [{ transform: 'translateX(0)' }, { transform: 'translateX(10px)' }];
    case 'grow': return [{ transform: 'scaleX(1)' }, { transform: 'scaleX(1.6)' }];
    case 'travel': return [{ transform: 'translateX(0)' }, { transform: `translateX(${Math.max(0, root.clientWidth - 96)}px)` }];
    case 'draw': return [{ transform: 'rotate(42deg) scaleX(0)' }, { transform: 'rotate(42deg) scaleX(1)' }];
    default: return null;
  }
}

function runCount(el: MotionEl, run: boolean) {
  const node = el.firstChild;
  if (!node || node.nodeType !== 3) return;
  const target = parseFloat(el.dataset.count ?? '0');
  const dec = Number(el.dataset.decimals ?? 0);
  const pad = Number(el.dataset.pad ?? 0);
  const fmt = (v: number) => { const s = v.toFixed(dec); return pad ? s.padStart(pad, '0') : s; };
  if (el._raf) cancelAnimationFrame(el._raf);
  if (!run) { node.nodeValue = fmt(target); return; }
  const t0 = performance.now();
  const step = (now: number) => {
    const t = Math.min(1, (now - t0) / 280);
    node.nodeValue = fmt(target * (1 - Math.pow(1 - t, 3)));
    if (t < 1) el._raf = requestAnimationFrame(step);
  };
  el._raf = requestAnimationFrame(step);
}

/** Activa el movimiento HUD dentro de `ref` (la raíz que recibe el hover). */
export function useHudMotion(ref: RefObject<HTMLElement | null>, enabled: boolean) {
  useEffect(() => {
    const root = ref.current;
    if (!root || !enabled || typeof window === 'undefined' || typeof root.animate !== 'function') return;
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return;

    const breathe: Animation[] = [];
    root.querySelectorAll<HTMLElement>('[data-breathe="dot"]').forEach((el) => {
      breathe.push(el.animate([{ opacity: 1 }, { opacity: 0.2 }], {
        duration: 1400, delay: Number(el.dataset.delay ?? 0), iterations: Infinity, direction: 'alternate', easing: 'ease-in-out',
      }));
    });

    const targets = () => Array.from(root.querySelectorAll<MotionEl>('[data-hover]'));
    const counts = () => Array.from(root.querySelectorAll<MotionEl>('[data-count]'));

    const enter = () => {
      targets().forEach((el) => {
        const k = el.dataset.hover;
        const delay = Number(el.dataset.hdelay ?? 0);
        if (k === 'pulse') {
          el._ha?.cancel();
          el._ha = el.animate([{ opacity: 1 }, { opacity: 0.2 }, { opacity: 1 }], { duration: 320, delay, iterations: 1, easing: 'ease-in-out' });
          return;
        }
        const frames = framesFor(el, root);
        if (!frames) return;
        if (k === 'draw' || !el._ha) {
          el._ha?.cancel();
          el._ha = el.animate(frames, { duration: k === 'travel' ? 900 : 420, delay, fill: 'both', easing: EASE });
          return;
        }
        if (el._ha.playbackRate < 0) el._ha.reverse();
      });
      counts().forEach((el) => runCount(el, true));
    };
    const leave = () => {
      targets().forEach((el) => {
        if (!el._ha) return;
        if (el.dataset.hover === 'pulse') { el._ha.cancel(); el._ha = null; return; }
        if (el.dataset.hover !== 'draw' && el._ha.playbackRate > 0) el._ha.reverse();
      });
      counts().forEach((el) => runCount(el, false));
    };

    root.addEventListener('pointerenter', enter);
    root.addEventListener('pointerleave', leave);
    return () => {
      root.removeEventListener('pointerenter', enter);
      root.removeEventListener('pointerleave', leave);
      breathe.forEach((a) => a.cancel());
      targets().forEach((el) => { el._ha?.cancel(); el._ha = null; });
      counts().forEach((el) => runCount(el, false));
    };
  }, [ref, enabled]);
}
