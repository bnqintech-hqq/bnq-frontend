import Link from 'next/link';

export default function DataCenterPage() {
  // Data Center specific premium content
  const dcServices = [
    {
      title: "Colocation Services",
      desc: "Enterprise-grade, secure, and scalable data center space with redundant power, cooling, and Tier-III/IV compliance for your mission-critical hardware.",
      icon: "🗄️",
      light: "bg-emerald-500", // Green active light
      link: "/data-center/colocation"
    },
    {
      title: "Backup & Disaster Recovery",
      desc: "Automated cloud backups, instant failover orchestration, and robust DRaaS (Disaster Recovery as a Service) to ensure zero data loss.",
      icon: "🔄",
      light: "bg-blue-500", // Blue processing light
      link: "/data-center/backup"
    },
    {
      title: "Network Security & Firewall",
      desc: "Military-grade network defense, proactive DDoS protection, and managed Next-Gen Firewalls (NGFW) to keep your infrastructure impenetrable.",
      icon: "🛡️",
      light: "bg-rose-500", // Red alert/firewall light
      link: "/data-center/security"
    },
    {
      title: "Global Load Balancing",
      desc: "Intelligent traffic distribution and global server load balancing (GSLB) to eliminate bottlenecks and ensure 99.99% high availability.",
      icon: "⚖️",
      light: "bg-cyan-500", // Cyan routing light
      link: "/data-center/load-balancing"
    }
  ];

  return (
    <main className="min-h-screen bg-slate-50 pt-40 pb-24 relative overflow-hidden flex flex-col items-center">
      
      {/* Tech-Grid Background Pattern */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]" 
           style={{ backgroundImage: 'linear-gradient(#0f172a 1px, transparent 1px), linear-gradient(90deg, #0f172a 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-20 animate-fade-in-up">
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-slate-900 border border-slate-700 mb-6 shadow-lg">
            <span className="flex h-3 w-3 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </span>
            <span className="text-slate-200 font-bold tracking-[0.2em] uppercase text-xs">Infrastructure Live</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight mb-6">
            Data Center Solutions
          </h1>
          <p className="text-lg md:text-xl text-slate-600 font-light leading-relaxed">
            Bulletproof infrastructure for the modern enterprise. We provide secure colocation, unbreakable network security, and seamless disaster recovery.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {dcServices.map((service, idx) => (
            <Link 
              href={service.link} 
              key={idx}
              className="group relative bg-white rounded-2xl p-8 border border-slate-200 hover:border-slate-800 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden flex flex-col h-full"
            >
              {/* Server Rack Side Accent */}
              <div className="absolute top-0 left-0 w-1.5 h-full bg-slate-100 group-hover:bg-slate-800 transition-colors duration-500 flex flex-col justify-evenly items-center py-4">
                <div className="w-0.5 h-4 bg-slate-300 group-hover:bg-slate-600 rounded-full"></div>
                <div className="w-0.5 h-4 bg-slate-300 group-hover:bg-slate-600 rounded-full"></div>
                <div className="w-0.5 h-4 bg-slate-300 group-hover:bg-slate-600 rounded-full"></div>
              </div>

              <div className="pl-6">
                <div className="flex justify-between items-start mb-6">
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-2xl shadow-inner group-hover:scale-110 transition-transform duration-500">
                    {service.icon}
                  </div>
                  
                  {/* Blinking Status Light */}
                  <div className="flex items-center gap-2 bg-slate-50 px-3 py-1 rounded-full border border-slate-100">
                    <span className={`w-2 h-2 rounded-full ${service.light} animate-pulse shadow-[0_0_8px_currentColor]`}></span>
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Active</span>
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-slate-900 mb-3 tracking-tight group-hover:text-slate-800 transition-colors duration-300">
                  {service.title}
                </h2>

                <p className="text-slate-600 text-[15px] leading-relaxed mb-8 flex-grow">
                  {service.desc}
                </p>

                {/* Animated Bottom Link */}
                <div className="flex items-center gap-2 text-sm font-bold text-slate-900 uppercase tracking-wider mt-auto pt-4 border-t border-slate-100">
                  Deploy Now
                  <span className="transform translate-x-0 group-hover:translate-x-2 transition-transform duration-300">→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </main>
  );
}