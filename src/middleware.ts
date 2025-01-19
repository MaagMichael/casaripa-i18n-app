import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(en|de|nl)/:path*"],
};

// import { NextResponse } from 'next/server'
// import type { NextRequest } from 'next/server'
// import createIntlMiddleware from 'next-intl/middleware'
// import { routing } from './i18n/routing'

// const intlMiddleware = createIntlMiddleware(routing)

// export function middleware(request: NextRequest) {
//   const isAdminRoute = request.nextUrl.pathname.includes('/admindb')
  
//   if (isAdminRoute) {
//     const authCookie = request.cookies.get('admin-auth')
    
//     if (!authCookie || authCookie.value !== 'true') {
//       const loginUrl = new URL('/login', request.url)
//       return NextResponse.redirect(loginUrl)
//     }
//   }

//   return intlMiddleware(request)
// }

// export const config = {
//   matcher: ['/', '/(en|de|nl)/:path*', '/admindb']
// }

