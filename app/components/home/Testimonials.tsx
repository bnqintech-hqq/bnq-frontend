"use client"; // <-- Yeh sabse upar hona chahiye, imports se bhi pehle!

import React from "react";
import { motion } from "framer-motion";

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      quote: "BNQinTECH migrated our entire infrastructure to cloud VPS with zero downtime. Their support team is incredibly responsive.",
      initials: "RK",
      name: "Rajesh Kumar",
      title: "Director, TechRetail",
      gradient: "from-cyan-500 to-blue-500",
    },
    {
      id: 2,
      quote: "We needed a complex government portal built in 60 days. BNQinTECH delivered on time, with all compliance requirements met perfectly.",
      initials: "PM",
      name: "Priya Mehta",
      title: "Project Head, Municipal Corp",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      id: 3,
      quote: "The reseller program gave my agency a massive revenue boost. White-label hosting plus their backend support means I can focus purely on sales.",
      initials: "AS",
      name: "Amit Shah",
      title: "Founder, DigiGrow",
      gradient: "from-amber-400 to-orange-500",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.8 },
    show: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { type: "spring" as const, bounce: 0.4, duration: 0.8 }
    },
  };

  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden font-sans">
      {/* Continuously Moving Background Blurs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full overflow-hidden pointer-events-none z-0">
        <motion.div 
          animate={{ y: [0, -30, 0], scale: [1, 1.1, 1] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-600/20 blur-[120px]"
        />
        <motion.div 
          animate={{ y: [0, 30, 0], scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
          className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-purple-600/20 blur-[120px]"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Animated Heading */}
        <motion.div 
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
            Loved by <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Tech Leaders</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Real stories from founders, startups, and global teams who scale with us.
          </p>
        </motion.div>

        {/* Animated Cards Container */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial) => (
            <motion.div variants={cardVariants} key={testimonial.id} className="relative group">
              
              <div className={`absolute inset-0 bg-gradient-to-r ${testimonial.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`}></div>

              <div className="relative h-full p-[1px] rounded-3xl bg-gradient-to-b from-slate-800 to-slate-900 overflow-hidden">
                <div className="relative h-full bg-slate-900/90 backdrop-blur-xl p-8 rounded-[23px] flex flex-col justify-between transition-transform duration-500 group-hover:-translate-y-2">
                  
                  <motion.div 
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    className="absolute top-6 right-8 opacity-10 text-white"
                  >
                    <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </motion.div>

                  <div>
                    <div className="flex gap-1 mb-6">
                      {[...Array(5)].map((_, i) => (
                        <motion.svg 
                          key={i}
                          initial={{ opacity: 0, rotate: -45 }}
                          whileInView={{ opacity: 1, rotate: 0 }}
                          transition={{ delay: 0.5 + (i * 0.1) }}
                          className="w-5 h-5 text-yellow-500 drop-shadow-[0_0_8px_rgba(234,179,8,0.5)]" 
                          fill="currentColor" viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </motion.svg>
                      ))}
                    </div>

                    <p className="text-slate-300 leading-relaxed mb-8 relative z-10">
                      "{testimonial.quote}"
                    </p>
                  </div>

                  <div className="flex items-center mt-6 pt-6 border-t border-slate-800">
                    <div className={`p-[2px] rounded-full bg-gradient-to-r ${testimonial.gradient} mr-4`}>
                      <div className="w-12 h-12 bg-slate-950 rounded-full flex items-center justify-center font-bold text-white tracking-wider">
                        {testimonial.initials}
                      </div>
                    </div>
                    <div>
                      <p className="font-bold text-slate-100">{testimonial.name}</p>
                      <p className="text-sm text-slate-400">{testimonial.title}</p>
                    </div>
                  </div>
                  
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}