"use client";

import React from "react";
import { motion } from "framer-motion";

export default function NewsletterCTA() {
  return (
    <section className="relative py-24 bg-slate-950 overflow-hidden font-sans border-t border-slate-900">
      
      {/* Dynamic Background Glowing Orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-full pointer-events-none z-0">
        <motion.div 
          animate={{ scale: [1, 1.1, 1], rotate: [0, 90, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px]"
        />
        <motion.div 
          animate={{ scale: [1, 1.2, 1], rotate: [0, -90, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-[100px]"
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Animated Icon */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", bounce: 0.5 }}
          className="w-16 h-16 mx-auto bg-gradient-to-br from-blue-500/20 to-indigo-500/20 border border-blue-500/30 rounded-2xl flex items-center justify-center mb-8 backdrop-blur-sm"
        >
          <svg className="w-8 h-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
          </svg>
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
            Stay Ahead With <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">BNQinTECH Insights</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Get exclusive engineering insights, product launch updates, and real-world case studies delivered straight to your inbox. No fluff, just value.
          </p>
        </motion.div>
        
        {/* Pill-Shaped Glassmorphism Form */}
        <motion.form 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative flex flex-col sm:flex-row items-center w-full max-w-lg mx-auto bg-white/5 backdrop-blur-md border border-white/10 rounded-full p-1.5 focus-within:ring-2 focus-within:ring-blue-500/50 focus-within:border-blue-500/50 transition-all duration-300 shadow-2xl"
        >
          <div className="flex items-center pl-4 w-full sm:w-auto flex-1">
            <svg className="w-5 h-5 text-slate-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
            </svg>
            <input 
              type="email" 
              placeholder="Enter your work email..." 
              className="w-full bg-transparent border-none text-white px-3 py-3 placeholder-slate-500 focus:outline-none text-sm md:text-base"
              required
            />
          </div>
          <button 
            type="submit" 
            className="w-full sm:w-auto mt-2 sm:mt-0 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white px-8 py-3 rounded-full font-bold transition-all duration-300 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:-translate-y-0.5 active:translate-y-0"
          >
            Subscribe
          </button>
        </motion.form>

        {/* Social Proof / Trust Indicators */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 text-sm"
        >
          {/* Avatar Group */}
          <div className="flex -space-x-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-400 to-emerald-400 border-2 border-slate-950"></div>
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-purple-400 to-pink-400 border-2 border-slate-950"></div>
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-orange-400 to-yellow-400 border-2 border-slate-950"></div>
            <div className="w-8 h-8 rounded-full bg-slate-800 border-2 border-slate-950 flex items-center justify-center text-[10px] font-bold text-white">+</div>
          </div>
          
          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 text-slate-400">
            <p>Join <span className="text-white font-semibold">5,000+</span> tech leaders.</p>
            <span className="hidden sm:inline text-slate-600">•</span>
            <div className="flex items-center justify-center gap-1.5 text-slate-500">
              <svg className="w-4 h-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <span>No spam. Unsubscribe anytime.</span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}