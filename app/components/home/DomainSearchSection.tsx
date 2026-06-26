'use client';

import React, { useState } from 'react';

export default function DomainSearchSection() {
  const [domainName, setDomainName] = useState('');
  const [tld, setTld] = useState('.com');
  const [isSearching, setIsSearching] = useState(false);
  const [result, setResult] = useState<{ domain: string; available: boolean; price?: number } | null>(null);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!domainName.trim()) return;

    setIsSearching(true);
    setResult(null);

    const fullDomain = `${domainName.trim().toLowerCase()}${tld}`;

    try {
      /*
       * Legacy GoDaddy endpoint:
       * const res = await fetch('/api/check-domain', { ... });
       */
      const res = await fetch('/api/domains/check', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ domain: fullDomain }),
      });
      const data = await res.json();
      setResult(data);
    } catch (error) {
      console.error("Failed to fetch domain", error);
    } finally {
      setIsSearching(false);
    }
  };

  return (
    <section className="relative py-20 bg-[#0f172a] overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-emerald-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-4">
          Find Your Perfect <span className="text-blue-500">Domain Name</span>
        </h2>
        <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto">
          Enter the name of your dream website and we will check its availability across the global registry instantly.
        </p>

        {/* The Premium Search Box */}
        <form onSubmit={handleSearch} className="max-w-3xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center bg-white p-2 rounded-2xl shadow-2xl focus-within:ring-4 focus-within:ring-blue-500/30 transition-all duration-300">
            
            {/* Input Field */}
            <div className="flex-1 flex items-center px-4 w-full sm:w-auto">
              <svg className="w-6 h-6 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
              <input
                type="text"
                placeholder="type your idea here..."
                value={domainName}
                onChange={(e) => setDomainName(e.target.value)}
                className="w-full bg-transparent border-none focus:ring-0 text-lg md:text-xl text-slate-800 px-4 py-4 outline-none placeholder-slate-300"
                required
              />
            </div>

            {/* TLD Dropdown (.com, .in, etc) */}
            <div className="border-t sm:border-t-0 sm:border-l border-slate-200 w-full sm:w-auto">
              <select 
                value={tld} 
                onChange={(e) => setTld(e.target.value)}
                className="w-full sm:w-32 bg-transparent text-slate-600 text-lg font-bold py-4 px-4 cursor-pointer outline-none focus:ring-0 border-none appearance-none"
              >
                <option value=".com">.com</option>
                <option value=".in">.in</option>
                <option value=".org">.org</option>
                <option value=".co.in">.co.in</option>
                <option value=".net">.net</option>
                <option value=".ai">.ai</option>
              </select>
            </div>

            {/* Submit Button */}
            <button 
              type="submit" 
              disabled={isSearching}
              className="w-full sm:w-auto mt-2 sm:mt-0 bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg px-10 py-4 rounded-xl transition-colors duration-300 flex items-center justify-center gap-2 disabled:opacity-70"
            >
              {isSearching ? (
                <>
                  <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                  Searching...
                </>
              ) : (
                "Search"
              )}
            </button>
          </div>
        </form>

        {/* Results Area */}
        <div className="mt-8 max-w-3xl mx-auto min-h-[100px]">
          {result && (
            <div className={`p-6 rounded-2xl border backdrop-blur-sm animate-in fade-in slide-in-from-bottom-4 duration-500 ${
              result.available 
                ? "bg-emerald-900/40 border-emerald-500/30" 
                : "bg-rose-900/40 border-rose-500/30"
            }`}>
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="text-left">
                  <h3 className="text-2xl font-bold text-white tracking-wide">{result.domain}</h3>
                  <p className={`text-sm mt-1 font-medium ${result.available ? "text-emerald-400" : "text-rose-400"}`}>
                    {result.available ? "🎉 Congratulations! This domain is available." : "😔 Sorry, this domain is already taken."}
                  </p>
                </div>
                
                {result.available && (
                  <div className="flex items-center gap-6">
                    <div className="text-right">
                      <span className="block text-xs text-slate-400 uppercase tracking-widest">Special Price</span>
                      <span className="text-2xl font-black text-white">₹{result.price}<span className="text-sm font-normal text-slate-400">/yr</span></span>
                    </div>
                    <button className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold px-6 py-3 rounded-lg transition-colors">
                      Add to Cart
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
