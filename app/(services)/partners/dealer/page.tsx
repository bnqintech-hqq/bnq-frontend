'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function DealerPartnerPage() {
  // Functional State for Dealer Levels
  const [selectedTier, setSelectedTier] = useState('regional');
  
  // Functional State for Dealer Tools Explorer
  const [activeTool, setActiveTool] = useState('billing');

  // Dynamic Content Data for Dealer Levels
  const tierDetails = {
    authorized: {
      name: "Authorized Dealer",
      discount: "15% Off",
      minWallet: "₹25,000",
      target: "Ideal for local IT consultants and independent software vendors.",
      perks: ["Standard API Access", "White-Label Storefront UI", "Email Support (Next Business Day)"]
    },
    regional: {
      name: "Regional Distributor",
      discount: "25% Off",
      minWallet: "₹1,00,000",
      target: "Perfect for established regional hosting agencies and tech providers.",
      perks: ["Advanced High-Speed API Access", "Custom Co-Branded Portal", "24/7 Priority Support (Slack & Chat)", "Dedicated Regional Rep"]
    },
    national: {
      name: "National Tier-1 Partner",
      discount: "40% Off",
      minWallet: "₹5,00,000",
      target: "Built for massive cloud distributors and enterpise system integrators.",
      perks: ["Unlimited API Calls & Core Access", "Fully Custom White-Label UI/UX", "Direct Line to Tier-3 Engineers", "Marketing Development Funds (MDF)"]
    }
  };

  // Interactive Content Data for Dealer Tools
  const toolsContent = {
    billing: {
      title: "Automated Multi-Tier Billing",
      desc: "Manage your sub-dealers and clients seamlessly. Set custom profit margins, generate automated tax invoices, and control credit limits from a unified wallet system.",
      icon: "💳"
    },
    api: {
      title: "Robust Infrastructure APIs",
      desc: "Integrate our cloud deployments, domain registrations, and server provisioning directly into your own existing software solutions with our developer-friendly, ultra-fast REST APIs.",
      icon: "🔌"
    },
    branding: {
      title: "Complete White-Label Autonomy",
      desc: "Your brand, our infrastructure. Your customers will never see the name BNQinTECH. Every dashboard, email alert, and support portal carries only your brand identity.",
      icon: "🏷️"
    }
  };

  return (
    <main className="min-h-screen pt-40 pb-20 bg-[#050812] text-slate-300 relative overflow-hidden">
      
      {/* 🌌 Premium Cyberpunk Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[450px] bg-blue-600/10 blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* 🔥 Hero Section */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <span className="text-cyan-400 font-bold tracking-widest uppercase text-xs mb-4 block animate-pulse">
            B2B Distribution Network
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-white mb-6 tracking-tight leading-tight">
            Become an Authorized <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              BNQinTECH Dealer
            </span>
          </h1>
          <p className="text-slate-400 text-base md:text-lg leading-relaxed mb-10 max-w-2xl mx-auto font-light">
            Bulk purchase cloud computing, enterprise software licenses, and hosting credits at unparalleled wholesale rates. Build and power your own distributor network.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="#calculator" className="px-8 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-lg transition-all duration-300 shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)]">
              Explore Dealer Tiers
            </Link>
          </div>
        </div>

        {/* ⚙️ WORKING INTERACTIVE DEALER TOOLS EXPLORER */}
        <div className="bg-slate-900/30 border border-slate-800 rounded-3xl p-6 md:p-10 mb-24 max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Next-Generation Dealer Ecosystem</h2>
            <p className="text-slate-400 text-sm">Click the systems below to view your distribution tech stack.</p>
          </div>
          
          {/* Functional Navigation Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {Object.keys(toolsContent).map((key) => (
              <button
                key={key}
                onClick={() => setActiveTool(key)}
                className={`px-6 py-3 rounded-xl text-sm font-bold transition-all duration-300 ${
                  activeTool === key 
                  ? 'bg-blue-500/20 text-blue-400 border border-blue-500/50 shadow-[0_0_15px_rgba(59,130,246,0.15)]' 
                  : 'bg-slate-800/50 text-slate-400 border border-slate-700 hover:border-slate-500'
                }`}
              >
                {toolsContent[key as keyof typeof toolsContent].title}
              </button>
            ))}
          </div>

          {/* Dynamic Tools Content Card */}
          <div className="bg-[#0a0f1e] border border-slate-800 rounded-2xl p-8 flex flex-col sm:flex-row items-center gap-8 shadow-inner min-h-[180px]">
            <div className="w-16 h-16 bg-slate-800/40 rounded-xl flex items-center justify-center text-3xl shrink-0">
              {toolsContent[activeTool as keyof typeof toolsContent].icon}
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2">
                {toolsContent[activeTool as keyof typeof toolsContent].title}
              </h3>
              <p className="text-slate-400 text-sm md:text-base leading-relaxed max-w-3xl">
                {toolsContent[activeTool as keyof typeof toolsContent].desc}
              </p>
            </div>
          </div>
        </div>

        {/* 📊 WORKING INTERACTIVE DEALER CALCULATOR SECTION */}
        <div id="calculator" className="mb-24 text-center max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-4">Flexible Wholesale Brackets</h2>
          <p className="text-slate-400 mb-10 text-sm md:text-base">Select a tier below to evaluate minimum commitments and custom margin breakdowns dynamically.</p>
          
          {/* Functional Selector Tab Bracket */}
          <div className="bg-[#0a0f1e] border border-slate-800 p-1.5 rounded-2xl inline-flex gap-2 mb-12 w-full max-w-xl">
            {Object.keys(tierDetails).map((key) => (
              <button
                key={key}
                onClick={() => setSelectedTier(key)}
                className={`flex-1 py-3 text-xs md:text-sm font-bold rounded-xl transition-all duration-300 whitespace-nowrap ${
                  selectedTier === key 
                  ? 'bg-blue-600 text-white shadow-lg' 
                  : 'text-slate-400 hover:text-white bg-transparent'
                }`}
              >
                {tierDetails[key as keyof typeof tierDetails].name}
              </button>
            ))}
          </div>

          {/* Dynamic Tier Specification Display */}
          <div className="grid md:grid-cols-12 gap-8 bg-slate-900/40 border border-slate-800 rounded-3xl p-8 text-left relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-500/5 blur-[80px] rounded-full pointer-events-none"></div>
            
            {/* Discount Summary Card */}
            <div className="md:col-span-5 flex flex-col justify-center border-b md:border-b-0 md:border-r border-slate-800 pb-6 md:pb-0 md:pr-8">
              <span className="text-xs uppercase font-mono tracking-widest text-slate-500 mb-1">Guaranteed Margin</span>
              <h3 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 mb-4">
                {tierDetails[selectedTier as keyof typeof tierDetails].discount}
              </h3>
              <span className="text-xs uppercase font-mono tracking-widest text-slate-500 mb-1">Min. Initial Wallet Setup</span>
              <span className="text-2xl font-bold text-white">
                {tierDetails[selectedTier as keyof typeof tierDetails].minWallet}
              </span>
            </div>

            {/* Target & Perks list */}
            <div className="md:col-span-7 flex flex-col justify-between">
              <div>
                <h4 className="text-lg font-bold text-white mb-2">Tier Overview</h4>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  {tierDetails[selectedTier as keyof typeof tierDetails].target}
                </p>
                
                <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-3">Included Dealer Benefits:</h4>
                <ul className="space-y-2.5 text-sm">
                  {tierDetails[selectedTier as keyof typeof tierDetails].perks.map((perk, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-slate-300">
                      <span className="text-cyan-400 font-bold">✓</span> {perk}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* 🚀 Application CTA Section */}
        <div className="bg-gradient-to-br from-slate-900 via-[#0a0f1e] to-black border border-slate-800 rounded-3xl p-10 md:p-16 text-center max-w-4xl mx-auto relative overflow-hidden">
          <h2 className="text-3xl font-bold text-white mb-4">Apply For Dealership Network</h2>
          <p className="text-slate-400 mb-8 max-w-xl mx-auto text-sm md:text-base">
            Submit your company credentials. Our enterprise partnership team will verify your tax IDs and business scale to set up your bulk credit wallet.
          </p>
          <button className="px-10 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-bold rounded-lg transition-all duration-300 shadow-lg shadow-blue-900/30">
            Submit Dealer Application
          </button>
        </div>

      </div>
    </main>
  );
}