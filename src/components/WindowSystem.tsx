'use client';

import { createContext, useCallback, useContext, useMemo, useRef, useState } from 'react';
import { sizeFor, type NodeId } from '@/lib/windows';

export type Win = {
  id: NodeId;
  x: number;
  y: number;
  z: number;
  /** Collapsed to its title bar, in place. There is no taskbar to hide into. */
  minimized: boolean;
};

type Api = {
  windows: Win[];
  topId: NodeId | null;
  isOpen: (id: NodeId) => boolean;
  open: (id: NodeId) => void;
  close: (id: NodeId) => void;
  focus: (id: NodeId) => void;
  toggleMinimize: (id: NodeId) => void;
};

const Ctx = createContext<Api | null>(null);

/** Each new window steps down-right from the last, then wraps. */
function cascade(index: number, id: NodeId) {
  const vw = typeof window === 'undefined' ? 1280 : window.innerWidth;
  const vh = typeof window === 'undefined' ? 800 : window.innerHeight;
  const s = sizeFor(id);
  const w = Math.min(s.w, vw - 48);
  const h = Math.min(s.h, vh - 132);
  const step = 28;
  const k = index % 7;
  const x = Math.min(Math.min(332, vw * 0.24) + k * step, Math.max(16, vw - w - 24));
  const y = Math.min(96 + k * step, Math.max(16, vh - h - 28));
  return { x, y };
}

export function WindowProvider({ children }: { children: React.ReactNode }) {
  const [windows, setWindows] = useState<Win[]>([]);
  const zRef = useRef(10);
  const openedRef = useRef(0);

  const focus = useCallback((id: NodeId) => {
    setWindows((ws) => {
      const target = ws.find((w) => w.id === id);
      if (!target || target.z === zRef.current) return ws;
      zRef.current += 1;
      const z = zRef.current;
      return ws.map((w) => (w.id === id ? { ...w, z } : w));
    });
  }, []);

  const open = useCallback(
    (id: NodeId) => {
      setWindows((ws) => {
        zRef.current += 1;
        const z = zRef.current;
        const existing = ws.find((w) => w.id === id);
        // Already open: raise it and un-collapse. Never disturb the others.
        if (existing) return ws.map((w) => (w.id === id ? { ...w, z, minimized: false } : w));
        const pos = cascade(openedRef.current, id);
        openedRef.current += 1;
        return [...ws, { id, z, minimized: false, ...pos }];
      });
    },
    [],
  );

  const close = useCallback((id: NodeId) => {
    setWindows((ws) => ws.filter((w) => w.id !== id));
  }, []);

  const toggleMinimize = useCallback((id: NodeId) => {
    setWindows((ws) => ws.map((w) => (w.id === id ? { ...w, minimized: !w.minimized } : w)));
  }, []);

  const value = useMemo<Api>(() => {
    const topId =
      windows.length === 0
        ? null
        : windows.reduce((a, b) => (a.z > b.z ? a : b)).id;
    return {
      windows,
      topId,
      isOpen: (id) => windows.some((w) => w.id === id),
      open,
      close,
      focus,
      toggleMinimize,
    };
  }, [windows, open, close, focus, toggleMinimize]);

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useWindows(): Api {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error('useWindows must be used inside <WindowProvider>');
  return ctx;
}
