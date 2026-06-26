"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

// ==========================================
// 1. TYPES & INTERFACES
// ==========================================
interface Referral {
  id: string;
  clientName: string;
  plan: string;
  commissionAmount: number;
  status: "PENDING" | "PAID" | "REJECTED";
  date: string;
}

interface PayoutRequest {
  id: string;
  amount: number;
  status: "PENDING" | "COMPLETED" | "REJECTED";
  requestedAt: string;
}

interface PartnerData {
  id: string;
  name: string;
  email: string;
  phone?: string;
  partnerCode: string;
  availableBalance: number;
  totalEarnings: number;
  totalReferrals: number;
  payoutMethod: string;
  joinedDate?: string;
  tier?: "BRONZE" | "SILVER" | "GOLD"; // Commission tier
  commissionRate?: number;
  referrals: Referral[];
  payoutHistory: PayoutRequest[];
}

const formatCur = (num: number) => `₹${num.toLocaleString('en-IN')}`;

const getStatusColor = (status: string) => {
  switch(status) {
    case "PAID": case "COMPLETED": return "bg-emerald-50 text-emerald-700 border-emerald-200";
    case "PENDING": return "bg-amber-50 text-amber-700 border-amber-200";
    case "REJECTED": return "bg-rose-50 text-rose-700 border-rose-200";
    default: return "bg-slate-50 text-slate-700 border-slate-200";
  }
};

const getTierColor = (tier: string) => {
  switch(tier) {
    case "GOLD": return "bg-amber-100 text-amber-800 border-amber-300";
    case "SILVER": return "bg-slate-200 text-slate-700 border-slate-300";
    case "BRONZE": default: return "bg-orange-100 text-orange-800 border-orange-200";
  }
}

