import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { jwtVerify } from "jose";

export async function middleware(request: NextRequest) {
  const token = request.cookies.get("admin_token")?.value;
  const secret = new TextEncoder().encode(process.env.JWT_SECRET);

  const { pathname } = request.nextUrl;

  const isLoginPage = pathname === "/admin/login";
  const isProtectedPath = pathname.startsWith("/admin") && !isLoginPage;

  try {
    if (token) {
      await jwtVerify(token, secret);

      if (isLoginPage) {
        return NextResponse.redirect(new URL("/admin/dashboard", request.url));
      }

      return NextResponse.next();
    }
  } catch (error) {
    if (isProtectedPath) {
      const response = NextResponse.redirect(
        new URL("/admin/login", request.url)
      );
      response.cookies.delete("admin_token");
      return response;
    }
  }

  if (!token && isProtectedPath) {
    return NextResponse.redirect(new URL("/admin/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
