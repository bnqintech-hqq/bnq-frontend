"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

// --- Types based on Prisma Schema ---
interface PayoutRequest {
  id: string;
  partnerId: string;
  partnerName: string;
  partnerEmail: string;
  payoutMethod: string; // e.g., UPI or Bank Details
  amount: number;
  status: "PENDING" | "COMPLETED" | "REJECTED";
  requestedAt: string;
}

export default function AdminPayoutRequests() {
  const router = useRouter();
  const [toast, setToast] = useState<{ show: boolean; message: string; type: "success" | "error" | "info" }>({ show: false, message: "", type: "info" });
  
  const [isLoading, setIsLoading] = useState(true);
  const [requests, setRequests] = useState<PayoutRequest[]>([]);
  const [filter, setFilter] = useState<"ALL" | "PENDING" | "COMPLETED" | "REJECTED">("PENDING");

  // Modal States
  const [selectedRequest, setSelectedRequest] = useState<PayoutRequest | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [rejectionReason, setRejectionReason] = useState("");
  const [transactionRef, setTransactionRef] = useState("");

  const showToast = (message: string, type: "success" | "error" | "info" = "info") => {
    setToast({ show: true, message, type });
    setTimeout(() => setToast({ show: false, message: "", type: "info" }), 3000);
  };

  // --- 1. FETCH ADMIN PAYOUT DATA ---
  useEffect(() => {
    let mounted = true;
    async function loadPayoutRequests() {
      try {
        // Mocking API Call: fetch('/api/admin/payouts')
        setTimeout(() => {
          if (mounted) {
            setRequests([
              {
                id: "PAY-2091",
                partnerId: "PRT-0012",
                partnerName: "Mohit Singh",
                partnerEmail: "mohit.affiliate@gmail.com",
                payoutMethod: "mohitsingh@upi",
                amount: 5000,
                status: "PENDING",
                requestedAt: "11 Jun 2026, 10:30 AM"
              },
              {
                id: "PAY-2088",
                partnerId: "PRT-0084",
                partnerName: "Aman Digital",
                partnerEmail: "aman@agency.com",
                payoutMethod: "A/C: 123456789, IFSC: HDFC0001",
                amount: 12500,
                status: "PENDING",
                requestedAt: "10 Jun 2026, 04:15 PM"
              },
              {
                id: "PAY-1990",
                partnerId: "PRT-0042",
                partnerName: "Priya Tech",
                partnerEmail: "priya@tech.in",
                payoutMethod: "priyatech@ybl",
                amount: 3000,
                status: "COMPLETED",
                requestedAt: "05 Jun 2026, 09:00 AM"
              },
              {
                id: "PAY-1950",
                partnerId: "PRT-0012",
                partnerName: "Mohit Singh",
                partnerEmail: "mohit.affiliate@gmail.com",
                payoutMethod: "Invalid Details",
                amount: 1500,
                status: "REJECTED",
                requestedAt: "01 Jun 2026, 11:20 AM"
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
    loadPayoutRequests();
    return () => { mounted = false; };
  }, []);

  // --- 2. ACTION HANDLERS ---
  const handleApprovePayout = async () => {
    if (!selectedRequest) return;
    if (!transactionRef.trim()) return showToast("Please enter a transaction reference ID.", "error");

    setIsProcessing(true);
    showToast("Processing payment approval...", "info");

    // Mock API Call: fetch(`/api/admin/payouts/${selectedRequest.id}/approve`, { method: 'POST' })
    setTimeout(() => {
      setRequests(prev => prev.map(req => 
        req.id === selectedRequest.id 
          ? { ...req, status: "COMPLETED" } 
          : req
      ));
      setSelectedRequest(null);
      setTransactionRef("");
      setIsProcessing(false);
      showToast("Payout marked as COMPLETED successfully!", "success");
    }, 1500);
  };

  const handleRejectPayout = async () => {
    if (!selectedRequest) return;
    if (!rejectionReason.trim()) return showToast("Please provide a reason for rejection.", "error");

    setIsProcessing(true);
    showToast("Rejecting payout request...", "info");

    // Mock API Call: fetch(`/api/admin/payouts/${selectedRequest.id}/reject`, { method: 'POST' })
    setTimeout(() => {
      setRequests(prev => prev.map(req => 
        req.id === selectedRequest.id 
          ? { ...req, status: "REJECTED" } 
          : req
      ));
      setSelectedRequest(null);
      setRejectionReason("");
      setIsProcessing(false);
      showToast("Payout request has been REJECTED.", "success");
    }, 1500);
  };

  // --- FORMATTERS ---
  const formatCur = (num: number) => `₹${num.toLocaleString('en-IN')}`;

  const filteredRequests = requests.filter(req => filter === "ALL" || req.status === filter);

  const getStatusStyle = (status: string) => {
    switch(status) {
      case "COMPLETED": return "bg-emerald-50 text-emerald-700 border-emerald-200";
      case "PENDING": return "bg-amber-50 text-amber-700 border-amber-200";
      case "REJECTED": return "bg-rose-50 text-rose-700 border-rose-200";
      default: return "bg-slate-50 text-slate-700 border-slate-200";
    }
  };

  // --- METRICS ---
  const totalPendingAmount = requests.filter(r => r.status === "PENDING").reduce((acc, curr) => acc + curr.amount, 0);
  const totalPaidAmount = requests.filter(r => r.status === "COMPLETED").reduce((acc, curr) => acc + curr.amount, 0);

  // --- RENDER LOADER ---
  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#f8fafc] flex flex-col items-center justify-center">
        <div className="w-12 h-12 border-4 border-slate-200 border-t-emerald-600 rounded-full animate-spin" />
        <p className="mt-4 font-bold text-slate-500 animate-pulse">Loading Financial Data...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f8fafc] font-sans pt-30 pb-16 relative">
      
      {/* GLOBAL TOAST */}
      <div className={`fixed bottom-5 right-5 z-[100] transform transition-all duration-300 ${toast.show ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0 pointer-events-none"}`}>
        <div className={`flex items-center px-5 py-3.5 rounded-xl shadow-2xl border ${
          toast.type === "success" ? "bg-emerald-900 text-emerald-50 border-emerald-800" :
          toast.type === "error" ? "bg-rose-900 text-rose-50 border-rose-800" : "bg-slate-900 text-slate-50 border-slate-800"
        }`}>
          <p className="text-sm font-bold tracking-wide text-white">{toast.message}</p>
        </div>
      </div>

      {/* PROCESS PAYOUT MODAL */}
      {selectedRequest && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in">
          <div className="bg-white rounded-3xl w-full max-w-xl shadow-2xl overflow-hidden">
            <div className="px-8 py-6 border-b border-slate-100 bg-slate-50 flex justify-between items-center">
              <div>
                <h2 className="text-xl font-black text-slate-900">Process Payout</h2>
                <p className="text-xs text-slate-500 mt-1">Review partner details before transferring funds.</p>
              </div>
              <button onClick={() => {setSelectedRequest(null); setRejectionReason(""); setTransactionRef("");}} className="w-8 h-8 flex items-center justify-center rounded-full bg-slate-200 text-slate-500 hover:bg-rose-100 hover:text-rose-600 transition">✕</button>
            </div>
            
            <div className="p-8 space-y-6">
              {/* Partner Info Box */}
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5">
                <div className="flex justify-between items-center mb-4 border-b border-slate-200 pb-4">
                  <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Partner Name</p>
                    <p className="font-bold text-slate-900">{selectedRequest.partnerName}</p>
                    <p className="text-xs font-semibold text-slate-500 mt-0.5">{selectedRequest.partnerEmail}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Requested Amount</p>
                    <p className="text-2xl font-black text-emerald-600">{formatCur(selectedRequest.amount)}</p>
                  </div>
                </div>
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Receiving Method (Transfer to)</p>
                  <div className="flex items-center justify-between bg-white border border-slate-200 p-3 rounded-xl mt-2">
                    <span className="text-sm font-bold text-slate-800">{selectedRequest.payoutMethod}</span>
                    <button onClick={() => { navigator.clipboard.writeText(selectedRequest.payoutMethod); showToast("Copied to clipboard!", "info"); }} className="text-xs font-bold text-blue-600 hover:underline">Copy</button>
                  </div>
                </div>
              </div>

              {/* Action Tabs for Admin */}
              <div className="space-y-4">
                <h3 className="text-sm font-black text-slate-900 uppercase tracking-widest border-b border-slate-100 pb-2">Admin Actions</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Approve Section */}
                  <div className="border border-emerald-100 bg-emerald-50/30 p-4 rounded-2xl">
                    <label className="block text-xs font-bold text-emerald-800 uppercase tracking-wide mb-2">Transaction Ref ID</label>
                    <input 
                      type="text" 
                      placeholder="e.g. UPI Ref / NEFT UTR" 
                      value={transactionRef}
                      onChange={(e) => setTransactionRef(e.target.value)}
                      className="w-full border border-emerald-200 rounded-xl px-4 py-2.5 text-sm focus:ring-2 focus:ring-emerald-500 outline-none mb-3" 
                    />
                    <button onClick={handleApprovePayout} disabled={isProcessing} className="w-full bg-emerald-600 text-white font-bold py-2.5 rounded-xl text-sm hover:bg-emerald-700 shadow-md transition disabled:opacity-50">
                      {isProcessing ? "Processing..." : "Mark as Paid"}
                    </button>
                  </div>

                  {/* Reject Section */}
                  <div className="border border-rose-100 bg-rose-50/30 p-4 rounded-2xl">
                    <label className="block text-xs font-bold text-rose-800 uppercase tracking-wide mb-2">Reason for Rejection</label>
                    <input 
                      type="text" 
                      placeholder="e.g. Invalid UPI ID" 
                      value={rejectionReason}
                      onChange={(e) => setRejectionReason(e.target.value)}
                      className="w-full border border-rose-200 rounded-xl px-4 py-2.5 text-sm focus:ring-2 focus:ring-rose-500 outline-none mb-3" 
                    />
                    <button onClick={handleRejectPayout} disabled={isProcessing} className="w-full bg-white border border-rose-200 text-rose-600 font-bold py-2.5 rounded-xl text-sm hover:bg-rose-50 shadow-sm transition disabled:opacity-50">
                      {isProcessing ? "Processing..." : "Reject Request"}
                    </button>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      )}

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-6 border-b border-slate-200 pb-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="px-3 py-1 text-[11px] font-black uppercase tracking-widest rounded-md bg-emerald-600 text-white shadow-md shadow-emerald-500/20">
                Admin Panel
              </span>
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider bg-slate-200 px-2 py-1 rounded-md">Finance Dept</span>
            </div>
            <h1 className="text-3xl font-black text-slate-900 tracking-tight">Partner Payout Management</h1>
            <p className="text-slate-500 text-sm font-medium mt-1">Review, approve, and manage affiliate withdrawal requests.</p>
          </div>
        </div>

        {/* FINANCIAL METRICS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800 shadow-xl text-white relative overflow-hidden">
            <div className="absolute -right-10 -top-10 w-32 h-32 bg-amber-500/20 rounded-full blur-2xl"></div>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1 relative z-10">Pending Payouts</p>
            <h3 className="text-4xl font-black text-amber-400 relative z-10">{formatCur(totalPendingAmount)}</h3>
            <p className="text-xs text-slate-400 mt-2 relative z-10">{requests.filter(r => r.status === "PENDING").length} requests waiting for approval</p>
          </div>
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Total Paid (Lifetime)</p>
            <h3 className="text-4xl font-black text-slate-900">{formatCur(totalPaidAmount)}</h3>
            <p className="text-xs text-slate-500 mt-2 font-medium text-emerald-600 flex items-center gap-1"><span>✓</span> Successfully disbursed</p>
          </div>
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col justify-center">
            <button onClick={() => router.push('/dashboard/partner')} className="flex items-center justify-between p-4 border border-slate-200 rounded-xl hover:border-slate-400 hover:bg-slate-50 transition group">
              <span className="font-bold text-slate-700 group-hover:text-slate-900">Return to Main Dashboard</span>
              <span className="text-slate-400 group-hover:text-slate-800">→</span>
            </button>
          </div>
        </div>

        {/* PAYOUT REQUESTS TABLE AREA */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden animate-in fade-in">
          
          {/* Filters */}
          <div className="px-6 py-5 border-b border-slate-100 bg-slate-50 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <h3 className="font-bold text-slate-800 text-lg">Withdrawal Requests</h3>
            <div className="flex bg-white p-1 rounded-xl border border-slate-200 shadow-sm overflow-x-auto w-full sm:w-auto">
              {["PENDING", "COMPLETED", "REJECTED", "ALL"].map((tab) => (
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

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-white text-xs uppercase tracking-widest text-slate-400 border-b border-slate-100">
                  <th className="px-6 py-4 font-bold">Partner Details</th>
                  <th className="px-6 py-4 font-bold">Req. Date & ID</th>
                  <th className="px-6 py-4 font-bold">Amount</th>
                  <th className="px-6 py-4 font-bold">Status</th>
                  <th className="px-6 py-4 font-bold text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filteredRequests.map((req) => (
                  <tr key={req.id} className="hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-4">
                      <p className="font-bold text-slate-900 text-sm">{req.partnerName}</p>
                      <p className="text-xs font-semibold text-slate-500 mt-0.5">{req.partnerEmail}</p>
                    </td>
                    <td className="px-6 py-4">
                      <p className="font-bold text-slate-700 text-sm">{req.requestedAt}</p>
                      <p className="text-xs text-slate-400 mt-0.5">{req.id}</p>
                    </td>
                    <td className="px-6 py-4">
                      <span className="font-black text-slate-900">{formatCur(req.amount)}</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wide border ${getStatusStyle(req.status)}`}>
                        {req.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      {req.status === "PENDING" ? (
                        <button 
                          onClick={() => setSelectedRequest(req)} 
                          className="bg-slate-900 text-white px-4 py-2 rounded-lg text-xs font-bold shadow-sm hover:bg-black transition-colors"
                        >
                          Review & Process
                        </button>
                      ) : (
                        <button 
                          onClick={() => setSelectedRequest(req)} 
                          className="bg-white border border-slate-200 text-slate-600 px-4 py-2 rounded-lg text-xs font-bold shadow-sm hover:bg-slate-50 transition-colors"
                        >
                          View Details
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
                {filteredRequests.length === 0 && (
                  <tr>
                    <td colSpan={5} className="p-16 text-center">
                      <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center text-2xl mx-auto mb-3 border border-slate-100">✅</div>
                      <p className="font-bold text-slate-900">All caught up!</p>
                      <p className="text-sm text-slate-500 mt-1">No requests found for this filter.</p>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

      </main>
    </div>
  );
}