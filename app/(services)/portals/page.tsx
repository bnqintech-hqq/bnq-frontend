'use client';

import React from 'react';
import Link from 'next/link';
import { motion, type Variants } from 'framer-motion';

export default function PortalsPage() {
  // Animation Variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 20 } }
  };

  const portalCategories = [
    {
      id: "govt",
      title: "Government Portals",
      desc: "Secure, GIGW-compliant civic engagement platforms and public infrastructure portals designed for high-volume citizen traffic.",
      icon: "🏛️",
      href: "/portals/govt",
      color: "text-amber-600"
    },
    {
      id: "ecommerce",
      title: "E-Commerce Platforms",
      desc: "High-converting multi-vendor marketplaces, B2B wholesale portals, and headless commerce solutions built for rapid scaling.",
      icon: "🛒",
      href: "/portals/ecommerce",
      color: "text-blue-600"
    },
    {
      id: "education",
      title: "Education Portals",
      desc: "Advanced Learning Management Systems (LMS), student data dashboards, and interactive virtual classroom integrations.",
      icon: "🎓",
      href: "/portals/education",
      color: "text-emerald-600"
    },
    {
      id: "healthcare",
      title: "Healthcare Portals",
      desc: "HIPAA-compliant telemedicine platforms, patient health record (PHR) dashboards, and hospital management workflows.",
      icon: "🏥",
      href: "/portals/healthcare",
      color: "text-rose-500"
    },
    {
      id: "banking",
      title: "Banking & Finance",
      desc: "Bank-grade encrypted fintech solutions, loan management portals, and secure customer wealth dashboards.",
      icon: "🏦",
      href: "/portals/banking",
      color: "text-indigo-600"
    },
    {
      id: "custom",
      title: "Custom Enterprise",
      desc: "Have a unique workflow? We architect bespoke enterprise portals tailored strictly around your operational logic.",
      icon: "⚙️",
      href: "/software/web-apps",
      color: "text-slate-600"
    }
  ];

  return (
    <main className="min-h-screen bg-slate-50 font-sans selection:bg-blue-200">
      
      {/* 🚀 PREMIUM HERO SECTION (Dark theme with glow) */}
      <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 bg-slate-950 overflow-hidden z-10 rounded-b-[3rem] shadow-2xl">
        {/* Abstract Glow Background */}
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-indigo-600/20 blur-[150px] rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/20 blur-[120px] rounded-full pointer-events-none translate-x-1/3 translate-y-1/3"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-3xl text-center mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-400 font-bold uppercase tracking-widest text-[10px] mb-6 backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span>
              Enterprise Solutions
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] tracking-tight mb-8">
              Digital Portals.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-emerald-400">
                Built for Scale.
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-400 font-light leading-relaxed max-w-2xl mx-auto">
              Industry-specific digital environments designed to streamline operations, engage users, and protect sensitive data with zero-trust security.
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {portalCategories.map((category) => (
            <motion.div 
              key={category.id} 
              variants={itemVariants}
              className="group relative bg-white rounded-[2rem] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(37,99,235,0.08)] transition-all duration-500 overflow-hidden flex flex-col"
            >
              {/* Shutter Hover Effect (Bottom Line) */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-slate-100 transition-all duration-500 group-hover:h-1.5 group-hover:bg-blue-600"></div>
              
              {/* Content */}
              <div className="relative z-10 flex-grow">
                <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-3xl mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 shadow-sm border border-slate-100">
                  <span className={category.color}>{category.icon}</span>
                </div>
                
                <h2 className="text-xl md:text-2xl font-extrabold text-slate-900 tracking-tight mb-3 group-hover:text-blue-600 transition-colors">
                  {category.title}
                </h2>
                
                <p className="text-slate-500 leading-relaxed font-light mb-8 text-sm md:text-base">
                  {category.desc}
                </p>
              </div>

              {/* Action Link */}
              <div className="mt-auto pt-6 border-t border-slate-50">
                <Link 
                  href={category.href}
                  className="inline-flex items-center gap-2 text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors"
                >
                  Explore Solution
                  <span className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
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
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-lg bg-blue-600/20 blur-[100px] rounded-full pointer-events-none"></div>

          <div className="relative z-10">
            <span className="text-[10px] font-bold tracking-[0.2em] text-blue-400 uppercase block mb-4">Let's Build Together</span>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-6 tracking-tight">Have a complex portal requirement?</h2>
            <p className="text-slate-400 font-medium mb-10 max-w-xl mx-auto text-sm md:text-base">
              Our engineering team specializes in mapping intricate business logic into seamless, user-friendly digital dashboards.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/company/contact" className="w-full sm:w-auto bg-blue-600 text-white font-bold px-8 py-4 rounded-full shadow-lg shadow-blue-600/30 hover:bg-blue-500 hover:scale-105 transition-all">
                Request a Proposal
              </Link>
            </div>
          </div>
        </motion.div>
      </section>

    </main>
  );
}
