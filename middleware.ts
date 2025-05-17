import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // Check if the path starts with /admin
  if (request.nextUrl.pathname.startsWith("/admin")) {
    // Check if user is authenticated
    const isAuthenticated = request.cookies.get("admin_authenticated");

    // If not authenticated and not on the auth page, redirect to auth
    if (!isAuthenticated && !request.nextUrl.pathname.includes("/admin/auth")) {
      return NextResponse.redirect(new URL("/admin/auth", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/admin/:path*",
};
