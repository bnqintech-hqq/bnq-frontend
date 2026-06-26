'use client';

import React, { useRef, useState } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Strict Interfaces
interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
}

export default function BlogPage() {
  const container = useRef<HTMLDivElement>(null);
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Engineering", "Cloud Hosting", "Cybersecurity", "Company News", "Design"];

  const featuredPost: BlogPost = {
    id: "feat-1",
    title: "The Future of Enterprise Architecture: Serverless vs. Bare Metal",
    excerpt: "As applications scale to millions of users, the debate between going fully serverless or investing in dedicated bare metal infrastructure is heating up. Here is our technical deep dive into making the right choice for your workload.",
    category: "Cloud Hosting",
    date: "May 15, 2026",
    readTime: "8 min read"
  };

  const blogPosts: BlogPost[] = [
    { id: "post-1", title: "Why We Chose Next.js for High-Performance Portals", excerpt: "A look inside our engineering decisions, focusing on SSR, edge caching, and building sub-second load times.", category: "Engineering", date: "May 10, 2026", readTime: "5 min read" },
    { id: "post-2", title: "Zero-Trust Security: Protecting Sensitive Govt Data", excerpt: "How to implement a zero-trust architecture in civic portals to prevent data leaks and ensure compliance.", category: "Cybersecurity", date: "May 02, 2026", readTime: "7 min read" },
    { id: "post-3", title: "Designing for Accessibility: A UI/UX Case Study", excerpt: "Insights into our design system that ensures digital platforms are usable by everyone, regardless of ability.", category: "Design", date: "Apr 28, 2026", readTime: "4 min read" },
    { id: "post-4", title: "BNQinTECH Expands Data Center Footprint in APAC", excerpt: "We are thrilled to announce the launch of our newest tier-4 data center facility in Singapore.", category: "Company News", date: "Apr 15, 2026", readTime: "3 min read" },
    { id: "post-5", title: "Optimizing PostgreSQL for 10x Faster Queries", excerpt: "Database bottlenecks? Here are the exact indexing and query optimization strategies our backend team uses.", category: "Engineering", date: "Apr 05, 2026", readTime: "6 min read" },
  ];

  useGSAP(() => {
    const tl = gsap.timeline();
    // 1. Hero Reveal
    tl.from(".hero-badge", { y: 20, opacity: 0, duration: 0.6, ease: "power3.out", delay: 0.2 })
      .from(".hero-text-line", { y: 80, opacity: 0, duration: 0.8, stagger: 0.1, ease: "power4.out", clipPath: "inset(0% 0% 100% 0%)" }, "-=0.2")
      .from(".hero-desc", { y: 20, opacity: 0, duration: 0.8, ease: "power2.out" }, "-=0.4");

    // 2. Scroll Sections Fade Up
    gsap.utils.toArray<HTMLElement>('.scroll-fade').forEach((sec) => {
      gsap.from(sec, {
        scrollTrigger: { trigger: sec, start: "top 85%" },
        y: 40, opacity: 0, duration: 1, ease: "power3.out"
      });
    });

    // 3. Staggered Blog List
    gsap.from(".blog-row", {
      scrollTrigger: { trigger: ".blog-list", start: "top 80%" },
      x: -30, opacity: 0, duration: 0.6, stagger: 0.1, ease: "back.out(1.2)"
    });
  }, { scope: container });

  const filteredPosts = activeCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  return (
    <main ref={container} className="min-h-screen bg-white pt-24 pb-16 font-sans overflow-hidden selection:bg-blue-200 text-slate-900">
      
      {/* 🚀 1. HERO SECTION (Editorial Dark Theme) */}
      <section className="relative bg-slate-950 text-white pt-32 pb-40 rounded-b-[3rem] shadow-2xl z-10">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/20 blur-[150px] rounded-full pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-500/20 blur-[120px] rounded-full pointer-events-none"></div>
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 text-center">
          <div className="hero-badge inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-400 font-bold uppercase tracking-widest text-[10px] mb-8 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span>
            Insights & Innovations
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-8 leading-[1.05]">
            <div className="overflow-hidden pb-2"><div className="hero-text-line">Thoughts from the</div></div>
            <div className="overflow-hidden pb-2">
              <div className="hero-text-line text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-emerald-400">
                engineering desk.
              </div>
            </div>
          </h1>
          
          <p className="hero-desc text-lg md:text-xl text-slate-400 font-light leading-relaxed max-w-2xl mx-auto">
            Deep dives into software architecture, cloud infrastructure, design systems, and the latest news from the BNQinTECH team.
          </p>
        </div>
      </section>

      {/* ✨ 2. FEATURED POST (Fluid Glassy Panel, No harsh borders) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-20 mb-24">
        <Link href={`/company/blog/${featuredPost.id}`} className="block group">
          <div className="bg-white/90 backdrop-blur-xl rounded-[2.5rem] p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-slate-100 flex flex-col lg:flex-row gap-10 items-center overflow-hidden relative">
            
            {/* Soft Hover Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-50/0 to-blue-50/50 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-700 ease-out -z-10"></div>

            {/* Abstract Graphic representing the featured image */}
            <div className="w-full lg:w-1/2 h-[300px] lg:h-[400px] rounded-3xl bg-gradient-to-tr from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden shadow-inner">
              <div className="absolute top-[-20%] right-[-20%] w-[80%] h-[80%] bg-blue-500/30 blur-[60px] rounded-full group-hover:scale-110 transition-transform duration-700"></div>
              <div className="absolute bottom-[-10%] left-[-10%] w-[60%] h-[60%] bg-emerald-500/20 blur-[60px] rounded-full"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white/20 text-9xl font-black tracking-tighter mix-blend-overlay">TECH</span>
              </div>
            </div>

            <div className="w-full lg:w-1/2 flex flex-col justify-center">
              <div className="flex items-center gap-4 mb-6">
                <span className="px-3 py-1 bg-blue-100 text-blue-700 text-[10px] font-bold uppercase tracking-widest rounded-full">
                  Featured
                </span>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{featuredPost.category}</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6 tracking-tight group-hover:text-blue-600 transition-colors">
                {featuredPost.title}
              </h2>
              
              <p className="text-slate-500 font-light leading-relaxed mb-8 text-lg">
                {featuredPost.excerpt}
              </p>

              <div className="flex items-center justify-between mt-auto pt-6 border-t border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-slate-200 border-2 border-white shadow-sm overflow-hidden flex items-center justify-center text-xs">👤</div>
                  <div>
                    <p className="text-xs font-bold text-slate-900">BNQinTECH Engineering</p>
                    <p className="text-[10px] text-slate-400">{featuredPost.date} • {featuredPost.readTime}</p>
                  </div>
                </div>
                <div className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 group-hover:bg-blue-600 group-hover:border-blue-600 group-hover:text-white transition-all duration-300">
                  →
                </div>
              </div>
            </div>
          </div>
        </Link>
      </section>

      {/* 🗂️ 3. CATEGORY FILTERS (Seamless pills) */}
      <section className="scroll-fade max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4 pb-8 border-b border-slate-200">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 text-xs font-bold rounded-full transition-all duration-300 ${
                activeCategory === cat 
                  ? "bg-slate-900 text-white shadow-md scale-105" 
                  : "bg-slate-50 text-slate-600 hover:bg-slate-100 hover:text-slate-900"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* 📋 4. RECENT POSTS (Shutter List, No Boxes) */}
      <section className="blog-list max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 mb-24">
        <div className="flex flex-col">
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post) => (
              <Link key={post.id} href={`/company/blog/${post.id}`} className="blog-row group block relative overflow-hidden border-b border-slate-200 py-10 md:py-12 -mx-4 px-4 sm:mx-0 sm:px-6 rounded-2xl">
                
                {/* Animated Shutter Background */}
                <div className="absolute inset-0 bg-slate-50 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out -z-10"></div>
                
                <div className="relative z-10 flex flex-col md:flex-row gap-6 md:gap-12 items-start md:items-center">
                  
                  <div className="md:w-[25%] shrink-0">
                    <p className="text-[10px] font-bold text-blue-600 uppercase tracking-widest mb-1">{post.category}</p>
                    <p className="text-xs text-slate-400">{post.date}</p>
                  </div>
                  
                  <div className="md:w-[60%]">
                    <h3 className="text-xl md:text-2xl font-black text-slate-900 group-hover:text-blue-600 transition-colors mb-3">
                      {post.title}
                    </h3>
                    <p className="text-sm text-slate-500 font-light leading-relaxed line-clamp-2">
                      {post.excerpt}
                    </p>
                  </div>
                  
                  <div className="md:w-[15%] flex justify-end items-center mt-4 md:mt-0 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                    <span className="text-sm font-bold text-blue-600 flex items-center gap-2">
                      Read <span className="text-lg">→</span>
                    </span>
                  </div>

                </div>
              </Link>
            ))
          ) : (
            <div className="py-20 text-center text-slate-400 font-light">
              No articles found in this category.
            </div>
          )}
        </div>
      </section>

      {/* 💌 5. NEWSLETTER CTA (Borderless, Clean) */}
      <section className="scroll-fade max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-32">
        <div className="bg-slate-950 rounded-[3rem] p-10 md:p-16 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-blue-600/30 blur-[100px] rounded-full pointer-events-none"></div>
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4 tracking-tight">Never miss an update.</h2>
            <p className="text-slate-400 text-sm md:text-base font-light mb-10 max-w-md mx-auto">
              Get the latest insights on cloud architecture, UI/UX trends, and company news delivered straight to your inbox.
            </p>
            
            <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-4" onSubmit={(e) => e.preventDefault()}>
              <div className="relative group flex-grow">
                <input 
                  type="email" 
                  required 
                  placeholder="Enter your email address" 
                  className="w-full bg-white/5 border-b border-slate-600 py-3 px-4 text-white text-sm outline-none focus:border-blue-500 focus:bg-white/10 transition-all rounded-t-lg peer"
                />
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-500 peer-focus:w-full"></div>
              </div>
              <button type="submit" className="bg-white hover:bg-blue-50 text-slate-900 font-bold px-8 py-3 rounded-xl text-sm transition-colors shrink-0 shadow-lg">
                Subscribe
              </button>
            </form>
            <p className="text-[10px] text-slate-500 mt-4">No spam. Unsubscribe anytime.</p>
          </div>
        </div>
      </section>

    </main>
  );
}