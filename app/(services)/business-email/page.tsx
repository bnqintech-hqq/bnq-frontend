import React from "react";

export default function BusinessEmailPage() {
  return (
    <main className="min-h-screen bg-slate-50 pt-28 pb-16 font-sans">
      <section className="bg-slate-900 py-24 text-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 font-bold uppercase tracking-wider text-xs mb-6">
            Professional Communication
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
            Build Trust with <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Business Email</span>
          </h1>
          <p className="text-lg text-slate-300 mb-8 leading-relaxed">
            Upgrade from @gmail.com to you@yourcompany.com. Experience ad-free, secure, and professional email hosting with advanced anti-spam protection.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-10">
        <div className="bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden flex flex-col lg:flex-row">
          
          <div className="lg:w-1/2 p-8 lg:p-12 bg-slate-50 border-r border-slate-100">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Email Features</h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center shrink-0">📧</div>
                <div>
                  <h4 className="font-bold text-slate-900">Custom Domain Emails</h4>
                  <p className="text-sm text-slate-600 mt-1">Look professional and build brand identity with every email you send.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center shrink-0">🛡️</div>
                <div>
                  <h4 className="font-bold text-slate-900">Advanced Anti-Spam</h4>
                  <p className="text-sm text-slate-600 mt-1">Premium virus and spam filtering keeps your inbox clean and secure.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center shrink-0">📱</div>
                <div>
                  <h4 className="font-bold text-slate-900">Sync Across Devices</h4>
                  <p className="text-sm text-slate-600 mt-1">IMAP/POP3 support ensures your emails are available on your phone, tablet, and PC.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 p-8 lg:p-12">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Starting at just ₹99/month</h3>
            <p className="text-sm text-slate-500 mb-8">Ready to upgrade your business communication? Let us set up your custom email IDs today.</p>
            
            <form className="space-y-4">
              <input type="text" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-blue-500" placeholder="Your Name" />
              <input type="text" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-blue-500" placeholder="Do you already own a domain?" />
              <input type="tel" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-blue-500" placeholder="Phone Number" />
              <button type="submit" className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-colors mt-2">
                Get Business Email
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}