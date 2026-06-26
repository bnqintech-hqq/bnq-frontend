type ApiResult<T> = { ok: true; data: T } | { ok: false; error: string };

export async function safeFetch<T = unknown>(
  url: string,
  init?: RequestInit,
): Promise<ApiResult<T>> {
  try {
    const res = await fetch(url, {
      credentials: "include",
      ...init,
    });

    let body: unknown;
    try {
      body = await res.json();
    } catch {
      if (!res.ok) return { ok: false, error: `Request failed (${res.status})` };
      return { ok: false, error: "Invalid response from server." };
    }

    if (!res.ok) {
      const msg =
        typeof body === "object" && body !== null
          ? (body as any).error?.message || (body as any).error || (body as any).message || `Request failed (${res.status})`
          : `Request failed (${res.status})`;
      return { ok: false, error: typeof msg === "string" ? msg : String(msg) };
    }

    return { ok: true, data: body as T };
  } catch (err) {
    if (err instanceof TypeError && err.message.includes("fetch")) {
      return { ok: false, error: "Network error. Please check your connection." };
    }
    return { ok: false, error: err instanceof Error ? err.message : "An unexpected error occurred." };
  }
}

export async function safePost<T = unknown>(
  url: string,
  body: unknown,
): Promise<ApiResult<T>> {
  return safeFetch<T>(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
}

export async function safePut<T = unknown>(
  url: string,
  body: unknown,
): Promise<ApiResult<T>> {
  return safeFetch<T>(url, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
}
