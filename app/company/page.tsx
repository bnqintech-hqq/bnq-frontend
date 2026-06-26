import React from 'react';

export default function CompanyPage() {
  return (
    <main className="min-h-screen pt-40 pb-20 bg-white">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-blue-600 font-bold tracking-widest uppercase text-xs mb-4 block">About BNQinTECH</span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-950 mb-6 leading-tight">
            Engineering the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Digital Future</span>
          </h1>
          <p className="text-slate-600 text-lg leading-relaxed">
            We are India's premier IT infrastructure and software engineering partner. Bridging the gap between complex business challenges and scalable technology solutions.
          </p>
        </div>
      </section>

      {/* Stats/Values Grid */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Scalable Architecture", desc: "Building systems that grow as your business expands." },
              { title: "Business-First", desc: "Technology that serves your goals, not just code." },
              { title: "24/7 Reliability", desc: "Enterprise-grade support and infrastructure uptime." }
            ].map((item, i) => (
              <div key={i} className="p-8 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-bold text-slate-950 mb-3">{item.title}</h3>
                <p className="text-slate-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-slate-950 mb-6">Our Mission</h2>
            <p className="text-slate-600 mb-6 leading-relaxed">
              At BNQinTECH, our mission is to empower startups and established enterprises alike with robust, secure, and innovative IT solutions. We believe in transparency, technical excellence, and long-term partnerships.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Whether it is cloud hosting, custom web applications, or managed BPO services, we ensure that your business operates with the efficiency of a global leader.
            </p>
          </div>
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-10 rounded-3xl text-white">
            <h3 className="text-2xl font-bold mb-4">Why partner with us?</h3>
            <ul className="space-y-4 text-slate-300">
              <li className="flex items-center gap-3">✓ 99.9% Uptime Guarantee</li>
              <li className="flex items-center gap-3">✓ Dedicated Engineering Teams</li>
              <li className="flex items-center gap-3">✓ Customized Scalable Solutions</li>
              <li className="flex items-center gap-3">✓ Global Delivery Standards</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}