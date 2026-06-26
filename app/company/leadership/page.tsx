import Link from 'next/link';

export default function LeadershipPage() {
  const coreTeam = [
    {
      name: "Mr. Siddharath Gautam",
      role: "Head of Engineering",
      desc: "Architecting scalable systems and full-stack digital perfection.",
      initials: "SG",
      color: "from-blue-600 to-cyan-400",
      ringColor: "border-cyan-400",
      delay: "animate-fade-in-up-delay-1"
    },
    {
      name: "Mr. Mahesh Pawar",
      role: "Software Engineer",
      desc: "Driving operational excellence and seamless digital delivery.",
      initials: "MP",
      color: "from-indigo-600 to-blue-500",
      ringColor: "border-indigo-400",
      delay: "animate-fade-in-up-delay-2"
    },
    {
      name: "Mr. Piyush Salunke",
      role: "Software Engineer",
      desc: "Fueling business growth with robust IT infrastructure.",
      initials: "PS",
      color: "from-emerald-500 to-teal-400",
      ringColor: "border-teal-400",
      delay: "animate-fade-in-up-delay-3" // Just a custom delay logic for staggered entry
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 pt-41 pb-32 relative overflow-hidden flex flex-col justify-center">
      
      {/* Animated Floating Orbs in Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-blue-300/20 blur-[120px] animate-[float_8s_ease-in-out_infinite]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[30vw] h-[30vw] rounded-full bg-cyan-300/20 blur-[100px] animate-[float_6s_ease-in-out_3s_infinite]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header - Center Aligned */}
        <div className="text-center mb-24 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/5 border border-slate-900/10 mb-6 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
            <span className="text-slate-700 font-bold tracking-[0.15em] uppercase text-xs">Meet The Visionaries</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 tracking-tight mb-6">
            The Minds Behind<br/>BNQinTECH
          </h1>
        </div>

        {/* 1. FOUNDER / CEO SECTION - Borderless & Floating */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20 mb-32 group animate-fade-in-up-delay-1">
          
          {/* Animated Orbital Avatar */}
          <div className="relative w-56 h-56 shrink-0 flex items-center justify-center">
            {/* Glowing Aura */}
            <div className="absolute inset-0 bg-blue-500 blur-2xl opacity-30 group-hover:opacity-50 group-hover:scale-110 transition-all duration-700"></div>
            
            {/* Rotating Rings */}
            <div className="absolute inset-[-10px] border-[2px] border-dashed border-blue-400/60 rounded-full animate-[spin_15s_linear_infinite]"></div>
            <div className="absolute inset-[-25px] border border-cyan-400/30 rounded-full animate-[spin_20s_linear_infinite_reverse]"></div>
            
            {/* Core Avatar */}
            <div className="relative w-48 h-48 rounded-full bg-gradient-to-b from-slate-900 to-blue-950 flex items-center justify-center text-white text-6xl font-extrabold shadow-2xl group-hover:-translate-y-2 transition-transform duration-500">
              SS
              {/* Floating Crown Badge */}
              <div className="absolute -bottom-2 -right-2 bg-gradient-to-tr from-amber-400 to-yellow-600 w-14 h-14 rounded-full border-[3px] border-slate-50 flex items-center justify-center text-2xl shadow-[0_0_20px_rgba(251,191,36,0.6)] animate-bounce">
                👑
              </div>
            </div>
          </div>
          
          {/* Founder Details - Text floating without boxes */}
          <div className="text-center lg:text-left max-w-2xl relative">
            <h4 className="text-blue-600 font-bold uppercase tracking-[0.2em] text-sm mb-2 opacity-80">Founder & Managing Director</h4>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">Ms. Stena Shah</h2>
            <p className="text-slate-600 text-lg md:text-xl leading-relaxed font-light">
              With a profound vision for the future of IT, Sanjay directs BNQinTECH's global roadmap. He is dedicated to empowering enterprises through cutting-edge technology, resilient infrastructure, and unprecedented digital scalability.
            </p>
          </div>
        </div>

        {/* 2. CORE TEAM - Staggered Floating Elements */}
        <div className="flex flex-wrap justify-center gap-x-16 gap-y-20">
          {coreTeam.map((member, idx) => (
            <div 
              key={idx} 
              className={`relative flex flex-col items-center text-center max-w-[280px] group ${member.delay} hover:-translate-y-4 transition-transform duration-500 ease-out`}
            >
              {/* Background Hover Aura */}
              <div className={`absolute top-0 w-48 h-48 bg-gradient-to-tr ${member.color} blur-[60px] opacity-0 group-hover:opacity-40 transition-opacity duration-700 pointer-events-none`}></div>
              
              {/* Animated Avatar */}
              <div className="relative w-32 h-32 mb-8 flex items-center justify-center">
                {/* Custom Rotating Orbit for each member */}
                <div className={`absolute inset-[-12px] border-[1.5px] border-dashed ${member.ringColor} rounded-full opacity-40 group-hover:opacity-100 animate-[spin_12s_linear_infinite] transition-opacity duration-500`}></div>
                
                <div className={`w-full h-full rounded-full bg-gradient-to-br ${member.color} flex items-center justify-center text-white text-4xl font-bold shadow-lg relative z-10 overflow-hidden`}>
                  {/* Internal Shimmer */}
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out"></div>
                  <span className="relative z-10">{member.initials}</span>
                </div>
              </div>
              
              {/* Floating Details */}
              <h3 className="text-2xl font-bold text-slate-900 mb-2">{member.name}</h3>
              <div className="inline-block px-4 py-1.5 rounded-full bg-slate-900 text-white font-medium text-xs tracking-wider uppercase mb-4 shadow-md group-hover:bg-blue-600 transition-colors duration-300">
                {member.role}
              </div>
              <p className="text-slate-500 text-sm font-light leading-relaxed">
                {member.desc}
              </p>
              
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}