"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

// 👇 YAHAN HUMNE APNE NAYE PREMIUM COMPONENTS IMPORT KIYE HAIN 👇
import ClientServices from "./ClientServices"; 
import ClientTickets from "./ClientTickets";

// --- Add Funds Modal Component ---
function AddFundsModal({ isOpen, onClose, onConfirm }: { isOpen: boolean, onClose: () => void, onConfirm: (amount: number) => void }) {
  const [amount, setAmount] = useState("");

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl w-full max-w-sm shadow-2xl p-6">
        <h3 className="text-xl font-black text-slate-900 mb-2">Add Funds to Wallet</h3>
        <p className="text-sm text-slate-500 mb-6">Enter the amount you wish to add to your account.</p>
        
        <input 
          type="number" 
          value={amount} 
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter amount (e.g. 500)" 
          className="w-full border border-slate-200 rounded-xl px-4 py-3 mb-6 focus:ring-2 focus:ring-blue-500 outline-none"
        />

        <div className="flex gap-3">
          <button onClick={onClose} className="flex-1 px-4 py-3 rounded-xl font-bold text-slate-600 border border-slate-200 hover:bg-slate-50 transition">Cancel</button>
          <button 
            onClick={() => { 
              onConfirm(Number(amount)); 
              setAmount(""); // clear input after submit
              onClose(); 
            }} 
            disabled={!amount || Number(amount) <= 0}
            className="flex-1 px-4 py-3 rounded-xl font-bold bg-blue-600 text-white shadow-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition"
          >
            Pay Now
          </button>
        </div>
      </div>
    </div>
  );
}

// --- Types based on your Prisma Schema ---
interface Service {
  id: string;
  name: string;
  type: string;
  status: "ACTIVE" | "PENDING" | "SUSPENDED" | "DELIVERED";
  price: number;
  nextBillingDate: string | null;
}

interface Transaction {
  id: string;
  amount: number;
  type: "CREDIT" | "DEBIT";
  description: string;
  status: "SUCCESS" | "FAILED" | "PENDING";
  date: string;
}

interface Ticket {
  id: string;
  subject: string;
  status: "OPEN" | "IN_PROGRESS" | "RESOLVED";
  updatedAt: string;
}

interface ClientData {
  id: string;
  name: string;
  email: string;
  phone?: string; 
  walletBalance: number;
  resellerBrand: string; 
  joinedDate?: string; 
  services: Service[];
  transactions: Transaction[];
  tickets: Ticket[];
}

