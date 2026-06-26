import React from "react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "E-Commerce Platform Development | BNQinTECH",
  description: "Build high-converting, scalable e-commerce portals. We specialize in custom multi-vendor marketplaces, B2B platforms, and seamless payment integrations.",
};

// Strict TypeScript Interfaces
interface Feature {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface Integration {
  name: string;
  category: string;
}

export default function EcommercePortalPage() {
  const features: Feature[] = [
    {
      id: "multi-vendor",
      title: "Multi-Vendor Marketplaces",
      description: "Build platforms like Amazon or Flipkart with vendor dashboards, commission management, and automated payouts.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      id: "payments",
      title: "Global Payment Gateways",
      description: "Seamlessly integrate secure checkout providers, UPI, wallets, and cards for frictionless purchases and higher conversion rates.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
      ),
    },
    {
      id: "inventory",
      title: "Smart Inventory & ERP",
      description: "Real-time stock syncing, order tracking, and integration with popular ERPs to automate your supply chain.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      ),
    },
    {
      id: "analytics",
      title: "AI-Powered Analytics",
      description: "Understand customer behavior, cart abandonment rates, and personalize recommendations using advanced data analytics.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
    },
  ];

  const integrations: Integration[] = [
    { name: "Shopify Plus", category: "Platform" },
    { name: "WooCommerce", category: "Platform" },
    { name: "Custom Next.js", category: "Headless" },
    { name: "UPI", category: "Payment" },
    { name: "Stripe", category: "Payment" },
    { name: "Algolia", category: "Search" },
  ];

  return (
    <main className="min-h-screen bg-white pt-24 pb-16 font-sans">
      
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-50 border border-orange-100 text-orange-600 font-bold uppercase tracking-wider text-[11px] mb-8">
              <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
              Portal Solutions
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-6">
              Build Stores That <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">
                Actually Convert.
              </span>
            </h1>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed max-w-lg">
              We design and develop lightning-fast e-commerce platforms focused on user experience, secure checkouts, and seamless inventory management. Stop losing customers to slow websites.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl transition-all shadow-xl hover:-translate-y-1 text-center">
                Request a Proposal
              </Link>
            </div>
          </div>

          {/* Hero Abstract Graphic */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-orange-100 to-red-50 rounded-[3rem] transform rotate-3 scale-105 -z-10"></div>
            <div className="bg-white p-8 rounded-[2rem] shadow-2xl border border-slate-100">
              {/* Mockup UI */}
              <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-6">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <div className="h-4 w-32 bg-slate-100 rounded-full"></div>
              </div>
              <div className="space-y-4">
                <div className="flex gap-4 items-center">
                  <div className="w-20 h-20 bg-slate-100 rounded-xl"></div>
                  <div className="flex-1 space-y-2">
                    <div className="h-4 w-3/4 bg-slate-200 rounded"></div>
                    <div className="h-3 w-1/2 bg-slate-100 rounded"></div>
                    <div className="h-5 w-1/4 bg-orange-100 rounded mt-2"></div>
                  </div>
                </div>
                <div className="flex gap-4 items-center">
                  <div className="w-20 h-20 bg-slate-100 rounded-xl"></div>
                  <div className="flex-1 space-y-2">
                    <div className="h-4 w-2/3 bg-slate-200 rounded"></div>
                    <div className="h-3 w-1/2 bg-slate-100 rounded"></div>
                    <div className="h-5 w-1/4 bg-orange-100 rounded mt-2"></div>
                  </div>
                </div>
                <div className="pt-6 mt-4 border-t border-slate-100">
                  <div className="h-10 w-full bg-slate-900 rounded-lg"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-slate-50 py-24 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Everything You Need to Sell Online</h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">From B2C retail stores to complex B2B wholesale platforms, we architect solutions that scale with your sales.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => (
              <div key={feature.id} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:border-orange-300 hover:shadow-lg transition-all group">
                <div className="w-12 h-12 bg-orange-50 text-orange-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-orange-600 group-hover:text-white transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Marquee/Tags */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold text-slate-900 mb-10">Seamless Integrations with Industry Leaders</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {integrations.map((item, idx) => (
              <div key={idx} className="px-6 py-3 bg-slate-50 border border-slate-200 rounded-full flex items-center gap-3 hover:border-blue-400 transition-colors cursor-default">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">{item.category}</span>
                <span className="font-semibold text-slate-800">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
