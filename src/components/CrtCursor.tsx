'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useMediaQuery } from '@/lib/clientState';

const INTERACTIVE = 'a,button,[role="button"],input,select,textarea,[data-cursor]';

/** Blocky 1-bit pointer. Only on fine pointers; touch keeps the native behaviour. */
export function CrtCursor() {
  const on = useMediaQuery('(pointer: fine)');
  const [hot, setHot] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 1200, damping: 60, mass: 0.15 });
  const sy = useSpring(y, { stiffness: 1200, damping: 60, mass: 0.15 });

  useEffect(() => {
    if (!on) return;
    document.body.classList.add('cursor-hidden');

    const move = (e: PointerEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    const over = (e: PointerEvent) => {
      const t = e.target as Element | null;
      setHot(Boolean(t?.closest?.(INTERACTIVE)));
    };
    window.addEventListener('pointermove', move, { passive: true });
    window.addEventListener('pointerover', over, { passive: true });
    return () => {
      document.body.classList.remove('cursor-hidden');
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerover', over);
    };
  }, [on, x, y]);

  if (!on) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[120] mix-blend-difference"
      style={{ x: sx, y: sy }}
    >
      <motion.div
        className="border border-white"
        animate={{
          width: hot ? 18 : 11,
          height: hot ? 18 : 11,
          x: hot ? -9 : -5.5,
          y: hot ? -9 : -5.5,
          backgroundColor: hot ? 'rgba(255,255,255,1)' : 'rgba(255,255,255,0)',
        }}
        transition={{ duration: 0.12, ease: 'easeOut' }}
      />
    </motion.div>
  );
}
