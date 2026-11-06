import React, { useEffect, useRef } from 'react';

/**
 * Sparkler fountain + pyrotechnic bursts around the What's New popup.
 *
 * Rendered only while the popup is open. Colours are read from the site's own
 * theme variables (`--brand-primary`, `--brand-secondary`, `--brand-a`,
 * `--brand-b`) so the effect follows the active theme/mood — no foreign
 * rainbow palette. Respects `prefers-reduced-motion` (renders nothing).
 */

interface Spark {
  x: number;
  y: number;
  px: number;
  py: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  size: number;
  color: string;
  phase: number;
}

interface Rocket {
  x: number;
  y: number;
  vx: number;
  vy: number;
  targetY: number;
  color: string;
}

function readPalette(): string[] {
  const fallback = ['#f59e0b', '#fbbf24', '#60a5fa', '#93c5fd', '#fde68a'];
  try {
    const styles = getComputedStyle(document.documentElement);
    const vars = ['--brand-primary', '--brand-secondary', '--brand-a', '--brand-b']
      .map((name) => styles.getPropertyValue(name).trim())
      .filter(Boolean);
    const palette = [...vars, '#f59e0b', '#fbbf24', '#fde68a'];
    return palette.length > 0 ? palette : fallback;
  } catch {
    return fallback;
  }
}

export default function WhatsNewPyro() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const palette = readPalette();
    let raf = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let w = 0;
    let h = 0;

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener('resize', resize);

    const pick = () => palette[Math.floor(Math.random() * palette.length)];

    /** Card corners — fountains launch from here, bursts aim around here. */
    const cardRect = (): DOMRect | null => {
      const el = document.querySelector('[role="dialog"]');
      return el ? el.getBoundingClientRect() : null;
    };

    const sparks: Spark[] = [];
    const rockets: Rocket[] = [];
    const MAX_SPARKS = 170;

    const addSpark = (s: Omit<Spark, 'px' | 'py' | 'phase'>) => {
      if (sparks.length >= MAX_SPARKS) return;
      sparks.push({ ...s, px: s.x, py: s.y, phase: Math.random() * Math.PI * 2 });
    };

    /** Sparkler fountain: a jet of sparks shooting up from a corner. */
    const fountain = (x: number, y: number, spread: number, power: number) => {
      const count = 5 + Math.floor(Math.random() * 4);
      for (let i = 0; i < count; i += 1) {
        const angle = -Math.PI / 2 + (Math.random() - 0.5) * spread;
        const speed = power * (0.55 + Math.random() * 0.7);
        addSpark({
          x,
          y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          life: 0,
          maxLife: 55 + Math.random() * 55,
          size: 1 + Math.random() * 1.8,
          color: pick(),
        });
      }
    };

    /** Pyrotechnic shell: rocket rises, then bursts radially. */
    const launchRocket = (x: number, fromY: number) => {
      rockets.push({
        x,
        y: fromY,
        vx: (Math.random() - 0.5) * 1.6,
        vy: -(7.5 + Math.random() * 3.5),
        targetY: fromY - (140 + Math.random() * 190),
        color: pick(),
      });
    };

    const explode = (x: number, y: number, color: string) => {
      const count = 26 + Math.floor(Math.random() * 16);
      for (let i = 0; i < count; i += 1) {
        const angle = (Math.PI * 2 * i) / count + (Math.random() - 0.5) * 0.35;
        const speed = 1.4 + Math.random() * 3.4;
        addSpark({
          x,
          y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          life: 0,
          maxLife: 50 + Math.random() * 60,
          size: 1 + Math.random() * 2,
          color: Math.random() > 0.35 ? color : pick(),
        });
      }
    };

    let lastRocket = 0;
    let frame = 0;

    const tick = () => {
      frame += 1;
      ctx.clearRect(0, 0, w, h);

      const rect = cardRect();
      if (rect) {
        // Fountains from all four corners of the popup.
        if (frame % 2 === 0) {
          fountain(rect.left + 4, rect.bottom - 4, 0.9, 6.2);
          fountain(rect.right - 4, rect.bottom - 4, 0.9, 6.2);
          fountain(rect.left + 4, rect.top + 4, Math.PI * 0.9, 4.6);
          fountain(rect.right - 4, rect.top + 4, Math.PI * 0.9, 4.6);
        }
        // Occasional shells from the sides, bursting beside the popup.
        if (frame - lastRocket > 55 && Math.random() > 0.6) {
          lastRocket = frame;
          const side = Math.random() > 0.5 ? rect.left - 30 : rect.right + 30;
          launchRocket(side, rect.bottom - 10);
        }
      }

      // Rockets
      for (let i = rockets.length - 1; i >= 0; i -= 1) {
        const r = rockets[i];
        r.x += r.vx;
        r.y += r.vy;
        r.vy += 0.12;
        addSpark({
          x: r.x, y: r.y, vx: (Math.random() - 0.5) * 0.6, vy: 1.2,
          life: 0, maxLife: 18 + Math.random() * 14,
          size: 0.8 + Math.random() * 1.2, color: r.color,
        });
        ctx.strokeStyle = r.color;
        ctx.globalAlpha = 0.9;
        ctx.lineWidth = 1.6;
        ctx.beginPath();
        ctx.moveTo(r.x, r.y + 8);
        ctx.lineTo(r.x, r.y);
        ctx.stroke();
        if (r.y <= r.targetY || r.vy >= 0) {
          explode(r.x, r.y, r.color);
          rockets.splice(i, 1);
        }
      }

      // Sparks
      for (let i = sparks.length - 1; i >= 0; i -= 1) {
        const s = sparks[i];
        s.life += 1;
        if (s.life >= s.maxLife) {
          sparks.splice(i, 1);
          continue;
        }
        s.px = s.x;
        s.py = s.y;
        s.vy += 0.055; // gravity
        s.vx *= 0.985;
        s.vy *= 0.99;
        s.x += s.vx;
        s.y += s.vy;

        const t = s.life / s.maxLife;
        const twinkle = 0.55 + 0.45 * Math.sin(frame * 0.35 + s.phase);
        ctx.globalAlpha = Math.max(0, 1 - t) * twinkle;
        ctx.strokeStyle = s.color;
        ctx.lineWidth = s.size;
        ctx.lineCap = 'round';
        ctx.beginPath();
        ctx.moveTo(s.px, s.py);
        ctx.lineTo(s.x, s.y);
        ctx.stroke();
      }

      ctx.globalAlpha = 1;
      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0"
      style={{ zIndex: 20 }}
    />
  );
}
