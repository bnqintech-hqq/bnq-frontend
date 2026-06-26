"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function HelpDeskPage() {
  // Help Desk Services Data
  const services = [
    {
      title: "L1, L2 & L3 Technical Support",
      description: "Tiered technical troubleshooting from basic password resets (L1) to advanced server and software debugging (L3).",
      icon: "👨‍💻"
    },
    {
      title: "Omnichannel Customer Service",
      description: "Seamless support across Voice calls, Live Chat, Email, and Social Media platforms ensuring no customer query is missed.",
      icon: "🎧"
    },
    {
      title: "IT Service Desk (ITSM)",
      description: "Internal employee IT support, software provisioning, and hardware troubleshooting using ITIL best practices.",
      icon: "🖥️"
    },
    {
      title: "Order & Billing Support",
      description: "Handling customer inquiries regarding payments, refunds, subscription management, and e-commerce order tracking.",
      icon: "💳"
    },
    {
      title: "Remote Troubleshooting",
      description: "Secure remote desktop support to fix client software issues, configure networks, and install updates instantly.",
      icon: "🌐"
    },
    {
      title: "Ticketing System Management",
      description: "Expert handling of Zendesk, Jira Service Desk, Freshdesk, and ServiceNow to maintain zero backlog.",
      icon: "🎫"
    }
  ];

  // Performance Metrics Data
  const metrics = [
    { value: "< 30s", label: "Average Speed of Answer" },
    { value: "95%+", label: "First Contact Resolution (FCR)" },
    { value: "24/7", label: "Availability 365 Days" },
    { value: "4.8/5", label: "Average CSAT Score" }
  ];

  return (
    <div className="min-h-screen bg-slate-50 pt-40 pb-20 font-sans">
      
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="bg-slate-900 rounded-[40px] p-8 md:p-16 lg:p-20 relative overflow-hidden shadow-2xl">
          {/* Background Glow */}
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-600/20 blur-[100px] pointer-events-none rounded-full -translate-x-1/2 translate-y-1/3" />
          
          <div className="relative z-10 max-w-3xl">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-blue-400 font-bold tracking-widest uppercase text-xs mb-6 block"
            >
              BNQinTECH Support Outsourcing
            </motion.span>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight mb-6 leading-tight"
            >
              World-Class <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Help Desk</span> & IT Support.
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-slate-400 font-light leading-relaxed mb-10 max-w-2xl"
            >
              Deliver exceptional customer experiences with our 24/7 dedicated support teams. From technical troubleshooting to customer care, we act as the seamless extension of your brand.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <Link href="/company/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3.5 rounded-full font-bold text-sm uppercase tracking-wider transition-all shadow-lg hover:shadow-blue-600/30 hover:-translate-y-0.5">
                Outsource Your Support
              </Link>
              <Link href="#capabilities" className="bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 px-8 py-3.5 rounded-full font-bold text-sm uppercase tracking-wider transition-all">
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
              <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-blue-50 rounded-tl-full -z-10 group-hover:scale-150 transition-transform duration-500" />
              <h3 className="text-3xl md:text-4xl font-black text-slate-900 mb-2">{metric.value}</h3>
              <p className="text-xs md:text-sm text-slate-500 font-bold uppercase tracking-wide">{metric.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Services Grid */}
        <div id="capabilities" className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">Comprehensive Support Solutions</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">Multilingual support agents trained in your products, working on your preferred ticketing systems.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-xl hover:border-blue-200 transition-all duration-300"
              >
                <div className="text-4xl mb-6 bg-slate-50 w-16 h-16 rounded-2xl flex items-center justify-center border border-slate-100">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed font-medium">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Platform Expertise Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-10 md:p-14 text-center text-white shadow-2xl relative overflow-hidden"
        >
          {/* Abstract background */}
          <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '30px 30px' }}></div>

          <h2 className="text-2xl md:text-3xl font-black mb-4 relative z-10">Tools We Master</h2>
          <p className="text-blue-100 max-w-2xl mx-auto mb-10 font-light leading-relaxed relative z-10">
            Our agents plug directly into your existing tech stack. We are experts in major CRM and ITSM platforms, requiring zero transition time.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 relative z-10">
            {['Zendesk', 'Salesforce', 'ServiceNow', 'Jira Service Management', 'Freshdesk'].map((tool, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-sm border border-white/20 px-6 py-3 rounded-full text-sm font-bold tracking-wide">
                {tool}
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </div>
  );
}