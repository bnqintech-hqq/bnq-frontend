import Link from 'next/link';

export default function ServicesSection() {
  const services = [
    { icon: "🖥️", title: "Hosting & VPS", desc: "High-performance shared, cloud, and dedicated hosting with SLA-backed uptime.", href: "/hosting", delay: "reveal-delay-1" },
    { icon: "💻", title: "Software & App Dev", desc: "Custom web/mobile apps, ERP/CRM systems, and SaaS products built with scalable architecture.", href: "/software", delay: "reveal-delay-2" },
    { icon: "🏗️", title: "Data Center", desc: "Enterprise-grade colocation, cloud backup, disaster recovery, and network security.", href: "/data-center", delay: "reveal-delay-3" },
    { icon: "📞", title: "Call Center & BPO", desc: "Professional inbound/outbound support, lead generation, and business process outsourcing.", href: "/call-center", delay: "reveal-delay-4" },
    { icon: "🏛️", title: "Portal Solutions", desc: "Complex, high-traffic portals for government, healthcare, education, and finance sectors.", href: "/portals", delay: "reveal-delay-5" },
    { icon: "🤝", title: "Partner Programs", desc: "Become a reseller, channel partner, or join our white-label program for mutual growth.", href: "/partners", delay: "reveal-delay-6" }
  ];

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-950 tracking-tighter leading-tight">
            Complete IT Solutions Under One Roof
          </h2>
          <p className="mt-5 text-lg text-slate-600 max-w-2xl mx-auto font-light leading-relaxed">
            Everything your business needs to grow digitally — from high-performance infrastructure to execution.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div 
              key={idx} 
              className={`relative p-8 rounded-3xl bg-white border border-slate-100 
                          shadow-[0_4px_20px_rgba(0,0,0,0.01)] 
                          transition-all duration-500 ease-in-out 
                          hover:-translate-y-2 hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.06)] 
                          hover:border-blue-100 group overflow-hidden 
                          animate-reveal-card ${service.delay}`}
            >
              {/* Subtle Top Accent Line (Reveals on Hover) */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-cyan-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-in-out"></div>
              
              {/* Icon Container */}
              <div className="relative mb-8 flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-50 border border-blue-100/50 shadow-inner group-hover:scale-105 transition-transform duration-300 ease-out">
                {/* Internal emoji move */}
                <div className="text-4xl group-hover:rotate-[-10deg] group-hover:scale-110 transition-transform duration-300 ease-out">
                  {service.icon}
                </div>
              </div>
              
              {/* Content */}
              <h3 className="text-2xl font-bold text-slate-950 mb-4 tracking-tight">
                {service.title}
              </h3>
              <p className="text-slate-600 mb-8 text-sm leading-relaxed font-light">
                {service.desc}
              </p>
              
              {/* Animated Link */}
              <Link href={service.href} className="inline-flex items-center gap-2 text-blue-600 font-bold text-sm group/link">
                <span>Explore Plans</span>
                {/* Arrow Shifts Smoothly */}
                <span className="transform translate-x-0 group-hover/link:translate-x-1.5 transition-transform duration-300 ease-out">→</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}