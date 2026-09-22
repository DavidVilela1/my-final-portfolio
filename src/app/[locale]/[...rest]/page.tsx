import { notFound } from 'next/navigation';

/** Any path deeper than /<locale> is a 404, rendered inside the locale layout. */
export default function CatchAll(): never {
  notFound();
}
