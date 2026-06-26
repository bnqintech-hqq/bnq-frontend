"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

// 👇 YAHAN HUMNE APNE NAYE PREMIUM COMPONENTS IMPORT KIYE HAIN 👇
// Note: Apne folders ke hisaab se in paths (like "@/components/...") ko adjust kar lena
import AddCustomerModal, { NewClientData } from "./AddCustomerModal"; 
import InvoiceTable from "./InvoiceTable";
import PaymentHistory from "./PaymentHistory";

// --- TypeScript Interfaces ---
interface SubClient {
  id: string;
  name: string;
  email: string;
  status: string;
  servicesCount: number;
  billedMonth: string;
}

interface ResellerData {
  id: string;
  name: string;
  email: string;
  brandName: string;
  markupPercent: number;
  walletBalance: number;
  subClients: SubClient[];
}

export default function ResellerDashboard() {
  const router = useRouter();
  const [toast, setToast] = useState<{ show: boolean; message: string; type: "success" | "info" | "error" }>({ show: false, message: "", type: "info" });
  const [activeTab, setActiveTab] = useState<"overview" | "clients" | "invoices" | "payments" | "settings">("overview");
  
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<ResellerData | null>(null);
  
  // Modals State
  const [showAddClientModal, setShowAddClientModal] = useState(false);

  // Profile States
  const [profileForm, setProfileForm] = useState({ name: "", email: "" });
  const [passwordForm, setPasswordForm] = useState({ currentPassword: "", newPassword: "" });
  const [configForm, setConfigForm] = useState({ brandName: "", markupPercent: 0 });

  const showToast = (message: string, type: "success" | "info" | "error" = "info") => {
    setToast({ show: true, message, type });
    setTimeout(() => setToast({ show: false, message: "", type: "info" }), 3000);
  };

  // --- FETCH MASTER DATA ---
  useEffect(() => {
    let mounted = true;
    async function loadData() {
      try {
        const res = await fetch("/api/reseller/dashboard");
        const result = await res.json();
        
        if (!res.ok || !result.success) throw new Error(result.error || "Failed to fetch dashboard data");
        
        if (mounted) {
          setData(result.data);
          setProfileForm({ name: result.data.name || "", email: result.data.email || "" });
          setConfigForm({ brandName: result.data.brandName || "", markupPercent: result.data.markupPercent || 0 });
          setIsLoading(false);
        }
      } catch (err: any) {
        if (mounted) { showToast(err.message, "error"); setIsLoading(false); }
      }
    }
    loadData();
    return () => { mounted = false; };
  }, []);

  // --- DYNAMIC HANDLERS ---
  const handleClientAdded = (newClient: NewClientData) => {
    setData(prev => prev ? { ...prev, subClients: [newClient, ...prev.subClients] } : null);
    showToast(`${newClient.name} successfully added!`, "success");
  };

  const handleUpdateProfile = async () => {
    showToast("Updating profile...", "info");
    try {
      const res = await fetch("/api/reseller/profile", { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify(profileForm) });
      if (!res.ok) throw new Error("Update failed");
      showToast("Profile updated successfully!", "success");
    } catch (err) { showToast("Failed to update profile", "error"); }
  };

  const handleChangePassword = async () => {
    if (!passwordForm.currentPassword || !passwordForm.newPassword) return showToast("Enter both passwords", "error");
    showToast("Changing password...", "info");
    try {
      const res = await fetch("/api/reseller/password", { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify(passwordForm) });
      if (!res.ok) throw new Error("Password change failed");
      showToast("Password updated successfully!", "success");
      setPasswordForm({ currentPassword: "", newPassword: "" });
    } catch (err) { showToast("Failed to update password", "error"); }
  };

  const handleSaveConfig = async () => {
    showToast("Saving branding config...", "info");
    try {
      const res = await fetch("/api/reseller/config", { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify(configForm) });
      if (!res.ok) throw new Error("Config save failed");
      setData(prev => prev ? { ...prev, brandName: configForm.brandName, markupPercent: configForm.markupPercent } : null);
      showToast("Branding updated successfully!", "success");
    } catch (err) { showToast("Failed to save brand config", "error"); }
  };

  // --- RENDER LOADERS ---
  if (isLoading) {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center">
        <div className="w-12 h-12 border-4 border-slate-200 border-t-indigo-600 rounded-full animate-spin" />
        <p className="mt-4 font-bold text-slate-500 animate-pulse">Initializing Connected Workspace...</p>
      </div>
    );
  }

  if (!data) return <div className="text-center mt-20 text-rose-500 font-bold">Failed to load portal data. Check API.</div>;

  return (
    <div className="min-h-screen bg-slate-50 font-sans pt-32 pb-16 relative">
      
      {/* Toast Notification */}
      <div className={`fixed bottom-5 right-5 z-[110] transform transition-all duration-300 ${toast.show ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0 pointer-events-none"}`}>
        <div className={`flex items-center gap-3 px-5 py-3.5 rounded-xl shadow-2xl border ${
          toast.type === "success" ? "bg-emerald-900 text-emerald-50 border-emerald-800" :
          toast.type === "error"   ? "bg-rose-900 text-rose-50 border-rose-800" :
          "bg-slate-900 text-slate-50 border-slate-800"
        }`}>
          <p className="text-sm font-bold tracking-wide text-white">{toast.message}</p>
        </div>
      </div>

      {/* External Modal Mount */}
      <AddCustomerModal isOpen={showAddClientModal} onClose={() => setShowAddClientModal(false)} onSuccess={handleClientAdded} />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-6 border-b border-slate-200 pb-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="px-3 py-1 text-[11px] font-black uppercase tracking-widest rounded-md bg-indigo-600 text-white shadow-md">
                Reseller Portal
              </span>
              <span className="flex items-center gap-1.5 bg-emerald-50 border border-emerald-100 px-2.5 py-1 rounded-full">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-wider">Live Connection</span>
              </span>
            </div>
            <h1 className="text-3xl font-black text-slate-900 tracking-tight">{data.brandName} Workspace</h1>
          </div>
          <button onClick={async () => { showToast("Logging out...", "info"); await fetch("/api/auth/logout", { method: "POST", credentials: "include" }).catch(() => {}); router.push("/login/reseller"); }}
            className="bg-white border border-slate-200 text-slate-600 hover:text-rose-600 px-5 py-2.5 rounded-lg text-sm font-bold transition-all shadow-sm">
            Sign Out
          </button>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-8 bg-white p-1.5 rounded-xl w-fit border border-slate-200 shadow-sm">
          {[
            { id: "overview", label: "Overview" },
            { id: "clients", label: "Customers" },
            { id: "invoices", label: "Invoices" },
            { id: "payments", label: "Payments" },
            { id: "settings", label: "Settings" },
          ].map((tab) => (
            <button key={tab.id} onClick={() => setActiveTab(tab.id as any)}
              className={`px-5 py-2.5 text-sm font-bold rounded-lg transition-all ${activeTab === tab.id ? "bg-slate-900 text-white shadow-md" : "text-slate-600 hover:bg-slate-50"}`}>
              {tab.label}
            </button>
          ))}
        </div>

        {/* ================= OVERVIEW TAB ================= */}
        {activeTab === "overview" && (
          <div className="space-y-6 animate-in fade-in">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-slate-900 rounded-2xl p-8 text-white relative overflow-hidden border border-slate-800 shadow-xl col-span-1 md:col-span-2 flex flex-col justify-between">
                <div className="absolute top-0 right-0 w-72 h-72 bg-indigo-500/20 rounded-full blur-3xl" />
                <div className="relative z-10">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Master Wallet Balance</p>
                  <h3 className="text-5xl font-black tracking-tight">₹{data.walletBalance.toLocaleString()}<span className="text-2xl text-slate-500 font-medium">.00</span></h3>
                </div>
                <div className="mt-10 flex gap-4 relative z-10">
                  <button onClick={() => showToast("Calling Payment Gateway API...", "info")} className="bg-white text-slate-900 text-sm font-bold py-3 px-6 rounded-xl shadow-md hover:bg-slate-100">
                    + Add Funds
                  </button>
                </div>
              </div>
              <div className="bg-gradient-to-br from-indigo-600 to-blue-700 p-8 rounded-2xl border border-indigo-500 shadow-xl text-white flex flex-col justify-center">
                <p className="text-xs font-bold text-indigo-200 uppercase tracking-widest">Global Markup</p>
                <h3 className="text-5xl font-black mt-2">{data.markupPercent}%</h3>
              </div>
            </div>
          </div>
        )}

        {/* ================= CLIENTS TAB ================= */}
        {activeTab === "clients" && (
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden animate-in fade-in">
            <div className="px-6 py-5 border-b border-slate-200 flex justify-between items-center bg-slate-50">
              <h3 className="font-bold text-slate-800 text-lg">Customer Directory</h3>
              <button onClick={() => setShowAddClientModal(true)} className="bg-slate-900 text-white px-5 py-2.5 rounded-xl text-sm font-bold shadow-sm">
                + Add Customer
              </button>
            </div>
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-white text-xs uppercase tracking-widest text-slate-400 border-b border-slate-100">
                  <th className="px-6 py-4 font-bold">Customer Name</th>
                  <th className="px-6 py-4 font-bold">Email</th>
                  <th className="px-6 py-4 font-bold">Status</th>
                  <th className="px-6 py-4 font-bold">Services</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {data.subClients.map((client) => (
                  <tr key={client.id} className="hover:bg-slate-50">
                    <td className="px-6 py-4 font-bold text-slate-800 text-sm">{client.name}</td>
                    <td className="px-6 py-4 text-slate-500 text-sm">{client.email}</td>
                    <td className="px-6 py-4">
                      <span className="px-2.5 py-1 rounded-md text-[10px] font-bold uppercase bg-emerald-50 text-emerald-700">{client.status}</span>
                    </td>
                    <td className="px-6 py-4 text-slate-600 text-sm font-semibold">{client.servicesCount || 0}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* ================= SYNCED INVOICES TAB ================= */}
        {activeTab === "invoices" && (
          <div className="animate-in fade-in">
             <InvoiceTable /> 
          </div>
        )}

        {/* ================= SYNCED PAYMENTS TAB ================= */}
        {activeTab === "payments" && (
          <div className="animate-in fade-in">
             <PaymentHistory />
          </div>
        )}

        {/* ================= SETTINGS TAB ================= */}
        {activeTab === "settings" && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 animate-in fade-in">
            <div className="space-y-6">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                <h3 className="font-black text-slate-900 text-xl mb-6">Update My Profile</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Full Name</label>
                    <input type="text" value={profileForm.name} onChange={e => setProfileForm({...profileForm, name: e.target.value})} className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm font-bold focus:ring-2 focus:ring-indigo-500 outline-none" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Email Address</label>
                    <input type="email" value={profileForm.email} disabled className="w-full border border-slate-200 bg-slate-50 rounded-xl px-4 py-3 text-sm text-slate-500 font-bold outline-none cursor-not-allowed" />
                  </div>
                  <button onClick={handleUpdateProfile} className="bg-slate-900 text-white font-bold py-3 px-6 rounded-xl text-sm hover:bg-slate-800 shadow-md">
                    Save Profile
                  </button>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm border border-rose-100">
                <h3 className="font-black text-slate-900 text-xl mb-6">Change Password</h3>
                <div className="space-y-4">
                  <input type="password" placeholder="Current Password" value={passwordForm.currentPassword} onChange={e => setPasswordForm({...passwordForm, currentPassword: e.target.value})} className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-rose-500 outline-none" />
                  <input type="password" placeholder="New Password" value={passwordForm.newPassword} onChange={e => setPasswordForm({...passwordForm, newPassword: e.target.value})} className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-rose-500 outline-none" />
                  <button onClick={handleChangePassword} className="bg-rose-600 text-white font-bold py-3 px-6 rounded-xl text-sm hover:bg-rose-700 shadow-md">
                    Update Password
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 h-fit">
              <h3 className="font-black text-slate-900 text-xl mb-6">White-Label Branding</h3>
              <div className="space-y-5">
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Brand Name</label>
                  <input type="text" value={configForm.brandName} onChange={(e) => setConfigForm({...configForm, brandName: e.target.value})} className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm font-bold focus:ring-2 focus:ring-indigo-500 outline-none" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Markup Percentage (%)</label>
                  <input type="number" value={configForm.markupPercent} onChange={(e) => setConfigForm({...configForm, markupPercent: Number(e.target.value)})} className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm font-bold focus:ring-2 focus:ring-indigo-500 outline-none" />
                </div>
                <button onClick={handleSaveConfig} className="w-full bg-indigo-600 text-white font-bold py-3.5 rounded-xl text-sm hover:bg-indigo-700 shadow-md mt-4">
                  Save Brand Configuration
                </button>
              </div>
            </div>
          </div>
        )}

      </main>
    </div>
  );
}