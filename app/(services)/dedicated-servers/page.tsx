import React from "react";
import Link from "next/link";

export default function DedicatedServersPage() {
  const pricingPlans = [
    { name: "Bare Metal Start", price: "₹8,999", processor: "Intel Xeon E-2276G", cores: "6 Cores / 12 Threads", ram: "32 GB DDR4", storage: "2x 512 GB NVMe (RAID 1)" },
    { name: "Bare Metal Pro", price: "₹14,999", processor: "AMD Ryzen 9 5900X", cores: "12 Cores / 24 Threads", ram: "64 GB DDR4", storage: "2x 1 TB NVMe (RAID 1)", popular: true },
    { name: "Enterprise Max", price: "₹24,999", processor: "AMD EPYC 7313P", cores: "16 Cores / 32 Threads", ram: "128 GB ECC DDR4", storage: "4x 1 TB NVMe (RAID 10)" },
  ];

  return (
    <main className="min-h-screen bg-slate-950 pt-30 pb-16 font-sans text-slate-300">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 py-16">
        <div className="text-center max-w-3xl mx-auto">
          <div className="text-emerald-400 font-bold uppercase tracking-wider text-sm mb-4">Ultimate Performance</div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Bare Metal</span> Dedicated Servers
          </h1>
          <p className="text-lg text-slate-400 mb-8 leading-relaxed">
            No virtualization. No shared resources. 100% pure computing power dedicated entirely to your high-traffic applications, databases, and enterprise workloads.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, idx) => (
            <div key={idx} className={`bg-slate-900 rounded-3xl p-8 border ${plan.popular ? 'border-emerald-500 shadow-2xl shadow-emerald-500/10' : 'border-slate-800'}`}>
              {plan.popular && <span className="bg-emerald-500 text-slate-900 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4 inline-block">Best Seller</span>}
              <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
              <div className="text-4xl font-extrabold text-white mb-6">{plan.price}<span className="text-base text-slate-500 font-medium">/mo</span></div>
              
              <div className="space-y-4 mb-8 text-sm">
                <div className="flex justify-between border-b border-slate-800 pb-2">
                  <span className="text-slate-500">Processor</span>
                  <span className="font-bold text-white text-right">{plan.processor}</span>
                </div>
                <div className="flex justify-between border-b border-slate-800 pb-2">
                  <span className="text-slate-500">Cores</span>
                  <span className="font-bold text-white">{plan.cores}</span>
                </div>
                <div className="flex justify-between border-b border-slate-800 pb-2">
                  <span className="text-slate-500">RAM</span>
                  <span className="font-bold text-white">{plan.ram}</span>
                </div>
                <div className="flex justify-between border-b border-slate-800 pb-2">
                  <span className="text-slate-500">Storage</span>
                  <span className="font-bold text-white text-right">{plan.storage}</span>
                </div>
              </div>
              <button className={`w-full py-4 rounded-xl font-bold transition-all ${plan.popular ? 'bg-emerald-500 text-slate-900 hover:bg-emerald-400' : 'bg-slate-800 text-white hover:bg-slate-700'}`}>
                Configure Server
              </button>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}