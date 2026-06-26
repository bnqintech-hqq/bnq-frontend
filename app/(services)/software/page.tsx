import Link from 'next/link';

export default function SoftwarePage() {
  // Clean architecture: Data array for easy mapping and future updates
  const softwareServices = [
    {
      title: "Custom Development",
      desc: "Scalable Web apps, cross-platform Mobile apps, robust APIs, and SaaS platforms built for high performance.",
      icon: "💻",
      color: "from-blue-600 to-cyan-400",
      bgLight: "bg-blue-50",
      link: "/software/web-apps"
    },
    {
      title: "Enterprise Systems",
      desc: "Custom ERP, CRM, and business automation solutions to streamline your daily operations and scale growth.",
      icon: "🏢",
      color: "from-indigo-600 to-blue-500",
      bgLight: "bg-indigo-50",
      link: "/software/erp-crm"
    },
    {
      title: "UI/UX & Branding",
      desc: "Stunning user interfaces, intuitive user experiences, and complete brand identity design.",
      icon: "🎨",
      color: "from-purple-500 to-pink-500",
      bgLight: "bg-purple-50",
      link: "/software/ui-ux"
    },
    {
      title: "Quality Assurance",
      desc: "Comprehensive manual and automated testing to ensure secure, bug-free, and flawless product launches.",
      icon: "✅",
      color: "from-emerald-500 to-teal-400",
      bgLight: "bg-emerald-50",
      link: "/software/qa"
    }
  ];

  return (
    <main className="min-h-screen bg-slate-50 pt-32 pb-24 relative overflow-hidden flex flex-col items-center">
      
      {/* Subtle Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[500px] bg-blue-400/10 blur-[120px] rounded-full pointer-events-none z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-20 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100/50 border border-blue-200 mb-6 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
            <span className="text-blue-700 font-bold tracking-[0.15em] uppercase text-xs">Innovation Hub</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight mb-6">
            Software Development
          </h1>
          <p className="text-lg md:text-xl text-slate-600 font-light leading-relaxed">
            Transforming ideas into powerful digital products. We build modern, secure, and scalable software tailored to your business needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {softwareServices.map((service, idx) => (
            <Link 
              href={service.link} 
              key={idx}
              className="group relative bg-white rounded-3xl p-8 lg:p-10 border border-slate-200 hover:border-blue-200 shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(37,99,235,0.15)] transition-all duration-500 hover:-translate-y-2 overflow-hidden flex flex-col h-full"
            >
              {/* Subtle Gradient Line on top */}
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${service.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>

              <div className="flex items-start gap-6 mb-6">
                {/* Animated Icon Box */}
                <div className={`w-16 h-16 shrink-0 rounded-2xl flex items-center justify-center text-3xl shadow-inner border border-white/50 relative z-10 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 ${service.bgLight}`}>
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-20 rounded-2xl transition-opacity duration-500`}></div>
                  <span className="relative z-10">{service.icon}</span>
                </div>
                
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mt-2 tracking-tight group-hover:text-blue-700 transition-colors duration-300">
                  {service.title}
                </h2>
              </div>

              <p className="text-slate-600 text-[15px] leading-relaxed mb-8 flex-grow">
                {service.desc}
              </p>

              {/* Action Link */}
              <div className="flex items-center gap-2 text-sm font-bold text-blue-600 uppercase tracking-wider mt-auto pt-4 border-t border-slate-100">
                Explore Services
                <span className="transform translate-x-0 group-hover:translate-x-2 transition-transform duration-300 text-lg">→</span>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </main>
  );
}