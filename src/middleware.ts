/* eslint-disable @typescript-eslint/no-explicit-any */
// import type { NextRequest } from "next/server";

// export async function middleware(request: NextRequest) {
//   const token = request.cookies.get("accessToken")?.value;
//   console.log("Token from cookies: ", token);
// }

// export const config = {
//   matcher: ["/dashboard/:path*", "/dashboard"],
// };


import { jwtDecode } from "jwt-decode";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("accessToken")?.value;
 const publicRoutes = ["/", "/faq", "/contact","/about"];

   if (!token && !publicRoutes.includes(request.nextUrl.pathname)) {
    // Redirect user to login page if not logged in and accessing protected routes
    return NextResponse.redirect(new URL("/login", request.url));
  }
  try {
    if(token){

      const userInfo = jwtDecode<{ role?: string; exp: number }>(token);
      // Check token expiration
      if (userInfo.exp && userInfo.exp * 1000 < Date.now()) {
        return NextResponse.redirect(new URL("/login", request.url));
      }
  
      // Check role for admin-only pages
      if (
        request.nextUrl.pathname.startsWith("/dashboard") &&
        userInfo.role !== "ADMIN"
      ) {
        return NextResponse.redirect(new URL("/", request.url));
      }
    }

  } catch (error) {
    console.log(error)
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next(); // allow access
}

export const config = {
  matcher: ["/dashboard/:path*", "/apply-now"], // applies to /dashboard and all nested routes
};

