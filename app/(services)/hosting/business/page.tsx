import React from 'react';
import Link from 'next/link';

export default function BusinessHostingPage() {
  return (
    <main className="min-h-screen pt-40 pb-20 bg-[#050812] text-slate-300 relative overflow-hidden">
      
      {/* 🌌 Premium Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/15 blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* 🔥 Hero Section */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <span className="text-blue-400 font-bold tracking-widest uppercase text-xs mb-4 block animate-pulse">
            Enterprise Infrastructure
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight leading-tight">
            High-Performance <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">
              Business Hosting
            </span>
          </h1>
          <p className="text-slate-400 text-base md:text-lg leading-relaxed mb-10 max-w-2xl mx-auto font-light">
            Built for high-traffic corporate websites and mission-critical applications. Experience lightning-fast NVMe storage, dedicated resources, and military-grade security.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="#plans" className="px-8 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-lg transition-all duration-300 shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)]">
              View Hosting Plans
            </Link>
            <Link href="/company/contact" className="px-8 py-3.5 bg-transparent border border-slate-700 hover:border-slate-500 text-slate-300 hover:text-white font-bold rounded-lg transition-all duration-300">
              Talk to an Expert
            </Link>
          </div>
        </div>

        {/* ✨ Enterprise Features Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-24">
          <div className="bg-slate-900/40 border border-slate-800/60 p-8 rounded-2xl hover:border-blue-500/30 transition-colors group">
            <div className="w-12 h-12 bg-blue-500/10 flex items-center justify-center rounded-xl mb-6 text-2xl group-hover:scale-110 transition-transform">🚀</div>
            <h3 className="text-xl font-bold text-white mb-3">NVMe SSD Storage</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Get up to 10x faster load times. Our business servers are exclusively powered by cutting-edge NVMe drives for maximum speed.
            </p>
          </div>

          <div className="bg-slate-900/40 border border-slate-800/60 p-8 rounded-2xl hover:border-cyan-500/30 transition-colors group">
            <div className="w-12 h-12 bg-cyan-500/10 flex items-center justify-center rounded-xl mb-6 text-2xl group-hover:scale-110 transition-transform">🔒</div>
            <h3 className="text-xl font-bold text-white mb-3">Free SSL & Security</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Unlimited free SSL certificates, advanced DDoS protection, and Web Application Firewall (WAF) to keep your business safe.
            </p>
          </div>

          <div className="bg-slate-900/40 border border-slate-800/60 p-8 rounded-2xl hover:border-emerald-500/30 transition-colors group">
            <div className="w-12 h-12 bg-emerald-500/10 flex items-center justify-center rounded-xl mb-6 text-2xl group-hover:scale-110 transition-transform">🔄</div>
            <h3 className="text-xl font-bold text-white mb-3">Automated Daily Backups</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Never lose your corporate data. We automatically back up your files, emails, and databases daily with 1-click restore options.
            </p>
          </div>
        </div>

        {/* 💳 Pricing Plans Section */}
        <div id="plans" className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Choose Your Business Plan</h2>
          <p className="text-slate-400 mb-12">Scalable resources that grow with your company.</p>
          
          <div className="grid md:grid-cols-3 gap-8 text-left max-w-6xl mx-auto">
            
            {/* Plan 1 */}
            <div className="bg-[#0a0f1e] border border-slate-800 rounded-3xl p-8 hover:border-slate-600 transition-colors">
              <h3 className="text-xl font-bold text-white mb-2">Corporate Starter</h3>
              <p className="text-slate-400 text-sm mb-6">Perfect for small businesses.</p>
              <div className="mb-6">
                <span className="text-4xl font-black text-white">₹499</span>
                <span className="text-slate-500"> /month</span>
              </div>
              <ul className="space-y-4 mb-8 text-sm text-slate-300">
                <li className="flex items-center gap-3">✓ <span className="text-slate-400">Host up to 5 Websites</span></li>
                <li className="flex items-center gap-3">✓ <span className="text-slate-400">100 GB NVMe Storage</span></li>
                <li className="flex items-center gap-3">✓ <span className="text-slate-400">Free Business Email</span></li>
                <li className="flex items-center gap-3">✓ <span className="text-slate-400">Standard Support</span></li>
              </ul>
              <button className="w-full py-3 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-lg transition-colors">
                Select Plan
              </button>
            </div>

            {/* Plan 2 - Highlighted */}
            <div className="bg-slate-900 border border-blue-500 rounded-3xl p-8 relative transform md:-translate-y-4 shadow-2xl shadow-blue-900/20">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-xs font-bold px-4 py-1 rounded-full">
                MOST POPULAR
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Business Pro</h3>
              <p className="text-slate-400 text-sm mb-6">For growing enterprises & agencies.</p>
              <div className="mb-6">
                <span className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">₹999</span>
                <span className="text-slate-500"> /month</span>
              </div>
              <ul className="space-y-4 mb-8 text-sm text-slate-300">
                <li className="flex items-center gap-3 text-blue-400">✓ <span className="text-slate-300">Host Unlimited Websites</span></li>
                <li className="flex items-center gap-3 text-blue-400">✓ <span className="text-slate-300">Unmetered NVMe Storage</span></li>
                <li className="flex items-center gap-3 text-blue-400">✓ <span className="text-slate-300">Daily Cloud Backups</span></li>
                <li className="flex items-center gap-3 text-blue-400">✓ <span className="text-slate-300">Free Dedicated IP</span></li>
                <li className="flex items-center gap-3 text-blue-400">✓ <span className="text-slate-300">24/7 Priority Support</span></li>
              </ul>
              <button className="w-full py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-lg transition-colors shadow-lg shadow-blue-600/30">
                Select Pro Plan
              </button>
            </div>

            {/* Plan 3 */}
            <div className="bg-[#0a0f1e] border border-slate-800 rounded-3xl p-8 hover:border-slate-600 transition-colors">
              <h3 className="text-xl font-bold text-white mb-2">Cloud Enterprise</h3>
              <p className="text-slate-400 text-sm mb-6">Custom resources for high traffic.</p>
              <div className="mb-6">
                <span className="text-4xl font-black text-white">₹2,499</span>
                <span className="text-slate-500"> /month</span>
              </div>
              <ul className="space-y-4 mb-8 text-sm text-slate-300">
                <li className="flex items-center gap-3">✓ <span className="text-slate-400">Dedicated Cloud Resources</span></li>
                <li className="flex items-center gap-3">✓ <span className="text-slate-400">Advanced WAF Security</span></li>
                <li className="flex items-center gap-3">✓ <span className="text-slate-400">Object Cache (Redis/Memcached)</span></li>
                <li className="flex items-center gap-3">✓ <span className="text-slate-400">Direct Account Manager</span></li>
              </ul>
              <button className="w-full py-3 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-lg transition-colors">
                Select Enterprise
              </button>
            </div>

          </div>
        </div>

      </div>
    </main>
  );
}