import { NextResponse, type NextRequest } from 'next/server';
import { DEFAULT_LOCALE } from '@/lib/i18n';

/** Only job: send the bare root to the default locale. */
export function middleware(req: NextRequest) {
  return NextResponse.redirect(new URL(`/${DEFAULT_LOCALE}`, req.url));
}

export const config = { matcher: '/' };
