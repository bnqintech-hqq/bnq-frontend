'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function EcommercePage() {
  // Functional State for Pricing Toggle
  const [isYearly, setIsYearly] = useState(true);
  
  // Functional State for Feature Tabs
  const [activeTab, setActiveTab] = useState('inventory');

  // Interactive Tab Content Data
  const tabContent = {
    storefront: {
      title: "High-Conversion Storefronts",
      desc: "Lightning-fast, SEO-optimized user interfaces designed to maximize sales. Built with clean architecture for seamless browsing on any device.",
      icon: "🛍️"
    },
    inventory: {
      title: "Real-Time Inventory Control",
      desc: "Advanced tracking systems to monitor stock levels across multiple warehouses. Prevent overselling and automate your supply chain alerts instantly.",
      icon: "📦"
    },
    fulfillment: {
      title: "Retailer & Vendor Fulfillment",
      desc: "Streamlined dashboards for multi-vendor management. Efficient routing, order processing, and automated fulfillment workflows for your retail partners.",
      icon: "🚚"
    }
  };

  return (
    <main className="min-h-screen pt-40 pb-20 bg-[#050812] text-slate-300 relative overflow-hidden">
      
      {/* 🌌 Premium Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/10 blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* 🔥 Hero Section */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <span className="text-emerald-400 font-bold tracking-widest uppercase text-xs mb-4 block animate-pulse">
            E-Commerce Solutions
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight leading-tight">
            Scale Your <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
              Digital Retail Empire
            </span>
          </h1>
          <p className="text-slate-400 text-base md:text-lg leading-relaxed mb-10 max-w-2xl mx-auto font-light">
            End-to-end e-commerce infrastructure. From high-performance web hosting to complex multi-vendor portal development.
          </p>
        </div>

        {/* ⚙️ WORKING INTERACTIVE TABS SECTION */}
        <div className="bg-slate-900/30 border border-slate-800 rounded-3xl p-6 md:p-10 mb-24 max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-white mb-2">Enterprise-Grade Architecture</h2>
            <p className="text-slate-400 text-sm">Click the tabs below to explore our core capabilities.</p>
          </div>
          
          {/* Functional Tab Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {Object.keys(tabContent).map((key) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 ${
                  activeTab === key 
                  ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/50 shadow-[0_0_15px_rgba(16,185,129,0.2)]' 
                  : 'bg-slate-800/50 text-slate-400 border border-slate-700 hover:border-slate-500'
                }`}
              >
                {tabContent[key as keyof typeof tabContent].title}
              </button>
            ))}
          </div>

          {/* Dynamic Tab Content Display */}
          <div className="bg-[#0a0f1e] border border-slate-800 rounded-2xl p-8 min-h-[200px] flex flex-col sm:flex-row items-center gap-8 transition-all duration-500">
            <div className="w-20 h-20 bg-slate-800/50 rounded-2xl flex items-center justify-center text-4xl shadow-inner">
              {tabContent[activeTab as keyof typeof tabContent].icon}
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-3">
                {tabContent[activeTab as keyof typeof tabContent].title}
              </h3>
              <p className="text-slate-400 leading-relaxed max-w-2xl">
                {tabContent[activeTab as keyof typeof tabContent].desc}
              </p>
            </div>
          </div>
        </div>

        {/* 💳 WORKING PRICING TOGGLE SECTION */}
        <div className="text-center mb-20">
          <h2 className="text-3xl font-bold text-white mb-6">E-Commerce Hosting Plans</h2>
          
          {/* Functional Toggle Switch */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <span className={`text-sm font-medium ${!isYearly ? 'text-white' : 'text-slate-500'}`}>Monthly</span>
            <button 
              onClick={() => setIsYearly(!isYearly)}
              className="w-14 h-7 bg-slate-800 rounded-full relative p-1 cursor-pointer transition-colors border border-slate-700"
            >
              <div className={`w-5 h-5 bg-emerald-400 rounded-full shadow-md transition-transform duration-300 ${isYearly ? 'translate-x-7' : 'translate-x-0'}`}></div>
            </button>
            <span className={`text-sm font-medium ${isYearly ? 'text-white' : 'text-slate-500'}`}>
              Annually <span className="text-xs text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded-full ml-1">Save 20%</span>
            </span>
          </div>

          {/* Pricing Cards (Values update based on toggle state) */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto text-left">
            
            {/* Standard Store */}
            <div className="bg-[#0a0f1e] border border-slate-800 rounded-3xl p-8 hover:border-slate-600 transition-colors">
              <h3 className="text-xl font-bold text-white mb-2">Standard Store</h3>
              <p className="text-slate-400 text-sm mb-6">For single-vendor retail shops.</p>
              <div className="mb-6">
                {/* Dynamic Price Calculation */}
                <span className="text-4xl font-black text-white">₹{isYearly ? '1,199' : '1,499'}</span>
                <span className="text-slate-500"> /month</span>
              </div>
              <ul className="space-y-4 mb-8 text-sm text-slate-300">
                <li className="flex items-center gap-3">✓ <span>Optimized for WooCommerce / Shopify</span></li>
                <li className="flex items-center gap-3">✓ <span>Payment Gateway Integration</span></li>
                <li className="flex items-center gap-3">✓ <span>Free SSL & Daily Backups</span></li>
              </ul>
              <button className="w-full py-3 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-lg transition-colors">
                Select Plan
              </button>
            </div>

            {/* Marketplace Pro */}
            <div className="bg-slate-900 border border-emerald-500 rounded-3xl p-8 relative shadow-[0_0_30px_rgba(16,185,129,0.15)]">
              <div className="absolute top-0 right-8 -translate-y-1/2 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white text-xs font-bold px-4 py-1 rounded-full">
                B2B & B2C
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Marketplace Pro</h3>
              <p className="text-slate-400 text-sm mb-6">For multi-vendor & bulk inventory platforms.</p>
              <div className="mb-6">
                {/* Dynamic Price Calculation */}
                <span className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-300">
                  ₹{isYearly ? '3,999' : '4,999'}
                </span>
                <span className="text-slate-500"> /month</span>
              </div>
              <ul className="space-y-4 mb-8 text-sm text-slate-300">
                <li className="flex items-center gap-3 text-emerald-400">✓ <span className="text-slate-300">Dedicated Cloud Resources</span></li>
                <li className="flex items-center gap-3 text-emerald-400">✓ <span className="text-slate-300">Inventory Sync APIs</span></li>
                <li className="flex items-center gap-3 text-emerald-400">✓ <span className="text-slate-300">Advanced Load Balancing</span></li>
              </ul>
              <button className="w-full py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-lg transition-colors shadow-lg shadow-emerald-600/30">
                Select Pro Plan
              </button>
            </div>

          </div>
        </div>

      </div>
    </main>
  );
}