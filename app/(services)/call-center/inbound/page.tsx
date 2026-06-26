"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function InboundPage() {
  // Inbound Services Data
  const services = [
    {
      title: "Customer Service & Care",
      description: "Empathetic and professional agents handling general inquiries, account management, and resolving customer grievances.",
      icon: "💬"
    },
    {
      title: "Order Taking & Processing",
      description: "Seamless processing of phone orders, subscription renewals, upselling, and payment handling for retail and e-commerce.",
      icon: "🛒"
    },
    {
      title: "Appointment & Reservations",
      description: "Managing calendars, booking appointments, and handling cancellations for healthcare, hospitality, and B2B services.",
      icon: "📅"
    },
    {
      title: "Product & Service Inquiries",
      description: "Educating callers about your offerings, pricing, and policies to convert casual inquiries into warm leads.",
      icon: "❓"
    },
    {
      title: "Overflow & After-Hours Support",
      description: "Never miss a call. We handle your call spikes during peak seasons, holidays, and after normal business hours.",
      icon: "🌙"
    },
    {
      title: "Bilingual & Multilingual Support",
      description: "Expand your global reach with native-speaking agents providing support in multiple international languages.",
      icon: "🌍"
    }
  ];

  // Call Center KPIs
  const metrics = [
    { value: "< 20s", label: "Average Answer Time" },
    { value: "98%", label: "First Call Resolution" },
    { value: "Zero", label: "Abandoned Calls Target" },
    { value: "24/7", label: "Live Agent Availability" }
  ];

  return (
    <div className="min-h-screen bg-slate-50 pt-40 pb-20 font-sans">
      
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="bg-slate-900 rounded-[40px] p-8 md:p-16 lg:p-20 relative overflow-hidden shadow-2xl">
          {/* Background Glow */}
          <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-blue-500/20 blur-[120px] pointer-events-none rounded-full -translate-y-1/2 translate-x-1/3" />
          
          <div className="relative z-10 max-w-3xl">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-blue-400 font-bold tracking-widest uppercase text-xs mb-6 block"
            >
              BNQinTECH Voice Solutions
            </motion.span>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight mb-6 leading-tight"
            >
              Exceptional <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Inbound</span> Customer Care.
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-slate-400 font-light leading-relaxed mb-10 max-w-2xl"
            >
              Turn every customer call into a brand-building experience. Our highly trained inbound agents handle inquiries, orders, and support with empathy, efficiency, and zero wait times.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <Link href="/company/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3.5 rounded-full font-bold text-sm uppercase tracking-wider transition-all shadow-lg hover:shadow-blue-600/30 hover:-translate-y-0.5">
                Build Your Team
              </Link>
              <Link href="#services" className="bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 px-8 py-3.5 rounded-full font-bold text-sm uppercase tracking-wider transition-all">
                Explore Services
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
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-blue-50 to-transparent rounded-bl-full -z-10" />
              <h3 className="text-3xl md:text-4xl font-black text-slate-900 mb-2">{metric.value}</h3>
              <p className="text-xs md:text-sm text-slate-500 font-bold uppercase tracking-wide">{metric.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Services Grid */}
        <div id="services" className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">Dedicated Inbound Solutions</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">From taking high-volume e-commerce orders to providing empathetic customer service, we do it all.</p>
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
                <div className="text-4xl mb-6 bg-slate-50 w-16 h-16 rounded-2xl flex items-center justify-center border border-slate-100 group-hover:bg-blue-600 group-hover:border-blue-600 transition-colors duration-300">
                  <span className="group-hover:brightness-0 group-hover:invert transition-all">{service.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed font-medium">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Quality Assurance Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-slate-900 rounded-3xl p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-10 shadow-2xl relative overflow-hidden"
        >
          {/* Audio Wave Background effect */}
          <div className="absolute inset-0 opacity-10 pointer-events-none flex items-center justify-center gap-2">
            {[...Array(20)].map((_, i) => (
              <div key={i} className="w-2 bg-blue-500 rounded-full animate-pulse" style={{ height: `${Math.random() * 100 + 20}%`, animationDelay: `${i * 0.1}s` }}></div>
            ))}
          </div>

          <div className="relative z-10 max-w-2xl">
            <h2 className="text-3xl font-black text-white mb-4">100% Quality Assurance (QA)</h2>
            <p className="text-slate-400 leading-relaxed mb-6">
              Every call is monitored and recorded. Our dedicated QA teams score interactions based on empathy, script adherence, and problem resolution to ensure your brand reputation stays pristine.
            </p>
            <ul className="flex flex-wrap gap-4">
              <li className="flex items-center gap-2 text-sm text-blue-300 font-bold">
                <span className="w-2 h-2 rounded-full bg-blue-500"></span> Call Recording
              </li>
              <li className="flex items-center gap-2 text-sm text-blue-300 font-bold">
                <span className="w-2 h-2 rounded-full bg-blue-500"></span> Live Monitoring
              </li>
              <li className="flex items-center gap-2 text-sm text-blue-300 font-bold">
                <span className="w-2 h-2 rounded-full bg-blue-500"></span> CSAT Surveys
              </li>
            </ul>
          </div>
          
        </motion.div>

      </div>
    </div>
  );
}