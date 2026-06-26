(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push(["chunks/[root-of-the-server]__0tnjddu._.js",
"[externals]/node:buffer [external] (node:buffer, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:buffer", () => require("node:buffer"));

module.exports = mod;
}),
"[externals]/node:async_hooks [external] (node:async_hooks, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:async_hooks", () => require("node:async_hooks"));

module.exports = mod;
}),
"[project]/frontend/lib/rbac.ts [middleware-edge] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AUTH_COOKIE_NAME",
    ()=>AUTH_COOKIE_NAME,
    "ROLE_DASHBOARDS",
    ()=>ROLE_DASHBOARDS,
    "ROLE_LOGIN_PATHS",
    ()=>ROLE_LOGIN_PATHS,
    "USER_ROLES",
    ()=>USER_ROLES,
    "getDashboardForRole",
    ()=>getDashboardForRole,
    "getLoginPathForRole",
    ()=>getLoginPathForRole,
    "isUserRole",
    ()=>isUserRole
]);
const AUTH_COOKIE_NAME = "bnqintech_session";
const USER_ROLES = [
    "CLIENT",
    "PARTNER",
    "RESELLER",
    "ADMIN"
];
const ROLE_DASHBOARDS = {
    CLIENT: "/dashboard/client",
    PARTNER: "/dashboard/partner",
    RESELLER: "/dashboard/reseller",
    ADMIN: "/dashboard/admin"
};
const ROLE_LOGIN_PATHS = {
    CLIENT: "/login/client",
    PARTNER: "/login/partner",
    RESELLER: "/login/reseller",
    ADMIN: "/login/admin"
};
function getDashboardForRole(role) {
    return ROLE_DASHBOARDS[role];
}
function getLoginPathForRole(role) {
    return ROLE_LOGIN_PATHS[role];
}
function isUserRole(value) {
    return value === "CLIENT" || value === "PARTNER" || value === "RESELLER" || value === "ADMIN";
}
}),
"[project]/frontend/middleware.ts [middleware-edge] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "middleware",
    ()=>middleware
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$api$2f$server$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/api/server.js [middleware-edge] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/server/web/spec-extension/response.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$rbac$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/lib/rbac.ts [middleware-edge] (ecmascript)");
;
;
function middleware(req) {
    const { pathname } = req.nextUrl;
    if (pathname === "/client" || pathname === "/partner" || pathname === "/reseller") {
        const target = pathname === "/client" ? "/dashboard/client" : pathname === "/partner" ? "/dashboard/partner" : "/dashboard/reseller";
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].redirect(new URL(target, req.url));
    }
    if (pathname.startsWith("/dashboard/client") || pathname.startsWith("/dashboard/partner") || pathname.startsWith("/dashboard/reseller")) {
        const hasSession = Boolean(req.cookies.get(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$rbac$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["AUTH_COOKIE_NAME"])?.value);
        let loginPath = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$rbac$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["ROLE_LOGIN_PATHS"].CLIENT;
        if (pathname.startsWith("/dashboard/partner")) loginPath = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$rbac$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["ROLE_LOGIN_PATHS"].PARTNER;
        else if (pathname.startsWith("/dashboard/reseller")) loginPath = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$rbac$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["ROLE_LOGIN_PATHS"].RESELLER;
        if (!hasSession) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].redirect(new URL(loginPath, req.url));
        }
    }
    if (pathname.startsWith("/quotation") || pathname.startsWith("/invoice")) {
        const expectedUser = process.env.BASIC_AUTH_USER;
        const expectedPass = process.env.BASIC_AUTH_PASS;
        if (!expectedUser || !expectedPass) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].next();
        }
        const basicAuth = req.headers.get("authorization");
        if (basicAuth) {
            try {
                const authValue = basicAuth.split(" ")[1];
                if (authValue) {
                    const [user, pwd] = atob(authValue).split(":");
                    if (user === expectedUser && pwd === expectedPass) {
                        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].next();
                    }
                }
            } catch  {
            // Malformed authorization header — fall through to 401
            }
        }
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"]("Unauthorized access. Please provide correct credentials.", {
            status: 401,
            headers: {
                "WWW-Authenticate": 'Basic realm="Secure Area"'
            }
        });
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].next();
}
}),
]);

//# sourceMappingURL=%5Broot-of-the-server%5D__0tnjddu._.js.map