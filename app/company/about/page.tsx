'use client';

import React, { useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

// Register GSAP ScrollTrigger
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function AboutUsPage() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // 1. Hero Section Animations (Text Reveal)
    const tl = gsap.timeline();
    tl.from(".hero-pill", { y: 20, opacity: 0, duration: 0.8, ease: "power3.out", delay: 0.2 })
      .from(".hero-title-line", { y: 100, opacity: 0, duration: 1, stagger: 0.15, ease: "power4.out", clipPath: "inset(0% 0% 100% 0%)" }, "-=0.4")
      .from(".hero-desc", { y: 30, opacity: 0, duration: 1, ease: "power3.out" }, "-=0.6");

    // 2. Floating Ambient Shapes
    gsap.to(".ambient-shape-1", { y: -30, x: 20, rotation: 10, duration: 4, repeat: -1, yoyo: true, ease: "sine.inOut" });
    gsap.to(".ambient-shape-2", { y: 40, x: -30, rotation: -15, duration: 5, repeat: -1, yoyo: true, ease: "sine.inOut" });

    // 3. Scroll Triggered Sections (Fade Up)
    const sections = gsap.utils.toArray<HTMLElement>('.scroll-reveal');
    sections.forEach((sec) => {
      gsap.from(sec, {
        scrollTrigger: {
          trigger: sec,
          start: "top 85%",
          toggleActions: "play none none reverse"
        },
        y: 60,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out"
      });
    });

    // 4. Staggered Grid Items (Core Values & Stats)
    const grids = gsap.utils.toArray<HTMLElement>('.stagger-grid');
    grids.forEach((grid) => {
      const items = grid.querySelectorAll('.stagger-item');
      gsap.from(items, {
        scrollTrigger: {
          trigger: grid,
          start: "top 80%",
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "back.out(1.7)"
      });
    });

    // 5. Parallax Image/Graphic
    gsap.to(".parallax-bg", {
      scrollTrigger: {
        trigger: ".parallax-container",
        start: "top bottom",
        end: "bottom top",
        scrub: true
      },
      y: 100,
      ease: "none"
    });

  }, { scope: container });

  return (
    <main ref={container} className="min-h-screen bg-white pt-24 pb-16 font-sans overflow-hidden selection:bg-blue-200">
      
      {/* 🚀 1. HERO SECTION (Clean, Honest & Impactful) */}
      <section className="relative bg-slate-950 text-white pt-32 pb-40 rounded-b-[3rem] shadow-2xl z-10">
        <div className="ambient-shape-1 absolute top-10 right-10 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="ambient-shape-2 absolute bottom-[-100px] left-[-100px] w-[600px] h-[600px] bg-indigo-500/20 rounded-full blur-[150px] pointer-events-none"></div>
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 text-center">
          <div className="hero-pill inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-400 font-bold uppercase tracking-widest text-[10px] mb-8 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span>
            Building Tech That Works
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-8 leading-[1.05]">
            <div className="overflow-hidden pb-2"><div className="hero-title-line">Solid software.</div></div>
            <div className="overflow-hidden pb-2">
              <div className="hero-title-line text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-emerald-400">
                Zero corporate fluff.
              </div>
            </div>
          </h1>
          
          <p className="hero-desc text-lg md:text-xl text-slate-400 font-light leading-relaxed max-w-2xl mx-auto">
            We are developers first. We focus on writing clean, scalable code to build reliable digital platforms for startups and growing businesses—without the massive price tags.
          </p>
        </div>
      </section>

      {/* 📊 2. FLOATING STATS GRID (Replaced 0+ with Confidence Metrics) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-20 mb-32">
        <div className="bg-white/90 backdrop-blur-xl rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-slate-100 p-8 md:p-12">
          <div className="stagger-grid grid grid-cols-2 md:grid-cols-4 gap-8 divide-x-0 md:divide-x divide-slate-100">
            {[
              { val: "100%", label: "Client Focus" },
              { val: "Zero", label: "Tech Jargon" },
              { val: "99.9%", label: "Uptime Focus" },
              { val: "24/7", label: "Dedication" }
            ].map((stat, idx) => (
              <div key={idx} className="stagger-item text-center px-4">
                <div className="text-3xl md:text-5xl font-black text-slate-900 mb-2">{stat.val}</div>
                <div className="text-[10px] md:text-xs font-bold text-blue-600 uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 📖 3. OUR STORY & PHILOSOPHY (The Human Touch) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-20 items-center">
          <div className="scroll-reveal space-y-8 relative">
            <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-blue-600 to-transparent rounded-full -ml-6 md:-ml-10 hidden md:block"></div>
            
            <div>
              <span className="text-[10px] font-bold tracking-[0.2em] text-blue-600 uppercase block mb-3">Our Story</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">Why we started.</h2>
            </div>
            
            <div className="space-y-6">
              <p className="text-base md:text-lg text-slate-600 font-light leading-relaxed">
                We built BNQinTECH because we kept seeing the same problem: great technology was too expensive, and affordable tech was poorly built. Businesses shouldn't have to choose between blowing their budget or settling for a slow, clunky website.
              </p>
              <p className="text-base md:text-lg text-slate-600 font-light leading-relaxed">
                What began as a passion for writing clean, scalable code has grown into a driven team of problem-solvers. We don't use unnecessary jargon. Our focus is simply on building fast, secure, and reliable digital platforms that actually help your business grow.
              </p>
            </div>
          </div>

          <div className="scroll-reveal parallax-container relative h-[400px] md:h-[500px] rounded-[2.5rem] overflow-hidden bg-slate-100 shadow-2xl">
            <div className="parallax-bg absolute inset-[-20%] w-[140%] h-[140%] bg-gradient-to-tr from-slate-900 via-blue-900 to-indigo-900 flex items-center justify-center">
              <div className="w-[200px] h-[200px] md:w-[300px] md:h-[300px] border border-white/10 rounded-full flex items-center justify-center">
                <div className="w-[150px] h-[150px] md:w-[200px] md:h-[200px] border border-white/20 rounded-full flex items-center justify-center">
                  <div className="w-[80px] h-[80px] md:w-[100px] md:h-[100px] bg-blue-500/50 blur-[30px] rounded-full"></div>
                </div>
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent flex flex-col justify-end p-8 md:p-10">
              <h3 className="text-white text-xl md:text-2xl font-bold mb-2">The Real Work</h3>
              <p className="text-slate-300 text-sm leading-relaxed max-w-xs">Code with a conscience. Engineer for performance. Never compromise on quality.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 🎯 4. MISSION & VISION (Inspired by your reference, humanized) */}
      <section className="bg-slate-50 py-24 md:py-32 border-y border-slate-200/60 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[300px] bg-white rounded-[100%] blur-[100px]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            
            <div className="scroll-reveal bg-white rounded-[2rem] p-8 md:p-14 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 group hover:border-blue-200 transition-colors">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center text-2xl md:text-3xl mb-8 group-hover:scale-110 transition-transform">🎯</div>
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-6">Our Mission</h2>
              <p className="text-slate-600 leading-relaxed text-base md:text-lg font-light">
                At BNQinTECH, our mission is to help businesses thrive in the digital era by building reliable, scalable, and user-focused software. We aim to bridge the gap by creating solutions that drive real growth, so you never have to choose between affordability and quality.
              </p>
            </div>

            <div className="scroll-reveal bg-white rounded-[2rem] p-8 md:p-14 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 group hover:border-indigo-200 transition-colors">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center text-2xl md:text-3xl mb-8 group-hover:scale-110 transition-transform">👁️</div>
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-6">Our Vision</h2>
              <p className="text-slate-600 leading-relaxed text-base md:text-lg font-light">
                We envision a future where high-performance technology blends seamlessly into your everyday operations. No server downtimes, no clunky interfaces—just fast, intuitive, and accessible digital experiences that your team and your customers genuinely enjoy using.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 💎 5. CORE VALUES (Human & Grounded) */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="scroll-reveal text-center mb-16 md:mb-20">
            <span className="text-[10px] font-bold tracking-[0.2em] text-blue-600 uppercase block mb-3">How We Work</span>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight">Our Core Values.</h2>
          </div>
          
          <div className="stagger-grid max-w-4xl mx-auto space-y-4 md:space-y-6">
            {[
              { icon: "🛠️", title: "Build It Right", desc: "We don't cut corners. Clean architecture and scalable code are the foundation of everything we do." },
              { icon: "🤝", title: "Complete Honesty", desc: "No hidden costs, no fake promises. We communicate clearly about what is possible and what it takes." },
              { icon: "⚡", title: "Performance First", desc: "A slow app is a dead app. We obsess over speed, responsiveness, and seamless user experiences." },
              { icon: "💡", title: "Problem Solvers", desc: "We are not just order-takers. We partner with you to understand your business and solve real problems." }
            ].map((value, idx) => (
              <div key={idx} className="stagger-item group flex flex-col md:flex-row md:items-center gap-4 md:gap-6 p-6 rounded-2xl hover:bg-slate-50 transition-colors cursor-default">
                <div className="w-14 h-14 md:w-16 md:h-16 bg-white border border-slate-100 shadow-sm rounded-full flex items-center justify-center text-xl md:text-2xl shrink-0 group-hover:border-blue-200 transition-colors">
                  {value.icon}
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-1 md:mb-2">{value.title}</h3>
                  <p className="text-sm md:text-base text-slate-500 font-light leading-relaxed">{value.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🚀 6. SEAMLESS CTA */}
      <section className="scroll-reveal max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 md:pb-32">
        <div className="bg-slate-950 rounded-[2rem] md:rounded-[3rem] p-8 md:p-20 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/30 blur-[100px] rounded-full pointer-events-none"></div>
          <div className="relative z-10">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-black text-white mb-4 md:mb-6 tracking-tight">Have an idea? Let's build it.</h2>
            <p className="text-slate-400 text-base md:text-lg mb-8 md:mb-10 max-w-xl mx-auto">
              Stop stressing over technology. Partner with us and let's create something your users will love.
            </p>
            <Link href="/company/contact" className="inline-block bg-white text-slate-950 font-bold px-8 py-3 md:px-10 md:py-4 rounded-full hover:bg-blue-50 transition-colors shadow-lg hover:scale-105 transform duration-300 text-sm md:text-base">
              Start a Conversation
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}