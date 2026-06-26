'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function GovtPortalPage() {
  // Functional State for System Core Architecture Explorer
  const [activeLayer, setActiveLayer] = useState('egov');

  // Dynamic Framework Content for Public Infrastructure
  const layersContent = {
    egov: {
      title: "e-Governance & Citizen Portals",
      desc: "Robust, multi-lingual citizen portals built with extreme responsive architectures. Handles seamless public utility distribution, certificate provisioning, automated service deliveries, and verified digital signatures.",
      icon: "🏛️",
      color: "text-blue-400",
      bg: "bg-blue-500/10",
      border: "border-blue-500/50"
    },
    grievance: {
      title: "Public Grievance Redressal (CRM)",
      desc: "An intelligent, multi-department ticketing core for public grievance tracking. Features automated escalations, citizen notification loops, geo-tagged dispute logs, and service-level agreement (SLA) status analytics.",
      icon: "📢",
      color: "text-emerald-400",
      bg: "bg-emerald-500/10",
      border: "border-emerald-500/50"
    },
    smartcity: {
      title: "Smart City Management & IoT",
      desc: "Centralized telemetry engines designed for modern municipal frameworks. Aggregates data from smart street lighting grids, automated transit networks, and environmental monitoring systems instantly.",
      icon: "🌆",
      color: "text-purple-400",
      bg: "bg-purple-500/10",
      border: "border-purple-500/50"
    },
    procurement: {
      title: "E-Tendering & Secure Allocation",
      desc: "Transparent, auditable workflow solutions built for public procurement. Implements symmetric end-to-end encryption frameworks for tender bids, strict timestamp logs, and smart audit trail tokens.",
      icon: "📜",
      color: "text-amber-400",
      bg: "bg-amber-500/10",
      border: "border-amber-500/50"
    }
  };

  return (
    <main className="min-h-screen pt-40 pb-20 bg-[#050812] text-slate-300 relative overflow-hidden font-sans">
      
      {/* 🌌 High-Security National Cloud Indigo Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-indigo-600/10 blur-[160px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* 🔥 Hero Section */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <span className="text-indigo-400 font-bold tracking-widest uppercase text-xs mb-4 block animate-pulse">
            Enterprise Sovereign Cloud & Software
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-white mb-6 tracking-tight leading-tight">
            Next-Gen Tech for <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-cyan-400">
              Public Sector Infrastructure
            </span>
          </h1>
          <p className="text-slate-400 text-base md:text-lg leading-relaxed mb-10 max-w-2xl mx-auto font-light">
            BNQinTECH architects high-concurrency, auditable e-Governance frameworks and public utility portals. Engineered for unmatched scale, data sovereign security, and high uptime limits.
          </p>

          <div className="flex justify-center">
            <Link href="#framework-explorer" className="px-8 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-lg transition-all duration-300 shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)]">
              Inspect National Blueprints
            </Link>
          </div>
        </div>

        {/* ⚙️ WORKING INTERACTIVE CORE ENGINE EXPLORER */}
        <div id="framework-explorer" className="bg-slate-900/30 border border-slate-800 rounded-3xl p-6 md:p-10 mb-24 max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Sovereign Service Delivery Matrix</h2>
            <p className="text-slate-400 text-sm">Select an administrative system node below to view core integration and framework execution metrics.</p>
          </div>
          
          <div className="grid md:grid-cols-12 gap-8">
            
            {/* Left Column: Interactive Module Selector */}
            <div className="md:col-span-5 flex flex-col gap-3">
              {Object.keys(layersContent).map((key) => {
                const isActive = activeLayer === key;
                return (
                  <button
                    key={key}
                    onClick={() => setActiveLayer(key)}
                    className={`text-left px-5 py-4 rounded-xl transition-all duration-300 ${
                      isActive 
                      ? `${layersContent[key as keyof typeof layersContent].bg} ${layersContent[key as keyof typeof layersContent].border} border` 
                      : 'bg-transparent border border-transparent hover:bg-slate-800/50'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-2xl">{layersContent[key as keyof typeof layersContent].icon}</span>
                      <span className={`font-bold text-sm md:text-base ${isActive ? 'text-white' : 'text-slate-400'}`}>
                        {layersContent[key as keyof typeof layersContent].title}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Right Column: Dynamic Specifications Display Panel */}
            <div className="md:col-span-7 bg-[#0a0f1e] border border-slate-800 rounded-2xl p-8 flex items-center shadow-inner min-h-[240px]">
              <div>
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-4 ${layersContent[activeLayer as keyof typeof layersContent].bg} ${layersContent[activeLayer as keyof typeof layersContent].color}`}>
                  Infrastructure Layer
                </span>
                <h3 className="text-2xl font-bold text-white mb-4">
                  {layersContent[activeLayer as keyof typeof layersContent].title}
                </h3>
                <p className="text-slate-400 text-sm md:text-base leading-relaxed">
                  {layersContent[activeLayer as keyof typeof layersContent].desc}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 🛡️ STATE-GRADE SECURITY & DATA LOCALIZATION GRID */}
        <div className="bg-[#0a0f1e] border border-slate-800 rounded-3xl p-8 md:p-12 mb-24 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 blur-[80px] rounded-full pointer-events-none"></div>
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Sovereign Compliance & Integrity</h2>
            <p className="text-slate-400 text-sm">Our national-tier deployment pipelines match critical frameworks required to process, encrypt, and retain secure citizen-level telemetry databases safely.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div className="bg-slate-900/40 border border-slate-800/60 p-6 rounded-xl">
              <span className="block text-xl mb-2">🇮🇳</span>
              <h4 className="text-white font-bold mb-1">MeitY Guidelines</h4>
              <p className="text-slate-500 text-xs">Architectures optimized for Ministry of Electronics & IT cloud-native parameters.</p>
            </div>
            <div className="bg-slate-900/40 border border-slate-800/60 p-6 rounded-xl">
              <span className="block text-xl mb-2">🛡️</span>
              <h4 className="text-white font-bold mb-1">STQC Ready Core</h4>
              <p className="text-slate-500 text-xs">Standardization Testing and Quality Certification code paths to guarantee zero exploit injection tokens.</p>
            </div>
            <div className="bg-slate-900/40 border border-slate-800/60 p-6 rounded-xl">
              <span className="block text-xl mb-2">☁️</span>
              <h4 className="text-white font-bold mb-1">Sovereign Data Locks</h4>
              <p className="text-slate-500 text-xs">100% geographic data containment within localized national server borders.</p>
            </div>
            <div className="bg-slate-900/40 border border-slate-800/60 p-6 rounded-xl">
              <span className="block text-xl mb-2">👥</span>
              <h4 className="text-white font-bold mb-1">Role-Based RBAC</h4>
              <p className="text-slate-500 text-xs">Cryptographic identification checks and access level controls for administrative nodes.</p>
            </div>
          </div>
        </div>

        {/* 🚀 High-Level RFP Corporate Request Form */}
        <div className="bg-gradient-to-br from-slate-900 to-black border border-slate-800 rounded-3xl p-10 md:p-16 text-center max-w-4xl mx-auto relative overflow-hidden">
          <h2 className="text-3xl font-bold text-white mb-4">Submit Technical RFP Consultation</h2>
          <p className="text-slate-400 mb-8 max-w-xl mx-auto text-sm md:text-base">
            Initiate formal documentation protocols. Reach out directly to our institutional engineering wing to explore secure hybrid setups, G2C automation platforms, and scale frameworks.
          </p>
          <Link href="/company/contact" className="inline-block px-10 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-bold rounded-lg transition-all duration-300 shadow-lg shadow-blue-900/30">
            Submit Consultation Request
          </Link>
        </div>

      </div>
    </main>
  );
}