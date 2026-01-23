import { NextRequest, NextResponse } from 'next/server';
import { isLocale, Locale } from './lib/locale';

// Default locale when none is provided in the pathname
const DEFAULT_LOCALE: Locale = 'zh';

export function middleware(request: NextRequest) {
  const { nextUrl } = request;
  const pathname = nextUrl.pathname;

  // Skip internal and asset requests
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname === '/favicon.ico' ||
    pathname.match(/\.[^/]+$/)
  ) {
    return NextResponse.next();
  }

  const segments = pathname.split('/');
  // segments[0] === '' because pathname starts with '/'
  const first = segments[1];

  if (isLocale(first)) {
    return NextResponse.next();
  }

  // Redirect to default locale preserving the path
  const destination = `/${DEFAULT_LOCALE}${pathname === '/' ? '' : pathname}`;
  return NextResponse.redirect(new URL(destination, request.nextUrl.origin));
}

export const config = {
  matcher: [
    '/((?!_next|api|favicon.ico|.*\\.[^/]+$).*)',
  ],
};
