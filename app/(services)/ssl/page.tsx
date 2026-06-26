'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function SSLHostingPage() {
  // Functional State for Pricing Toggle
  const [isYearly, setIsYearly] = useState(true);
  
  // Functional State for Encryption Tech Explorer
  const [activeTech, setActiveTech] = useState('sha256');

  // Interactive Content Data for SSL Tech
  const techContent = {
    sha256: {
      title: "256-Bit Symmetric Encryption",
      desc: "Every certificate deploys strong 256-bit encryption strings to encrypt data-at-motion. This makes transactional telemetry, login passwords, and credit details completely unreadable to interceptors.",
      icon: "🔑",
      color: "text-blue-400",
      bg: "bg-blue-500/10",
      border: "border-blue-500/50"
    },
    padlock: {
      title: "Visual Trust Indicators (HTTPS)",
      desc: "Instantly turn the browser's 'Not Secure' alert into a secure HTTPS padlock icon. This builds immediate customer trust, reduces bounce limits, and elevates conversion optimization tracks.",
      icon: "🔒",
      color: "text-emerald-400",
      bg: "bg-emerald-500/10",
      border: "border-emerald-500/50"
    },
    seo: {
      title: "Search Engine Optimization Boost",
      desc: "Google treats HTTPS as a critical ranking signal. Implementing our certified validation tokens gives your domain an instant technical SEO advantage over unencrypted platforms.",
      icon: "📈",
      color: "text-purple-400",
      bg: "bg-purple-500/10",
      border: "border-purple-500/50"
    }
  };

  return (
    <main className="min-h-screen pt-40 pb-20 bg-[#050812] text-slate-300 relative overflow-hidden font-sans">
      
      {/* 🌌 High-Security Emerald/Blue Premium Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-emerald-600/10 blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* 🔥 Hero Section */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <span className="text-emerald-400 font-bold tracking-widest uppercase text-xs mb-4 block animate-pulse">
            Enterprise Security Protocols
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-white mb-6 tracking-tight leading-tight">
            Military-Grade <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-blue-500">
              SSL Certificates
            </span>
          </h1>
          <p className="text-slate-400 text-base md:text-lg leading-relaxed mb-10 max-w-2xl mx-auto font-light">
            Protect your website, secure user data, and boost Google SEO hierarchies with BNQinTECH's premium SSL solutions. Automated deployment with 99.9% browser compatibility frameworks.
          </p>

          <div className="flex justify-center">
            <Link href="#pricing" className="px-8 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-lg transition-all duration-300 shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)]">
              Explore SSL Plans
            </Link>
          </div>
        </div>

        {/* ⚙️ WORKING INTERACTIVE ENCRYPTION TECH EXPLORER */}
        <div className="mb-24">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">How SSL Secures Your Architecture</h2>
            <p className="text-slate-400 text-sm">Select an encryption layer below to view technical safety metrics.</p>
          </div>
          
          <div className="grid md:grid-cols-12 gap-8 max-w-5xl mx-auto bg-slate-900/30 border border-slate-800 rounded-3xl p-6 md:p-10">
            
            {/* Left Column: Interactive Navigation Links */}
            <div className="md:col-span-5 flex flex-col gap-3">
              {Object.keys(techContent).map((key) => {
                const isActive = activeTech === key;
                return (
                  <button
                    key={key}
                    onClick={() => setActiveTech(key)}
                    className={`text-left px-5 py-4 rounded-xl transition-all duration-300 ${
                      isActive 
                      ? `${techContent[key as keyof typeof techContent].bg} ${techContent[key as keyof typeof techContent].border} border` 
                      : 'bg-transparent border border-transparent hover:bg-slate-800/50'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-2xl">{techContent[key as keyof typeof techContent].icon}</span>
                      <span className={`font-bold text-sm md:text-base ${isActive ? 'text-white' : 'text-slate-400'}`}>
                        {techContent[key as keyof typeof techContent].title.split(' ')[0]} {techContent[key as keyof typeof techContent].title.split(' ')[1]}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Right Column: Dynamic Specifications Display Panel */}
            <div className="md:col-span-7 bg-[#0a0f1e] border border-slate-800 rounded-2xl p-8 flex items-center shadow-inner min-h-[220px]">
              <div>
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-4 ${techContent[activeTech as keyof typeof techContent].bg} ${techContent[activeTech as keyof typeof techContent].color}`}>
                  Security Matrix
                </span>
                <h3 className="text-2xl font-bold text-white mb-4">
                  {techContent[activeTech as keyof typeof techContent].title}
                </h3>
                <p className="text-slate-400 text-sm md:text-base leading-relaxed">
                  {techContent[activeTech as keyof typeof techContent].desc}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 💳 WORKING PRICING TOGGLE SECTION */}
        <div id="pricing" className="text-center mb-10">
          <h2 className="text-3xl font-bold text-white mb-6">Choose Your Validation Scale</h2>
          
          {/* Functional Toggle Switch */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <span className={`text-sm font-medium ${!isYearly ? 'text-white' : 'text-slate-500'}`}>Monthly</span>
            <button 
              onClick={() => setIsYearly(!isYearly)}
              className="w-14 h-7 bg-slate-800 rounded-full relative p-1 cursor-pointer transition-colors border border-slate-700"
            >
              <div className={`w-5 h-5 bg-emerald-400 rounded-full shadow-md transition-transform duration-300 ${isYearly ? 'translate-x-7' : 'translate-x-0'}`}></div>
            </button>
            <span className={`text-sm font-medium ${isYearly ? 'text-white' : 'text-slate-500'}`}>
              Annually <span className="text-xs text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded-full ml-1">Save 20%</span>
            </span>
          </div>

          {/* Pricing Cards (Values update based on toggle state) */}
          <div className="grid md:grid-cols-3 gap-8 text-left max-w-6xl mx-auto">
            
            {/* Plan 1 */}
            <div className="bg-[#0a0f1e] border border-slate-800 rounded-3xl p-8 hover:border-slate-600 transition-colors">
              <h3 className="text-xl font-bold text-white mb-2">Standard DV SSL</h3>
              <p className="text-slate-400 text-sm mb-6">Domain Validation for small blogs.</p>
              <div className="mb-6">
                <span className="text-4xl font-black text-white">₹{isYearly ? '799' : '999'}</span>
                <span className="text-slate-500"> /yr</span>
              </div>
              <ul className="space-y-4 mb-8 text-sm text-slate-300">
                <li className="flex items-center gap-3">✓ <span className="text-slate-400">Secures 1 Single Domain</span></li>
                <li className="flex items-center gap-3">✓ <span className="text-slate-400">Automated 10-Min Issuance</span></li>
                <li className="flex items-center gap-3">✓ <span className="text-slate-400">Free Re-issues Lifecycle</span></li>
              </ul>
              <button className="w-full py-3 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-lg transition-colors">
                Purchase SSL
              </button>
            </div>

            {/* Plan 2 - Highlighted */}
            <div className="bg-slate-900 border border-emerald-500 rounded-3xl p-8 relative transform md:-translate-y-4 shadow-2xl shadow-emerald-900/20">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-xs font-bold px-4 py-1 rounded-full">
                BEST FOR APPS
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Wildcard SSL</h3>
              <p className="text-slate-400 text-sm mb-6">Secures core domain & unlimited subdomains.</p>
              <div className="mb-6">
                <span className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-300">
                  ₹{isYearly ? '2,399' : '2,999'}
                </span>
                <span className="text-slate-500"> /yr</span>
              </div>
              <ul className="space-y-4 mb-8 text-sm text-slate-300">
                <li className="flex items-center gap-3 text-emerald-400">✓ <span className="text-slate-300">Secures *.yourdomain.com</span></li>
                <li className="flex items-center gap-3 text-emerald-400">✓ <span className="text-slate-300">Unlimited Subdomains Cover</span></li>
                <li className="flex items-center gap-3 text-emerald-400">✓ <span className="text-slate-300">Strong 256-Bit Engine</span></li>
                <li className="flex items-center gap-3 text-emerald-400">✓ <span className="text-slate-300">24/7 Deployment Support</span></li>
              </ul>
              <button className="w-full py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-lg transition-colors shadow-lg shadow-emerald-600/30">
                Purchase Wildcard
              </button>
            </div>

            {/* Plan 3 */}
            <div className="bg-[#0a0f1e] border border-slate-800 rounded-3xl p-8 hover:border-slate-600 transition-colors">
              <h3 className="text-xl font-bold text-white mb-2">Business EV SSL</h3>
              <p className="text-slate-400 text-sm mb-6">Extended Validation for corporate eCom.</p>
              <div className="mb-6">
                <span className="text-4xl font-black text-white">₹{isYearly ? '5,999' : '7,499'}</span>
                <span className="text-slate-500"> /yr</span>
              </div>
              <ul className="space-y-4 mb-8 text-sm text-slate-300">
                <li className="flex items-center gap-3">✓ <span className="text-slate-400">Full Legal Enterprise Audit</span></li>
                <li className="flex items-center gap-3">✓ <span className="text-slate-400">Highest Trust Rating Token</span></li>
                <li className="flex items-center gap-3">✓ <span className="text-slate-400">₹1.5M Warranty Asset Protection</span></li>
              </ul>
              <button className="w-full py-3 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-lg transition-colors">
                Request EV Audit
              </button>
            </div>

          </div>
        </div>

      </div>
    </main>
  );
}