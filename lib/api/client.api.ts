type DashboardData = {
  id: string;
  name: string;
  email: string;
  walletBalance: number;
  resellerBrand: string;
  services: Array<{ id: string; name: string; type: string; status: string; price: number; nextBillingDate: string | null }>;
  transactions: Array<{ id: string; amount: number; type: string; description: string; status: string; date: string }>;
  tickets: Array<{ id: string; subject: string; status: string; updatedAt: string }>;
};

type ApiResponse<T> = { success: boolean; data?: T; error?: string };

export async function getDashboard(): Promise<ApiResponse<DashboardData>> {
  const res = await fetch("/api/user/dashboard", { credentials: "include" });
  return res.json();
}

export async function updateProfile(name: string): Promise<ApiResponse<{ id: string; name: string; email: string }>> {
  const res = await fetch("/api/client/profile", {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    body: JSON.stringify({ name }),
  });
  return res.json();
}

export async function updatePassword(currentPassword: string, newPassword: string): Promise<ApiResponse<null>> {
  const res = await fetch("/api/client/password", {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    body: JSON.stringify({ currentPassword, newPassword }),
  });
  return res.json();
}
