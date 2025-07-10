import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// Define protected routes
const protectedRoutes = createRouteMatcher([
  "/",
  "/upcoming",
  "/previous",
  "/recordings",
  "/personal-room",
  "/meeting(.*)",
]);

// Apply Clerk middleware with protection
export default clerkMiddleware((auth, req) => {
  if (protectedRoutes(req)) {
    auth().protect();
  }
});

// Updated matcher to avoid API, static, and _next paths
export const config = {
  matcher: ["/((?!.*\\..*|_next|api|trpc).*)"],
};
