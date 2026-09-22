'use client';

import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowLeft, Close, Database, Info, Sliders, Terminal, User } from '@/components/Icons';
import { FileTree } from '@/components/FileTree';
import { WindowContent } from '@/components/content/WindowContent';
import { useWindows } from '@/components/WindowSystem';
import { StatusBar } from '@/components/StatusBar';
import { PROFILE } from '@/data/profile';
import type { Dict } from '@/data/dict';
import type { Locale } from '@/lib/i18n';
import { buildTree, windowTitle, type NodeId } from '@/lib/windows';

const DOCK: { id: NodeId; Icon: (p: { className?: string }) => React.JSX.Element }[] = [
  { id: 'about', Icon: User },
  { id: 'experience', Icon: Terminal },
  { id: 'projects', Icon: Database },
  { id: 'skills', Icon: Sliders },
  { id: 'background', Icon: Info },
];

export function MobileShell({ d, locale }: { d: Dict; locale: Locale }) {
  const { windows, topId, open, close, isOpen } = useWindows();
  const tree = buildTree(d);
  const top = windows.find((w) => w.id === topId) ?? null;

  return (
    <div className="relative min-h-dvh pb-24">
      <div className="pointer-events-none absolute inset-x-0 top-0 flex justify-center opacity-25">
        <Image
          src="/portrait-dither.png"
          alt=""
          width={400}
          height={444}
          unoptimized
          className="pixelated h-[46vh] w-auto"
          aria-hidden="true"
        />
      </div>

      <div className="relative px-5 pt-5">
        <div className="flex justify-end">
          <StatusBar locale={locale} d={d} />
        </div>
        <div className="mt-4">
          <p className="text-base font-semibold tracking-tight glow">{PROFILE.name}</p>
          <p className="mt-1 text-[9.5px] uppercase tracking-[0.2em] text-white/55">
            {d.about.role}
          </p>
        </div>

        <div className="mt-8 border border-white/20 bg-black/70 py-2 backdrop-blur-[2px]">
          <FileTree tree={tree} d={d} onOpen={open} isOpen={isOpen} />
        </div>

        <p className="mt-6 text-[11px] uppercase tracking-[0.14em] text-white/45">
          {d.about.statement}
        </p>
      </div>

      <AnimatePresence>
        {top && (
          <motion.div
            key={top.id}
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', stiffness: 320, damping: 34 }}
            role="dialog"
            aria-label={windowTitle(top.id, d)}
            className="fixed inset-0 z-[95] flex flex-col bg-black"
          >
            <header className="flex shrink-0 items-center justify-between gap-3 border-b border-white/25 px-3 py-2">
              <button
                type="button"
                onClick={() => close(top.id)}
                aria-label={d.ui.back}
                className="flex items-center gap-2 border border-white/25 px-2 py-1 text-[10px] uppercase tracking-[0.14em] text-white/75"
              >
                <ArrowLeft className="h-3.5 w-3.5" />
                {d.ui.back}
              </button>
              <h2 className="truncate text-[11px] tracking-[0.16em] text-white/85">
                {windowTitle(top.id, d)}
              </h2>
              <button
                type="button"
                onClick={() => close(top.id)}
                aria-label={d.ui.close}
                className="grid h-7 w-7 shrink-0 place-items-center border border-white/25 text-white/70"
              >
                <Close className="h-3.5 w-3.5" />
              </button>
            </header>
            <div className="crt-scroll flex-1 overflow-y-auto px-5 pb-28 pt-5 text-[13px] leading-relaxed">
              <WindowContent id={top.id} d={d} locale={locale} onOpen={open} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <nav
        aria-label={d.tree.ariaTree}
        className="fixed inset-x-0 bottom-0 z-[96] flex items-stretch justify-between border-t border-white/25 bg-black/95 px-2 pb-[env(safe-area-inset-bottom)] backdrop-blur"
      >
        {DOCK.map(({ id, Icon }) => (
          <button
            key={id}
            type="button"
            onClick={() => open(id)}
            aria-label={`${d.ui.open} ${windowTitle(id, d)}`}
            aria-pressed={isOpen(id)}
            className={`flex flex-1 flex-col items-center gap-1 px-1 py-3 ${
              isOpen(id) ? 'text-white' : 'text-white/55'
            }`}
          >
            <Icon className="h-5 w-5" />
            <span className="text-[8.5px] uppercase tracking-[0.1em]">
              {windowTitle(id, d).split('.')[0]}
            </span>
          </button>
        ))}
      </nav>
    </div>
  );
}
