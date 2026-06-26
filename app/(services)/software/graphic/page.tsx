'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function GraphicDesignPage() {
  // Functional State for Design Categories Matrix
  const [activeCategory, setActiveCategory] = useState('marketing');

  // Dynamic Content Data for Graphic Services
  const categoriesContent = {
    marketing: {
      title: "Marketing Ads & Campaign Visuals",
      desc: "Creating high-click-through rate (CTR) social media post designs, performance-marketing banners (Meta, Google Ads), and dynamic conversion assets tailored to capture immediate user attention.",
      icon: "🎯",
      color: "text-blue-400",
      bg: "bg-blue-500/10",
      border: "border-blue-500/50"
    },
    print: {
      title: "Corporate Print & Editorial Media",
      desc: "Designing CMYK production-ready vector catalogs, premium brochures, executive company magazines, custom stationery kits, and large-format exhibition banners with strict color profile parameters.",
      icon: "🖨️",
      color: "text-emerald-400",
      bg: "bg-emerald-500/10",
      border: "border-emerald-500/50"
    },
    digital: {
      title: "UI Graphics & Vector Elements",
      desc: "Crafting customized high-definition icon sets, custom illustrations, infographics to explain complex data points, and custom SVG interface vectors optimized for fast web deployment layouts.",
      icon: "✨",
      color: "text-purple-400",
      bg: "bg-purple-500/10",
      border: "border-purple-500/50"
    },
    merch: {
      title: "Corporate Merchandising & Packs",
      desc: "Developing high-end retail packaging designs, 3D die-cut mockups, branded corporate apparel vectors, and premium swag kit designs that align flawlessly with your core corporate identity parameters.",
      icon: "📦",
      color: "text-cyan-400",
      bg: "bg-cyan-500/10",
      border: "border-cyan-500/50"
    }
  };

  return (
    <main className="min-h-screen pt-40 pb-20 bg-[#050812] text-slate-300 relative overflow-hidden font-sans">
      
      {/* 🌌 High-End Creative Cyan/Indigo Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-cyan-600/10 blur-[160px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* 🔥 Hero Section */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <span className="text-cyan-400 font-bold tracking-widest uppercase text-xs mb-4 block animate-pulse">
            High-Impact Creative Production
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-white mb-6 tracking-tight leading-tight">
            High-Conversion <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400">
              Graphic Design Assets
            </span>
          </h1>
          <p className="text-slate-400 text-base md:text-lg leading-relaxed mb-10 max-w-2xl mx-auto font-light">
            BNQinTECH delivers top-tier graphic production engines for ambitious enterprises. We structure eye-catching marketing designs and print matrices engineered to elevate conversion rates.
          </p>

          <div className="flex justify-center">
            <Link href="#design-explorer" className="px-8 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-lg transition-all duration-300 shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)]">
              Explore Design Verticals
            </Link>
          </div>
        </div>

        {/* ⚙️ WORKING INTERACTIVE DESIGN CATEGORIES EXPLORER */}
        <div id="design-explorer" className="bg-slate-900/30 border border-slate-800 rounded-3xl p-6 md:p-10 mb-24 max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">The Creative Production Asset Matrix</h2>
            <p className="text-slate-400 text-sm">Select an artwork domain below to inspect our core technical workflow and delivery standards.</p>
          </div>
          
          <div className="grid md:grid-cols-12 gap-8">
            
            {/* Left Column: Interactive Tab Switcher */}
            <div className="md:col-span-5 flex flex-col gap-3">
              {Object.keys(categoriesContent).map((key) => {
                const isActive = activeCategory === key;
                return (
                  <button
                    key={key}
                    onClick={() => setActiveCategory(key)}
                    className={`text-left px-5 py-4 rounded-xl transition-all duration-300 ${
                      isActive 
                      ? `${categoriesContent[key as keyof typeof categoriesContent].bg} ${categoriesContent[key as keyof typeof categoriesContent].border} border` 
                      : 'bg-transparent border border-transparent hover:bg-slate-800/50'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-2xl">{categoriesContent[key as keyof typeof categoriesContent].icon}</span>
                      <span className={`font-bold text-sm md:text-base ${isActive ? 'text-white' : 'text-slate-400'}`}>
                        {categoriesContent[key as keyof typeof categoriesContent].title}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Right Column: Dynamic Data Display Panel */}
            <div className="md:col-span-7 bg-[#0a0f1e] border border-slate-800 rounded-2xl p-8 flex items-center shadow-inner min-h-[240px]">
              <div>
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-4 ${categoriesContent[activeCategory as keyof typeof categoriesContent].bg} ${categoriesContent[activeCategory as keyof typeof categoriesContent].color}`}>
                  Production Layer
                </span>
                <h3 className="text-2xl font-bold text-white mb-4">
                  {categoriesContent[activeCategory as keyof typeof categoriesContent].title}
                </h3>
                <p className="text-slate-400 text-sm md:text-base leading-relaxed">
                  {categoriesContent[activeCategory as keyof typeof categoriesContent].desc}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 📋 DESIGN INFRASTRUCTURE QUALITY GRID */}
        <div className="bg-[#0a0f1e] border border-slate-800 rounded-3xl p-8 md:p-12 mb-24 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 blur-[80px] rounded-full pointer-events-none"></div>
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Production-Grade Standards</h2>
            <p className="text-slate-400 text-sm">We provide pure, uncompressed high-fidelity assets optimized for physical prints as well as web execution layouts.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div className="bg-slate-900/40 border border-slate-800/60 p-6 rounded-xl">
              <span className="block text-xl mb-2">💎</span>
              <h4 className="text-white font-bold mb-1">Vector Delivery</h4>
              <p className="text-slate-500 text-xs">Fully source-mapped editable formats (.AI, .EPS, .SVG, .FIGMA) for infinite scaling hooks.</p>
            </div>
            <div className="bg-slate-900/40 border border-slate-800/60 p-6 rounded-xl">
              <span className="block text-xl mb-2">🎨</span>
              <h4 className="text-white font-bold mb-1">Color Accuracy</h4>
              <p className="text-slate-500 text-xs">Strict adherence to target RGB digital profiles and print-ready CMYK/Pantone matrices.</p>
            </div>
            <div className="bg-slate-900/40 border border-slate-800/60 p-6 rounded-xl">
              <span className="block text-xl mb-2">⚡</span>
              <h4 className="text-white font-bold mb-1">Web Compression</h4>
              <p className="text-slate-500 text-xs">Pre-optimized tiny WebP asset exports to secure rapid loading speed matrices.</p>
            </div>
            <div className="bg-slate-900/40 border border-slate-800/60 p-6 rounded-xl">
              <span className="block text-xl mb-2">📝</span>
              <h4 className="text-white font-bold mb-1">Commercial Rights</h4>
              <p className="text-slate-500 text-xs">100% unrestricted intellectual ownership rights transfer upon asset build handovers.</p>
            </div>
          </div>
        </div>

        {/* 🚀 Corporate CTA Form */}
        <div className="bg-gradient-to-br from-slate-900 to-black border border-slate-800 rounded-3xl p-10 md:p-16 text-center max-w-4xl mx-auto relative overflow-hidden">
          <h2 className="text-3xl font-bold text-white mb-4">Scale Your Marketing Assets Now</h2>
          <p className="text-slate-400 mb-8 max-w-xl mx-auto text-sm md:text-base">
            Connect directly with our graphic deployment laboratory. Let's align on dedicated retainer frameworks, volume creative pipelines, or targeted ad campaign assets.
          </p>
          <Link href="/company/contact" className="inline-block px-10 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-bold rounded-lg transition-all duration-300 shadow-lg shadow-blue-900/30">
            Initiate Asset Project Brief
          </Link>
        </div>

      </div>
    </main>
  );
}