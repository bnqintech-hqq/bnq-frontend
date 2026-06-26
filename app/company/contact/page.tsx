'use client';

import React, { useState, useEffect, Suspense } from 'react'; // <-- Naya: useEffect aur Suspense add kiya
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useSearchParams } from 'next/navigation'; // <-- Naya: URL padhne ke liye add kiya

// Strict TypeScript interfaces
interface Location {
  title: string;
  cityState: string; 
  address: string;
  embedUrl: string;
}

interface Locations {
  [key: string]: Location;
}

interface Department {
  icon: string;
  title: string;
  desc: string;
  email: string;
  ext: string;
}

interface NetworkItem {
  flag: string;
  country: string;
  city: string;
  desc: string;
  email: string;
}

// Main Logic Component
function ContactContent() {
  // Form State
  const [inquiryType, setInquiryType] = useState('General Inquiry');
  const [fullName, setFullName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [cityState, setCityState] = useState('');
  const [source, setSource] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [fileName, setFileName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<string | null>(null);
  const [submitError, setSubmitError] = useState<string | null>(null);

  // Map Active Tab State
  const [activeLocation, setActiveLocation] = useState<keyof Locations>('pune');

  // --- SMART URL LOGIC START ---
  const searchParams = useSearchParams();

  useEffect(() => {
    const serviceFromUrl = searchParams.get('service');
    if (serviceFromUrl) {
      const slug = serviceFromUrl.toLowerCase();
      // Hosting checks
      if (slug.includes('hosting') || slug.includes('server') || slug.includes('vps') || slug.includes('domains') || slug.includes('ssl')) {
        setInquiryType('Hosting / VPS');
        setSubject(`Inquiry regarding ${serviceFromUrl}`);
        setMessage(`Hello BNQinTECH team, I am interested in your ${serviceFromUrl} package. Please share details and pricing.`);
      } 
      // Dev checks
      else if (slug.includes('apps') || slug.includes('dev') || slug.includes('erp') || slug.includes('saas') || slug.includes('portals')) {
        setInquiryType('Software Dev');
        setSubject(`Project Proposal for ${serviceFromUrl}`);
        setMessage(`Hello, we want to discuss a project regarding ${serviceFromUrl}. Please share your process and guidelines.`);
      } 
      // BPO/Call Center checks
      else if (slug.includes('inbound') || slug.includes('outbound') || slug.includes('lead') || slug.includes('data-entry') || slug.includes('assistants')) {
        setInquiryType('Technical Support');
        setSubject(`BPO/Support inquiry for ${serviceFromUrl}`);
      }
      // Partnership checks
      else if (slug.includes('partner') || slug.includes('reseller') || slug.includes('white-label')) {
        setInquiryType('Partnership');
        setSubject(`Partnership inquiry for ${serviceFromUrl}`);
      }
    }
  }, [searchParams]);
  // --- SMART URL LOGIC END ---

  const locations: Locations = {
    pune: { title: "BNQinTECH - Pune HQ", cityState: "Pune, Maharashtra", address: "XYZ Business Park, Hinjewadi Phase II, Pune - 411057", embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121059.04711156077!2d73.78056541088118!3d18.52460355342416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d43bf9d9ee343!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin" },
    mumbai: { title: "BNQinTECH - Mumbai Branch", cityState: "Mumbai, Maharashtra", address: "ABC Tower, Bandra Kurla Complex, Mumbai - 400051", embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.1160991807!2d72.74109995!3d19.0821978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin" },
    nashik: { title: "BNQinTECH - Nashik Office", cityState: "Nashik, Maharashtra", address: "Tech Hub, CIDCO, Nashik - 422009", embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119981.26415053784!2d73.72107875!3d19.9911106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddd290b09914b3%3A0xcb07845d9d28215c!2sNashik%2C%20Maharashtra!5e0!3m2!1sen!2sin" },
    nagpur: { title: "BNQinTECH - Nagpur Hub", cityState: "Nagpur, Maharashtra", address: "IT Park, Gayatri Nagar, Nagpur - 440022", embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119066.41709440628!2d79.01233261763133!3d21.1610859!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c0a5a31faf13%3A0x19b37eb09252811b!2sNagpur%2C%20Maharashtra!5e0!3m2!1sen!2sin" },
    gujarat: { title: "BNQinTECH - Gujarat Center", cityState: "Ahmedabad, Gujarat", address: "SG Highway, Makarba, Ahmedabad - 380015", embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.697915724458!2d72.5695029149679!3d23.03485608494639!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e848aba5bd449%3A0x4fcedd11614f6516!2sAhmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin" }
  };

  const departments: Department[] = [
    { icon: "💻", title: "Hosting & VPS", desc: "Shared, cloud VPS, dedicated servers, reseller hosting.", email: "hosting@bnqintech.com", ext: "Ext. 1" },
    { icon: "🖥️", title: "Software Dev", desc: "Web/mobile apps, ERP/CRM, custom software projects.", email: "dev@bnqintech.com", ext: "Ext. 2" },
    { icon: "📈", title: "Digital Marketing", desc: "SEO, SEM, social media, content strategies.", email: "digital@bnqintech.com", ext: "Ext. 3" },
    { icon: "🤝", title: "Partners", desc: "Reseller, dealer network, white-label partnerships.", email: "partners@bnqintech.com", ext: "Ext. 4" },
    { icon: "📞", title: "Call Center", desc: "Inbound support, lead generation outsourcing.", email: "bpo@bnqintech.com", ext: "Ext. 5" },
    { icon: "🔧", title: "Technical Support", desc: "24/7 technical help for existing clients.", email: "support@bnqintech.com", ext: "Ext. 6" }
  ];

  const globalNetwork: NetworkItem[] = [
    { flag: "🇺🇸", country: "USA", city: "New York", desc: "North America sales hub.", email: "us@bnqintech.com" },
    { flag: "🇬🇧", country: "UK", city: "London", desc: "European strategic support.", email: "uk@bnqintech.com" },
    { flag: "🇦🇪", country: "UAE", city: "Dubai", desc: "MENA enterprise solutions.", email: "mena@bnqintech.com" },
    { flag: "🇸🇬", country: "Singapore", city: "Singapore", desc: "APAC regional headquarter.", email: "apac@bnqintech.com" },
    { flag: "🇦🇺", country: "Australia", city: "Sydney", desc: "Oceania regional sales.", email: "au@bnqintech.com" },
    { flag: "🇨🇦", country: "Canada", city: "Toronto", desc: "North America tech support.", email: "ca@bnqintech.com" }
  ];

  const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.3 } } };
  const itemVariants = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 100 } } };

  const formTabs = [
    { id: 'General Inquiry', label: '💬 General' },
    { id: 'Hosting / VPS', label: '🖥️ Hosting' },
    { id: 'Software Dev', label: '💻 Web/Apps' },
    { id: 'Technical Support', label: '🛡️ Support' },
    { id: 'Partnership', label: '🤝 Partners' }
  ];

  const locTabs: { key: keyof Locations; label: string }[] = [
    { key: 'pune', label: 'Pune HQ' }, { key: 'mumbai', label: 'Mumbai' }, { key: 'nashik', label: 'Nashik' }, { key: 'nagpur', label: 'Nagpur' }, { key: 'gujarat', label: 'Gujarat' }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true); setSubmitMessage(null); setSubmitError(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ inquiryType, fullName, companyName, email, phone, subject, message, source: 'company-contact-page' })
      });

      const result = await response.json();
      
      if (response.ok && result.success) {
        setSubmitMessage(`Thank you ${fullName}. Your ${inquiryType} request has been sent successfully.`);
        setFullName(''); setCompanyName(''); setEmail(''); setPhone('');
        setCityState(''); setSource(''); setSubject(''); setMessage(''); setFileName('');
      } else {
        setSubmitError(result.error?.message || "Something went wrong. Please try again.");
      }
    } catch {
      setSubmitError("Network error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-slate-50 pt-41 pb-24 font-sans antialiased text-slate-900 relative overflow-hidden">
      
      {/* SECTION 1: HERO & INTERACTIVE FORM */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Side Info Details */}
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, ease: "easeOut" }} className="lg:col-span-5 space-y-10">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50/50 border border-blue-100/50 text-blue-600 font-bold uppercase tracking-widest text-[10px] mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse"></span>
                Get In Touch
              </div>
              <h1 className="text-4xl md:text-5xl font-black text-slate-950 leading-[1.1] tracking-tight mb-6 uppercase">
                We'd love to<br />hear from you
              </h1>
              <p className="text-lg text-slate-600 leading-relaxed font-medium">
                Whether you have a project in mind, a support question, or want to explore partnerships — we're here and ready to help.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-6 border border-slate-200/60 shadow-sm space-y-6">
              {[
                { icon: "📍", title: "Head Office", desc: "Pune, Maharashtra, India", extra: "Global Delivery Center" },
                { icon: "📞", title: "Phone & WhatsApp", desc: "+91 92713 0782", extra: "WhatsApp preferred for instant queries" },
                { icon: "✉️", title: "Email", desc: "hello@bnqintech.com", extra: "partners@bnqintech.com for partnerships" }
              ].map((item, idx) => (
                <div key={idx} className={`p-4 flex gap-5 items-start ${idx !== 0 ? 'border-t border-slate-100 pt-6' : ''}`}>
                  <span className="p-3 w-12 h-12 bg-slate-50 text-2xl flex items-center justify-center rounded-xl shrink-0">{item.icon}</span>
                  <div>
                    <h4 className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-1">{item.title}</h4>
                    <p className="font-extrabold text-slate-950 text-base md:text-lg">{item.desc}</p>
                    <p className="text-xs text-slate-500 font-medium mt-0.5">{item.extra}</p>
                  </div>
                </div>
              ))}
            </div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 0.6 }} className="grid grid-cols-2 gap-4">
              {[
                { label: 'Chat Sales', icon: '💬', title: 'WhatsApp Chat', href: 'https://wa.me/919271360782', external: true },
                { label: 'Earn With Us', icon: '🤝', title: 'Partner Program', href: '/partners', external: false },
                { label: 'View Openings', icon: '💼', title: 'Join the Team', href: '/company/careers', external: false },
                { label: 'Call Support', icon: '🔧', title: 'Get Tech Help', href: 'tel:+919271360782', external: true }
              ].map((link, idx) => {
                const Tag = link.external ? 'a' : Link;
                return (
                  <motion.div key={idx} whileHover={{ y: -5, scale: 1.02 }} className="group">
                    <Tag href={link.href} {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})} className="bg-white border border-slate-200 hover:border-blue-200 p-5 rounded-2xl flex items-center gap-4 shadow-sm hover:shadow-xl hover:shadow-blue-500/5 transition-all w-full text-left h-full">
                      <span className="text-xl bg-slate-50 w-10 h-10 flex items-center justify-center rounded-xl shrink-0">{link.icon}</span>
                      <div>
                        <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1 block group-hover:text-blue-600 transition-colors">{link.label}</span>
                        <span className="text-sm font-bold text-slate-900 leading-snug block">{link.title}</span>
                      </div>
                    </Tag>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Right Side: Worked Form */}
          <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }} className="lg:col-span-7 bg-white rounded-3xl p-8 md:p-10 border border-slate-200/80 shadow-2xl shadow-slate-950/5 relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100/50 blur-[100px] rounded-full pointer-events-none"></div>

            <div className="relative z-10 mb-10 pb-6 border-b border-slate-100">
              <span className="text-[10px] font-bold tracking-widest text-blue-600 uppercase block mb-1">Direct Message</span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-950 uppercase tracking-tight mb-2 leading-tight">Send us your requirements</h2>
              <p className="text-sm text-slate-500 font-medium">Fill in the details below. Our team typically responds within 1 business day.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              {submitMessage && <p className="rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-semibold text-emerald-700">{submitMessage}</p>}
              {submitError && <p className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">{submitError}</p>}
              
              <div>
                <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-2.5">Select Service Tier *</label>
                <div className="bg-slate-100 p-1 rounded-2xl border border-slate-200 flex flex-wrap gap-1 relative overflow-hidden">
                  {formTabs.map((tab) => {
                    const isActive = inquiryType === tab.id;
                    return (
                      <button
                        key={tab.id}
                        type="button"
                        onClick={() => { setInquiryType(tab.id); setSubject(`Inquiry regarding ${tab.id}`); }}
                        className={`relative px-5 py-3 text-xs font-bold rounded-xl transition-all flex items-center justify-center gap-1.5 grow sm:grow-0 whitespace-nowrap ${
                          isActive ? 'text-white' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/50'
                        }`}
                      >
                        {isActive && <motion.div layoutId="formTabBackground" className="absolute inset-0 bg-slate-900 rounded-xl z-0" transition={{ type: "spring", bounce: 0.2, duration: 0.6 }} />}
                        <span className="relative z-10">{tab.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5 pt-4">
                {[
                  { id: 'name', label: 'Full Name *', value: fullName, setter: setFullName, placeholder: 'Your Name' },
                  { id: 'email', label: 'Work Email *', value: email, setter: setEmail, placeholder: 'you@company.com', type: 'email' },
                  { id: 'company', label: 'Company Name', value: companyName, setter: setCompanyName, placeholder: 'Organization name' },
                  { id: 'phone', label: 'Phone / WhatsApp *', value: phone, setter: setPhone, placeholder: '+91 XXXXX XXXXX', type: 'tel' }
                ].map((input) => (
                  <div key={input.id}>
                    <label htmlFor={input.id} className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">{input.label}</label>
                    <input required={input.label.includes('*')} id={input.id} type={input.type || 'text'} value={input.value} onChange={(e) => input.setter(e.target.value)} placeholder={input.placeholder} className="w-full bg-slate-50 border-b border-slate-200 rounded-lg px-4 py-3 text-sm outline-none focus:border-blue-600 focus:bg-white focus:shadow-inner transition-all duration-300" />
                  </div>
                ))}
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">Subject *</label>
                <input required type="text" value={subject} onChange={(e) => setSubject(e.target.value)} placeholder="Brief subject of your inquiry" className="w-full bg-slate-50 border-b border-slate-200 rounded-lg px-4 py-3 text-sm outline-none focus:border-blue-600 focus:bg-white focus:shadow-inner transition-all duration-300" />
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">Message *</label>
                <textarea required rows={4} value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Please describe your requirements, project details, or question in detail..." className="w-full bg-slate-50 border-b border-slate-200 rounded-2xl px-4 py-3 text-sm outline-none focus:border-blue-600 focus:bg-white focus:shadow-inner transition-all duration-300 resize-none"></textarea>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-6 border-t border-slate-100">
                <p className="text-xs text-slate-400 max-w-sm leading-relaxed font-medium">
                  We value your <span className="text-blue-600 underline cursor-pointer">Privacy</span>. Your data is strictly confidential and never shared with third parties.
                </p>
                <motion.button disabled={isSubmitting} whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} type="submit" className="bg-slate-950 hover:bg-blue-600 text-white font-bold px-10 py-4 rounded-xl text-xs transition-all shadow-md flex items-center justify-center gap-2 tracking-widest uppercase shrink-0 disabled:opacity-70 disabled:cursor-not-allowed">
                  {isSubmitting ? 'Sending...' : 'Send Message'} {!isSubmitting && <span>→</span>}
                </motion.button>
              </div>
            </form>
          </motion.div>

        </div>
      </section>

      {/* SECTION 2: GRID FOR DIRECT DEPARTMENT LINES */}
      <section className="bg-slate-100 border-y border-slate-200 py-24 mb-32 relative">
        <div className="absolute inset-0 w-full h-full opacity-20 bg-[url('https://www.transparenttextures.com/patterns/az-subtle.png')]"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[10px] font-bold text-blue-600 uppercase tracking-[0.2em] block mb-2">Direct Lines</span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-950 uppercase">Reach the right team</h2>
            <p className="text-slate-600 mt-3 font-medium leading-relaxed">Skip the main queue. Email the relevant department directly for a faster response.</p>
          </div>

          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {departments.map((dept, i) => (
              <motion.div key={i} variants={itemVariants} whileHover={{ y: -5, boxShadow: "0 20px 70px -30px rgba(59, 130, 246, 0.35)", border: "1px solid rgba(59, 130, 246, 0.3)" }} className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm transition-all flex flex-col justify-between h-full group">
                <div>
                  <div className="w-12 h-12 bg-slate-50 text-3xl flex items-center justify-center rounded-2xl mb-6 group-hover:scale-110 transition-transform">{dept.icon}</div>
                  <h3 className="font-bold text-slate-950 uppercase tracking-wide text-sm mb-2">{dept.title}</h3>
                  <p className="text-xs text-slate-500 font-medium leading-relaxed mb-6 h-12 overflow-hidden">{dept.desc}</p>
                </div>
                <div className="space-y-1.5 pt-4 border-t border-slate-100 text-xs md:text-sm">
                  <a href={`mailto:${dept.email}`} className="block text-blue-600 font-semibold hover:underline">{dept.email}</a>
                  <div className="text-slate-600 font-semibold">📞 +91 92713 0782 <span className="text-slate-400 font-medium">({dept.ext})</span></div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SECTION 3: MAP WORKFLOW WITH SEAMLESS STATE TABS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32 relative z-10">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-10 border-b border-slate-200 pb-6">
          <div>
            <span className="text-[10px] font-bold text-blue-600 uppercase tracking-[0.2em] block mb-2">Location Hubs</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-950 uppercase tracking-tight">Our Office Network</h2>
          </div>
          
          <div className="flex flex-wrap bg-white p-1 rounded-2xl border border-slate-200 shadow-sm relative overflow-hidden">
            {locTabs.map((tab) => {
              const isActive = activeLocation === tab.key;
              return (
                <button
                  key={tab.key}
                  type="button"
                  onClick={() => setActiveLocation(tab.key)}
                  className={`relative px-5 py-3.5 text-xs font-bold rounded-xl uppercase tracking-wider transition-all ${
                    isActive ? 'text-white' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  {isActive && <motion.div layoutId="mapTabBackground" className="absolute inset-0 bg-slate-900 rounded-xl z-0" transition={{ type: "spring", bounce: 0.2, duration: 0.6 }} />}
                  <span className="relative z-10">{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[500px] gap-8">
          <div className="lg:col-span-4 flex flex-col justify-between space-y-6">
            <AnimatePresence mode="wait">
              <motion.div key={activeLocation} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }} transition={{ duration: 0.4 }} className="bg-white p-8 rounded-3xl border border-slate-200 shadow-xl shadow-blue-500/5 h-full relative">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-blue-100 blur-[80px] rounded-full pointer-events-none"></div>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-1">{locations[activeLocation].title}</span>
                <h3 className="font-extrabold text-slate-950 text-base md:text-lg mb-1">{locations[activeLocation].cityState}</h3>
                <p className="text-sm text-slate-500 font-medium leading-relaxed mb-6">{locations[activeLocation].address}</p>
                <div className="pt-6 border-t border-slate-100 space-y-2 text-sm text-slate-800 font-bold">
                  <p>📞 +91 92713 0782</p>
                  <p className="text-slate-600 font-medium">⏱️ Mon-Fri: 9AM - 7PM IST</p>
                  <p className="text-rose-500 font-medium">⏱️ Sunday: Closed</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.6 }} className="lg:col-span-8 bg-slate-100 relative min-h-[400px] lg:min-h-full rounded-3xl overflow-hidden border border-slate-200 shadow-lg shadow-blue-500/5">
            <iframe src={locations[activeLocation].embedUrl} width="100%" height="100%" style={{ border: 0 }} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="absolute inset-0 w-full h-full"></iframe>
          </motion.div>
        </div>
      </section>

      {/* SECTION 4: GLOBAL PRESENCE INTERNATIONAL NETWORK */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32 relative z-10">
        <div className="flex justify-between items-center border-b border-slate-200 pb-4 mb-10">
          <div>
            <span className="text-[10px] font-bold text-blue-600 uppercase tracking-[0.2em] block mb-2">Global Presence</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-950 uppercase tracking-tight leading-tight">International Network</h2>
          </div>
          <Link href="/company/network" className="text-xs md:text-sm font-bold text-blue-600 hover:underline">Full Network →</Link>
        </div>

        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {globalNetwork.map((item, i) => (
            <motion.div key={i} variants={itemVariants} whileHover={{ y: -5, borderColor: "rgba(59, 130, 246, 0.3)" }} className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between items-start group transition-all hover:shadow-lg">
              <div className="w-full">
                <div className="text-2xl font-bold text-slate-400 mb-3 group-hover:scale-110 transition-transform origin-left">{item.flag}</div>
                <h3 className="font-extrabold text-slate-900 tracking-wider text-xs uppercase mb-0.5">{item.country}</h3>
                <h4 className="text-[10px] font-bold text-blue-600 uppercase tracking-wide mb-3">{item.city}</h4>
                <p className="text-[11px] text-slate-500 font-medium leading-normal line-clamp-3 mb-4 h-10 overflow-hidden">{item.desc}</p>
              </div>
              <a href={`mailto:${item.email}`} className="text-[10px] font-bold text-blue-600 truncate w-full hover:underline pt-3 border-t border-slate-100 group-hover:text-blue-700">
                {item.email}
              </a>
            </motion.div>
          ))}
        </motion.div>
      </section>

    </main>
  );
}

// Wrap inside Suspense as required by Next.js 13+ when using useSearchParams
export default function ContactPage() {
  return (
    <Suspense fallback={<div className="pt-32 text-center text-sm font-bold text-blue-600">Loading Contact System...</div>}>
      <ContactContent />
    </Suspense>
  );
}
