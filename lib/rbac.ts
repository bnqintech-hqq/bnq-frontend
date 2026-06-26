export const AUTH_COOKIE_NAME = "bnqintech_session";

export const USER_ROLES = ["CLIENT", "PARTNER", "RESELLER", "ADMIN"] as const;
export type UserRole = (typeof USER_ROLES)[number];

export const ROLE_DASHBOARDS: Record<UserRole, string> = {
  CLIENT:   "/dashboard/client",
  PARTNER:  "/dashboard/partner",
  RESELLER: "/dashboard/reseller",
  ADMIN:    "/dashboard/admin",
};

export const ROLE_LOGIN_PATHS: Record<UserRole, string> = {
  CLIENT: "/login/client",
  PARTNER: "/login/partner",
  RESELLER: "/login/reseller",
  ADMIN: "/login/admin",
};

export function getDashboardForRole(role: UserRole) {
  return ROLE_DASHBOARDS[role];
}

export function getLoginPathForRole(role: UserRole) {
  return ROLE_LOGIN_PATHS[role];
}

export function isUserRole(value: unknown): value is UserRole {
  return value === "CLIENT" || value === "PARTNER" || value === "RESELLER" || value === "ADMIN";
}