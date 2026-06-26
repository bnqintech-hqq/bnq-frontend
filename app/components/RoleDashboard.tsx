'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

type RoleDashboardProps = {
  role: string;
  userName?: string;
};

type DashboardResponse = {
  role: 'CLIENT' | 'PARTNER' | string;
  services?: Array<any>;
  tickets?: Array<any>;
  unpaidInvoices?: Array<any>;
  referrals?: Array<any>;
  totalEarnings?: number;
  availablePayout?: number;
};

export default function RoleDashboard({ role, userName = "Siddharath" }: RoleDashboardProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [toast, setToast] = useState<{ show: boolean; message: string; type: 'success' | 'info' | 'error' }>({ show: false, message: '', type: 'info' });

  const [dashboard, setDashboard] = useState<DashboardResponse | null>(null);
  const isClient = role?.toLowerCase() === 'client';
  const isReseller = role?.toLowerCase() === 'reseller';
  const isAdmin = role?.toLowerCase() === 'admin';

  useEffect(() => {
    let mounted = true;
    async function load() {
      try {
        const res = await fetch('/api/user/dashboard');
        if (!res.ok) throw new Error('Failed fetching dashboard');
        const data: DashboardResponse = await res.json();
        if (!mounted) return;
        setDashboard(data);
      } catch (err: any) {
        showToast(err?.message || 'Failed to load dashboard', 'error');
      } finally {
        if (mounted) setIsLoading(false);
      }
    }

    load();
    return () => { mounted = false; };
  }, []);

  const handleLogout = async () => {
    showToast("Logging out securely...", "info");
    await fetch("/api/auth/logout", { method: "POST", credentials: "include" }).catch(() => {});
    router.push(`/login/${role?.toLowerCase()}`);
  };

  const showToast = (message: string, type: 'success' | 'info' | 'error' = 'info') => {
    setToast({ show: true, message, type });
    setTimeout(() => setToast({ show: false, message: '', type: 'info' }), 3000);
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] font-sans pt-28 lg:pt-36 pb-16 relative">
      
      {/* GLOBAL TOAST NOTIFICATION */}
      <div className={`fixed bottom-5 right-5 z-50 transform transition-all duration-300 ${toast.show ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0 pointer-events-none'}`}>
        <div className={`flex items-center gap-3 px-5 py-3.5 rounded-xl shadow-2xl border ${
          toast.type === 'success' ? 'bg-emerald-900 text-emerald-50 border-emerald-800' : 
          toast.type === 'error' ? 'bg-rose-900 text-rose-50 border-rose-800' : 
          'bg-slate-900 text-slate-50 border-slate-800'
        }`}>
          {toast.type === 'success' && <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>}
          {toast.type === 'info' && <svg className="w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
          <p className="text-sm font-bold tracking-wide">{toast.message}</p>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-6 border-b border-slate-200 pb-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className={`px-3 py-1 text-[11px] font-black uppercase tracking-widest rounded-md ${
                isClient ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20' : 'bg-indigo-600 text-white shadow-md shadow-indigo-500/20'
              }`}>
                {isClient ? 'Client Control Panel' : 'Partner Portal'}
              </span>
              <div className="flex items-center gap-1.5 bg-emerald-50 border border-emerald-100 px-2.5 py-1 rounded-full">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-wider">System Operational</span>
              </div>
            </div>
            <h1 className="text-3xl font-black text-slate-900 tracking-tight">
              Welcome back, {userName}
            </h1>
            <p className="text-slate-500 text-sm font-medium mt-1">Manage your infrastructure, billing, and support requests.</p>
          </div>
          
          <div className="flex items-center gap-4">
            {isClient && (
              <button onClick={() => router.push('/')} className="hidden sm:flex items-center gap-2 bg-slate-900 hover:bg-blue-600 text-white px-5 py-2.5 rounded-lg text-sm font-bold transition-all shadow-sm">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" /></svg>
                Deploy New Service
              </button>
            )}
            <button 
              onClick={handleLogout}
              className="flex items-center gap-2 bg-white border border-slate-200 text-slate-600 hover:text-rose-600 hover:border-rose-200 hover:bg-rose-50 px-4 py-2.5 rounded-lg text-sm font-bold transition-all shadow-sm"
            >
              Logout
            </button>
          </div>
        </div>

        {/* WORKSPACE */}
        {isLoading ? (
          <div className="flex flex-col items-center justify-center py-20">
            <div className="w-10 h-10 border-4 border-slate-200 border-t-blue-600 rounded-full animate-spin"></div>
            <p className="mt-4 text-sm font-bold text-slate-500 animate-pulse">Loading workspace data...</p>
          </div>
        ) : (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            {isClient ? <ClientDashboard router={router} showToast={showToast} data={dashboard} /> : isReseller ? <ResellerDashboard showToast={showToast} data={dashboard} /> : isAdmin ? <AdminDashboard showToast={showToast} data={dashboard} /> : <PartnerDashboard showToast={showToast} data={dashboard} />}
          </div>
        )}

      </main>
    </div>
  );
}

