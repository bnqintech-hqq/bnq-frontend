"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function APIPage() {
  // API Services & Features Data
  const services = [
    {
      title: "API Gateway Management",
      description: "A centralized, high-performance gateway to route, authenticate, and manage all your inbound API traffic with zero bottlenecks.",
      icon: "🚪"
    },
    {
      title: "REST & GraphQL Support",
      description: "Whether you need the strict structure of RESTful endpoints or the flexible data fetching of GraphQL, our infrastructure supports both seamlessly.",
      icon: "🔗"
    },
    {
      title: "Real-Time Webhooks",
      description: "Push data instantly to your applications. Our event-driven webhook architecture guarantees < 50ms delivery times for critical updates.",
      icon: "⚡"
    },
    {
      title: "Advanced Rate Limiting",
      description: "Protect your backend from abuse. Set granular rate limits (Throttling) based on IP, user roles, or specific endpoint weights.",
      icon: "🚦"
    },
    {
      title: "OAuth 2.0 & JWT Security",
      description: "Bank-grade authentication. Secure your endpoints with JWT (JSON Web Tokens), OAuth 2.0, API keys, and strict CORS policies.",
      icon: "🔐"
    },
    {
      title: "Developer Portal & Analytics",
      description: "Beautiful auto-generated Swagger/OpenAPI documentation, combined with real-time analytics on latency, error rates, and usage.",
      icon: "📊"
    }
  ];

  // API Performance Metrics
  const metrics = [
    { value: "< 15ms", label: "Average Latency" },
    { value: "10B+", label: "Requests / Month" },
    { value: "99.999%", label: "Gateway Uptime" },
    { value: "OpenAPI", label: "Fully Compliant" }
  ];

  return (
    <div className="min-h-screen bg-slate-50 pt-28 pb-20 font-sans">
      
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="bg-slate-900 rounded-[40px] p-8 md:p-16 lg:p-20 relative overflow-hidden shadow-2xl">
          {/* Data Nodes Matrix Background Effect */}
          <div className="absolute inset-0 opacity-15 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #3b82f6 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-500/10 blur-[120px] pointer-events-none rounded-full translate-x-1/3 -translate-y-1/3" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-600/20 blur-[100px] pointer-events-none rounded-full -translate-x-1/4 translate-y-1/4" />
          
          <div className="relative z-10 max-w-3xl">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-emerald-400 font-bold tracking-widest uppercase text-xs mb-6 block font-mono"
            >
              &gt; BNQinTECH_API_PLATFORM
            </motion.span>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight mb-6 leading-tight"
            >
              Connect. Integrate. <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Scale Globally.</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-slate-400 font-light leading-relaxed mb-10 max-w-2xl"
            >
              Empower your developers with lightning-fast, ultra-secure APIs. We provide the robust gateway architecture needed to connect your microservices, mobile apps, and enterprise partners with zero friction.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <Link href="/company/contact" className="bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-3.5 rounded-full font-bold text-sm uppercase tracking-wider transition-all shadow-lg hover:shadow-emerald-600/30 hover:-translate-y-0.5">
                Generate API Keys
              </Link>
              <Link href="#documentation" className="bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 px-8 py-3.5 rounded-full font-bold text-sm uppercase tracking-wider transition-all">
                Read the Docs
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
              <div className="absolute bottom-0 left-0 w-full h-1 bg-emerald-100 group-hover:bg-emerald-500 transition-colors duration-300" />
              <h3 className="text-3xl md:text-4xl font-black text-slate-900 mb-2 mt-2">{metric.value}</h3>
              <p className="text-xs md:text-sm text-slate-500 font-bold uppercase tracking-wide">{metric.label}</p>
            </motion.div>
          ))}
        </div>

        {/* API Features Grid */}
        <div id="documentation" className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">Developer-First Experience (DX)</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">We handle the complex routing, rate-limiting, and security so your team can focus on writing business logic.</p>
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
                <div className="w-14 h-14 bg-gradient-to-br from-emerald-50 to-teal-100 rounded-xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform duration-300 border border-emerald-100">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed font-medium">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mock Terminal / Code Implementation Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-3xl p-10 md:p-14 flex flex-col lg:flex-row items-center justify-between gap-12 shadow-2xl relative overflow-hidden"
        >
          <div className="relative z-10 max-w-xl">
            <h2 className="text-3xl font-black text-white mb-4">Integrate in Minutes, Not Months.</h2>
            <p className="text-slate-400 leading-relaxed mb-6">
              Our endpoints are logically structured, versioned, and return highly predictable JSON responses. With our comprehensive SDKs and rich OpenAPI documentation, your developers will make their first successful API call in under 5 minutes.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="flex items-center gap-2 bg-slate-800 text-slate-300 border border-slate-700 px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider">
                <span className="text-emerald-400">●</span> Node.js
              </span>
              <span className="flex items-center gap-2 bg-slate-800 text-slate-300 border border-slate-700 px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider">
                <span className="text-blue-400">●</span> Python
              </span>
              <span className="flex items-center gap-2 bg-slate-800 text-slate-300 border border-slate-700 px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider">
                <span className="text-red-400">●</span> GoLang
              </span>
            </div>
          </div>
          
          {/* Mock Terminal Window */}
          <div className="relative z-10 w-full max-w-lg">
            <div className="bg-[#0d1117] border border-slate-700 rounded-xl overflow-hidden shadow-2xl">
              {/* Terminal Header */}
              <div className="bg-[#161b22] px-4 py-3 border-b border-slate-700 flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                <span className="ml-4 text-[11px] font-mono text-slate-400">POST /v1/connect/session</span>
              </div>
              
              {/* Terminal Body (JSON Representation) */}
              <div className="p-5 font-mono text-xs md:text-sm leading-relaxed overflow-x-auto">
                <div className="text-slate-300">
                  <span className="text-pink-400">curl</span> -X POST <span className="text-emerald-400">https://api.bnqintech.com/v1/session</span> \
                </div>
                <div className="text-slate-300 pl-4">
                  -H <span className="text-emerald-400">"Authorization: Bearer sk_live_your_key"</span> \
                </div>
                <div className="text-slate-300 pl-4">
                  -H <span className="text-emerald-400">"Content-Type: application/json"</span>
                </div>
                <br />
                <div className="text-slate-500">{"// Response (200 OK)"}</div>
                <div className="text-slate-300">{"{"}</div>
                <div className="text-slate-300 pl-4">
                  <span className="text-blue-400">"status"</span>: <span className="text-emerald-400">"success"</span>,
                </div>
                <div className="text-slate-300 pl-4">
                  <span className="text-blue-400">"latency_ms"</span>: <span className="text-amber-400">12.4</span>,
                </div>
                <div className="text-slate-300 pl-4">
                  <span className="text-blue-400">"data"</span>: {"{"}
                </div>
                <div className="text-slate-300 pl-8">
                  <span className="text-blue-400">"session_id"</span>: <span className="text-emerald-400">"sess_98xYz2PqL"</span>,
                </div>
                <div className="text-slate-300 pl-8">
                  <span className="text-blue-400">"rate_limit_remaining"</span>: <span className="text-amber-400">4999</span>
                </div>
                <div className="text-slate-300 pl-4">{"}"}</div>
                <div className="text-slate-300">{"}"}</div>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}