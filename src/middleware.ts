import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const protectedRoutes = ["/dashboard", "/admin"];

export async function middleware(req: NextRequest) {
  const pathname = req.nextUrl.pathname;

  const user = req.cookies.get("userLogged");

  if (protectedRoutes.includes(pathname)) {
    if (!user) {
      return NextResponse.redirect(new URL("/login", req.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard", "/admin"],
};