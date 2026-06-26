"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function OutboundPage() {
  // Outbound Services Data
  const services = [
    {
      title: "Telemarketing & Telesales",
      description: "Direct-to-consumer (B2C) and B2B telemarketing campaigns designed to close sales over the phone and boost revenue instantly.",
      icon: "🚀"
    },
    {
      title: "Customer Retention & Win-Back",
      description: "Proactive outreach to churned or inactive customers with targeted offers to win back their business and loyalty.",
      icon: "🤝"
    },
    {
      title: "Debt Collection & Reminders",
      description: "Professional, compliant, and tactful outbound calling to recover outstanding payments while maintaining customer relationships.",
      icon: "💳"
    },
    {
      title: "Welcome Calls & Onboarding",
      description: "Make a strong first impression. We call your new customers to guide them through your product, reducing early-stage churn.",
      icon: "👋"
    },
    {
      title: "Surveys & Market Feedback",
      description: "Conducting NPS surveys, post-purchase feedback, and market research to give you actionable insights into your audience.",
      icon: "📋"
    },
    {
      title: "Database Verification",
      description: "Calling your existing lists to update contact information, verify decision-makers, and remove dead leads (Data Cleansing).",
      icon: "⚙️"
    }
  ];

  // Outbound KPIs & Compliance
  const metrics = [
    { value: "500k+", label: "Monthly Dials Capacity" },
    { value: "20%+", label: "Avg. Conversion Uplift" },
    { value: "TCPA", label: "Strictly Compliant" },
    { value: "99.9%", label: "Dialer Uptime" }
  ];

  return (
    <div className="min-h-screen bg-slate-50 pt-40 pb-20 font-sans">
      
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="bg-slate-900 rounded-[40px] p-8 md:p-16 lg:p-20 relative overflow-hidden shadow-2xl">
          {/* Outward Radiating Glow effect */}
          <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-blue-600/10 blur-[100px] pointer-events-none rounded-full -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/20 blur-[80px] pointer-events-none rounded-full" />
          
          <div className="relative z-10 max-w-3xl">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-blue-400 font-bold tracking-widest uppercase text-xs mb-6 block"
            >
              BNQinTECH Outbound Voice
            </motion.span>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight mb-6 leading-tight"
            >
              Proactive Outreach that <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Drives Results.</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-slate-400 font-light leading-relaxed mb-10 max-w-2xl"
            >
              Don't wait for the phone to ring. Our relentless outbound agents use smart dialing technology to scale your telemarketing, customer retention, and survey campaigns massively.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <Link href="/company/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3.5 rounded-full font-bold text-sm uppercase tracking-wider transition-all shadow-lg hover:shadow-blue-600/30 hover:-translate-y-0.5">
                Launch a Campaign
              </Link>
              <Link href="#services" className="bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 px-8 py-3.5 rounded-full font-bold text-sm uppercase tracking-wider transition-all">
                Explore Solutions
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
              {/* Animated line indicator */}
              <div className="absolute top-0 left-0 w-full h-1 bg-blue-100 group-hover:bg-blue-600 transition-colors duration-300" />
              <h3 className="text-3xl md:text-4xl font-black text-slate-900 mb-2 mt-2">{metric.value}</h3>
              <p className="text-xs md:text-sm text-slate-500 font-bold uppercase tracking-wide">{metric.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Services Grid */}
        <div id="services" className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">Outbound Campaign Specializations</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">From aggressive B2C sales pitches to tactful payment reminders, our agents adapt to your campaign's exact tone.</p>
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
                <div className="w-14 h-14 bg-gradient-to-br from-blue-50 to-blue-100 rounded-full flex items-center justify-center text-2xl mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 border border-blue-200">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed font-medium">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Tech & Compliance Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-slate-900 to-blue-950 rounded-3xl p-10 md:p-14 shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-10"
        >
          {/* Radar/Sonar Background Effect for "Outbound" scanning */}
          <div className="absolute inset-0 opacity-10 pointer-events-none overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white rounded-full animate-[spin_10s_linear_infinite] border-t-transparent border-b-transparent"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white rounded-full animate-[spin_8s_linear_infinite_reverse] border-l-transparent border-r-transparent"></div>
          </div>

          <div className="relative z-10 max-w-2xl">
            <h2 className="text-3xl font-black text-white mb-4">Smart Dialing & Strict Compliance</h2>
            <p className="text-slate-400 leading-relaxed mb-6">
              Maximize talk time and minimize dead air. We utilize Advanced Predictive and Power Dialers with Local Caller ID presence to dramatically increase contact rates. Furthermore, our operations are strictly TCPA, DNC (Do Not Call), and GDPR compliant to protect your brand from legal risks.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="bg-white/10 text-white border border-white/20 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider backdrop-blur-sm">
                Predictive Dialing
              </span>
              <span className="bg-white/10 text-white border border-white/20 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider backdrop-blur-sm">
                Local Presence Caller ID
              </span>
              <span className="bg-white/10 text-white border border-white/20 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider backdrop-blur-sm">
                DNC Scrubbing
              </span>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}