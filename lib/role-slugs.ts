import { type UserRole } from "@/lib/rbac";

export type RoleSlug = "client" | "partner" | "reseller";

type RoleRouteConfig = {
  role: UserRole;
  label: string;
  loginHeading: string;
  loginEyebrow: string;
  registerTitle: string;
};

export const ROLE_ROUTE_CONFIG: Record<RoleSlug, RoleRouteConfig> = {
  client: {
    role: "CLIENT",
    label: "Client portal",
    loginHeading: "Client Login",
    loginEyebrow: "Client portal",
    registerTitle: "Client Sign Up",
  },
  partner: {
    role: "PARTNER",
    label: "Partner portal",
    loginHeading: "Partner Login",
    loginEyebrow: "Partner portal",
    registerTitle: "Partner Sign Up",
  },
  reseller: {
    role: "RESELLER",
    label: "Reseller Workspace",
    loginHeading: "Reseller Portal Access",
    loginEyebrow: "Master Workspace",
    registerTitle: "Start Your Hosting Brand",
  },
};

export function isRoleSlug(role: string): role is RoleSlug {
  return role === "client" || role === "partner" || role === "reseller";
}

export function getRoleRouteConfig(role: string) {
  if (isRoleSlug(role)) {
    return ROLE_ROUTE_CONFIG[role];
  }
  return null;
}
