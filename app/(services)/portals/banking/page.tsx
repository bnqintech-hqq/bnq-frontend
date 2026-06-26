'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function BankingPortalPage() {
  // Functional State for Core Architecture Explorer
  const [activeModule, setActiveModule] = useState('core');

  // Dynamic Module Content for Fintech Architecture
  const modulesContent = {
    core: {
      title: "Core Banking Engine (CBS)",
      desc: "An ultra-secure, low-latency ledger engine capable of processing 50,000+ transactions per second (TPS). Features automated interest calculations, account servicing, and real-time balance auditing.",
      icon: "🏦",
      color: "text-blue-400",
      bg: "bg-blue-500/10",
      border: "border-blue-500/50"
    },
    security: {
      title: "AI-Powered Fraud Detection",
      desc: "Proactive fraud screening using behavioral metrics and machine learning layers. Instantly flags suspicious transaction velocities, unusual geolocations, and automated script pattern injections.",
      icon: "🛡️",
      color: "text-emerald-400",
      bg: "bg-emerald-500/10",
      border: "border-emerald-500/50"
    },
    api: {
      title: "Unified Open Banking APIs",
      desc: "Secure RESTful gateway architecture compliant with global Open Banking frameworks. Seamless integration for ISO 20022 messaging, IMPS/NEFT rails, UPI, and major credit clearinghouses.",
      icon: "🔌",
      color: "text-purple-400",
      bg: "bg-purple-500/10",
      border: "border-purple-500/50"
    },
    analytics: {
      title: "BI & Regulatory Reporting",
      desc: "Comprehensive business intelligence modules that generate automated regulatory reports. Real-time data streams for auditing, anti-money laundering (AML) checks, and liquidity controls.",
      icon: "📊",
      color: "text-amber-400",
      bg: "bg-amber-500/10",
      border: "border-amber-500/50"
    }
  };

  return (
    <main className="min-h-screen pt-40 pb-20 bg-[#050812] text-slate-300 relative overflow-hidden font-sans">
      
      {/* 🌌 High-Security Deep Blue Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-blue-600/10 blur-[160px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* 🔥 Hero Section */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <span className="text-blue-400 font-bold tracking-widest uppercase text-xs mb-4 block animate-pulse">
            Enterprise Fintech Infrastructure
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-white mb-6 tracking-tight leading-tight">
            Secure & Scalable <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-cyan-400">
              Banking Portal Solutions
            </span>
          </h1>
          <p className="text-slate-400 text-base md:text-lg leading-relaxed mb-10 max-w-2xl mx-auto font-light">
            BNQinTECH crafts resilient, high-concurrency banking engines and digital portals for financial institutions. Engineered for absolute transaction security and absolute compliance.
          </p>

          <div className="flex justify-center">
            <Link href="#architecture" className="px-8 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-lg transition-all duration-300 shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)]">
              Explore Core Architecture
            </Link>
          </div>
        </div>

        {/* ⚙️ WORKING INTERACTIVE CORE ENGINE EXPLORER */}
        <div id="architecture" className="bg-slate-900/30 border border-slate-800 rounded-3xl p-6 md:p-10 mb-24 max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Fintech Core Systems Blueprint</h2>
            <p className="text-slate-400 text-sm">Select an architectural layer below to inspect our core technical execution parameters.</p>
          </div>
          
          <div className="grid md:grid-cols-12 gap-8">
            
            {/* Left Column: Interactive Module Selector */}
            <div className="md:col-span-5 flex flex-col gap-3">
              {Object.keys(modulesContent).map((key) => {
                const isActive = activeModule === key;
                return (
                  <button
                    key={key}
                    onClick={() => setActiveModule(key)}
                    className={`text-left px-5 py-4 rounded-xl transition-all duration-300 ${
                      isActive 
                      ? `${modulesContent[key as keyof typeof modulesContent].bg} ${modulesContent[key as keyof typeof modulesContent].border} border` 
                      : 'bg-transparent border border-transparent hover:bg-slate-800/50'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-2xl">{modulesContent[key as keyof typeof modulesContent].icon}</span>
                      <span className={`font-bold text-sm md:text-base ${isActive ? 'text-white' : 'text-slate-400'}`}>
                        {modulesContent[key as keyof typeof modulesContent].title}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Right Column: Dynamic Specifications Display Panel */}
            <div className="md:col-span-7 bg-[#0a0f1e] border border-slate-800 rounded-2xl p-8 flex items-center shadow-inner min-h-[240px]">
              <div>
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-4 ${modulesContent[activeModule as keyof typeof modulesContent].bg} ${modulesContent[activeModule as keyof typeof modulesContent].color}`}>
                  System Layer
                </span>
                <h3 className="text-2xl font-bold text-white mb-4">
                  {modulesContent[activeModule as keyof typeof modulesContent].title}
                </h3>
                <p className="text-slate-400 text-sm md:text-base leading-relaxed">
                  {modulesContent[activeModule as keyof typeof modulesContent].desc}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 🛡️ COMPLIANCE & SECURITY METRICS GRID */}
        <div className="bg-[#0a0f1e] border border-slate-800 rounded-3xl p-8 md:p-12 mb-24 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 blur-[80px] rounded-full pointer-events-none"></div>
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Bulletproof Security Standards</h2>
            <p className="text-slate-400 text-sm">Every line of banking application code we write goes through rigorous penetration matrix testing to match global compliance mandates.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div className="bg-slate-900/40 border border-slate-800/60 p-6 rounded-xl">
              <span className="block text-xl mb-2">🔒</span>
              <h4 className="text-white font-bold mb-1">PCI-DSS Compliant</h4>
              <p className="text-slate-500 text-xs">Maximum protection protocols for credit and debit card handling pipelines.</p>
            </div>
            <div className="bg-slate-900/40 border border-slate-800/60 p-6 rounded-xl">
              <span className="block text-xl mb-2">🔑</span>
              <h4 className="text-white font-bold mb-1">AES-256 Encryption</h4>
              <p className="text-slate-500 text-xs">Data-at-rest and data-in-transit secured via elite grade mathematical tokens.</p>
            </div>
            <div className="bg-slate-900/40 border border-slate-800/60 p-6 rounded-xl">
              <span className="block text-xl mb-2">👁️</span>
              <h4 className="text-white font-bold mb-1">KYC / AML Logic</h4>
              <p className="text-slate-500 text-xs">Automated customer identity verification and real-time black-list screening checks.</p>
            </div>
            <div className="bg-slate-900/40 border border-slate-800/60 p-6 rounded-xl">
              <span className="block text-xl mb-2">🧩</span>
              <h4 className="text-white font-bold mb-1">MFA & Biometrics</h4>
              <p className="text-slate-500 text-xs">Multi-factor tokens, security keys, and bio-authentication endpoint triggers.</p>
            </div>
          </div>
        </div>

        {/* 🚀 High-Level RFP Corporate Request Form */}
        <div className="bg-gradient-to-br from-slate-900 to-black border border-slate-800 rounded-3xl p-10 md:p-16 text-center max-w-4xl mx-auto relative overflow-hidden">
          <h2 className="text-3xl font-bold text-white mb-4">Request a System Architecture Demo</h2>
          <p className="text-slate-400 mb-8 max-w-xl mx-auto text-sm md:text-base">
            Connect with our core banking infrastructure team. We can discuss custom deployment schemas, legacy banking core system migrations, and dedicated source code architecture licensing.
          </p>
          <Link href="/company/contact" className="inline-block px-10 py-4 bg-gradient-to-r from-blue-600 to-indigo-500 hover:from-blue-500 hover:to-indigo-400 text-white font-bold rounded-lg transition-all duration-300 shadow-lg shadow-blue-900/30">
            Submit Corporate RFP
          </Link>
        </div>

      </div>
    </main>
  );
}