import React from 'react';
import Link from 'next/link';

export default function DomainTransferPage() {
  return (
    <main className="min-h-screen pt-40 pb-20 bg-[#050812] text-slate-300 relative overflow-hidden">
      
      {/* 🌌 Subtle Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-blue-600/10 blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* 🔥 Hero Section */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <span className="text-blue-500 font-bold tracking-widest uppercase text-xs mb-4 block">
            Domain Services
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight leading-tight">
            Transfer Your Domain with <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">
              Zero Downtime
            </span>
          </h1>
          <p className="text-slate-400 text-base md:text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
            Consolidate your digital assets with BNQinTECH. Experience enterprise-grade security, faster DNS resolution, and a unified dashboard. Plus, get a free 1-year registration extension.
          </p>

          {/* 🔍 Domain Transfer Input Box */}
          <div className="flex flex-col sm:flex-row gap-3 max-w-2xl mx-auto p-2 bg-slate-900/50 border border-slate-800 rounded-xl backdrop-blur-sm">
            <input
              type="text"
              placeholder="Enter your domain name (e.g., yourcompany.com)"
              className="flex-1 bg-transparent border-none px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:ring-0 text-sm md:text-base"
            />
            <button className="px-8 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-lg transition-all duration-300 shadow-[0_0_15px_rgba(37,99,235,0.3)] hover:shadow-[0_0_25px_rgba(37,99,235,0.5)] whitespace-nowrap">
              Transfer Now
            </button>
          </div>
        </div>

        {/* ✨ Premium Features Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-20">
          
          <div className="bg-slate-900/40 border border-slate-800/60 p-8 rounded-2xl hover:border-blue-500/30 transition-colors group">
            <div className="w-12 h-12 bg-blue-500/10 flex items-center justify-center rounded-xl mb-6 text-2xl group-hover:scale-110 transition-transform">⚡</div>
            <h3 className="text-xl font-bold text-white mb-3">Seamless Migration</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Your website stays online during the entire process. We guarantee zero disruption to your business operations and emails.
            </p>
          </div>

          <div className="bg-slate-900/40 border border-slate-800/60 p-8 rounded-2xl hover:border-cyan-500/30 transition-colors group">
            <div className="w-12 h-12 bg-cyan-500/10 flex items-center justify-center rounded-xl mb-6 text-2xl group-hover:scale-110 transition-transform">🛡️</div>
            <h3 className="text-xl font-bold text-white mb-3">Enterprise Security</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Advanced DNS protection, free Domain Privacy (WHOIS), and proactive monitoring to keep your digital identity completely secure.
            </p>
          </div>

          <div className="bg-slate-900/40 border border-slate-800/60 p-8 rounded-2xl hover:border-emerald-500/30 transition-colors group">
            <div className="w-12 h-12 bg-emerald-500/10 flex items-center justify-center rounded-xl mb-6 text-2xl group-hover:scale-110 transition-transform">🎁</div>
            <h3 className="text-xl font-bold text-white mb-3">Free 1-Year Extension</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              When you transfer your domain to BNQinTECH, we automatically extend its registration for an additional year at no extra cost.
            </p>
          </div>

        </div>

        {/* 📋 Step-by-Step Process */}
        <div className="bg-gradient-to-br from-slate-900 to-[#02040a] border border-slate-800/80 rounded-3xl p-10 md:p-12 relative overflow-hidden">
          {/* Decorative background element */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/5 blur-[80px] rounded-full pointer-events-none"></div>
          
          <div className="relative z-10 text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Simple 3-Step Transfer Process</h2>
            <p className="text-slate-400 text-sm md:text-base">Move your domain to us in minutes, not days.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center relative z-10">
            <div>
              <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-slate-800 border border-slate-700 text-blue-400 font-black text-xl mb-6 shadow-lg shadow-blue-900/20">1</span>
              <h4 className="text-white font-bold text-lg mb-3">Unlock Domain</h4>
              <p className="text-slate-400 text-sm">Log in to your current registrar and disable the registrar lock.</p>
            </div>
            
            <div>
              <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-slate-800 border border-slate-700 text-blue-400 font-black text-xl mb-6 shadow-lg shadow-blue-900/20">2</span>
              <h4 className="text-white font-bold text-lg mb-3">Get Auth Code</h4>
              <p className="text-slate-400 text-sm">Request the EPP/Authorization code from your current provider.</p>
            </div>
            
            <div>
              <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 border border-blue-500 text-white font-black text-xl mb-6 shadow-[0_0_15px_rgba(37,99,235,0.4)]">3</span>
              <h4 className="text-white font-bold text-lg mb-3">Initiate Transfer</h4>
              <p className="text-slate-400 text-sm">Enter the code in our dashboard and let our system do the rest.</p>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}