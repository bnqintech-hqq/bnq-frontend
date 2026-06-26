'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function QualityAssurancePage() {
  // Functional State for Testing Pipeline Explorer
  const [activeLayer, setActiveLayer] = useState('automation');

  // Dynamic Framework Content for QA Services
  const testingContent = {
    automation: {
      title: "Automated Regression Testing",
      desc: "Deploying end-to-end integration tests using robust frameworks like Cypress, Playwright, and Selenium. We script continuous regression pipelines that automatically validate code health on every continuous integration (CI/CD) commit.",
      icon: "🤖",
      color: "text-blue-400",
      bg: "bg-blue-500/10",
      border: "border-blue-500/50"
    },
    performance: {
      title: "High-Load & Stress Testing",
      desc: "Simulating massive traffic surges using high-concurrency tools like JMeter and K6. We stress-test your application's request velocity, map database query bottlenecks, and tune auto-scaling triggers under intense loads.",
      icon: "⚡",
      color: "text-amber-400",
      bg: "bg-amber-500/10",
      border: "border-amber-500/50"
    },
    security: {
      title: "Penetration Testing & Audits",
      desc: "Proactive security screening against OWASP Top 10 vulnerabilities. Implements cross-site scripting (XSS) simulations, strict SQL injection penetration vectors, and dependency scanning to verify absolute systemic isolation.",
      icon: "🛡️",
      color: "text-purple-400",
      bg: "bg-purple-500/10",
      border: "border-purple-500/50"
    },
    manual: {
      title: "Exploratory & Functional QA",
      desc: "Methodical human-centric evaluation processes checking edge-case user interactions, visual responsive cross-browser breaking points, system logic validation matrices, and end-to-end multi-tenant user flows.",
      icon: "👁️",
      color: "text-cyan-400",
      bg: "bg-cyan-500/10",
      border: "border-cyan-500/50"
    }
  };

  return (
    <main className="min-h-screen pt-40 pb-20 bg-[#050812] text-slate-300 relative overflow-hidden font-sans">
      
      {/* 🌌 Premium Enterprise Tech Indigo Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-indigo-600/10 blur-[160px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* 🔥 Hero Section */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <span className="text-indigo-400 font-bold tracking-widest uppercase text-xs mb-4 block animate-pulse">
            Enterprise-Grade Quality Assurance
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-white mb-6 tracking-tight leading-tight">
            Zero-Bug Software <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-cyan-400">
              Testing Ecosystems
            </span>
          </h1>
          <p className="text-slate-400 text-base md:text-lg leading-relaxed mb-10 max-w-2xl mx-auto font-light">
            BNQinTECH engineers rigorous quality validation matrices and automated test suites. We systematically break, patch, and refine your software framework before it reaches a single production-tier user.
          </p>

          <div className="flex justify-center">
            <Link href="#qa-explorer" className="px-8 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-lg transition-all duration-300 shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)]">
              Inspect Testing Blueprints
            </Link>
          </div>
        </div>

        {/* ⚙️ WORKING INTERACTIVE QA ENGINE EXPLORER */}
        <div id="qa-explorer" className="bg-slate-900/30 border border-slate-800 rounded-3xl p-6 md:p-10 mb-24 max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Software Quality Verification Matrix</h2>
            <p className="text-slate-400 text-sm">Select a verification methodology below to analyze our automated framework validation architectures.</p>
          </div>
          
          <div className="grid md:grid-cols-12 gap-8">
            
            {/* Left Column: Interactive Layer Toggles */}
            <div className="md:col-span-5 flex flex-col gap-3">
              {Object.keys(testingContent).map((key) => {
                const isActive = activeLayer === key;
                return (
                  <button
                    key={key}
                    onClick={() => setActiveLayer(key)}
                    className={`text-left px-5 py-4 rounded-xl transition-all duration-300 ${
                      isActive 
                      ? `${testingContent[key as keyof typeof testingContent].bg} ${testingContent[key as keyof typeof testingContent].border} border` 
                      : 'bg-transparent border border-transparent hover:bg-slate-800/50'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-2xl">{testingContent[key as keyof typeof testingContent].icon}</span>
                      <span className={`font-bold text-sm md:text-base ${isActive ? 'text-white' : 'text-slate-400'}`}>
                        {testingContent[key as keyof typeof testingContent].title}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Right Column: Dynamic Content Panel */}
            <div className="md:col-span-7 bg-[#0a0f1e] border border-slate-800 rounded-2xl p-8 flex items-center shadow-inner min-h-[240px]">
              <div>
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-4 ${testingContent[activeLayer as keyof typeof testingContent].bg} ${testingContent[activeLayer as keyof typeof testingContent].color}`}>
                  QA Core Layer
                </span>
                <h3 className="text-2xl font-bold text-white mb-4">
                  {testingContent[activeLayer as keyof typeof testingContent].title}
                </h3>
                <p className="text-slate-400 text-sm md:text-base leading-relaxed">
                  {testingContent[activeLayer as keyof typeof testingContent].desc}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 📊 RIGOROUS ENGINEERING STANDARDS GRID */}
        <div className="bg-[#0a0f1e] border border-slate-800 rounded-3xl p-8 md:p-12 mb-24 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 blur-[80px] rounded-full pointer-events-none"></div>
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Production-Grade Reliability Metrics</h2>
            <p className="text-slate-400 text-sm">We provide absolute engineering visibility by setting strict delivery benchmarks for every web and mobile framework layout we review.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div className="bg-slate-900/40 border border-slate-800/60 p-6 rounded-xl">
              <span className="block text-xl mb-2">📈</span>
              <h4 className="text-white font-bold mb-1">&gt; 95% Code Coverage</h4>
              <p className="text-slate-500 text-xs">Exhaustive unit and integrated test vectors mapping structural data endpoints cleanly.</p>
            </div>
            <div className="bg-slate-900/40 border border-slate-800/60 p-6 rounded-xl">
              <span className="block text-xl mb-2">⏱️</span>
              <h4 className="text-white font-bold mb-1">CI/CD Gateways</h4>
              <p className="text-slate-500 text-xs">Automated build breaks ensuring malicious exceptions or failing components never hit server trees.</p>
            </div>
            <div className="bg-slate-900/40 border border-slate-800/60 p-6 rounded-xl">
              <span className="block text-xl mb-2">📋</span>
              <h4 className="text-white font-bold mb-1">Traceable Logs</h4>
              <p className="text-slate-500 text-xs">Granular test report dashboards outlining trace histories and component screenshots.</p>
            </div>
            <div className="bg-slate-900/40 border border-slate-800/60 p-6 rounded-xl">
              <span className="block text-xl mb-2">🔗</span>
              <h4 className="text-white font-bold mb-1">Cross-Platform Sync</h4>
              <p className="text-slate-500 text-xs">Multi-environment browser layouts tested symmetrically across Android, iOS, and Web windows.</p>
            </div>
          </div>
        </div>

        {/* 🚀 Corporate RFP Consulting Section */}
        <div className="bg-gradient-to-br from-slate-900 to-black border border-slate-800 rounded-3xl p-10 md:p-16 text-center max-w-4xl mx-auto relative overflow-hidden">
          <h2 className="text-3xl font-bold text-white mb-4">Audit Your Software System's Integrity</h2>
          <p className="text-slate-400 mb-8 max-w-xl mx-auto text-sm md:text-base">
            Connect directly with our validation testing core. Let's design custom regression hooks, analyze legacy source code bottlenecks, or secure high-velocity stress testing architectures.
          </p>
          <Link href="/company/contact" className="inline-block px-10 py-4 bg-gradient-to-r from-blue-600 to-indigo-500 hover:from-blue-500 hover:to-indigo-400 text-white font-bold rounded-lg transition-all duration-300 shadow-lg shadow-blue-900/30">
            Request Testing Consultation
          </Link>
        </div>

      </div>
    </main>
  );
}