// The middleware will always execute before any API
//  routes by design in Next.js. 
//  The execution order is:

// Middleware
// API Routes
// Page Routes

// ############## Version only with i18n middleware
// import createMiddleware from "next-intl/middleware";
// import { routing } from "./i18n/routing";

// export default createMiddleware(routing);

// export const config = {
//   // Match only internationalized pathnames
//   matcher: ["/", "/(en|de|nl)/:path*"],
// };


// ############## Version with i18n middleware and additional e.g. admin auth middleware
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import createIntlMiddleware from 'next-intl/middleware'
import { routing } from './i18n/routing'

const intlMiddleware = createIntlMiddleware(routing)

export function middleware(request: NextRequest) {
  const isAdminRoute = request.nextUrl.pathname.includes('/admindb')
  
  if (isAdminRoute) {
    const authCookie = request.cookies.get('admin-auth')
    
    if (!authCookie || authCookie.value !== 'true') {
      // ### BUG ### - add params to redirect to login page !
      const loginUrl = new URL('/login', request.url)
      return NextResponse.redirect(loginUrl)
    }
  }

  return intlMiddleware(request)
}

export const config = {
  matcher: ['/', '/(en|de|nl)/:path*', '/admindb']
}

// This middleware:

// Checks if the requested route includes '/admindb'
// Verifies the presence and value of the 'admin-auth' cookie
// Redirects to the login page if authentication fails
// Preserves the internationalization functionality for other routes
// Updates the matcher configuration to include the admin route
// The middleware works in conjunction with your existing auth route handler 
// to create a secure admin section while maintaining the i18n functionality.





// #########################  Difference of createMiddleware and createIntlMiddleware

// Both functions come from the next-intl package but serve different purposes:

// createMiddleware:
// A simplified wrapper specifically designed for i18n routing
// Used when you only need internationalization middleware
// Current implementation in the codebase uses this simpler version

// createIntlMiddleware:
// More flexible and allows combining i18n with custom middleware logic
// Enables adding additional middleware functionality like authentication
// Used when you need to handle both i18n and other middleware operations like protecting routes
// The key difference is that createIntlMiddleware gives you more control to combine internationalization
//  with custom middleware logic, while createMiddleware is focused solely on handling i18n routing.
