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
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import createIntlMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

const intlMiddleware = createIntlMiddleware(routing);

export function middleware(request: NextRequest) {
  // CHECK 1: Check if the request is for the login route
  const isLoginRoute = request.nextUrl.pathname.includes("/login");

  // Check if admin-auth cookie is present and valid
  const authCookie = request.cookies.get("admin-auth");

  if (isLoginRoute && authCookie?.value === "true") {
    // Redirect to admindb if already authenticated
    const adminUrl = new URL("/admindb", request.url);
    return NextResponse.redirect(adminUrl);
  }

  // CHECK 2: Check if the request is for the admin route
  const isAdminRoute = request.nextUrl.pathname.includes("/admindb");

  // Check if the admin-auth cookie is present and has the expected value
  if (isAdminRoute) {
    const authCookie = request.cookies.get("admin-auth");

    if (!authCookie || authCookie.value !== "true") {
      // Redirect to the login page if authentication fails
      const loginUrl = new URL("/login", request.url);
      return NextResponse.redirect(loginUrl);
    }
  }

  return intlMiddleware(request);
}

export const config = {
  // Updates the matcher configuration to include the admin route
  matcher: ["/", "/(en|de|nl)/:path*", "/admindb", "/login"],
};
// The matcher in middleware.ts defines which routes the middleware should run on. 
// It acts as a filter to specify exactly where your middleware logic gets applied. 
// Let's break down what each pattern matches:

// "/" - Matches the root/home page
// "/(en|de|nl)/:path*" - Matches any route that:
// Starts with /en, /de, or /nl (your language paths)
// Followed by any additional path segments (:path*)
// "/admindb" - Matches the admin dashboard route
// "/login" - Matches the login page

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
