'use client';

import React from 'react';
import Link from 'next/link';
import { motion, type Variants } from 'framer-motion';

export default function HostingPage() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100, damping: 20 } },
  };

  const categories = [
    {
      id: 'web-hosting',
      title: 'Web Hosting',
      desc: 'High-performance, secure, and fully managed hosting environments for businesses of all sizes. Powered by NVMe storage and LiteSpeed servers.',
      icon: (
        <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
      links: [
        { name: 'Shared Hosting', href: '/hosting/shared' },
        { name: 'WordPress Hosting', href: '/hosting/wordpress' },
        { name: 'Business Hosting', href: '/hosting/business' },
        { name: 'Reseller Hosting', href: '/hosting/reseller' },
      ],
    },
    {
      id: 'servers',
      title: 'VPS & Servers',
      desc: 'Enterprise-grade bare metal dedicated servers and scalable cloud VPS instances. Get full root access and dedicated resources.',
      icon: (
        <svg className="w-8 h-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
        </svg>
      ),
      links: [
        { name: 'Cloud VPS', href: '/cloud-vps' },
        { name: 'Dedicated Servers', href: '/dedicated-servers' },
        { name: 'Managed Servers', href: '/managed-servers' },
        { name: 'GPU Servers', href: '/gpu-servers' },
      ],
    },
    {
      id: 'domains',
      title: 'Domains & SSL',
      desc: "Establish your brand's digital identity. Register premium top-level domains and secure your user data with bank-grade SSL encryption.",
      icon: (
        <svg className="w-8 h-8 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      ),
      links: [
        { name: 'Domain Search', href: '/domains' },
        { name: 'Domain Transfer', href: '/domain-transfer' },
        { name: 'SSL Certificates', href: '/ssl' },
      ],
    },
    {
      id: 'email',
      title: 'Email & DNS',
      desc: 'Upgrade your corporate communications. Professional ad-free business emails and ultra-fast, highly reliable global DNS management.',
      icon: (
        <svg className="w-8 h-8 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
        </svg>
      ),
      links: [
        { name: 'Business Email', href: '/business-email' },
        { name: 'DNS Management', href: '/dns' },
        { name: 'Google Workspace', href: '/business-email' },
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-slate-50 font-sans selection:bg-blue-200">
      <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 bg-slate-950 overflow-hidden z-10 rounded-b-[3rem] shadow-2xl">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/20 blur-[150px] rounded-full pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-500/20 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-400 font-bold uppercase tracking-widest text-[10px] mb-6 backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span>
              Infrastructure Ecosystem
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] tracking-tight mb-8">
              Powering the <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-emerald-400">
                Modern Web.
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-400 font-light leading-relaxed max-w-2xl">
              From high-speed shared hosting for startups to bare-metal dedicated servers for enterprise workloads. Secure, scalable, and 99.9% uptime guaranteed.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 -mt-16 relative z-20">
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {categories.map((category) => (
            <motion.div
              key={category.id}
              variants={itemVariants}
              className="group relative bg-white rounded-[2rem] p-8 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(37,99,235,0.08)] transition-all duration-500 overflow-hidden"
            >
              <div className="absolute bottom-0 left-0 w-full h-1 bg-slate-100 transition-all duration-500 group-hover:h-1.5 group-hover:bg-blue-600"></div>
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center gap-5 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                    {category.icon}
                  </div>
                  <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">{category.title}</h2>
                </div>

                <p className="text-slate-500 leading-relaxed font-light mb-10 h-16 md:h-12">{category.desc}</p>

                <div className="mt-auto grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6 border-t border-slate-100 pt-8">
                  {category.links.map((link, idx) => (
                    <Link
                      key={idx}
                      href={link.href}
                      className="flex items-center gap-2 text-sm font-bold text-slate-700 hover:text-blue-600 transition-colors group/link"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover/link:bg-blue-600 group-hover/link:scale-150 transition-all duration-300"></span>
                      {link.name}
                      <span className="ml-auto opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all duration-300 text-blue-600">
                        →
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-32 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-blue-600 rounded-[2rem] p-12 md:p-16 relative overflow-hidden shadow-2xl shadow-blue-600/20"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-900/30 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tight">Need Custom Architecture?</h2>
            <p className="text-blue-100 font-medium mb-10 max-w-2xl mx-auto text-lg">
              Not sure which server configuration fits your traffic? Talk to our cloud architects for a free infrastructure audit.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/company/contact" className="w-full sm:w-auto bg-white text-slate-900 font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all">
                Talk to an Expert
              </Link>
              <a href="tel:+919271360782" className="w-full sm:w-auto bg-blue-700/50 hover:bg-blue-700 text-white font-bold border border-blue-400/30 px-8 py-4 rounded-full transition-colors">
                +91 92 7136 0782
              </a>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
