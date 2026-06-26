import React from 'react';
import Link from 'next/link';

export default function GPUServersPage() {
  return (
    <main className="min-h-screen pt-40 pb-20 bg-[#050812] text-slate-300 relative overflow-hidden">
      
      {/* 🌌 AI/Compute Background Glow (Slightly Purple/Cyan for GPU Vibe) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-indigo-600/15 blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* 🔥 Hero Section */}
        <div className="text-center max-w-4xl mx-auto mb-24">
          <span className="text-indigo-400 font-bold tracking-widest uppercase text-xs mb-4 block animate-pulse">
            High-Performance Compute
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-white mb-6 tracking-tight leading-tight">
            Next-Gen <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400">GPU Servers</span>
          </h1>
          <p className="text-slate-400 text-base md:text-lg leading-relaxed mb-10 max-w-2xl mx-auto font-light">
            Accelerate your AI models, deep learning projects, and 3D rendering with BNQinTECH's dedicated GPU infrastructure. Powered by enterprise-grade NVIDIA architecture.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/quotation?service=gpu-servers" className="px-8 py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-lg transition-all duration-300 shadow-[0_0_20px_rgba(79,70,229,0.3)] hover:shadow-[0_0_30px_rgba(79,70,229,0.5)]">
              Deploy Custom GPU
            </Link>
            <Link href="#use-cases" className="px-8 py-3.5 bg-transparent border border-slate-700 hover:border-slate-500 text-slate-300 hover:text-white font-bold rounded-lg transition-all duration-300">
              View Specs
            </Link>
          </div>
        </div>

        {/* 🎯 Use Cases / Target Audience */}
        <div id="use-cases" className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-24">
          <div className="bg-slate-900/40 border border-slate-800/60 p-8 rounded-2xl hover:border-purple-500/30 transition-colors group">
            <div className="w-12 h-12 bg-purple-500/10 flex items-center justify-center rounded-xl mb-6 text-2xl group-hover:scale-110 transition-transform">🧠</div>
            <h3 className="text-xl font-bold text-white mb-3">AI & Deep Learning</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Train complex neural networks and run LLMs faster with massive parallel processing power and high VRAM bandwidth.
            </p>
          </div>

          <div className="bg-slate-900/40 border border-slate-800/60 p-8 rounded-2xl hover:border-cyan-500/30 transition-colors group">
            <div className="w-12 h-12 bg-cyan-500/10 flex items-center justify-center rounded-xl mb-6 text-2xl group-hover:scale-110 transition-transform">🎬</div>
            <h3 className="text-xl font-bold text-white mb-3">3D & Video Rendering</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Slash rendering times for VFX, animations, and high-resolution video production using dedicated CUDA cores.
            </p>
          </div>

          <div className="bg-slate-900/40 border border-slate-800/60 p-8 rounded-2xl hover:border-emerald-500/30 transition-colors group">
            <div className="w-12 h-12 bg-emerald-500/10 flex items-center justify-center rounded-xl mb-6 text-2xl group-hover:scale-110 transition-transform">📊</div>
            <h3 className="text-xl font-bold text-white mb-3">Big Data Processing</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Analyze massive datasets in real-time. GPU-accelerated databases handle millions of queries significantly faster than CPUs.
            </p>
          </div>
        </div>

        {/* 💻 Top GPU Hardware Models */}
        <div className="bg-[#0a0e1a] border border-slate-800/80 rounded-3xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Enterprise GPU Configurations</h2>
            <p className="text-slate-400">Available instantly in our state-of-the-art data centers.</p>
          </div>

          <div className="space-y-6">
            {/* GPU Card 1 */}
            <div className="flex flex-col lg:flex-row items-center justify-between p-6 bg-slate-900/50 border border-slate-800 rounded-2xl hover:bg-slate-800/50 transition-colors">
              <div className="flex-1 mb-4 lg:mb-0">
                <div className="flex items-center gap-3 mb-2">
                  <span className="px-3 py-1 bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-bold rounded-full">NVIDIA</span>
                  <h3 className="text-2xl font-black text-white">Tesla A100</h3>
                </div>
                <p className="text-slate-400 text-sm">The ultimate engine for AI, Data Analytics, and HPC.</p>
              </div>
              <div className="flex-1 flex justify-center gap-8 mb-4 lg:mb-0 border-y lg:border-y-0 lg:border-x border-slate-800 py-4 lg:py-0 px-6">
                <div>
                  <span className="block text-slate-500 text-xs font-bold uppercase mb-1">VRAM</span>
                  <span className="text-white font-medium">80GB HBM2e</span>
                </div>
                <div>
                  <span className="block text-slate-500 text-xs font-bold uppercase mb-1">Cores</span>
                  <span className="text-white font-medium">6912 CUDA</span>
                </div>
              </div>
              <div className="flex-1 flex lg:justify-end w-full lg:w-auto">
                <Link href="/quotation?service=gpu-servers" className="w-full lg:w-auto px-6 py-2.5 bg-slate-800 hover:bg-indigo-600 text-white font-medium rounded-lg transition-colors text-center">
                  Request Quote
                </Link>
              </div>
            </div>

            {/* GPU Card 2 */}
            <div className="flex flex-col lg:flex-row items-center justify-between p-6 bg-slate-900/50 border border-slate-800 rounded-2xl hover:bg-slate-800/50 transition-colors">
              <div className="flex-1 mb-4 lg:mb-0">
                <div className="flex items-center gap-3 mb-2">
                  <span className="px-3 py-1 bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-bold rounded-full">NVIDIA</span>
                  <h3 className="text-2xl font-black text-white">RTX 4090</h3>
                </div>
                <p className="text-slate-400 text-sm">Extreme performance for 3D Rendering and heavy workflows.</p>
              </div>
              <div className="flex-1 flex justify-center gap-8 mb-4 lg:mb-0 border-y lg:border-y-0 lg:border-x border-slate-800 py-4 lg:py-0 px-6">
                <div>
                  <span className="block text-slate-500 text-xs font-bold uppercase mb-1">VRAM</span>
                  <span className="text-white font-medium">24GB GDDR6X</span>
                </div>
                <div>
                  <span className="block text-slate-500 text-xs font-bold uppercase mb-1">Cores</span>
                  <span className="text-white font-medium">16384 CUDA</span>
                </div>
              </div>
              <div className="flex-1 flex lg:justify-end w-full lg:w-auto">
                <Link href="/quotation?service=gpu-servers" className="w-full lg:w-auto px-6 py-2.5 bg-slate-800 hover:bg-indigo-600 text-white font-medium rounded-lg transition-colors text-center">
                  Request Quote
                </Link>
              </div>
            </div>

          </div>
        </div>

      </div>
    </main>
  );
}
