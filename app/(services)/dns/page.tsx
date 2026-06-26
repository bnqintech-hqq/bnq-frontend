'use client';

import React, { useState } from 'react';
import Link from 'next/link';

// 1. Dynamic Props Define Kiye Hain
type ComingSoonProps = {
  badgeText?: string;
  titleFirstLine?: string;
  titleHighlight?: string;
  description?: string;
  supportEmail?: string;
  returnPath?: string;
  returnText?: string;
};

export default function ComingSoonPage({
  badgeText = "System Upgrade in Progress",
  titleFirstLine = "Expanding Our",
  titleHighlight = "Digital Infrastructure",
  description = "We are currently deploying next-generation features and enterprise-grade solutions to this section. Leave your email below to get notified the moment this goes live.",
  supportEmail = "support@bnqintech.com",
  returnPath = "/",
  returnText = "Back to Homepage"
}: ComingSoonProps) {
  
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleNotifySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Yahan aap apna API call add kar sakte hain
    setSubmitted(true);
    setEmail('');
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    // FIXED: pt-28 navbar se spacing ke liye aur bg-gray-50 light theme ke liye
    <div className="min-h-screen bg-gray-50 flex flex-col relative overflow-hidden font-sans pt-28 pb-12">
      
      {/* 🌐 Background Tech Grid (Light Theme Pattern) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-60"></div>

      {/* 🌌 Top Glow Effect (Soft Blue for Light Theme) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-400/10 blur-[120px] rounded-full pointer-events-none"></div>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center relative z-10 px-6">
        
        {/* 🟢 Live Status Badge (Dynamic) */}
        <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 backdrop-blur-sm mb-8 shadow-sm">
          <span className="flex h-2.5 w-2.5 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-600"></span>
          </span>
          <span className="text-[11px] font-bold text-blue-700 tracking-widest uppercase">
            {badgeText}
          </span>
        </div>

        {/* ✨ Professional Heading (Dynamic) */}
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-gray-900 text-center tracking-tight mb-6 leading-tight">
          {titleFirstLine} <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-700">
            {titleHighlight}
          </span>
        </h1>

        {/* 📝 Detailed Description (Dynamic) */}
        <p className="text-gray-500 text-center max-w-2xl mx-auto mb-10 text-sm md:text-lg leading-relaxed font-medium">
          {description}
        </p>

        {/* 📩 Notification Form (Now Functional with State) */}
        <form onSubmit={handleNotifySubmit} className="w-full max-w-md flex flex-col sm:flex-row gap-3 mb-12 relative">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your work email..."
            className="flex-1 bg-white border border-gray-300 rounded-xl px-5 py-3.5 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all text-sm shadow-sm"
            required
          />
          <button
            type="submit"
            className="px-6 py-3.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold rounded-xl transition-all duration-300 shadow-md hover:shadow-lg whitespace-nowrap active:scale-[0.98]"
          >
            {submitted ? 'Saved! ✓' : 'Notify Me'}
          </button>
        </form>

        {/* 🔙 Helpful Action Links (Dynamic) */}
        <div className="flex items-center gap-6">
          <Link href={returnPath} className="text-sm font-semibold text-gray-500 hover:text-blue-600 flex items-center gap-2 transition-colors group">
            <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            {returnText}
          </Link>
          <span className="w-1.5 h-1.5 bg-gray-300 rounded-full"></span>
          <a href={`mailto:${supportEmail}`} className="text-sm font-semibold text-gray-500 hover:text-blue-600 transition-colors">
            Contact Support
          </a>
        </div>
        
      </main>
      
      {/* Footer Info */}
      <div className="absolute bottom-6 left-0 right-0 text-center z-10">
        <p className="text-[11px] text-gray-400 font-mono uppercase tracking-widest font-semibold">
          © {new Date().getFullYear()} BNQinTECH • Secure Connection
        </p>
      </div>
    </div>
  );
}