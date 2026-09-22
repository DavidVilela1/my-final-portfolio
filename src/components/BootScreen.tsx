'use client';

import { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { useMediaQuery } from '@/lib/clientState';
import type { Dict } from '@/data/dict';

const BLOCKS = 46;
const BAR_MS = 2200;
const STEP_START = 420;
const STEP_GAP = 300;

export function BootScreen({ d, onDone }: { d: Dict; onDone: () => void }) {
  const reduced = useReducedMotion();
  const touch = !useMediaQuery('(pointer: fine)');
  const [elapsed, setElapsed] = useState(0);

  useEffect(() => {
    if (reduced) return; // nothing to animate, so no timer either
    const start = performance.now();
    const id = window.setInterval(() => setElapsed(performance.now() - start), 50);
    return () => window.clearInterval(id);
  }, [reduced]);

  // Reduced motion shows the finished state immediately.
  const t = reduced ? Number.MAX_SAFE_INTEGER : elapsed;
  const pct = Math.min(100, Math.round((t / BAR_MS) * 100));
  const stepsDone = Math.max(
    0,
    Math.min(d.boot.steps.length, Math.floor((t - STEP_START) / STEP_GAP) + 1),
  );
  const ready = t >= STEP_START + STEP_GAP * d.boot.steps.length + 420;
  const filled = Math.round((pct / 100) * BLOCKS);

  useEffect(() => {
    if (!ready) return;
    const go = () => onDone();
    window.addEventListener('keydown', go);
    window.addEventListener('pointerdown', go);
    return () => {
      window.removeEventListener('keydown', go);
      window.removeEventListener('pointerdown', go);
    };
  }, [ready, onDone]);

  return (
    <motion.div
      className="fixed inset-0 z-[90] flex items-center justify-center overflow-hidden bg-black px-5 py-8"
      exit={{ scaleY: 0.004, opacity: 0 }}
      transition={{ duration: 0.38, ease: [0.4, 0, 0.2, 1] }}
      role="status"
      aria-live="polite"
      aria-label={`${d.boot.brand} — ${d.boot.subtitle}`}
    >
      <div className="w-full max-w-[720px] text-[11px] leading-[1.9] sm:text-[12.5px]">
        <p className="text-sm font-semibold tracking-[0.18em] glow-strong sm:text-base">
          {d.boot.brand} 2026
        </p>
        <p className="mt-1 text-white/70">{d.boot.subtitle}</p>
        <div className="my-4 h-px w-1/2 bg-white/40" />

        <div className="text-white/80">
          {d.boot.intro.map((line) => (
            <p key={line}>{line}</p>
          ))}
          <p className="mt-3">{d.boot.wait}</p>
          <p className="mt-4">{d.boot.copying}</p>
        </div>

        <div
          className="mt-2 flex gap-[2px] border border-white/40 p-[3px]"
          role="progressbar"
          aria-valuenow={pct}
          aria-valuemin={0}
          aria-valuemax={100}
        >
          {Array.from({ length: BLOCKS }, (_, i) => (
            <span key={i} className={`h-3 flex-1 ${i < filled ? 'bg-white' : 'bg-transparent'}`} />
          ))}
        </div>
        <p className="mt-1 text-white/70">{pct}%</p>

        <ul className="mt-5 hair p-3 sm:p-4">
          {d.boot.steps.map((step, i) => (
            <li
              key={step}
              className={`flex items-baseline gap-2 transition-opacity duration-200 ${
                i < stepsDone ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <span aria-hidden="true">·</span>
              <span className="whitespace-nowrap">{step}</span>
              <span className="min-w-0 flex-1 overflow-hidden text-white/35" aria-hidden="true">
                {'.'.repeat(120)}
              </span>
              <span className="whitespace-nowrap">[ {d.boot.ok} ]</span>
            </li>
          ))}
        </ul>

        <p className={`mt-5 flex items-center gap-2 ${ready ? 'opacity-100' : 'opacity-0'}`}>
          {touch ? d.boot.pressTouch : d.boot.press}
          <span
            className="inline-block h-[1.1em] w-[0.6em] animate-blink bg-white"
            aria-hidden="true"
          />
        </p>
      </div>
    </motion.div>
  );
}
