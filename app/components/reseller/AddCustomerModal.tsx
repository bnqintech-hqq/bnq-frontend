"use client";

import React, { useState, useEffect } from "react";

// --- TypeScript Interfaces ---
export interface NewClientData {
  id: string;
  name: string;
  email: string;
  phone?: string;
  company?: string;
  status: string;
  servicesCount: number;
  billedMonth: string;
}

interface AddCustomerModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (client: NewClientData) => void;
}

export default function AddCustomerModal({ isOpen, onClose, onSuccess }: AddCustomerModalProps) {
  // Form State
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    password: "",
    status: "ACTIVE",
    notes: "",
  });

  // UI States
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [sendEmail, setSendEmail] = useState(true); // Auto-send welcome email toggle

  // Reset form when modal opens
  useEffect(() => {
    if (isOpen) {
      setForm({ name: "", company: "", email: "", phone: "", password: "", status: "ACTIVE", notes: "" });
      setError("");
      setShowPassword(false);
      setSendEmail(true);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  // --- LOGIC: Secure Password Generator ---
  const generateSecurePassword = () => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";
    let newPassword = "";
    for (let i = 0; i < 12; i++) {
      newPassword += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setForm(prev => ({ ...prev, password: newPassword }));
    setShowPassword(true); // Show password to admin so they can copy it
  };

  // --- LOGIC: Input Handler ---
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setError(""); // Clear error on typing
  };

  // --- LOGIC: Submit Handler ---
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Strict Validation
    if (!form.name.trim()) return setError("Full name is required.");
    if (!form.email.trim()) return setError("Email address is required.");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) return setError("Please enter a valid email address.");

    setIsLoading(true);
    const finalPassword = form.password.trim() || "GeneratedOnBackend123!"; // Fallback if empty
    
    try {
      // API CALL (Replace with your actual endpoint, e.g., /api/reseller/clients)
      const res = await fetch("/api/reseller/clients", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, password: finalPassword, sendWelcomeEmail: sendEmail }),
      });
      
      const result = await res.json();
      
      if (!res.ok || !result.success) {
        throw new Error(result.error || "Failed to create customer.");
      }

      // Pass the newly created client back to the parent table
      const newClient: NewClientData = result.client || {
        id: `CLI-${Math.floor(1000 + Math.random() * 9000)}`,
        name: form.name,
        email: form.email,
        phone: form.phone,
        company: form.company,
        status: form.status,
        servicesCount: 0,
        billedMonth: "₹0"
      };

      onSuccess(newClient);
      onClose();
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] bg-slate-900/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6">
      <div className="bg-white rounded-3xl border border-slate-200 w-full max-w-2xl shadow-2xl flex flex-col max-h-[95vh] animate-in fade-in zoom-in-95 duration-200">
        
        {/* MODAL HEADER */}
        <div className="px-8 py-6 border-b border-slate-100 bg-slate-50 flex justify-between items-center shrink-0 rounded-t-3xl">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center border border-slate-200 shadow-sm text-xl">
              👤
            </div>
            <div>
              <h2 className="text-xl font-black text-slate-900 tracking-tight">Add New Customer</h2>
              <p className="text-xs font-semibold text-slate-500 mt-1">Create an isolated billing and service account.</p>
            </div>
          </div>
          <button 
            onClick={onClose} 
            className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-200 text-slate-500 hover:bg-rose-100 hover:text-rose-600 transition-colors focus:outline-none"
            aria-label="Close modal"
          >
            ✕
          </button>
        </div>

        {/* MODAL BODY (Scrollable) */}
        <div className="p-8 overflow-y-auto space-y-8 flex-1">
          
          {error && (
            <div className="bg-rose-50 border border-rose-200 text-rose-700 px-5 py-4 rounded-xl flex items-start gap-3">
              <span className="text-lg">⚠️</span>
              <div>
                <p className="text-sm font-bold">Action Required</p>
                <p className="text-xs font-medium mt-0.5">{error}</p>
              </div>
            </div>
          )}

          {/* Section 1: Basic Information */}
          <div>
            <h3 className="text-xs font-black text-slate-900 uppercase tracking-widest mb-4 border-b border-slate-100 pb-2">1. Personal & Company Info</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wide mb-2">Full Name *</label>
                <input 
                  type="text" 
                  name="name" 
                  value={form.name} 
                  onChange={handleChange} 
                  placeholder="e.g. John Doe"
                  className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 focus:ring-2 focus:ring-indigo-500 outline-none transition-shadow" 
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wide mb-2">Company Name</label>
                <input 
                  type="text" 
                  name="company" 
                  value={form.company} 
                  onChange={handleChange} 
                  placeholder="e.g. Tech Solutions Pvt Ltd"
                  className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 focus:ring-2 focus:ring-indigo-500 outline-none transition-shadow" 
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wide mb-2">Email Address *</label>
                <input 
                  type="email" 
                  name="email" 
                  value={form.email} 
                  onChange={handleChange} 
                  placeholder="john@example.com"
                  className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 focus:ring-2 focus:ring-indigo-500 outline-none transition-shadow" 
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wide mb-2">Phone Number</label>
                <input 
                  type="text" 
                  name="phone" 
                  value={form.phone} 
                  onChange={handleChange} 
                  placeholder="+91 98765 43210"
                  className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 focus:ring-2 focus:ring-indigo-500 outline-none transition-shadow" 
                />
              </div>
            </div>
          </div>

          {/* Section 2: Security & Access */}
          <div>
            <h3 className="text-xs font-black text-slate-900 uppercase tracking-widest mb-4 border-b border-slate-100 pb-2">2. Security & Account Access</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              
              {/* Password Field with Generator */}
              <div className="sm:col-span-2">
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wide mb-2">Account Password</label>
                <div className="relative flex items-center">
                  <input 
                    type={showPassword ? "text" : "password"} 
                    name="password" 
                    value={form.password} 
                    onChange={handleChange} 
                    placeholder="Leave empty to auto-generate"
                    className="w-full border border-slate-200 rounded-xl pl-4 pr-32 py-3 text-sm text-slate-900 focus:ring-2 focus:ring-indigo-500 outline-none transition-shadow" 
                  />
                  <div className="absolute right-2 flex items-center gap-1">
                    <button 
                      type="button" 
                      onClick={() => setShowPassword(!showPassword)}
                      className="p-1.5 text-slate-400 hover:text-slate-700 bg-white rounded-md"
                      title={showPassword ? "Hide Password" : "Show Password"}
                    >
                      {showPassword ? "👁️‍🗨️" : "👁️"}
                    </button>
                    <button 
                      type="button" 
                      onClick={generateSecurePassword}
                      className="text-xs font-bold bg-slate-100 border border-slate-200 text-slate-600 px-3 py-1.5 rounded-lg hover:bg-slate-200 transition-colors"
                    >
                      Generate
                    </button>
                  </div>
                </div>
                <p className="text-[10px] font-semibold text-slate-400 mt-1.5">A strong password is recommended for server and hosting access.</p>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wide mb-2">Account Status</label>
                <select 
                  name="status" 
                  value={form.status} 
                  onChange={handleChange}
                  className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm font-bold text-slate-700 bg-white focus:ring-2 focus:ring-indigo-500 outline-none cursor-pointer appearance-none"
                >
                  <option value="ACTIVE">🟢 Active (Allow Login)</option>
                  <option value="SUSPENDED">🟠 Suspended (Read-only)</option>
                  <option value="DISABLED">🔴 Disabled (No Access)</option>
                </select>
              </div>

              {/* Email Notification Toggle */}
              <div className="flex flex-col justify-center">
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wide mb-2">Welcome Email</label>
                <div className="flex items-center gap-3 mt-1 cursor-pointer" onClick={() => setSendEmail(!sendEmail)}>
                  <div className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${sendEmail ? "bg-emerald-500" : "bg-slate-300"}`}>
                    <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${sendEmail ? "translate-x-6" : "translate-x-1"}`} />
                  </div>
                  <span className="text-sm font-bold text-slate-700">Send login credentials via email</span>
                </div>
              </div>

            </div>
          </div>

          {/* Section 3: Admin Notes */}
          <div>
            <h3 className="text-xs font-black text-slate-900 uppercase tracking-widest mb-4 border-b border-slate-100 pb-2">3. Internal Notes (Optional)</h3>
            <textarea 
              name="notes" 
              value={form.notes} 
              onChange={handleChange} 
              rows={2}
              placeholder="e.g. Referred by XYZ, requires custom GST invoice..."
              className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 focus:ring-2 focus:ring-indigo-500 outline-none transition-shadow resize-none" 
            />
          </div>

        </div>

        {/* MODAL FOOTER */}
        <div className="px-8 py-5 border-t border-slate-100 bg-slate-50 flex justify-end gap-3 shrink-0 rounded-b-3xl">
          <button 
            type="button" 
            onClick={onClose} 
            disabled={isLoading}
            className="px-6 py-3 rounded-xl text-sm font-bold text-slate-600 border border-slate-200 bg-white hover:bg-slate-100 transition-colors disabled:opacity-50"
          >
            Cancel
          </button>
          <button 
            onClick={handleSubmit} 
            disabled={isLoading} 
            className="px-8 py-3 rounded-xl text-sm font-black bg-indigo-600 text-white hover:bg-indigo-700 shadow-md shadow-indigo-200 transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center gap-2"
          >
            {isLoading ? (
              <>
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Creating Account...
              </>
            ) : (
              "+ Create Customer"
            )}
          </button>
        </div>

      </div>
    </div>
  );
}