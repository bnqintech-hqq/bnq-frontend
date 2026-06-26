"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function SecurityPage() {
  // Security Features Data
  const services = [
    {
      title: "6-Layer Physical Security",
      description: "From K-rated perimeter fencing and crash barriers to biometric mantraps, our facilities ensure zero unauthorized physical access.",
      icon: "🏢"
    },
    {
      title: "24/7/365 Armed Guards",
      description: "Highly trained, round-the-clock on-site security personnel patrolling the perimeter, loading docks, and data halls.",
      icon: "👮‍♂️"
    },
    {
      title: "Biometric Access Control",
      description: "Access to private cages and data halls requires dual-factor authentication, including RFID badges and retina/fingerprint scans.",
      icon: "👁️"
    },
    {
      title: "Continuous CCTV Surveillance",
      description: "High-definition, motion-activated cameras cover every inch of the facility, with footage securely archived for 90+ days.",
      icon: "📹"
    },
    {
      title: "Early Fire Detection (VESDA)",
      description: "Very Early Smoke Detection Apparatus combined with eco-friendly gas fire suppression systems to protect hardware without water damage.",
      icon: "🧯"
    },
    {
      title: "Global Compliance Standards",
      description: "Our facilities are audited annually and strictly adhere to ISO 27001, SOC 2 Type II, PCI-DSS, and HIPAA regulations.",
      icon: "📜"
    }
  ];

  // Security KPIs
  const metrics = [
    { value: "Zero", label: "Unauthorized Access Incidents" },
    { value: "SOC 2", label: "Type II Certified" },
    { value: "24/7", label: "On-Site Security Operations" },
    { value: "6 Tiers", label: "Of Physical Defense" }
  ];

  return (
    <div className="min-h-screen bg-slate-50 pt-40 pb-20 font-sans">
      
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="bg-slate-900 rounded-[40px] p-8 md:p-16 lg:p-20 relative overflow-hidden shadow-2xl">
          {/* Laser Scanner Background Effect */}
          <div className="absolute inset-0 opacity-20 pointer-events-none overflow-hidden flex justify-center items-center">
            <div className="w-[800px] h-px bg-red-500 absolute animate-[scan_4s_ease-in-out_infinite] shadow-[0_0_20px_red]"></div>
            <div className="w-full h-full" style={{ backgroundImage: 'linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
            <style>{`
              @keyframes scan {
                0%, 100% { top: 0%; opacity: 0; }
                10% { opacity: 1; }
                50% { top: 100%; opacity: 1; }
                90% { opacity: 1; }
              }
            `}</style>
          </div>
          <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-blue-600/20 blur-[120px] pointer-events-none rounded-full -translate-y-1/2 -translate-x-1/2" />
          
          <div className="relative z-10 max-w-3xl">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-red-400 font-bold tracking-widest uppercase text-xs mb-6 block flex items-center gap-2"
            >
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span> RESTRICTED ACCESS ZONE
            </motion.span>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight mb-6 leading-tight"
            >
              Military-Grade <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Physical Security.</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-slate-400 font-light leading-relaxed mb-10 max-w-2xl"
            >
              Your data is your most valuable asset. We protect it inside fortress-like facilities defended by armed personnel, biometric mantraps, and 24/7 comprehensive surveillance systems. 
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <Link href="/company/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3.5 rounded-full font-bold text-sm uppercase tracking-wider transition-all shadow-lg hover:shadow-blue-600/30 hover:-translate-y-0.5">
                Schedule a Facility Tour
              </Link>
              <Link href="#defense" className="bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 px-8 py-3.5 rounded-full font-bold text-sm uppercase tracking-wider transition-all">
                View Defense Layers
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* KPI Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-24">
          {metrics.map((metric, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-6 rounded-3xl border border-slate-200 text-center shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-2 h-full bg-slate-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <h3 className="text-3xl md:text-4xl font-black text-slate-900 mb-2">{metric.value}</h3>
              <p className="text-xs md:text-sm text-slate-500 font-bold uppercase tracking-wide">{metric.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Services Grid */}
        <div id="defense" className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">Defense-in-Depth Architecture</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">We employ a multi-layered security approach. To reach a server, one must successfully pass through six distinct checkpoints.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-xl hover:border-slate-400 transition-all duration-300 group"
              >
                <div className="text-4xl mb-6 bg-slate-50 w-16 h-16 rounded-2xl flex items-center justify-center border border-slate-200 group-hover:bg-slate-900 transition-colors duration-300">
                  <span className="group-hover:brightness-0 group-hover:invert transition-all">{service.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed font-medium">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 6-Layer Security Visualization Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-slate-900 to-blue-950 rounded-3xl p-10 md:p-14 flex flex-col lg:flex-row items-center justify-between gap-12 shadow-2xl relative overflow-hidden"
        >
          <div className="relative z-10 max-w-xl">
            <h2 className="text-3xl font-black text-white mb-4">The 6-Layer Authentication Protocol</h2>
            <p className="text-slate-400 leading-relaxed mb-6">
              Our "Zero-Trust Physical Security" means nobody wanders the halls unescorted. From the moment a vehicle approaches the gate, to the opening of a specific server rack door, every step is logged, monitored, and authenticated.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="bg-slate-800 text-slate-300 border border-slate-700 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider">Mantraps</span>
              <span className="bg-slate-800 text-slate-300 border border-slate-700 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider">Retina Scans</span>
              <span className="bg-slate-800 text-slate-300 border border-slate-700 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider">VLAN Isolation</span>
            </div>
          </div>
          
          {/* Security Layers Visual Graphic */}
          <div className="relative z-10 w-full max-w-md">
            <div className="flex flex-col gap-2 relative">
              {/* Connecting line */}
              <div className="absolute left-[1.15rem] top-4 bottom-4 w-0.5 bg-slate-700 z-0"></div>

              {[
                { layer: "Layer 1", name: "Perimeter Fencing & Guards", color: "bg-slate-500" },
                { layer: "Layer 2", name: "Facility Reception & ID Check", color: "bg-blue-400" },
                { layer: "Layer 3", name: "Biometric Mantrap", color: "bg-indigo-400" },
                { layer: "Layer 4", name: "Data Hall Access (Retina)", color: "bg-purple-400" },
                { layer: "Layer 5", name: "Private Cage Lock", color: "bg-amber-400" },
                { layer: "Layer 6", name: "Locked Server Cabinet", color: "bg-emerald-400" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 relative z-10 bg-slate-900/80 p-3 rounded-xl border border-slate-800 backdrop-blur-sm hover:border-slate-600 transition-colors">
                  <div className={`w-10 h-10 rounded-lg ${item.color} bg-opacity-20 flex items-center justify-center border border-${item.color.split('-')[1]}-500/50 shrink-0`}>
                    <span className="text-xs font-bold text-white">{i + 1}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-500 font-bold uppercase block tracking-wider">{item.layer}</span>
                    <span className="text-sm font-bold text-slate-200">{item.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}