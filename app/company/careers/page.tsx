'use client';

import React, { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Strict Types
interface Job {
  id: string;
  title: string;
  dept: string;
  type: string;
  location: string;
}

export default function CareersPage() {
  const container = useRef<HTMLDivElement>(null);
  
  // Application Form State
  const [selectedRole, setSelectedRole] = useState("General Application");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [portfolioUrl, setPortfolioUrl] = useState("");
  const [resumeName, setResumeName] = useState("");
  const [resumeFile, setResumeFile] = useState<File | null>(null); // New state for actual file
  const [isSubmitting, setIsSubmitting] = useState(false);

  const openPositions: Job[] = [
    { id: "FE-01", title: "Senior Frontend Engineer (React/Next.js)", dept: "Engineering", type: "Full-Time", location: "Pune / Remote" },
    { id: "CL-02", title: "Cloud Solutions Architect (AWS/Azure)", dept: "Infrastructure", type: "Full-Time", location: "Pune HQ" },
    { id: "UX-03", title: "Lead UI/UX Product Designer", dept: "Design", type: "Full-Time", location: "Mumbai / Remote" },
    { id: "BPO-04", title: "BPO Operations Manager", dept: "Call Center", type: "Full-Time", location: "Delhi NCR" },
    { id: "SL-05", title: "Enterprise Sales Executive (B2B)", dept: "Sales & Growth", type: "Full-Time", location: "Pune HQ" }
  ];

  const perks = [
    { icon: "💻", title: "Top-Tier Gear", desc: "MacBooks, dual monitors, and everything you need to do your best work." },
    { icon: "🏥", title: "Health & Wellness", desc: "Comprehensive health insurance for you and your dependents." },
    { icon: "🌍", title: "Work from Anywhere", desc: "Flexible hybrid policies. Work from home, office, or a cafe in Bali." },
    { icon: "📚", title: "Learning Budget", desc: "Annual stipend for courses, certifications, and tech conferences." }
  ];

  useGSAP(() => {
    // 1. Hero Reveal
    const tl = gsap.timeline();
    tl.from(".hero-badge", { y: 20, opacity: 0, duration: 0.6, ease: "power3.out", delay: 0.2 })
      .from(".hero-text-line", { y: 80, opacity: 0, duration: 0.8, stagger: 0.1, ease: "power4.out", clipPath: "inset(0% 0% 100% 0%)" }, "-=0.2")
      .from(".hero-desc", { y: 20, opacity: 0, duration: 0.8, ease: "power2.out" }, "-=0.4");

    // 2. Scroll Sections
    gsap.utils.toArray<HTMLElement>('.scroll-fade').forEach((sec) => {
      gsap.from(sec, {
        scrollTrigger: { trigger: sec, start: "top 85%" },
        y: 50, opacity: 0, duration: 1, ease: "power3.out"
      });
    });

    // 3. Staggered Job List
    gsap.from(".job-row", {
      scrollTrigger: { trigger: ".job-board", start: "top 80%" },
      x: -30, opacity: 0, duration: 0.6, stagger: 0.1, ease: "back.out(1.2)"
    });
  }, { scope: container });

  // UPDATED: Real API Call Function
  const handleApply = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // FormData is required when sending Files
      const formData = new FormData();
      formData.append("role", selectedRole);
      formData.append("name", fullName);
      formData.append("email", email);
      formData.append("phone", phone);
      formData.append("portfolio", portfolioUrl);
      if (resumeFile) {
        formData.append("resume", resumeFile);
      }

      // Sending data to Next.js API Route
      const response = await fetch('/api/apply', {
        method: 'POST',
        body: formData, 
        // Note: Do not set Content-Type header manually when using FormData
      });

      if (response.ok) {
        alert(`Thank you ${fullName}! Your application for '${selectedRole}' has been received. Our HR team will contact you soon.`);
        // Reset form
        setFullName(""); setEmail(""); setPhone(""); setPortfolioUrl(""); 
        setResumeName(""); setResumeFile(null); setSelectedRole("General Application");
      } else {
        alert("Something went wrong. Please try again later.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Network error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Scroll to form handler
  const scrollToForm = (role: string) => {
    setSelectedRole(role);
    document.getElementById("application-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main ref={container} className="min-h-screen bg-white pt-24 pb-16 font-sans overflow-hidden selection:bg-blue-200 text-slate-900">
      
      {/* 🚀 1. HERO SECTION */}
      <section className="relative bg-slate-950 text-white pt-32 pb-40 rounded-b-[3rem] shadow-2xl z-10">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/20 blur-[150px] rounded-full pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-500/20 blur-[120px] rounded-full pointer-events-none"></div>
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 text-center">
          <div className="hero-badge inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-400 font-bold uppercase tracking-widest text-[10px] mb-8 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span>
            Join BNQinTECH
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-8 leading-[1.05]">
            <div className="overflow-hidden pb-2"><div className="hero-text-line">Do the best work</div></div>
            <div className="overflow-hidden pb-2">
              <div className="hero-text-line text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-emerald-400">
                of your life.
              </div>
            </div>
          </h1>
          
          <p className="hero-desc text-lg md:text-xl text-slate-400 font-light leading-relaxed max-w-2xl mx-auto">
            We are looking for brilliant minds who want to engineer enterprise-scale solutions, challenge the status quo, and build the digital future with us.
          </p>
        </div>
      </section>

      {/* ✨ 2. CULTURE & PERKS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 border-b border-slate-100">
        <div className="scroll-fade text-center mb-20">
          <span className="text-[10px] font-bold tracking-[0.2em] text-blue-600 uppercase block mb-3">Life at BNQinTECH</span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">Why you'll love it here.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 max-w-5xl mx-auto">
          {perks.map((perk, idx) => (
            <div key={idx} className="scroll-fade flex gap-6 items-start group">
              <div className="w-16 h-16 bg-slate-50 border border-slate-100 rounded-full flex items-center justify-center text-3xl shrink-0 group-hover:scale-110 group-hover:bg-blue-50 group-hover:border-blue-200 transition-all duration-300">
                {perk.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">{perk.title}</h3>
                <p className="text-slate-500 font-light leading-relaxed">{perk.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 📋 3. OPEN POSITIONS JOB BOARD */}
      <section className="job-board max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="flex flex-col sm:flex-row justify-between items-end mb-12 gap-4">
          <div>
            <span className="text-[10px] font-bold tracking-[0.2em] text-blue-600 uppercase block mb-3">Open Roles</span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">Current Openings</h2>
          </div>
          <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">{openPositions.length} Positions Available</p>
        </div>

        <div className="flex flex-col border-t border-slate-200">
          {openPositions.map((job) => (
            <div 
              key={job.id} 
              onClick={() => scrollToForm(job.title)}
              className="job-row group flex flex-col md:flex-row md:items-center justify-between py-8 border-b border-slate-200 cursor-pointer relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-slate-50 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out -z-10"></div>
              
              <div className="relative z-10 md:w-1/2 mb-4 md:mb-0 px-4">
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-2">{job.title}</h3>
                <span className="inline-block px-3 py-1 bg-slate-100 text-slate-600 text-[10px] font-bold uppercase tracking-wider rounded-full group-hover:bg-blue-100 group-hover:text-blue-700 transition-colors">
                  {job.dept}
                </span>
              </div>
              
              <div className="relative z-10 flex gap-8 items-center px-4">
                <div className="text-left">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Location</p>
                  <p className="text-sm font-medium text-slate-700">{job.location}</p>
                </div>
                <div className="text-left">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Type</p>
                  <p className="text-sm font-medium text-slate-700">{job.type}</p>
                </div>
                <div className="hidden sm:block ml-4">
                  <div className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    →
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 🚀 4. APPLICATION FORM */}
      <section id="application-form" className="scroll-fade max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="bg-slate-50 rounded-[3rem] p-8 md:p-16 border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
          <div className="mb-12">
            <h2 className="text-3xl font-black text-slate-900 tracking-tight mb-2">Submit your application</h2>
            <p className="text-slate-500 font-light">Don't see a perfect fit above? Select 'General Application' and we'll keep you in mind for future roles.</p>
          </div>

          <form onSubmit={handleApply} className="space-y-8">
            
            <div className="relative group">
              <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">Role Applying For *</label>
              <select 
                value={selectedRole} 
                onChange={(e) => setSelectedRole(e.target.value)} 
                className="w-full bg-transparent border-b-2 border-slate-200 py-3 text-slate-900 font-bold outline-none peer appearance-none cursor-pointer"
              >
                <option value="General Application">General Application (Open Role)</option>
                {openPositions.map(job => (
                  <option key={job.id} value={job.title}>{job.title}</option>
                ))}
              </select>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-500 peer-focus:w-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
              {[
                { id: 'name', label: 'Full Name *', value: fullName, setter: setFullName, type: 'text', placeholder: 'John Doe' },
                { id: 'email', label: 'Email Address *', value: email, setter: setEmail, type: 'email', placeholder: 'john@example.com' },
                { id: 'phone', label: 'Phone Number *', value: phone, setter: setPhone, type: 'tel', placeholder: '+91 XXXXX XXXXX' },
                { id: 'portfolio', label: 'LinkedIn / Portfolio URL', value: portfolioUrl, setter: setPortfolioUrl, type: 'url', placeholder: 'https://linkedin.com/in/...' }
              ].map((input) => (
                <div key={input.id} className="relative group">
                  <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">{input.label}</label>
                  <input 
                    required={input.label.includes('*')} type={input.type} value={input.value} onChange={(e) => input.setter(e.target.value)} placeholder={input.placeholder}
                    className="w-full bg-transparent border-b-2 border-slate-200 py-2 text-slate-900 outline-none transition-colors peer"
                  />
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-500 peer-focus:w-full"></div>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-3">Upload Resume / CV *</label>
              <div className="relative border-2 border-dashed border-slate-300 hover:border-blue-400 rounded-2xl p-8 bg-white hover:bg-blue-50/50 text-center transition-all duration-300 group cursor-pointer">
                
                {/* UPDATED: Handling the File object correctly */}
                <input 
                  required 
                  type="file" 
                  onChange={(e) => { 
                    if(e.target.files?.[0]) {
                      setResumeName(e.target.files[0].name); 
                      setResumeFile(e.target.files[0]); // Saving the real file
                    }
                  }} 
                  accept=".pdf,.doc,.docx" 
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10" 
                />
                
                <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center text-2xl mx-auto mb-4 group-hover:scale-110 transition-transform">📄</div>
                <span className="text-base font-bold text-slate-700 block mb-1">
                  {resumeName ? <span className="text-blue-600">{resumeName}</span> : 'Drag and drop or click to upload'}
                </span>
                <span className="text-xs text-slate-400 block font-medium">Supported formats: PDF, DOCX (Max 5MB)</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-8 border-t border-slate-200">
              <p className="text-xs text-slate-400 max-w-xs leading-relaxed font-medium">
                By submitting this application, you agree to our <span className="text-blue-600 underline cursor-pointer">Data Privacy Policy</span>.
              </p>
              <button 
                disabled={isSubmitting} 
                type="submit" 
                className="w-full sm:w-auto bg-slate-950 hover:bg-blue-600 text-white font-bold px-12 py-4 rounded-full text-sm transition-all shadow-lg hover:shadow-blue-600/30 hover:-translate-y-1 disabled:opacity-70 disabled:hover:translate-y-0 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Application'}
              </button>
            </div>
          </form>
        </div>
      </section>

    </main>
  );
}