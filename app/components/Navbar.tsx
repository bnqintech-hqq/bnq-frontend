"use client";

import Image from "next/image";
import Link from "next/link";
import type { FormEvent } from "react";
import { useState, useEffect } from "react";
import { navLinks } from "./menu-data";

type DomainSearchResult = {
  domain?: string;
  isAvailable?: boolean;
  price?: number | null;
  currency?: string;
  error?: string;
  message?: string;
};

type NavItem = {
  name: string;
  href: string;
  type: "link" | "dropdown" | "mega";
  items?: Array<{ name: string; href: string }>;
  columns?: Array<{ title: string; items: Array<{ name: string; href: string }> }>;
};

// --- Tracking Type Definition ---
type UserMeta = {
  ip: string;
  location: string;
  browser: string;
};

const typedNavLinks = navLinks as NavItem[];

function SearchIcon() {
  return (
    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m21 21-6-6m2-5a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z" />
    </svg>
  );
}

function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      {open ? (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18 18 6M6 6l12 12" />
      ) : (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
      )}
    </svg>
  );
}

function normalizeDomainInput(value: string) {
  const domain = value.trim().toLowerCase().replace(/^https?:\/\//, "").replace(/^www\./, "").split("/")[0];
  return domain.includes(".") ? domain : `${domain}.com`;
}

// --- NEW: Helper function to convert Country Code (e.g. "IN") to a Flag Emoji (🇮🇳) ---
function getFlagEmoji(countryCode: string) {
  if (!countryCode) return "";
  const codePoints = countryCode
    .toUpperCase()
    .split("")
    .map((char) => 127397 + char.charCodeAt(0));
  return String.fromCodePoint(...codePoints);
}

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMobileMenu, setActiveMobileMenu] = useState<string | null>(null);
  const [domainQuery, setDomainQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [searchResult, setSearchResult] = useState<DomainSearchResult | null>(null);
  const [searchError, setSearchError] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);

  // --- Tracking State ---
  const [userMeta, setUserMeta] = useState<UserMeta>({ ip: "Fetching...", location: "Locating...", browser: "" });

  useEffect(() => {
    let mounted = true;
    async function fetchUserIdentity() {
      try {
        const response = await fetch("https://get.geojs.io/v1/ip/geo.json");
        if (!response.ok) throw new Error("GeoIP fetch failed");
        const data = await response.json();
        if (!mounted) return;

        const flag = getFlagEmoji(data?.country_code || "");
        const fullAddress = [data?.city, data?.region, data?.country].filter(Boolean).join(", ");
        const userLocation = fullAddress ? `${flag} ${fullAddress}` : "Global User";

        setUserMeta({
          ip: data?.ip || "Unknown IP",
          location: userLocation,
          browser: typeof window !== "undefined" ? navigator.userAgent : "Unknown",
        });
      } catch {
        if (!mounted) return;
        setUserMeta({
          ip: "Captured by Server",
          location: "Location Hidden",
          browser: typeof window !== "undefined" ? navigator.userAgent : "Unknown",
        });
      }
    }
    fetchUserIdentity();
    return () => { mounted = false; };
  }, []);

  // --- Core Tracking Function ---
  const trackAction = async (actionName: string, roleClicked: string) => {
    const logData = {
      event: actionName,
      role_type: roleClicked, 
      ip_address: userMeta.ip,
      location: userMeta.location, // This now contains the FLAG and FULL ADDRESS
      current_page: window.location.pathname,
      browser_details: userMeta.browser
    };

    try {
      await fetch("/api/track", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(logData),
        keepalive: true 
      });
      console.log(`✅ [${actionName}] successfully tracked!`); 
    } catch (error) {
      console.error("🔴 Tracking failed to reach server.");
    }
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setActiveMobileMenu(null);
  };

  const handleDomainSearch = async (event: FormEvent) => {
    event.preventDefault();
    const domain = normalizeDomainInput(domainQuery);
    if (!domain) return;

    trackAction("Domain Search Initiated", `Search Query: ${domain}`);

    setIsSearching(true);
    setShowResult(true);
    setSearchResult(null);
    setSearchError(null);

    try {
      const response = await fetch("/api/domains/check", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ domain }),
      });
      const result = await response.json();

      if (!response.ok || result.error) {
        setSearchError(result.message || result.error || "Domain search is temporarily unavailable.");
        trackAction("Domain Search Failed", "API Error");
        return;
      }

      setSearchResult(result);
      trackAction("Domain Search Success", `Result: ${result.available ? 'Available' : 'Taken'}`);
    } catch (error) {
      console.error("Domain search failed:", error);
      setSearchError("Network error. Make sure your BNQ backend is running.");
      trackAction("Domain Search Error", "Network Failure");
    } finally {
      setIsSearching(false);
    }
  };

  const renderDesktopSubmenu = (menu: NavItem) => {
    if (menu.type === "mega") {
      return (
        <div className="invisible absolute left-1/2 top-full z-50 mt-0 grid w-[650px] max-w-[85vw] -translate-x-1/2 translate-y-2 grid-cols-3 gap-5 rounded-xl border border-slate-100 bg-white p-6 opacity-0 shadow-xl transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
          {menu.columns?.map((column) => (
            <div key={column.title}>
              <p className="mb-3 text-xs font-bold uppercase tracking-wider text-blue-600">{column.title}</p>
              <ul className="space-y-1.5">
                {column.items.map((item) => (
                  <li key={item.href}>
                    <Link 
                      href={item.href} 
                      onClick={() => trackAction("Mega Menu Clicked", item.name)}
                      className="block rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-50 hover:text-blue-700"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      );
    }

    if (menu.type === "dropdown") {
      return (
        <div className="invisible absolute left-1/2 top-full z-50 mt-0 w-56 -translate-x-1/2 translate-y-2 rounded-xl border border-slate-100 bg-white p-2 opacity-0 shadow-xl transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
          <ul className="space-y-1">
            {menu.items?.map((item) => (
              <li key={item.href}>
                <Link 
                  href={item.href} 
                  onClick={() => trackAction("Dropdown Menu Clicked", item.name)}
                  className="block rounded-lg px-3 py-2.5 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-50 hover:text-blue-700"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      );
    }

    return null;
  };

  const resultPanel = showResult ? (
    <div className="mt-2 rounded-xl border border-slate-100 bg-white p-4 shadow-xl xl:absolute xl:right-0 xl:top-full xl:w-[350px] z-50">
      <div className="mb-3 flex items-center justify-between border-b border-slate-100 pb-2">
        <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Search Result</p>
        <button type="button" onClick={() => setShowResult(false)} className="rounded-full bg-slate-50 p-1 text-slate-500 transition hover:bg-slate-200">
          <MenuIcon open />
        </button>
      </div>

      {isSearching ? (
        <div className="py-4 text-center text-sm font-medium text-slate-500 animate-pulse">Checking availability...</div>
      ) : searchError ? (
        <div className="rounded-lg bg-red-50 p-3 text-sm font-medium text-red-600 border border-red-100">{searchError}</div>
      ) : searchResult ? (
        <div>
          <p className="break-words text-lg font-bold text-slate-800">{searchResult.domain}</p>
          {searchResult.isAvailable ? (
            <div className="mt-3 flex items-center justify-between rounded-lg bg-green-50 p-3 border border-green-100">
              <div>
                <p className="text-[11px] font-bold uppercase text-green-700">Available</p>
                <p className="text-sm font-semibold text-slate-700 mt-0.5">Rs. {searchResult.price ?? "Pending"}/yr</p>
              </div>
              <Link 
                href={`/checkout?domain=${searchResult.domain}`} 
                onClick={() => { trackAction("Domain Checkout Clicked", searchResult.domain || ""); closeMobileMenu(); }}
                className="rounded-md bg-green-600 px-4 py-2 text-xs font-bold text-white transition hover:bg-green-700 shadow-sm"
              >
                Buy Now
              </Link>
            </div>
          ) : (
            <div className="mt-3 rounded-lg bg-slate-50 p-3 text-sm font-semibold text-slate-500 border border-slate-200 text-center">
              {searchResult.message || "Oops! This domain is already taken."}
            </div>
          )}
        </div>
      ) : null}
    </div>
  ) : null;

  return (
    <>
      <header className="fixed top-0 z-40 w-full border-b border-slate-200 bg-white shadow-sm">
        {/* Top Info Bar */}
        <div className="hidden bg-slate-900 px-4 py-2 text-xs font-medium text-slate-300 md:block">
          <div className="mx-auto flex max-w-[1400px] items-center justify-between">
            
            {/* Left side with Timing and Auto-Location */}
            <div className="flex items-center gap-6">
              <span>Mon-Sat: 9:00 AM - 7:00 PM</span>
              <span className="flex items-center gap-1.5 text-blue-400 font-semibold border-l border-slate-700 pl-6">
                <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>
                {userMeta.location === "Locating..." ? (
                  <span className="animate-pulse">Detecting Location...</span>
                ) : (
                  <span>{userMeta.location}</span>
                )}
              </span>
            </div>

            <div className="flex items-center gap-5">
              <a className="transition hover:text-white" href="mailto:support@bnqintech.com">support@bnqintech.com</a>
              <a className="transition hover:text-white" href="tel:+919271360782">+91 92 7136 0782</a>
              <div className="flex items-center gap-4 border-l border-slate-700 pl-5">
                <Link onClick={() => trackAction("Login Attempt", "Client")} className="font-semibold text-blue-400 transition hover:text-blue-300" href="/login/client">Client Login</Link>
                <Link onClick={() => trackAction("Login Attempt", "Partner")} className="font-semibold text-blue-400 transition hover:text-blue-300" href="/login/partner">Partner Login</Link>
                <Link onClick={() => trackAction("Login Attempt", "Reseller")} className="font-semibold text-emerald-400 transition hover:text-emerald-300" href="/login/reseller">Reseller Portal</Link>
              </div>
            </div>
          </div>
        </div>

        {/* Main Navbar */}
        <div className="mx-auto flex h-20 max-w-[1400px] items-center justify-between px-5 lg:px-8">
          
          <div className="flex-shrink-0">
            <Link href="/" onClick={() => { trackAction("Logo Clicked", "Home"); closeMobileMenu(); }}>
              <Image src="/1.png" alt="BNQinTECH" width={180} height={45} className="h-9 w-auto lg:h-11 object-contain" priority />
            </Link>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex flex-1 justify-center px-4">
            <ul className="flex items-center gap-6 xl:gap-8">
              {typedNavLinks.map((menu) => (
                <li key={menu.href} className="group relative py-6">
                  <Link 
                    href={menu.href} 
                    onClick={() => trackAction("Main Menu Clicked", menu.name)}
                    className="text-[14px] font-bold text-slate-700 transition hover:text-blue-600"
                  >
                    {menu.name}
                  </Link>
                  {renderDesktopSubmenu(menu)}
                </li>
              ))}
            </ul>
          </nav>

          {/* Right Actions */}
          <div className="hidden lg:flex items-center gap-5 flex-shrink-0">
            {/* Search Bar */}
            <div className="hidden xl:block relative">
              <form onSubmit={handleDomainSearch} className="flex items-center rounded-full border border-slate-200 bg-slate-50 transition-all focus-within:border-blue-400 focus-within:bg-white focus-within:ring-2 focus-within:ring-blue-100">
                <span className="pl-4 text-slate-400"><SearchIcon /></span>
                <input
                  value={domainQuery}
                  onChange={(e) => setDomainQuery(e.target.value)}
                  className="w-44 bg-transparent px-3 py-2.5 text-sm font-medium text-slate-800 outline-none placeholder:text-slate-400"
                  placeholder="Find your domain"
                />
                <button type="submit" disabled={isSearching} className="rounded-r-full bg-slate-900 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white transition hover:bg-blue-600 disabled:opacity-50">
                  Search
                </button>
              </form>
              {resultPanel}
            </div>

            <Link href="/quotation" onClick={() => trackAction("Get Quote Clicked", "Desktop Navbar")} className="rounded-full bg-blue-600 px-6 py-2.5 text-[13px] font-bold uppercase tracking-wide text-white transition hover:bg-blue-700 shadow-sm">
              Get Quote
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="inline-flex lg:hidden items-center justify-center rounded-lg bg-slate-50 p-2 text-slate-600 transition hover:bg-slate-100"
          >
            <MenuIcon open={isMobileMenuOpen} />
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div className={`fixed inset-0 z-40 bg-slate-900/40 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${isMobileMenuOpen ? "opacity-100" : "pointer-events-none opacity-0"}`} onClick={closeMobileMenu} />

      <aside className={`fixed right-0 top-0 z-50 flex h-full w-[85%] max-w-sm flex-col bg-white shadow-2xl transition-transform duration-300 lg:hidden ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}>
        <div className="flex items-center justify-between border-b border-slate-100 px-6 py-5">
          <span className="text-sm font-black tracking-widest text-slate-800">MENU</span>
          <button onClick={closeMobileMenu} className="rounded-full bg-slate-100 p-2 text-slate-600 transition hover:bg-slate-200">
            <MenuIcon open />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-4">
          <form onSubmit={handleDomainSearch} className="mb-6 relative">
            <div className="flex items-center rounded-xl border border-slate-200 bg-slate-50 p-1">
              <span className="pl-3 text-slate-400"><SearchIcon /></span>
              <input
                value={domainQuery}
                onChange={(e) => setDomainQuery(e.target.value)}
                className="w-full bg-transparent px-3 py-2 text-sm font-medium outline-none placeholder:text-slate-400"
                placeholder="Search domain..."
              />
            </div>
            <button type="submit" disabled={isSearching} className="mt-2 w-full rounded-lg bg-blue-600 py-3 text-sm font-bold text-white transition hover:bg-blue-700 disabled:opacity-50">
              Search
            </button>
            {resultPanel}
          </form>

          <nav className="space-y-1">
            {typedNavLinks.map((menu) => {
              const isOpen = activeMobileMenu === menu.name;
              return (
                <div key={menu.href} className="border-b border-slate-100 pb-1">
                  {menu.type === "link" ? (
                    <Link href={menu.href} className="block py-3 text-[15px] font-bold text-slate-700 hover:text-blue-600" onClick={() => { trackAction("Mobile Menu Clicked", menu.name); closeMobileMenu(); }}>
                      {menu.name}
                    </Link>
                  ) : (
                    <>
                      <button onClick={() => setActiveMobileMenu(isOpen ? null : menu.name)} className="flex w-full items-center justify-between py-3 text-[15px] font-bold text-slate-700 hover:text-blue-600">
                        {menu.name}
                      </button>
                      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-screen opacity-100 mb-2" : "max-h-0 opacity-0"}`}>
                        <div className="ml-2 space-y-2 border-l-2 border-slate-100 pl-4 py-2">
                          {menu.type === "mega"
                            ? menu.columns?.map((col) => (
                                <div key={col.title} className="mb-4">
                                  <p className="mb-2 text-[11px] font-bold uppercase text-slate-400">{col.title}</p>
                                  <ul className="space-y-2">
                                    {col.items.map((item) => (
                                      <li key={item.href}>
                                        <Link href={item.href} className="block py-1 text-[13px] font-semibold text-slate-600 hover:text-blue-600" onClick={() => { trackAction("Mobile Submenu Clicked", item.name); closeMobileMenu(); }}>
                                          {item.name}
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              ))
                            : menu.items?.map((item) => (
                                <Link key={item.href} href={item.href} className="block py-2 text-[13px] font-semibold text-slate-600 hover:text-blue-600" onClick={() => { trackAction("Mobile Submenu Clicked", item.name); closeMobileMenu(); }}>
                                  {item.name}
                                </Link>
                              ))}
                        </div>
                      </div>
                    </>
                  )}
                </div>
              );
            })}
          </nav>
        </div>

        <div className="border-t border-slate-100 bg-slate-50 p-6">
          <div className="mb-5 flex flex-wrap gap-x-4 gap-y-2 justify-center text-[13px] font-bold text-slate-600">
            <Link href="/login/client" onClick={() => { trackAction("Login Attempt (Mobile)", "Client"); closeMobileMenu(); }} className="hover:text-blue-600 transition">Client Login</Link>
            <span className="text-slate-300">|</span>
            <Link href="/login/partner" onClick={() => { trackAction("Login Attempt (Mobile)", "Partner"); closeMobileMenu(); }} className="hover:text-blue-600 transition">Partner Login</Link>
            <span className="text-slate-300">|</span>
            <Link href="/login/reseller" onClick={() => { trackAction("Login Attempt (Mobile)", "Reseller"); closeMobileMenu(); }} className="text-emerald-600 hover:text-emerald-700 transition">Reseller Portal</Link>
          </div>
          <Link href="/quotation" className="block w-full rounded-lg bg-slate-900 py-3.5 text-center text-sm font-bold text-white shadow-sm transition hover:bg-slate-800" onClick={() => { trackAction("Get Quote Clicked", "Mobile Menu"); closeMobileMenu(); }}>
            Get Free Quote
          </Link>
        </div>
      </aside>
    </>
  );
}
