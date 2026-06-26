'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function HealthcarePortalPage() {
  // Functional State for Healthcare Suite Explorer
  const [activeSuite, setActiveSuite] = useState('patient');

  // Dynamic Content Data for Healthcare Modules
  const suitesContent = {
    patient: {
      title: "Patient Electronic Health Records (EHR)",
      desc: "A highly secure, encrypted database module to record entire patient medical histories, clinical diagnostics, allergy alerts, past prescriptions, and immunizations with granular access logs.",
      icon: "🏥",
      color: "text-blue-400",
      bg: "bg-blue-500/10",
      border: "border-blue-500/50"
    },
    doctor: {
      title: "Doctor Operations & Scheduling",
      desc: "Streamlined dashboard architectures for healthcare providers. Features intelligent automated appointment booking, smart electronic prescription (e-Rx) drafting, and real-time integration with diagnostic labs.",
      icon: "🩺",
      color: "text-emerald-400",
      bg: "bg-emerald-500/10",
      border: "border-emerald-500/50"
    },
    telehealth: {
      title: "Integrated Telehealth Engine",
      desc: "Low-latency, peer-to-peer virtual consultation modules using high-performance WebRTC tunnels. Doctors can dynamically review digital case sheets while conducting safe encrypted video appointments.",
      icon: "💻",
      color: "text-purple-400",
      bg: "bg-purple-500/10",
      border: "border-purple-500/50"
    },
    pharmacy: {
      title: "Pharmacy & Inventory Logistics",
      desc: "Real-time supply chain tracking modules for hospital pharmacies and medical equipment. Features threshold automated re-ordering triggers, batch-expiry trackers, and digital billing systems.",
      icon: "💊",
      color: "text-cyan-400",
      bg: "bg-cyan-500/10",
      border: "border-cyan-500/50"
    }
  };

  return (
    <main className="min-h-screen pt-40 pb-20 bg-[#050812] text-slate-300 relative overflow-hidden font-sans">
      
      {/* 🌌 High-Performance Medical Cyan Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-cyan-600/10 blur-[160px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* 🔥 Hero Section */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <span className="text-cyan-400 font-bold tracking-widest uppercase text-xs mb-4 block animate-pulse">
            Enterprise Medical Software Architecture
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-white mb-6 tracking-tight leading-tight">
            Next-Generation <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400">
              Healthcare Portals
            </span>
          </h1>
          <p className="text-slate-400 text-base md:text-lg leading-relaxed mb-10 max-w-2xl mx-auto font-light">
            BNQinTECH architects high-availability, mission-critical healthcare ecosystems and multi-tenant hospital portals. Engineered for absolute patient data protection and compliant cloud scaling.
          </p>

          <div className="flex justify-center">
            <Link href="#suite-explorer" className="px-8 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-lg transition-all duration-300 shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)]">
              Explore Medical Frameworks
            </Link>
          </div>
        </div>

        {/* ⚙️ WORKING INTERACTIVE SUITE EXPLORER */}
        <div id="suite-explorer" className="bg-slate-900/30 border border-slate-800 rounded-3xl p-6 md:p-10 mb-24 max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Integrated Hospital Ecosystem</h2>
            <p className="text-slate-400 text-sm">Click the dashboard vectors below to view live deployment data structures configured for different medical entities.</p>
          </div>
          
          <div className="grid md:grid-cols-12 gap-8">
            
            {/* Left Column: Interactive Tab Buttons */}
            <div className="md:col-span-5 flex flex-col gap-3">
              {Object.keys(suitesContent).map((key) => {
                const isActive = activeSuite === key;
                return (
                  <button
                    key={key}
                    onClick={() => setActiveSuite(key)}
                    className={`text-left px-5 py-4 rounded-xl transition-all duration-300 ${
                      isActive 
                      ? `${suitesContent[key as keyof typeof suitesContent].bg} ${suitesContent[key as keyof typeof suitesContent].border} border` 
                      : 'bg-transparent border border-transparent hover:bg-slate-800/50'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-2xl">{suitesContent[key as keyof typeof suitesContent].icon}</span>
                      <span className={`font-bold text-sm md:text-base ${isActive ? 'text-white' : 'text-slate-400'}`}>
                        {suitesContent[key as keyof typeof suitesContent].title}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Right Column: Dynamic Content Display */}
            <div className="md:col-span-7 bg-[#0a0f1e] border border-slate-800 rounded-2xl p-8 flex items-center shadow-inner min-h-[220px]">
              <div>
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-4 ${suitesContent[activeSuite as keyof typeof suitesContent].bg} ${suitesContent[activeSuite as keyof typeof suitesContent].color}`}>
                  Core System Layer
                </span>
                <h3 className="text-2xl font-bold text-white mb-4">
                  {suitesContent[activeSuite as keyof typeof suitesContent].title}
                </h3>
                <p className="text-slate-400 text-sm md:text-base leading-relaxed">
                  {suitesContent[activeSuite as keyof typeof suitesContent].desc}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 🛡️ CLINICAL REGULATORY & DATA SAFETY GRID */}
        <div className="bg-[#0a0f1e] border border-slate-800 rounded-3xl p-8 md:p-12 mb-24 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 blur-[80px] rounded-full pointer-events-none"></div>
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Military-Grade Medical Compliance</h2>
            <p className="text-slate-400 text-sm">Patient information security is non-negotiable. Our development blueprints strictly follow global healthcare data sharing and localization boundaries.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div className="bg-slate-900/40 border border-slate-800/60 p-6 rounded-xl">
              <span className="block text-xl mb-2">📋</span>
              <h4 className="text-white font-bold mb-1">HIPAA Compliant</h4>
              <p className="text-slate-500 text-xs">Full privacy protocols safeguarding protected health telemetry indicators.</p>
            </div>
            <div className="bg-slate-900/40 border border-slate-800/60 p-6 rounded-xl">
              <span className="block text-xl mb-2">🧬</span>
              <h4 className="text-white font-bold mb-1">HL7 & FHIR Standards</h4>
              <p className="text-slate-500 text-xs">Standardized data interchange protocols for cross-platform medical information syncing.</p>
            </div>
            <div className="bg-slate-900/40 border border-slate-800/60 p-6 rounded-xl">
              <span className="block text-xl mb-2">🔑</span>
              <h4 className="text-white font-bold mb-1">End-to-End Encryption</h4>
              <p className="text-slate-500 text-xs">Cryptographic token vaults preventing illegal intercept on live electronic records.</p>
            </div>
            <div className="bg-slate-900/40 border border-slate-800/60 p-6 rounded-xl">
              <span className="block text-xl mb-2">🚨</span>
              <h4 className="text-white font-bold mb-1">Fail-Safe Clusters</h4>
              <p className="text-slate-500 text-xs">High-availability automated redundant database mirrors for 100% vital data recovery.</p>
            </div>
          </div>
        </div>

        {/* 🚀 Corporate RFP Section */}
        <div className="bg-gradient-to-br from-slate-900 to-black border border-slate-800 rounded-3xl p-10 md:p-16 text-center max-w-4xl mx-auto relative overflow-hidden">
          <h2 className="text-3xl font-bold text-white mb-4">Deploy an Integrated Hospital Core</h2>
          <p className="text-slate-400 mb-8 max-w-xl mx-auto text-sm md:text-base">
            Consult with our clinical software architects today. Let's align on targeted white-label workflows, secure API integrations for healthcare systems, and private server arrays.
          </p>
          <Link href="/company/contact" className="inline-block px-10 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-bold rounded-lg transition-all duration-300 shadow-[0_0_20px_rgba(37,99,235,0.3)]">
            Request Enterprise Demo
          </Link>
        </div>

      </div>
    </main>
  );
}