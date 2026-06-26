type ApiResponse<T> = { success?: boolean; ok?: boolean; data?: T; error?: string };

export async function getDashboard(): Promise<ApiResponse<null>> {
  const res = await fetch("/api/partner/dashboard", { credentials: "include" });
  return res.json();
}

export async function requestPayout(amount: number): Promise<ApiResponse<{ payout: unknown }>> {
  const res = await fetch("/api/partner/payout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    body: JSON.stringify({ amount }),
  });
  return res.json();
}
