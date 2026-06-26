type LoginPayload = { email: string; password: string; role: string };
type LoginResponse = { success: boolean; redirectUrl?: string; token?: string; error?: string; message?: string };

type RegisterPayload = { name: string; email: string; password: string; role: string };
type RegisterResponse = { success: boolean; message?: string; error?: string };

type ForgotPasswordPayload = { email: string; role?: string };
type ForgotPasswordResponse = { success: boolean; message?: string; error?: string };

export async function login(payload: LoginPayload): Promise<LoginResponse> {
  const res = await fetch("/api/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    body: JSON.stringify(payload),
  });
  return res.json();
}

export async function register(payload: RegisterPayload): Promise<RegisterResponse> {
  const res = await fetch("/api/auth/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    body: JSON.stringify(payload),
  });
  return res.json();
}

export async function forgotPassword(payload: ForgotPasswordPayload): Promise<ForgotPasswordResponse> {
  const res = await fetch("/api/auth/forgot-password", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  return res.json();
}

export async function logout(): Promise<{ success: boolean }> {
  const res = await fetch("/api/auth/logout", { method: "POST", credentials: "include" });
  return res.json();
}
