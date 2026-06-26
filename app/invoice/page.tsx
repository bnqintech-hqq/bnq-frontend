"use client";

import React, { Suspense, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

type BillingItem = { description: string; quantity: number; unitPrice: number };
type BillingService = { slug: string; title: string; category: string; items: BillingItem[] };
type BillingClient = { name: string; company: string; email: string; phone: string; address: string };
type BillingInvoice = {
  id: string;
  invoiceNo: string;
  clientName: string;
  company: string;
  email: string;
  phone: string;
  address: string;
  serviceSlug: string;
  serviceTitle: string;
  items: BillingItem[];
  notes: string;
  dueDate: string;
  discountPercent: number;
  gstPercent: number;
  sacCode: string;
  subtotal: number;
  discountAmount: number;
  taxableAmount: number;
  taxAmount: number;
  total: number;
  status: string;
  createdAt: string;
};

const defaultNotes = "Thank you for doing business with us.";

function formatCur(value: number) {
  return `Rs. ${Number(value || 0).toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}

async function readApi<T>(url: string, init?: RequestInit): Promise<T> {
  const res = await fetch(url, { credentials: "include", ...init });
  const body = await res.json();
  if (!res.ok || !body.success) throw new Error(body.error || body.message || "Request failed.");
  return body.data as T;
}

function groupServices(services: BillingService[]) {
  return services.reduce<Record<string, BillingService[]>>((groups, service) => {
    groups[service.category] = [...(groups[service.category] || []), service];
    return groups;
  }, {});
}

function exportInvoicePdf(invoice: BillingInvoice) {
  const doc = new jsPDF();
  doc.setFontSize(24);
  doc.setTextColor(22, 163, 74);
  doc.text("BNQinTECH", 14, 22);
  doc.setFontSize(9);
  doc.setTextColor(100, 100, 100);
  doc.text("Powered by BNQinTECH Cloud Infrastructure | Phone: +91 92713 0782", 14, 34);
  doc.line(14, 40, 196, 40);

  doc.setFontSize(14);
  doc.setTextColor(22, 163, 74);
  doc.setFont("helvetica", "bold");
  doc.text("TAX INVOICE", 14, 52);
  doc.setFontSize(10);
  doc.setTextColor(0, 0, 0);
  doc.text("BILL TO:", 14, 64);
  doc.text("INVOICE DETAILS:", 120, 64);

  doc.setFont("helvetica", "normal");
  doc.text(`Name: ${invoice.clientName}`, 14, 71);
  if (invoice.company) doc.text(`Company: ${invoice.company}`, 14, 77);
  doc.text(`Email: ${invoice.email}`, 14, 83);
  if (invoice.phone) doc.text(`Phone: ${invoice.phone}`, 14, 89);
  if (invoice.address) doc.text(`Address: ${invoice.address}`, 14, 95, { maxWidth: 86 });
  doc.text(`Invoice No: ${invoice.invoiceNo}`, 120, 71);
  doc.text(`Invoice Date: ${new Date(invoice.createdAt).toLocaleDateString("en-IN")}`, 120, 77);
  doc.text(`Payment Due: ${new Date(invoice.dueDate).toLocaleDateString("en-IN")}`, 120, 83);
  doc.text(`SAC Code: ${invoice.sacCode}`, 120, 89);

  autoTable(doc, {
    startY: 106,
    head: [["Description", "Qty", "Unit Price", "Amount"]],
    body: invoice.items.map((item) => [
      item.description,
      item.quantity,
      formatCur(item.unitPrice),
      formatCur(item.quantity * item.unitPrice),
    ]),
    theme: "grid",
    headStyles: { fillColor: [22, 163, 74], textColor: [255, 255, 255] },
    styles: { fontSize: 9, cellPadding: 5 },
  });

  const finalY = (doc as any).lastAutoTable?.finalY || 116;
  doc.text("Payment Information:", 14, finalY + 16);
  doc.setTextColor(90, 90, 90);
  doc.text(["A/C Name: BNQinTECH", "Bank: State Bank of India", "UPI ID: bnqintech@upi"], 14, finalY + 23);
  doc.text(invoice.notes || defaultNotes, 14, finalY + 48, { maxWidth: 94 });
  doc.setTextColor(40, 40, 40);
  doc.text("Subtotal:", 130, finalY + 14);
  doc.text(formatCur(invoice.subtotal), 165, finalY + 14);
  doc.text(`Discount (${invoice.discountPercent}%):`, 130, finalY + 21);
  doc.text(`- ${formatCur(invoice.discountAmount)}`, 165, finalY + 21);
  doc.text(`GST (${invoice.gstPercent}%):`, 130, finalY + 28);
  doc.text(`+ ${formatCur(invoice.taxAmount)}`, 165, finalY + 28);
  doc.setFillColor(22, 163, 74);
  doc.rect(124, finalY + 35, 72, 12, "F");
  doc.setTextColor(255, 255, 255);
  doc.setFont("helvetica", "bold");
  doc.text("Total Due:", 130, finalY + 43);
  doc.text(formatCur(invoice.total), 161, finalY + 43);
  doc.save(`${invoice.invoiceNo}_${invoice.company || invoice.clientName}.pdf`);
}

function InvoiceContent() {
  const searchParams = useSearchParams();
  const [services, setServices] = useState<BillingService[]>([]);
  const [serviceSlug, setServiceSlug] = useState(searchParams.get("service") || "");
  const [client, setClient] = useState<BillingClient>({ name: "", company: "", email: "", phone: "", address: "" });
  const [meta, setMeta] = useState({ dueDateDays: 7, discountPercent: 0, gstPercent: 18, sacCode: "998314", notes: defaultNotes });
  const [invoice, setInvoice] = useState<BillingInvoice | null>(null);
  const [error, setError] = useState("");
  const [isSaving, setIsSaving] = useState(false);
  const [isPaymentLoading, setIsPaymentLoading] = useState(false);

  useEffect(() => {
    let mounted = true;
    async function boot() {
      try {
        const [serviceData, user] = await Promise.all([
          readApi<BillingService[]>("/api/billing/services"),
          readApi<Partial<BillingClient> | null>("/api/billing/me").catch(() => null),
        ]);
        if (!mounted) return;
        setServices(serviceData);
        if (user) setClient((prev) => ({ ...prev, ...user, company: prev.company || "" }));

        const invoiceId = searchParams.get("invoiceId");
        const quoteId = searchParams.get("quoteId");
        if (invoiceId) {
          setInvoice(await readApi<BillingInvoice>(`/api/billing/invoices/${invoiceId}`));
        } else if (quoteId) {
          setInvoice(await readApi<BillingInvoice>(`/api/billing/quotes/${quoteId}/convert`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ dueDateDays: 7, sacCode: "998314" }),
          }));
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to load billing data.");
      }
    }
    boot();
    return () => { mounted = false; };
  }, [searchParams]);

  const grouped = useMemo(() => groupServices(services), [services]);
  const selectedService = services.find((service) => service.slug === serviceSlug);

  const updateClient = (field: keyof BillingClient, value: string) => {
    setClient((prev) => ({ ...prev, [field]: value }));
    setInvoice(null);
  };

  const updateMeta = (field: keyof typeof meta, value: string) => {
    const nextValue = field === "notes" || field === "sacCode" ? value : Number(value);
    setMeta((prev) => ({ ...prev, [field]: nextValue }));
    setInvoice(null);
  };

  const createInvoice = async () => {
    setError("");
    setIsSaving(true);
    try {
      const created = await readApi<BillingInvoice>("/api/billing/invoices", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ serviceSlug, client, ...meta }),
      });
      setInvoice(created);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to create invoice.");
    } finally {
      setIsSaving(false);
    }
  };

  const loadScript = (src: string) => new Promise<boolean>((resolve) => {
    const existing = document.querySelector(`script[src="${src}"]`);
    if (existing) {
      resolve(true);
      return;
    }
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });

  const handlePayment = async () => {
    if (!invoice) return;
    setIsPaymentLoading(true);
    const ok = await loadScript("https://checkout.razorpay.com/v1/checkout.js");
    if (!ok) {
      setError("Razorpay SDK failed to load.");
      setIsPaymentLoading(false);
      return;
    }

    try {
      const result = await fetch("/api/payment/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: invoice.total }),
      });
      const data = await result.json();
      if (!data.success) throw new Error(data.error || "Failed to initiate payment.");

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || "rzp_test_dummy_key",
        amount: data.order.amount,
        currency: data.order.currency,
        name: "BNQinTECH",
        description: `Invoice: ${invoice.invoiceNo}`,
        image: "/1.png",
        order_id: data.order.id,
        handler: async function (response: any) {
          const verifyRes = await fetch("/api/payment/verify-payment", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
              planId: invoice.serviceSlug,
              customerEmail: invoice.email,
              customerName: invoice.clientName,
              amount: invoice.total,
              invoiceNo: invoice.invoiceNo,
            }),
          });
          const verifyData = await verifyRes.json();
          alert(verifyData.success ? `Payment successful for ${invoice.invoiceNo}` : "Payment verification failed.");
        },
        prefill: { name: invoice.clientName, email: invoice.email, contact: invoice.phone },
        theme: { color: "#16a34a" },
      };

      new (window as any).Razorpay(options).open();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong with payment.");
    } finally {
      setIsPaymentLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 px-4 pb-12 pt-28 font-sans sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl space-y-6">
        <div className="flex flex-col justify-between gap-4 rounded-lg border border-slate-200 bg-white p-6 shadow-sm md:flex-row md:items-center">
          <div>
            <h1 className="text-2xl font-bold text-slate-950">Tax Invoice Generator</h1>
            <p className="text-sm text-slate-600">Create final invoices from live backend quote and service data.</p>
          </div>
          <Link href="/quotation" className="rounded-md border border-slate-300 px-4 py-2 text-sm font-bold text-slate-700 transition hover:bg-slate-50">
            Create Quotation
          </Link>
        </div>

        {error ? <div className="rounded-lg border border-red-200 bg-red-50 p-4 text-sm font-semibold text-red-700">{error}</div> : null}

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="space-y-6 lg:col-span-2">
            <section className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="mb-4 border-b pb-2 text-base font-bold text-slate-950">1. Client / Billed To</h2>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <input value={client.name} onChange={(e) => updateClient("name", e.target.value)} placeholder="Client Name *" className="rounded-md border border-slate-300 px-4 py-2.5 text-sm text-slate-950 outline-none focus:ring-2 focus:ring-green-500" />
                <input value={client.company} onChange={(e) => updateClient("company", e.target.value)} placeholder="Company Name" className="rounded-md border border-slate-300 px-4 py-2.5 text-sm text-slate-950 outline-none focus:ring-2 focus:ring-green-500" />
                <input value={client.email} onChange={(e) => updateClient("email", e.target.value)} placeholder="Email Address *" className="rounded-md border border-slate-300 px-4 py-2.5 text-sm text-slate-950 outline-none focus:ring-2 focus:ring-green-500" />
                <input value={client.phone} onChange={(e) => updateClient("phone", e.target.value)} placeholder="Phone Number" className="rounded-md border border-slate-300 px-4 py-2.5 text-sm text-slate-950 outline-none focus:ring-2 focus:ring-green-500" />
                <input value={client.address} onChange={(e) => updateClient("address", e.target.value)} placeholder="Full Billing Address" className="rounded-md border border-slate-300 px-4 py-2.5 text-sm text-slate-950 outline-none focus:ring-2 focus:ring-green-500 md:col-span-2" />
              </div>
            </section>

            <section className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="mb-4 border-b pb-2 text-base font-bold text-slate-950">2. Service & Billing Details</h2>
              <select value={serviceSlug} onChange={(e) => { setServiceSlug(e.target.value); setInvoice(null); }} className="mb-6 w-full rounded-md border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-950 outline-none focus:ring-2 focus:ring-green-500">
                <option value="">-- Choose Completed Service Package --</option>
                {Object.entries(grouped).map(([category, items]) => (
                  <optgroup key={category} label={category}>
                    {items.map((service) => <option key={service.slug} value={service.slug}>{service.title}</option>)}
                  </optgroup>
                ))}
              </select>

              {selectedService ? (
                <div className="mb-6 overflow-hidden rounded-lg border border-slate-200">
                  {selectedService.items.map((item) => (
                    <div key={item.description} className="grid grid-cols-[1fr_auto] gap-4 border-b border-slate-100 px-4 py-3 text-sm last:border-b-0">
                      <span className="font-medium text-slate-700">{item.description} x {item.quantity}</span>
                      <span className="font-bold text-slate-950">{formatCur(item.quantity * item.unitPrice)}</span>
                    </div>
                  ))}
                </div>
              ) : null}

              <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
                <input type="number" value={meta.dueDateDays} onChange={(e) => updateMeta("dueDateDays", e.target.value)} className="rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-950" placeholder="Due Days" />
                <input type="number" min="0" max="100" value={meta.discountPercent} onChange={(e) => updateMeta("discountPercent", e.target.value)} className="rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-950" placeholder="Discount %" />
                <input type="number" min="0" max="100" value={meta.gstPercent} onChange={(e) => updateMeta("gstPercent", e.target.value)} className="rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-950" placeholder="GST %" />
                <input value={meta.sacCode} onChange={(e) => updateMeta("sacCode", e.target.value)} className="rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-950" placeholder="SAC Code" />
              </div>
              <textarea value={meta.notes} onChange={(e) => updateMeta("notes", e.target.value)} rows={2} className="mt-4 w-full rounded-md border border-slate-300 px-4 py-2 text-sm text-slate-950" />
            </section>

            <button onClick={createInvoice} disabled={isSaving} className="w-full rounded-lg bg-slate-950 py-4 text-lg font-bold text-white shadow-md transition hover:bg-black disabled:opacity-60">
              {isSaving ? "Creating Backend Invoice..." : "Generate Live Invoice"}
            </button>
          </div>

          <aside className="space-y-6">
            {invoice ? (
              <div className="sticky top-28 rounded-lg border border-slate-700 bg-slate-900 p-6 text-white shadow-xl">
                <div className="mb-4 flex items-center justify-between border-b border-slate-700 pb-3">
                  <h2 className="text-lg font-bold">Payment Summary</h2>
                  <span className="rounded bg-green-600 px-2 py-1 text-xs font-bold">{invoice.invoiceNo}</span>
                </div>
                <p className="text-sm text-slate-400">Package<br /><span className="text-base font-semibold text-white">{invoice.serviceTitle}</span></p>
                <div className="mt-4 space-y-3 border-t border-slate-700 pt-4 text-sm">
                  <div className="flex justify-between"><span>Subtotal</span><span>{formatCur(invoice.subtotal)}</span></div>
                  <div className="flex justify-between text-red-300"><span>Discount ({invoice.discountPercent}%)</span><span>- {formatCur(invoice.discountAmount)}</span></div>
                  <div className="flex justify-between text-green-300"><span>GST ({invoice.gstPercent}%)</span><span>+ {formatCur(invoice.taxAmount)}</span></div>
                </div>
                <div className="mt-4 flex items-center justify-between rounded-md bg-slate-800 p-3">
                  <span className="text-lg font-bold">Total Due</span>
                  <span className="text-xl font-black text-green-300">{formatCur(invoice.total)}</span>
                </div>
                <p className="mt-3 text-xs font-semibold text-slate-400">Due {new Date(invoice.dueDate).toLocaleDateString("en-IN")}</p>
                <div className="mt-6 space-y-3">
                  <button onClick={() => exportInvoicePdf(invoice)} className="w-full rounded-md bg-slate-700 py-3 font-bold text-white transition hover:bg-slate-600">Download Invoice PDF</button>
                  <button onClick={handlePayment} disabled={isPaymentLoading} className="w-full rounded-md bg-blue-600 py-3 font-bold text-white transition hover:bg-blue-700 disabled:opacity-60">
                    {isPaymentLoading ? "Opening Gateway..." : "Pay Now via Razorpay"}
                  </button>
                </div>
              </div>
            ) : (
              <div className="sticky top-28 rounded-lg border border-slate-200 bg-white p-8 text-center shadow-sm">
                <h3 className="mb-2 text-lg font-bold text-slate-950">Invoice Not Generated</h3>
                <p className="text-sm text-slate-500">Generate an invoice or open one from a converted quotation.</p>
              </div>
            )}
          </aside>
        </div>
      </div>
    </div>
  );
}

export default function InvoiceGenerator() {
  return (
    <Suspense fallback={<div className="pt-32 text-center text-sm font-semibold">Loading Invoice Generator...</div>}>
      <InvoiceContent />
    </Suspense>
  );
}
