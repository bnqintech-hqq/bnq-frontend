'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function SaasDevelopmentPage() {
  // Functional State for SaaS Architecture Explorer
  const [activeLayer, setActiveLayer] = useState('multi-tenant');

  // Dynamic Framework Content for SaaS Engineering
  const saasContent = {
    'multi-tenant': {
      title: "Multi-Tenant Cloud Databases",
      desc: "Architecting hyper-secure, shared or isolated schema databases with strict Row-Level Security (RLS). Ensure absolute data isolation between individual enterprise tenants while optimizing infrastructure costs.",
      icon: "🗄️",
      color: "text-blue-400",
      bg: "bg-blue-500/10",
      border: "border-blue-500/50"
    },
    'billing': {
      title: "Subscription & Metered Metering",
      desc: "Robust integration of automated recurring billing systems and subscription platforms. Handles multi-tier feature gating, dynamic coupon logic, automated tax compliance, and metered usage-based webhooks smoothly.",
      icon: "💳",
      color: "text-emerald-400",
      bg: "bg-emerald-500/10",
      border: "border-emerald-500/50"
    },
    'api': {
      title: "High-Speed REST & GraphQL APIs",
      desc: "Developing developer-friendly web APIs wrapped in JWT tokens and OAuth2 protocol layers. Features strict rate-limiting tokens, Redis-backed data caching, and instant event webhook emitters for cross-platform workflows.",
      icon: "🔌",
      color: "text-purple-400",
      bg: "bg-purple-500/10",
      border: "border-purple-500/50"
    },
    'analytics': {
      title: "Real-Time Telemetry Panels",
      desc: "Centralized analytical dashboards mapping core SaaS growth metrics (MRR, Churn velocity, API transaction limits, active sessions). Engineered with Next.js Server Components and lightning-fast web graphics pipelines.",
      icon: "📊",
      color: "text-cyan-400",
      bg: "bg-cyan-500/10",
      border: "border-cyan-500/50"
    }
  };

  return (
    <main className="min-h-screen pt-40 pb-20 bg-[#050812] text-slate-300 relative overflow-hidden font-sans">
      
      {/* 🌌 High-Performance Cloud-Native Indigo Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-indigo-600/10 blur-[160px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* 🔥 Hero Section */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <span className="text-indigo-400 font-bold tracking-widest uppercase text-xs mb-4 block animate-pulse">
            Enterprise Cloud-Native Engineering
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-white mb-6 tracking-tight leading-tight">
            Scalable Enterprise <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-cyan-400">
              SaaS Product Development
            </span>
          </h1>
          <p className="text-slate-400 text-base md:text-lg leading-relaxed mb-10 max-w-2xl mx-auto font-light">
            BNQinTECH codes, compiles, and deploys hyper-scalable, multi-tenant B2B and B2C SaaS ecosystems. Engineered with microservices clean architecture, secure billing engines, and low-latency API networks.
          </p>

          <div className="flex justify-center">
            <Link href="#saas-explorer" className="px-8 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-lg transition-all duration-300 shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)]">
              Inspect SaaS Blueprints
            </Link>
          </div>
        </div>

        {/* ⚙️ WORKING INTERACTIVE SAAS ENGINE EXPLORER */}
        <div id="saas-explorer" className="bg-slate-900/30 border border-slate-800 rounded-3xl p-6 md:p-10 mb-24 max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">The Multi-Tenant Architecture Matrix</h2>
            <p className="text-slate-400 text-sm">Select a system node below to review our core deployment guidelines and infrastructure mechanics.</p>
          </div>
          
          <div className="grid md:grid-cols-12 gap-8">
            
            {/* Left Column: Interactive Module Selector */}
            <div className="md:col-span-5 flex flex-col gap-3">
              {Object.keys(saasContent).map((key) => {
                const isActive = activeLayer === key;
                return (
                  <button
                    key={key}
                    onClick={() => setActiveLayer(key)}
                    className={`text-left px-5 py-4 rounded-xl transition-all duration-300 ${
                      isActive 
                      ? `${saasContent[key as keyof typeof saasContent].bg} ${saasContent[key as keyof typeof saasContent].border} border` 
                      : 'bg-transparent border border-transparent hover:bg-slate-800/50'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-2xl">{saasContent[key as keyof typeof saasContent].icon}</span>
                      <span className={`font-bold text-sm md:text-base ${isActive ? 'text-white' : 'text-slate-400'}`}>
                        {saasContent[key as keyof typeof saasContent].title.split(' ')[0]} {saasContent[key as keyof typeof saasContent].title.split(' ')[1]}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Right Column: Dynamic Specifications Display Panel */}
            <div className="md:col-span-7 bg-[#0a0f1e] border border-slate-800 rounded-2xl p-8 flex items-center shadow-inner min-h-[240px]">
              <div>
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-4 ${saasContent[activeLayer as keyof typeof saasContent].bg} ${saasContent[activeLayer as keyof typeof saasContent].color}`}>
                  Core Platform Layer
                </span>
                <h3 className="text-2xl font-bold text-white mb-4">
                  {saasContent[activeLayer as keyof typeof saasContent].title}
                </h3>
                <p className="text-slate-400 text-sm md:text-base leading-relaxed">
                  {saasContent[activeLayer as keyof typeof saasContent].desc}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 📊 STATELESS RELIABILITY & SCALE METRICS GRID */}
        <div className="bg-[#0a0f1e] border border-slate-800 rounded-3xl p-8 md:p-12 mb-24 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 blur-[80px] rounded-full pointer-events-none"></div>
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Production-Grade Scaling Vectors</h2>
            <p className="text-slate-400 text-sm">We provide absolute architectural velocity, ensuring your software maintains ultra-low load limits even as tens of thousands of active tenants call your database arrays symmetrically.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div className="bg-slate-900/40 border border-slate-800/60 p-6 rounded-xl">
              <span className="block text-xl mb-2">☁️</span>
              <h4 className="text-white font-bold mb-1">Stateless Clusters</h4>
              <p className="text-slate-500 text-xs">Dockerized microservices and Kubernetes containers ready for automated load-balancing.</p>
            </div>
            <div className="bg-slate-900/40 border border-slate-800/60 p-6 rounded-xl">
              <span className="block text-xl mb-2">⚡</span>
              <h4 className="text-white font-bold mb-1">Redis Caching</h4>
              <p className="text-slate-500 text-xs">In-memory caching engines to handle repeat tenant requests and metadata configurations instantly.</p>
            </div>
            <div className="bg-slate-900/40 border border-slate-800/60 p-6 rounded-xl">
              <span className="block text-xl mb-2">🛡️</span>
              <h4 className="text-white font-bold mb-1">SSO & SAML 2.0</h4>
              <p className="text-slate-500 text-xs">Enterprise identity access control workflows (Okta, Azure AD) for safe tenant onboarding layers.</p>
            </div>
            <div className="bg-slate-900/40 border border-slate-800/60 p-6 rounded-xl">
              <span className="block text-xl mb-2">🔗</span>
              <h4 className="text-white font-bold mb-1">Zero-Loss Sync</h4>
              <p className="text-slate-500 text-xs">Event-driven queues (RabbitMQ/Kafka) preventing any system transaction drops during peaks.</p>
            </div>
          </div>
        </div>

        {/* 🚀 Corporate RFP Cloud Consultation Section */}
        <div className="bg-gradient-to-br from-slate-900 to-black border border-slate-800 rounded-3xl p-10 md:p-16 text-center max-w-4xl mx-auto relative overflow-hidden">
          <h2 className="text-3xl font-bold text-white mb-4">Architect Your Next SaaS Sprint</h2>
          <p className="text-slate-400 mb-8 max-w-xl mx-auto text-sm md:text-base">
            Connect directly with our SaaS product engineering core. Let's draft technical scoping specifications, plan data isolation patterns, and formulate your multi-tier subscription framework.
          </p>
          <Link href="/company/contact" className="inline-block px-10 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-bold rounded-lg transition-all duration-300 shadow-lg shadow-blue-900/30">
            Request SaaS Discovery Session
          </Link>
        </div>

      </div>
    </main>
  );
}
