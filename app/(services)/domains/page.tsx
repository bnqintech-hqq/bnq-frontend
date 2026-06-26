"use client";

import React, { useState } from "react";
import { Metadata } from "next";
import Link from "next/link";
import { motion } from "framer-motion";

// Note: Metadata cannot be used with "use client" in the same file in Next.js App Router.
// For SEO, you normally put metadata in a separate layout.tsx or remove "use client" if animations aren't needed.
// Keeping it simple here with client-side animations.

export default function DomainsPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const tldPricing = [
    { ext: ".com", price: "₹899", original: "₹1099", desc: "The world's most popular extension." },
    { ext: ".in", price: "₹499", original: "₹699", desc: "Perfect for businesses in India." },
    { ext: ".co", price: "₹1,299", original: "₹2099", desc: "The global extension for startups." },
    { ext: ".tech", price: "₹399", original: "₹3499", desc: "Best for tech startups and devs." },
  ];

  return (
    <main className="min-h-screen bg-slate-50 pt-30 pb-16 font-sans">
      
      {/* Hero Search Section */}
      <section className="bg-slate-900 py-24 text-white relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/30 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-600/30 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
            Find Your Perfect <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Domain Name</span>
          </h1>
          <p className="text-lg text-slate-300 mb-12">
            Claim your digital identity today. Free domain privacy and DNS management included with every registration.
          </p>

          {/* Huge Search Bar */}
          <div className="relative max-w-3xl mx-auto">
            <div className="flex flex-col sm:flex-row bg-white rounded-2xl p-2 shadow-2xl focus-within:ring-4 focus-within:ring-blue-500/50 transition-all">
              <div className="flex items-center flex-1 px-4">
                <span className="text-slate-400 text-xl font-bold">www.</span>
                <input
                  type="text"
                  placeholder="Enter your business name..."
                  className="w-full bg-transparent text-slate-900 px-2 py-4 text-lg md:text-xl font-medium focus:outline-none placeholder:text-slate-300"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <button className="bg-blue-600 hover:bg-blue-500 text-white font-bold text-lg px-8 py-4 rounded-xl transition-all w-full sm:w-auto mt-2 sm:mt-0">
                Search Domain
              </button>
            </div>
            
            {/* TLD Quick Links */}
            <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm font-medium">
              <span className="text-slate-400">Popular:</span>
              <span className="text-blue-300">.com at ₹899</span>
              <span className="hidden sm:inline text-slate-600">|</span>
              <span className="text-emerald-300">.in at ₹499</span>
              <span className="hidden sm:inline text-slate-600">|</span>
              <span className="text-indigo-300">.tech at ₹399</span>
            </div>
          </div>
        </div>
      </section>

      {/* TLD Pricing Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Top Extensions for Your Business</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tldPricing.map((tld, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all group">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-3xl font-extrabold text-slate-900 group-hover:text-blue-600 transition-colors">{tld.ext}</h3>
                <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded">Sale</span>
              </div>
              <p className="text-sm text-slate-500 mb-6 h-10">{tld.desc}</p>
              <div className="flex items-end gap-2 border-t border-slate-100 pt-4">
                <span className="text-2xl font-bold text-slate-900">{tld.price}</span>
                <span className="text-sm text-slate-400 line-through mb-1">{tld.original}</span>
                <span className="text-xs text-slate-500 mb-1.5 ml-1">/yr</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SSL Certificates Section */}
      <section className="bg-slate-900 py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold mb-4">Secure Your Website with Premium SSL</h2>
            <p className="text-slate-400 mb-8 leading-relaxed">
              Google flags sites without SSL as "Not Secure". Protect your customers' data, boost your SEO rankings, and build trust with our enterprise-grade SSL certificates.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center text-slate-300">
                <span className="text-emerald-400 mr-3">✓</span> 256-bit Encryption
              </li>
              <li className="flex items-center text-slate-300">
                <span className="text-emerald-400 mr-3">✓</span> Wildcard SSL Available
              </li>
              <li className="flex items-center text-slate-300">
                <span className="text-emerald-400 mr-3">✓</span> Green Padlock & Trust Seal
              </li>
            </ul>
            <button className="bg-white text-slate-900 hover:bg-slate-100 font-bold px-8 py-3 rounded-lg transition-colors">
              Explore SSL Plans
            </button>
          </div>
          <div className="lg:w-1/2 flex justify-center">
            <div className="w-48 h-48 bg-emerald-500/20 border border-emerald-500/50 rounded-full flex items-center justify-center relative">
              <div className="absolute inset-0 bg-emerald-500/20 blur-xl rounded-full"></div>
              <svg className="w-20 h-20 text-emerald-400 relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
              </svg>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}