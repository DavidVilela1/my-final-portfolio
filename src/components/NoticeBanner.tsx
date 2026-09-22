'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { Close } from '@/components/Icons';
import { useStoredFlag } from '@/lib/clientState';
import type { Dict } from '@/data/dict';
import type { NodeId } from '@/lib/windows';

const KEY = 'dv.notice';

/**
 * A notice, not a consent gate: nothing non-essential is stored, so there is
 * nothing to consent to. Dismissal is remembered in local storage only.
 */
export function NoticeBanner({ d, onOpen }: { d: Dict; onOpen: (id: NodeId) => void }) {
  const [dismissed, dismiss] = useStoredFlag(KEY);
  const show = !dismissed;

  const legal: [string, NodeId][] = [
    [d.notice.readPrivacy, 'privacy'],
    [d.notice.readCookies, 'cookies'],
    [d.notice.readTerms, 'terms'],
  ];

  return (
    <AnimatePresence>
      {show && (
        <motion.aside
          role="region"
          aria-label={d.notice.title}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 16 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="pointer-events-auto w-full max-w-[520px] border border-white/25 bg-black"
        >
          <div className="flex items-center justify-between border-b border-white/25 px-3 py-[6px]">
            <p className="text-[10px] tracking-[0.2em] text-white/80">{d.notice.title}</p>
            <button
              type="button"
              onClick={dismiss}
              aria-label={d.notice.accept}
              className="grid h-5 w-5 place-items-center border border-white/25 text-white/70 transition-colors hover:bg-white hover:text-black"
            >
              <Close className="h-3 w-3" />
            </button>
          </div>
          <div className="space-y-3 px-3 py-3 text-[10.5px] leading-relaxed text-white/70 sm:text-[11.5px]">
            <p>{d.notice.body}</p>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
              <button
                type="button"
                onClick={dismiss}
                className="border border-white/40 px-3 py-1 text-[10px] uppercase tracking-[0.16em] text-white transition-colors hover:bg-white hover:text-black"
              >
                {d.notice.accept}
              </button>
              {legal.map(([label, id]) => (
                <button
                  key={id}
                  type="button"
                  onClick={() => onOpen(id)}
                  className="text-[10px] uppercase tracking-[0.16em] text-white/55 underline-offset-4 transition-colors hover:text-white hover:underline"
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}
