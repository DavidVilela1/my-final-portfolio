'use client';

import { useCallback, useSyncExternalStore } from 'react';

/**
 * Browser-only values read without setting state inside an effect, which would
 * cause a cascading render. `useSyncExternalStore` gives React a server snapshot
 * for the first (hydration) pass and the real value immediately after.
 */

export function useMediaQuery(query: string): boolean {
  const subscribe = useCallback(
    (onChange: () => void) => {
      const mq = window.matchMedia(query);
      mq.addEventListener('change', onChange);
      return () => mq.removeEventListener('change', onChange);
    },
    [query],
  );

  return useSyncExternalStore(
    subscribe,
    () => window.matchMedia(query).matches,
    () => false,
  );
}

const listeners = new Set<() => void>();

function read(key: string): boolean {
  try {
    return window.localStorage.getItem(key) === '1';
  } catch {
    return false;
  }
}

/**
 * A boolean flag in local storage. The server snapshot is `true` so nothing
 * gated on it renders during SSR — it appears once the real value is known.
 * Returns the flag and a setter that marks it permanently true.
 */
export function useStoredFlag(key: string): [boolean, () => void] {
  const subscribe = useCallback((onChange: () => void) => {
    listeners.add(onChange);
    window.addEventListener('storage', onChange);
    return () => {
      listeners.delete(onChange);
      window.removeEventListener('storage', onChange);
    };
  }, []);

  const value = useSyncExternalStore(
    subscribe,
    () => read(key),
    () => true,
  );

  const set = useCallback(() => {
    try {
      window.localStorage.setItem(key, '1');
    } catch {
      /* storage unavailable — the flag simply will not persist */
    }
    listeners.forEach((l) => l());
  }, [key]);

  return [value, set];
}
