"use client";

import { useMemo, useState } from "react";

type RazorpayOrder = {
  id: string;
  amount: number;
  currency: string;
  receipt?: string;
};

type RazorpayPaymentResponse = {
  razorpay_order_id: string;
  razorpay_payment_id: string;
  razorpay_signature: string;
};

type RazorpayFailureResponse = {
  error?: {
    code?: string;
    description?: string;
    reason?: string;
  };
};

type RazorpayOptions = {
  key: string;
  amount: number;
  currency: string;
  name: string;
  description: string;
  order_id: string;
  prefill?: {
    name?: string;
    email?: string;
    contact?: string;
  };
  notes?: Record<string, string>;
  theme?: {
    color?: string;
  };
  handler: (response: RazorpayPaymentResponse) => void | Promise<void>;
  modal?: {
    ondismiss?: () => void;
  };
};

type RazorpayInstance = {
  open: () => void;
  on: (event: "payment.failed", callback: (response: RazorpayFailureResponse) => void) => void;
};

declare global {
  interface Window {
    Razorpay?: new (options: RazorpayOptions) => RazorpayInstance;
  }
}

export type PaymentButtonProps = {
  amount: number;
  serviceName: string;
  description?: string;
  planId?: string;
  domainName?: string;
  customerName?: string;
  customerEmail?: string;
  customerPhone?: string;
  className?: string;
  disabled?: boolean;
  buttonText?: string;
  onSuccess?: (response: RazorpayPaymentResponse) => void;
  onError?: (message: string) => void;
};

const CHECKOUT_SCRIPT = "https://checkout.razorpay.com/v1/checkout.js";

let checkoutScriptPromise: Promise<void> | null = null;

function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function loadRazorpay() {
  if (typeof window === "undefined") {
    return Promise.reject(new Error("Razorpay is available only in the browser."));
  }

  if (window.Razorpay) return Promise.resolve();

  checkoutScriptPromise ??= new Promise((resolve, reject) => {
    const existing = document.querySelector<HTMLScriptElement>(`script[src="${CHECKOUT_SCRIPT}"]`);

    if (existing) {
      existing.addEventListener("load", () => resolve(), { once: true });
      existing.addEventListener("error", () => reject(new Error("Unable to load Razorpay.")), {
        once: true,
      });
      return;
    }

    const script = document.createElement("script");
    script.src = CHECKOUT_SCRIPT;
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error("Unable to load Razorpay."));
    document.body.appendChild(script);
  });

  return checkoutScriptPromise;
}

async function postJson<T>(url: string, body: Record<string, unknown>) {
  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  const data = (await response.json().catch(() => ({}))) as T & { error?: string };

  if (!response.ok) {
    throw new Error(data.error || "Request failed.");
  }

  return data;
}

function getMessage(error: unknown) {
  return error instanceof Error ? error.message : "Payment failed. Please try again.";
}

export default function PaymentButton({
  amount,
  serviceName,
  description = "Hosting checkout",
  planId,
  domainName,
  customerName,
  customerEmail,
  customerPhone,
  className,
  disabled,
  buttonText,
  onSuccess,
  onError,
}: PaymentButtonProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const publicKey = process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID;

  const formattedAmount = useMemo(
    () =>
      new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "INR",
        maximumFractionDigits: 0,
      }).format(amount),
    [amount],
  );

  async function handlePayment() {
    try {
      setLoading(true);
      setError(null);

      if (!publicKey) throw new Error("Razorpay key is not configured.");
      if (!Number.isFinite(amount) || amount <= 0) throw new Error("Invalid payment amount.");

      await loadRazorpay();
      if (!window.Razorpay) throw new Error("Razorpay checkout is unavailable.");

      const order = await postJson<RazorpayOrder>("/api/payment/create-order", {
        amount,
        currency: "INR",
        serviceName,
        description,
        planId,
        domainName,
      });

      const checkout = new window.Razorpay({
        key: publicKey,
        amount: order.amount,
        currency: order.currency,
        name: "BNQinTECH",
        description,
        order_id: order.id,
        prefill: {
          name: customerName,
          email: customerEmail,
          contact: customerPhone,
        },
        notes: {
          serviceName,
          description,
          planId: planId ?? "",
          domainName: domainName ?? "",
        },
        theme: { color: "#0f172a" },
        modal: {
          ondismiss: () => setLoading(false),
        },
        handler: async (payment) => {
          await postJson<{ verified: true }>("/api/payment/verify-payment", payment);
          await postJson("/api/payment/checkout", {
            orderId: payment.razorpay_order_id,
            paymentId: payment.razorpay_payment_id,
            receipt: order.receipt,
            amount,
            currency: order.currency,
            serviceName,
            description,
            planId,
            domainName,
            customer: {
              name: customerName,
              email: customerEmail,
              phone: customerPhone,
            },
          });
          setLoading(false);
          onSuccess?.(payment);
        },
      });

      checkout.on("payment.failed", (response) => {
        const message =
          response.error?.description ||
          response.error?.reason ||
          response.error?.code ||
          "Payment failed.";

        setError(message);
        setLoading(false);
        onError?.(message);
      });

      checkout.open();
    } catch (err) {
      const message = getMessage(err);
      setError(message);
      setLoading(false);
      onError?.(message);
    }
  }

  return (
    <div className={cx("w-full", className)}>
      <button
        type="button"
        onClick={handlePayment}
        disabled={disabled || loading}
        aria-busy={loading}
        className="w-full rounded-xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:bg-slate-300"
      >
        {loading ? "Processing..." : buttonText || `Pay ${formattedAmount}`}
      </button>
      {error ? <p className="mt-2 text-sm font-medium text-red-600">{error}</p> : null}
    </div>
  );
}
