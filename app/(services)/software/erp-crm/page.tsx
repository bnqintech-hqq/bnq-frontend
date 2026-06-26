"use client";

import React from "react";
import Link from "next/link";

export default function GenericServicePage() {
  // Is variable ko page ke hisaab se change kar lein (e.g., "API Development", "Disaster Recovery")
  const serviceName = "Enterprise Solutions"; 

  return (
    <main className="min-h-screen bg-slate-50 pt-24 pb-16 font-sans">
      
      {/* Hero Section */}
      <section className="bg-slate-900 py-24 text-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 font-bold uppercase tracking-wider text-xs mb-6">
            Custom Requirements
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
            Custom <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">{serviceName}</span> Tailored to Your Business
          </h1>
          <p className="text-lg text-slate-300 mb-8 leading-relaxed">
            Every business is unique, and so are their technological needs. We provide bespoke, scalable, and secure {serviceName.toLowerCase()} designed strictly around your operational goals.
          </p>
        </div>
      </section>

      {/* Content & Lead Form Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-10">
        <div className="bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden flex flex-col lg:flex-row">
          
          {/* Left Side: Value Props */}
          <div className="lg:w-1/2 p-8 lg:p-12 bg-slate-50 border-r border-slate-100">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Why Choose BNQinTECH?</h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center shrink-0">🛠️</div>
                <div>
                  <h4 className="font-bold text-slate-900">Custom Engineering</h4>
                  <p className="text-sm text-slate-600 mt-1">We don't use cookie-cutter templates. Everything is architected from the ground up.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center shrink-0">🔒</div>
                <div>
                  <h4 className="font-bold text-slate-900">Bank-Grade Security</h4>
                  <p className="text-sm text-slate-600 mt-1">Compliant with industry standards, ensuring your data is protected at all times.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center shrink-0">📈</div>
                <div>
                  <h4 className="font-bold text-slate-900">Scalable Infrastructure</h4>
                  <p className="text-sm text-slate-600 mt-1">Built to handle sudden spikes in traffic and continuous business growth.</p>
                </div>
              </div>
            </div>
            
            <div className="mt-10 pt-8 border-t border-slate-200">
              <p className="text-sm font-bold text-slate-900 mb-2">Prefer to talk directly?</p>
              <a href="tel:+919271360782" className="text-blue-600 font-extrabold hover:underline flex items-center gap-2">
                📞 +91 92 7136 0782
              </a>
            </div>
          </div>

          {/* Right Side: Contact / Quote Form */}
          <div className="lg:w-1/2 p-8 lg:p-12">
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Request a Custom Quote</h3>
            <p className="text-sm text-slate-500 mb-8">Fill out the form below, and our technical consultants will get back to you within 24 hours.</p>
            
            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Full Name</label>
                  <input type="text" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Company Email</label>
                  <input type="email" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" placeholder="john@company.com" />
                </div>
              </div>
              
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Phone Number</label>
                <input type="tel" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" placeholder="+91 00000 00000" />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Project Requirements</label>
                <textarea rows={4} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 resize-none" placeholder="Briefly describe what you're looking for..."></textarea>
              </div>

              <button type="submit" className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-colors mt-2">
                Submit Request
              </button>
              <p className="text-center text-xs text-slate-400 mt-4">We respect your privacy. No spam, ever.</p>
            </form>
          </div>

        </div>
      </section>

    </main>
  );
}