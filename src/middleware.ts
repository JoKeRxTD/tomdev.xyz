import { analytics } from '@/src/actions/analytics';
// import { auth } from '@/src/lib/auth';
export { auth } from '@/src/lib/auth';
import { NextRequest, NextResponse } from 'next/server'


export default async function auth(req) {
  if (req.nextUrl.pathname === '/') {
    try {
      await analytics.track('pageview', {
        page: '/',
        country: req.geo?.country,
      })
      await analytics.track('pageview', {
        page: '/contact',
        country: req.geo?.country,
      })
      await analytics.track('pageview', {
        page: '/projects',
        country: req.geo?.country,
      })
      await analytics.track('pageview', {
        page: '/partners',
        country: req.geo?.country,
      })
      console.log('Tracked pageview for /')
    } catch (err) {
      // fail silently to not affect request
      console.error(err)
    }
  }
    return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
    '/',      
  ],
}