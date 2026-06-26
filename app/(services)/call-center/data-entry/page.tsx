"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function DataEntryPage() {
  // Services Data
  const services = [
    {
      title: "CRM & ERP Data Entry",
      description: "Accurate updation of customer records, sales data, and inventory into Salesforce, HubSpot, SAP, or custom CRMs.",
      icon: "📊"
    },
    {
      title: "eCommerce Cataloging",
      description: "Bulk product uploads, image tagging, price updates, and description formatting for Amazon, Shopify, and Magento.",
      icon: "🛍️"
    },
    {
      title: "Form & Invoice Processing",
      description: "Digitization of physical forms, medical claims, invoices, and receipts with high-speed OCR and manual verification.",
      icon: "📄"
    },
    {
      title: "Data Cleansing & Enrichment",
      description: "Removing duplicates, verifying outdated information, and enriching your existing databases for better marketing ROI.",
      icon: "✨"
    },
    {
      title: "Offline Data Entry",
      description: "Secure transcription of offline documents, handwritten notes, and physical directories into digital formats.",
      icon: "⌨️"
    },
    {
      title: "Web Research & Scraping",
      description: "Targeted B2B lead generation, market research data collection, and competitor price tracking.",
      icon: "🔍"
    }
  ];

  // Stats Data
  const stats = [
    { value: "99.99%", label: "Accuracy Guaranteed" },
    { value: "24/7", label: "Operations Round the Clock" },
    { value: "ISO", label: "Data Security Compliant" },
    { value: "< 12h", label: "Average Turnaround Time" }
  ];

  return (
    <div className="min-h-screen bg-slate-50 pt-40 pb-20 font-sans">
      
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="bg-slate-900 rounded-[40px] p-8 md:p-16 lg:p-20 relative overflow-hidden shadow-2xl">
          {/* Background Glow */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/20 blur-[120px] pointer-events-none rounded-full translate-x-1/3 -translate-y-1/3" />
          
          <div className="relative z-10 max-w-3xl">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-blue-400 font-bold tracking-widest uppercase text-xs mb-6 block"
            >
              BNQinTECH BPO Solutions
            </motion.span>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight mb-6 leading-tight"
            >
              Precision <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Data Entry</span> & Processing.
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-slate-400 font-light leading-relaxed mb-10 max-w-2xl"
            >
              Scale your back-office operations with our highly trained data entry specialists. We deliver error-free, secure, and rapid data processing so you can focus on core business growth.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <Link href="/company/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3.5 rounded-full font-bold text-sm uppercase tracking-wider transition-all shadow-lg hover:shadow-blue-600/30 hover:-translate-y-0.5">
                Hire a Dedicated Team
              </Link>
              <Link href="#services" className="bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 px-8 py-3.5 rounded-full font-bold text-sm uppercase tracking-wider transition-all">
                Explore Services
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Performance Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-24">
          {stats.map((stat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-6 rounded-3xl border border-slate-200 text-center shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-3xl md:text-4xl font-black text-blue-600 mb-2">{stat.value}</h3>
              <p className="text-xs md:text-sm text-slate-500 font-bold uppercase tracking-wide">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Services Grid */}
        <div id="services" className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">Our Core Data Services</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">Customized data management workflows tailored for Healthcare, Real Estate, eCommerce, and Logistics industries.</p>
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
                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 group-hover:bg-blue-600 transition-all duration-300">
                  <span className="group-hover:grayscale group-hover:brightness-200">{service.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed font-medium">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Security Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-slate-900 rounded-3xl p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-10 shadow-2xl relative overflow-hidden"
        >
          {/* Cyber lines background */}
          <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'linear-gradient(#2563eb 1px, transparent 1px), linear-gradient(90deg, #2563eb 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

          <div className="relative z-10 max-w-2xl">
            <h2 className="text-3xl font-black text-white mb-4">Enterprise-Grade Data Security</h2>
            <p className="text-slate-400 leading-relaxed">
              We treat your data with the highest level of confidentiality. Our facilities feature strict access controls, non-disclosure agreements (NDAs) for all staff, disabled USB ports, and encrypted data transfer protocols.
            </p>
          </div>
          
          <div className="relative z-10 shrink-0">
            <div className="w-32 h-32 rounded-full border-4 border-emerald-500/30 flex items-center justify-center bg-emerald-500/10">
              <span className="text-emerald-400 text-5xl">🔒</span>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}