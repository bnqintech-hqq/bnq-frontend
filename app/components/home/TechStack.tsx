export default function TechStack() {
  // Navbar ki services ke hisaab se categorized Tech Stack
  const techCategories = [
    {
      title: "Frontend & UI",
      icon: "🎨",
      color: "from-pink-500 to-rose-400",
      bgLight: "bg-rose-50",
      borderHover: "hover:border-rose-300",
      textHover: "hover:text-rose-600",
      techs: ["React.js", "Next.js", "JavaScript", "HTML-5", "CSS-3", "Tailwind CSS", "Material UI", "Vue.js"]
    },
    {
      title: "Backend & Databases",
      icon: "⚙️",
      color: "from-blue-600 to-cyan-500",
      bgLight: "bg-blue-50",
      borderHover: "hover:border-blue-300",
      textHover: "hover:text-blue-600",
      techs: ["Node.js", "PostgreSQL", "Express.js", "MySQL", "PHP", "Redis", "REST APIs", "Serverless"]



    },
    {
      title: "Cloud & Infrastructure",
      icon: "☁️",
      color: "from-violet-600 to-purple-500",
      bgLight: "bg-purple-50",
      borderHover: "hover:border-purple-300",
      textHover: "hover:text-purple-600",
      techs: ["AWS", "Docker", "Kubernetes", "Linux", "Nginx", "cPanel", "Cloudflare", "VMware"]
    },
    {
      title: "Mobile & Ecosystem",
      icon: "📱",
      color: "from-emerald-500 to-teal-400",
      bgLight: "bg-teal-50",
      borderHover: "hover:border-teal-300",
      textHover: "hover:text-teal-600",
      techs: ["React Native", "Flutter", "WordPress", "WhatsApp API", "VoIP / Asterisk", "Figma", "Git"]
    }
  ];

  return (
    <section className="py-24 bg-white border-y border-slate-100 relative overflow-hidden">
      
      {/* Subtle Background Elements */}
      <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-slate-50 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
            Technologies We Work With
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto font-light">
            A modern, enterprise-grade technology stack powering our scalable hosting, portals, and digital solutions.
          </p>
        </div>
        
        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {techCategories.map((category, idx) => (
            <div 
              key={idx} 
              className="bg-white rounded-3xl p-6 border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-xl transition-all duration-300 group"
            >
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-xl bg-gradient-to-br ${category.color} text-white shadow-md group-hover:scale-110 transition-transform duration-300`}>
                  {category.icon}
                </div>
                <h3 className="font-bold text-slate-800 text-lg">
                  {category.title}
                </h3>
              </div>

              {/* Tech Pills */}
              <div className="flex flex-wrap gap-2.5">
                {category.techs.map((tech, i) => (
                  <span 
                    key={i} 
                    className={`px-3 py-1.5 text-[13px] font-semibold text-slate-600 bg-slate-50 border border-slate-200 rounded-lg cursor-default transition-all duration-300 ${category.bgLight} ${category.borderHover} ${category.textHover} hover:-translate-y-0.5`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}


