'use client';

import Image from 'next/image';
import { useEffect } from 'react';
import { motion, useMotionValue, useReducedMotion, useSpring } from 'framer-motion';

/** Dithered portrait, centre-weighted and bottom-anchored, with a light pointer parallax. */
export function Wallpaper({ alt, dimmed }: { alt: string; dimmed: boolean }) {
  const reduced = useReducedMotion();
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const x = useSpring(mx, { stiffness: 60, damping: 20, mass: 0.6 });
  const y = useSpring(my, { stiffness: 60, damping: 20, mass: 0.6 });

  useEffect(() => {
    if (reduced || !window.matchMedia('(pointer: fine)').matches) return;
    const move = (e: PointerEvent) => {
      const dx = e.clientX / window.innerWidth - 0.5;
      const dy = e.clientY / window.innerHeight - 0.5;
      mx.set(dx * -26);
      my.set(dy * -16);
    };
    window.addEventListener('pointermove', move, { passive: true });
    return () => window.removeEventListener('pointermove', move);
  }, [mx, my, reduced]);

  return (
    <motion.div
      className="pointer-events-none absolute inset-x-0 bottom-0 flex justify-center"
      style={{ x, y }}
      animate={{ opacity: dimmed ? 0.4 : 1 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
    >
      <Image
        src="/portrait-dither.png"
        alt={alt}
        width={400}
        height={444}
        priority
        unoptimized
        className="pixelated h-[min(86vh,760px)] w-auto select-none"
      />
    </motion.div>
  );
}
