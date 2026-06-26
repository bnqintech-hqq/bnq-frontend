"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function ResellerHostingPage() {
  const [isAnnual, setIsAnnual] = useState(true);

  const pricingData = [
    {
      name: "Reseller Start",
      monthly: 1299,
      yearly: 999,
      accounts: "30 cPanel Accounts",
      storage: "100 GB NVMe",
      features: ["Free WHM License", "100% White Labeled", "Free SSL Certificates", "Daily Automated Backups"],
    },
    {
      name: "Reseller Pro",
      monthly: 2499,
      yearly: 1999,
      isPopular: true,
      accounts: "100 cPanel Accounts",
      storage: "250 GB NVMe",
      features: ["Free WHM License", "Free WHMCS Billing Tool", "Priority Tech Support", "Custom Private Nameservers"],
    },
  ];

  return (
    <main className="min-h-screen bg-slate-50 pt-24 pb-16 font-sans">
      
      {/* Hero Section */}
      <section className="bg-slate-900 py-24 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-500/20 text-blue-300 font-bold uppercase tracking-widest text-[11px] mb-8 border border-blue-500/30">
            Start Your Hosting Business
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
            100% White-Label <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
              Reseller Hosting
            </span>
          </h1>
          <p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto">
            Host your own clients with your own brand name. We manage the servers, security, and infrastructure behind the scenes. You keep 100% of the profits.
          </p>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="max-w-5xl mx-auto px-4 py-20 -mt-10 relative z-10">
        
        {/* Toggle */}
        <div className="flex justify-center items-center gap-4 mb-12 bg-white w-max mx-auto px-6 py-4 rounded-full shadow-lg border border-slate-100">
          <span className={`text-sm font-bold ${!isAnnual ? 'text-slate-900' : 'text-slate-500'}`}>Monthly</span>
          <button onClick={() => setIsAnnual(!isAnnual)} className="relative inline-flex h-8 w-16 items-center rounded-full bg-blue-600 transition-colors">
            <span className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform ${isAnnual ? 'translate-x-9' : 'translate-x-1'}`} />
          </button>
          <span className={`text-sm font-bold flex items-center gap-2 ${isAnnual ? 'text-slate-900' : 'text-slate-500'}`}>
            Yearly <span className="text-green-600 ml-1">(-20%)</span>
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {pricingData.map((plan, idx) => (
            <div key={idx} className={`bg-white rounded-3xl p-8 lg:p-10 transition-all ${plan.isPopular ? 'ring-2 ring-blue-600 shadow-2xl relative scale-105' : 'border border-slate-200 shadow-sm'}`}>
              {plan.isPopular && <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest shadow-md">Most Popular</span>}
              <h3 className="text-2xl font-bold text-slate-900 mb-2">{plan.name}</h3>
              <p className="text-slate-500 text-sm mb-6 border-b border-slate-100 pb-6">Host up to <strong className="text-slate-800">{plan.accounts}</strong></p>
              
              <div className="mb-8">
                <span className="text-5xl font-extrabold text-slate-900">₹{isAnnual ? plan.yearly : plan.monthly}</span>
                <span className="text-slate-500 font-medium">/mo</span>
                {isAnnual && <p className="text-xs text-green-600 font-bold mt-2">Billed ₹{plan.yearly * 12} annually</p>}
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 text-slate-800 font-bold bg-slate-50 p-3 rounded-lg">
                  💾 {plan.storage} Space
                </li>
                {plan.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-center gap-3 text-slate-600 text-sm font-medium pl-2">
                    <span className="text-blue-500">✓</span> {feature}
                  </li>
                ))}
              </ul>


              <Link
                href="/company/contact"
                className={`block w-full rounded-xl py-4 text-center font-bold transition-colors ${plan.isPopular ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-slate-900 text-white hover:bg-slate-800'}`}
              >
                Inquire About Reseller Plan
              </Link>

              <button className={`w-full py-4 rounded-xl font-bold transition-colors ${plan.isPopular ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-slate-900 text-white hover:bg-slate-800'}`}>
                Buy Reseller Plan
              </button>
            </div>
          ))}
        </div>
      </section>

    </main>
  );

}


