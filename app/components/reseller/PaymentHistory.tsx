"use client";

import React, { useState, useEffect } from "react";

// --- TypeScript Interfaces based on Prisma Schema ---
interface PaymentRecord {
  id: string; // Transaction ID
  invoiceId: string;
  clientName: string;
  clientEmail: string;
  amount: number;
  method: string; // e.g., "UPI", "Credit Card", "Net Banking"
  status: "SUCCESS" | "FAILED" | "PENDING" | "REFUNDED";
  date: string;
}

export default function PaymentHistory() {
  const [toast, setToast] = useState<{ show: boolean; message: string; type: "success" | "error" | "info" }>({ show: false, message: "", type: "info" });
  
  const [isLoading, setIsLoading] = useState(true);
  const [payments, setPayments] = useState<PaymentRecord[]>([]);
  
  // Filters & Search
  const [filter, setFilter] = useState<"ALL" | "SUCCESS" | "FAILED" | "PENDING" | "REFUNDED">("ALL");
  const [searchQuery, setSearchQuery] = useState("");
  const [isExporting, setIsExporting] = useState(false);

  // Action States
  const [isProcessing, setIsProcessing] = useState<string | null>(null);

  const showToast = (message: string, type: "success" | "error" | "info" = "info") => {
    setToast({ show: true, message, type });
    setTimeout(() => setToast({ show: false, message: "", type: "info" }), 3000);
  };

  // --- 1. FETCH PAYMENTS DATA ---
  useEffect(() => {
    let mounted = true;
    async function loadPayments() {
      try {
        // Mocking API Call: fetch('/api/payments/history')
        setTimeout(() => {
          if (mounted) {
            setPayments([
              {
                id: "TXN-RZP-901823",
                invoiceId: "INV-2026-0091",
                clientName: "Aakash Verma",
                clientEmail: "aakash@company.com",
                amount: 3500,
                method: "UPI (paytm@upi)",
                status: "SUCCESS",
                date: "01 Jun 2026, 02:30 PM"
              },
              {
                id: "TXN-RZP-901824",
                invoiceId: "INV-2026-0094",
                clientName: "Tech Solutions Pvt Ltd",
                clientEmail: "billing@techsol.in",
                amount: 15000,
                method: "Credit Card (ending 4091)",
                status: "SUCCESS",
                date: "22 May 2026, 11:15 AM"
              },
              {
                id: "TXN-RZP-901825",
                invoiceId: "INV-2026-0092",
                clientName: "Priya Designs",
                clientEmail: "hello@priyadesigns.in",
                amount: 4999,
                method: "Net Banking (HDFC)",
                status: "FAILED",
                date: "10 Jun 2026, 09:45 AM"
              },
              {
                id: "TXN-RZP-901826",
                invoiceId: "INV-2026-0080",
                clientName: "Rahul Sharma",
                clientEmail: "rahul99@gmail.com",
                amount: 1500,
                method: "UPI (gpay@upi)",
                status: "REFUNDED",
                date: "15 May 2026, 06:20 PM"
              },
              {
                id: "TXN-RZP-901827",
                invoiceId: "INV-2026-0095",
                clientName: "Nitin Kumar",
                clientEmail: "nitin.k@startup.com",
                amount: 8500,
                method: "Bank Transfer (NEFT)",
                status: "PENDING",
                date: "11 Jun 2026, 01:00 PM"
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
    loadPayments();
    return () => { mounted = false; };
  }, []);

  // --- 2. ACTION HANDLERS ---
  const handleIssueRefund = async (id: string, clientName: string) => {
    if (!window.confirm(`Are you sure you want to refund this transaction to ${clientName}?`)) return;
    
    setIsProcessing(id);
    showToast("Initiating refund process with Payment Gateway...", "info");
    
    // Mock API Call: fetch(`/api/payments/${id}/refund`, { method: 'POST' })
    setTimeout(() => {
      setPayments(prev => prev.map(txn => 
        txn.id === id ? { ...txn, status: "REFUNDED" } : txn
      ));
      setIsProcessing(null);
      showToast("Refund initiated successfully! It will reflect in 5-7 business days.", "success");
    }, 1500);
  };

  const handleExportCSV = () => {
    if (payments.length === 0) return showToast("No transactions to export.", "error");
    setIsExporting(true);
    showToast("Generating CSV report...", "info");

    setTimeout(() => {
      const headers = "Transaction ID,Invoice ID,Client,Amount,Method,Status,Date\n";
      const rows = payments.map(p => `${p.id},${p.invoiceId},"${p.clientName}",${p.amount},"${p.method}",${p.status},"${p.date}"`).join("\n");
      const blob = new Blob([headers + rows], { type: "text/csv;charset=utf-8;" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", `transaction_report_${new Date().toISOString().split("T")[0]}.csv`);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      setIsExporting(false);
      showToast("CSV Downloaded successfully!", "success");
    }, 800);
  };

  // --- FORMATTERS & FILTERS ---
  const formatCur = (num: number) => `₹${num.toLocaleString('en-IN')}`;

  const getStatusStyle = (status: string) => {
    switch(status) {
      case "SUCCESS": return "bg-emerald-50 text-emerald-700 border-emerald-200";
      case "PENDING": return "bg-amber-50 text-amber-700 border-amber-200";
      case "FAILED": return "bg-rose-50 text-rose-700 border-rose-200";
      case "REFUNDED": return "bg-slate-100 text-slate-600 border-slate-300";
      default: return "bg-slate-50 text-slate-700 border-slate-200";
    }
  };

  const filteredPayments = payments.filter(txn => {
    const matchesFilter = filter === "ALL" || txn.status === filter;
    const matchesSearch = txn.clientName.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          txn.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          txn.invoiceId.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  // --- FINANCIAL METRICS ---
  const totalVolume = payments.filter(p => p.status === "SUCCESS").reduce((acc, curr) => acc + curr.amount, 0);
  const totalRefunded = payments.filter(p => p.status === "REFUNDED").reduce((acc, curr) => acc + curr.amount, 0);
  const successRate = payments.length > 0 
    ? Math.round((payments.filter(p => p.status === "SUCCESS").length / payments.length) * 100) 
    : 0;

  // --- RENDER LOADER ---
  if (isLoading) {
    return (
      <div className="w-full h-96 bg-white rounded-3xl border border-slate-200 shadow-sm flex flex-col items-center justify-center">
        <div className="w-10 h-10 border-4 border-slate-200 border-t-blue-600 rounded-full animate-spin" />
        <p className="mt-4 font-bold text-slate-500 animate-pulse">Loading Transaction Data...</p>
      </div>
    );
  }

  return (
    <div className="w-full font-sans relative">
      
      {/* GLOBAL TOAST (Scoped) */}
      <div className={`fixed bottom-5 right-5 z-[100] transform transition-all duration-300 ${toast.show ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0 pointer-events-none"}`}>
        <div className={`flex items-center px-5 py-3.5 rounded-xl shadow-2xl border ${
          toast.type === "success" ? "bg-emerald-900 text-emerald-50 border-emerald-800" :
          toast.type === "error" ? "bg-rose-900 text-rose-50 border-rose-800" : "bg-slate-900 text-slate-50 border-slate-800"
        }`}>
          <p className="text-sm font-bold tracking-wide text-white">{toast.message}</p>
        </div>
      </div>

      {/* 1. TRANSACTION METRICS DASHBOARD */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800 shadow-xl text-white relative overflow-hidden">
          <div className="absolute -right-10 -top-10 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl"></div>
          <div className="relative z-10">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Net Volume (Collected)</p>
            <h3 className="text-3xl font-black">{formatCur(totalVolume)}</h3>
          </div>
          <p className="text-xs text-blue-300 mt-3 font-medium relative z-10 flex items-center gap-1">
            <span>✓</span> Excludes failed & refunded
          </p>
        </div>

        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm border-l-4 border-l-blue-500">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Payment Success Rate</p>
              <h3 className="text-3xl font-black text-slate-900">{successRate}%</h3>
            </div>
            <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center text-lg">📈</div>
          </div>
          <p className="text-xs text-slate-500 mt-3 font-medium">Out of {payments.length} total transaction attempts</p>
        </div>

        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm border-l-4 border-l-slate-300">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Refunded Volume</p>
              <h3 className="text-3xl font-black text-slate-700">{formatCur(totalRefunded)}</h3>
            </div>
            <div className="w-10 h-10 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center text-lg">↩️</div>
          </div>
          <p className="text-xs text-slate-500 mt-3 font-medium">Processed back to original source</p>
        </div>
      </div>

      {/* 2. TRANSACTION TABLE AREA */}
      <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden animate-in fade-in">
        
        {/* Table Toolbar */}
        <div className="px-6 py-5 border-b border-slate-100 bg-slate-50 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
          <div className="flex bg-white p-1 rounded-xl border border-slate-200 shadow-sm overflow-x-auto w-full lg:w-auto">
            {["ALL", "SUCCESS", "PENDING", "FAILED", "REFUNDED"].map((tab) => (
              <button 
                key={tab} 
                onClick={() => setFilter(tab as any)} 
                className={`px-4 py-2 text-xs font-bold rounded-lg transition-all ${filter === tab ? "bg-slate-900 text-white shadow-md" : "text-slate-600 hover:bg-slate-50"}`}
              >
                {tab}
              </button>
            ))}
          </div>
          
          <div className="flex w-full lg:w-auto gap-3">
            <div className="relative w-full lg:w-64">
              <input 
                type="text" 
                placeholder="Search Txn ID or Client..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full border border-slate-200 rounded-xl pl-10 pr-4 py-2.5 text-sm focus:ring-2 focus:ring-blue-500 outline-none shadow-sm transition-shadow"
              />
              <span className="absolute left-3 top-2.5 text-slate-400">🔍</span>
            </div>
            <button 
              onClick={handleExportCSV}
              disabled={isExporting}
              className="bg-white border border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-50 px-4 py-2.5 rounded-xl text-sm font-bold shadow-sm transition-colors whitespace-nowrap disabled:opacity-50"
            >
              {isExporting ? "Exporting..." : "⬇ Export CSV"}
            </button>
          </div>
        </div>

        {/* Data Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-white text-xs uppercase tracking-widest text-slate-400 border-b border-slate-100">
                <th className="px-6 py-4 font-bold">Transaction / Date</th>
                <th className="px-6 py-4 font-bold">Client Details</th>
                <th className="px-6 py-4 font-bold">Amount & Method</th>
                <th className="px-6 py-4 font-bold">Status</th>
                <th className="px-6 py-4 font-bold text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredPayments.map((txn) => (
                <tr key={txn.id} className="hover:bg-slate-50 transition-colors group">
                  
                  {/* Column 1: Txn Info */}
                  <td className="px-6 py-4">
                    <p className="font-bold text-slate-900 text-sm font-mono">{txn.id}</p>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mt-1">{txn.date}</p>
                  </td>

                  {/* Column 2: Client Info */}
                  <td className="px-6 py-4">
                    <p className="font-bold text-slate-800 text-sm">{txn.clientName}</p>
                    <div className="flex items-center gap-1.5 mt-0.5">
                      <span className="text-xs font-medium text-slate-500">{txn.clientEmail}</span>
                    </div>
                  </td>

                  {/* Column 3: Financials */}
                  <td className="px-6 py-4">
                    <p className="font-black text-slate-900 text-sm">{formatCur(txn.amount)}</p>
                    <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mt-0.5">{txn.method}</p>
                  </td>

                  {/* Column 4: Status Badge */}
                  <td className="px-6 py-4">
                    <span className={`px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wide border ${getStatusStyle(txn.status)}`}>
                      {txn.status}
                    </span>
                  </td>

                  {/* Column 5: Actions */}
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button 
                        title="Download Payment Receipt"
                        className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors border border-transparent hover:border-blue-100"
                      >
                        ⬇ Receipt
                      </button>

                      {/* Refund Action only available for successful payments */}
                      {txn.status === "SUCCESS" && (
                        <button 
                          onClick={() => handleIssueRefund(txn.id, txn.clientName)}
                          disabled={isProcessing === txn.id}
                          className="bg-white border border-slate-200 text-rose-600 px-3 py-1.5 rounded-lg text-xs font-bold shadow-sm hover:bg-rose-50 hover:border-rose-200 transition-all disabled:opacity-50"
                        >
                          {isProcessing === txn.id ? "Processing..." : "Refund"}
                        </button>
                      )}

                      {/* Retry Action for Failed payments */}
                      {txn.status === "FAILED" && (
                        <button className="bg-white border border-slate-200 text-slate-700 px-3 py-1.5 rounded-lg text-xs font-bold shadow-sm hover:bg-slate-50 transition-all">
                          View Log
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
              
              {/* Empty State */}
              {filteredPayments.length === 0 && (
                <tr>
                  <td colSpan={5} className="p-16 text-center">
                    <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center text-2xl mx-auto mb-3 border border-slate-100">💳</div>
                    <p className="font-bold text-slate-900 text-lg">No transactions found</p>
                    <p className="text-sm text-slate-500 mt-1">Adjust your filters or search query to find payments.</p>
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