// ==========================================
// 2. SUB-COMPONENT: REFERRALS TABLE
// ==========================================
function PartnerReferralsTab({ referrals }: { referrals: Referral[] }) {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden animate-in fade-in">
      <div className="px-6 py-5 border-b border-slate-100 bg-slate-50 flex justify-between items-center">
        <div>
          <h3 className="font-bold text-slate-800">Referral History</h3>
          <p className="text-xs text-slate-500 mt-0.5">Customers who registered using your partner link.</p>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-white text-xs uppercase tracking-widest text-slate-400 border-b border-slate-100">
              <th className="px-6 py-4 font-bold">Client / Plan</th>
              <th className="px-6 py-4 font-bold">Date Joined</th>
              <th className="px-6 py-4 font-bold text-right">Commission Earned</th>
              <th className="px-6 py-4 font-bold">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {referrals.map((ref) => (
              <tr key={ref.id} className="hover:bg-slate-50">
                <td className="px-6 py-4">
                  <p className="font-bold text-slate-900 text-sm">{ref.clientName}</p>
                  <p className="text-xs font-semibold text-slate-500 mt-0.5">{ref.plan}</p>
                </td>
                <td className="px-6 py-4 text-slate-500 text-sm">{ref.date}</td>
                <td className="px-6 py-4 text-right">
                  <span className="font-black text-emerald-600 text-sm">+{formatCur(ref.commissionAmount)}</span>
                </td>
                <td className="px-6 py-4">
                  <span className={`px-2.5 py-1 rounded-md text-[10px] font-bold uppercase border tracking-wide ${getStatusColor(ref.status)}`}>
                    {ref.status}
                  </span>
                </td>
              </tr>
            ))}
            {referrals.length === 0 && (
              <tr><td colSpan={4} className="p-12 text-center text-slate-500">No referrals yet. Share your link to get started!</td></tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// ==========================================
// 3. SUB-COMPONENT: PAYOUTS TABLE
// ==========================================
function PartnerPayoutsTab({ payouts, onRequestPayout }: { payouts: PayoutRequest[], onRequestPayout: () => void }) {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden animate-in fade-in">
      <div className="px-6 py-5 border-b border-slate-100 bg-slate-50 flex justify-between items-center">
        <div>
          <h3 className="font-bold text-slate-800">Withdrawal History</h3>
          <p className="text-xs text-slate-500 mt-0.5">Track your past payouts to your bank/UPI.</p>
        </div>
        <button onClick={onRequestPayout} className="bg-violet-600 text-white px-5 py-2.5 rounded-xl text-sm font-bold shadow-sm hover:bg-violet-700 transition">
          Request Payout
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-white text-xs uppercase tracking-widest text-slate-400 border-b border-slate-100">
              <th className="px-6 py-4 font-bold">Payout ID</th>
              <th className="px-6 py-4 font-bold">Request Date</th>
              <th className="px-6 py-4 font-bold">Amount</th>
              <th className="px-6 py-4 font-bold">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {payouts.map((payout) => (
              <tr key={payout.id} className="hover:bg-slate-50">
                <td className="px-6 py-4 font-bold text-slate-900 text-sm">{payout.id}</td>
                <td className="px-6 py-4 text-slate-500 text-sm">{payout.requestedAt}</td>
                <td className="px-6 py-4 font-black text-slate-800 text-sm">{formatCur(payout.amount)}</td>
                <td className="px-6 py-4">
                  <span className={`px-2.5 py-1 rounded-md text-[10px] font-bold uppercase border tracking-wide ${getStatusColor(payout.status)}`}>
                    {payout.status}
                  </span>
                </td>
              </tr>
            ))}
            {payouts.length === 0 && (
              <tr><td colSpan={4} className="p-12 text-center text-slate-500">No payout history found.</td></tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// ==========================================
// 4. MAIN PARTNER DASHBOARD
// ==========================================
export default function PartnerDashboard() {
  const router = useRouter();
  const [toast, setToast] = useState<{ show: boolean; message: string; type: "success" | "error" | "info" }>({ show: false, message: "", type: "info" });
  
  const [activeTab, setActiveTab] = useState<"overview" | "referrals" | "payouts" | "settings">("overview");
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<PartnerData | null>(null);

  // Modal & Form States
  const [showPayoutModal, setShowPayoutModal] = useState(false);
  const [payoutAmount, setPayoutAmount] = useState<number | string>("");
  const [profileForm, setProfileForm] = useState({ name: "", phone: "", payoutMethod: "" });
  const [passwordForm, setPasswordForm] = useState({ currentPassword: "", newPassword: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const MIN_PAYOUT_AMOUNT = 1000;

  const showToast = (message: string, type: "success" | "error" | "info" = "info") => {
    setToast({ show: true, message, type });
    setTimeout(() => setToast({ show: false, message: "", type: "info" }), 3000);
  };

  useEffect(() => {
    let mounted = true;
    async function loadPartnerData() {
      try {
        setTimeout(() => {
          if (mounted) {
            setData({
              id: "PRT-0012",
              name: "Mohit Singh",
              email: "mohit.affiliate@gmail.com",
              phone: "+91 9876543210",
              partnerCode: "MOHIT2026",
              availableBalance: 4500,
              totalEarnings: 12500,
              totalReferrals: 14,
              payoutMethod: "mohitsingh@upi",
              joinedDate: "10 Jan 2026",
              tier: "SILVER",
              commissionRate: 15, // 15%
              referrals: [
                { id: "REF-9981", clientName: "Aakash Verma", plan: "Cloud VPS High Performance", commissionAmount: 350, status: "PAID", date: "01 Jun 2026" },
                { id: "REF-9982", clientName: "Priya Tech", plan: "E-Commerce Hosting", commissionAmount: 1100, status: "PENDING", date: "09 Jun 2026" },
                { id: "REF-9983", clientName: "Rahul Sharma", plan: "Shared Hosting Package", commissionAmount: 300, status: "PENDING", date: "10 Jun 2026" },
              ],
              payoutHistory: [
                { id: "PAY-110", amount: 5000, status: "COMPLETED", requestedAt: "15 May 2026" },
                { id: "PAY-102", amount: 3000, status: "COMPLETED", requestedAt: "10 Apr 2026" }
              ]
            });
            setProfileForm({ name: "Mohit Singh", phone: "+91 9876543210", payoutMethod: "mohitsingh@upi" });
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
    loadPartnerData();
    return () => { mounted = false; };
  }, []);

  const handleCopyLink = () => {
    if (!data) return;
    const affiliateLink = `https://portal.bnqintech.com/register?ref=${data.partnerCode}`;
    navigator.clipboard.writeText(affiliateLink);
    showToast("Affiliate Link Copied to Clipboard!", "success");
  };

  const handleRequestPayout = async (e: React.FormEvent) => {
    e.preventDefault();
    const amount = Number(payoutAmount);
    
    if (!data) return;
    if (!data.payoutMethod) return showToast("Please update your payout method in settings first.", "error");
    if (amount < MIN_PAYOUT_AMOUNT) return showToast(`Minimum payout amount is ₹${MIN_PAYOUT_AMOUNT}`, "error");
    if (amount > data.availableBalance) return showToast("Insufficient available balance.", "error");

    setIsSubmitting(true);
    showToast("Processing payout request...", "info");
    
    setTimeout(() => {
      const newPayout: PayoutRequest = {
        id: `PAY-${Math.floor(200 + Math.random() * 800)}`,
        amount: amount,
        status: "PENDING",
        requestedAt: "Just now"
      };
      
      setData(prev => prev ? { 
        ...prev, 
        availableBalance: prev.availableBalance - amount,
        payoutHistory: [newPayout, ...prev.payoutHistory] 
      } : null);
      
      setShowPayoutModal(false);
      setPayoutAmount("");
      setIsSubmitting(false);
      showToast("Payout request submitted successfully!", "success");
    }, 1500);
  };

  const handleUpdateProfile = async () => {
    showToast("Updating profile...", "info");
    try {
      setTimeout(() => {
        setData(prev => prev ? { ...prev, name: profileForm.name, phone: profileForm.phone, payoutMethod: profileForm.payoutMethod } : null);
        showToast("Profile updated!", "success");
      }, 800);
    } catch (err) {
      showToast("Update failed", "error");
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#f8fafc] flex flex-col items-center justify-center">
        <div className="w-12 h-12 border-4 border-slate-200 border-t-violet-600 rounded-full animate-spin" />
        <p className="mt-4 font-bold text-slate-500 animate-pulse">Loading Partner Portal...</p>
      </div>
    );
  }

  if (!data) return <div className="text-center mt-20 text-rose-500 font-bold">Failed to load partner data.</div>;

  return (
    <div className="min-h-screen bg-[#f8fafc] font-sans pt-28 pb-16 relative">
      
      {/* GLOBAL TOAST */}
      <div className={`fixed bottom-5 right-5 z-[100] transform transition-all duration-300 ${toast.show ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0 pointer-events-none"}`}>
        <div className={`flex items-center px-5 py-3.5 rounded-xl shadow-2xl border ${
          toast.type === "success" ? "bg-emerald-900 text-emerald-50 border-emerald-800" :
          toast.type === "error" ? "bg-rose-900 text-rose-50 border-rose-800" : "bg-slate-900 text-slate-50 border-slate-800"
        }`}>
          <p className="text-sm font-bold tracking-wide text-white">{toast.message}</p>
        </div>
      </div>

      {/* WITHDRAWAL MODAL */}
      {showPayoutModal && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in">
          <div className="bg-white rounded-3xl w-full max-w-md shadow-2xl overflow-hidden">
            <div className="px-6 py-5 border-b border-slate-100 bg-slate-50 flex justify-between items-center">
              <div>
                <h2 className="text-lg font-black text-slate-900">Request Payout</h2>
                <p className="text-xs text-slate-500 mt-0.5">Withdraw funds to your account</p>
              </div>
              <button onClick={() => setShowPayoutModal(false)} className="text-slate-400 hover:text-rose-500 font-bold">✕</button>
            </div>
            <form onSubmit={handleRequestPayout} className="p-6 space-y-5">
              <div className="bg-violet-50 border border-violet-100 p-4 rounded-xl flex justify-between items-center">
                <span className="text-xs font-bold text-violet-700 uppercase tracking-widest">Available Balance</span>
                <span className="text-lg font-black text-violet-900">{formatCur(data.availableBalance)}</span>
              </div>
              
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wide mb-2">Withdrawal Amount (₹)</label>
                <input 
                  required 
                  type="number" 
                  min={MIN_PAYOUT_AMOUNT} 
                  max={data.availableBalance}
                  value={payoutAmount} 
                  onChange={e => setPayoutAmount(e.target.value)} 
                  placeholder={`Min. ${formatCur(MIN_PAYOUT_AMOUNT)}`} 
                  className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-violet-500 outline-none" 
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wide mb-2">Receiving Account</label>
                <div className="w-full border border-slate-200 bg-slate-50 rounded-xl px-4 py-3 text-sm font-semibold text-slate-700">
                  {data.payoutMethod || <span className="text-rose-500">Not configured! Update in settings.</span>}
                </div>
                <p className="text-[10px] text-slate-400 mt-1.5">Payouts are processed within 48 business hours.</p>
              </div>

              <div className="pt-2 flex justify-end gap-3">
                <button type="button" onClick={() => setShowPayoutModal(false)} className="px-5 py-2.5 rounded-xl text-sm font-bold border hover:bg-slate-50">Cancel</button>
                <button type="submit" disabled={isSubmitting || !data.payoutMethod || Number(payoutAmount) < MIN_PAYOUT_AMOUNT} className="px-6 py-2.5 rounded-xl text-sm font-bold bg-violet-600 text-white hover:bg-violet-700 disabled:opacity-50 shadow-md transition">
                  {isSubmitting ? "Processing..." : "Confirm Withdrawal"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-6 border-b border-slate-200 pb-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="px-3 py-1 text-[11px] font-black uppercase tracking-widest rounded-md bg-violet-600 text-white shadow-md shadow-violet-500/20">
                Partner / Affiliate
              </span>
              <span className="flex items-center gap-1.5 bg-emerald-50 border border-emerald-100 px-2.5 py-1 rounded-full">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-wider">Account Active</span>
              </span>
            </div>
            <h1 className="text-3xl font-black text-slate-900 tracking-tight">Partner Dashboard</h1>
            <p className="text-slate-500 text-sm font-medium mt-1">Track your referrals, commissions, and request payouts.</p>
          </div>
          <button onClick={async () => { showToast("Logging out...", "info"); await fetch("/api/auth/logout", { method: "POST", credentials: "include" }).catch(() => {}); router.push("/login/partner"); }} className="bg-white border border-slate-200 text-slate-600 hover:text-rose-600 px-5 py-2.5 rounded-lg text-sm font-bold transition shadow-sm">
            Sign Out
          </button>
        </div>

        {/* TABS NAVIGATION */}
        <div className="flex overflow-x-auto gap-2 mb-8 bg-white p-1.5 rounded-xl w-fit border border-slate-200 shadow-sm scrollbar-hide">
          {[
            { id: "overview", label: "Overview" },
            { id: "referrals", label: "My Referrals" },
            { id: "payouts", label: "Payouts" },
            { id: "settings", label: "My Profile" }, // Tab name changed
          ].map((tab) => (
            <button key={tab.id} onClick={() => setActiveTab(tab.id as any)} className={`px-5 py-2.5 text-sm font-bold rounded-lg transition-all whitespace-nowrap ${activeTab === tab.id ? "bg-slate-900 text-white shadow-md" : "text-slate-600 hover:bg-slate-50"}`}>
              {tab.label}
            </button>
          ))}
        </div>

        {/* ================= OVERVIEW TAB ================= */}
        {activeTab === "overview" && (
          <div className="space-y-8 animate-in fade-in duration-300">
            <div className="bg-gradient-to-r from-violet-600 to-indigo-700 rounded-3xl p-8 border border-violet-500 shadow-xl text-white relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
              <div className="relative z-10 md:w-1/2">
                <h2 className="text-2xl font-black mb-2">Your Affiliate Link</h2>
                <p className="text-violet-100 text-sm font-medium leading-relaxed">Share this link with your audience. You will earn a <span className="font-bold text-white bg-white/20 px-1.5 py-0.5 rounded">{data.commissionRate}% recurring commission</span> for every successful purchase made through this link.</p>
              </div>
              <div className="relative z-10 w-full md:w-auto flex-1 max-w-md">
                <div className="flex items-center bg-black/20 p-1.5 rounded-xl border border-white/20 backdrop-blur-md">
                  <input 
                    type="text" 
                    readOnly 
                    value={`https://portal.bnqintech.com/register?ref=${data.partnerCode}`} 
                    className="w-full bg-transparent border-none text-white text-sm font-semibold px-4 outline-none"
                  />
                  <button onClick={handleCopyLink} className="bg-white text-violet-700 px-5 py-2.5 rounded-lg text-sm font-black hover:bg-violet-50 transition-colors shadow-sm whitespace-nowrap">
                    Copy Link
                  </button>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800 shadow-xl text-white flex flex-col justify-between relative overflow-hidden">
                <div className="absolute -right-10 -bottom-10 w-32 h-32 bg-emerald-500/20 rounded-full blur-2xl"></div>
                <div className="relative z-10">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Available for Payout</p>
                  <h3 className="text-4xl font-black text-emerald-400">{formatCur(data.availableBalance)}</h3>
                </div>
                <button onClick={() => setShowPayoutModal(true)} className="bg-white text-slate-900 text-sm font-bold text-center mt-6 hover:bg-slate-100 py-3 rounded-xl transition shadow-md w-full relative z-10">
                  Withdraw Funds
                </button>
              </div>
              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between">
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Total Earned (Lifetime)</p>
                  <h3 className="text-4xl font-black text-slate-900">{formatCur(data.totalEarnings)}</h3>
                </div>
                <div className="mt-6 flex items-center gap-2 text-sm font-bold text-emerald-600 bg-emerald-50 w-fit px-3 py-1.5 rounded-lg">
                  <span>📈 All-time high</span>
                </div>
              </div>
              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between">
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Total Successful Referrals</p>
                  <h3 className="text-4xl font-black text-slate-900">{data.totalReferrals}</h3>
                </div>
                <button onClick={() => setActiveTab('referrals')} className="text-violet-600 text-sm font-bold text-left mt-6 hover:underline">
                  View full list →
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ================= MODULAR REFERRALS TAB ================= */}
        {activeTab === "referrals" && (
          <PartnerReferralsTab referrals={data.referrals} />
        )}

        {/* ================= MODULAR PAYOUTS TAB ================= */}
        {activeTab === "payouts" && (
          <PartnerPayoutsTab payouts={data.payoutHistory} onRequestPayout={() => setShowPayoutModal(true)} />
        )}

        {/* ================= PROFILE & SETTINGS TAB ================= */}
        {activeTab === "settings" && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 animate-in fade-in duration-300">
            
            {/* Partner Identity Card */}
            <div className="lg:col-span-1 space-y-6">
              <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
                <div className="h-24 bg-gradient-to-r from-violet-600 to-indigo-600"></div>
                <div className="px-6 pb-6 relative">
                  <div className="w-20 h-20 bg-white rounded-full border-4 border-white shadow-md flex items-center justify-center text-3xl relative z-10 -mt-10 mb-4">
                    🤝
                  </div>
                  <div>
                    <h3 className="font-black text-slate-900 text-xl truncate" title={data.name}>{data.name}</h3>
                    <p className="text-sm font-semibold text-slate-500 truncate mt-0.5" title={data.email}>{data.email}</p>
                    <p className="text-sm font-semibold text-slate-500 mt-0.5">{data.phone}</p>
                    
                    <div className="mt-6 space-y-4 border-t border-slate-100 pt-4">
                      <div>
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Partner Code</p>
                        <p className="text-sm font-black text-violet-700 font-mono mt-0.5">{data.partnerCode}</p>
                      </div>
                      <div>
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Partner Since</p>
                        <p className="text-sm font-bold text-slate-700 mt-0.5">{data.joinedDate}</p>
                      </div>
                      <div className={`p-3 rounded-xl border ${getTierColor(data.tier || "BRONZE")}`}>
                        <div className="flex justify-between items-center mb-1">
                          <p className="text-[10px] font-bold uppercase tracking-widest">Commission Tier</p>
                          <span className="font-black text-sm">{data.commissionRate}%</span>
                        </div>
                        <p className="font-black text-lg">{data.tier} PARTNER</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Editable Settings */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                <h3 className="font-black text-slate-900 text-xl mb-6">Partner Details & Payout</h3>
                <div className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-slate-500 uppercase tracking-wide mb-2">Full Name</label>
                      <input type="text" value={profileForm.name} onChange={e => setProfileForm({...profileForm, name: e.target.value})} className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm font-bold focus:ring-2 focus:ring-violet-500 outline-none" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-500 uppercase tracking-wide mb-2">Phone Number</label>
                      <input type="text" value={profileForm.phone} onChange={e => setProfileForm({...profileForm, phone: e.target.value})} placeholder="+91 9876543210" className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm font-bold focus:ring-2 focus:ring-violet-500 outline-none" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wide mb-2">Email Address</label>
                    <input type="email" value={data.email} disabled className="w-full border border-slate-200 bg-slate-50 rounded-xl px-4 py-3 text-sm text-slate-500 font-bold outline-none cursor-not-allowed" />
                  </div>
                  <div className="pt-4 border-t border-slate-100">
                    <label className="block text-xs font-bold text-violet-600 uppercase tracking-wide mb-2">Payout Method (UPI / Bank Details)</label>
                    <input type="text" value={profileForm.payoutMethod} onChange={e => setProfileForm({...profileForm, payoutMethod: e.target.value})} placeholder="e.g. john@upi OR A/C: 1234, IFSC: ABCD" className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm font-bold focus:ring-2 focus:ring-violet-500 outline-none" />
                    <p className="text-[10px] text-slate-400 mt-1.5 leading-relaxed">Please ensure these details are exactly correct. BNQinTECH will use this to disburse your monthly commissions.</p>
                  </div>
                  <button onClick={handleUpdateProfile} className="bg-slate-900 text-white font-bold py-3 px-6 rounded-xl text-sm hover:bg-slate-800 shadow-md transition-colors">
                    Save Changes
                  </button>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 h-fit">
                <h3 className="font-black text-slate-900 text-xl mb-6">Change Password</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wide mb-2">Current Password</label>
                    <input type="password" value={passwordForm.currentPassword} onChange={e => setPasswordForm({...passwordForm, currentPassword: e.target.value})} className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-rose-500 outline-none" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wide mb-2">New Password</label>
                    <input type="password" value={passwordForm.newPassword} onChange={e => setPasswordForm({...passwordForm, newPassword: e.target.value})} className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-rose-500 outline-none" />
                  </div>
                  <button onClick={() => { showToast("Password changed successfully!", "success"); setPasswordForm({currentPassword: "", newPassword: ""})}} className="border border-slate-200 text-slate-700 font-bold py-3 px-6 rounded-xl text-sm hover:bg-slate-50 shadow-sm transition-colors">
                    Update Password
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

      </main>
    </div>
  );
}