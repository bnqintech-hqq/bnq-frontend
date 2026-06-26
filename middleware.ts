import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { AUTH_COOKIE_NAME, ROLE_LOGIN_PATHS } from "@/lib/rbac";

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (pathname === "/client" || pathname === "/partner" || pathname === "/reseller") {
    const target =
      pathname === "/client"
        ? "/dashboard/client"
        : pathname === "/partner"
          ? "/dashboard/partner"
          : "/dashboard/reseller";
    return NextResponse.redirect(new URL(target, req.url));
  }

  if (
    pathname.startsWith("/dashboard/client") ||
    pathname.startsWith("/dashboard/partner") ||
    pathname.startsWith("/dashboard/reseller")
  ) {
    const hasSession = Boolean(req.cookies.get(AUTH_COOKIE_NAME)?.value);
    let loginPath = ROLE_LOGIN_PATHS.CLIENT;
    if (pathname.startsWith("/dashboard/partner")) loginPath = ROLE_LOGIN_PATHS.PARTNER;
    else if (pathname.startsWith("/dashboard/reseller")) loginPath = ROLE_LOGIN_PATHS.RESELLER;

    if (!hasSession) {
      return NextResponse.redirect(new URL(loginPath, req.url));
    }
  }

  if (pathname.startsWith("/quotation") || pathname.startsWith("/invoice")) {
    const expectedUser = process.env.BASIC_AUTH_USER;
    const expectedPass = process.env.BASIC_AUTH_PASS;

    if (!expectedUser || !expectedPass) {
      return NextResponse.next();
    }

    const basicAuth = req.headers.get("authorization");
    if (basicAuth) {
      try {
        const authValue = basicAuth.split(" ")[1];
        if (authValue) {
          const [user, pwd] = atob(authValue).split(":");
          if (user === expectedUser && pwd === expectedPass) {
            return NextResponse.next();
          }
        }
      } catch {
        // Malformed authorization header — fall through to 401
      }
    }

    return new NextResponse("Unauthorized access. Please provide correct credentials.", {
      status: 401,
      headers: { "WWW-Authenticate": 'Basic realm="Secure Area"' },
    });
  }

  return NextResponse.next();
}
