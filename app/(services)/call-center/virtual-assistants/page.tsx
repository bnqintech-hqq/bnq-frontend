"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function VirtualAssistantsPage() {
  // Virtual Assistant Services Data
  const services = [
    {
      title: "Administrative Support",
      description: "Inbox management, calendar scheduling, travel arrangements, and daily task organization to free up your executive time.",
      icon: "✉️"
    },
    {
      title: "Social Media Management",
      description: "Content scheduling, community management, replying to DMs, and basic graphic design to keep your brand active.",
      icon: "📱"
    },
    {
      title: "Bookkeeping & Accounting",
      description: "Invoice generation, expense tracking, payroll assistance, and bank reconciliation using QuickBooks or Xero.",
      icon: "💰"
    },
    {
      title: "Research & Data Mining",
      description: "Deep internet research, competitor analysis, lead scraping, and database building for your sales and marketing teams.",
      icon: "🔍"
    },
    {
      title: "eCommerce Store Management",
      description: "Inventory updates, order processing, product description writing, and customer support for Shopify and Amazon stores.",
      icon: "🛒"
    },
    {
      title: "Customer Support VA",
      description: "Dedicated agents to handle your live chat, email tickets, and follow-ups to ensure your customers are always happy.",
      icon: "🎧"
    }
  ];

  // VA Value Metrics
  const metrics = [
    { value: "Up to 70%", label: "Reduction in Overhead Costs" },
    { value: "< 48 Hrs", label: "Rapid Talent Onboarding" },
    { value: "Top 1%", label: "Vetted Professionals" },
    { value: "Zero", label: "Infrastructure Setup Cost" }
  ];

  return (
    <div className="min-h-screen bg-slate-50 pt-40 pb-20 font-sans">
      
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="bg-slate-900 rounded-[40px] p-8 md:p-16 lg:p-20 relative overflow-hidden shadow-2xl">
          {/* Abstract background elements */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/20 blur-[120px] pointer-events-none rounded-full translate-x-1/3 -translate-y-1/3" />
          <div className="absolute bottom-0 left-10 w-72 h-72 bg-cyan-500/10 blur-[80px] pointer-events-none rounded-full" />
          
          <div className="relative z-10 max-w-3xl">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-blue-400 font-bold tracking-widest uppercase text-xs mb-6 block"
            >
              BNQinTECH Remote Talent
            </motion.span>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight mb-6 leading-tight"
            >
              Delegate Tasks. <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Scale Faster.</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-slate-400 font-light leading-relaxed mb-10 max-w-2xl"
            >
              Hire top-tier, rigorously vetted Virtual Assistants to handle your administrative, technical, and creative tasks. Save up to 70% on payroll and office overheads while focusing on what you do best—growing your business.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <Link href="/company/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3.5 rounded-full font-bold text-sm uppercase tracking-wider transition-all shadow-lg hover:shadow-blue-600/30 hover:-translate-y-0.5">
                Hire Your VA Today
              </Link>
              <Link href="#expertise" className="bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 px-8 py-3.5 rounded-full font-bold text-sm uppercase tracking-wider transition-all">
                View Skillsets
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Value Proposition Metrics */}
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
              <div className="absolute top-0 right-0 w-16 h-16 bg-blue-50 rounded-bl-full -z-10" />
              <h3 className="text-3xl md:text-4xl font-black text-blue-600 mb-2">{metric.value}</h3>
              <p className="text-xs md:text-sm text-slate-500 font-bold uppercase tracking-wide">{metric.label}</p>
            </motion.div>
          ))}
        </div>

        {/* VA Capabilities Grid */}
        <div id="expertise" className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">Dedicated Remote Expertise</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">We match you with highly skilled professionals tailored to your specific industry needs, ready to integrate into your team seamlessly.</p>
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
                <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 group-hover:-rotate-6 group-hover:bg-blue-600 transition-all duration-300">
                  <span className="group-hover:grayscale group-hover:brightness-200">{service.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed font-medium">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Secure & Seamless Integration Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-slate-900 rounded-3xl p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-10 shadow-2xl relative overflow-hidden"
        >
          {/* Glassmorphism connection lines background */}
          <div className="absolute inset-0 opacity-15 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at center, #2563eb 2px, transparent 2px)', backgroundSize: '40px 40px' }}></div>

          <div className="relative z-10 max-w-2xl">
            <h2 className="text-3xl font-black text-white mb-4">Secure & Seamless Integration</h2>
            <p className="text-slate-400 leading-relaxed mb-6">
              Worried about remote security? We provide fully managed Virtual Assistants who operate from our secure facilities or monitored remote environments. Every VA signs a strict Non-Disclosure Agreement (NDA) and operates under enterprise-grade data protection protocols.
            </p>
            <div className="flex flex-wrap gap-4">
              <span className="flex items-center gap-2 text-sm text-blue-300 font-bold">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span> Strict NDAs Signed
              </span>
              <span className="flex items-center gap-2 text-sm text-blue-300 font-bold">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span> Monitored Workstations
              </span>
              <span className="flex items-center gap-2 text-sm text-blue-300 font-bold">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span> IT Support Included
              </span>
            </div>
          </div>
          
        </motion.div>

      </div>
    </div>
  );
}