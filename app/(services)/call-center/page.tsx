import React from "react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "BPO & Call Center Services | BNQinTECH",
  description: "Enterprise-grade inbound and outbound call center solutions. 24/7 technical support, lead generation, and omnichannel customer service.",
};

interface ServiceOption {
  title: string;
  description: string;
  icon: React.ReactNode;
  tags: string[];
}

interface StatItem {
  value: string;
  label: string;
}

export default function CallCenterPage() {
  const services: ServiceOption[] = [
    {
      title: "Inbound Customer Support",
      description: "Provide 24/7 omnichannel support to your customers. We handle queries, complaints, and billing issues with empathy and efficiency.",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      tags: ["Help Desk", "Order Tracking", "Billing Queries"],
    },
    {
      title: "Outbound Lead Generation",
      description: "Scale your sales pipeline with our trained B2B and B2C telemarketing experts. We qualify leads so your sales team can focus on closing.",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      tags: ["Cold Calling", "Appointment Setting", "Market Research"],
    },
    {
      title: "Technical L1/L2 Support",
      description: "Dedicated IT helpdesk to resolve software issues, server troubleshooting, and product onboarding for your global user base.",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      tags: ["IT Helpdesk", "Software Support", "Troubleshooting"],
    },
    {
      title: "Data Entry & Back Office",
      description: "Secure and accurate data processing, CRM management, and administrative support to keep your core business operations lean.",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      tags: ["Data Processing", "Virtual Assistants", "CRM Updating"],
    },
  ];

  const stats: StatItem[] = [
    { value: "< 30s", label: "Average Answer Time" },
    { value: "99.9%", label: "Uptime Guarantee" },
    { value: "24/7/365", label: "Operational Hours" },
    { value: "ISO 27001", label: "Certified Security" },
  ];

  return (
    <main className="min-h-screen bg-slate-50 pt-40 pb-16 font-sans overflow-hidden">
      
      {/* Inline Custom CSS for Marquee and Equalizer */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes scrollText {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          width: 200%;
          animation: scrollText 20s linear infinite;
        }
        @keyframes bounce-eq {
          0%, 100% { transform: scaleY(0.3); }
          50% { transform: scaleY(1); }
        }
        .eq-bar {
          transform-origin: bottom;
          animation: bounce-eq 1.5s ease-in-out infinite;
        }
      `}} />

      {/* Hero Section */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 overflow-hidden rounded-bl-[4rem] rounded-tr-[4rem] bg-slate-950 text-white mb-12 shadow-[0_20px_50px_-15px_rgba(37,99,235,0.3)]">
        {/* Abstract Dynamic Background */}
        <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none overflow-hidden">
          <div className="w-[800px] h-[800px] border border-blue-500/30 rounded-full animate-[spin_40s_linear_infinite]"></div>
          <div className="absolute w-[600px] h-[600px] border border-indigo-500/30 rounded-full animate-[spin_30s_linear_infinite_reverse]"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-blue-600/40 to-purple-600/40 blur-[120px] rounded-full"></div>
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-900/50 border border-blue-500/50 text-blue-300 font-bold uppercase tracking-widest text-xs mb-8 backdrop-blur-sm shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:scale-105 transition-transform cursor-default">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            Live 24/7 Global Operations
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight">
            Elevate Your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-400">
              Customer Experience
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-300 mb-10 leading-relaxed font-light">
            From technical helpdesks to high-converting outbound sales, we provide the human touch powered by enterprise-grade AI and technology.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold rounded-xl transition-all shadow-[0_0_30px_rgba(79,70,229,0.4)] hover:shadow-[0_0_40px_rgba(79,70,229,0.6)] hover:-translate-y-1 text-center text-lg">
              Discuss Your Requirements
            </Link>
          </div>
        </div>
      </section>

      {/* MOVING TEXT MARQUEE SECTION */}
      <div className="w-full bg-blue-600 text-white py-3 overflow-hidden mb-20 shadow-md">
        <div className="animate-marquee whitespace-nowrap flex items-center font-bold tracking-widest uppercase text-sm">
          <span className="mx-8">• ISO 27001 Certified</span>
          <span className="mx-8">• Multilingual Support (20+ Languages)</span>
          <span className="mx-8">• Zero Downtime Guarantee</span>
          <span className="mx-8">• AI-Powered Analytics</span>
          <span className="mx-8">• ISO 27001 Certified</span>
          <span className="mx-8">• Multilingual Support (20+ Languages)</span>
          <span className="mx-8">• Zero Downtime Guarantee</span>
          <span className="mx-8">• AI-Powered Analytics</span>
        </div>
      </div>

      {/* Metrics Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="bg-white border border-slate-200 rounded-2xl p-8 text-center hover:border-blue-400 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
              <div className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-slate-900 to-slate-700 mb-3 group-hover:from-blue-600 group-hover:to-indigo-600 transition-colors">
                {stat.value}
              </div>
              <div className="text-xs md:text-sm font-bold text-slate-500 uppercase tracking-widest">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Core Services Grid */}
      <section className="bg-white border-y border-slate-200 py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">Comprehensive BPO Solutions</h2>
            <p className="text-slate-600 text-xl font-light">We don't just answer calls; we act as an extension of your brand. We hire, train, and manage dedicated teams tailored to your specific business needs.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {services.map((service, idx) => (
              <div key={idx} className="relative bg-slate-50 p-8 lg:p-10 rounded-[2rem] border border-slate-200 shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] hover:border-blue-300 hover:bg-white transition-all duration-500 group overflow-hidden hover:-translate-y-2">
                
                {/* Background Hover Glow */}
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-blue-400/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="w-16 h-16 bg-white border border-slate-200 text-blue-600 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 group-hover:rotate-6 group-hover:scale-110 transition-all duration-500 shadow-md relative z-10">
                  {service.icon}
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 tracking-tight relative z-10">{service.title}</h3>
                
                <p className="text-slate-600 text-lg font-light leading-relaxed mb-8 relative z-10">
                  {service.description}
                </p>
                
                <div className="flex flex-wrap gap-2 relative z-10">
                  {service.tags.map((tag, tagIdx) => (
                    <span key={tagIdx} className="px-4 py-1.5 bg-slate-200/50 text-slate-700 text-xs font-bold uppercase tracking-widest rounded-full group-hover:bg-blue-50 group-hover:text-blue-700 transition-colors">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

     {/* Omnichannel Tech Section with LIVE ANIMATION (Based on Screenshot) */}
      <section className="bg-slate-50 py-24 relative overflow-hidden">
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* Left Side: Text & List */}
            <div>
              <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight text-slate-900">
                Omnichannel Technology<br />Stack
              </h2>
              <p className="text-slate-500 text-lg mb-10 font-light leading-relaxed max-w-lg">
                We utilize state-of-the-art contact center software with real-time CRM integrations to ensure a seamless experience across all touchpoints. No dropped tickets, no lost context.
              </p>
              
              <ul className="space-y-4 max-w-lg">
                {[
                  "Voice (VoIP & Cloud Telephony)",
                  "Live Chat & AI Chatbot Integration",
                  "Automated Email Ticketing System",
                  "Real-Time Social Media Monitoring"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center text-slate-200 text-sm md:text-base font-medium bg-[#374151] p-4 rounded-xl border border-slate-700 shadow-sm hover:bg-slate-800 transition-colors cursor-default">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-4 shadow-[0_0_8px_rgba(59,130,246,0.8)]"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Right Side: Dashboard Graphic */}
            <div className="relative h-[380px] md:h-[420px] w-full bg-[#0a0f1c] rounded-3xl shadow-2xl flex flex-col justify-end p-5 md:p-8 border border-slate-800 group">
               
               {/* Animated Equalizer Bars */}
               <div className="absolute inset-x-8 top-12 bottom-36 flex justify-between items-end gap-2 md:gap-4 opacity-90">
                 {/* Array representing the bar heights similar to the screenshot */}
                 {[40, 60, 30, 90, 45, 75, 35, 100, 50, 80, 25, 65, 45, 95, 60].map((height, i) => (
                   <div 
                     key={i} 
                     className="eq-bar w-full bg-gradient-to-t from-indigo-600 via-blue-500 to-cyan-400 rounded-t-sm md:rounded-t-md"
                     style={{ 
                       height: `${height}%`, 
                       animationDelay: `${Math.random() * 1.5}s`,
                       animationDuration: `${1 + Math.random() * 0.5}s`
                     }}
                   ></div>
                 ))}
               </div>

               {/* Inner Floating Stats Box */}
               <div className="relative w-full bg-[#050812] border border-slate-800/80 rounded-2xl p-5 md:p-6 flex justify-between items-center z-10 shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
                 
                 {/* Left Stat */}
                 <div>
                   <div className="text-slate-500 text-[10px] md:text-xs font-bold uppercase tracking-widest mb-1.5">
                     Live Operations
                   </div>
                   <div className="text-xl md:text-2xl font-extrabold text-white flex items-center gap-2.5">
                     <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full shadow-[0_0_10px_rgba(16,185,129,0.8)] relative">
                       <span className="animate-ping absolute inset-0 rounded-full bg-emerald-400 opacity-75"></span>
                     </span>
                     124 Active Agents
                   </div>
                 </div>
                 
                 {/* Right Stat */}
                 <div className="text-right">
                   <div className="text-slate-500 text-[10px] md:text-xs font-bold uppercase tracking-widest mb-1.5">
                     Service Level
                   </div>
                   <div className="text-2xl md:text-4xl font-extrabold text-[#38bdf8]">
                     99.8%
                   </div>
                 </div>

               </div>

            </div>
          </div>
        </div>
      </section>
    </main>
  );
}