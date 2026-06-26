'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function PartnersPage() {
  // Animation Variants for smooth scrolling reveal
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { type: "spring" as const, stiffness: 100, damping: 20 } 
    }
  };

  const partnerPrograms = [
    {
      id: "reseller",
      title: "Reseller Program",
      desc: "Sell our enterprise-grade web hosting, VPS, and cloud solutions directly to your clients. Set your own prices and keep 100% of the profits.",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      href: "/partners/reseller",
      color: "text-amber-500",
      hoverLine: "group-hover:bg-amber-500"
    },
    {
      id: "dealer",
      title: "Dealer Network",
      desc: "Become an authorized regional dealer for BNQinTECH hardware, data center deployments, and licensed enterprise software products.",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      href: "/partners/dealer",
      color: "text-blue-600",
      hoverLine: "group-hover:bg-blue-600"
    },
    {
      id: "channel",
      title: "Channel Partners",
      desc: "Strategic co-selling alliances. Combine your industry expertise with our technical execution to close large-scale enterprise deals.",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      href: "/partners/channel",
      color: "text-indigo-600",
      hoverLine: "group-hover:bg-indigo-600"
    },
    {
      id: "whitelabel",
      title: "White Label Solutions",
      desc: "We build it, you brand it. From custom SaaS apps to BPO services, deliver high-quality IT solutions entirely under your own agency's name.",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
      href: "/partners/white-label",
      color: "text-emerald-600",
      hoverLine: "group-hover:bg-emerald-600"
    },
    {
      id: "referral",
      title: "Referral Affiliate",
      desc: "Earn passive income. Simply refer clients needing web development, hosting, or call center services and earn industry-leading commissions.",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
        </svg>
      ),
      href: "/partners/referral",
      color: "text-rose-500",
      hoverLine: "group-hover:bg-rose-500"
    }
  ];

  return (
    <main className="min-h-screen bg-slate-50 font-sans selection:bg-amber-200">
      
      {/* 🚀 PREMIUM HERO SECTION (Dark theme with Amber/Blue glow) */}
      <section className="relative pt-40 pb-24 lg:pt-40 lg:pb-32 bg-slate-950 overflow-hidden z-10 rounded-b-[3rem] shadow-2xl">
        {/* Abstract Glow Background */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-amber-500/10 blur-[150px] rounded-full pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-600/20 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 font-bold uppercase tracking-widest text-[10px] mb-6 backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse"></span>
              Grow With Us
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] tracking-tight mb-8">
              Accelerate Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-amber-600">
                Revenue Growth.
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-400 font-light leading-relaxed">
              Join the BNQinTECH partner ecosystem. Whether you're an agency, an IT consultant, or an affiliate, we have a highly profitable program designed for your success.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 🧩 FLUID CATEGORY GRID (Un-boxy, Glassy & Interactive) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 -mt-16 relative z-20">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 justify-center"
        >
          {partnerPrograms.map((program) => (
            <motion.div 
              key={program.id} 
              variants={itemVariants}
              className="group relative bg-white rounded-[2rem] p-8 lg:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(245,158,11,0.08)] transition-all duration-500 overflow-hidden flex flex-col"
            >
              {/* Animated Shutter Hover Effect (Bottom Line matching icon color) */}
              <div className={`absolute bottom-0 left-0 w-full h-1 bg-slate-100 transition-all duration-500 group-hover:h-1.5 ${program.hoverLine}`}></div>
              
              {/* Content */}
              <div className="relative z-10 flex-grow">
                <div className={`w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 shadow-sm border border-slate-100 ${program.color}`}>
                  {program.icon}
                </div>
                
                <h2 className="text-xl md:text-2xl font-extrabold text-slate-900 tracking-tight mb-3 transition-colors">
                  {program.title}
                </h2>
                
                <p className="text-slate-500 leading-relaxed font-light mb-8 text-sm md:text-base">
                  {program.desc}
                </p>
              </div>

              {/* Action Link */}
              <div className="mt-auto pt-6 border-t border-slate-50">
                <Link 
                  href={program.href}
                  className="inline-flex items-center gap-2 text-sm font-bold text-slate-900 hover:text-amber-600 transition-colors group/link"
                >
                  View Program Details
                  <span className="opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all duration-300">
                    →
                  </span>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* 📞 ENTERPRISE CTA SECTION */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-32 text-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-slate-900 rounded-[2rem] p-12 md:p-16 relative overflow-hidden shadow-2xl"
        >
          {/* Abstract background shapes */}
          <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-lg bg-amber-500/10 blur-[100px] rounded-full pointer-events-none"></div>

          <div className="relative z-10">
            <span className="text-[10px] font-bold tracking-[0.2em] text-amber-500 uppercase block mb-4">Let's Talk Business</span>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-6 tracking-tight">Ready to scale your agency?</h2>
            <p className="text-slate-400 font-medium mb-10 max-w-xl mx-auto text-sm md:text-base">
              Contact our partnership managers to discuss custom margins, API integrations, and white-labeled engineering resources.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/company/contact" className="w-full sm:w-auto bg-amber-500 text-slate-950 font-bold px-8 py-4 rounded-full shadow-lg shadow-amber-500/20 hover:bg-amber-400 hover:scale-105 transition-all">
                Become a Partner
              </Link>
            </div>
          </div>
        </motion.div>
      </section>

    </main>
  );
}