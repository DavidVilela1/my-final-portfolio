'use client';

import { useEffect, useState } from 'react';
import { motion, useDragControls, useMotionValue } from 'framer-motion';
import { Close, Minus, Plus } from '@/components/Icons';
import { sizeFor, windowTitle, type NodeId } from '@/lib/windows';
import type { Win } from '@/components/WindowSystem';
import type { Dict } from '@/data/dict';

export function WindowFrame({
  win,
  d,
  isTop,
  constraints,
  onFocus,
  onClose,
  onToggleMinimize,
  children,
}: {
  win: Win;
  d: Dict;
  isTop: boolean;
  constraints: React.RefObject<HTMLDivElement | null>;
  onFocus: (id: NodeId) => void;
  onClose: (id: NodeId) => void;
  onToggleMinimize: (id: NodeId) => void;
  children: React.ReactNode;
}) {
  const controls = useDragControls();
  const x = useMotionValue(win.x);
  const y = useMotionValue(win.y);
  const base = sizeFor(win.id);
  const [dim, setDim] = useState({ w: base.w, h: base.h });
  const title = windowTitle(win.id, d);

  useEffect(() => {
    const calc = () =>
      setDim({
        w: Math.min(base.w, window.innerWidth - 48),
        h: Math.min(base.h, window.innerHeight - 132),
      });
    calc();
    window.addEventListener('resize', calc);
    return () => window.removeEventListener('resize', calc);
  }, [base.w, base.h]);

  useEffect(() => {
    if (!isTop) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose(win.id);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isTop, onClose, win.id]);

  return (
    <motion.section
      role="dialog"
      aria-label={title}
      aria-modal="false"
      drag
      dragListener={false}
      dragControls={controls}
      dragConstraints={constraints}
      dragElastic={0}
      dragMomentum={false}
      onPointerDown={() => onFocus(win.id)}
      style={{ x, y, zIndex: win.z, width: dim.w }}
      initial={{ opacity: 0, scaleY: 0.02, scaleX: 0.7 }}
      animate={{ opacity: 1, scaleY: 1, scaleX: 1 }}
      exit={{ opacity: 0, scaleY: 0.02, scaleX: 0.7 }}
      transition={{ duration: 0.22, ease: [0.4, 0, 0.2, 1] }}
      className="absolute left-0 top-0 flex flex-col border border-white/25 bg-black shadow-[0_0_0_1px_rgba(0,0,0,1),0_0_40px_rgba(0,0,0,0.9)]"
    >
      <header
        onPointerDown={(e) => controls.start(e)}
        data-cursor="grab"
        className="flex shrink-0 select-none items-center justify-between gap-3 border-b border-white/25 bg-black px-3 py-[7px] touch-none"
      >
        <h2 className="truncate text-[11px] tracking-[0.16em] text-white/85">{title}</h2>
        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={() => onToggleMinimize(win.id)}
            aria-label={win.minimized ? d.ui.restore : d.ui.minimize}
            className="grid h-5 w-5 place-items-center border border-white/25 text-white/70 transition-colors hover:bg-white hover:text-black"
          >
            {win.minimized ? <Plus className="h-3 w-3" /> : <Minus className="h-3 w-3" />}
          </button>
          <button
            type="button"
            onClick={() => onClose(win.id)}
            aria-label={d.ui.close}
            className="grid h-5 w-5 place-items-center border border-white/25 text-white/70 transition-colors hover:bg-white hover:text-black"
          >
            <Close className="h-3 w-3" />
          </button>
        </div>
      </header>

      {!win.minimized && (
        <div
          className="crt-scroll overflow-y-auto px-4 py-4 text-[12.5px] leading-relaxed sm:px-5"
          style={{ maxHeight: dim.h }}
        >
          {children}
        </div>
      )}
    </motion.section>
  );
}
