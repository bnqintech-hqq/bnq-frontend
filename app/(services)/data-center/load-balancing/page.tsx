"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function LoadBalancingPage() {
  // Load Balancing Features Data
  const services = [
    {
      title: "Layer 4 & Layer 7 Routing",
      description: "Route traffic based on simple IP/Port data (L4) for extreme speed, or inspect HTTP headers and cookies (L7) for smart application routing.",
      icon: "🔀"
    },
    {
      title: "Global Server Load Balancing (GSLB)",
      description: "Direct users to the geographically closest data center. If the Asia server is busy, traffic is instantly rerouted to Europe seamlessly.",
      icon: "🌍"
    },
    {
      title: "SSL/TLS Offloading",
      description: "Free up your backend servers' CPU power by decrypting SSL traffic right at the load balancer level before it reaches your application.",
      icon: "🔐"
    },
    {
      title: "Active Health Checks",
      description: "Our balancers continuously ping your servers. If a node fails to respond, it is instantly removed from the rotation to prevent 502 errors.",
      icon: "💓"
    },
    {
      title: "Session Persistence (Sticky Sessions)",
      description: "Ensure that a user's entire session (like an eCommerce cart) stays connected to the exact same server until they log out or checkout.",
      icon: "🧲"
    },
    {
      title: "Auto-Scaling Integration",
      description: "Automatically spin up new virtual servers and add them to the load balancer pool during traffic spikes, and scale down when quiet.",
      icon: "📈"
    }
  ];

  // Load Balancer Metrics
  const metrics = [
    { value: "L4 / L7", label: "Intelligent Routing" },
    { value: "99.999%", label: "High Availability (HA)" },
    { value: "< 1ms", label: "Processing Latency" },
    { value: "Infinite", label: "Horizontal Scaling" }
  ];

  return (
    <div className="min-h-screen bg-slate-50 pt-40 pb-20 font-sans">
      
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="bg-slate-900 rounded-[40px] p-8 md:p-16 lg:p-20 relative overflow-hidden shadow-2xl">
          {/* Traffic Flow Background Effect */}
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent animate-[pulse_2s_ease-in-out_infinite]"></div>
            <div className="absolute top-2/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-[pulse_3s_ease-in-out_infinite]"></div>
            <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent animate-[pulse_2.5s_ease-in-out_infinite]"></div>
          </div>
          
          <div className="relative z-10 max-w-3xl">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-blue-400 font-bold tracking-widest uppercase text-xs mb-6 block"
            >
              BNQinTECH Traffic Management
            </motion.span>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight mb-6 leading-tight"
            >
              Distribute Traffic. <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Eliminate Bottlenecks.</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-slate-400 font-light leading-relaxed mb-10 max-w-2xl"
            >
              Never let a traffic spike crash your application again. Our enterprise load balancers intelligently distribute incoming requests across multiple healthy servers to guarantee extreme speed and zero downtime.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <Link href="/company/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3.5 rounded-full font-bold text-sm uppercase tracking-wider transition-all shadow-lg hover:shadow-blue-600/30 hover:-translate-y-0.5">
                Scale Your Network
              </Link>
              <Link href="#features" className="bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 px-8 py-3.5 rounded-full font-bold text-sm uppercase tracking-wider transition-all">
                View Capabilities
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
              <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-600 via-transparent to-transparent" />
              <h3 className="text-3xl md:text-4xl font-black text-slate-900 mb-2">{metric.value}</h3>
              <p className="text-xs md:text-sm text-slate-500 font-bold uppercase tracking-wide">{metric.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Features Grid */}
        <div id="features" className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">Smart Traffic Orchestration</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">We don't just split traffic; we analyze server health, geographic origin, and session data to make sub-millisecond routing decisions.</p>
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
                <div className="text-4xl mb-6 bg-slate-50 w-16 h-16 rounded-2xl flex items-center justify-center border border-slate-100 group-hover:bg-blue-50 transition-colors duration-300 group-hover:scale-110">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed font-medium">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Dynamic Traffic Splitting Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-slate-900 rounded-3xl p-10 md:p-14 flex flex-col lg:flex-row items-center justify-between gap-12 shadow-2xl relative overflow-hidden"
        >
          <div className="relative z-10 max-w-xl">
            <h2 className="text-3xl font-black text-white mb-4">Zero Downtime. Maximum Redundancy.</h2>
            <p className="text-slate-400 leading-relaxed mb-6">
              Imagine your main database server goes offline unexpectedly. Within milliseconds, our active health checkers detect the failure and reroute 100% of incoming users to your secondary backup nodes. The user never sees an error page.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="bg-slate-800 text-blue-400 px-4 py-2 rounded text-xs font-bold uppercase tracking-wider border border-slate-700">Round Robin</span>
              <span className="bg-slate-800 text-blue-400 px-4 py-2 rounded text-xs font-bold uppercase tracking-wider border border-slate-700">Least Connections</span>
              <span className="bg-slate-800 text-blue-400 px-4 py-2 rounded text-xs font-bold uppercase tracking-wider border border-slate-700">IP Hash</span>
            </div>
          </div>
          
          {/* Traffic Node Visualization */}
          <div className="relative z-10 w-full max-w-sm">
            <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 relative">
              {/* Incoming User */}
              <div className="flex justify-center mb-6">
                <div className="bg-blue-600 text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-[0_0_15px_rgba(37,99,235,0.5)]">Incoming Traffic</div>
              </div>

              {/* Load Balancer Node */}
              <div className="flex justify-center mb-6 relative">
                <div className="w-12 h-12 bg-slate-800 border-2 border-cyan-400 rounded-lg flex items-center justify-center z-10 shadow-[0_0_20px_rgba(34,211,238,0.2)]">
                  <span className="text-cyan-400 text-xl">🔀</span>
                </div>
                {/* Connecting Lines */}
                <div className="absolute top-full left-1/2 w-px h-6 bg-slate-700"></div>
                <div className="absolute top-[calc(100%+24px)] left-[15%] right-[15%] h-px bg-slate-700"></div>
                <div className="absolute top-[calc(100%+24px)] left-[15%] w-px h-6 bg-slate-700"></div>
                <div className="absolute top-[calc(100%+24px)] left-1/2 w-px h-6 bg-slate-700 -translate-x-1/2"></div>
                <div className="absolute top-[calc(100%+24px)] right-[15%] w-px h-6 bg-slate-700"></div>
              </div>

              {/* Server Nodes */}
              <div className="flex justify-between mt-12">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 bg-slate-800 rounded flex items-center justify-center border border-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.2)]">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  </div>
                  <span className="text-[9px] text-slate-500 mt-2 font-mono">NODE A</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 bg-slate-800 rounded flex items-center justify-center border border-red-500 opacity-50 grayscale">
                    <span className="text-[10px]">❌</span>
                  </div>
                  <span className="text-[9px] text-red-400 mt-2 font-mono">NODE B (Down)</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 bg-slate-800 rounded flex items-center justify-center border border-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.2)]">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  </div>
                  <span className="text-[9px] text-slate-500 mt-2 font-mono">NODE C</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}