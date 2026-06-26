"use client";

import React, { Suspense, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

type BillingItem = { description: string; quantity: number; unitPrice: number };
type BillingService = { slug: string; title: string; category: string; items: BillingItem[] };
type BillingClient = { name: string; company: string; email: string; phone: string; address: string };
type BillingQuote = {
  id: string;
  quoteNo: string;
  clientName: string;
  company: string;
  email: string;
  phone: string;
  address: string;
  serviceSlug: string;
  serviceTitle: string;
  items: BillingItem[];
  notes: string;
  validityDays: number;
  discountPercent: number;
  gstPercent: number;
  subtotal: number;
  discountAmount: number;
  taxableAmount: number;
  taxAmount: number;
  total: number;
  status: string;
  createdAt: string;
};

const defaultNotes = "1. 50% advance payment required to initiate the project.\n2. Quotation is valid for the selected validity period only.";

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

function exportQuotePdf(quote: BillingQuote) {
  const doc = new jsPDF();
  doc.setFontSize(24);
  doc.setTextColor(37, 99, 235);
  doc.text("BNQinTECH", 14, 22);
  doc.setFontSize(9);
  doc.setTextColor(100, 100, 100);
  doc.text("Email: bnqintech@gmail.com | Phone: +91 92713 0782", 14, 34);
  doc.line(14, 40, 196, 40);

  doc.setFontSize(14);
  doc.setTextColor(37, 99, 235);
  doc.setFont("helvetica", "bold");
  doc.text("QUOTATION", 14, 52);
  doc.setFontSize(10);
  doc.setTextColor(0, 0, 0);
  doc.text("QUOTATION FOR:", 14, 64);
  doc.text("QUOTATION DETAILS:", 120, 64);

  doc.setFont("helvetica", "normal");
  doc.text(`Name: ${quote.clientName}`, 14, 71);
  if (quote.company) doc.text(`Company: ${quote.company}`, 14, 77);
  doc.text(`Email: ${quote.email}`, 14, 83);
  if (quote.phone) doc.text(`Phone: ${quote.phone}`, 14, 89);
  if (quote.address) doc.text(`Address: ${quote.address}`, 14, 95, { maxWidth: 86 });
  doc.text(`Quotation No: ${quote.quoteNo}`, 120, 71);
  doc.text(`Date: ${new Date(quote.createdAt).toLocaleDateString("en-IN")}`, 120, 77);
  doc.text(`Valid Till: ${quote.validityDays} Days`, 120, 83);

  autoTable(doc, {
    startY: 106,
    head: [["Description", "Qty", "Unit Price", "Amount"]],
    body: quote.items.map((item) => [
      item.description,
      item.quantity,
      formatCur(item.unitPrice),
      formatCur(item.quantity * item.unitPrice),
    ]),
    theme: "grid",
    headStyles: { fillColor: [37, 99, 235], textColor: [255, 255, 255] },
    styles: { fontSize: 9, cellPadding: 5 },
  });

  const finalY = (doc as any).lastAutoTable?.finalY || 116;
  doc.text("Important Notes & Terms:", 14, finalY + 16);
  doc.setTextColor(90, 90, 90);
  doc.text(quote.notes || defaultNotes, 14, finalY + 23, { maxWidth: 94 });
  doc.setTextColor(40, 40, 40);
  doc.text("Subtotal:", 130, finalY + 14);
  doc.text(formatCur(quote.subtotal), 165, finalY + 14);
  doc.text(`Discount (${quote.discountPercent}%):`, 130, finalY + 21);
  doc.text(`- ${formatCur(quote.discountAmount)}`, 165, finalY + 21);
  doc.text(`GST (${quote.gstPercent}%):`, 130, finalY + 28);
  doc.text(`+ ${formatCur(quote.taxAmount)}`, 165, finalY + 28);
  doc.setFillColor(37, 99, 235);
  doc.rect(124, finalY + 35, 72, 12, "F");
  doc.setTextColor(255, 255, 255);
  doc.setFont("helvetica", "bold");
  doc.text("Grand Total:", 130, finalY + 43);
  doc.text(formatCur(quote.total), 161, finalY + 43);
  doc.save(`${quote.quoteNo}_${quote.company || quote.clientName}.pdf`);
}

function QuotationContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [services, setServices] = useState<BillingService[]>([]);
  const [serviceSlug, setServiceSlug] = useState(searchParams.get("service") || "");
  const [client, setClient] = useState<BillingClient>({ name: "", company: "", email: "", phone: "", address: "" });
  const [meta, setMeta] = useState({ validityDays: 15, discountPercent: 0, gstPercent: 18, notes: defaultNotes });
  const [quote, setQuote] = useState<BillingQuote | null>(null);
  const [error, setError] = useState("");
  const [isSaving, setIsSaving] = useState(false);
  const [isConverting, setIsConverting] = useState(false);

  useEffect(() => {
    let mounted = true;
    Promise.all([
      readApi<BillingService[]>("/api/billing/services"),
      readApi<Partial<BillingClient> | null>("/api/billing/me").catch(() => null),
    ]).then(([serviceData, user]) => {
      if (!mounted) return;
      setServices(serviceData);
      if (user) setClient((prev) => ({ ...prev, ...user, company: prev.company || "" }));
    }).catch((err) => setError(err.message));
    return () => { mounted = false; };
  }, []);

  const grouped = useMemo(() => groupServices(services), [services]);
  const selectedService = services.find((service) => service.slug === serviceSlug);

  const updateClient = (field: keyof BillingClient, value: string) => {
    setClient((prev) => ({ ...prev, [field]: value }));
    setQuote(null);
  };

  const updateMeta = (field: keyof typeof meta, value: string) => {
    const numeric = field === "notes" ? value : Number(value);
    setMeta((prev) => ({ ...prev, [field]: numeric }));
    setQuote(null);
  };

  const createQuote = async () => {
    setError("");
    setIsSaving(true);
    try {
      const created = await readApi<BillingQuote>("/api/billing/quotes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ serviceSlug, client, ...meta }),
      });
      setQuote(created);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to create quotation.");
    } finally {
      setIsSaving(false);
    }
  };

  const convertToInvoice = async () => {
    if (!quote) return;
    setError("");
    setIsConverting(true);
    try {
      const invoice = await readApi<{ id: string }>(`/api/billing/quotes/${quote.id}/convert`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ dueDateDays: 7, sacCode: "998314" }),
      });
      router.push(`/invoice?invoiceId=${invoice.id}`);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to convert quotation.");
    } finally {
      setIsConverting(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 px-4 pb-12 pt-28 font-sans sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl space-y-6">
        <div className="flex flex-col justify-between gap-4 rounded-lg border border-slate-200 bg-white p-6 shadow-sm md:flex-row md:items-center">
          <div>
            <h1 className="text-2xl font-bold text-slate-950">Professional Quotation Generator</h1>
            <p className="text-sm text-slate-600">Backend-priced quotations with live client and service data.</p>
          </div>
          <Link href="/invoice" className="rounded-md border border-slate-300 px-4 py-2 text-sm font-bold text-slate-700 transition hover:bg-slate-50">
            Open Invoice Generator
          </Link>
        </div>

        {error ? <div className="rounded-lg border border-red-200 bg-red-50 p-4 text-sm font-semibold text-red-700">{error}</div> : null}

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="space-y-6 lg:col-span-2">
            <section className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="mb-4 border-b pb-2 text-base font-bold text-slate-950">1. Client Details</h2>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <input value={client.name} onChange={(e) => updateClient("name", e.target.value)} placeholder="Client Name *" className="rounded-md border border-slate-300 px-4 py-2.5 text-sm text-slate-950 outline-none focus:ring-2 focus:ring-blue-500" />
                <input value={client.company} onChange={(e) => updateClient("company", e.target.value)} placeholder="Company Name" className="rounded-md border border-slate-300 px-4 py-2.5 text-sm text-slate-950 outline-none focus:ring-2 focus:ring-blue-500" />
                <input value={client.email} onChange={(e) => updateClient("email", e.target.value)} placeholder="Email Address *" className="rounded-md border border-slate-300 px-4 py-2.5 text-sm text-slate-950 outline-none focus:ring-2 focus:ring-blue-500" />
                <input value={client.phone} onChange={(e) => updateClient("phone", e.target.value)} placeholder="Phone Number" className="rounded-md border border-slate-300 px-4 py-2.5 text-sm text-slate-950 outline-none focus:ring-2 focus:ring-blue-500" />
                <input value={client.address} onChange={(e) => updateClient("address", e.target.value)} placeholder="Full Billing Address" className="rounded-md border border-slate-300 px-4 py-2.5 text-sm text-slate-950 outline-none focus:ring-2 focus:ring-blue-500 md:col-span-2" />
              </div>
            </section>

            <section className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="mb-4 border-b pb-2 text-base font-bold text-slate-950">2. Service & Settings</h2>
              <select value={serviceSlug} onChange={(e) => { setServiceSlug(e.target.value); setQuote(null); }} className="mb-6 w-full rounded-md border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-950 outline-none focus:ring-2 focus:ring-blue-500">
                <option value="">-- Choose Service Package --</option>
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

              <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                <input type="number" value={meta.validityDays} onChange={(e) => updateMeta("validityDays", e.target.value)} className="rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-950" placeholder="Validity Days" />
                <input type="number" min="0" max="100" value={meta.discountPercent} onChange={(e) => updateMeta("discountPercent", e.target.value)} className="rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-950" placeholder="Discount %" />
                <input type="number" min="0" max="100" value={meta.gstPercent} onChange={(e) => updateMeta("gstPercent", e.target.value)} className="rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-950" placeholder="GST %" />
              </div>
              <textarea value={meta.notes} onChange={(e) => updateMeta("notes", e.target.value)} rows={3} className="mt-4 w-full rounded-md border border-slate-300 px-4 py-2 text-sm text-slate-950" />
            </section>

            <button onClick={createQuote} disabled={isSaving} className="w-full rounded-lg bg-slate-950 py-4 text-lg font-bold text-white shadow-md transition hover:bg-black disabled:opacity-60">
              {isSaving ? "Creating Backend Quotation..." : "Generate Live Quotation"}
            </button>
          </div>

          <aside className="space-y-6">
            {quote ? (
              <div className="sticky top-28 rounded-lg border border-slate-700 bg-slate-900 p-6 text-white shadow-xl">
                <div className="mb-4 flex items-center justify-between border-b border-slate-700 pb-3">
                  <h2 className="text-lg font-bold">Bill Summary</h2>
                  <span className="rounded bg-blue-600 px-2 py-1 text-xs font-bold">{quote.quoteNo}</span>
                </div>
                <p className="text-sm text-slate-400">Package<br /><span className="text-base font-semibold text-white">{quote.serviceTitle}</span></p>
                <div className="mt-4 space-y-3 border-t border-slate-700 pt-4 text-sm">
                  <div className="flex justify-between"><span>Subtotal</span><span>{formatCur(quote.subtotal)}</span></div>
                  <div className="flex justify-between text-red-300"><span>Discount ({quote.discountPercent}%)</span><span>- {formatCur(quote.discountAmount)}</span></div>
                  <div className="flex justify-between text-green-300"><span>GST ({quote.gstPercent}%)</span><span>+ {formatCur(quote.taxAmount)}</span></div>
                </div>
                <div className="mt-4 flex items-center justify-between rounded-md bg-slate-800 p-3">
                  <span className="text-lg font-bold">Grand Total</span>
                  <span className="text-xl font-black text-blue-300">{formatCur(quote.total)}</span>
                </div>
                <div className="mt-6 space-y-3">
                  <button onClick={() => exportQuotePdf(quote)} className="w-full rounded-md bg-blue-600 py-3 font-bold text-white transition hover:bg-blue-700">Download PDF</button>
                  <button onClick={convertToInvoice} disabled={isConverting} className="w-full rounded-md bg-emerald-600 py-3 font-bold text-white transition hover:bg-emerald-700 disabled:opacity-60">
                    {isConverting ? "Creating Invoice..." : "Convert to Final Invoice"}
                  </button>
                </div>
              </div>
            ) : (
              <div className="sticky top-28 rounded-lg border border-slate-200 bg-white p-8 text-center shadow-sm">
                <h3 className="mb-2 text-lg font-bold text-slate-950">No Quote Generated</h3>
                <p className="text-sm text-slate-500">Create a quotation to fetch final pricing, taxes, and totals from the backend.</p>
              </div>
            )}
          </aside>
        </div>
      </div>
    </div>
  );
}

export default function QuotationGenerator() {
  return (
    <Suspense fallback={<div className="pt-32 text-center text-sm font-semibold">Loading Quotation Generator...</div>}>
      <QuotationContent />
    </Suspense>
  );
}
