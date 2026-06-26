"use client";

import React, { useState, useEffect } from "react";

// --- Types based on your Prisma Schema ---
interface TicketMessage {
  id: string;
  sender: "CLIENT" | "SUPPORT";
  senderName: string;
  message: string;
  timestamp: string;
}

interface Ticket {
  id: string;
  subject: string;
  department: "TECHNICAL" | "BILLING" | "SALES" | "GENERAL";
  priority: "LOW" | "MEDIUM" | "HIGH" | "URGENT";
  status: "OPEN" | "IN_PROGRESS" | "RESOLVED";
  createdAt: string;
  updatedAt: string;
  messages: TicketMessage[];
}

export default function ClientTickets() {
  const [toast, setToast] = useState<{ show: boolean; message: string; type: "success" | "error" | "info" }>({ show: false, message: "", type: "info" });
  
  const [isLoading, setIsLoading] = useState(true);
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [filter, setFilter] = useState<"ALL" | "OPEN" | "RESOLVED">("ALL");
  
  // View States
  const [selectedTicket, setSelectedTicket] = useState<Ticket | null>(null);
  const [showNewTicketModal, setShowNewTicketModal] = useState(false);
  
  // Forms
  const [newTicketForm, setNewTicketForm] = useState({ subject: "", department: "TECHNICAL", priority: "MEDIUM", message: "" });
  const [replyMessage, setReplyMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const showToast = (message: string, type: "success" | "error" | "info" = "info") => {
    setToast({ show: true, message, type });
    setTimeout(() => setToast({ show: false, message: "", type: "info" }), 3000);
  };

  // --- 1. FETCH TICKETS DATA ---
  useEffect(() => {
    let mounted = true;
    async function loadTickets() {
      try {
        // Mocking API Call: fetch('/api/client/tickets')
        setTimeout(() => {
          if (mounted) {
            setTickets([
              {
                id: "TCK-88192",
                subject: "Domain DNS is not propagating",
                department: "TECHNICAL",
                priority: "HIGH",
                status: "IN_PROGRESS",
                createdAt: "10 Jun 2026, 10:30 AM",
                updatedAt: "10 Jun 2026, 11:45 AM",
                messages: [
                  { id: "msg-1", sender: "CLIENT", senderName: "You", message: "Hi, I updated the nameservers to Aarav Cloud yesterday, but my website is still showing the old IP.", timestamp: "10 Jun 2026, 10:30 AM" },
                  { id: "msg-2", sender: "SUPPORT", senderName: "Tech Support", message: "Hello! DNS propagation can take up to 24-48 hours globally. However, I have flushed the DNS cache on our end. Please clear your browser cache and check again.", timestamp: "10 Jun 2026, 11:45 AM" }
                ]
              },
              {
                id: "TCK-55100",
                subject: "Invoice #INV-2918 needs GST correction",
                department: "BILLING",
                priority: "MEDIUM",
                status: "RESOLVED",
                createdAt: "05 Jun 2026, 02:15 PM",
                updatedAt: "06 Jun 2026, 09:00 AM",
                messages: [
                  { id: "msg-3", sender: "CLIENT", senderName: "You", message: "Please update the GST number on my latest invoice.", timestamp: "05 Jun 2026, 02:15 PM" },
                  { id: "msg-4", sender: "SUPPORT", senderName: "Billing Dept", message: "We have updated the GST number and emailed you the revised PDF.", timestamp: "06 Jun 2026, 09:00 AM" }
                ]
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
    loadTickets();
    return () => { mounted = false; };
  }, []);

  // --- ACTION HANDLERS ---
  const handleCreateTicket = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTicketForm.subject || !newTicketForm.message) return showToast("Please fill all required fields.", "error");
    
    setIsSubmitting(true);
    showToast("Submitting your ticket...", "info");
    
    // Mocking POST request
    setTimeout(() => {
      const newTicket: Ticket = {
        id: `TCK-${Math.floor(10000 + Math.random() * 90000)}`,
        subject: newTicketForm.subject,
        department: newTicketForm.department as any,
        priority: newTicketForm.priority as any,
        status: "OPEN",
        createdAt: "Just now",
        updatedAt: "Just now",
        messages: [{ id: `msg-${Date.now()}`, sender: "CLIENT", senderName: "You", message: newTicketForm.message, timestamp: "Just now" }]
      };
      
      setTickets([newTicket, ...tickets]);
      setShowNewTicketModal(false);
      setNewTicketForm({ subject: "", department: "TECHNICAL", priority: "MEDIUM", message: "" });
      setIsSubmitting(false);
      setSelectedTicket(newTicket); // Naya ticket banate hi usko open kar do
      showToast("Support ticket created successfully!", "success");
    }, 1000);
  };

  const handleReplyTicket = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!replyMessage.trim() || !selectedTicket) return;

    setIsSubmitting(true);
    
    // Mocking PUT/POST reply request
    setTimeout(() => {
      const newMessage: TicketMessage = {
        id: `msg-${Date.now()}`,
        sender: "CLIENT",
        senderName: "You",
        message: replyMessage,
        timestamp: "Just now"
      };

      const updatedTicket = {
        ...selectedTicket,
        updatedAt: "Just now",
        status: "OPEN" as const, // Re-open if it was resolved
        messages: [...selectedTicket.messages, newMessage]
      };

      setTickets(tickets.map(t => t.id === updatedTicket.id ? updatedTicket : t));
      setSelectedTicket(updatedTicket);
      setReplyMessage("");
      setIsSubmitting(false);
    }, 600);
  };

  // --- FORMATTERS ---
  const filteredTickets = tickets.filter(t => {
    if (filter === "ALL") return true;
    if (filter === "OPEN") return t.status === "OPEN" || t.status === "IN_PROGRESS";
    if (filter === "RESOLVED") return t.status === "RESOLVED";
    return true;
  });

  const getStatusStyle = (status: string) => {
    switch(status) {
      case "RESOLVED": return "bg-emerald-50 text-emerald-700 border-emerald-200";
      case "IN_PROGRESS": return "bg-amber-50 text-amber-700 border-amber-200";
      case "OPEN": default: return "bg-blue-50 text-blue-700 border-blue-200";
    }
  };

  const getPriorityStyle = (priority: string) => {
    switch(priority) {
      case "URGENT": return "bg-rose-600 text-white";
      case "HIGH": return "bg-orange-500 text-white";
      case "MEDIUM": return "bg-amber-400 text-slate-900";
      case "LOW": default: return "bg-slate-200 text-slate-700";
    }
  };

  const getDepartmentIcon = (dept: string) => {
    switch(dept) {
      case "TECHNICAL": return "🔧";
      case "BILLING": return "💳";
      case "SALES": return "🛒";
      default: return "📩";
    }
  };

  // --- RENDER LOADER ---
  if (isLoading) {
    return (
      <div className="py-20 flex flex-col items-center justify-center">
        <div className="w-10 h-10 border-4 border-slate-200 border-t-blue-600 rounded-full animate-spin" />
        <p className="mt-4 font-bold text-slate-500 animate-pulse">Loading Helpdesk...</p>
      </div>
    );
  }

  return (
    <div className="relative font-sans animate-in fade-in duration-300">
      
      {/* GLOBAL TOAST */}
      <div className={`fixed bottom-5 right-5 z-[100] transform transition-all duration-300 ${toast.show ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0 pointer-events-none"}`}>
        <div className={`flex items-center px-5 py-3.5 rounded-xl shadow-2xl border ${
          toast.type === "success" ? "bg-emerald-900 text-emerald-50 border-emerald-800" :
          toast.type === "error" ? "bg-rose-900 text-rose-50 border-rose-800" : "bg-slate-900 text-slate-50 border-slate-800"
        }`}>
          <p className="text-sm font-bold tracking-wide text-white">{toast.message}</p>
        </div>
      </div>

      {/* CREATE TICKET MODAL (Mera Fav Part) */}
      {showNewTicketModal && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in">
          <div className="bg-white rounded-3xl w-full max-w-2xl shadow-2xl overflow-hidden">
            <div className="px-8 py-6 border-b border-slate-100 bg-slate-50 flex justify-between items-center">
              <div>
                <h2 className="text-xl font-black text-slate-900">Create Support Ticket</h2>
                <p className="text-xs text-slate-500 mt-1">Our team typically responds within 30 minutes.</p>
              </div>
              <button onClick={() => setShowNewTicketModal(false)} className="w-8 h-8 flex items-center justify-center rounded-full bg-slate-200 text-slate-500 hover:bg-rose-100 hover:text-rose-600 transition">✕</button>
            </div>
            <form onSubmit={handleCreateTicket} className="p-8 space-y-5">
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wide mb-2">Subject / Issue Summary *</label>
                <input required type="text" value={newTicketForm.subject} onChange={e => setNewTicketForm({...newTicketForm, subject: e.target.value})} placeholder="e.g. Website is showing 503 error" className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 outline-none" />
              </div>
              <div className="grid grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wide mb-2">Department</label>
                  <select value={newTicketForm.department} onChange={e => setNewTicketForm({...newTicketForm, department: e.target.value})} className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 outline-none bg-white">
                    <option value="TECHNICAL">Technical Support</option>
                    <option value="BILLING">Billing & Invoices</option>
                    <option value="SALES">Sales & Upgrades</option>
                    <option value="GENERAL">General Inquiry</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wide mb-2">Priority</label>
                  <select value={newTicketForm.priority} onChange={e => setNewTicketForm({...newTicketForm, priority: e.target.value})} className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 outline-none bg-white">
                    <option value="LOW">Low - General Question</option>
                    <option value="MEDIUM">Medium - Non-critical issue</option>
                    <option value="HIGH">High - Service degraded</option>
                    <option value="URGENT">Urgent - Complete downtime</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wide mb-2">Detailed Message *</label>
                <textarea required rows={5} value={newTicketForm.message} onChange={e => setNewTicketForm({...newTicketForm, message: e.target.value})} placeholder="Please describe the issue, steps to reproduce, and any error messages..." className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 outline-none" />
              </div>
              <div className="pt-4 flex justify-end gap-3 border-t border-slate-100">
                <button type="button" onClick={() => setShowNewTicketModal(false)} className="px-6 py-3 rounded-xl text-sm font-bold text-slate-600 border border-slate-200 hover:bg-slate-50">Cancel</button>
                <button type="submit" disabled={isSubmitting} className="px-6 py-3 rounded-xl text-sm font-bold bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 shadow-md">
                  {isSubmitting ? "Submitting..." : "Submit Ticket"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* --- SPLIT SCREEN CHAT UI --- */}
      <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden flex flex-col md:flex-row h-[70vh] min-h-[600px]">
        
        {/* LEFT PANE: TICKET LIST */}
        <div className={`w-full md:w-1/3 border-r border-slate-200 flex flex-col bg-slate-50 ${selectedTicket ? 'hidden md:flex' : 'flex'}`}>
          {/* List Header & Filters */}
          <div className="p-5 border-b border-slate-200 bg-white">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-black text-slate-800 text-lg">Support Inbox</h3>
              <button onClick={() => setShowNewTicketModal(true)} className="bg-slate-900 text-white w-8 h-8 rounded-lg text-lg font-bold shadow-sm hover:bg-slate-800 transition flex items-center justify-center" title="New Ticket">
                +
              </button>
            </div>
            {/* Filters */}
            <div className="flex bg-slate-100 p-1 rounded-xl">
              {["ALL", "OPEN", "RESOLVED"].map((tab) => (
                <button 
                  key={tab} 
                  onClick={() => setFilter(tab as any)} 
                  className={`flex-1 py-1.5 text-[10px] font-bold rounded-lg transition-all tracking-wider ${filter === tab ? "bg-white text-slate-900 shadow-sm" : "text-slate-500 hover:text-slate-700"}`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
          
          {/* The List */}
          <div className="flex-1 overflow-y-auto">
            {filteredTickets.length === 0 ? (
              <div className="p-8 text-center text-slate-400 font-medium text-sm">No tickets found.</div>
            ) : (
              <div className="divide-y divide-slate-100">
                {filteredTickets.map((ticket) => (
                  <div 
                    key={ticket.id} 
                    onClick={() => setSelectedTicket(ticket)}
                    className={`p-4 cursor-pointer transition-colors border-l-4 ${
                      selectedTicket?.id === ticket.id 
                        ? 'bg-blue-50 border-blue-600' 
                        : 'bg-transparent border-transparent hover:bg-white'
                    }`}
                  >
                    <div className="flex justify-between items-start mb-1.5">
                      <span className="text-[11px] font-black text-slate-400">{ticket.id}</span>
                      <span className={`px-2 py-0.5 rounded text-[8px] font-bold uppercase tracking-widest border ${getStatusStyle(ticket.status)}`}>
                        {ticket.status}
                      </span>
                    </div>
                    <h4 className={`text-sm font-bold mb-1 truncate ${selectedTicket?.id === ticket.id ? 'text-blue-700' : 'text-slate-900'}`}>{ticket.subject}</h4>
                    <div className="flex justify-between items-center mt-2">
                      <span className="text-[10px] text-slate-500 font-semibold">{getDepartmentIcon(ticket.department)} {ticket.department}</span>
                      <span className="text-[10px] text-slate-400">{(ticket.updatedAt || "").split(",")[0]}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* RIGHT PANE: CHAT / THREAD VIEW */}
        <div className={`w-full md:w-2/3 flex flex-col bg-white relative ${!selectedTicket ? 'hidden md:flex' : 'flex'}`}>
          
          {!selectedTicket ? (
            // Empty State
            <div className="flex-1 flex flex-col items-center justify-center text-center p-8 bg-slate-50/50">
              <div className="w-20 h-20 bg-white rounded-full shadow-sm flex items-center justify-center text-3xl mb-4 border border-slate-100">💬</div>
              <h3 className="text-xl font-black text-slate-800 mb-2">How can we help you?</h3>
              <p className="text-sm text-slate-500 max-w-sm mb-6">Select a ticket from the left menu to view the conversation or open a new request.</p>
              <button onClick={() => setShowNewTicketModal(true)} className="bg-blue-600 text-white px-6 py-3 rounded-xl text-sm font-bold shadow-md hover:bg-blue-700 transition">
                Open New Ticket
              </button>
            </div>
          ) : (
            // Active Chat Thread
            <div className="flex-1 flex flex-col h-full">
              
              {/* Chat Header */}
              <div className="px-6 py-4 border-b border-slate-100 bg-white z-10 shadow-sm flex items-start gap-4">
                <button onClick={() => setSelectedTicket(null)} className="md:hidden mt-1 text-slate-400 hover:text-slate-800 font-black text-lg">←</button>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className={`px-2 py-0.5 rounded text-[9px] font-bold tracking-widest ${getPriorityStyle(selectedTicket.priority)}`}>
                      {selectedTicket.priority} PRIORITY
                    </span>
                    <span className="text-[10px] font-bold text-slate-400">• {selectedTicket.department}</span>
                  </div>
                  <h2 className="text-lg font-black text-slate-900 leading-tight">{selectedTicket.subject}</h2>
                </div>
              </div>

              {/* Chat Messages */}
              <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-slate-50/50">
                {selectedTicket.messages.map((msg) => (
                  <div key={msg.id} className={`flex flex-col w-full ${msg.sender === "CLIENT" ? "items-end" : "items-start"}`}>
                    <div className="flex items-center gap-2 mb-1.5 px-1">
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                        {msg.sender === "CLIENT" ? "You" : msg.senderName}
                      </span>
                      <span className="text-[9px] font-semibold text-slate-400">• {msg.timestamp}</span>
                    </div>
                    <div className={`px-5 py-3.5 max-w-[85%] text-sm shadow-sm ${
                      msg.sender === "CLIENT" 
                        ? "bg-blue-600 text-white rounded-2xl rounded-tr-sm font-medium" 
                        : "bg-white border border-slate-200 text-slate-800 rounded-2xl rounded-tl-sm leading-relaxed"
                    }`}>
                      {msg.message}
                    </div>
                  </div>
                ))}
              </div>

              {/* Reply Box */}
              <div className="p-4 bg-white border-t border-slate-100">
                {selectedTicket.status === "RESOLVED" ? (
                  <div className="text-center p-3 bg-slate-50 rounded-xl border border-slate-100 text-slate-500 text-sm font-bold">
                    This ticket is marked as resolved. Replying will re-open it.
                  </div>
                ) : null}
                
                <form onSubmit={handleReplyTicket} className="mt-3 flex gap-3">
                  <textarea 
                    rows={1}
                    required
                    value={replyMessage}
                    onChange={e => setReplyMessage(e.target.value)}
                    placeholder="Type your message here..." 
                    className="flex-1 border border-slate-200 rounded-xl px-4 py-3.5 text-sm focus:ring-2 focus:ring-blue-500 outline-none resize-none bg-slate-50 focus:bg-white transition-colors h-[50px]"
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' && !e.shiftKey) {
                        e.preventDefault();
                        handleReplyTicket(e as unknown as React.FormEvent);
                      }
                    }}
                  />
                  <button type="submit" disabled={isSubmitting || !replyMessage.trim()} className="px-6 rounded-xl text-sm font-bold bg-slate-900 text-white hover:bg-black disabled:opacity-50 transition shadow-md whitespace-nowrap h-[50px]">
                    {isSubmitting ? "..." : "Send"}
                  </button>
                </form>
              </div>

            </div>
          )}
        </div>
      </div>

    </div>
  );
}