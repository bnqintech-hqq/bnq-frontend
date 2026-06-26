"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What services does BNQinTECH offer?",
      answer: "We offer end-to-end digital transformation services, including custom web development, mobile app development (iOS & Android), cloud VPS hosting, UI/UX design, and dedicated IT consulting. We build scalable solutions tailored to your business needs."
    },
    {
      question: "What sets you apart from other IT companies?",
      answer: "We combine enterprise-grade quality with startup agility. Our core focus is on scalable architectures, transparent communication, and SLA-backed delivery. We don't just build software; we act as your long-term technology partner."
    },
    {
      question: "Does BNQinTECH offer support after project?",
      answer: "Absolutely. Software is an ongoing asset. We offer comprehensive Annual Maintenance Contracts (AMC) that cover proactive server monitoring, security patching, bug fixes, and continuous performance optimization."
    },
    {
      question: "How do you handle project timelines?",
      answer: "We use Agile methodologies with clear, trackable milestones. Before writing a single line of code, we provide a detailed roadmap. Regular sprint reviews and transparent communication ensure we deliver on time, every time."
    },
    {
      question: "Can I hire dedicated developers from you?",
      answer: "Yes, we offer flexible staff augmentation services. You can hire our top-tier developers, QA engineers, or UX designers on a full-time or part-time basis to integrate seamlessly into your in-house team."
    },
    {
      question: "What is an Annual Maintenance Contract (AMC)?",
      answer: "An AMC is a long-term support agreement where we take full responsibility for your product's health. It ensures your software stays secure, compatible with new updates, and fast enough to handle growing traffic."
    }
  ];

  return (
    <section className="py-32 bg-slate-50 relative overflow-hidden font-sans">
      {/* Premium Background Glow */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-[800px] h-[800px] bg-gradient-to-tr from-blue-100/50 to-indigo-100/50 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Split Layout: Left (Sticky) + Right (Accordions) */}
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* Left Side: Sticky Header & CTA */}
          <div className="lg:w-1/3">
            <div className="sticky top-32">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center mb-8 shadow-lg shadow-blue-500/30">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                
                <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
                  Got questions?<br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                    We've got answers.
                  </span>
                </h2>
                
                <p className="text-lg text-slate-600 mb-10 leading-relaxed">
                  If you can't find what you're looking for, our support team is ready to help you 24/7.
                </p>
                
                <button className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-200 bg-slate-900 font-sans rounded-full hover:bg-slate-800 hover:shadow-xl hover:-translate-y-1 overflow-hidden">
                  <span className="relative z-10 flex items-center gap-2">
                    Contact Support
                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                </button>
              </motion.div>
            </div>
          </div>

          {/* Right Side: Sleek Borderless Accordions */}
          <div className="lg:w-2/3">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="divide-y divide-slate-200 border-t border-slate-200"
            >
              {faqs.map((faq, index) => {
                const isOpen = openIndex === index;

                return (
                  <div key={index} className="group">
                    <button
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      className="w-full py-8 flex justify-between items-center text-left focus:outline-none"
                    >
                      {/* Active question gets gradient text */}
                      <span className={`text-lg md:text-xl font-bold transition-all duration-300 pr-8 ${
                        isOpen 
                          ? "text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600" 
                          : "text-slate-800 group-hover:text-blue-600"
                      }`}>
                        {faq.question}
                      </span>
                      
                      {/* Custom Animated Icon */}
                      <div className="relative flex-shrink-0 w-6 h-6 flex items-center justify-center">
                        <motion.span
                          animate={{ rotate: isOpen ? 180 : 0, opacity: isOpen ? 0 : 1 }}
                          transition={{ duration: 0.3 }}
                          className="absolute w-full h-0.5 bg-slate-400 group-hover:bg-blue-600"
                        />
                        <motion.span
                          animate={{ rotate: isOpen ? 180 : 90, opacity: isOpen ? 0 : 1 }}
                          transition={{ duration: 0.3 }}
                          className="absolute w-full h-0.5 bg-slate-400 group-hover:bg-blue-600"
                        />
                        <motion.span
                          animate={{ rotate: isOpen ? 0 : -90, opacity: isOpen ? 1 : 0 }}
                          transition={{ duration: 0.3 }}
                          className="absolute w-full h-0.5 bg-blue-600"
                        />
                      </div>
                    </button>

                    {/* Fluid Answer Animation */}
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }} // Premium Apple-like easing
                        >
                          <div className="pb-8 pr-12 text-slate-600 leading-relaxed text-base md:text-lg">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}