import React from "react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Custom Web App Development Services | BNQinTECH",
  description: "Enterprise-grade web application development. We build scalable, fast, and data-driven dashboards using modern React and JavaScript ecosystems.",
};

export default function WebAppDevelopmentPage() {
  const features = [
    {
      title: "Data-Driven Dashboards",
      description: "Complex data visualization, precise metric mapping, and interactive KPI cards built with modern React and JavaScript frameworks.",
      icon: "📊",
    },
    {
      title: "Scalable Architecture",
      description: "Backend architectures designed to handle millions of requests with zero latency and structured database modeling.",
      icon: "⚡",
    },
    {
      title: "Seamless API Integration",
      description: "Custom RESTful and GraphQL API development to connect your app with third-party tools, CRMs, and payment gateways.",
      icon: "🔗",
    },
    {
      title: "Enterprise Security",
      description: "Bank-grade encryption, role-based access control (RBAC), and compliance-ready data handling.",
      icon: "🛡️",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-50 pt-24 pb-16 font-sans">
      {/* Hero Section */}
      <section className="relative px-4 py-20 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden rounded-3xl bg-slate-900 text-white shadow-2xl mb-20">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-blue-600 rounded-full blur-[120px] opacity-40"></div>
        
        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 font-bold uppercase tracking-wider text-xs mb-6">
            Software Development
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
            Next-Generation <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
              Web Applications
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl">
            We transform complex business requirements into sleek, high-performance digital products. From reporting tools to full-scale SaaS platforms, we build software that scales.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all shadow-lg shadow-blue-600/30 text-center">
              Start Your Project
            </Link>
            <Link href="/portfolio" className="px-8 py-4 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white font-bold rounded-xl transition-all text-center">
              View Case Studies
            </Link>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Engineered for Excellence</h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">Every application we build is strictly tested for performance, security, and pixel-perfect design accuracy.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="bg-white p-8 rounded-3xl border border-slate-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300 group">
              <div className="w-14 h-14 bg-blue-50 text-3xl flex items-center justify-center rounded-2xl mb-6 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Tech Stack Banner */}
      <section className="bg-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-8">Powered by Modern Technologies</h3>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 opacity-80">
            {["React.js", "Next.js", "Node.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "AWS"].map((tech, idx) => (
              <span key={idx} className="px-6 py-2 bg-white/10 border border-white/20 rounded-full text-white font-semibold backdrop-blur-sm">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}