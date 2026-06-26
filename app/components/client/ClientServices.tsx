"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

// --- Types based on your Prisma Schema ---
interface ServiceMeta {
  diskSpace?: string;
  bandwidth?: string;
  platform?: string;
  autoRenew?: boolean;
}

interface Service {
  id: string;
  name: string;
  type: string;
  ip: string;
  status: "ACTIVE" | "PENDING" | "SUSPENDED" | "DELIVERED";
  price: number;
  nextBillingDate: string | null;
  metaData: ServiceMeta;
}

export default function ClientServices() {
  const router = useRouter();
  const [toast, setToast] = useState<{ show: boolean; message: string; type: "success" | "error" | "info" }>({ show: false, message: "", type: "info" });
  
  const [isLoading, setIsLoading] = useState(true);
  const [services, setServices] = useState<Service[]>([]);
  const [filter, setFilter] = useState<"ALL" | "HOSTING" | "DOMAIN" | "SOFTWARE">("ALL");
  
  // Manage Service Modal State
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const showToast = (message: string, type: "success" | "error" | "info" = "info") => {
    setToast({ show: true, message, type });
    setTimeout(() => setToast({ show: false, message: "", type: "info" }), 3000);
  };

  // --- 1. FETCH SERVICES DATA FROM API ---
  useEffect(() => {
    let mounted = true;
    async function loadServices() {
      try {
        // Yahan aapki actual API aayegi: fetch('/api/client/services')
        // Abhi UI test karne ke liye main mock data daal raha hu jo API se aayega
        setTimeout(() => {
          if (mounted) {
            setServices([
              {
                id: "SRV-90812",
                name: "Premium Cloud VPS",
                type: "VPS",
                ip: "192.168.1.104",
                status: "ACTIVE",
                price: 3500,
                nextBillingDate: "15 Jul 2026",
                metaData: { diskSpace: "100GB NVMe", bandwidth: "1TB", platform: "Ubuntu 22.04", autoRenew: true }
              },
              {
                id: "SRV-11234",
                name: "siddharath-tech.com",
                type: "DOMAIN",
                ip: "",
                status: "ACTIVE",
                price: 999,
                nextBillingDate: "10 Jun 2027",
                metaData: { autoRenew: true }
              },
              {
                id: "SRV-55678",
                name: "E-Commerce App UI/UX",
                type: "SOFTWARE_DEV",
                ip: "",
                status: "IN_PROGRESS" as any,
                price: 45000,
                nextBillingDate: null,
                metaData: { platform: "Figma & React" }
              }
            ]);
            setIsLoading(false);
          }
        }, 800);
      } catch (err: any) {
        if (mounted) {
          showToast(err.message, "error");
          setIsLoading(false);
        }
      }
    }
    loadServices();
    return () => { mounted = false; };
  }, []);

  // --- ACTION HANDLERS ---
  const handleToggleAutoRenew = async () => {
    if (!selectedService) return;
    showToast("Updating auto-renew settings...", "info");
    
    // API Call Mock: fetch(`/api/client/services/${selectedService.id}/autorenew`, { method: 'PUT' })
    setTimeout(() => {
      setServices(prev => prev.map(s => 
        s.id === selectedService.id 
          ? { ...s, metaData: { ...s.metaData, autoRenew: !s.metaData.autoRenew } } 
          : s
      ));
      setSelectedService(prev => prev ? { ...prev, metaData: { ...prev.metaData, autoRenew: !prev.metaData.autoRenew } } : null);
      showToast("Auto-renew setting updated!", "success");
    }, 1000);
  };

  const handleServiceLogin = () => {
    showToast(`Redirecting to ${selectedService?.type} Control Panel...`, "success");
    // e.g., router.push('/cpanel/sso' or open direct URL)
  };

  // --- FORMATTERS ---
  const filteredServices = services.filter(s => {
    if (filter === "ALL") return true;
    if (filter === "HOSTING" && (s.type === "VPS" || s.type === "HOSTING")) return true;
    if (filter === "DOMAIN" && s.type === "DOMAIN") return true;
    if (filter === "SOFTWARE" && s.type.includes("SOFTWARE")) return true;
    return false;
  });

  const getStatusColor = (status: string) => {
    switch(status) {
      case "ACTIVE": case "DELIVERED": return "bg-emerald-50 text-emerald-700 border-emerald-200";
      case "PENDING": case "IN_PROGRESS": return "bg-amber-50 text-amber-700 border-amber-200";
      case "SUSPENDED": return "bg-rose-50 text-rose-700 border-rose-200";
      default: return "bg-slate-50 text-slate-700 border-slate-200";
    }
  };

  const getServiceIcon = (type: string) => {
    if (type === "VPS" || type === "HOSTING") return "☁️";
    if (type === "DOMAIN") return "🌐";
    if (type.includes("SOFTWARE")) return "💻";
    return "📦";
  };

  // --- RENDER LOADER ---
  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#f8fafc] flex flex-col items-center justify-center">
        <div className="w-12 h-12 border-4 border-slate-200 border-t-blue-600 rounded-full animate-spin" />
        <p className="mt-4 font-bold text-slate-500 animate-pulse">Fetching your products...</p>
      </div>
    );
  }

  return (
    <div className="min-h-[80vh] bg-[#f8fafc] font-sans pb-16 relative">
      
      {/* GLOBAL TOAST */}
      <div className={`fixed bottom-5 right-5 z-[100] transform transition-all duration-300 ${toast.show ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0 pointer-events-none"}`}>
        <div className={`flex items-center px-5 py-3.5 rounded-xl shadow-2xl border ${
          toast.type === "success" ? "bg-emerald-900 text-emerald-50 border-emerald-800" :
          toast.type === "error" ? "bg-rose-900 text-rose-50 border-rose-800" : "bg-slate-900 text-slate-50 border-slate-800"
        }`}>
          <p className="text-sm font-bold tracking-wide text-white">{toast.message}</p>
        </div>
      </div>

      {/* MANAGE SERVICE MODAL */}
      {selectedService && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in">
          <div className="bg-white rounded-3xl w-full max-w-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
            
            {/* Modal Header */}
            <div className="px-8 py-6 border-b border-slate-100 bg-slate-50 flex justify-between items-start">
              <div className="flex gap-4 items-center">
                <div className="w-14 h-14 bg-white border border-slate-200 rounded-2xl flex items-center justify-center text-2xl shadow-sm">
                  {getServiceIcon(selectedService.type)}
                </div>
                <div>
                  <h2 className="text-2xl font-black text-slate-900 tracking-tight">{selectedService.name}</h2>
                  <div className="flex items-center gap-2 mt-1">
                    <span className={`px-2.5 py-0.5 rounded-md text-[10px] font-bold uppercase border ${getStatusColor(selectedService.status)}`}>
                      {selectedService.status}
                    </span>
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-widest">{selectedService.type}</span>
                  </div>
                </div>
              </div>
              <button onClick={() => setSelectedService(null)} className="w-8 h-8 flex items-center justify-center rounded-full bg-slate-200 text-slate-500 hover:bg-rose-100 hover:text-rose-600 transition">✕</button>
            </div>

            {/* Modal Body */}
            <div className="p-8 overflow-y-auto space-y-8">
              
              {/* Info Cards */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {(selectedService.type === "VPS" || selectedService.type === "HOSTING") && (
                  <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">IP Address</p>
                    <p className="font-bold text-slate-900">{selectedService.ip || "Assigning..."}</p>
                  </div>
                )}
                {selectedService.nextBillingDate && (
                  <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Renewal Date</p>
                    <p className="font-bold text-slate-900">{selectedService.nextBillingDate}</p>
                  </div>
                )}
                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Billing Amount</p>
                  <p className="font-bold text-slate-900">₹{selectedService.price.toLocaleString()}</p>
                </div>
                {selectedService.metaData.platform && (
                  <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Platform</p>
                    <p className="font-bold text-slate-900">{selectedService.metaData.platform}</p>
                  </div>
                )}
              </div>

              {/* Actions Section */}
              <div>
                <h3 className="text-sm font-black text-slate-900 uppercase tracking-widest mb-4">Quick Actions</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {(selectedService.type === "VPS" || selectedService.type === "HOSTING") && (
                    <button onClick={handleServiceLogin} className="flex items-center justify-between p-4 bg-white border border-slate-200 hover:border-blue-300 hover:bg-blue-50 rounded-2xl transition group">
                      <div className="text-left">
                        <p className="font-bold text-slate-900 group-hover:text-blue-700">Login to Control Panel</p>
                        <p className="text-xs text-slate-500 mt-0.5">Access cPanel / WHM / Plesk</p>
                      </div>
                      <span className="text-slate-400 group-hover:text-blue-600">→</span>
                    </button>
                  )}
                  {selectedService.type === "DOMAIN" && (
                    <button onClick={() => showToast("Opening DNS Manager...", "info")} className="flex items-center justify-between p-4 bg-white border border-slate-200 hover:border-blue-300 hover:bg-blue-50 rounded-2xl transition group">
                      <div className="text-left">
                        <p className="font-bold text-slate-900 group-hover:text-blue-700">Manage DNS Records</p>
                        <p className="text-xs text-slate-500 mt-0.5">Nameservers, A Records, MX</p>
                      </div>
                      <span className="text-slate-400 group-hover:text-blue-600">→</span>
                    </button>
                  )}
                  
                  {/* Auto Renew Toggle */}
                  <div className="flex items-center justify-between p-4 bg-white border border-slate-200 rounded-2xl">
                    <div className="text-left">
                      <p className="font-bold text-slate-900">Auto-Renewal</p>
                      <p className="text-xs text-slate-500 mt-0.5">Prevent accidental expiry</p>
                    </div>
                    <button 
                      onClick={handleToggleAutoRenew}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${selectedService.metaData.autoRenew ? "bg-emerald-500" : "bg-slate-300"}`}
                    >
                      <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${selectedService.metaData.autoRenew ? "translate-x-6" : "translate-x-1"}`} />
                    </button>
                  </div>
                </div>
              </div>

              {/* Danger Zone */}
              <div className="pt-6 border-t border-slate-100">
                <button onClick={() => showToast("Cancellation request submitted to support.", "info")} className="text-xs font-bold text-rose-600 hover:underline">
                  Request Service Cancellation
                </button>
              </div>

            </div>
          </div>
        </div>
      )}

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        
        {/* Header & Filters */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-2xl font-black text-slate-900 tracking-tight">My Products & Services</h1>
            <p className="text-slate-500 text-sm font-medium mt-1">Manage your active hosting, domains, and projects.</p>
          </div>
          <div className="flex bg-white p-1 rounded-xl border border-slate-200 shadow-sm w-full md:w-auto overflow-x-auto">
            {["ALL", "HOSTING", "DOMAIN", "SOFTWARE"].map((tab) => (
              <button 
                key={tab} 
                onClick={() => setFilter(tab as any)} 
                className={`px-4 py-2 text-xs font-bold rounded-lg transition-all ${filter === tab ? "bg-slate-900 text-white" : "text-slate-600 hover:bg-slate-50"}`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid (Hostinger/GoDaddy Style Cards) */}
        {filteredServices.length === 0 ? (
          <div className="bg-white rounded-3xl border border-slate-200 p-12 text-center shadow-sm">
            <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center text-3xl mx-auto mb-4 border border-slate-100">📦</div>
            <h3 className="text-lg font-bold text-slate-900">No Services Found</h3>
            <p className="text-sm text-slate-500 mt-2 max-w-md mx-auto">You don't have any active services in this category. Browse our store to purchase a new plan.</p>
            <button onClick={() => router.push('/')} className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-xl text-sm font-bold shadow-md hover:bg-blue-700 transition">
              Browse Store
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((service) => (
              <div key={service.id} className="bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col">
                
                {/* Card Top: Type & Status */}
                <div className="px-6 py-5 border-b border-slate-50 bg-gradient-to-b from-slate-50 to-white flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <span className="text-xl">{getServiceIcon(service.type)}</span>
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">{service.type}</span>
                  </div>
                  <span className={`px-2 py-1 rounded-md text-[9px] font-bold uppercase border ${getStatusColor(service.status)}`}>
                    {service.status}
                  </span>
                </div>

                {/* Card Middle: Details */}
                <div className="px-6 py-6 flex-1">
                  <h3 className="text-xl font-black text-slate-900 tracking-tight leading-tight mb-4">{service.name}</h3>
                  <div className="space-y-3">
                    {service.ip && (
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-slate-500 font-medium">IP Address</span>
                        <span className="font-bold text-slate-800">{service.ip}</span>
                      </div>
                    )}
                    {service.nextBillingDate && (
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-slate-500 font-medium">Auto Renew</span>
                        <span className={service.metaData.autoRenew ? "font-bold text-emerald-600" : "font-bold text-slate-400"}>
                          {service.metaData.autoRenew ? "Enabled" : "Disabled"}
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Card Bottom: Expiry & Action */}
                <div className="px-6 py-5 bg-slate-50 border-t border-slate-100 flex justify-between items-center">
                  <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Next Billing</p>
                    <p className="text-sm font-bold text-slate-900">{service.nextBillingDate || "One-Time"}</p>
                  </div>
                  <button 
                    onClick={() => setSelectedService(service)}
                    className="bg-white border border-slate-200 text-slate-700 hover:border-blue-600 hover:text-blue-600 hover:bg-blue-50 px-5 py-2.5 rounded-xl text-sm font-bold shadow-sm transition-all"
                  >
                    Manage
                  </button>
                </div>

              </div>
            ))}
          </div>
        )}

      </main>
    </div>
  );
}