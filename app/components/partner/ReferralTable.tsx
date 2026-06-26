"use client";

import React, { useState, useEffect } from "react";

// --- Types based on your Prisma Schema ---
interface Referral {
  id: string;
  partnerId: string;
  partnerName: string;   // Admin needs to know who the partner is
  clientName: string;    // Who bought the service
  clientEmail: string;
  plan: string;
  commissionAmount: number;
  status: "PENDING" | "PAID" | "REJECTED";
  date: string;
}

export default function ReferralTable() {
  const [toast, setToast] = useState<{ show: boolean; message: string; type: "success" | "error" | "info" }>({ show: false, message: "", type: "info" });
  
  const [isLoading, setIsLoading] = useState(true);
  const [referrals, setReferrals] = useState<Referral[]>([]);
  const [filter, setFilter] = useState<"ALL" | "PENDING" | "PAID" | "REJECTED">("ALL");
  const [searchQuery, setSearchQuery] = useState("");

  // Modal States
  const [selectedRef, setSelectedRef] = useState<Referral | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const showToast = (message: string, type: "success" | "error" | "info" = "info") => {
    setToast({ show: true, message, type });
    setTimeout(() => setToast({ show: false, message: "", type: "info" }), 3000);
  };

  // --- 1. FETCH ADMIN REFERRALS DATA ---
  useEffect(() => {
    let mounted = true;
    async function loadReferrals() {
      try {
        // Mocking API Call: fetch('/api/admin/referrals')
        setTimeout(() => {
          if (mounted) {
            setReferrals([
              {
                id: "REF-90021",
                partnerId: "PRT-0012",
                partnerName: "Mohit Singh",
                clientName: "Aakash Verma",
                clientEmail: "aakash@company.com",
                plan: "Cloud VPS High Performance",
                commissionAmount: 350,
                status: "PENDING",
                date: "09 Jun 2026"
              },
              {
                id: "REF-90022",
                partnerId: "PRT-0084",
                partnerName: "Aman Digital",
                clientName: "Priya Designs",
                clientEmail: "hello@priyadesigns.in",
                plan: "Managed WordPress Hosting",
                commissionAmount: 500,
                status: "PAID",
                date: "05 Jun 2026"
              },
              {
                id: "REF-90023",
                partnerId: "PRT-0012",
                partnerName: "Mohit Singh",
                clientName: "Rahul Sharma",
                clientEmail: "rahul99@gmail.com",
                plan: "Shared Hosting Package",
                commissionAmount: 300,
                status: "PENDING",
                date: "10 Jun 2026"
              },
              {
                id: "REF-90024",
                partnerId: "PRT-0042",
                partnerName: "Priya Tech",
                clientName: "Fake Account",
                clientEmail: "spam@fake.com",
                plan: "Domain Registration",
                commissionAmount: 100,
                status: "REJECTED",
                date: "01 Jun 2026"
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
    loadReferrals();
    return () => { mounted = false; };
  }, []);

  // --- 2. ACTION HANDLERS ---
  const handleApproveCommission = async () => {
    if (!selectedRef) return;
    setIsProcessing(true);
    showToast("Approving commission and crediting partner wallet...", "info");

    // Mock API Call: fetch(`/api/admin/referrals/${selectedRef.id}/approve`, { method: 'POST' })
    // Backend Logic: Update status to PAID & Add 'commissionAmount' to Partner's 'walletBalance'
    setTimeout(() => {
      setReferrals(prev => prev.map(r => 
        r.id === selectedRef.id ? { ...r, status: "PAID" } : r
      ));
      setSelectedRef(null);
      setIsProcessing(false);
      showToast("Commission approved and added to partner's wallet!", "success");
    }, 1200);
  };

  const handleRejectCommission = async () => {
    if (!selectedRef) return;
    setIsProcessing(true);
    showToast("Rejecting commission...", "info");

    // Mock API Call: fetch(`/api/admin/referrals/${selectedRef.id}/reject`, { method: 'POST' })
    setTimeout(() => {
      setReferrals(prev => prev.map(r => 
        r.id === selectedRef.id ? { ...r, status: "REJECTED" } : r
      ));
      setSelectedRef(null);
      setIsProcessing(false);
      showToast("Referral commission rejected.", "success");
    }, 1200);
  };

  // --- FORMATTERS & FILTERS ---
  const formatCur = (num: number) => `₹${num.toLocaleString('en-IN')}`;

  const getStatusStyle = (status: string) => {
    switch(status) {
      case "PAID": return "bg-emerald-50 text-emerald-700 border-emerald-200";
      case "PENDING": return "bg-amber-50 text-amber-700 border-amber-200";
      case "REJECTED": return "bg-rose-50 text-rose-700 border-rose-200";
      default: return "bg-slate-50 text-slate-700 border-slate-200";
    }
  };

  const filteredReferrals = referrals.filter(ref => {
    const matchesFilter = filter === "ALL" || ref.status === filter;
    const matchesSearch = ref.partnerName.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          ref.clientName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          ref.id.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  // --- METRICS ---
  const totalPendingCommissions = referrals.filter(r => r.status === "PENDING").reduce((acc, curr) => acc + curr.commissionAmount, 0);
  const totalApprovedCommissions = referrals.filter(r => r.status === "PAID").reduce((acc, curr) => acc + curr.commissionAmount, 0);

  // --- RENDER LOADER ---
  if (isLoading) {
    return (
      <div className="w-full h-96 bg-white rounded-3xl border border-slate-200 shadow-sm flex flex-col items-center justify-center">
        <div className="w-10 h-10 border-4 border-slate-200 border-t-indigo-600 rounded-full animate-spin" />
        <p className="mt-4 font-bold text-slate-500 animate-pulse">Loading Referral Ledger...</p>
      </div>
    );
  }

  return (
    <div className="w-full font-sans relative">
      
      {/* GLOBAL TOAST (Scoped to this component) */}
      <div className={`fixed bottom-5 right-5 z-[100] transform transition-all duration-300 ${toast.show ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0 pointer-events-none"}`}>
        <div className={`flex items-center px-5 py-3.5 rounded-xl shadow-2xl border ${
          toast.type === "success" ? "bg-emerald-900 text-emerald-50 border-emerald-800" :
          toast.type === "error" ? "bg-rose-900 text-rose-50 border-rose-800" : "bg-slate-900 text-slate-50 border-slate-800"
        }`}>
          <p className="text-sm font-bold tracking-wide text-white">{toast.message}</p>
        </div>
      </div>

      {/* REVIEW COMMISSION MODAL */}
      {selectedRef && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in">
          <div className="bg-white rounded-3xl w-full max-w-lg shadow-2xl overflow-hidden">
            <div className="px-8 py-6 border-b border-slate-100 bg-slate-50 flex justify-between items-center">
              <div>
                <h2 className="text-xl font-black text-slate-900">Review Commission</h2>
                <p className="text-xs text-slate-500 mt-1">Verify referral authenticity before approval.</p>
              </div>
              <button onClick={() => setSelectedRef(null)} className="w-8 h-8 flex items-center justify-center rounded-full bg-slate-200 text-slate-500 hover:bg-rose-100 hover:text-rose-600 transition">✕</button>
            </div>
            
            <div className="p-8 space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Partner</p>
                  <p className="font-bold text-slate-900">{selectedRef.partnerName}</p>
                  <p className="text-xs text-slate-500 font-medium">{selectedRef.partnerId}</p>
                </div>
                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Referred Client</p>
                  <p className="font-bold text-slate-900">{selectedRef.clientName}</p>
                  <p className="text-xs text-slate-500 font-medium">{selectedRef.clientEmail}</p>
                </div>
              </div>

              <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-sm font-bold text-slate-500">Purchased Plan</span>
                  <span className="text-sm font-black text-slate-900 text-right">{selectedRef.plan}</span>
                </div>
                <div className="flex justify-between items-center border-t border-slate-100 pt-3">
                  <span className="text-sm font-bold text-slate-500">Commission Amount</span>
                  <span className="text-2xl font-black text-emerald-600">{formatCur(selectedRef.commissionAmount)}</span>
                </div>
              </div>

              {selectedRef.status === "PENDING" ? (
                <div className="flex gap-3 pt-4 border-t border-slate-100">
                  <button onClick={handleRejectCommission} disabled={isProcessing} className="flex-1 bg-white border border-rose-200 text-rose-600 font-bold py-3 rounded-xl text-sm hover:bg-rose-50 transition disabled:opacity-50">
                    Reject Spam
                  </button>
                  <button onClick={handleApproveCommission} disabled={isProcessing} className="flex-1 bg-indigo-600 text-white font-bold py-3 rounded-xl text-sm hover:bg-indigo-700 shadow-md transition disabled:opacity-50">
                    {isProcessing ? "Processing..." : "Approve & Credit"}
                  </button>
                </div>
              ) : (
                <div className="pt-4 border-t border-slate-100 text-center">
                  <p className="text-sm font-bold text-slate-500">
                    This referral has already been <span className={`uppercase ${selectedRef.status === 'PAID' ? 'text-emerald-600' : 'text-rose-600'}`}>{selectedRef.status}</span>.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* COMPONENT BODY */}
      
      {/* 1. Metrics Area */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Total Referrals Logged</p>
          <h3 className="text-4xl font-black text-slate-900">{referrals.length}</h3>
          <p className="text-xs text-slate-500 mt-2 font-medium">Across all partner accounts</p>
        </div>
        <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800 shadow-xl text-white relative overflow-hidden">
          <div className="absolute -right-10 -top-10 w-32 h-32 bg-amber-500/20 rounded-full blur-2xl"></div>
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1 relative z-10">Unpaid Commissions</p>
          <h3 className="text-4xl font-black text-amber-400 relative z-10">{formatCur(totalPendingCommissions)}</h3>
          <p className="text-xs text-slate-400 mt-2 relative z-10">Waiting for admin approval</p>
        </div>
        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm border-l-4 border-l-emerald-500">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Approved & Credited</p>
          <h3 className="text-4xl font-black text-slate-900">{formatCur(totalApprovedCommissions)}</h3>
          <p className="text-xs text-slate-500 mt-2 font-medium text-emerald-600 flex items-center gap-1"><span>✓</span> Added to partner wallets</p>
        </div>
      </div>

      {/* 2. Table Area */}
      <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden animate-in fade-in">
        
        {/* Table Toolbar */}
        <div className="px-6 py-5 border-b border-slate-100 bg-slate-50 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
          <div className="flex bg-white p-1 rounded-xl border border-slate-200 shadow-sm overflow-x-auto w-full lg:w-auto">
            {["ALL", "PENDING", "PAID", "REJECTED"].map((tab) => (
              <button 
                key={tab} 
                onClick={() => setFilter(tab as any)} 
                className={`px-4 py-2 text-xs font-bold rounded-lg transition-all ${filter === tab ? "bg-slate-900 text-white" : "text-slate-600 hover:bg-slate-50"}`}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="w-full lg:w-72">
            <input 
              type="text" 
              placeholder="Search partner or client..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full border border-slate-200 rounded-xl px-4 py-2 text-sm focus:ring-2 focus:ring-indigo-500 outline-none shadow-sm"
            />
          </div>
        </div>

        {/* Data Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-white text-xs uppercase tracking-widest text-slate-400 border-b border-slate-100">
                <th className="px-6 py-4 font-bold">Partner Details</th>
                <th className="px-6 py-4 font-bold">Referred Client & Plan</th>
                <th className="px-6 py-4 font-bold">Date Logged</th>
                <th className="px-6 py-4 font-bold">Commission</th>
                <th className="px-6 py-4 font-bold">Status</th>
                <th className="px-6 py-4 font-bold text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredReferrals.map((ref) => (
                <tr key={ref.id} className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4">
                    <p className="font-bold text-indigo-700 text-sm hover:underline cursor-pointer">{ref.partnerName}</p>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mt-0.5">{ref.partnerId}</p>
                  </td>
                  <td className="px-6 py-4">
                    <p className="font-bold text-slate-900 text-sm">{ref.clientName}</p>
                    <p className="text-xs font-medium text-slate-500 mt-0.5">{ref.plan}</p>
                  </td>
                  <td className="px-6 py-4 text-slate-600 text-sm font-medium">{ref.date}</td>
                  <td className="px-6 py-4">
                    <span className="font-black text-slate-900">{formatCur(ref.commissionAmount)}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wide border ${getStatusStyle(ref.status)}`}>
                      {ref.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    {ref.status === "PENDING" ? (
                      <button 
                        onClick={() => setSelectedRef(ref)} 
                        className="bg-slate-900 text-white px-4 py-2 rounded-lg text-xs font-bold shadow-sm hover:bg-black transition-colors"
                      >
                        Review
                      </button>
                    ) : (
                      <button 
                        onClick={() => setSelectedRef(ref)} 
                        className="bg-white border border-slate-200 text-slate-600 px-4 py-2 rounded-lg text-xs font-bold shadow-sm hover:bg-slate-50 transition-colors"
                      >
                        View
                      </button>
                    )}
                  </td>
                </tr>
              ))}
              {filteredReferrals.length === 0 && (
                <tr>
                  <td colSpan={6} className="p-16 text-center">
                    <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center text-2xl mx-auto mb-3 border border-slate-100">🔍</div>
                    <p className="font-bold text-slate-900">No referrals found</p>
                    <p className="text-sm text-slate-500 mt-1">Try adjusting your filters or search query.</p>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
      
    </div>
  );
}