'use client';

import React, { useState } from 'react';
import Link from 'next/link';

type FeatureKey = 'speed' | 'security' | 'tools';

interface PricingPlan {
  name: string;
  monthly: number;
  yearly: number;
  description: string;
  isPopular?: boolean;
  features: string[];
}

const pricingData: PricingPlan[] = [
  {
    name: 'WP Starter',
    monthly: 249,
    yearly: 199,
    description: 'Ideal for personal blogs & portfolios.',
    features: ['1 WordPress Site', '30 GB NVMe Storage', 'Free SSL & Migrations'],
  },
  {
    name: 'WP Pro',
    monthly: 499,
    yearly: 399,
    description: 'For businesses that need speed.',
    isPopular: true,
    features: ['Up to 5 WordPress Sites', '100 GB NVMe Storage', 'Daily Automated Backups', 'Object Cache (Redis)'],
  },
  {
    name: 'WP Agency',
    monthly: 1199,
    yearly: 899,
    description: 'For developers handling multiple clients.',
    features: ['Unlimited WordPress Sites', 'Unmetered NVMe Storage', 'Dedicated IP Address'],
  },
];

const featureContent = {
  speed: {
    title: 'LiteSpeed & LSCache',
    desc: 'Our WordPress servers are powered by LiteSpeed Web Server and LSCache plugin, delivering up to 10x faster load times compared to traditional Apache servers.',
    icon: '⚡',
    color: 'text-blue-400',
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/50',
  },
  security: {
    title: 'Proactive Security (WAF)',
    desc: 'Built-in Web Application Firewall, Imunify360 malware scanning, and free SSL certificates keep your WordPress site protected against brute-force attacks.',
    icon: '🛡️',
    color: 'text-emerald-400',
    bg: 'bg-emerald-500/10',
    border: 'border-emerald-500/50',
  },
  tools: {
    title: '1-Click Staging & WP-CLI',
    desc: 'Test changes safely with our 1-click staging environment. Advanced developers get full WP-CLI access to manage WordPress directly from the terminal.',
    icon: '🛠️',
    color: 'text-purple-400',
    bg: 'bg-purple-500/10',
    border: 'border-purple-500/50',
  },
} satisfies Record<FeatureKey, {
  title: string;
  desc: string;
  icon: string;
  color: string;
  bg: string;
  border: string;
}>;

export default function WordPressHostingPage() {
  const [isYearly, setIsYearly] = useState(true);
  const [activeFeature, setActiveFeature] = useState<FeatureKey>('speed');
  const activeContent = featureContent[activeFeature];

  return (
    <main className="min-h-screen pt-40 pb-20 bg-[#050812] text-slate-300 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/15 blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <span className="text-blue-400 font-bold tracking-widest uppercase text-xs mb-4 block animate-pulse">
            Optimized CMS Environment
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-white mb-6 tracking-tight leading-tight">
            Managed <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">WordPress</span> Hosting
          </h1>
          <p className="text-slate-400 text-base md:text-lg leading-relaxed mb-10 max-w-2xl mx-auto font-light">
            Focus on creating amazing content while we handle the updates, security, and performance. Pre-configured for maximum speed with zero technical headaches.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="#pricing" className="px-8 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-lg transition-all duration-300 shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)]">
              View Plans
            </Link>
          </div>
        </div>

        <div className="mb-24">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-white mb-4">Why our WordPress Hosting?</h2>
            <p className="text-slate-400 text-sm">Click the features below to see what is under the hood.</p>
          </div>

          <div className="grid md:grid-cols-12 gap-8 max-w-5xl mx-auto bg-slate-900/30 border border-slate-800 rounded-3xl p-6 md:p-10">
            <div className="md:col-span-5 flex flex-col gap-3">
              {(Object.keys(featureContent) as FeatureKey[]).map((key) => {
                const feature = featureContent[key];
                const isActive = activeFeature === key;

                return (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setActiveFeature(key)}
                    className={`text-left px-6 py-4 rounded-xl transition-all duration-300 ${
                      isActive ? `${feature.bg} ${feature.border} border` : 'bg-transparent border border-transparent hover:bg-slate-800/50'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-2xl">{feature.icon}</span>
                      <span className={`font-bold ${isActive ? 'text-white' : 'text-slate-400'}`}>
                        {feature.title}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="md:col-span-7 bg-[#0a0f1e] border border-slate-800 rounded-2xl p-8 flex items-center shadow-inner min-h-[220px]">
              <div>
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-4 ${activeContent.bg} ${activeContent.color}`}>
                  Core Feature
                </span>
                <h3 className="text-2xl font-bold text-white mb-4">{activeContent.title}</h3>
                <p className="text-slate-400 leading-relaxed">{activeContent.desc}</p>
              </div>
            </div>
          </div>
        </div>

        <div id="pricing" className="text-center mb-10">
          <h2 className="text-3xl font-bold text-white mb-6">Simple, Transparent Pricing</h2>

          <div className="flex items-center justify-center gap-4 mb-12">
            <span className={`text-sm font-medium transition-colors ${!isYearly ? 'text-white' : 'text-slate-500'}`}>
              Monthly
            </span>
            <button
              type="button"
              onClick={() => setIsYearly(!isYearly)}
              className="w-14 h-7 bg-slate-800 rounded-full relative p-1 cursor-pointer transition-colors border border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Toggle pricing plan"
            >
              <div className={`w-5 h-5 bg-blue-500 rounded-full shadow-md transition-transform duration-300 ${isYearly ? 'translate-x-7' : 'translate-x-0'}`}></div>
            </button>
            <span className={`text-sm font-medium transition-colors ${isYearly ? 'text-white' : 'text-slate-500'}`}>
              Annually <span className="text-xs text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded-full ml-1 border border-blue-500/20">Save 30%</span>
            </span>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-left max-w-6xl mx-auto">
            {pricingData.map((plan, idx) => {
              const amount = isYearly ? plan.yearly : plan.monthly;

              return (
                <div
                  key={idx}
                  className={`bg-[#0a0f1e] border ${
                    plan.isPopular
                      ? 'border-blue-500 shadow-2xl shadow-blue-900/20 md:-translate-y-4'
                      : 'border-slate-800 hover:border-slate-700'
                  } rounded-3xl p-8 transition-all duration-300 relative flex flex-col`}
                >
                  {plan.isPopular && (
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-xs font-bold px-4 py-1 rounded-full shadow-lg">
                      BEST VALUE
                    </div>
                  )}

                  <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-slate-400 text-sm mb-6">{plan.description}</p>

                  <div className="mb-6 flex items-end gap-1">
                    <span className={`text-4xl font-black ${plan.isPopular ? 'text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300' : 'text-white'}`}>
                      ₹{amount.toLocaleString('en-IN')}
                    </span>
                    <span className="text-slate-500 mb-1">/mo</span>
                  </div>

                  <Link
                    href="/company/contact"
                    className={`mb-8 block w-full rounded-lg px-5 py-3 text-center text-sm font-bold text-white transition-colors ${
                      plan.isPopular ? 'bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-600/30' : 'bg-slate-800 hover:bg-slate-700'
                    }`}
                  >
                    Inquire About {plan.name}
                  </Link>

                  <ul className="space-y-4 text-sm text-slate-300 flex-grow">
                    {plan.features.map((feature, fIdx) => (
                      <li key={fIdx} className={`flex items-start gap-3 ${plan.isPopular ? 'text-blue-400' : ''}`}>
                        <svg className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span className={plan.isPopular ? 'text-slate-300' : 'text-slate-400'}>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
}
