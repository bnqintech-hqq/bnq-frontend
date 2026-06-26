"use client";

import React, { useState, useEffect } from "react";

// --- TypeScript Interfaces ---
interface Invoice {
  id: string;
  clientName: string;
  clientEmail: string;
  serviceName: string;
  amount: number;
  status: "PAID" | "PENDING" | "OVERDUE" | "DRAFT";
  issueDate: string;
  dueDate: string;
}

export default function InvoiceTable() {
  const [toast, setToast] = useState<{ show: boolean; message: string; type: "success" | "error" | "info" }>({ show: false, message: "", type: "info" });
  
  const [isLoading, setIsLoading] = useState(true);
  const [invoices, setInvoices] = useState<Invoice[]>([]);
  
  // Filters & Search
  const [filter, setFilter] = useState<"ALL" | "PAID" | "PENDING" | "OVERDUE">("ALL");
  const [searchQuery, setSearchQuery] = useState("");

  // Action States
  const [isProcessing, setIsProcessing] = useState<string | null>(null);

  const showToast = (message: string, type: "success" | "error" | "info" = "info") => {
    setToast({ show: true, message, type });
    setTimeout(() => setToast({ show: false, message: "", type: "info" }), 3000);
  };

  // --- 1. FETCH INVOICES DATA ---
  useEffect(() => {
    let mounted = true;
    async function loadInvoices() {
      try {
        // Mocking API Call: fetch('/api/invoices')
        setTimeout(() => {
          if (mounted) {
            setInvoices([
              {
                id: "INV-2026-0091",
                clientName: "Aakash Verma",
                clientEmail: "aakash@company.com",
                serviceName: "Cloud VPS High Performance",
                amount: 3500,
                status: "PAID",
                issueDate: "01 Jun 2026",
                dueDate: "08 Jun 2026"
              },
              {
                id: "INV-2026-0092",
                clientName: "Priya Designs",
                clientEmail: "hello@priyadesigns.in",
                serviceName: "Managed WordPress Hosting",
                amount: 4999,
                status: "PENDING",
                issueDate: "10 Jun 2026",
                dueDate: "17 Jun 2026"
              },
              {
                id: "INV-2026-0093",
                clientName: "Rahul Sharma",
                clientEmail: "rahul99@gmail.com",
                serviceName: "Domain Renewal (.com)",
                amount: 999,
                status: "OVERDUE",
                issueDate: "25 May 2026",
                dueDate: "01 Jun 2026"
              },
              {
                id: "INV-2026-0094",
                clientName: "Tech Solutions Pvt Ltd",
                clientEmail: "billing@techsol.in",
                serviceName: "Enterprise Cloud Backup",
                amount: 15000,
                status: "PAID",
                issueDate: "20 May 2026",
                dueDate: "27 May 2026"
              },
              {
                id: "INV-2026-0095",
                clientName: "Nitin Kumar",
                clientEmail: "nitin.k@startup.com",
                serviceName: "UI/UX Design Retainer",
                amount: 25000,
                status: "DRAFT",
                issueDate: "11 Jun 2026",
                dueDate: "18 Jun 2026"
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
    loadInvoices();
    return () => { mounted = false; };
  }, []);

  // --- 2. ACTION HANDLERS ---
  const handleMarkAsPaid = async (id: string) => {
    setIsProcessing(id);
    showToast("Updating invoice status...", "info");
    
    // Mock API Call: fetch(`/api/invoices/${id}/pay`, { method: 'POST' })
    setTimeout(() => {
      setInvoices(prev => prev.map(inv => 
        inv.id === id ? { ...inv, status: "PAID" } : inv
      ));
      setIsProcessing(null);
      showToast("Invoice marked as PAID successfully!", "success");
    }, 1000);
  };

  const handleSendReminder = async (id: string, clientName: string) => {
    setIsProcessing(id);
    showToast(`Sending email reminder to ${clientName}...`, "info");
    
    // Mock API Call: fetch(`/api/invoices/${id}/remind`, { method: 'POST' })
    setTimeout(() => {
      setIsProcessing(null);
      showToast("Payment reminder sent successfully!", "success");
    }, 1000);
  };

  const handleDownloadPDF = (id: string) => {
    showToast(`Downloading PDF for ${id}...`, "success");
    // Actual logic will trigger your jsPDF generator here
  };

  // --- FORMATTERS & FILTERS ---
  const formatCur = (num: number) => `₹${num.toLocaleString('en-IN')}`;

  const getStatusStyle = (status: string) => {
    switch(status) {
      case "PAID": return "bg-emerald-50 text-emerald-700 border-emerald-200";
      case "PENDING": return "bg-amber-50 text-amber-700 border-amber-200";
      case "OVERDUE": return "bg-rose-50 text-rose-700 border-rose-200 animate-pulse";
      case "DRAFT": return "bg-slate-100 text-slate-600 border-slate-300";
      default: return "bg-slate-50 text-slate-700 border-slate-200";
    }
  };

  const filteredInvoices = invoices.filter(inv => {
    const matchesFilter = filter === "ALL" || inv.status === filter;
    const matchesSearch = inv.clientName.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          inv.clientEmail.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          inv.id.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  // --- FINANCIAL METRICS ---
  const totalPaid = invoices.filter(i => i.status === "PAID").reduce((acc, curr) => acc + curr.amount, 0);
  const totalPending = invoices.filter(i => i.status === "PENDING").reduce((acc, curr) => acc + curr.amount, 0);
  const totalOverdue = invoices.filter(i => i.status === "OVERDUE").reduce((acc, curr) => acc + curr.amount, 0);

  // --- RENDER LOADER ---
  if (isLoading) {
    return (
      <div className="w-full h-96 bg-white rounded-3xl border border-slate-200 shadow-sm flex flex-col items-center justify-center">
        <div className="w-10 h-10 border-4 border-slate-200 border-t-indigo-600 rounded-full animate-spin" />
        <p className="mt-4 font-bold text-slate-500 animate-pulse">Loading Financial Ledger...</p>
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

      {/* 1. FINANCIAL METRICS DASHBOARD */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm border-l-4 border-l-emerald-500 hover:shadow-md transition-shadow">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Total Revenue Collected</p>
              <h3 className="text-3xl font-black text-slate-900">{formatCur(totalPaid)}</h3>
            </div>
            <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center text-lg">💰</div>
          </div>
          <p className="text-xs text-slate-500 mt-3 font-medium flex items-center gap-1"><span className="text-emerald-500">↑ {invoices.filter(i => i.status === "PAID").length}</span> Invoices paid</p>
        </div>

        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm border-l-4 border-l-amber-400 hover:shadow-md transition-shadow">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Awaiting Payment</p>
              <h3 className="text-3xl font-black text-slate-900">{formatCur(totalPending)}</h3>
            </div>
            <div className="w-10 h-10 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center text-lg">⏳</div>
          </div>
          <p className="text-xs text-slate-500 mt-3 font-medium flex items-center gap-1"><span className="text-amber-500">● {invoices.filter(i => i.status === "PENDING").length}</span> Pending invoices</p>
        </div>

        <div className="bg-rose-50 rounded-2xl p-6 border border-rose-200 shadow-sm border-l-4 border-l-rose-500 hover:shadow-md transition-shadow">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-[10px] font-bold text-rose-400 uppercase tracking-widest mb-1">Overdue Amount</p>
              <h3 className="text-3xl font-black text-rose-900">{formatCur(totalOverdue)}</h3>
            </div>
            <div className="w-10 h-10 rounded-full bg-white text-rose-600 flex items-center justify-center text-lg">⚠️</div>
          </div>
          <p className="text-xs text-rose-600 mt-3 font-bold flex items-center gap-1">Action Required! {invoices.filter(i => i.status === "OVERDUE").length} invoices are late.</p>
        </div>
      </div>

      {/* 2. INVOICE TABLE AREA */}
      <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden animate-in fade-in">
        
        {/* Table Toolbar */}
        <div className="px-6 py-5 border-b border-slate-100 bg-slate-50 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
          <div className="flex bg-white p-1 rounded-xl border border-slate-200 shadow-sm overflow-x-auto w-full lg:w-auto">
            {["ALL", "PAID", "PENDING", "OVERDUE"].map((tab) => (
              <button 
                key={tab} 
                onClick={() => setFilter(tab as any)} 
                className={`px-5 py-2.5 text-xs font-bold rounded-lg transition-all ${filter === tab ? "bg-slate-900 text-white shadow-md" : "text-slate-600 hover:bg-slate-50"}`}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="flex w-full lg:w-auto gap-3">
            <div className="relative w-full lg:w-72">
              <input 
                type="text" 
                placeholder="Search Client or Invoice ID..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full border border-slate-200 rounded-xl pl-10 pr-4 py-2.5 text-sm focus:ring-2 focus:ring-indigo-500 outline-none shadow-sm transition-shadow"
              />
              <span className="absolute left-3 top-2.5 text-slate-400">🔍</span>
            </div>
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2.5 rounded-xl text-sm font-bold shadow-md transition-colors whitespace-nowrap">
              + New Invoice
            </button>
          </div>
        </div>

        {/* Data Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-white text-xs uppercase tracking-widest text-slate-400 border-b border-slate-100">
                <th className="px-6 py-4 font-bold">Client Details</th>
                <th className="px-6 py-4 font-bold">Invoice Details</th>
                <th className="px-6 py-4 font-bold">Issue / Due Date</th>
                <th className="px-6 py-4 font-bold">Status</th>
                <th className="px-6 py-4 font-bold text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredInvoices.map((inv) => (
                <tr key={inv.id} className="hover:bg-slate-50 transition-colors group">
                  
                  {/* Column 1: Client */}
                  <td className="px-6 py-4">
                    <p className="font-bold text-slate-900 text-sm group-hover:text-indigo-600 transition-colors cursor-pointer">{inv.clientName}</p>
                    <p className="text-xs font-medium text-slate-500 mt-0.5">{inv.clientEmail}</p>
                  </td>

                  {/* Column 2: Invoice Amount & Service */}
                  <td className="px-6 py-4">
                    <p className="font-black text-slate-900 text-sm">{formatCur(inv.amount)}</p>
                    <div className="flex items-center gap-1.5 mt-0.5">
                      <span className="text-[10px] font-bold text-slate-400">{inv.id}</span>
                      <span className="text-slate-300">•</span>
                      <span className="text-xs font-medium text-slate-500 truncate max-w-[150px]" title={inv.serviceName}>{inv.serviceName}</span>
                    </div>
                  </td>

                  {/* Column 3: Dates */}
                  <td className="px-6 py-4">
                    <p className="text-sm font-medium text-slate-700">{inv.issueDate}</p>
                    <p className={`text-xs font-bold mt-0.5 ${inv.status === 'OVERDUE' ? 'text-rose-600' : 'text-slate-400'}`}>
                      Due: {inv.dueDate}
                    </p>
                  </td>

                  {/* Column 4: Status Badge */}
                  <td className="px-6 py-4">
                    <span className={`px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wide border ${getStatusStyle(inv.status)}`}>
                      {inv.status}
                    </span>
                  </td>

                  {/* Column 5: Actions */}
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button 
                        onClick={() => handleDownloadPDF(inv.id)}
                        title="Download PDF"
                        className="p-2 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors border border-transparent hover:border-indigo-100"
                      >
                        ⬇
                      </button>

                      {/* Dynamic Action Buttons based on status */}
                      {(inv.status === "PENDING" || inv.status === "OVERDUE") && (
                        <>
                          <button 
                            onClick={() => handleSendReminder(inv.id, inv.clientName)}
                            disabled={isProcessing === inv.id}
                            title="Send Email Reminder"
                            className="p-2 text-slate-400 hover:text-amber-600 hover:bg-amber-50 rounded-lg transition-colors border border-transparent hover:border-amber-100 disabled:opacity-50"
                          >
                            ✉️
                          </button>
                          <button 
                            onClick={() => handleMarkAsPaid(inv.id)}
                            disabled={isProcessing === inv.id}
                            className="bg-emerald-50 border border-emerald-200 text-emerald-700 px-3 py-1.5 rounded-lg text-xs font-bold shadow-sm hover:bg-emerald-600 hover:text-white transition-all disabled:opacity-50"
                          >
                            {isProcessing === inv.id ? "..." : "Mark Paid"}
                          </button>
                        </>
                      )}

                      {inv.status === "PAID" && (
                        <button className="bg-white border border-slate-200 text-slate-600 px-4 py-1.5 rounded-lg text-xs font-bold shadow-sm hover:bg-slate-50 transition-colors">
                          View
                        </button>
                      )}

                    </div>
                  </td>
                </tr>
              ))}
              
              {/* Empty State */}
              {filteredInvoices.length === 0 && (
                <tr>
                  <td colSpan={5} className="p-16 text-center">
                    <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center text-2xl mx-auto mb-3 border border-slate-100">🧾</div>
                    <p className="font-bold text-slate-900 text-lg">No invoices found</p>
                    <p className="text-sm text-slate-500 mt-1">Try adjusting your filters or search criteria.</p>
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