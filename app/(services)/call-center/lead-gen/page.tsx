"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function LeadGenPage() {
  // Lead Gen Services Data
  const services = [
    {
      title: "B2B Appointment Setting",
      description: "We navigate gatekeepers and pitch decision-makers to book qualified sales meetings directly onto your team's calendar.",
      icon: "📅"
    },
    {
      title: "Cold Calling Campaigns",
      description: "High-volume outbound calling with optimized scripts to introduce your products and generate immediate interest.",
      icon: "📞"
    },
    {
      title: "Lead Qualification (BANT)",
      description: "We don't just pass names. We qualify leads based on Budget, Authority, Need, and Timeline to ensure high closing rates.",
      icon: "🎯"
    },
    {
      title: "Event & Webinar Promotion",
      description: "Drive targeted attendance to your corporate events, webinars, and trade shows through personalized phone outreach.",
      icon: "🎟️"
    },
    {
      title: "Market Research & Surveys",
      description: "Gather crucial market intelligence, customer feedback, and competitor analysis directly from your target demographic.",
      icon: "📊"
    },
    {
      title: "List Building & Data Scrubbing",
      description: "We build fresh, highly targeted prospect lists and clean your existing databases to maximize outreach efficiency.",
      icon: "📋"
    }
  ];

  // ROI & Performance Metrics
  const metrics = [
    { value: "3x", label: "Average Client ROI" },
    { value: "100%", label: "Exclusive & Verified Leads" },
    { value: "500k+", label: "Outbound Calls Monthly" },
    { value: "BANT", label: "Qualification Framework" }
  ];

  return (
    <div className="min-h-screen bg-slate-50 pt-40 pb-20 font-sans">
      
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="bg-slate-900 rounded-[40px] p-8 md:p-16 lg:p-20 relative overflow-hidden shadow-2xl">
          {/* Target/Bullseye Background Glow */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 blur-[80px] pointer-events-none rounded-full translate-x-1/4 -translate-y-1/4 border-[100px] border-blue-500/10" />
          <div className="absolute top-1/2 right-0 w-[300px] h-[300px] bg-cyan-500/20 blur-[60px] pointer-events-none rounded-full translate-x-1/2 -translate-y-1/2" />
          
          <div className="relative z-10 max-w-3xl">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-blue-400 font-bold tracking-widest uppercase text-xs mb-6 block"
            >
              BNQinTECH Outbound Solutions
            </motion.span>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight mb-6 leading-tight"
            >
              Fuel Your Pipeline with <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Qualified Leads.</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-slate-400 font-light leading-relaxed mb-10 max-w-2xl"
            >
              Stop wasting your sales team's time on cold outreach. Our expert telemarketers generate, qualify, and deliver sales-ready leads directly to your CRM, driving explosive revenue growth.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <Link href="/company/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3.5 rounded-full font-bold text-sm uppercase tracking-wider transition-all shadow-lg hover:shadow-blue-600/30 hover:-translate-y-0.5">
                Start a Campaign
              </Link>
              <Link href="#strategy" className="bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 px-8 py-3.5 rounded-full font-bold text-sm uppercase tracking-wider transition-all">
                See Our Strategy
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Metric Highlights */}
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
              <div className="absolute -top-6 -right-6 w-20 h-20 bg-blue-50 rounded-full -z-10" />
              <h3 className="text-3xl md:text-4xl font-black text-blue-600 mb-2">{metric.value}</h3>
              <p className="text-xs md:text-sm text-slate-500 font-bold uppercase tracking-wide">{metric.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Services Grid */}
        <div id="strategy" className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">Targeted Outbound Strategies</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">We don't just make dials; we build relationships. Our agents are trained to navigate complex corporate hierarchies.</p>
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
                <div className="w-16 h-16 bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:-translate-y-2 transition-transform duration-300 shadow-inner border border-slate-200">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed font-medium">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Quality Over Quantity Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-slate-900 rounded-3xl p-10 md:p-14 shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-10"
        >
          {/* Rising Chart Graphic Background */}
          <div className="absolute bottom-0 right-0 opacity-20 pointer-events-none flex items-end gap-3 px-10">
            {[40, 60, 80, 100, 140].map((height, i) => (
              <div key={i} className="w-8 bg-blue-500 rounded-t-lg" style={{ height: `${height}px` }}></div>
            ))}
          </div>

          <div className="relative z-10 max-w-2xl">
            <h2 className="text-3xl font-black text-white mb-4">Quality Over Quantity</h2>
            <p className="text-slate-400 leading-relaxed mb-6">
              A thousand bad leads will only waste your sales team's time. We pride ourselves on delivering 100% exclusive, double-verified leads. Every lead is recorded and audited by our QA team before it reaches your CRM.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="bg-blue-900/50 text-blue-300 border border-blue-500/30 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider">
                Script Optimization
              </span>
              <span className="bg-blue-900/50 text-blue-300 border border-blue-500/30 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider">
                Direct CRM Integration
              </span>
              <span className="bg-blue-900/50 text-blue-300 border border-blue-500/30 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider">
                Call Auditing
              </span>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}