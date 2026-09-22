'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FileIcon, FolderClosed, FolderOpen } from '@/components/Icons';
import type { TreeFolder, NodeId } from '@/lib/windows';
import type { Dict } from '@/data/dict';

export function FileTree({
  tree,
  d,
  onOpen,
  isOpen,
}: {
  tree: TreeFolder[];
  d: Dict;
  onOpen: (id: NodeId) => void;
  isOpen: (id: NodeId) => boolean;
}) {
  const [closed, setClosed] = useState<Record<string, boolean>>({});

  return (
    <nav aria-label={d.tree.ariaTree} className="text-[13px] leading-none">
      <ul className="space-y-[2px]">
        {tree.map((folder) => {
          const folded = Boolean(closed[folder.key]);
          return (
            <li key={folder.key}>
              <button
                type="button"
                onClick={() => setClosed((c) => ({ ...c, [folder.key]: !folded }))}
                aria-expanded={!folded}
                aria-label={`${folded ? d.tree.expand : d.tree.collapse} ${folder.label} ${d.tree.ariaFolder}`}
                className="flex w-full items-center gap-2 px-2 py-[6px] text-left text-white/80 transition-colors hover:bg-white hover:text-black"
              >
                {folded ? <FolderClosed /> : <FolderOpen />}
                <span>{folder.label}</span>
              </button>

              <AnimatePresence initial={false}>
                {!folded && (
                  <motion.ul
                    key="items"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.18, ease: 'easeOut' }}
                    className="ml-[14px] overflow-hidden border-l border-white/15 pl-[10px]"
                  >
                    {folder.items.map((item) => (
                      <li key={item.id}>
                        <button
                          type="button"
                          onClick={() => onOpen(item.id)}
                          aria-pressed={isOpen(item.id)}
                          className={`flex w-full items-center gap-2 px-2 py-[6px] text-left transition-colors hover:bg-white hover:text-black ${
                            isOpen(item.id) ? 'text-white' : 'text-white/70'
                          }`}
                        >
                          <FileIcon />
                          <span className="truncate">{item.label}</span>
                        </button>
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
