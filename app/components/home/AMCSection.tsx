"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function AMCSection() {
  const amcFeatures = [
    {
      id: 1,
      title: "SLA-Backed Uptime",
      description: "Proactive monitoring, priority issue resolution, and defined response times.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      colors: "bg-emerald-100 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white",
    },
    {
      id: 2,
      title: "Continuous Enhancements",
      description: "Performance improvements, new feature updates, and UX refinements.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
        </svg>
      ),
      colors: "bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white",
    },
    {
      id: 3,
      title: "Security & Compliance",
      description: "Regular security patches, dependency updates, and health checks.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      colors: "bg-indigo-100 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white",
    },
    {
      id: 4,
      title: "Dedicated Support",
      description: "Assigned engineers, monthly reports, and a clear escalation path.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      colors: "bg-purple-100 text-purple-600 group-hover:bg-purple-600 group-hover:text-white",
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring" as const, bounce: 0.4, duration: 0.8 } }
  };

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-72 h-72 rounded-full bg-blue-100 blur-3xl opacity-50 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-indigo-100 blur-3xl opacity-50 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Left Content Area */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:w-1/2"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 font-bold uppercase tracking-wider text-xs mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
              </span>
              Long-Term Partnership
            </div>
            
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
              Beyond Delivery: <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                Annual Maintenance
              </span>
            </h2>
            
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Software is an asset, not a one-time project. We don't disappear after deployment. Our AMCs ensure your product stays secure, fast, and scalable—month after month, year after year.
            </p>
            
            <Link href="/company/contact" className="inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-sm transition-all duration-300 shadow-lg hover:shadow-blue-500/30 hover:-translate-y-1 group">
              Talk to Us About AMC
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>

            {/* Added Trust Indicators */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4 text-sm text-slate-600 font-medium">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                Flexible Plans
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                No Hidden Costs
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                Scales With You
              </div>
            </div>
          </motion.div>
          
          {/* Right Cards Area */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {amcFeatures.map((feature) => (
              <motion.div 
                key={feature.id} 
                variants={itemVariants}
                className="group bg-white p-6 rounded-2xl shadow-sm border border-slate-200 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/5 hover:-translate-y-2 hover:border-blue-200 cursor-default"
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-colors duration-300 ${feature.colors}`}>
                  {feature.icon}
                </div>
                <h4 className="font-bold text-slate-900 mb-3 text-lg">{feature.title}</h4>
                <p className="text-sm text-slate-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}