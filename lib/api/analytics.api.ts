type TrackEventPayload = {
  event: string;
  role_type?: string;
  real_ip?: string;
  ip_address?: string;
  location?: string;
  full_address?: string;
  selected_address?: string;
  country_code?: string;
  flag_emoji?: string;
  browser_details?: string;
  current_page?: string;
};

export async function trackEvent(payload: TrackEventPayload): Promise<{ success: boolean; logId?: string }> {
  const res = await fetch("/api/track", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  return res.json();
}
