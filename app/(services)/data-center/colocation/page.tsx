"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function ColocationPage() {
  // Colocation Features Data
  const services = [
    {
      title: "Flexible Rack Space",
      description: "From single server units (1U) to quarter, half, and full private locking cabinets (42U+), scale your physical footprint as your business grows.",
      icon: "🏢"
    },
    {
      title: "100% Power SLA",
      description: "Uninterrupted power supply with A/B dual power feeds, massive battery UPS systems, and N+1 diesel generators on standby.",
      icon: "⚡"
    },
    {
      title: "Precision Cooling",
      description: "Maintain optimal hardware temperatures with N+1 HVAC systems, cold-aisle containment, and raised-floor ambient cooling.",
      icon: "❄️"
    },
    {
      title: "Carrier-Neutral Network",
      description: "Don't get locked into one ISP. Connect directly to multiple Tier-1 telecom providers and internet exchanges right from your rack.",
      icon: "🌐"
    },
    {
      title: "Physical Security",
      description: "Multi-layered security including 24/7 armed guards, biometric/retina scanners, anti-tailgating mantraps, and continuous CCTV recording.",
      icon: "🛡️"
    },
    {
      title: "24/7 Remote & Smart Hands",
      description: "Our on-site certified engineers are available 24/7 to reboot servers, swap hard drives, and manage cabling so you never have to travel.",
      icon: "🔧"
    }
  ];

  // Colocation Specifications/KPIs
  const metrics = [
    { value: "Tier III+", label: "Facility Certification" },
    { value: "100%", label: "Power & Uptime SLA" },
    { value: "Carrier", label: "Neutral Peering" },
    { value: "24/7/365", label: "On-Site Remote Hands" }
  ];

  return (
    <div className="min-h-screen bg-slate-50 pt-40 pb-20 font-sans">
      
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="bg-slate-900 rounded-[40px] p-8 md:p-16 lg:p-20 relative overflow-hidden shadow-2xl">
          {/* Server Rack Glowing Background Effect */}
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none flex flex-col justify-between py-10 px-20">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="w-full h-2 bg-blue-500 rounded-full animate-pulse shadow-[0_0_15px_rgba(37,99,235,0.8)]" style={{ animationDelay: `${i * 0.2}s` }}></div>
            ))}
          </div>
          <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-blue-600/20 blur-[120px] pointer-events-none rounded-full -translate-y-1/2 translate-x-1/4" />
          
          <div className="relative z-10 max-w-3xl">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-blue-400 font-bold tracking-widest uppercase text-xs mb-6 block"
            >
              BNQinTECH Infrastructure Services
            </motion.span>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight mb-6 leading-tight"
            >
              Your Hardware. <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Our Infrastructure.</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-slate-400 font-light leading-relaxed mb-10 max-w-2xl"
            >
              House your mission-critical servers in our state-of-the-art, high-density colocation facilities. Enjoy enterprise-grade power, precision cooling, and ultimate physical security without the massive capital expense of building your own data center.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <Link href="/company/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3.5 rounded-full font-bold text-sm uppercase tracking-wider transition-all shadow-lg hover:shadow-blue-600/30 hover:-translate-y-0.5">
                Request Space & Pricing
              </Link>
              <Link href="#facilities" className="bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 px-8 py-3.5 rounded-full font-bold text-sm uppercase tracking-wider transition-all">
                Facility Specs
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
              <div className="absolute inset-0 bg-gradient-to-t from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <h3 className="text-3xl md:text-4xl font-black text-slate-900 mb-2 relative z-10">{metric.value}</h3>
              <p className="text-xs md:text-sm text-slate-500 font-bold uppercase tracking-wide relative z-10">{metric.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Facility Features Grid */}
        <div id="facilities" className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">Enterprise Colocation Standards</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">We provide the optimal physical environment for your high-density compute, storage, and networking equipment.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-xl hover:border-blue-200 transition-all duration-300 group"
              >
                <div className="text-4xl mb-6 bg-slate-50 w-16 h-16 rounded-2xl flex items-center justify-center border border-slate-100 group-hover:bg-blue-500 transition-colors duration-300">
                  <span className="group-hover:brightness-0 group-hover:invert transition-all">{service.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed font-medium">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Remote Hands & Access Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-3xl p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-10 shadow-2xl relative overflow-hidden"
        >
          {/* Floor grid design background */}
          <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px', transform: 'perspective(500px) rotateX(60deg) translateY(-100px) translateZ(-200px)' }}></div>

          <div className="relative z-10 max-w-2xl">
            <h2 className="text-3xl font-black text-white mb-4">You Manage the Data. We Manage the Hardware.</h2>
            <p className="text-slate-400 leading-relaxed mb-8">
              Forget middle-of-the-night drives to the data center. Our <strong>24/7 Smart Hands</strong> team acts as your on-site physical IT staff. From hard restarts and visual equipment checks to complex cable tracing and hardware replacements, we execute your instructions precisely and immediately.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center border border-blue-500/50">
                  <span className="text-blue-400 font-bold">✓</span>
                </div>
                <span className="text-sm font-bold text-white tracking-wide">Server Reboots</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center border border-blue-500/50">
                  <span className="text-blue-400 font-bold">✓</span>
                </div>
                <span className="text-sm font-bold text-white tracking-wide">Cable Management</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center border border-blue-500/50">
                  <span className="text-blue-400 font-bold">✓</span>
                </div>
                <span className="text-sm font-bold text-white tracking-wide">Component Swaps</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center border border-blue-500/50">
                  <span className="text-blue-400 font-bold">✓</span>
                </div>
                <span className="text-sm font-bold text-white tracking-wide">Shipping & Receiving</span>
              </div>
            </div>
          </div>
          
        </motion.div>

      </div>
    </div>
  );
}