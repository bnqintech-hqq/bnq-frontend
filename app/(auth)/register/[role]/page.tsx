import { notFound } from "next/navigation";
import RegisterForm from "@/app/components/auth/RegisterForm";
import { getRoleRouteConfig } from "@/lib/role-slugs";

type RegisterPageProps = {
  params: Promise<{ role: string }>;
};

export default async function RegisterPage({ params }: RegisterPageProps) {
  const { role } = await params;
  const config = getRoleRouteConfig(role);

  if (!config) {
    notFound();
  }

  return (
    <RegisterForm
      role={config.role.toLowerCase() as "client" | "partner" | "reseller"}
      title={config.registerTitle}
    />
  );
}
