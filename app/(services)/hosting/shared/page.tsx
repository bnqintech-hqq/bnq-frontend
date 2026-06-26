"use client";

import React, { useState } from "react";
import Link from "next/link";

interface PricingPlan {
  name: string;
  monthly: number;
  yearly: number;
  isPopular?: boolean;
  features: string[];
}

const pricingData: PricingPlan[] = [
  {
    name: "Starter",
    monthly: 149,
    yearly: 99,
    features: ["1 Website", "10 GB NVMe SSD", "Free SSL Certificate", "5 Business Emails", "Standard Support"],
  },
  {
    name: "Growth",
    monthly: 299,
    yearly: 199,
    isPopular: true,
    features: ["10 Websites", "50 GB NVMe SSD", "Free Domain (1st Year)", "Unlimited Emails", "Priority 24/7 Support"],
  },
  {
    name: "Pro",
    monthly: 499,
    yearly: 349,
    features: ["Unlimited Websites", "100 GB NVMe SSD", "Free Domain (1st Year)", "Free Daily Backups", "Dedicated IP Address"],
  },
];

export default function SharedHostingPage() {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <main className="min-h-screen bg-slate-50 pt-30 pb-16 font-sans">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 font-bold uppercase tracking-wider text-xs mb-6">
          Fast & Reliable
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight mb-6">
          Web Hosting That <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
            Speeds Up Your Success
          </span>
        </h1>
        <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto">
          Get your website online in minutes with our ultra-fast NVMe servers, free SSL, and 1-click WordPress installation.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="flex justify-center items-center gap-4 mb-12">
          <span className={`text-sm font-bold ${!isAnnual ? "text-slate-900" : "text-slate-500"}`}>Monthly</span>
          <button
            type="button"
            onClick={() => setIsAnnual(!isAnnual)}
            className="relative inline-flex h-8 w-16 items-center rounded-full bg-blue-600 transition-colors"
            aria-label="Toggle billing cycle"
          >
            <span className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform ${isAnnual ? "translate-x-9" : "translate-x-1"}`} />
          </button>
          <span className={`text-sm font-bold flex items-center gap-2 ${isAnnual ? "text-slate-900" : "text-slate-500"}`}>
            Yearly <span className="px-2 py-0.5 bg-green-100 text-green-700 rounded-full text-xs">Save 30%</span>
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pricingData.map((plan, idx) => (
            <div
              key={idx}
              className={`bg-white rounded-3xl p-8 transition-all ${
                plan.isPopular
                  ? "ring-2 ring-blue-600 shadow-xl lg:-translate-y-4 relative"
                  : "border border-slate-200 shadow-sm hover:border-blue-300"
              }`}
            >
              {plan.isPopular && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                  Best Value
                </span>
              )}

              <h3 className="text-xl font-bold text-slate-900 mb-4">{plan.name}</h3>
              <div className="mb-6">
                <span className="text-4xl font-extrabold text-slate-900">₹{isAnnual ? plan.yearly : plan.monthly}</span>
                <span className="text-slate-500 font-medium">/mo</span>
                {isAnnual && <p className="text-xs text-green-600 font-bold mt-2">Billed ₹{plan.yearly * 12} annually</p>}
              </div>

              <Link
                href="/company/contact"
                className="mb-8 block w-full rounded-2xl bg-slate-950 px-5 py-4 text-center text-sm font-bold text-white shadow-xl shadow-slate-950/20 transition duration-200 hover:-translate-y-0.5 hover:bg-blue-600 hover:shadow-blue-900/20"
              >
                Inquire About {plan.name}
              </Link>

              <ul className="space-y-4">
                {plan.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-3 text-slate-600 text-sm font-medium">
                    <span className="text-blue-500 font-bold">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
