"use client";

import { Suspense, useMemo, useState, type ReactNode } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";

const icannDetailsSchema = z.object({
  firstName: z.string().trim().min(1, "First name is required").max(80, "First name is too long"),
  lastName: z.string().trim().min(1, "Last name is required").max(80, "Last name is too long"),
  email: z.string().trim().email("Enter a valid email address").max(160, "Email is too long"),
  phone: z
    .string()
    .trim()
    .min(7, "Phone number is required")
    .max(30, "Phone number is too long")
    .regex(/^[0-9+\-\s()]+$/, "Use a valid phone number"),
  address: z.string().trim().min(5, "Address is required").max(240, "Address is too long"),
  city: z.string().trim().min(1, "City is required").max(100, "City is too long"),
  state: z.string().trim().min(1, "State is required").max(100, "State is too long"),
  zip: z.string().trim().min(3, "ZIP is required").max(20, "ZIP is too long"),
});

type IcannDetails = z.infer<typeof icannDetailsSchema>;

type SelectedDomain = {
  domainName: string;
  price: number;
};

const emptyDomain: SelectedDomain = {
  domainName: "",
  price: 0,
};

function getStringValue(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function getNumberValue(value: unknown) {
  if (typeof value === "number" && Number.isFinite(value)) return value;
  if (typeof value !== "string") return 0;
  const parsed = Number(value.replace(/[^0-9.]/g, ""));
  return Number.isFinite(parsed) ? parsed : 0;
}

function normalizeCartItem(value: unknown): SelectedDomain | null {
  if (!value || typeof value !== "object") return null;

  const record = value as Record<string, unknown>;
  const domainName =
    getStringValue(record.domainName) ||
    getStringValue(record.domain) ||
    getStringValue(record.name) ||
    getStringValue(record.title);
  const price = getNumberValue(record.price) || getNumberValue(record.amount);

  return domainName ? { domainName, price } : null;
}

function readStoredDomain(): SelectedDomain | null {
  if (typeof window === "undefined") return null;

  const storageKeys = ["selectedDomain", "domainCart", "cart", "checkoutDomain"];

  for (const key of storageKeys) {
    const raw = window.localStorage.getItem(key);
    if (!raw) continue;

    try {
      const parsed = JSON.parse(raw) as unknown;
      const directItem = normalizeCartItem(parsed);
      if (directItem) return directItem;

      if (Array.isArray(parsed)) {
        const firstDomain = parsed.map(normalizeCartItem).find(Boolean);
        if (firstDomain) return firstDomain;
      }

      if (parsed && typeof parsed === "object") {
        const record = parsed as Record<string, unknown>;
        if (Array.isArray(record.items)) {
          const firstDomain = record.items.map(normalizeCartItem).find(Boolean);
          if (firstDomain) return firstDomain;
        }
      }
    } catch {
      const domainName = raw.trim();
      if (domainName) return { domainName, price: 0 };
    }
  }

  return null;
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-semibold text-slate-700">{label}</span>
      {children}
      {error ? <span className="mt-1.5 block text-xs font-medium text-rose-600">{error}</span> : null}
    </label>
  );
}

