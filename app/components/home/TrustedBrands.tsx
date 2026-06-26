export default function TrustedBrands() {
  // Yahan aap apne clients ke naam aur aage chal kar unke logo ki image URL daal sakte hain
  const brands = [
    { name: "Global Baniya", icon: "🛒" },
    { name: "Indravolt Tech", icon: "⚡" },
    { name: "Siddhivinayak Engg", icon: "⚙️" },
    { name: "Vida Sigma", icon: "🧬" },
    { name: "APS Tech", icon: "🚀" },
    { name: "dwi4u", icon: "🌐" }
  ];

  return (
    <section className="bg-white border-b border-slate-100 py-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <p className="text-[11px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-8">
          Trusted by innovative startups and enterprise platforms
        </p>
        
        {/* Logos Container */}
        <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16 lg:gap-20">
          {brands.map((brand, idx) => (
            <div 
              key={idx} 
              className="flex items-center gap-2.5 opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-default group"
            >
              {/* Icon / Future Image Position */}
              <span className="text-2xl opacity-80 group-hover:scale-125 group-hover:opacity-100 transition-all duration-300">
                {brand.icon}
              </span>
              
              {/* Brand Name */}
              <span className="text-lg md:text-xl font-extrabold text-slate-800 tracking-tight whitespace-nowrap">
                {brand.name}
              </span>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}