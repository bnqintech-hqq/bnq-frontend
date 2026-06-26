'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function BrandStrategyPage() {
  // Functional State for Identity Stack Explorer
  const [activeLayer, setActiveLayer] = useState('logo');

  // Dynamic Framework Content for Branding Services
  const identityContent = {
    logo: {
      title: "Logo Design & Visual Assets",
      desc: "Crafting iconic, versatile vector logos that instantly communicate your company's core values. Built with precise geometry and grid systems to ensure pixel-perfect reproduction on micro-screens as well as massive banners.",
      icon: "🎨",
      color: "text-blue-400",
      bg: "bg-blue-500/10",
      border: "border-blue-500/50"
    },
    guidelines: {
      title: "Corporate Brand Guidelines",
      desc: "Developing exhaustive brand books outlining typography hierarchies, strict primary/secondary color tokens, spacing constraints, and usage guardrails to maintain absolute visual consistency globally.",
      icon: "📖",
      color: "text-emerald-400",
      bg: "bg-emerald-500/10",
      border: "border-emerald-500/50"
    },
    voice: {
      title: "Brand Voice & Messaging",
      desc: "Defining your structural tone, corporate taglines, and messaging framework. Whether your enterprise speaks with elite authority or energetic innovation, we build a communication matrix that resonates.",
      icon: "📣",
      color: "text-purple-400",
      bg: "bg-purple-500/10",
      border: "border-purple-500/50"
    },
    digital: {
      title: "Collateral & Digital Assets",
      desc: "Designing production-ready business cards, high-converting premium pitch decks, white-label social media asset packs, and uniform web UI design languages that elevate your overall digital equity.",
      icon: "🚀",
      color: "text-cyan-400",
      bg: "bg-cyan-500/10",
      border: "border-cyan-500/50"
    }
  };

  return (
    <main className="min-h-screen pt-40 pb-20 bg-[#050812] text-slate-300 relative overflow-hidden font-sans">
      
      {/* 🌌 Premium Creative Purple/Blue Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-purple-600/10 blur-[160px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* 🔥 Hero Section */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <span className="text-purple-400 font-bold tracking-widest uppercase text-xs mb-4 block animate-pulse">
            Enterprise Brand & Creative Architecture
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-white mb-6 tracking-tight leading-tight">
            Engineering Elite <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400">
              Corporate Identities
            </span>
          </h1>
          <p className="text-slate-400 text-base md:text-lg leading-relaxed mb-10 max-w-2xl mx-auto font-light">
            BNQinTECH conceptualizes resilient visual brands and digital identity strategies. We merge deep psychological market research with ultra-modern UI aesthetics to make your business unforgettable.
          </p>

          <div className="flex justify-center">
            <Link href="#identity-explorer" className="px-8 py-3.5 bg-purple-600 hover:bg-purple-500 text-white font-bold rounded-lg transition-all duration-300 shadow-[0_0_20px_rgba(147,51,234,0.3)] hover:shadow-[0_0_30px_rgba(147,51,234,0.5)]">
              Explore Identity Modules
            </Link>
          </div>
        </div>

        {/* ⚙️ WORKING INTERACTIVE IDENTITY STACK EXPLORER */}
        <div id="identity-explorer" className="bg-slate-900/30 border border-slate-800 rounded-3xl p-6 md:p-10 mb-24 max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">The Brand Blueprint Matrix</h2>
            <p className="text-slate-400 text-sm">Select an identity system node below to inspect our core execution and design parameters.</p>
          </div>
          
          <div className="grid md:grid-cols-12 gap-8">
            
            {/* Left Column: Interactive Module Selector */}
            <div className="md:col-span-5 flex flex-col gap-3">
              {Object.keys(identityContent).map((key) => {
                const isActive = activeLayer === key;
                return (
                  <button
                    key={key}
                    onClick={() => setActiveLayer(key)}
                    className={`text-left px-5 py-4 rounded-xl transition-all duration-300 ${
                      isActive 
                      ? `${identityContent[key as keyof typeof identityContent].bg} ${identityContent[key as keyof typeof identityContent].border} border` 
                      : 'bg-transparent border border-transparent hover:bg-slate-800/50'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-2xl">{identityContent[key as keyof typeof identityContent].icon}</span>
                      <span className={`font-bold text-sm md:text-base ${isActive ? 'text-white' : 'text-slate-400'}`}>
                        {identityContent[key as keyof typeof identityContent].title}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Right Column: Dynamic Specifications Display Panel */}
            <div className="md:col-span-7 bg-[#0a0f1e] border border-slate-800 rounded-2xl p-8 flex items-center shadow-inner min-h-[240px]">
              <div>
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-4 ${identityContent[activeLayer as keyof typeof identityContent].bg} ${identityContent[activeLayer as keyof typeof identityContent].color}`}>
                  Creative Layer
                </span>
                <h3 className="text-2xl font-bold text-white mb-4">
                  {identityContent[activeLayer as keyof typeof identityContent].title}
                </h3>
                <p className="text-slate-400 text-sm md:text-base leading-relaxed">
                  {identityContent[activeLayer as keyof typeof identityContent].desc}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 📋 BRAND LIFECYCLE GRID */}
        <div className="bg-[#0a0f1e] border border-slate-800 rounded-3xl p-8 md:p-12 mb-24 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/5 blur-[80px] rounded-full pointer-events-none"></div>
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Our Methodical Brand Lifecycle</h2>
            <p className="text-slate-400 text-sm">We combine deep market telemetry with unrestricted creative discovery to engineer scalable corporate frameworks.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div className="bg-slate-900/40 border border-slate-800/60 p-6 rounded-xl">
              <span className="block text-xl mb-2">🔍</span>
              <h4 className="text-white font-bold mb-1">1. Competitor Audit</h4>
              <p className="text-slate-500 text-xs">Deep tracking of market voids, target demographics, and psychological triggers.</p>
            </div>
            <div className="bg-slate-900/40 border border-slate-800/60 p-6 rounded-xl">
              <span className="block text-xl mb-2">📐</span>
              <h4 className="text-white font-bold mb-1">2. Geometric Concepts</h4>
              <p className="text-slate-500 text-xs">Developing multiple structural design concepts mapped onto pixel grids.</p>
            </div>
            <div className="bg-slate-900/40 border border-slate-800/60 p-6 rounded-xl">
              <span className="block text-xl mb-2">🛠️</span>
              <h4 className="text-white font-bold mb-1">3. Refinement Engine</h4>
              <p className="text-slate-500 text-xs">Polishing custom typography, balancing contrasts, and locking vector ratios.</p>
            </div>
            <div className="bg-slate-900/40 border border-slate-800/60 p-6 rounded-xl">
              <span className="block text-xl mb-2">📦</span>
              <h4 className="text-white font-bold mb-1">4. Asset Deployment</h4>
              <p className="text-slate-500 text-xs">Delivering complete white-label files, web bundles, and usage tokens.</p>
            </div>
          </div>
        </div>

        {/* 🚀 Corporate CTA Request Form */}
        <div className="bg-gradient-to-br from-slate-900 to-black border border-slate-800 rounded-3xl p-10 md:p-16 text-center max-w-4xl mx-auto relative overflow-hidden">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Elevate Your Global Presence?</h2>
          <p className="text-slate-400 mb-8 max-w-xl mx-auto text-sm md:text-base">
            Initiate a strategic partnership with our design laboratory. Let's schedule a deep-dive branding workshop, review your current asset positioning, and craft a bespoke identity framework.
          </p>
          <Link href="/company/contact" className="inline-block px-10 py-4 bg-gradient-to-r from-purple-600 to-indigo-500 hover:from-purple-500 hover:to-indigo-400 text-white font-bold rounded-lg transition-all duration-300 shadow-lg shadow-purple-900/30">
            Launch Branding Consultation
          </Link>
        </div>

      </div>
    </main>
  );
}