'use client';

import React, { useState } from 'react';
import Link from 'next/link';

// Interface for strictly typed dynamic plans
interface VPSResource {
  cores: number;
  ram: string;
  storage: string;
  bandwidth: string;
  monthlyPrice: number;
  tierName: string;
}

export default function CloudVPSPage() {
  // 100% Functional States
  const [isYearly, setIsYearly] = useState(true);
  const [sliderIndex, setSliderIndex] = useState(1); // Default to Medium/Pro Tier

  // Real Hardware Matrix Configuration Array
  const vpsMatrix: VPSResource[] = [
    { cores: 2, ram: "4 GB DDR4 ECC", storage: "50 GB NVMe Gen4", bandwidth: "1 TB Blazing", monthlyPrice: 799, tierName: "Cloud Starter Node" },
    { cores: 4, ram: "8 GB DDR4 ECC", storage: "100 GB NVMe Gen4", bandwidth: "2 TB Blazing", monthlyPrice: 1499, tierName: "Cloud Pro Node" },
    { cores: 8, ram: "16 GB DDR4 ECC", storage: "250 GB NVMe Gen4", bandwidth: "5 TB Blazing", monthlyPrice: 2999, tierName: "Cloud Max Compute" },
    { cores: 16, ram: "32 GB DDR4 ECC", storage: "500 GB NVMe Gen4", bandwidth: "10 TB Blazing", monthlyPrice: 5499, tierName: "Cloud Enterprise Core" }
  ];

  const currentPlan = vpsMatrix[sliderIndex];
  
  // Real-Time Price Calculator Logic (20% Annual Discount)
  const calculateDisplayPrice = (basePrice: number) => {
    if (isYearly) {
      const discountedMonth = basePrice * 0.8;
      return Math.round(discountedMonth).toLocaleString('en-IN');
    }
    return basePrice.toLocaleString('en-IN');
  };

  return (
    <main className="min-h-screen pt-40 pb-20 bg-[#050812] text-slate-300 relative overflow-hidden font-sans">
      
      {/* 🌌 Premium Ambient Cyberpunk Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1100px] h-[500px] bg-gradient-to-b from-blue-600/10 via-indigo-600/5 to-transparent blur-[150px] pointer-events-none rounded-full"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-[0.15] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* 🔥 Hero Engine Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold tracking-widest uppercase mb-6 animate-pulse">
            Infrastructure as a Service (IaaS)
          </span>
          <h1 className="text-4xl sm:text-6xl font-black text-white mb-6 tracking-tight leading-tight">
            Unstoppable Compute with <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-cyan-400">
              Next-Gen Managed Cloud VPS
            </span>
          </h1>
          <p className="text-slate-400 text-base md:text-lg leading-relaxed mb-10 max-w-2xl mx-auto font-light">
            Deploy full root-access cloud instances onto enterprise high-IOPS storage clusters. Scale computing hardware on-demand with automated failover frameworks.
          </p>
        </div>

        {/* 💳 WORKING DURATION SWITCH TOGGLE */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <span className={`text-sm font-medium ${!isYearly ? 'text-white' : 'text-slate-500'}`}>Monthly Billing</span>
          <button 
            onClick={() => setIsYearly(!isYearly)}
            className="w-14 h-7 bg-slate-900 rounded-full relative p-1 cursor-pointer transition-colors border border-slate-800"
          >
            <div className={`w-5 h-5 bg-blue-500 rounded-full shadow-md transition-transform duration-300 ${isYearly ? 'translate-x-7' : 'translate-x-0'}`}></div>
          </button>
          <span className={`text-sm font-medium ${isYearly ? 'text-white' : 'text-slate-500'}`}>
            Annually <span className="text-xs text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded-full ml-1 font-bold">Save 20%</span>
          </span>
        </div>

        {/* ⚙️ WORKING HIGH-END RESOURCE CONFIGURATOR CARD */}
        <div className="max-w-5xl mx-auto bg-slate-900/30 border border-slate-800 rounded-3xl p-6 md:p-10 mb-20 shadow-2xl shadow-black/40 backdrop-blur-sm">
          
          <div className="text-center md:text-left mb-10">
            <h2 className="text-xl md:text-2xl font-bold text-white mb-2">Dynamic Infrastructure Slider</h2>
            <p className="text-slate-500 text-xs md:text-sm">Drag the slider arrays to allocate processing engines and check wholesale resource bundles live.</p>
          </div>

          <div className="grid md:grid-cols-12 gap-10 items-center">
            
            {/* Left side controls */}
            <div className="md:col-span-7 space-y-8">
              <div className="space-y-4">
                <div className="flex justify-between items-baseline">
                  <span className="text-xs font-mono uppercase tracking-widest text-slate-400">Scale Deployment Layer</span>
                  <span className="text-lg font-black text-blue-400 bg-blue-500/10 px-3 py-1 rounded-lg border border-blue-500/20">{currentPlan.tierName}</span>
                </div>
                <input 
                  type="range"
                  min="0"
                  max={vpsMatrix.length - 1}
                  value={sliderIndex}
                  onChange={(e) => setSliderIndex(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-500 transition-all"
                />
                <div className="flex justify-between text-xs font-mono text-slate-600">
                  <span>2 Cores</span>
                  <span>4 Cores</span>
                  <span>8 Cores</span>
                  <span>16 Cores</span>
                </div>
              </div>

              {/* Dynamic Hardware Grid Output */}
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="bg-[#0a0f1e] border border-slate-800 p-4 rounded-xl shadow-inner">
                  <span className="block text-[10px] uppercase tracking-wider font-mono text-slate-500 mb-1">Compute Core</span>
                  <span className="text-white font-bold text-sm lg:text-base">{currentPlan.cores} Dedicated vCPUs</span>
                </div>
                <div className="bg-[#0a0f1e] border border-slate-800 p-4 rounded-xl shadow-inner">
                  <span className="block text-[10px] uppercase tracking-wider font-mono text-slate-500 mb-1">Instance Memory</span>
                  <span className="text-white font-bold text-sm lg:text-base">{currentPlan.ram}</span>
                </div>
                <div className="bg-[#0a0f1e] border border-slate-800 p-4 rounded-xl shadow-inner">
                  <span className="block text-[10px] uppercase tracking-wider font-mono text-slate-500 mb-1">Storage Node</span>
                  <span className="text-white font-bold text-sm lg:text-base">{currentPlan.storage}</span>
                </div>
                <div className="bg-[#0a0f1e] border border-slate-800 p-4 rounded-xl shadow-inner">
                  <span className="block text-[10px] uppercase tracking-wider font-mono text-slate-500 mb-1">Network Out</span>
                  <span className="text-white font-bold text-sm lg:text-base">{currentPlan.bandwidth} Blazing</span>
                </div>
              </div>
            </div>

            {/* Right side live pricing box */}
            <div className="md:col-span-5 bg-[#0a0f1e] border border-blue-500/30 rounded-2xl p-8 text-center shadow-2xl relative overflow-hidden flex flex-col justify-between h-full min-h-[320px]">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 blur-2xl rounded-full pointer-events-none"></div>
              
              <div>
                <span className="px-3 py-1 rounded-full text-[10px] bg-emerald-500/10 text-emerald-400 font-mono font-bold tracking-widest uppercase mb-6 inline-block">
                  Instant Launch Ready
                </span>
                <span className="block text-xs font-mono uppercase tracking-widest text-slate-500 mb-2">Calculated Infrastructure Cost</span>
                <div className="flex items-baseline justify-center gap-1 mb-4">
                  <span className="text-5xl font-black text-white tracking-tight">
                    ₹{calculateDisplayPrice(currentPlan.monthlyPrice)}
                  </span>
                  <span className="text-slate-500 text-sm">/mo</span>
                </div>
                {isYearly && (
                  <p className="text-xs text-emerald-400 font-medium bg-emerald-500/5 py-1.5 rounded-lg border border-emerald-500/10 max-w-xs mx-auto mb-6">
                    Yearly setup contains an active 20% discount token.
                  </p>
                )}
              </div>

              <button className="w-full py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all duration-300 shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] transform hover:-translate-y-0.5">
                Initialize Provisioning Engine
              </button>
            </div>

          </div>
        </div>

        {/* 📋 INFRASTRUCTURE CAPABILITY GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center max-w-6xl mx-auto">
          <div className="bg-[#0a0f1e] border border-slate-800/80 p-6 rounded-xl hover:border-slate-700 transition-colors">
            <span className="block text-2xl mb-3">🚀</span>
            <h4 className="text-white font-bold text-sm md:text-base mb-1.5">60s Provisioning</h4>
            <p className="text-slate-500 text-xs leading-relaxed font-light">Automated server compilation spins up your isolated root node environment instantly.</p>
          </div>
          <div className="bg-[#0a0f1e] border border-slate-800/80 p-6 rounded-xl hover:border-slate-700 transition-colors">
            <span className="block text-2xl mb-3">🔒</span>
            <h4 className="text-white font-bold text-sm md:text-base mb-1.5">Symmetric Isolation</h4>
            <p className="text-slate-500 text-xs leading-relaxed font-light">Granular KVM virtualization locks core allocations directly to your specific hardware thread layers.</p>
          </div>
          <div className="bg-[#0a0f1e] border border-slate-800/80 p-6 rounded-xl hover:border-slate-700 transition-colors">
            <span className="block text-2xl mb-3">🔄</span>
            <h4 className="text-white font-bold text-sm md:text-base mb-1.5">Automated Backups</h4>
            <p className="text-slate-500 text-xs leading-relaxed font-light">Proactive daily data snapshots secure failover disaster mitigation loops automatically.</p>
          </div>
          <div className="bg-[#0a0f1e] border border-slate-800/80 p-6 rounded-xl hover:border-slate-700 transition-colors">
            <span className="block text-2xl mb-3">🛠️</span>
            <h4 className="text-white font-bold text-sm md:text-base mb-1.5">Expert Cloud Support</h4>
            <p className="text-slate-500 text-xs leading-relaxed font-light">Direct engineering channels open 24/7/365 to preserve complex architecture uptime pipelines.</p>
          </div>
        </div>

      </div>
    </main>
  );
}