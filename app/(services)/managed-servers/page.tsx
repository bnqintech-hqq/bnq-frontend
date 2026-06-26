'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function ManagedServersPage() {
  // Functional State for Pricing Toggle
  const [isYearly, setIsYearly] = useState(true);
  
  // Functional State for Managed Services Explorer
  const [activeService, setActiveService] = useState('monitoring');

  // Interactive Content Data for Managed Services
  const servicesContent = {
    setup: {
      title: "Free Server Setup & Migration",
      desc: "Our expert engineers handle the entire initial setup, OS installation, control panel configuration, and seamlessly migrate your existing data with zero downtime.",
      icon: "⚙️",
      color: "text-blue-400",
      bg: "bg-blue-500/10",
      border: "border-blue-500/50"
    },
    monitoring: {
      title: "24/7 Proactive Monitoring",
      desc: "We monitor your server's health, CPU usage, RAM, and network traffic round-the-clock. If an issue arises, our team fixes it before you even notice.",
      icon: "🖥️",
      color: "text-emerald-400",
      bg: "bg-emerald-500/10",
      border: "border-emerald-500/50"
    },
    security: {
      title: "Proactive Security & Patching",
      desc: "Stay protected against the latest threats. We automatically apply OS security patches, configure firewalls, and run regular malware scans.",
      icon: "🛡️",
      color: "text-purple-400",
      bg: "bg-purple-500/10",
      border: "border-purple-500/50"
    },
    optimization: {
      title: "Performance Tuning",
      desc: "Continuous optimization of Apache/Nginx, MySQL, and PHP settings to ensure your applications run at peak performance under heavy traffic loads.",
      icon: "🚀",
      color: "text-orange-400",
      bg: "bg-orange-500/10",
      border: "border-orange-500/50"
    }
  };

  return (
    <main className="min-h-screen pt-40 pb-20 bg-[#050812] text-slate-300 relative overflow-hidden">
      
      {/* 🌌 Premium Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-indigo-600/15 blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* 🔥 Hero Section */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <span className="text-indigo-400 font-bold tracking-widest uppercase text-xs mb-4 block animate-pulse">
            Zero-Hassle Infrastructure
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-white mb-6 tracking-tight leading-tight">
            Fully <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Managed Servers</span>
          </h1>
          <p className="text-slate-400 text-base md:text-lg leading-relaxed mb-10 max-w-2xl mx-auto font-light">
            You focus on growing your business. Let our certified SysAdmins handle the server setup, security, monitoring, and optimization 24/7.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="#pricing" className="px-8 py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-lg transition-all duration-300 shadow-[0_0_20px_rgba(79,70,229,0.3)] hover:shadow-[0_0_30px_rgba(79,70,229,0.5)]">
              View Server Plans
            </Link>
            <Link href="/company/contact" className="px-8 py-3.5 bg-transparent border border-slate-700 hover:border-slate-500 text-slate-300 hover:text-white font-bold rounded-lg transition-all duration-300">
              Consult an Expert
            </Link>
          </div>
        </div>

        {/* ⚙️ WORKING INTERACTIVE SERVICES EXPLORER */}
        <div className="mb-24">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-white mb-4">What does "Managed" actually mean?</h2>
            <p className="text-slate-400 text-sm">Select a category below to see how we take care of your server.</p>
          </div>
          
          <div className="grid md:grid-cols-12 gap-8 max-w-5xl mx-auto bg-slate-900/30 border border-slate-800 rounded-3xl p-6 md:p-10">
            
            {/* Left Column: Interactive Buttons */}
            <div className="md:col-span-5 flex flex-col gap-3">
              {Object.keys(servicesContent).map((key) => {
                const isActive = activeService === key;
                return (
                  <button
                    key={key}
                    onClick={() => setActiveService(key)}
                    className={`text-left px-5 py-4 rounded-xl transition-all duration-300 ${
                      isActive 
                      ? `${servicesContent[key as keyof typeof servicesContent].bg} ${servicesContent[key as keyof typeof servicesContent].border} border` 
                      : 'bg-transparent border border-transparent hover:bg-slate-800/50'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-2xl">{servicesContent[key as keyof typeof servicesContent].icon}</span>
                      <span className={`font-bold text-sm md:text-base ${isActive ? 'text-white' : 'text-slate-400'}`}>
                        {servicesContent[key as keyof typeof servicesContent].title}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Right Column: Dynamic Content Display */}
            <div className="md:col-span-7 bg-[#0a0f1e] border border-slate-800 rounded-2xl p-8 flex items-center shadow-inner min-h-[220px]">
              <div>
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-4 ${servicesContent[activeService as keyof typeof servicesContent].bg} ${servicesContent[activeService as keyof typeof servicesContent].color}`}>
                  Included Service
                </span>
                <h3 className="text-2xl font-bold text-white mb-4">
                  {servicesContent[activeService as keyof typeof servicesContent].title}
                </h3>
                <p className="text-slate-400 leading-relaxed">
                  {servicesContent[activeService as keyof typeof servicesContent].desc}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 💳 WORKING PRICING TOGGLE SECTION */}
        <div id="pricing" className="text-center mb-10">
          <h2 className="text-3xl font-bold text-white mb-6">Fully Managed Server Pricing</h2>
          
          {/* Functional Toggle Switch */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <span className={`text-sm font-medium ${!isYearly ? 'text-white' : 'text-slate-500'}`}>Monthly</span>
            <button 
              onClick={() => setIsYearly(!isYearly)}
              className="w-14 h-7 bg-slate-800 rounded-full relative p-1 cursor-pointer transition-colors border border-slate-700"
            >
              <div className={`w-5 h-5 bg-indigo-500 rounded-full shadow-md transition-transform duration-300 ${isYearly ? 'translate-x-7' : 'translate-x-0'}`}></div>
            </button>
            <span className={`text-sm font-medium ${isYearly ? 'text-white' : 'text-slate-500'}`}>
              Annually <span className="text-xs text-indigo-400 bg-indigo-500/10 px-2 py-0.5 rounded-full ml-1">Save 15%</span>
            </span>
          </div>

          {/* Pricing Cards (Values update based on toggle state) */}
          <div className="grid md:grid-cols-3 gap-8 text-left max-w-6xl mx-auto">
            
            {/* Managed Entry */}
            <div className="bg-[#0a0f1e] border border-slate-800 rounded-3xl p-8 hover:border-slate-600 transition-colors">
              <h3 className="text-xl font-bold text-white mb-2">Managed VPS</h3>
              <p className="text-slate-400 text-sm mb-6">For growing applications & eCommerce.</p>
              <div className="mb-6">
                <span className="text-4xl font-black text-white">₹{isYearly ? '4,499' : '5,299'}</span>
                <span className="text-slate-500"> /mo</span>
              </div>
              <ul className="space-y-4 mb-8 text-sm text-slate-300">
                <li className="flex items-center gap-3">✓ <span className="text-slate-400">4 vCPU Cores</span></li>
                <li className="flex items-center gap-3">✓ <span className="text-slate-400">8 GB RAM</span></li>
                <li className="flex items-center gap-3">✓ <span className="text-slate-400">100 GB NVMe Storage</span></li>
                <li className="flex items-center gap-3">✓ <span className="text-slate-400">cPanel / CyberPanel Included</span></li>
              </ul>
              <button className="w-full py-3 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-lg transition-colors">
                Configure Server
              </button>
            </div>

            {/* Managed Pro (Highlighted) */}
            <div className="bg-slate-900 border border-indigo-500 rounded-3xl p-8 relative transform md:-translate-y-4 shadow-2xl shadow-indigo-900/20">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-indigo-500 to-cyan-500 text-white text-xs font-bold px-4 py-1 rounded-full">
                MOST POPULAR
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Managed Dedicated</h3>
              <p className="text-slate-400 text-sm mb-6">Bare-metal power with full support.</p>
              <div className="mb-6">
                <span className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-300">
                  ₹{isYearly ? '12,999' : '14,999'}
                </span>
                <span className="text-slate-500"> /mo</span>
              </div>
              <ul className="space-y-4 mb-8 text-sm text-slate-300">
                <li className="flex items-center gap-3 text-indigo-400">✓ <span className="text-slate-300">Intel Xeon / AMD EPYC (8 Cores)</span></li>
                <li className="flex items-center gap-3 text-indigo-400">✓ <span className="text-slate-300">32 GB DDR4 ECC RAM</span></li>
                <li className="flex items-center gap-3 text-indigo-400">✓ <span className="text-slate-300">2x 500GB NVMe (RAID 1)</span></li>
                <li className="flex items-center gap-3 text-indigo-400">✓ <span className="text-slate-300">Advanced DDoS Protection</span></li>
                <li className="flex items-center gap-3 text-indigo-400">✓ <span className="text-slate-300">Dedicated Account Manager</span></li>
              </ul>
              <button className="w-full py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-lg transition-colors shadow-lg shadow-indigo-600/30">
                Deploy Dedicated
              </button>
            </div>

            {/* Managed Enterprise */}
            <div className="bg-[#0a0f1e] border border-slate-800 rounded-3xl p-8 hover:border-slate-600 transition-colors">
              <h3 className="text-xl font-bold text-white mb-2">Custom Cluster</h3>
              <p className="text-slate-400 text-sm mb-6">For mission-critical enterprises.</p>
              <div className="mb-6">
                <span className="text-4xl font-black text-white">Custom</span>
                <span className="text-slate-500"> Pricing</span>
              </div>
              <ul className="space-y-4 mb-8 text-sm text-slate-300">
                <li className="flex items-center gap-3">✓ <span className="text-slate-400">Multi-Server Architecture</span></li>
                <li className="flex items-center gap-3">✓ <span className="text-slate-400">Hardware Load Balancing</span></li>
                <li className="flex items-center gap-3">✓ <span className="text-slate-400">Custom Firewall Rules</span></li>
                <li className="flex items-center gap-3">✓ <span className="text-slate-400">Private Cloud Setup</span></li>
              </ul>
              <button className="w-full py-3 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-lg transition-colors">
                Contact Sales
              </button>
            </div>

          </div>
        </div>

      </div>
    </main>
  );
}