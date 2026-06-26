
"use client";

import React from "react";
import { motion } from "framer-motion";

export default function NetworkPage() {
  // Network Stats Data
  const stats = [
    { label: "Global Uptime SLA", value: "99.999%", desc: "Enterprise-grade reliability" },
    { label: "Network Capacity", value: "12 Tbps+", desc: "Massive DDoS mitigation" },
    { label: "Data Centers", value: "4", desc: "Strategically located globally" },
    { label: "Edge Locations", value: "15+", desc: "For ultra-low latency routing" },
  ];

  // Data Center Locations Data
  const locations = [
    {
      region: "Asia Pacific (Primary)",
      city: "Pune, India",
      tier: "Tier IV Certified",
      features: ["Renewable Energy", "Carrier Neutral", "24/7 Armed Security"],
      ping: "< 5ms",
    },
    {
      region: "Asia Pacific",
      city: "Mumbai, India",
      tier: "Tier III+",
      features: ["Direct IXP Peering", "Dual Power Feeds", "Biometric Access"],
      ping: "< 12ms",
    },
    {
      region: "North America",
      city: "Ashburn, VA (USA)",
      tier: "Tier III",
      features: ["Transatlantic Gateway", "DDoS Scrubbing", "100G Network"],
      ping: "~ 140ms",
    },
    {
      region: "Europe",
      city: "Frankfurt, Germany",
      tier: "Tier III+",
      features: ["GDPR Compliant", "Eco-Cooling", "Premium Routing"],
      ping: "~ 120ms",
    },
  ];

  // SVG Icons
  const ServerIcon = () => (
    <svg className="w-5 h-5 text-blue-500 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
    </svg>
  );

  return (
    <div className="min-h-screen bg-slate-50 pt-28 pb-20 font-sans selection:bg-blue-200">
      
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-slate-900 py-24 mb-16 rounded-b-[40px] shadow-2xl mx-2 sm:mx-4">
        {/* Animated Background Gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[300px] bg-blue-600/20 blur-[120px] pointer-events-none rounded-full" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500/10 blur-[100px] pointer-events-none rounded-full" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-blue-400 font-bold tracking-widest uppercase text-xs mb-4 block"
          >
            BNQinTECH Global Backbone
          </motion.span>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black text-white tracking-tight mb-6"
          >
            Built for <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Extreme Scale.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto font-light leading-relaxed"
          >
            Our infrastructure is engineered for zero downtime. With multiple highly redundant data centers and advanced edge routing, your applications load instantly worldwide.
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Network Stats Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24"
        >
          {stats.map((stat, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-lg hover:border-blue-200 transition-all duration-300 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-blue-50 to-transparent rounded-bl-full -z-10 group-hover:scale-110 transition-transform" />
              <p className="text-slate-500 font-semibold text-sm uppercase tracking-wider mb-2">{stat.label}</p>
              <h3 className="text-4xl font-black text-slate-900 mb-2">{stat.value}</h3>
              <p className="text-xs text-slate-400 font-medium">{stat.desc}</p>
            </div>
          ))}
        </motion.div>

        {/* Global Data Centers Section */}
        <div className="mb-16">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mb-10 flex items-center gap-4"
          >
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">Global Data Centers</h2>
            <div className="h-px bg-slate-200 flex-1 hidden sm:block"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {locations.map((loc, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-xl transition-shadow flex flex-col md:flex-row gap-6 relative"
              >
                {/* Ping/Status Indicator */}
                <div className="absolute top-8 right-8 flex items-center gap-2">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                  </span>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{loc.ping}</span>
                </div>

                <div className="flex-1">
                  <span className="text-xs font-bold text-blue-600 uppercase tracking-wider bg-blue-50 px-3 py-1 rounded-full mb-4 inline-block">
                    {loc.region}
                  </span>
                  <h3 className="text-2xl font-black text-slate-900 mb-1">{loc.city}</h3>
                  <p className="text-sm text-slate-500 font-medium mb-6">{loc.tier} Facility</p>
                  
                  <ul className="space-y-3">
                    {loc.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-3 text-sm text-slate-600 font-medium">
                        <ServerIcon />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Network Features Callout */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-10 md:p-14 text-center text-white shadow-2xl relative overflow-hidden"
        >
          {/* Abstract network circles in background */}
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
          
          <h2 className="text-3xl md:text-4xl font-black mb-6 relative z-10">Intelligent DDoS Protection Built-In</h2>
          <p className="text-blue-100 max-w-2xl mx-auto mb-8 font-light leading-relaxed relative z-10">
            Every deployment on our network is automatically protected by our proprietary L3/L4 & L7 threat mitigation system. We stop malicious traffic at the edge before it ever reaches your server.
          </p>
          <button className="bg-white text-blue-600 hover:bg-slate-50 px-8 py-3.5 rounded-full font-bold uppercase tracking-wider text-sm transition-all hover:shadow-lg hover:-translate-y-0.5 relative z-10">
            View Pricing Plans
          </button>
        </motion.div>

      </div>
    </div>
  );
}