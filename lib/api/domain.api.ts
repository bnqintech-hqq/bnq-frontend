type DomainCheckResult = {
  domain: string;
  available: boolean;
  status: string;
  price: number | null;
  currency: string;
  isPremiumName: boolean;
  message: string;
  provider: string;
};

type DomainCheckResponse = DomainCheckResult & { error?: string };

export async function checkAvailability(domain: string): Promise<DomainCheckResponse> {
  const res = await fetch("/api/domains/check", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ domain }),
  });
  return res.json();
}

type DomainCheckoutPayload = {
  domainName: string;
  price: number;
  currency?: string;
  period?: number;
  icannDetails: {
    firstName: string; lastName: string; email: string; phone: string;
    address: string; city: string; state: string; zip: string;
  };
};

export async function domainCheckout(payload: DomainCheckoutPayload): Promise<{ success: boolean; orderId?: string; error?: string }> {
  const res = await fetch("/api/domains/checkout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  return res.json();
}
