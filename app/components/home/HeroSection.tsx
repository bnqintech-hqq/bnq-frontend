'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

type DomainSearchResult = {
  domain?: string;
  available?: boolean;
  price?: number | null;
  error?: string;
  message?: string;
};

export default function HeroSection() {
  const [domainName, setDomainName] = useState('');
  const [tld, setTld] = useState('.com');
  const [isSearching, setIsSearching] = useState(false);
  const [result, setResult] = useState<DomainSearchResult | null>(null);
  
  const router = useRouter();

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!domainName.trim()) return;

    setIsSearching(true);
    setResult(null);

    const fullDomain = `${domainName.trim().toLowerCase()}${tld}`;

    try {
      const res = await fetch('/api/domains/check', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ domain: fullDomain }),
      });
      const data = await res.json();
      setResult(res.ok ? data : { ...data, available: false, domain: fullDomain });
    } catch (error) {
      console.error("Failed to fetch domain", error);
      setResult({
        available: false,
        domain: fullDomain,
        error: "Domain search is temporarily unavailable. Please try again shortly.",
      });
    } finally {
      setIsSearching(false);
    }
  };

  const handleAddToCart = () => {
    if (!result || !result.domain) return;

    localStorage.setItem('selectedDomain', result.domain);
    localStorage.setItem('checkoutDomain', result.domain);
    if (result.price) {
      localStorage.setItem('domainPrice', result.price.toString());
    }

    router.push(`/checkout?domain=${result.domain}&price=${result.price}`);
  };

  return (
    <section className="bg-slate-950 text-white pb-20 lg:pb-32 pt-40 lg:pt-48 -mt-28 lg:-mt-32 relative overflow-hidden">
      {/* 🔴 FIX: Added negative margins (-mt-28 lg:-mt-32) to pull the section up and hide the gap */}
      
      {/* Background Glow */}
      <div className="absolute top-0 inset-x-0 h-full overflow-hidden z-0 opacity-30 pointer-events-none">
        <div className="absolute -top-40 right-10 w-[40rem] h-[40rem] bg-blue-600/20 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          
          <h2 className="text-blue-500 font-bold tracking-widest uppercase text-xs mb-6">
            Build Your Online Identity Today.
          </h2>
          
          {/* Responsive Typography */}
          <h1 className="text-4xl md:text-5xl lg:text-[4rem] font-extrabold tracking-tight mb-8 leading-[1.15]">
            We Build Scalable Software <br className="hidden lg:block" />
            <span className="text-blue-400">
              That Grows With Your Business
            </span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl text-slate-400 mb-10 leading-relaxed font-light">
            We design and engineer web & mobile products with clean architecture, business-first thinking, and long-term scalability — trusted by growing teams worldwide.
          </p>

          {/* 🔥 MOBILE RESPONSIVE DOMAIN SEARCH BAR 🔥 */}
          <div className="mb-10 max-w-2xl">
            <form onSubmit={handleSearch} className="flex flex-col sm:flex-row items-center bg-white p-1.5 rounded-xl shadow-2xl focus-within:ring-4 focus-within:ring-blue-500/30 transition-all duration-300 gap-2 sm:gap-0">
              
              {/* Input & Dropdown Wrapper for Mobile (Side-by-Side) */}
              <div className="flex w-full sm:flex-1 bg-slate-50 sm:bg-transparent rounded-lg sm:rounded-none border border-slate-200 sm:border-none">
                <div className="flex-1 flex items-center px-3 sm:px-4 h-14">
                  <span className="text-slate-400 font-bold text-base sm:text-lg mr-1 hidden sm:block">www.</span>
                  <input
                    type="text"
                    placeholder="find your perfect domain..."
                    value={domainName}
                    onChange={(e) => setDomainName(e.target.value)}
                    className="w-full bg-transparent border-none focus:ring-0 text-base sm:text-lg font-medium text-slate-800 outline-none placeholder-slate-400"
                    required
                  />
                </div>

                <div className="border-l border-slate-200">
                  <select 
                    value={tld} 
                    onChange={(e) => setTld(e.target.value)}
                    className="w-[80px] sm:w-28 h-full bg-transparent text-slate-600 text-base sm:text-lg font-bold px-2 sm:px-4 cursor-pointer outline-none border-none appearance-none text-center"
                  >
                    <option value=".com">.com</option>
                    <option value=".in">.in</option>
                    <option value=".co.in">.co.in</option>
                    <option value=".org">.org</option>
                    <option value=".net">.net</option>
                  </select>
                </div>
              </div>

              {/* Button */}
              <button 
                type="submit" 
                disabled={isSearching}
                className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm px-8 py-4 sm:py-3.5 rounded-lg sm:rounded-r-lg sm:rounded-l-none transition-colors flex items-center justify-center gap-2 disabled:opacity-70 h-14"
              >
                {isSearching ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                    Checking
                  </>
                ) : (
                  "Search"
                )}
              </button>
            </form>

            {/* Live Search Results */}
            {result && (
              <div className={`mt-4 p-4 rounded-xl backdrop-blur-md border animate-in fade-in slide-in-from-top-2 duration-300 ${
                result.available
                  ? "bg-emerald-900/20 border-emerald-500/30" 
                  : "bg-rose-900/20 border-rose-500/30"
              }`}>
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <p className="text-white font-bold text-lg break-all">{result.domain}</p>
                    <p className={`text-sm font-medium mt-1 ${result.available ? "text-emerald-400" : "text-rose-400"}`}>
                      {result.available ? "Domain is available!" : result.error || result.message || "Sorry, this domain is taken."}
                    </p>
                  </div>
                  {result.available && (
                    <div className="flex flex-row sm:flex-row items-center justify-between w-full sm:w-auto gap-4">
                      <div className="text-left sm:text-right">
                        <span className="text-xl font-black text-white">₹{result.price}</span>
                        <span className="text-xs text-slate-400 block">/year</span>
                      </div>
                      <button 
                        onClick={handleAddToCart}
                        className="bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-bold px-5 py-2.5 rounded-md transition-colors whitespace-nowrap"
                      >
                        Add to Cart
                      </button>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 border-t border-slate-800 pt-8">
            <Link href="/company/contact" className="bg-slate-800 hover:bg-slate-700 text-white px-8 py-4 rounded-lg font-bold text-sm transition-colors text-center shadow-lg">
              BOOK A FREE CONSULTATION
            </Link>
            
            <Link href="#pricing" className="bg-transparent hover:bg-slate-900 text-white px-8 py-4 rounded-lg font-bold text-sm transition-colors border border-slate-700 text-center">
              View Hosting Plans
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}