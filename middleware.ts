// This middleware is included in nextjs last version, redirects to login screen when non authenticated
export { default } from "next-auth/middleware"
// All urls contained in matcher will be processed by the middleware and will require authentication
export const config = { matcher: ["/about", "/", "/country/:path*"] }

