"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function VPSPage() {
  // VPS Features Data
  const services = [
    {
      title: "100% NVMe SSD Storage",
      description: "Experience extreme IOPS and lightning-fast read/write speeds. Our enterprise NVMe drives are up to 10x faster than standard SSDs.",
      icon: "⚡"
    },
    {
      title: "Full Root / Admin Access",
      description: "Complete control over your server environment. Install any custom software, configure your firewall, and manage your OS without restrictions.",
      icon: "🔑"
    },
    {
      title: "KVM Hardware Virtualization",
      description: "True resource isolation. Your RAM, CPU, and storage are entirely dedicated to your instance. No noisy neighbors, ever.",
      icon: "🧱"
    },
    {
      title: "1-Click Scalability",
      description: "Start small and grow instantly. Upgrade your CPU cores, RAM, and storage with a single click without any data migration or downtime.",
      icon: "📈"
    },
    {
      title: "Automated Daily Backups",
      description: "Sleep peacefully knowing your data is backed up daily to a secondary off-site location, with instant snapshot restores available.",
      icon: "🔄"
    },
    {
      title: "Free DDoS Protection",
      description: "Every VPS instance includes integrated L3/L4 DDoS mitigation to automatically absorb malicious traffic and keep you online.",
      icon: "🛡️"
    }
  ];

  // VPS Specs/Metrics
  const metrics = [
    { value: "< 60s", label: "Instant Provisioning" },
    { value: "10 Gbps", label: "Network Uplink" },
    { value: "99.99%", label: "Uptime Guarantee" },
    { value: "Linux/Win", label: "Custom OS Choices" }
  ];

  return (
    <div className="min-h-screen bg-slate-50 pt-28 pb-20 font-sans">
      
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="bg-slate-900 rounded-[40px] p-8 md:p-16 lg:p-20 relative overflow-hidden shadow-2xl">
          {/* Cloud Nodes Background Effect */}
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-500 rounded-full mix-blend-screen filter blur-[50px] animate-pulse"></div>
            <div className="absolute top-1/3 right-1/4 w-40 h-40 bg-purple-500 rounded-full mix-blend-screen filter blur-[60px] animate-pulse" style={{ animationDelay: '1s' }}></div>
            <div className="absolute bottom-1/4 left-1/2 w-48 h-48 bg-cyan-500 rounded-full mix-blend-screen filter blur-[70px] animate-pulse" style={{ animationDelay: '2s' }}></div>
          </div>
          
          <div className="relative z-10 max-w-3xl">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-blue-400 font-bold tracking-widest uppercase text-xs mb-6 block"
            >
              BNQinTECH Cloud Infrastructure
            </motion.span>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight mb-6 leading-tight"
            >
              Raw Compute Power. <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Total Control.</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-slate-400 font-light leading-relaxed mb-10 max-w-2xl"
            >
              Deploy blazing-fast Virtual Private Servers powered by enterprise NVMe storage and KVM virtualization. Get the performance of a dedicated server at a fraction of the cost.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <Link href="/company/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3.5 rounded-full font-bold text-sm uppercase tracking-wider transition-all shadow-lg hover:shadow-blue-600/30 hover:-translate-y-0.5">
                Deploy Server Now
              </Link>
              <Link href="#features" className="bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 px-8 py-3.5 rounded-full font-bold text-sm uppercase tracking-wider transition-all">
                View Server Specs
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
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-purple-50 to-transparent rounded-bl-full -z-10 group-hover:scale-150 transition-transform duration-500" />
              <h3 className="text-3xl md:text-4xl font-black text-slate-900 mb-2">{metric.value}</h3>
              <p className="text-xs md:text-sm text-slate-500 font-bold uppercase tracking-wide">{metric.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Features Grid */}
        <div id="features" className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">Enterprise VPS Capabilities</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">Built for developers and growing businesses who need guaranteed resources and uncompromised performance.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-xl hover:border-purple-200 transition-all duration-300 group"
              >
                <div className="text-4xl mb-6 bg-slate-50 w-16 h-16 rounded-2xl flex items-center justify-center border border-slate-100 group-hover:bg-purple-600 transition-colors duration-300">
                  <span className="group-hover:brightness-0 group-hover:invert transition-all">{service.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed font-medium">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Isolation Graphic Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-3xl p-10 md:p-14 flex flex-col lg:flex-row items-center justify-between gap-12 shadow-2xl relative overflow-hidden"
        >
          {/* Tech lines background */}
          <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'linear-gradient(45deg, #a855f7 1px, transparent 1px), linear-gradient(-45deg, #a855f7 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

          <div className="relative z-10 max-w-xl">
            <h2 className="text-3xl font-black text-white mb-4">True Resource Isolation</h2>
            <p className="text-slate-400 leading-relaxed mb-6">
              Unlike cheap shared hosting where bad neighbors can drain your speed, our KVM hypervisor creates a rigid iron wall around your VPS. The RAM, CPU cores, and storage space you pay for are 100% dedicated to you. Always.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="bg-purple-900/40 text-purple-300 border border-purple-500/30 px-4 py-2 rounded text-xs font-bold uppercase tracking-wider">Dedicated vCPU</span>
              <span className="bg-purple-900/40 text-purple-300 border border-purple-500/30 px-4 py-2 rounded text-xs font-bold uppercase tracking-wider">Dedicated RAM</span>
            </div>
          </div>
          
          {/* Virtualization Visual */}
          <div className="relative z-10 w-full max-w-md">
            <div className="bg-slate-950 border border-slate-700 rounded-2xl p-6 relative shadow-2xl">
              <h4 className="text-[10px] text-slate-500 font-bold uppercase tracking-widest text-center mb-6">KVM Hypervisor Layer</h4>
              
              <div className="flex justify-between items-end gap-3 h-32">
                {/* Node 1 */}
                <div className="flex-1 bg-slate-800 border border-slate-600 rounded-lg h-2/3 relative group hover:border-slate-500 transition-colors">
                  <div className="absolute top-2 left-0 right-0 text-center text-[8px] font-bold text-slate-400 uppercase">VPS A</div>
                </div>
                
                {/* Your Node (Highlighted) */}
                <div className="flex-1 bg-purple-900/20 border-2 border-purple-500 rounded-lg h-full relative shadow-[0_0_20px_rgba(168,85,247,0.2)]">
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-purple-500 text-white text-[9px] font-bold px-2 py-0.5 rounded shadow-lg whitespace-nowrap">Your Server</div>
                  <div className="absolute bottom-2 left-2 right-2 flex flex-col gap-1">
                    <div className="h-1.5 w-full bg-purple-500/50 rounded-full overflow-hidden"><div className="h-full w-3/4 bg-purple-400"></div></div>
                    <div className="h-1.5 w-full bg-purple-500/50 rounded-full overflow-hidden"><div className="h-full w-1/2 bg-purple-400"></div></div>
                  </div>
                </div>

                {/* Node 3 */}
                <div className="flex-1 bg-slate-800 border border-slate-600 rounded-lg h-4/5 relative group hover:border-slate-500 transition-colors">
                  <div className="absolute top-2 left-0 right-0 text-center text-[8px] font-bold text-slate-400 uppercase">VPS C</div>
                </div>
              </div>
              
              {/* Solid base representing the physical hardware */}
              <div className="h-2 w-full bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 mt-4 rounded-full shadow-[0_0_10px_rgba(168,85,247,0.5)]"></div>
              <p className="text-center text-[8px] font-mono text-slate-500 mt-2 uppercase tracking-widest">Bare Metal Physical Server</p>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}