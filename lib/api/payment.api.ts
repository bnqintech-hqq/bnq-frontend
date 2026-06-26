type CreateOrderPayload = { amount: number; currency?: string; serviceName?: string; description?: string; planId?: string; domainName?: string };
type CreateOrderResponse = { success: boolean; id?: string; amount?: number; currency?: string; receipt?: string; error?: string };

export async function createOrder(payload: CreateOrderPayload): Promise<CreateOrderResponse> {
  const res = await fetch("/api/payment/create-order", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  return res.json();
}

type VerifyPaymentPayload = { razorpay_order_id: string; razorpay_payment_id: string; razorpay_signature: string };

export async function verifyPayment(payload: VerifyPaymentPayload): Promise<{ verified: boolean; error?: string }> {
  const res = await fetch("/api/payment/verify-payment", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  return res.json();
}

export async function processCheckout(payload: Record<string, unknown>): Promise<{ success: boolean; data?: unknown; error?: string }> {
  const res = await fetch("/api/payment/checkout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  return res.json();
}
