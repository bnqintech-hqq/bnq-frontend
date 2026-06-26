"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function DisasterRecoveryPage() {
  // DR Services Data
  const services = [
    {
      title: "Automated Failover (Hot Site)",
      description: "In the event of a primary site failure, traffic is instantly and automatically rerouted to our fully replicated standby infrastructure.",
      icon: "⚡"
    },
    {
      title: "Continuous Replication",
      description: "Byte-level, asynchronous data replication ensures your secondary site is always just milliseconds behind your primary servers.",
      icon: "🔄"
    },
    {
      title: "Runbook Automation",
      description: "Execute complex recovery processes with a single click. Our automated runbooks ensure systems boot up in the exact correct sequence.",
      icon: "📜"
    },
    {
      title: "Non-Disruptive Testing",
      description: "Test your disaster recovery plans in isolated sandbox environments without affecting your live production traffic.",
      icon: "🧪"
    },
    {
      title: "Active-Active Architecture",
      description: "Distribute your workload across multiple geographically separated data centers for true 100% availability and load balancing.",
      icon: "🌐"
    },
    {
      title: "Compliance & Auditing",
      description: "Detailed failover reporting and audit trails to ensure you meet strict industry regulations like HIPAA, PCI-DSS, and ISO 27001.",
      icon: "📋"
    }
  ];

  // DR Performance Metrics
  const metrics = [
    { value: "Near-Zero", label: "Recovery Point (RPO)" },
    { value: "< 5 Mins", label: "Recovery Time (RTO)" },
    { value: "1-Click", label: "Failover Execution" },
    { value: "100%", label: "Business Continuity" }
  ];

  return (
    <div className="min-h-screen bg-slate-50 pt-40 pb-20 font-sans">
      
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="bg-slate-900 rounded-[40px] p-8 md:p-16 lg:p-20 relative overflow-hidden shadow-2xl">
          {/* Heartbeat/Pulse Background Effect */}
          <div className="absolute inset-0 opacity-20 pointer-events-none flex items-center justify-center">
            <div className="w-full h-px bg-blue-500/30 absolute"></div>
            <svg className="w-full h-32 text-blue-500 absolute" preserveAspectRatio="none" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.5">
              <path d="M0,50 L30,50 L35,20 L45,80 L55,10 L65,90 L75,50 L100,50" className="animate-[dash_3s_linear_infinite]" strokeDasharray="200" strokeDashoffset="200" style={{ strokeDasharray: 200, animation: 'dash 3s linear infinite' }}/>
            </svg>
            <style>{`
              @keyframes dash {
                to { stroke-dashoffset: 0; }
              }
            `}</style>
          </div>
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-red-500/10 blur-[100px] pointer-events-none rounded-full" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-emerald-500/10 blur-[100px] pointer-events-none rounded-full" />
          
          <div className="relative z-10 max-w-3xl">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-blue-400 font-bold tracking-widest uppercase text-xs mb-6 block"
            >
              BNQinTECH Business Continuity
            </motion.span>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight mb-6 leading-tight"
            >
              Unstoppable Operations. <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Zero Downtime.</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-slate-400 font-light leading-relaxed mb-10 max-w-2xl"
            >
              When disaster strikes, every second of downtime costs money and reputation. Our Disaster Recovery as a Service (DRaaS) seamlessly spins up your entire infrastructure in our secondary data centers instantly.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <Link href="/company/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3.5 rounded-full font-bold text-sm uppercase tracking-wider transition-all shadow-lg hover:shadow-blue-600/30 hover:-translate-y-0.5">
                Build Your DR Plan
              </Link>
              <Link href="#solutions" className="bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 px-8 py-3.5 rounded-full font-bold text-sm uppercase tracking-wider transition-all">
                Explore Solutions
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
              className="bg-white p-6 rounded-3xl border border-slate-200 text-center shadow-sm hover:shadow-md transition-shadow relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-emerald-50 to-transparent rounded-bl-full -z-10" />
              <h3 className="text-3xl md:text-4xl font-black text-slate-900 mb-2">{metric.value}</h3>
              <p className="text-xs md:text-sm text-slate-500 font-bold uppercase tracking-wide">{metric.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Services Grid */}
        <div id="solutions" className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">Enterprise DRaaS Architecture</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">We don't just replicate data; we replicate your entire operational environment—networks, firewalls, servers, and applications.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-xl hover:border-emerald-200 transition-all duration-300 group"
              >
                <div className="text-4xl mb-6 bg-slate-50 w-16 h-16 rounded-2xl flex items-center justify-center border border-slate-100 group-hover:bg-emerald-500 transition-colors duration-300">
                  <span className="group-hover:brightness-0 group-hover:invert transition-all">{service.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed font-medium">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Failover Automation Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-slate-900 rounded-3xl p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-10 shadow-2xl relative overflow-hidden"
        >
          {/* Node/Connection Map Background */}
          <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at center, #10b981 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

          <div className="relative z-10 max-w-2xl">
            <h2 className="text-3xl font-black text-white mb-4">From Chaos to Control in Minutes</h2>
            <p className="text-slate-400 leading-relaxed mb-8">
              Manual failovers are prone to human error during stressful situations. Our proprietary DR orchestration platform automates the entire failover and failback process. DNS updates, IP routing, and server spin-ups happen autonomously.
            </p>
            
            <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-6 flex items-center justify-between">
              <div className="flex flex-col items-center">
                <span className="w-4 h-4 bg-red-500 rounded-full mb-2 animate-pulse shadow-[0_0_10px_red]"></span>
                <span className="text-xs text-slate-300 font-bold uppercase tracking-wider">Primary Site Down</span>
              </div>
              
              <div className="flex-1 px-4 flex items-center justify-center">
                <div className="h-px bg-gradient-to-r from-red-500 via-blue-500 to-emerald-500 w-full relative">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-slate-900 text-xs px-2 text-slate-400">Automated Routing</div>
                </div>
              </div>

              <div className="flex flex-col items-center">
                <span className="w-4 h-4 bg-emerald-500 rounded-full mb-2 shadow-[0_0_15px_#10b981]"></span>
                <span className="text-xs text-slate-300 font-bold uppercase tracking-wider">DR Site Online</span>
              </div>
            </div>
          </div>
          
        </motion.div>

      </div>
    </div>
  );
}