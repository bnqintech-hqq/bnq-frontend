type ResellerDashboardData = {
  brandName: string;
  markupPercent: number;
  walletBalance: number;
  subClients: Array<{ id: string; name: string; email: string; status: string; servicesCount: number; billedMonth: string }>;
};

type ApiResponse<T> = { success: boolean; data?: T; error?: string };

export async function getDashboard(): Promise<ApiResponse<ResellerDashboardData>> {
  const res = await fetch("/api/reseller/dashboard", { credentials: "include" });
  return res.json();
}

export async function updateConfig(brandName: string, markupPercent: number): Promise<ApiResponse<unknown>> {
  const res = await fetch("/api/reseller/config", {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    body: JSON.stringify({ brandName, markupPercent }),
  });
  return res.json();
}

export async function updateProfile(name: string): Promise<ApiResponse<{ id: string; name: string; email: string }>> {
  const res = await fetch("/api/reseller/profile", {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    body: JSON.stringify({ name }),
  });
  return res.json();
}

export async function updatePassword(currentPassword: string, newPassword: string): Promise<ApiResponse<null>> {
  const res = await fetch("/api/reseller/password", {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    body: JSON.stringify({ currentPassword, newPassword }),
  });
  return res.json();
}

export async function addClient(data: { name: string; email: string; password: string }): Promise<ApiResponse<unknown>> {
  const res = await fetch("/api/reseller/clients", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    body: JSON.stringify(data),
  });
  return res.json();
}
