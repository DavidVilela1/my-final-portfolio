import { NotFoundView } from '@/components/NotFoundView';
import { mono } from '@/lib/font';
import '../globals.css';

export default function NotFound() {
  return (
    <div className={`${mono.variable} font-mono bg-black text-white`}>
      <NotFoundView />
    </div>
  );
}
