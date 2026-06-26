'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function UIUXDesignPage() {
  // Functional State for Design Pipeline Explorer
  const [activeStage, setActiveStage] = useState('wireframe');

  // Dynamic Content Data for UI/UX Process Layers
  const pipelineStages = {
    research: {
      title: "User Research & User Personas",
      desc: "Deep diving into target audience psychology, conducting competitive user matrices, mapping heatmaps, and building granular user behavior charts to establish an analytical foundation before sketching any pixels.",
      icon: "🔍",
      metric: "100% Data-Driven",
      highlight: "from-blue-600 to-indigo-600"
    },
    wireframe: {
      title: "Low & High-Fidelity Wireframing",
      desc: "Structuring the structural information architecture. We map comprehensive blueprints of user screen flows, navigation structures, and viewport content hierarchies to eliminate friction before high-fidelity visual composition.",
      icon: "📐",
      metric: "Frictionless Journeys",
      highlight: "from-blue-500 to-cyan-500"
    },
    ui: {
      title: "High-Fidelity UI Design Systems",
      desc: "Crafting beautiful interactive designs tailored exactly to your brand voice. We assemble atomic design components, typographic hierarchies, accessible contrast tokens, and dark/light responsive layout paradigms.",
      icon: "✨",
      metric: "Pixel-Perfect Vector",
      highlight: "from-cyan-500 to-emerald-400"
    },
    prototype: {
      title: "Interactive Prototyping & Motion",
      desc: "Injecting life into static screens. We compile complex animated micro-interactions, responsive transition curves, and clickable, high-fidelity mockups inside Figma to mirror production builds.",
      icon: "⚡",
      metric: "60 FPS Fluid Motion",
      highlight: "from-indigo-500 to-purple-500"
    }
  };

  return (
    <main className="min-h-screen pt-40 pb-20 bg-slate-50 text-slate-700 relative overflow-hidden font-sans selection:bg-blue-500/20 selection:text-blue-700">
      
      {/* 🌌 Premium Ambient Background Top Glow (White-Blue Theme) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[500px] bg-gradient-to-b from-blue-200/40 via-cyan-100/20 to-transparent blur-[160px] pointer-events-none rounded-full"></div>

      {/* 🌐 Subtle Tech Dot Pattern Background */}
      <div className="absolute inset-0 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.04] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* 🔥 Top Badge & High-End Hero Section */}
        <div className="text-center max-w-4xl mx-auto mb-24">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200/60 text-blue-600 text-xs font-bold tracking-widest uppercase mb-6 shadow-sm shadow-blue-100/50 animate-pulse">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-600"></span> Digital Experience Lab
          </span>
          
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-slate-900 mb-6 tracking-tight leading-[1.1] transition-all duration-300">
            Human-Centric <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 drop-shadow-sm">
              UI/UX Experience Engineering
            </span>
          </h1>
          
          <p className="text-slate-500 text-base md:text-xl leading-relaxed mb-12 max-w-2xl mx-auto font-light">
            BNQinTECH codes and curates immersive interface ecosystems. We merge high-level aesthetic beauty with strict usability principles to build software that users love.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link 
              href="#interactive-matrix" 
              className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold rounded-xl transition-all duration-300 shadow-xl shadow-blue-600/30 hover:shadow-blue-600/50 hover:-translate-y-0.5 text-center"
            >
              Explore Design Matrix
            </Link>
            <Link 
              href="/company/contact" 
              className="w-full sm:w-auto px-8 py-4 bg-white border border-slate-200 hover:border-blue-400 text-slate-600 hover:text-blue-600 font-bold rounded-xl transition-all duration-300 shadow-md shadow-slate-100 text-center"
            >
              Schedule Figma Preview
            </Link>
          </div>
        </div>

        {/* ⚙️ WORKING HIGH-END INTERACTIVE MATRIX SECTION */}
        <div id="interactive-matrix" className="bg-white/80 border border-slate-200/80 rounded-3xl p-6 md:p-10 mb-24 max-w-5xl mx-auto shadow-2xl shadow-slate-200/50 backdrop-blur-md transition-all duration-300">
          <div className="text-center max-w-xl mx-auto mb-10">
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-2">Our Methodical Design Pipeline</h2>
            <p className="text-slate-400 text-xs md:text-sm">Click through the architectural phases below to inspect real-time user interface execution blueprints.</p>
          </div>
          
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Box: Smooth State-Changing Buttons */}
            <div className="lg:col-span-5 flex flex-col gap-3">
              {Object.keys(pipelineStages).map((key) => {
                const isActive = activeStage === key;
                return (
                  <button
                    key={key}
                    onClick={() => setActiveStage(key)}
                    className={`text-left px-5 py-4 rounded-xl transition-all duration-300 flex items-center justify-between border group ${
                      isActive 
                      ? 'bg-blue-600 border-blue-600 text-white shadow-xl shadow-blue-600/20 translate-x-2' 
                      : 'bg-slate-50 border-slate-200/60 text-slate-600 hover:bg-white hover:border-blue-400 hover:translate-x-1'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <span className={`text-2xl transition-transform duration-300 ${isActive ? 'scale-110' : 'group-hover:scale-110'}`}>
                        {pipelineStages[key as keyof typeof pipelineStages].icon}
                      </span>
                      <span className="font-bold text-sm md:text-base">
                        {pipelineStages[key as keyof typeof pipelineStages].title.split(' & ')[0].split(' / ')[0]}
                      </span>
                    </div>
                    <span className={`text-xs font-mono px-2 py-0.5 rounded-md ${isActive ? 'bg-white/20 text-white' : 'bg-slate-200/60 text-slate-500'}`}>
                      →
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Right Box: Dynamic Specification Display Card */}
            <div className="lg:col-span-7 bg-slate-50/50 border border-slate-200 rounded-2xl p-6 md:p-8 flex items-center min-h-[250px] shadow-inner relative overflow-hidden group">
              {/* Subtle design block in background */}
              <div className={`absolute -right-10 -bottom-10 w-40 h-40 bg-gradient-to-br ${pipelineStages[activeStage as keyof typeof pipelineStages].highlight} opacity-[0.03] rounded-full pointer-events-none transition-all duration-500 group-hover:scale-120`}></div>
              
              <div className="w-full">
                <span className={`inline-block px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase mb-4 bg-gradient-to-r ${pipelineStages[activeStage as keyof typeof pipelineStages].highlight} text-white shadow-sm`}>
                  {pipelineStages[activeStage as keyof typeof pipelineStages].metric}
                </span>
                
                <h3 className="text-xl md:text-2xl font-black text-slate-900 mb-3 transition-colors duration-300">
                  {pipelineStages[activeStage as keyof typeof pipelineStages].title}
                </h3>
                
                <p className="text-slate-500 text-sm md:text-base leading-relaxed font-light">
                  {pipelineStages[activeStage as keyof typeof pipelineStages].desc}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 📊 CORE UI-UX USABILITY BENCHMARKS GRID */}
        <div className="mb-24">
          <div className="text-center max-w-xl mx-auto mb-12">
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-3">Enterprise Usability Mandates</h2>
            <p className="text-slate-400 text-xs md:text-sm">We construct core visual patterns centered heavily around global accessible UI/UX regulations.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Metric Card 1 */}
            <div className="bg-white border border-slate-200 p-6 rounded-2xl hover:border-blue-400 hover:shadow-xl hover:shadow-slate-100 transition-all duration-300 group">
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center text-xl mb-5 group-hover:scale-110 transition-transform duration-300">
                ♿
              </div>
              <h4 className="text-slate-900 font-bold text-base mb-1.5">WCAG 2.1 Accessibility</h4>
              <p className="text-slate-400 text-xs leading-relaxed font-light">Strict compliance with element contrast ratios and complete screen-reader DOM navigation structures.</p>
            </div>

            {/* Metric Card 2 */}
            <div className="bg-white border border-slate-200 p-6 rounded-2xl hover:border-indigo-400 hover:shadow-xl hover:shadow-slate-100 transition-all duration-300 group">
              <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center text-xl mb-5 group-hover:scale-110 transition-transform duration-300">
                ⚛️
              </div>
              <h4 className="text-slate-900 font-bold text-base mb-1.5">Atomic Design Tokens</h4>
              <p className="text-slate-400 text-xs leading-relaxed font-light">Exhaustive systems of unified components to ensure seamless conversion straight into React/Tailwind setups.</p>
            </div>

            {/* Metric Card 3 */}
            <div className="bg-white border border-slate-200 p-6 rounded-2xl hover:border-cyan-400 hover:shadow-xl hover:shadow-slate-100 transition-all duration-300 group">
              <div className="w-12 h-12 bg-cyan-50 text-cyan-600 rounded-xl flex items-center justify-center text-xl mb-5 group-hover:scale-110 transition-transform duration-300">
                ⏱️
              </div>
              <h4 className="text-slate-900 font-bold text-base mb-1.5">Cognitive Load Cuts</h4>
              <p className="text-slate-400 text-xs leading-relaxed font-light">Applying Fitts' and Hick's interface paradigms to structure clean user tunnels and reduce system dropouts.</p>
            </div>

            {/* Metric Card 4 */}
            <div className="bg-white border border-slate-200 p-6 rounded-2xl hover:border-emerald-400 hover:shadow-xl hover:shadow-slate-100 transition-all duration-300 group">
              <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center text-xl mb-5 group-hover:scale-110 transition-transform duration-300">
                📱
              </div>
              <h4 className="text-slate-900 font-bold text-base mb-1.5">Responsive Frameworks</h4>
              <p className="text-slate-400 text-xs leading-relaxed font-light">Symmetric component structures designed to scale flawlessly from small smartwatches to ultra-wide displays.</p>
            </div>

          </div>
        </div>

        {/* 🚀 Corporate CTA Scoping Box */}
        <div className="bg-gradient-to-br from-slate-900 to-indigo-950 border border-slate-800 rounded-3xl p-10 md:p-16 text-center max-w-4xl mx-auto relative overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20"></div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 blur-[80px] rounded-full pointer-events-none"></div>
          
          <h2 className="text-2xl md:text-4xl font-black text-white mb-4 relative z-10 tracking-tight">
            Ready to Prototype Your Vision?
          </h2>
          <p className="text-slate-400 mb-8 max-w-xl mx-auto text-sm md:text-base relative z-10 font-light leading-relaxed">
            Partner with our interface optimization laboratory. Let's trace user journeys, structure your core wireframe layouts, and compile your system design tokens cleanly.
          </p>
          <Link 
            href="/company/contact" 
            className="inline-block px-10 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-bold rounded-lg transition-all duration-300 shadow-lg shadow-blue-500/20 relative z-10"
          >
            Initiate UI/UX Strategy Sprint
          </Link>
        </div>

      </div>
    </main>
  );
}