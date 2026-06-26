'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function ReferralPartnerPage() {
  // Functional State for Live Income Calculator
  const [referralCount, setReferralCount] = useState(5);
  const commissionPerSale = 1200; // Average commission in INR per successful hosting referral

  // Functional State for FAQ Accordion
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const faqs = [
    {
      q: "Commission kab aur kaise milta hai?",
      a: "Jab aapka referred user continuous 30 days tak active rehta hai, toh aapka commission approve ho jata hai. Har mahine ki 10th date ko paisa seedha aapke Bank Account ya UPI mein transfer ho jata hai."
    },
    {
      q: "Minimum payout limit kya hai?",
      a: "BNQinTECH Referral Program mein minimum payout limit sirf ₹2,000 hai. Jaise hi aapka balance isse upar hota hai, aap isko withdraw kar sakte hain."
    },
    {
      q: "Kya mujhe join karne ke liye koi fees deni hogi?",
      a: "Bilkul nahi! Hamara Referral Program 100% free hai. Aapko bas account create karna hai aur apna unique link share karna shuru karna hai."
    }
  ];

  return (
    <main className="min-h-screen pt-40 pb-20 bg-[#050812] text-slate-300 relative overflow-hidden">
      
      {/* 🌌 Premium Multi-Color Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[450px] bg-emerald-600/10 blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* 🔥 Hero Section */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <span className="text-emerald-400 font-bold tracking-widest uppercase text-xs mb-4 block animate-pulse">
            BNQinTECH Affiliate Program
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-white mb-6 tracking-tight leading-tight">
            Recommend Us. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-blue-500">
              Get Paid Every Time.
            </span>
          </h1>
          <p className="text-slate-400 text-base md:text-lg leading-relaxed mb-10 max-w-2xl mx-auto font-light">
            Share BNQinTECH with your network, audience, or clients. Earn flat cash rewards and recurring lifetime payouts for every single signup. No complex technical setups required.
          </p>

          <div className="flex justify-center">
            <Link href="#calculator" className="px-8 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-lg transition-all duration-300 shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)]">
              Calculate Your Earnings
            </Link>
          </div>
        </div>

        {/* 📊 WORKING LIVE COMMISSION CALCULATOR SECTION */}
        <div id="calculator" className="bg-slate-900/30 border border-slate-800 rounded-3xl p-8 md:p-12 mb-24 max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Estimate Your Revenue</h2>
            <p className="text-slate-400 text-sm">Adjust the selector below to view potential monthly income updates in real-time.</p>
          </div>

          <div className="grid md:grid-cols-12 gap-8 items-center">
            {/* Interactive Control Slider */}
            <div className="md:col-span-7 space-y-6">
              <div className="flex justify-between items-center mb-2">
                <label className="text-sm font-bold text-slate-400 uppercase tracking-wider">Referred Clients / Month</label>
                <span className="text-2xl font-black text-emerald-400 bg-emerald-500/10 px-4 py-1 rounded-xl">{referralCount}</span>
              </div>
              <input
                type="range"
                min="1"
                max="50"
                value={referralCount}
                onChange={(e) => setReferralCount(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-400"
              />
              <div className="flex justify-between text-xs font-mono text-slate-600">
                <span>1 Client</span>
                <span>25 Clients</span>
                <span>50 Clients</span>
              </div>
            </div>

            {/* Dynamic Output Result Box */}
            <div className="md:col-span-5 bg-[#0a0f1e] border border-slate-800 rounded-2xl p-6 text-center shadow-inner relative overflow-hidden">
              <div className="absolute inset-0 bg-emerald-500/5 blur-xl rounded-full pointer-events-none"></div>
              <span className="block text-xs uppercase font-mono tracking-widest text-slate-500 mb-2">Your Estimated Monthly Income</span>
              <h3 className="text-4xl lg:text-5xl font-black text-white mb-2">
                ₹{(referralCount * commissionPerSale).toLocaleString('en-IN')}
              </h3>
              <p className="text-xs text-slate-400">Based on a flat standard rate of ₹{commissionPerSale} per corporate server setup.</p>
            </div>
          </div>
        </div>

        {/* ⚙️ PROCESS FLOW SECTION */}
        <div className="grid md:grid-cols-3 gap-8 mb-24 text-center">
          <div className="p-6">
            <div className="w-12 h-12 bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded-xl flex items-center justify-center text-xl font-bold mx-auto mb-4">1</div>
            <h4 className="text-white font-bold text-lg mb-2">Join Program</h4>
            <p className="text-slate-400 text-sm leading-relaxed">Sign up instantly for free. Get access to your dedicated affiliate dashboard and tracking link.</p>
          </div>
          <div className="p-6">
            <div className="w-12 h-12 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-xl flex items-center justify-center text-xl font-bold mx-auto mb-4">2</div>
            <h4 className="text-white font-bold text-lg mb-2">Share & Promote</h4>
            <p className="text-slate-400 text-sm leading-relaxed">Place our banners on your blog, share links via social media, or recommend us directly to business owners.</p>
          </div>
          <div className="p-6">
            <div className="w-12 h-12 bg-purple-500/10 text-purple-400 border border-purple-500/20 rounded-xl flex items-center justify-center text-xl font-bold mx-auto mb-4">3</div>
            <h4 className="text-white font-bold text-lg mb-2">Earn Cash</h4>
            <p className="text-slate-400 text-sm leading-relaxed">Track every click and conversion inside your app dashboard. Withdraw your funds straight to your bank account.</p>
          </div>
        </div>

        {/* ❓ WORKING INTERACTIVE FAQ ACCORDION */}
        <div className="max-w-3xl mx-auto mb-20">
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = activeFaq === index;
              return (
                <div key={index} className="bg-[#0a0f1e] border border-slate-800 rounded-2xl overflow-hidden transition-colors">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full px-6 py-4 text-left flex justify-between items-center gap-4 text-white font-semibold text-sm md:text-base hover:bg-slate-800/20 transition-colors"
                  >
                    <span>{faq.q}</span>
                    <span className={`text-xl transition-transform duration-300 ${isOpen ? 'rotate-180 text-emerald-400' : 'text-slate-500'}`}>
                      ▾
                    </span>
                  </button>
                  <div className={`transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-40 border-t border-slate-800/60' : 'max-h-0'}`}>
                    <p className="p-6 text-slate-400 text-sm leading-relaxed bg-[#060b16]">
                      {faq.a}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 🚀 Bottom Application CTA */}
        <div className="bg-gradient-to-br from-slate-900 to-black border border-slate-800 rounded-3xl p-10 md:p-16 text-center max-w-4xl mx-auto relative overflow-hidden">
          <h2 className="text-3xl font-bold text-white mb-4">Start Earning Today</h2>
          <p className="text-slate-400 mb-8 max-w-xl mx-auto text-sm md:text-base">
            No limits on payouts. No minimum sales requirements. Create your free affiliate system account and grab your tracking code instantly.
          </p>
          <button className="px-10 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-white font-bold rounded-lg transition-all duration-300 shadow-lg shadow-emerald-900/30">
            Create Free Affiliate Account
          </button>
        </div>

      </div>
    </main>
  );
}