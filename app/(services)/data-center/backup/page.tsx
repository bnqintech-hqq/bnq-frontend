"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function BackupPage() {
  // Backup & Disaster Recovery Services
  const services = [
    {
      title: "Automated Cloud Backups",
      description: "Set-and-forget daily, weekly, or continuous data backups routed securely to our redundant Tier-IV data centers.",
      icon: "☁️"
    },
    {
      title: "Immutable Storage",
      description: "Ransomware-proof your business with WORM (Write Once, Read Many) technology. Once written, data cannot be deleted or altered.",
      icon: "🛡️"
    },
    {
      title: "Bare Metal Recovery",
      description: "Restore entire physical or virtual servers—including the OS, applications, and configurations—to completely new hardware in minutes.",
      icon: "🖥️"
    },
    {
      title: "Multi-Site Replication",
      description: "Real-time geographical data replication ensures that if one region goes down, your data is instantly accessible from another.",
      icon: "🔄"
    },
    {
      title: "App & Database Backup",
      description: "Application-aware backups for MS SQL, MySQL, PostgreSQL, and Oracle ensuring database consistency during the snapshot process.",
      icon: "🗄️"
    },
    {
      title: "SaaS Backup (M365 & Google)",
      description: "Don't rely on default retention policies. We provide granular, unlimited backups for Microsoft 365 and Google Workspace accounts.",
      icon: "📧"
    }
  ];

  // Enterprise Security Metrics
  const metrics = [
    { value: "99.9999%", label: "Data Durability" },
    { value: "< 15 Mins", label: "Target RPO & RTO" },
    { value: "AES-256", label: "Military-Grade Encryption" },
    { value: "3-2-1", label: "Backup Rule Compliant" }
  ];

  return (
    <div className="min-h-screen bg-slate-50 pt-40 pb-20 font-sans">
      
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="bg-slate-900 rounded-[40px] p-8 md:p-16 lg:p-20 relative overflow-hidden shadow-2xl">
          {/* Vault/Shield Glowing Background Effect */}
          <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none">
            <div className="w-[500px] h-[500px] border border-blue-500 rounded-full animate-pulse blur-[2px]"></div>
            <div className="w-[400px] h-[400px] border border-cyan-400 rounded-full absolute blur-[4px]"></div>
            <div className="w-[800px] h-[800px] bg-blue-600/20 blur-[150px] absolute"></div>
          </div>
          
          <div className="relative z-10 max-w-3xl">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-blue-400 font-bold tracking-widest uppercase text-xs mb-6 block"
            >
              BNQinTECH Disaster Recovery
            </motion.span>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight mb-6 leading-tight"
            >
              Bulletproof <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Data Backup</span> & Recovery.
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-slate-400 font-light leading-relaxed mb-10 max-w-2xl"
            >
              Hardware fails. Ransomware strikes. Human errors happen. Protect your mission-critical infrastructure with our automated, encrypted, and ultra-fast disaster recovery solutions. 
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <Link href="/company/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3.5 rounded-full font-bold text-sm uppercase tracking-wider transition-all shadow-lg hover:shadow-blue-600/30 hover:-translate-y-0.5">
                Secure Your Data
              </Link>
              <Link href="#architecture" className="bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 px-8 py-3.5 rounded-full font-bold text-sm uppercase tracking-wider transition-all">
                View Architecture
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
              <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-blue-50 rounded-full -z-10" />
              <h3 className="text-3xl md:text-4xl font-black text-slate-900 mb-2">{metric.value}</h3>
              <p className="text-xs md:text-sm text-slate-500 font-bold uppercase tracking-wide">{metric.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Services Grid */}
        <div id="architecture" className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">Comprehensive Data Protection</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">From individual file recovery to complete infrastructure failover, we guarantee business continuity under any scenario.</p>
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
                <div className="text-4xl mb-6 bg-slate-50 w-16 h-16 rounded-2xl flex items-center justify-center border border-slate-100 group-hover:bg-blue-600 transition-colors duration-300">
                  <span className="group-hover:brightness-0 group-hover:invert transition-all">{service.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed font-medium">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Security & Ransomware Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-slate-900 rounded-3xl p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-10 shadow-2xl relative overflow-hidden"
        >
          {/* Cyber Lock Background Pattern */}
          <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'linear-gradient(45deg, #2563eb 25%, transparent 25%, transparent 75%, #2563eb 75%, #2563eb), linear-gradient(45deg, #2563eb 25%, transparent 25%, transparent 75%, #2563eb 75%, #2563eb)', backgroundSize: '20px 20px', backgroundPosition: '0 0, 10px 10px' }}></div>

          <div className="relative z-10 max-w-2xl">
            <h2 className="text-3xl font-black text-white mb-4">Zero-Trust Security & Encryption</h2>
            <p className="text-slate-400 leading-relaxed mb-6">
              Your data is encrypted twice: first at the source before it leaves your server, and again while at rest in our data centers using AES-256 military-grade encryption. Even we cannot read your backup data.
            </p>
            <div className="flex flex-wrap gap-4">
              <span className="flex items-center gap-2 text-sm text-blue-300 font-bold bg-blue-900/40 px-4 py-2 rounded-lg border border-blue-800/50">
                🔒 End-to-End Encryption
              </span>
              <span className="flex items-center gap-2 text-sm text-blue-300 font-bold bg-blue-900/40 px-4 py-2 rounded-lg border border-blue-800/50">
                📜 HIPAA & SOC2 Compliant
              </span>
              <span className="flex items-center gap-2 text-sm text-blue-300 font-bold bg-blue-900/40 px-4 py-2 rounded-lg border border-blue-800/50">
                🔑 Customer-Controlled Keys
              </span>
            </div>
          </div>
          
        </motion.div>

      </div>
    </div>
  );
}