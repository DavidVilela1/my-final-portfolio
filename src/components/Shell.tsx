'use client';

import { useRef, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { BootScreen } from '@/components/BootScreen';
import { CrtCursor } from '@/components/CrtCursor';
import { CrtOverlay } from '@/components/CrtOverlay';
import { FileTree } from '@/components/FileTree';
import { MobileShell } from '@/components/MobileShell';
import { NoticeBanner } from '@/components/NoticeBanner';
import { StatusBar } from '@/components/StatusBar';
import { Wallpaper } from '@/components/Wallpaper';
import { WindowFrame } from '@/components/WindowFrame';
import { WindowProvider, useWindows } from '@/components/WindowSystem';
import { WindowContent } from '@/components/content/WindowContent';
import type { Dict } from '@/data/dict';
import type { Locale } from '@/lib/i18n';
import { buildTree } from '@/lib/windows';

function DesktopShell({ d, locale }: { d: Dict; locale: Locale }) {
  const { windows, topId, open, close, focus, toggleMinimize, isOpen } = useWindows();
  const constraints = useRef<HTMLDivElement>(null);
  const tree = buildTree(d);

  return (
    <div className="relative h-dvh w-full overflow-hidden">
      <Wallpaper alt={d.ui.desktopAlt} dimmed={windows.length > 0} />

      <div ref={constraints} className="absolute inset-0 z-10">
        <AnimatePresence>
          {windows.map((w) => (
            <WindowFrame
              key={w.id}
              win={w}
              d={d}
              isTop={w.id === topId}
              constraints={constraints}
              onFocus={focus}
              onClose={close}
              onToggleMinimize={toggleMinimize}
            >
              <WindowContent id={w.id} d={d} locale={locale} onOpen={open} />
            </WindowFrame>
          ))}
        </AnimatePresence>
      </div>

      <div className="absolute left-6 top-6 z-30 w-[266px] rounded-[10px] border border-white/20 bg-black/55 py-2 backdrop-blur-[2px]">
        <FileTree tree={tree} d={d} onOpen={open} isOpen={isOpen} />
      </div>

      <div className="absolute right-6 top-6 z-30">
        <StatusBar locale={locale} d={d} />
      </div>
    </div>
  );
}

function Surfaces({ d, locale }: { d: Dict; locale: Locale }) {
  const { open } = useWindows();
  return (
    <>
      <div className="hidden md:block">
        <DesktopShell d={d} locale={locale} />
      </div>
      <div className="md:hidden">
        <MobileShell d={d} locale={locale} />
      </div>
      <div className="pointer-events-none fixed bottom-4 left-1/2 z-40 w-[calc(100%-2rem)] max-w-[520px] -translate-x-1/2 max-md:bottom-28">
        <NoticeBanner d={d} onOpen={open} />
      </div>
    </>
  );
}

export function Shell({ d, locale }: { d: Dict; locale: Locale }) {
  const [booted, setBooted] = useState(false);

  return (
    <WindowProvider>
      <AnimatePresence>
        {!booted && <BootScreen d={d} onDone={() => setBooted(true)} />}
      </AnimatePresence>

      <div className={booted ? '' : 'pointer-events-none opacity-0'} aria-hidden={!booted}>
        <Surfaces d={d} locale={locale} />
      </div>

      <CrtOverlay />
      <CrtCursor />
    </WindowProvider>
  );
}
