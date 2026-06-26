"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function FirewallPage() {
  // Security Features Data
  const services = [
    {
      title: "Next-Gen Firewall (NGFW)",
      description: "Application-aware network security that monitors and blocks malicious traffic at Layer 7, going far beyond standard port-blocking.",
      icon: "🔥"
    },
    {
      title: "Intrusion Prevention (IDS/IPS)",
      description: "Real-time deep packet inspection that automatically detects, flags, and neutralizes known cyber threats and zero-day exploits.",
      icon: "🛡️"
    },
    {
      title: "Line-Rate SSL/TLS Inspection",
      description: "Decrypt and scrub encrypted traffic at blazing speeds without introducing latency, exposed vectors, or performance bottlenecks.",
      icon: "🔑"
    },
    {
      title: "Zero-Trust Network Access",
      description: "Enforce strict identity verification for every single user and device trying to access your private data center environment.",
      icon: "🆔"
    },
    {
      title: "Advanced DDoS Scrubbing",
      description: "Filter out massive volumetric multi-gigabit DDoS attacks at our network edge, ensuring your applications remain online.",
      icon: "🌊"
    },
    {
      title: "Managed Security Policies",
      description: "Our certified security team handles continuous patch updates, custom port configurations, and strict access control lists (ACLs).",
      icon: "⚙️"
    }
  ];

  // Security Metrics
  const metrics = [
    { value: "< 1ms", label: "Latency Overhead" },
    { value: "100 Gbps+", label: "Inspection Throughput" },
    { value: "Real-time", label: "Threat Intel Updates" },
    { value: "Layer 3-7", label: "Full Stack Protection" }
  ];

  return (
    <div className="min-h-screen bg-slate-50 pt-40 pb-20 font-sans">
      
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="bg-slate-900 rounded-[40px] p-8 md:p-16 lg:p-20 relative overflow-hidden shadow-2xl">
          {/* Cyber Shield Grid Background Effect */}
          <div className="absolute inset-0 opacity-15 pointer-events-none" style={{ backgroundImage: 'linear-gradient(to right, #3b82f6 1px, transparent 1px), linear-gradient(to bottom, #3b82f6 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
          {/* Neon Blue Gradient Glow */}
          <div className="absolute -top-20 -left-20 w-[500px] h-[500px] bg-blue-600/20 blur-[130px] pointer-events-none rounded-full" />
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-indigo-500/10 blur-[100px] pointer-events-none rounded-full" />
          
          <div className="relative z-10 max-w-3xl">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-blue-400 font-bold tracking-widest uppercase text-xs mb-6 block"
            >
              BNQinTECH Managed Security
            </motion.span>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight mb-6 leading-tight"
            >
              Impenetrable <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Network Security</span> at the Core.
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-slate-400 font-light leading-relaxed mb-10 max-w-2xl"
            >
              Don't wait for a data breach to audit your setup. Secure your bare metal servers, cloud instances, and database architecture with our enterprise-grade managed firewalls.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <Link href="/company/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3.5 rounded-full font-bold text-sm uppercase tracking-wider transition-all shadow-lg hover:shadow-blue-600/30 hover:-translate-y-0.5">
                Deploy Custom Firewall
              </Link>
              <Link href="#capabilities" className="bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 px-8 py-3.5 rounded-full font-bold text-sm uppercase tracking-wider transition-all">
                Security Specs
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Performance Metrics */}
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
              <div className="absolute top-0 left-0 w-1 h-full bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <h3 className="text-3xl md:text-4xl font-black text-slate-900 mb-2">{metric.value}</h3>
              <p className="text-xs md:text-sm text-slate-500 font-bold uppercase tracking-wide">{metric.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Capabilities Grid */}
        <div id="capabilities" className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">Multi-Layer Threat Defense</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">We protect your critical business infrastructure from malicious actors, rogue packets, and coordinate system injections.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-xl hover:border-blue-300 transition-all duration-300 group"
              >
                <div className="text-4xl mb-6 bg-slate-50 w-16 h-16 rounded-2xl flex items-center justify-center border border-slate-100 group-hover:bg-blue-600 transition-colors duration-300">
                  <span className="group-hover:brightness-0 group-hover:invert transition-all">{service.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed font-medium">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Traffic Filtration Flow Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-slate-900 rounded-3xl p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-10 shadow-2xl relative overflow-hidden"
        >
          <div className="relative z-10 max-w-2xl">
            <h2 className="text-3xl font-black text-white mb-4">Deep Packet Inspection (DPI) Flow</h2>
            <p className="text-slate-400 leading-relaxed mb-8">
              Traditional firewalls only read basic header packets. Our modern infrastructure scans the actual payload data passing through at hardware speed. Malicious strings or irregular command injections are isolated instantly before touching your operating system.
            </p>
            
            {/* Interactive Cyber Security Visualization mapping */}
            <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 flex items-center justify-between gap-4 max-w-md">
              <div className="flex flex-col items-center">
                <span className="text-xs text-slate-400 font-bold uppercase mb-1">Incoming</span>
                <span className="text-sm text-amber-500 font-mono tracking-wider animate-pulse">All Traffic</span>
              </div>
              
              <div className="flex-1 flex items-center justify-center relative">
                <div className="h-0.5 bg-slate-800 w-full relative flex items-center justify-between">
                  <span className="w-2 h-2 rounded-full bg-amber-500 absolute left-0 animate-[ping_1.5s_infinite]"></span>
                  <span className="text-[10px] bg-blue-600 text-white px-2 py-0.5 rounded font-bold uppercase relative z-10">NGFW SCRUBBER</span>
                  <span className="w-2 h-2 rounded-full bg-emerald-500 absolute right-0"></span>
                </div>
              </div>

              <div className="flex flex-col items-center">
                <span className="text-xs text-slate-400 font-bold uppercase mb-1">Protected</span>
                <span className="text-sm text-emerald-500 font-mono font-bold tracking-wider">Clean Data</span>
              </div>
            </div>
          </div>
          
          <div className="relative z-10 shrink-0">
            <div className="w-32 h-32 rounded-full border-4 border-blue-500/20 flex items-center justify-center bg-blue-500/10 shadow-[0_0_50px_rgba(59,130,246,0.1)]">
              <span className="text-5xl">🛡️</span>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}