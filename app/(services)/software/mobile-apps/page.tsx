'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function MobileAppsPage() {
  // Functional State for Tech Stack Explorer
  const [activeStack, setActiveStack] = useState('react-native');

  // Dynamic Content Data for Mobile Engineering
  const stackContent = {
    'react-native': {
      title: "Cross-Platform React Native Engines",
      desc: "Leveraging native threads to compile blazing-fast applications for both iOS and Android from a unified codebase. Built with clean architecture, strict TypeScript types, and fluid 60 FPS gesture responses.",
      icon: "⚛️",
      color: "text-blue-400",
      bg: "bg-blue-500/10",
      border: "border-blue-500/50"
    },
    'flutter': {
      title: "High-Performance Flutter Apps",
      desc: "Utilizing Skia and Impeller rendering engines to craft complex, custom animations and visually stunning pixel-perfect widgets. Best suited for high-fidelity interactive user interfaces and instant rendering pipelines.",
      icon: "📱",
      color: "text-cyan-400",
      bg: "bg-cyan-500/10",
      border: "border-cyan-500/50"
    },
    'native': {
      title: "Native Swift & Kotlin Deployments",
      desc: "For apps requiring maximum processing power, background bluetooth low energy (BLE) mesh tracking, intensive hardware sensor calculations, or core low-level OS multi-threading mechanics.",
      icon: "🤖",
      color: "text-emerald-400",
      bg: "bg-emerald-500/10",
      border: "border-emerald-500/50"
    },
    'backend': {
      title: "Real-Time Sync & API Infrastructure",
      desc: "Engineered with ultra-fast Node.js/WebSockets connections and offline-first state synchronization. Implements local database caching (WatermelonDB/Realm) so your app works seamlessly during zero-network windows.",
      icon: "⚡",
      color: "text-purple-400",
      bg: "bg-purple-500/10",
      border: "border-purple-500/50"
    }
  };

  return (
    <main className="min-h-screen pt-40 pb-20 bg-[#050812] text-slate-300 relative overflow-hidden font-sans">
      
      {/* 🌌 High-Performance Mobile Indigo/Cyan Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-blue-600/10 blur-[160px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* 🔥 Hero Section */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <span className="text-blue-400 font-bold tracking-widest uppercase text-xs mb-4 block animate-pulse">
            Enterprise Mobile Application Development
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-white mb-6 tracking-tight leading-tight">
            High-Performance <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400">
              Mobile App Engineering
            </span>
          </h1>
          <p className="text-slate-400 text-base md:text-lg leading-relaxed mb-10 max-w-2xl mx-auto font-light">
            BNQinTECH conceptualizes, codes, and scales high-availability iOS and Android applications. Engineered for fluid micro-interactions, robust security frameworks, and seamless cloud synchronization.
          </p>

          <div className="flex justify-center">
            <Link href="#tech-explorer" className="px-8 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-lg transition-all duration-300 shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)]">
              Explore Mobile Architecture
            </Link>
          </div>
        </div>

        {/* ⚙️ WORKING INTERACTIVE TECH STACK EXPLORER */}
        <div id="tech-explorer" className="bg-slate-900/30 border border-slate-800 rounded-3xl p-6 md:p-10 mb-24 max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">The Mobile Engineering Ecosystem</h2>
            <p className="text-slate-400 text-sm">Select a technology module below to inspect our code execution and compilation metrics.</p>
          </div>
          
          <div className="grid md:grid-cols-12 gap-8">
            
            {/* Left Column: Interactive Tab Buttons */}
            <div className="md:col-span-5 flex flex-col gap-3">
              {Object.keys(stackContent).map((key) => {
                const isActive = activeStack === key;
                return (
                  <button
                    key={key}
                    onClick={() => setActiveStack(key)}
                    className={`text-left px-5 py-4 rounded-xl transition-all duration-300 ${
                      isActive 
                      ? `${stackContent[key as keyof typeof stackContent].bg} ${stackContent[key as keyof typeof stackContent].border} border` 
                      : 'bg-transparent border border-transparent hover:bg-slate-800/50'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-2xl">{stackContent[key as keyof typeof stackContent].icon}</span>
                      <span className={`font-bold text-sm md:text-base ${isActive ? 'text-white' : 'text-slate-400'}`}>
                        {stackContent[key as keyof typeof stackContent].title.split(' ')[2] || stackContent[key as keyof typeof stackContent].title.split(' ')[0]}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Right Column: Dynamic Specifications Display Panel */}
            <div className="md:col-span-7 bg-[#0a0f1e] border border-slate-800 rounded-2xl p-8 flex items-center shadow-inner min-h-[240px]">
              <div>
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-4 ${stackContent[activeStack as keyof typeof stackContent].bg} ${stackContent[activeStack as keyof typeof stackContent].color}`}>
                  Engineering Layer
                </span>
                <h3 className="text-2xl font-bold text-white mb-4">
                  {stackContent[activeStack as keyof typeof stackContent].title}
                </h3>
                <p className="text-slate-400 text-sm md:text-base leading-relaxed">
                  {stackContent[activeStack as keyof typeof stackContent].desc}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 📊 PLATFORM QUALITY & APP STORE MANDATES GRID */}
        <div className="bg-[#0a0f1e] border border-slate-800 rounded-3xl p-8 md:p-12 mb-24 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 blur-[80px] rounded-full pointer-events-none"></div>
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">App-Store Ready Standards</h2>
            <p className="text-slate-400 text-sm">We engineer mobile frameworks that strictly follow Apple App Store and Google Play Store core layout and security deployment protocols.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div className="bg-slate-900/40 border border-slate-800/60 p-6 rounded-xl">
              <span className="block text-xl mb-2">⚡</span>
              <h4 className="text-white font-bold mb-1">Fluid 60 FPS</h4>
              <p className="text-slate-500 text-xs">Pre-compiled UI layers and garbage collection tuning for hardware stutter-free navigation tracks.</p>
            </div>
            <div className="bg-slate-900/40 border border-slate-800/60 p-6 rounded-xl">
              <span className="block text-xl mb-2">💾</span>
              <h4 className="text-white font-bold mb-1">Offline-First Logic</h4>
              <p className="text-slate-500 text-xs">Symmetric client-side encryption caches to maintain application operational states during dead zones.</p>
            </div>
            <div className="bg-slate-900/40 border border-slate-800/60 p-6 rounded-xl">
              <span className="block text-xl mb-2">🛡️</span>
              <h4 className="text-white font-bold mb-1">Keychain Security</h4>
              <p className="text-slate-500 text-xs">Biometric tokens, fingerprint callbacks, and hardware-encrypted security token vaults.</p>
            </div>
            <div className="bg-slate-900/40 border border-slate-800/60 p-6 rounded-xl">
              <span className="block text-xl mb-2">📈</span>
              <h4 className="text-white font-bold mb-1">Crash Telemetry</h4>
              <p className="text-slate-500 text-xs">Integrated Firebase and Sentry log trackers to instantly report network exceptions.</p>
            </div>
          </div>
        </div>

        {/* 🚀 Corporate CTA Form */}
        <div className="bg-gradient-to-br from-slate-900 to-black border border-slate-800 rounded-3xl p-10 md:p-16 text-center max-w-4xl mx-auto relative overflow-hidden">
          <h2 className="text-3xl font-bold text-white mb-4">Launch Your Custom App Scope</h2>
          <p className="text-slate-400 mb-8 max-w-xl mx-auto text-sm md:text-base">
            Partner with our full-stack engineering team. Let's schedule a technical sprint scoping session, discuss core UI design components, and compile your first beta build framework.
          </p>
          <Link href="/company/contact" className="inline-block px-10 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-bold rounded-lg transition-all duration-300 shadow-lg shadow-blue-900/30">
            Initiate App Project Brief
          </Link>
        </div>

      </div>
    </main>
  );
}