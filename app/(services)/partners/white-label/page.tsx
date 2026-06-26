'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function WhiteLabelPartnerPage() {
  // Functional State for Infrastructure Configurator
  const [activeTier, setActiveTier] = useState('enterprise');

  // Dynamic Infrastructure Configurations Data
  const infraTiers = {
    growth: {
      name: "White-Label Core",
      price: "₹8,499",
      compute: "Dedicated 16 vCPU / 32 GB RAM Cluster",
      storage: "1 TB NVMe SSD Storage Array",
      networks: "1 Gbps Isolated Port / Custom Routing",
      target: "Best for established agencies rebranding cloud infrastructure for mid-sized business clients."
    },
    enterprise: {
      name: "White-Label Advanced",
      price: "₹16,999",
      compute: "Dedicated 32 vCPU / 64 GB RAM Cluster",
      storage: "2.5 TB NVMe SSD Storage Array",
      networks: "10 Gbps Burst-Ready Port / Anycast DNS",
      target: "Engineered for high-scale IT distributors and software houses requiring full automation infrastructure."
    },
    elite: {
      name: "Custom Whitelabel Cluster",
      price: "Custom",
      compute: "Hyper-Scalable Private Cloud Hardware",
      storage: "On-Demand High-IOPS NVMe SAN Storage",
      networks: "Isolated Private VLAN / Dedicated Core Switch",
      target: "Built for global SaaS companies and national network providers demanding total bare-metal isolation."
    }
  };

  return (
    <main className="min-h-screen pt-40 pb-20 bg-[#050812] text-slate-300 relative overflow-hidden font-sans">
      
      {/* 🌌 Ultra Premium Indigo Deep Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-indigo-600/10 blur-[160px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* 🔥 Hero Section */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <span className="text-indigo-400 font-bold tracking-widest uppercase text-xs mb-4 block animate-pulse">
            Total Brand Autonomy
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-white mb-6 tracking-tight leading-tight">
            Our Infrastructure. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400">
              Your Complete Brand.
            </span>
          </h1>
          <p className="text-slate-400 text-base md:text-lg leading-relaxed mb-10 max-w-2xl mx-auto font-light">
            Own an elite cloud platform instantly. Sell cloud hosting, virtual datacenters, and corporate architecture entirely under your name. No BNQinTECH traces—ever.
          </p>

          <div className="flex justify-center">
            <Link href="#configurator" className="px-8 py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-lg transition-all duration-300 shadow-[0_0_20px_rgba(79,70,229,0.3)] hover:shadow-[0_0_30px_rgba(79,70,229,0.5)]">
              Configure Brand Cluster
            </Link>
          </div>
        </div>

        {/* ⚙️ WORKING INFRASTRUCTURE CONFIGURATOR SECTION */}
        <div id="configurator" className="mb-24 text-center max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Select Your Backend Capacity</h2>
          <p className="text-slate-400 mb-10 text-sm">Toggle through the architectures below to review server specifications and wholesale costing models live.</p>
          
          {/* Functional Tier Selection Brackets */}
          <div className="bg-[#0a0f1e] border border-slate-800 p-1.5 rounded-2xl inline-flex gap-2 mb-12 w-full max-w-xl">
            {Object.keys(infraTiers).map((key) => (
              <button
                key={key}
                onClick={() => setActiveTier(key)}
                className={`flex-1 py-3 text-xs md:text-sm font-bold rounded-xl transition-all duration-300 whitespace-nowrap ${
                  activeTier === key ? 'bg-indigo-600 text-white shadow-lg' : 'text-slate-400 hover:text-white bg-transparent'
                }`}
              >
                {infraTiers[key as keyof typeof infraTiers].name}
              </button>
            ))}
          </div>

          {/* Dynamic Configuration Card Display */}
          <div className="grid md:grid-cols-12 gap-8 bg-slate-900/40 border border-slate-800 rounded-3xl p-8 md:p-10 text-left relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/5 blur-[90px] rounded-full pointer-events-none"></div>
            
            {/* Left Pricing Box */}
            <div className="md:col-span-5 flex flex-col justify-center border-b md:border-b-0 md:border-r border-slate-800 pb-6 md:pb-0 md:pr-8">
              <span className="text-xs uppercase font-mono tracking-widest text-slate-500 mb-1">Assigned Platform Plan</span>
              <h4 className="text-xl font-bold text-white mb-4">{infraTiers[activeTier as keyof typeof infraTiers].name}</h4>
              <span className="text-xs uppercase font-mono tracking-widest text-slate-500 mb-1">Wholesale Cost Allocation</span>
              <div className="flex items-baseline gap-1">
                <span className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400">
                  {infraTiers[activeTier as keyof typeof infraTiers].price}
                </span>
                {infraTiers[activeTier as keyof typeof infraTiers].price !== "Custom" && <span className="text-slate-500 text-sm">/month</span>}
              </div>
            </div>

            {/* Right Resource Specification List */}
            <div className="md:col-span-7 flex flex-col justify-between pt-2 md:pt-0">
              <div>
                <h4 className="text-sm font-mono uppercase tracking-wider text-slate-400 mb-4">Dedicated White-label Nodes:</h4>
                <ul className="space-y-3.5 mb-6 text-sm">
                  <li className="flex items-center gap-3 text-slate-200">
                    <span className="text-purple-400 font-bold">💎</span> {infraTiers[activeTier as keyof typeof infraTiers].compute}
                  </li>
                  <li className="flex items-center gap-3 text-slate-200">
                    <span className="text-purple-400 font-bold">💎</span> {infraTiers[activeTier as keyof typeof infraTiers].storage}
                  </li>
                  <li className="flex items-center gap-3 text-slate-200">
                    <span className="text-purple-400 font-bold">💎</span> {infraTiers[activeTier as keyof typeof infraTiers].networks}
                  </li>
                </ul>
                <p className="text-slate-500 text-xs leading-relaxed italic border-t border-slate-800/60 pt-4">
                  {infraTiers[activeTier as keyof typeof infraTiers].target}
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* ✨ Invisible Core Framework Perks Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-24">
          <div className="bg-[#0a0f1e] border border-slate-800/80 p-8 rounded-2xl hover:border-purple-500/30 transition-colors">
            <div className="text-2xl mb-4">🔌</div>
            <h3 className="text-lg font-bold text-white mb-2">RESTful Automation APIs</h3>
            <p className="text-slate-400 text-xs leading-relaxed">
              Complete programmatic deployment control. Hook your custom dashboard or platform portal into our server backend endpoints to spin up or wipe nodes in seconds.
            </p>
          </div>

          <div className="bg-[#0a0f1e] border border-slate-800/80 p-8 rounded-2xl hover:border-purple-500/30 transition-colors">
            <div className="text-2xl mb-4">🌐</div>
            <h3 className="text-lg font-bold text-white mb-2">Anycast White-Label DNS</h3>
            <p className="text-slate-400 text-xs leading-relaxed">
              Deploy your own independent global network nameservers. We map our top-tier server routing arrays under your specialized root domains for complete system camouflage.
            </p>
          </div>

          <div className="bg-[#0a0f1e] border border-slate-800/80 p-8 rounded-2xl hover:border-purple-500/30 transition-colors">
            <div className="text-2xl mb-4">🧱</div>
            <h3 className="text-lg font-bold text-white mb-2">Isolated Virtual Datacenters</h3>
            <p className="text-slate-400 text-xs leading-relaxed">
              Total bare-metal network isolation. Your custom platform sits securely behind strict private VLAN architectures, completely segregated from other client profiles.
            </p>
          </div>
        </div>

        {/* 🚀 High-End Enterprise CTA Section */}
        <div className="bg-gradient-to-br from-indigo-950/40 via-[#0a0f1e] to-black border border-indigo-500/20 rounded-3xl p-10 md:p-16 text-center max-w-4xl mx-auto relative overflow-hidden">
          <h2 className="text-3xl font-bold text-white mb-4">Initialize Platform Deployment</h2>
          <p className="text-slate-400 mb-8 max-w-xl mx-auto text-sm md:text-base">
            Partner with BNQinTECH to claim infrastructure supremacy. Let our engineering specialists prepare your custom isolated cluster and white-labeled API architecture keys.
          </p>
          <button className="px-10 py-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-500 hover:from-indigo-500 hover:to-purple-500 text-white font-bold rounded-lg transition-all duration-300 shadow-lg shadow-indigo-900/40">
            Request White-Label API Access
          </button>
        </div>

      </div>
    </main>
  );
}