export default function ClientDashboard() {
  const router = useRouter();
  const [toast, setToast] = useState<{ show: boolean; message: string; type: "success" | "error" | "info" }>({ show: false, message: "", type: "info" });
  
  // Tabs: overview, services, billing, support, settings
  const [activeTab, setActiveTab] = useState<"overview" | "services" | "billing" | "support" | "settings">("overview");
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<ClientData | null>(null);

  // Forms
  const [profileForm, setProfileForm] = useState({ name: "", phone: "" });
  const [passwordForm, setPasswordForm] = useState({ currentPassword: "", newPassword: "" });

  // NAYA STATE: Modal handle karne ke liye
  const [isAddFundsModalOpen, setIsAddFundsModalOpen] = useState(false);

  const showToast = (message: string, type: "success" | "error" | "info" = "info") => {
    setToast({ show: true, message, type });
    setTimeout(() => setToast({ show: false, message: "", type: "info" }), 3000);
  };

  // --- 1. FETCH CLIENT DATA FROM API ---
  useEffect(() => {
    let mounted = true;
    async function loadClientData() {
      try {
        const res = await fetch("/api/user/dashboard"); 
        const result = await res.json();

        if (!res.ok || !result.success) throw new Error(result.error || "Failed to fetch data");

        if (mounted) {
          const finalData = { 
            ...result.data, 
            joinedDate: result.data.joinedDate || "15 May 2026",
            phone: result.data.phone || "+91 " 
          };
          setData(finalData);
          setProfileForm({ name: finalData.name, phone: finalData.phone || "" });
          setIsLoading(false);
        }
      } catch (err: any) {
        if (mounted) {
          showToast(err.message, "error");
          setIsLoading(false);
        }
      }
    }
    loadClientData();
    return () => { mounted = false; };
  }, []);

  // --- NAYA HANDLER: FUNDS ADD KARNE KE LIYE ---
  const handleAddFunds = async (amount: number) => {
    if (amount <= 0) {
      showToast("Please enter a valid amount.", "error");
      return;
    }
    
    showToast("Processing your payment...", "info");
    
    try {
      // YAHAN ASLI API CALL AYEGI (e.g. Razorpay, Stripe, ya UPI gateway webhook)
      /* const res = await fetch("/api/client/wallet/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount })
      });
      if (!res.ok) throw new Error("Payment failed");
      */

      // API call mock - Simulate delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Local state update jisse frontend turant update dikhaye
      setData(prev => {
        if (!prev) return prev;
        
        // Naya transaction create karna
        const newTransaction: Transaction = {
          id: `TXN-${Math.floor(Math.random() * 1000000)}`,
          amount: amount,
          type: "CREDIT",
          description: "Wallet Top-up",
          status: "SUCCESS",
          date: new Date().toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' })
        };

        return {
          ...prev,
          walletBalance: prev.walletBalance + amount, // Balance update
          transactions: [newTransaction, ...prev.transactions] // History mein add
        };
      });

      showToast(`₹${amount.toLocaleString('en-IN')} added to your wallet successfully!`, "success");
    } catch (err) {
      showToast("Transaction failed. Please try again.", "error");
    }
  };

  // --- 2. ACTION HANDLERS ---
  const handleUpdateProfile = async () => {
    showToast("Updating profile...", "info");
    try {
      const res = await fetch("/api/client/profile", { 
        method: "PUT", 
        headers: { "Content-Type": "application/json" }, 
        body: JSON.stringify(profileForm) 
      });
      if (!res.ok) throw new Error("Failed to update profile");
      
      // Update local state without refreshing
      setData(prev => prev ? { ...prev, name: profileForm.name, phone: profileForm.phone } : null);
      showToast("Profile updated successfully!", "success");
    } catch (err) {
      showToast("Update failed", "error");
    }
  };

  const handleChangePassword = async () => {
    showToast("Updating password...", "info");
    try {
      const res = await fetch("/api/client/password", { 
        method: "PUT", 
        headers: { "Content-Type": "application/json" }, 
        body: JSON.stringify(passwordForm) 
      });
      if (!res.ok) throw new Error("Failed to update password");
      showToast("Password updated successfully!", "success");
      setPasswordForm({ currentPassword: "", newPassword: "" });
    } catch (err) {
      showToast("Password update failed", "error");
    }
  };

  // --- FORMATTERS ---
  const formatCur = (num: number) => `₹${num.toLocaleString('en-IN')}`;
  const getStatusColor = (status: string) => {
    switch(status) {
      case "ACTIVE": case "SUCCESS": case "RESOLVED": case "DELIVERED": return "bg-emerald-50 text-emerald-700 border-emerald-200";
      case "PENDING": case "IN_PROGRESS": case "OPEN": return "bg-amber-50 text-amber-700 border-amber-200";
      case "SUSPENDED": case "FAILED": return "bg-rose-50 text-rose-700 border-rose-200";
      default: return "bg-slate-50 text-slate-700 border-slate-200";
    }
  };

  // --- RENDER LOADER ---
  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#f8fafc] flex flex-col items-center justify-center">
        <div className="w-12 h-12 border-4 border-slate-200 border-t-blue-600 rounded-full animate-spin" />
        <p className="mt-4 font-bold text-slate-500 animate-pulse">Loading Your Portal...</p>
      </div>
    );
  }

  if (!data) return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center text-center px-4">
      <div className="mx-auto max-w-sm rounded-2xl border border-red-100 bg-white p-8 shadow-lg">
        <h2 className="mb-2 text-lg font-bold text-slate-900">Unable to load dashboard</h2>
        <p className="mb-4 text-sm text-slate-500">Please check your connection and try again.</p>
        <button onClick={() => window.location.reload()} className="rounded-lg bg-blue-600 px-5 py-2 text-sm font-semibold text-white hover:bg-blue-700">Retry</button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#f8fafc] font-sans pt-28 pb-16 relative">
      
      {/* GLOBAL TOAST */}
      <div className={`fixed bottom-5 right-5 z-50 transform transition-all duration-300 ${toast.show ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0 pointer-events-none"}`}>
        <div className={`flex items-center px-5 py-3.5 rounded-xl shadow-2xl border ${
          toast.type === "success" ? "bg-emerald-900 text-emerald-50 border-emerald-800" :
          toast.type === "error" ? "bg-rose-900 text-rose-50 border-rose-800" : "bg-slate-900 text-slate-50 border-slate-800"
        }`}>
          <p className="text-sm font-bold tracking-wide text-white">{toast.message}</p>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-6 border-b border-slate-200 pb-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="px-3 py-1 text-[11px] font-black uppercase tracking-widest rounded-md bg-slate-900 text-white">Client Portal</span>
              <span className="text-xs font-semibold text-slate-500">Powered by {data.resellerBrand}</span>
            </div>
            <h1 className="text-3xl font-black text-slate-900 tracking-tight">Welcome back, {(data.name || "User").split(" ")[0]} 👋</h1>
            <p className="text-slate-500 text-sm font-medium mt-1">Manage your hosting, domains, and billing all in one place.</p>
          </div>
          <button onClick={async () => { showToast("Logging out..."); await fetch("/api/auth/logout", { method: "POST", credentials: "include" }).catch(() => {}); router.push("/login/client"); }} className="bg-white border border-slate-200 text-slate-600 hover:text-rose-600 px-5 py-2.5 rounded-lg text-sm font-bold transition shadow-sm">
            Sign Out
          </button>
        </div>

        {/* TABS NAVIGATION */}
        <div className="flex overflow-x-auto gap-2 mb-8 bg-white p-1.5 rounded-xl w-fit border border-slate-200 shadow-sm scrollbar-hide">
          {[
            { id: "overview", label: "Overview" },
            { id: "services", label: "My Services" },
            { id: "billing", label: "Billing & Invoices" },
            { id: "support", label: "Support Tickets" },
            { id: "settings", label: "My Profile" }, 
          ].map((tab) => (
            <button key={tab.id} onClick={() => setActiveTab(tab.id as any)} className={`px-5 py-2.5 text-sm font-bold rounded-lg transition-all whitespace-nowrap ${activeTab === tab.id ? "bg-blue-600 text-white shadow-md" : "text-slate-600 hover:bg-slate-50"}`}>
              {tab.label}
            </button>
          ))}
        </div>

        {/* ================= OVERVIEW TAB ================= */}
        {activeTab === "overview" && (
          <div className="space-y-6 animate-in fade-in duration-300">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between">
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Active Services</p>
                  <h3 className="text-4xl font-black text-slate-900">{data.services.filter(s => s.status === 'ACTIVE').length}</h3>
                </div>
                <button onClick={() => setActiveTab('services')} className="text-blue-600 text-sm font-bold text-left mt-4 hover:underline">View All Services →</button>
              </div>
              <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800 shadow-xl text-white flex flex-col justify-between relative overflow-hidden">
                <div className="absolute -right-10 -top-10 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl"></div>
                <div className="relative z-10">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Prepaid Wallet</p>
                  <h3 className="text-4xl font-black transition-all duration-500">{formatCur(data.walletBalance)}</h3>
                </div>
                {/* YAHAN BUTTON UPDATE KIYA HAI */}
                <button 
                  onClick={() => setIsAddFundsModalOpen(true)} 
                  className="bg-white/10 text-white text-sm font-bold text-left mt-4 hover:bg-white/20 p-2 rounded-lg transition w-fit backdrop-blur-sm"
                >
                  + Add Funds
                </button>
              </div>
              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between">
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Open Tickets</p>
                  <h3 className="text-4xl font-black text-slate-900">{data.tickets.filter(t => t.status === 'OPEN').length}</h3>
                </div>
                <button onClick={() => setActiveTab('support')} className="text-blue-600 text-sm font-bold text-left mt-4 hover:underline">Go to Helpdesk →</button>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
              <div className="px-6 py-5 border-b border-slate-100 bg-slate-50 flex justify-between items-center">
                <h3 className="font-bold text-slate-800">Recent Services</h3>
              </div>
              {data.services.length === 0 ? (
                <p className="p-8 text-center text-slate-500 text-sm">You don't have any active services yet.</p>
              ) : (
                <div className="divide-y divide-slate-100">
                  {data.services.slice(0, 3).map((service) => (
                    <div key={service.id} className="p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 hover:bg-slate-50">
                      <div>
                        <h4 className="font-bold text-slate-900">{service.name}</h4>
                        <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold mt-1">{service.type}</p>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className={`px-2.5 py-1 rounded-md text-[10px] font-bold uppercase border ${getStatusColor(service.status)}`}>{service.status}</span>
                        <button onClick={() => setActiveTab('services')} className="text-sm font-bold text-blue-600 hover:bg-blue-50 px-3 py-1.5 rounded-lg border border-blue-100">Manage</button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {/* ================= SYNCED MY SERVICES TAB ================= */}
        {activeTab === "services" && (
          <div className="animate-in fade-in duration-300">
            <ClientServices />
          </div>
        )}

        {/* ================= BILLING & TRANSACTIONS TAB ================= */}
        {activeTab === "billing" && (
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden animate-in fade-in duration-300">
            <div className="px-6 py-5 border-b border-slate-100 bg-slate-50 flex justify-between items-center">
              <div>
                <h3 className="font-bold text-slate-800">Billing History</h3>
                <p className="text-xs text-slate-500 mt-1">View your invoices and payment history.</p>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-white text-xs uppercase tracking-widest text-slate-400 border-b border-slate-100">
                    <th className="px-6 py-4 font-bold">Date / Txn ID</th>
                    <th className="px-6 py-4 font-bold">Description</th>
                    <th className="px-6 py-4 font-bold">Amount</th>
                    <th className="px-6 py-4 font-bold">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {data.transactions.map((txn) => (
                    <tr key={txn.id} className="hover:bg-slate-50 transition-colors">
                      <td className="px-6 py-4">
                        <p className="font-bold text-slate-900 text-sm">{txn.date}</p>
                        <p className="text-xs text-slate-400 mt-0.5">{txn.id}</p>
                      </td>
                      <td className="px-6 py-4 font-medium text-slate-700 text-sm">{txn.description}</td>
                      <td className="px-6 py-4 font-black text-slate-800 text-sm">
                        <span className={txn.type === "CREDIT" ? "text-emerald-600" : ""}>
                          {txn.type === "CREDIT" ? "+" : "-"}{formatCur(txn.amount)}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`px-2.5 py-1 rounded-md text-[10px] font-bold uppercase border ${getStatusColor(txn.status)}`}>{txn.status}</span>
                      </td>
                    </tr>
                  ))}
                  {data.transactions.length === 0 && (
                    <tr><td colSpan={4} className="p-8 text-center text-slate-500">No transactions yet.</td></tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* ================= SYNCED SUPPORT TICKETS TAB ================= */}
        {activeTab === "support" && (
          <div className="animate-in fade-in duration-300">
            <ClientTickets />
          </div>
        )}

        {/* ================= PROFILE & SETTINGS TAB ================= */}
        {activeTab === "settings" && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 animate-in fade-in duration-300">
            
            {/* Client Profile Identity Card */}
            <div className="lg:col-span-1 space-y-6">
              <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
                <div className="h-24 bg-gradient-to-r from-blue-600 to-indigo-600"></div>
                <div className="px-6 pb-6 relative">
                  <div className="w-20 h-20 bg-white rounded-full border-4 border-white shadow-md flex items-center justify-center text-3xl relative z-10 -mt-10 mb-4">
                    👤
                  </div>
                  <div>
                    <h3 className="font-black text-slate-900 text-xl truncate" title={data.name}>{data.name}</h3>
                    <p className="text-sm font-semibold text-slate-500 truncate mt-0.5" title={data.email}>{data.email}</p>
                    <p className="text-sm font-semibold text-slate-500 mt-0.5">{data.phone}</p>
                    
                    <div className="mt-6 space-y-4 border-t border-slate-100 pt-4">
                      <div>
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Account ID</p>
                        <p className="text-sm font-bold text-slate-700 font-mono mt-0.5 break-all">{data.id}</p>
                      </div>
                      <div>
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Member Since</p>
                        <p className="text-sm font-bold text-slate-700 mt-0.5">{data.joinedDate}</p>
                      </div>
                      <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Managed By</p>
                        <p className="text-sm font-black text-blue-700 mt-0.5">{data.resellerBrand}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Editable Settings */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                <h3 className="font-black text-slate-900 text-xl mb-6">Edit Profile Details</h3>
                <div className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Full Name</label>
                      <input type="text" value={profileForm.name} onChange={e => setProfileForm({...profileForm, name: e.target.value})} className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm font-bold focus:ring-2 focus:ring-blue-500 outline-none" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Phone Number</label>
                      <input type="text" value={profileForm.phone} onChange={e => setProfileForm({...profileForm, phone: e.target.value})} placeholder="+91 9876543210" className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm font-bold focus:ring-2 focus:ring-blue-500 outline-none" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Email Address</label>
                    <input type="email" value={data.email} disabled className="w-full border border-slate-200 bg-slate-50 rounded-xl px-4 py-3 text-sm text-slate-500 font-bold outline-none cursor-not-allowed" />
                    <p className="text-[10px] text-slate-400 mt-1">Email cannot be changed directly for security reasons. Contact support.</p>
                  </div>
                  <button onClick={handleUpdateProfile} className="bg-slate-900 text-white font-bold py-3 px-6 rounded-xl text-sm hover:bg-slate-800 shadow-md transition-colors">
                    Save Changes
                  </button>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                <h3 className="font-black text-slate-900 text-xl mb-6">Security & Password</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Current Password</label>
                    <input type="password" value={passwordForm.currentPassword} onChange={e => setPasswordForm({...passwordForm, currentPassword: e.target.value})} className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 outline-none" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase mb-2">New Password</label>
                    <input type="password" value={passwordForm.newPassword} onChange={e => setPasswordForm({...passwordForm, newPassword: e.target.value})} className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 outline-none" />
                  </div>
                  <button onClick={handleChangePassword} className="border border-blue-200 bg-blue-50 text-blue-700 font-bold py-3 px-6 rounded-xl text-sm hover:bg-blue-100 shadow-sm transition-colors">
                    Change Password
                  </button>
                </div>
              </div>
            </div>

          </div>
        )}

      </main>

      {/* YAHAN MODAL RENDER HO RAHA HAI */}
      <AddFundsModal 
        isOpen={isAddFundsModalOpen} 
        onClose={() => setIsAddFundsModalOpen(false)} 
        onConfirm={handleAddFunds} 
      />

    </div>
  );
}