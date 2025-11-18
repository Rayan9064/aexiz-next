import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  const url = req.nextUrl;
  const { pathname } = url;

  // Read env value
  const isUnderDevelopment = process.env.NEXT_PUBLIC_SHOW_UNDER_DEVELOPMENT === '1';

  // Log every request so we can verify middleware is executing
  // eslint-disable-next-line no-console
  console.info('[middleware] request', { pathname, isUnderDevelopment, method: req.method });

  // Allow root (/) and a small allowlist to pass through unchanged
  const allowlist = [
    '/',
    '/under-development',
    '/favicon.ico',
    '/robots.txt',
    '/sitemap.xml',
  ];

  if (
    allowlist.includes(pathname) ||
    pathname.startsWith('/_next') ||
    pathname.startsWith('/static') ||
    pathname.startsWith('/api')
  ) {
    // For visibility, set a header indicating middleware saw the request but allowed it
    const res = NextResponse.next();
    res.headers.set('x-under-development', 'allowed');
    return res;
  }
  // If under development, redirect ALL other subroutes to root
  if (isUnderDevelopment) {
    url.pathname = '/';
    const res = NextResponse.redirect(url);
    res.headers.set('x-under-development', 'redirect');
    // eslint-disable-next-line no-console
    console.info('[middleware] redirecting to / from', pathname);
    return res;
  }

  // Otherwise allow normal access
  const res = NextResponse.next();
  res.headers.set('x-under-development', 'none');
  return res;
}

export const config = {
  // Match all paths — middleware code will allow internal assets and API through
  matcher: '/:path*',
};