function CheckoutContent() {
  const searchParams = useSearchParams();
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const domainFromUrl = searchParams.get("domain")?.trim() || "";
  const priceFromUrl = searchParams.get("price");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<IcannDetails>({
    resolver: zodResolver(icannDetailsSchema),
    mode: "onBlur",
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      state: "",
      zip: "",
    },
  });

  const selectedDomain = useMemo(() => {
    if (domainFromUrl) {
      return {
        domainName: domainFromUrl,
        price: getNumberValue(priceFromUrl),
      };
    }

    return readStoredDomain() ?? emptyDomain;
  }, [domainFromUrl, priceFromUrl]);

  const formattedPrice = useMemo(() => {
    if (!selectedDomain.price) return "Price pending";
    return `Rs. ${selectedDomain.price.toLocaleString("en-IN")}/yr`;
  }, [selectedDomain.price]);

  const onSubmit = async (values: IcannDetails) => {
    setStatus("idle");
    setMessage("");

    if (!selectedDomain.domainName) {
      setStatus("error");
      setMessage("Please select a domain before checkout.");
      return;
    }

    const response = await fetch("/api/order/create", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        domainName: selectedDomain.domainName,
        price: selectedDomain.price,
        status: "PENDING",
        icannDetails: values,
      }),
    });

    const data = (await response.json().catch(() => null)) as {
      orderId?: string;
      error?: string;
      details?: string;
      status?: string;
    } | null;

    if (!response.ok) {
      setStatus("error");
      setMessage(data?.details || data?.error || "Unable to submit this domain order.");
      return;
    }

    setStatus("success");
    setMessage(data?.orderId ? `Domain order submitted. Order ID: ${data.orderId}` : "Domain order submitted.");
  };

  return (
    <main className="min-h-screen bg-slate-50 px-4 pb-16 pt-28 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[1fr_360px]">
        <section className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <div className="mb-8 border-b border-slate-200 pb-5">
            <p className="text-sm font-semibold uppercase text-blue-600">Domain Checkout</p>
            <h1 className="mt-2 text-3xl font-bold text-slate-950">ICANN Registrant Details</h1>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
              These details are required for domain registration and ownership records.
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="First Name" error={errors.firstName?.message}>
                <input className="w-full rounded-md border border-slate-300 px-4 py-3 text-sm text-slate-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100" {...register("firstName")} />
              </Field>
              <Field label="Last Name" error={errors.lastName?.message}>
                <input className="w-full rounded-md border border-slate-300 px-4 py-3 text-sm text-slate-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100" {...register("lastName")} />
              </Field>
              <Field label="Email" error={errors.email?.message}>
                <input type="email" className="w-full rounded-md border border-slate-300 px-4 py-3 text-sm text-slate-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100" {...register("email")} />
              </Field>
              <Field label="Phone" error={errors.phone?.message}>
                <input type="tel" className="w-full rounded-md border border-slate-300 px-4 py-3 text-sm text-slate-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100" {...register("phone")} />
              </Field>
              <Field label="Address" error={errors.address?.message}>
                <input className="w-full rounded-md border border-slate-300 px-4 py-3 text-sm text-slate-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100" {...register("address")} />
              </Field>
              <Field label="City" error={errors.city?.message}>
                <input className="w-full rounded-md border border-slate-300 px-4 py-3 text-sm text-slate-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100" {...register("city")} />
              </Field>
              <Field label="State" error={errors.state?.message}>
                <input className="w-full rounded-md border border-slate-300 px-4 py-3 text-sm text-slate-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100" {...register("state")} />
              </Field>
              <Field label="ZIP" error={errors.zip?.message}>
                <input className="w-full rounded-md border border-slate-300 px-4 py-3 text-sm text-slate-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100" {...register("zip")} />
              </Field>
            </div>

            {message ? (
              <div className={`rounded-md px-4 py-3 text-sm font-medium ${status === "success" ? "bg-emerald-50 text-emerald-700" : "bg-rose-50 text-rose-700"}`}>
                {message}
              </div>
            ) : null}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full rounded-md bg-blue-600 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
            >
              {isSubmitting ? "Submitting..." : "Submit Checkout"}
            </button>
          </form>
        </section>

        <aside className="h-fit rounded-lg border border-slate-200 bg-slate-950 p-6 text-white shadow-sm lg:sticky lg:top-28">
          <p className="text-sm font-semibold uppercase text-blue-300">Order Summary</p>
          <div className="mt-5 rounded-md border border-white/10 bg-white/5 p-4">
            <p className="text-xs uppercase text-slate-400">Selected Domain</p>
            <p className="mt-1 break-words text-xl font-bold">{selectedDomain.domainName || "No domain selected"}</p>
          </div>
          <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-4">
            <span className="text-sm text-slate-300">Registration</span>
            <span className="text-base font-bold">{formattedPrice}</span>
          </div>
          <p className="mt-5 text-sm leading-6 text-slate-400">
            Your order will be saved as PENDING until payment and domain provisioning are completed.
          </p>
        </aside>
      </div>
    </main>
  );
}

export default function CheckoutPage() {
  return (
    <Suspense fallback={<div className="pt-32 text-center text-sm font-semibold">Loading checkout...</div>}>
      <CheckoutContent />
    </Suspense>
  );
}
