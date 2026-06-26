'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function ResellerPartnerPage() {
  // Functional State for Resource Customizer / Scale Selector
  const [activeScale, setActiveScale] = useState('medium');

  // Dynamic Scale Plan Data
  const scalePlans = {
    small: {
      tierName: "Reseller Startup",
      price: "₹1,499",
      accounts: "Up to 25 cPanel Accounts",
      storage: "100 GB NVMe SSD Storage",
      bandwidth: "Unmetered Bandwidth",
      target: "Perfect for freelance developers managing a handful of local business websites."
    },
    medium: {
      tierName: "Reseller Growth",
      price: "₹2,999",
      accounts: "Up to 60 cPanel Accounts",
      storage: "250 GB NVMe SSD Storage",
      bandwidth: "Unmetered Bandwidth",
      target: "Optimized for growing design studios and boutique IT marketing agencies."
    },
    large: {
      tierName: "Reseller Infrastructure Pro",
      price: "₹5,499",
      accounts: "Up to 150 cPanel Accounts",
      storage: "500 GB NVMe SSD Storage",
      bandwidth: "Unmetered Bandwidth",
      target: "Built for hosting businesses scaling rapidly with extensive multi-tenant setups."
    }
  };

  return (
    <main className="min-h-screen pt-40 pb-20 bg-[#050812] text-slate-300 relative overflow-hidden">
      
      {/* 🌌 Premium Royal Blue Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[450px] bg-blue-600/10 blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* 🔥 Hero Section */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <span className="text-blue-400 font-bold tracking-widest uppercase text-xs mb-4 block animate-pulse">
            White-Label Hosting Architecture
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-white mb-6 tracking-tight leading-tight">
            Launch Your Own <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              Web Hosting Business
            </span>
          </h1>
          <p className="text-slate-400 text-base md:text-lg leading-relaxed mb-10 max-w-2xl mx-auto font-light">
            Rent our enterprise-grade server infrastructure and re-sell it to your own clients under your own brand. Set your own packages, custom prices, and keep 100% of the profits.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="#calculator" className="px-8 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-lg transition-all duration-300 shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)]">
              Choose Your Reseller Scale
            </Link>
          </div>
        </div>

        {/* ⚙️ WORKING RESOURCE CUSTOMIZER SECTION */}
        <div id="calculator" className="mb-24 text-center max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Select Your Operational Scale</h2>
          <p className="text-slate-400 mb-10 text-sm">Click on the brackets below to scale allocation and check your wholesale package dynamically.</p>
          
          {/* Functional Brackets Tabs */}
          <div className="bg-[#0a0f1e] border border-slate-800 p-1.5 rounded-2xl inline-flex gap-2 mb-12 w-full max-w-xl">
            <button
              onClick={() => setActiveScale('small')}
              className={`flex-1 py-3 text-xs md:text-sm font-bold rounded-xl transition-all duration-300 ${
                activeScale === 'small' ? 'bg-blue-600 text-white shadow-lg' : 'text-slate-400 hover:text-white'
              }`}
            >
              1 - 25 Clients
            </button>
            <button
              onClick={() => setActiveScale('medium')}
              className={`flex-1 py-3 text-xs md:text-sm font-bold rounded-xl transition-all duration-300 ${
                activeScale === 'medium' ? 'bg-blue-600 text-white shadow-lg' : 'text-slate-400 hover:text-white'
              }`}
            >
              25 - 60 Clients
            </button>
            <button
              onClick={() => setActiveScale('large')}
              className={`flex-1 py-3 text-xs md:text-sm font-bold rounded-xl transition-all duration-300 ${
                activeScale === 'large' ? 'bg-blue-600 text-white shadow-lg' : 'text-slate-400 hover:text-white'
              }`}
            >
              60 - 150 Clients
            </button>
          </div>

          {/* Dynamic Specs Panel Display */}
          <div className="grid md:grid-cols-12 gap-8 bg-slate-900/40 border border-slate-800 rounded-3xl p-8 md:p-10 text-left relative">
            
            {/* Price block */}
            <div className="md:col-span-5 flex flex-col justify-center border-b md:border-b-0 md:border-r border-slate-800 pb-6 md:pb-0 md:pr-8">
              <span className="text-xs uppercase font-mono tracking-widest text-slate-500 mb-1">Recommended Tier</span>
              <h4 className="text-xl font-bold text-white mb-4">{scalePlans[activeScale as keyof typeof scalePlans].tierName}</h4>
              <span className="text-xs uppercase font-mono tracking-widest text-slate-500 mb-1">Wholesale Cost</span>
              <div className="flex items-baseline gap-1">
                <span className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                  {scalePlans[activeScale as keyof typeof scalePlans].price}
                </span>
                <span className="text-slate-500 text-sm">/month</span>
              </div>
            </div>

            {/* Spec Details list */}
            <div className="md:col-span-7 flex flex-col justify-between pt-2 md:pt-0">
              <div>
                <h4 className="text-sm font-mono uppercase tracking-wider text-slate-400 mb-4">Allocated Whitelist Resources:</h4>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-3 text-sm text-slate-200">
                    <span className="text-cyan-400 font-bold">✓</span> {scalePlans[activeScale as keyof typeof scalePlans].accounts}
                  </li>
                  <li className="flex items-center gap-3 text-sm text-slate-200">
                    <span className="text-cyan-400 font-bold">✓</span> {scalePlans[activeScale as keyof typeof scalePlans].storage}
                  </li>
                  <li className="flex items-center gap-3 text-sm text-slate-200">
                    <span className="text-cyan-400 font-bold">✓</span> {scalePlans[activeScale as keyof typeof scalePlans].bandwidth}
                  </li>
                </ul>
                <p className="text-slate-500 text-xs leading-relaxed italic border-t border-slate-800/60 pt-4">
                  {scalePlans[activeScale as keyof typeof scalePlans].target}
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* ✨ WHM / Technical Reseller Perks Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-24">
          <div className="bg-[#0a0f1e] border border-slate-800/80 p-8 rounded-2xl hover:border-slate-700 transition-colors">
            <div className="text-2xl mb-4">🎛️</div>
            <h3 className="text-lg font-bold text-white mb-2">WHM (WebHostManager)</h3>
            <p className="text-slate-400 text-xs md:text-sm leading-relaxed">
              Complete control panel access. Create separate hosting accounts, allocate space limits, modify bandwidth configs, and manage individual user cPanels effortlessly.
            </p>
          </div>

          <div className="bg-[#0a0f1e] border border-slate-800/80 p-8 rounded-2xl hover:border-slate-700 transition-colors">
            <div className="text-2xl mb-4">📛</div>
            <h3 className="text-lg font-bold text-white mb-2">Private Nameservers</h3>
            <p className="text-slate-400 text-xs md:text-sm leading-relaxed">
              Maintain full autonomy. Point your client domains to your own personalized white-label nameservers (e.g., ns1.yourbrand.com, ns2.yourbrand.com).
            </p>
          </div>

          <div className="bg-[#0a0f1e] border border-slate-800/80 p-8 rounded-2xl hover:border-slate-700 transition-colors">
            <div className="text-2xl mb-4">⚙️</div>
            <h3 className="text-lg font-bold text-white mb-2">Automated WHMCS Integration</h3>
            <p className="text-slate-400 text-xs md:text-sm leading-relaxed">
              Automate your billing cycle. Ready API compatibility to hook into WHMCS software for automated account provisioning, invoices, and suspension handlers.
            </p>
          </div>
        </div>

        {/* 🚀 Application CTA Section */}
        <div className="bg-gradient-to-br from-slate-900 to-black border border-slate-800 rounded-3xl p-10 md:p-16 text-center max-w-4xl mx-auto relative overflow-hidden">
          <h2 className="text-3xl font-bold text-white mb-4">Deploy Your Reseller Dashboard</h2>
          <p className="text-slate-400 mb-8 max-w-xl mx-auto text-sm md:text-base">
            Instantly set up your root WHM access. All server frameworks come with migration kits to move your existing standalone client backups seamlessly.
          </p>
          <button className="px-10 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-bold rounded-lg transition-all duration-300 shadow-lg shadow-blue-900/30">
            Set Up Reseller Account
          </button>
        </div>

      </div>
    </main>
  );
}