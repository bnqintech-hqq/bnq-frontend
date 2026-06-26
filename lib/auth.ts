import { cookies } from "next/headers";
import { createHmac, timingSafeEqual } from "crypto";
import { AUTH_COOKIE_NAME, type UserRole } from "@/lib/rbac";

type SessionPayload = {
  userId: string;
  email: string;
  role: UserRole;
  exp: number;
};

function getAuthSecret(): string {
  const secret = process.env.AUTH_SECRET?.trim() || process.env.NEXTAUTH_SECRET?.trim();
  if (!secret) {
    console.error("❌ CRITICAL ERROR: AUTH_SECRET is missing in .env file.");
    throw new Error("Please define AUTH_SECRET in your environment.");
  }
  return secret;
}

function sign(value: string): string {
  return createHmac("sha256", getAuthSecret()).update(value).digest("base64url");
}

function signaturesMatch(expected: string, actual: string): boolean {
  const expectedBuffer = Buffer.from(expected);
  const actualBuffer = Buffer.from(actual);
  return expectedBuffer.length === actualBuffer.length && timingSafeEqual(expectedBuffer, actualBuffer);
}

export function verifySessionToken(token?: string): SessionPayload | null {
  // Debug 1: Check if token is even reaching the server
  if (!token) {
    console.log("❌ DEBUG: No token found in cookies. Redirecting to login.");
    return null;
  }

  const [encodedPayload, signature] = token.split(".");
  
  // Debug 2: Check token format
  if (!encodedPayload || !signature) {
    console.log("❌ DEBUG: Invalid token format. Missing payload or signature.");
    return null;
  }

  // Debug 3: Check if secret keys match
  if (!signaturesMatch(sign(encodedPayload), signature)) {
    console.log("❌ DEBUG: Signature mismatch! Your Next.js AUTH_SECRET does not match the token's secret.");
    return null;
  }

  try {
    const payload = JSON.parse(Buffer.from(encodedPayload, "base64url").toString()) as SessionPayload;
    
    // Debug 4: Check if token is expired
    if (payload.exp < Math.floor(Date.now() / 1000)) {
      console.log("❌ DEBUG: Token has expired.");
      return null;
    }

    console.log("✅ DEBUG: Token verified successfully for role:", payload.role);
    return payload;
  } catch {
    console.log("❌ DEBUG: Failed to parse token JSON payload.");
    return null;
  }
}

export async function getCurrentUserSession(): Promise<SessionPayload | null> {
  const cookieStore = await cookies();
  const token = cookieStore.get(AUTH_COOKIE_NAME)?.value;
  return verifySessionToken(token);
}