// ==========================================
// 1. CLIENT DASHBOARD (Fully Loaded with Tickets)
// ==========================================
function ClientDashboard({ router, showToast, data }: { router: any, showToast: any, data: any }) {
  const services: any[] = data?.services ?? [];
  const tickets: any[] = data?.tickets ?? [];
  const unpaidTotal = data?.unpaidInvoices?.reduce((s: number, i: any) => s + Number(i.price || 0), 0) || 0;

  return (
    <div className="space-y-6">
      
      {/* Metrics Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex items-center justify-between">
          <div><p className="text-[11px] font-bold text-slate-500 uppercase tracking-widest">Active Resources</p><h3 className="text-2xl font-black text-slate-900 mt-1">{services.filter(s => s.status === 'ACTIVE').length} <span className="text-sm font-medium text-slate-400">/ {services.length} total</span></h3></div>
          <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center"><svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2" /></svg></div>
        </div>
        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex items-center justify-between">
          <div><p className="text-[11px] font-bold text-slate-500 uppercase tracking-widest">Unpaid Invoices</p><h3 className="text-2xl font-black text-rose-600 mt-1">₹{unpaidTotal.toLocaleString()}</h3></div>
          <div className="w-10 h-10 rounded-lg bg-slate-50 text-slate-600 flex items-center justify-center"><svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg></div>
        </div>
        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex items-center justify-between">
          <div><p className="text-[11px] font-bold text-slate-500 uppercase tracking-widest">Open Support Tickets</p><h3 className="text-2xl font-black text-slate-900 mt-1">{tickets.length}</h3></div>
          <div className="w-10 h-10 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center"><svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" /></svg></div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Active Services Table */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="px-5 py-4 border-b border-slate-200 flex justify-between items-center bg-slate-50">
            <h3 className="font-bold text-slate-800">Deployed Infrastructure</h3>
            <button onClick={() => router.push("/dashboard/client")} className="text-xs font-bold text-blue-600 hover:text-blue-700">View All →</button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-white text-[10px] uppercase tracking-widest text-slate-400 border-b border-slate-100">
                  <th className="px-5 py-3 font-bold">Resource</th>
                  <th className="px-5 py-3 font-bold">Status</th>
                  <th className="px-5 py-3 font-bold">Billing</th>
                  <th className="px-5 py-3 font-bold text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {services.length > 0 ? services.map((service) => (
                  <tr key={service.id} className="hover:bg-slate-50 transition-colors">
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 rounded bg-slate-100 flex items-center justify-center text-xs font-bold ${service.type === 'VPS' ? 'text-indigo-600' : 'text-slate-600'}`}>
                          {service.type === 'VPS' ? 'V' : service.type === 'Domain' ? 'D' : 'H'}
                        </div>
                        <div>
                          <p className="font-bold text-slate-800 text-sm">{service.name}</p>
                          <p className="text-[11px] text-slate-500 font-mono mt-0.5">{service.ip || service.id}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-5 py-4">
                      <span className={`inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold tracking-wide uppercase ${
                        service.status === 'ACTIVE' ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' : 
                        service.status === 'PENDING' ? 'bg-amber-50 text-amber-700 border border-amber-200' : 'bg-rose-50 text-rose-700 border border-rose-200'
                      }`}>
                        {service.status}
                      </span>
                    </td>
                    <td className="px-5 py-4">
                      <p className="text-xs font-bold text-slate-700">{service.price}</p>
                      <p className="text-[10px] text-slate-500 mt-0.5">Renews: {service.nextBilling || 'N/A'}</p>
                    </td>
                    <td className="px-5 py-4 text-right">
                      <button onClick={() => router.push(`/service/${service.id}`)} className="text-xs font-semibold bg-white border border-slate-200 text-slate-600 hover:bg-slate-900 hover:text-white px-3 py-1.5 rounded transition-colors shadow-sm">
                        Manage
                      </button>
                    </td>
                  </tr>
                )) : (
                  <tr>
                    <td colSpan={4} className="px-5 py-8 text-center text-sm text-slate-500">You don't have any active services yet.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Support & Quick Actions */}
        <div className="space-y-6">
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
            <div className="px-5 py-4 border-b border-slate-200 bg-slate-50">
              <h3 className="font-bold text-slate-800">Quick Actions</h3>
            </div>
            <div className="p-2">
              <button onClick={() => router.push('/')} className="w-full text-left px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50 rounded-lg transition-colors flex items-center gap-3">
                <svg className="w-5 h-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>
                Register New Domain
              </button>
              <button onClick={() => router.push('/checkout')} className="w-full text-left px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50 rounded-lg transition-colors flex items-center gap-3">
                <svg className="w-5 h-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>
                Add Funds to Wallet
              </button>
              <button onClick={() => router.push('/company/contact')} className="w-full text-left px-4 py-3 text-sm font-semibold text-blue-700 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors flex items-center gap-3 border-t border-slate-100 mt-1">
                <svg className="w-5 h-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                Open Support Ticket
              </button>
            </div>
          </div>

          {/* RE-ADDED: Recent Tickets Panel */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
            <div className="px-5 py-4 border-b border-slate-200 bg-slate-50 flex justify-between items-center">
              <h3 className="font-bold text-slate-800">Recent Tickets</h3>
            </div>
            <div className="p-0">
              {tickets.length > 0 ? (
                <div className="divide-y divide-slate-100">
                  {tickets.map(ticket => (
                    <div key={ticket.id} onClick={() => router.push('/company/contact')} className="p-4 hover:bg-slate-50 transition-colors cursor-pointer">
                      <div className="flex justify-between items-start mb-1">
                        <p className="text-xs font-mono font-bold text-slate-400">{ticket.id}</p>
                        <span className={`text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded border ${ticket.status === 'RESOLVED' ? 'text-emerald-600 bg-emerald-50 border-emerald-200' : 'text-amber-600 bg-amber-50 border-amber-200'}`}>{ticket.status}</span>
                      </div>
                      <p className="text-sm font-bold text-slate-800 line-clamp-1">{ticket.subject}</p>
                      <p className="text-[11px] text-slate-500 mt-2">Updated: {new Date(ticket.updatedAt || Date.now()).toLocaleDateString()}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="p-6 text-center">
                  <p className="text-sm text-slate-500">No active support tickets.</p>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

// ==========================================
// 2. PARTNER DASHBOARD (Fully Loaded with Referrals)
// ==========================================
function PartnerDashboard({ showToast, data }: { showToast: any, data: any }) {
  const [copied, setCopied] = useState(false);
  const affiliateLink = "https://bnqintech.com/?ref=PRT_SID_2026";

  const referrals: any[] = data?.referrals ?? [];
  const availablePayout: number = data?.availablePayout ?? 0;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(affiliateLink);
    setCopied(true);
    showToast("Affiliate link copied to clipboard!", "success");
    setTimeout(() => setCopied(false), 2000);
  };

  const requestWithdrawal = async () => {
    try {
      const res = await fetch('/api/partner/payout', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ amount: availablePayout }) });
      if (!res.ok) throw new Error('Failed to request payout');
      const body = await res.json();
      if (body?.ok) {
        showToast('Withdrawal request submitted. Processing takes 2-3 business days.', 'success');
      } else {
        showToast('Withdrawal request submitted.', 'info');
      }
    } catch (err: any) {
      showToast(err?.message || 'Failed to request withdrawal', 'error');
    }
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Available Payout */}
        <div className="lg:col-span-2 bg-slate-900 rounded-xl p-6 md:p-8 text-white relative overflow-hidden flex flex-col justify-between border border-slate-800 shadow-lg">
          <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl"></div>
          <div>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Available to Withdraw</p>
            <h3 className="text-4xl md:text-5xl font-black tracking-tight">₹{Number(availablePayout).toLocaleString()}<span className="text-2xl text-slate-500 font-medium">.00</span></h3>
          </div>
          <div className="mt-8 flex gap-3">
            <button onClick={requestWithdrawal} className="bg-white text-slate-900 text-sm font-bold py-2.5 px-6 rounded-lg shadow-sm hover:bg-slate-100 transition-colors">
              Request Withdrawal
            </button>
            <button onClick={() => showToast("Opening bank/UPI payout settings...", "info")} className="bg-slate-800 text-white border border-slate-700 text-sm font-bold py-2.5 px-6 rounded-lg hover:bg-slate-700 transition-colors">
              Payout Settings
            </button>
          </div>
        </div>

        {/* Affiliate Link Card */}
        <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm flex flex-col justify-center">
          <div className="w-10 h-10 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center mb-4">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>
          </div>
          <h3 className="text-lg font-black text-slate-800 mb-1">Your Partner Link</h3>
          <p className="text-xs text-slate-500 mb-4 font-medium leading-relaxed">Share this link. You earn up to 20% commission on every new hosting or VPS deployment.</p>
          <div className="relative">
            <input type="text" readOnly value={affiliateLink} className="w-full pl-3 pr-10 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-600 font-mono text-xs font-bold focus:outline-none" />
            <button onClick={handleCopyLink} className="absolute right-1 top-1 bottom-1 px-3 bg-white border border-slate-200 rounded text-xs font-bold text-slate-600 hover:text-indigo-600 hover:border-indigo-200 transition-colors flex items-center">
              {copied ? 'Copied!' : 'Copy'}
            </button>
          </div>
        </div>
      </div>

      {/* RE-ADDED: Referrals & Analytics Table */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="px-5 py-4 border-b border-slate-200 flex justify-between items-center bg-slate-50">
          <h3 className="font-bold text-slate-800">Recent Conversions</h3>
          <div className="text-xs font-bold text-slate-500">Total Referrals: <span className="text-slate-900">{referrals.length}</span></div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-white text-[10px] uppercase tracking-widest text-slate-400 border-b border-slate-100">
                <th className="px-5 py-3 font-bold">Client / Plan</th>
                <th className="px-5 py-3 font-bold">Date</th>
                <th className="px-5 py-3 font-bold">Commission</th>
                <th className="px-5 py-3 font-bold text-right">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {referrals.length > 0 ? referrals.map((ref) => (
                <tr key={ref.id} className="hover:bg-slate-50 transition-colors">
                  <td className="px-5 py-4">
                    <p className="font-bold text-slate-800 text-sm">{ref.clientName}</p>
                    <p className="text-xs text-slate-500 mt-0.5">{ref.plan}</p>
                  </td>
                  <td className="px-5 py-4 text-xs font-medium text-slate-600">
                    {new Date(ref.date || Date.now()).toLocaleDateString()}
                  </td>
                  <td className="px-5 py-4">
                    <p className="text-sm font-bold text-emerald-600">₹{Number(ref.commissionAmount || 0).toLocaleString()}</p>
                  </td>
                  <td className="px-5 py-4 text-right">
                    <span className={`inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold tracking-wide uppercase ${
                      ref.status === 'PAID' ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' : 
                      'bg-amber-50 text-amber-700 border border-amber-200'
                    }`}>
                      {ref.status}
                    </span>
                  </td>
                </tr>
              )) : (
                <tr>
                  <td colSpan={4} className="px-5 py-8 text-center text-sm text-slate-500">No referrals found yet. Share your link to start earning!</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}

// ==========================================
// RESELLER DASHBOARD
// ==========================================
function ResellerDashboard({ showToast, data }: { showToast: any, data: any }) {
  const referrals: any[] = data?.referrals ?? [];
  const totalEarnings: number = data?.totalEarnings ?? 0;

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
          <h3 className="font-bold text-slate-800">Reseller Overview</h3>
          <p className="text-sm text-slate-500 mt-2">Total earnings: <span className="font-black">₹{Number(totalEarnings).toLocaleString()}</span></p>
        </div>
        <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
          <h3 className="font-bold text-slate-800">Referrals</h3>
          <p className="text-sm text-slate-500 mt-2">{referrals.length} active referrals</p>
        </div>
      </div>
    </div>
  );
}

// ==========================================
// ADMIN DASHBOARD (lightweight placeholder)
// ==========================================
function AdminDashboard({ showToast, data }: { showToast: any, data: any }) {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
        <h3 className="font-bold text-slate-800">Administrator Console</h3>
        <p className="text-sm text-slate-500 mt-2">System overview, user management and global settings.</p>
      </div>
    </div>
  );
}