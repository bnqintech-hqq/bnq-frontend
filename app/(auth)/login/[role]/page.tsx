import { notFound } from "next/navigation";
import AuthForm from "@/app/components/auth/AuthForm";
import { isRoleSlug, ROLE_ROUTE_CONFIG } from "@/lib/role-slugs";

type LoginPageProps = {
  params: Promise<{ role: string }>;
};

export default async function LoginPage({ params }: LoginPageProps) {
  const { role } = await params;

  if (!isRoleSlug(role)) {
    notFound();
  }

  const config = ROLE_ROUTE_CONFIG[role];

  return (
    <AuthForm
      role={role}
      eyebrow={config.loginEyebrow}
      heading={config.loginHeading}
    />
  );
}
