'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function ChannelPartnerPage() {
  // Functional State for Partner Benefits Explorer
  const [activeBenefit, setActiveBenefit] = useState('margins');

  // Interactive Content Data for Benefits
  const benefitsContent = {
    margins: {
      title: "Industry-Leading Margins",
      desc: "Earn up to 30% recurring commissions on every client you bring. We offer highly competitive wholesale pricing, allowing you to set your own retail prices and maximize your profits.",
      icon: "💰",
      color: "text-emerald-400",
      bg: "bg-emerald-500/10",
      border: "border-emerald-500/50"
    },
    support: {
      title: "Priority Partner Support",
      desc: "Skip the queue. As a Channel Partner, you get a dedicated Account Manager and priority access to our Tier-3 engineering team via phone, chat, and exclusive Slack channels.",
      icon: "🤝",
      color: "text-blue-400",
      bg: "bg-blue-500/10",
      border: "border-blue-500/50"
    },
    marketing: {
      title: "Co-Branded Marketing Assets",
      desc: "Get access to white-label pitch decks, technical whitepapers, and co-branded marketing materials to help you close deals faster and build trust with your clients.",
      icon: "📈",
      color: "text-purple-400",
      bg: "bg-purple-500/10",
      border: "border-purple-500/50"
    },
    platform: {
      title: "Centralized Management Portal",
      desc: "Manage hundreds of clients from a single, unified dashboard. Easily deploy servers, monitor uptime, handle billing, and assign client-level access with a few clicks.",
      icon: "🖥️",
      color: "text-cyan-400",
      bg: "bg-cyan-500/10",
      border: "border-cyan-500/50"
    }
  };

  return (
    <main className="min-h-screen pt-40 pb-20 bg-[#050812] text-slate-300 relative overflow-hidden">
      
      {/* 🌌 Premium Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[450px] bg-blue-600/15 blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* 🔥 Hero Section */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <span className="text-blue-400 font-bold tracking-widest uppercase text-xs mb-4 block animate-pulse">
            BNQinTECH Partner Network
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-white mb-6 tracking-tight leading-tight">
            Grow Your Business as a <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
              Channel Partner
            </span>
          </h1>
          <p className="text-slate-400 text-base md:text-lg leading-relaxed mb-10 max-w-2xl mx-auto font-light">
            Join hands with India's most reliable full-spectrum IT solutions provider. Deliver enterprise-grade infrastructure to your clients while scaling your own revenue.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="#apply" className="px-8 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-lg transition-all duration-300 shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)]">
              Apply for Partnership
            </Link>
            <Link href="/company/contact" className="px-8 py-3.5 bg-transparent border border-slate-700 hover:border-slate-500 text-slate-300 hover:text-white font-bold rounded-lg transition-all duration-300">
              Talk to Partner Sales
            </Link>
          </div>
        </div>

        {/* ⚙️ WORKING INTERACTIVE BENEFITS EXPLORER */}
        <div className="mb-24">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-white mb-4">Why Partner with BNQinTECH?</h2>
            <p className="text-slate-400 text-sm">Click below to explore the exclusive benefits of our channel program.</p>
          </div>
          
          <div className="grid md:grid-cols-12 gap-8 max-w-5xl mx-auto bg-slate-900/30 border border-slate-800 rounded-3xl p-6 md:p-10">
            
            {/* Left Column: Interactive Buttons */}
            <div className="md:col-span-5 flex flex-col gap-3">
              {Object.keys(benefitsContent).map((key) => {
                const isActive = activeBenefit === key;
                return (
                  <button
                    key={key}
                    onClick={() => setActiveBenefit(key)}
                    className={`text-left px-5 py-4 rounded-xl transition-all duration-300 ${
                      isActive 
                      ? `${benefitsContent[key as keyof typeof benefitsContent].bg} ${benefitsContent[key as keyof typeof benefitsContent].border} border` 
                      : 'bg-transparent border border-transparent hover:bg-slate-800/50'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-2xl">{benefitsContent[key as keyof typeof benefitsContent].icon}</span>
                      <span className={`font-bold text-sm md:text-base ${isActive ? 'text-white' : 'text-slate-400'}`}>
                        {benefitsContent[key as keyof typeof benefitsContent].title}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Right Column: Dynamic Content Display */}
            <div className="md:col-span-7 bg-[#0a0f1e] border border-slate-800 rounded-2xl p-8 flex items-center shadow-inner min-h-[240px]">
              <div>
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-4 ${benefitsContent[activeBenefit as keyof typeof benefitsContent].bg} ${benefitsContent[activeBenefit as keyof typeof benefitsContent].color}`}>
                  Partner Benefit
                </span>
                <h3 className="text-2xl font-bold text-white mb-4">
                  {benefitsContent[activeBenefit as keyof typeof benefitsContent].title}
                </h3>
                <p className="text-slate-400 leading-relaxed">
                  {benefitsContent[activeBenefit as keyof typeof benefitsContent].desc}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 🏆 PARTNER TIERS SECTION */}
        <div className="text-center mb-20">
          <h2 className="text-3xl font-bold text-white mb-4">Partner Success Tiers</h2>
          <p className="text-slate-400 mb-12 max-w-2xl mx-auto">The more clients you bring, the higher your margins grow. Start as a Silver partner and climb your way up to Platinum.</p>
          
          <div className="grid md:grid-cols-3 gap-8 text-left max-w-6xl mx-auto">
            
            {/* Silver Tier */}
            <div className="bg-[#0a0f1e] border border-slate-800 rounded-3xl p-8 hover:border-slate-600 transition-colors">
              <div className="w-12 h-12 bg-slate-400/10 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl">🥈</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Registered (Silver)</h3>
              <p className="text-slate-400 text-sm mb-6">For new agencies just starting out.</p>
              <div className="mb-6">
                <span className="text-3xl font-black text-slate-300">10% Off</span>
                <span className="text-slate-500 block text-sm mt-1">Standard Retail Pricing</span>
              </div>
              <ul className="space-y-4 mb-8 text-sm text-slate-300">
                <li className="flex items-center gap-3">✓ <span className="text-slate-400">No minimum commitment</span></li>
                <li className="flex items-center gap-3">✓ <span className="text-slate-400">Access to Partner Dashboard</span></li>
                <li className="flex items-center gap-3">✓ <span className="text-slate-400">Standard Ticket Support</span></li>
              </ul>
            </div>

            {/* Gold Tier (Highlighted) */}
            <div className="bg-slate-900 border border-yellow-500/50 rounded-3xl p-8 relative transform md:-translate-y-4 shadow-2xl shadow-yellow-900/10">
              <div className="absolute top-0 right-8 -translate-y-1/2 bg-gradient-to-r from-yellow-500 to-amber-500 text-white text-xs font-bold px-4 py-1 rounded-full shadow-lg">
                MOST AGENCIES
              </div>
              <div className="w-12 h-12 bg-yellow-500/10 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl">🥇</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Advanced (Gold)</h3>
              <p className="text-slate-400 text-sm mb-6">For growing IT firms and web hosts.</p>
              <div className="mb-6">
                <span className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-300">
                  20% Off
                </span>
                <span className="text-slate-500 block text-sm mt-1">Active Accounts: 10 - 50</span>
              </div>
              <ul className="space-y-4 mb-8 text-sm text-slate-300">
                <li className="flex items-center gap-3 text-yellow-500/80">✓ <span className="text-slate-300">White-label Client Billing</span></li>
                <li className="flex items-center gap-3 text-yellow-500/80">✓ <span className="text-slate-300">Priority Phone Support</span></li>
                <li className="flex items-center gap-3 text-yellow-500/80">✓ <span className="text-slate-300">Marketing Collateral</span></li>
              </ul>
            </div>

            {/* Platinum Tier */}
            <div className="bg-[#0a0f1e] border border-slate-800 rounded-3xl p-8 hover:border-slate-600 transition-colors">
              <div className="w-12 h-12 bg-blue-400/10 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl">💎</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Premier (Platinum)</h3>
              <p className="text-slate-400 text-sm mb-6">For enterprise system integrators.</p>
              <div className="mb-6">
                <span className="text-3xl font-black text-cyan-400">30% Off</span>
                <span className="text-slate-500 block text-sm mt-1">Active Accounts: 50+</span>
              </div>
              <ul className="space-y-4 mb-8 text-sm text-slate-300">
                <li className="flex items-center gap-3">✓ <span className="text-slate-400">Custom Infrastructure Setup</span></li>
                <li className="flex items-center gap-3">✓ <span className="text-slate-400">Dedicated Account Manager</span></li>
                <li className="flex items-center gap-3">✓ <span className="text-slate-400">MDF (Marketing Dev Funds)</span></li>
              </ul>
            </div>

          </div>
        </div>

        {/* 🚀 Call to Action Bottom */}
        <div id="apply" className="bg-gradient-to-br from-blue-900/40 to-slate-900 border border-blue-500/30 rounded-3xl p-10 md:p-16 text-center max-w-4xl mx-auto relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 blur-[80px] rounded-full pointer-events-none"></div>
          <h2 className="text-3xl font-bold text-white mb-4 relative z-10">Ready to boost your revenue?</h2>
          <p className="text-slate-400 mb-8 relative z-10 max-w-xl mx-auto">
            Fill out our partner application form. Our channel team will review your application and get back to you within 24 hours to set up your account.
          </p>
          <button className="px-10 py-4 bg-white text-blue-950 hover:bg-slate-200 font-bold rounded-lg transition-all duration-300 shadow-lg shadow-white/10 relative z-10">
            Start Partner Application
          </button>
        </div>

      </div>
    </main>
  );
}