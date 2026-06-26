import { redirect } from "next/navigation";
import { getCurrentUserSession } from "@/lib/auth";
import ClientDashboard from "@/app/components/client/ClientDashboard";
import PartnerDashboard from "@/app/components/partner/PartnerDashboard";
import ResellerDashboard from "@/app/components/reseller/ResellerDashboard";
import AdminDashboard from "@/app/components/admin/AdminDashboard";

export default async function DashboardPage({
  params,
}: {
  params: Promise<{ role: string }>;
}) {
  const { role } = await params;
  const session = await getCurrentUserSession();

  if (!session) redirect("/login/client");

  const userRole = session.role.toLowerCase();
  if (userRole !== role) redirect(`/dashboard/${userRole}`);

  switch (role) {
    case "client":
      return <ClientDashboard />;
    case "partner":
      return <PartnerDashboard />;
    case "reseller":
      return <ResellerDashboard />;
    case "admin":
      return <AdminDashboard />;
    default:
      redirect("/login/client");
  }
}
