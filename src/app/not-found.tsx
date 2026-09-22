import { NotFoundView } from '@/components/NotFoundView';
import { mono } from '@/lib/font';
import './globals.css';

export const metadata = {
  title: '404 — File not found',
  robots: { index: false, follow: true },
};

/** Handles every unmatched path, in both languages. */
export default function NotFound() {
  return (
    <div className={`${mono.variable} font-mono bg-black text-white`}>
      <NotFoundView />
    </div>
  );
}
