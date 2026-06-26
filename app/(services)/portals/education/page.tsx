'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function EducationPortalPage() {
  // Functional State for Feature Suite Explorer
  const [activeSuite, setActiveSuite] = useState('student');

  // Dynamic Content Data for Education Modules
  const suitesContent = {
    student: {
      title: "Student Learning Dashboard",
      desc: "An intuitive, gamified learning portal for students. Features direct access to live virtual classes, interactive quizzes, dynamic assignment submission trackers, and recorded lecture archives.",
      icon: "🎓",
      color: "text-blue-400",
      bg: "bg-blue-500/10",
      border: "border-blue-500/50"
    },
    teacher: {
      title: "Teacher Management Panel",
      desc: "Empower educators with comprehensive digital tools. Includes automated attendance systems, seamless gradebook generation, bulk assignment planners, and real-time student performance analytics.",
      icon: "📝",
      color: "text-emerald-400",
      bg: "bg-emerald-500/10",
      border: "border-emerald-500/50"
    },
    admin: {
      title: "Central Administrative Control",
      desc: "A powerful backend engine for institution management. Handles complex automated fee collections with payment gateways, automated timetable scheduling (AI optimized), and staff inventory management.",
      icon: "⚙️",
      color: "text-purple-400",
      bg: "bg-purple-500/10",
      border: "border-purple-500/50"
    },
    parent: {
      title: "Parent Observation Portal",
      desc: "Bridge the gap between home and academia. Provides parents with secure, isolated logins to track automated attendance alerts, test reports, fee dues, and direct communication channels with teachers.",
      icon: "👪",
      color: "text-cyan-400",
      bg: "bg-cyan-500/10",
      border: "border-cyan-500/50"
    }
  };

  return (
    <main className="min-h-screen pt-40 pb-20 bg-[#050812] text-slate-300 relative overflow-hidden font-sans">
      
      {/* 🌌 EdTech Royal Blue/Cyan Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-blue-600/10 blur-[160px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* 🔥 Hero Section */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <span className="text-blue-400 font-bold tracking-widest uppercase text-xs mb-4 block animate-pulse">
            Next-Gen EdTech Solutions
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-white mb-6 tracking-tight leading-tight">
            Next-Generation <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400">
              Education Portals
            </span>
          </h1>
          <p className="text-slate-400 text-base md:text-lg leading-relaxed mb-10 max-w-2xl mx-auto font-light">
            BNQinTECH delivers fully integrated, multi-tenant Learning Management Systems (LMS) and institution ERP software. Engineered to streamline operations for schools, universities, and coaching networks.
          </p>

          <div className="flex justify-center">
            <Link href="#suite-explorer" className="px-8 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-lg transition-all duration-300 shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)]">
              Explore Portal Modules
            </Link>
          </div>
        </div>

        {/* ⚙️ WORKING INTERACTIVE SUITE EXPLORER */}
        <div id="suite-explorer" className="bg-slate-900/30 border border-slate-800 rounded-3xl p-6 md:p-10 mb-24 max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Unified Campus Ecosystem</h2>
            <p className="text-slate-400 text-sm">Click through the structural nodes to view dashboard interfaces designed for different stakeholders.</p>
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

            {/* Right Column: Dynamic Specs Display Panel */}
            <div className="md:col-span-7 bg-[#0a0f1e] border border-slate-800 rounded-2xl p-8 flex items-center shadow-inner min-h-[220px]">
              <div>
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-4 ${suitesContent[activeSuite as keyof typeof suitesContent].bg} ${suitesContent[activeSuite as keyof typeof suitesContent].color}`}>
                  Core Module
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

        {/* 📊 PLATFORM INFRASTRUCTURE METRICS GRID */}
        <div className="bg-[#0a0f1e] border border-slate-800 rounded-3xl p-8 md:p-12 mb-24 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 blur-[80px] rounded-full pointer-events-none"></div>
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Scalable Cloud Core</h2>
            <p className="text-slate-400 text-sm">Our platform backend is designed to handle high concurrency during morning exam windows and automated result rollouts seamlessly.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div className="bg-slate-900/40 border border-slate-800/60 p-6 rounded-xl">
              <span className="block text-xl mb-2">📹</span>
              <h4 className="text-white font-bold mb-1">Low-Latency WebRTC</h4>
              <p className="text-slate-500 text-xs">Crystal clear live online streaming and screen-share integration directly in-browser.</p>
            </div>
            <div className="bg-slate-900/40 border border-slate-800/60 p-6 rounded-xl">
              <span className="block text-xl mb-2">☁️</span>
              <h4 className="text-white font-bold mb-1">AWS S3 Asset Vault</h4>
              <p className="text-slate-500 text-xs">Secure cloud storage nodes to hold thousands of hours of high-definition video materials.</p>
            </div>
            <div className="bg-slate-900/40 border border-slate-800/60 p-6 rounded-xl">
              <span className="block text-xl mb-2">📝</span>
              <h4 className="text-white font-bold mb-1">AI Exam Proctoring</h4>
              <p className="text-slate-500 text-xs">Optional AI-driven browser lock and tab switching alerts to minimize test manipulation.</p>
            </div>
            <div className="bg-slate-900/40 border border-slate-800/60 p-6 rounded-xl">
              <span className="block text-xl mb-2">💰</span>
              <h4 className="text-white font-bold mb-1">Fee Workflow Support</h4>
              <p className="text-slate-500 text-xs">Structured fee records, reminder workflows, and finance exports aligned with student profile IDs.</p>
            </div>
          </div>
        </div>

        {/* 🚀 Corporate Request Form Section */}
        <div className="bg-gradient-to-br from-slate-900 to-black border border-slate-800 rounded-3xl p-10 md:p-16 text-center max-w-4xl mx-auto relative overflow-hidden">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Modernize Your Campus?</h2>
          <p className="text-slate-400 mb-8 max-w-xl mx-auto text-sm md:text-base">
            Reach out to our academic product architects. Let's schedule a full white-label presentation demo, discuss data migrations from traditional offline systems, and custom server bandwidth structures.
          </p>
          <Link href="/company/contact" className="inline-block px-10 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-bold rounded-lg transition-all duration-300 shadow-lg shadow-blue-900/30">
            Request Institutional Demo
          </Link>
        </div>

      </div>
    </main>
  );
}
