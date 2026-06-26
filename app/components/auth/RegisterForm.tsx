'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

type RegisterFormProps = {
  role: "client" | "partner" | "reseller";
  title: string;
  eyebrow?: string;
};

export default function RegisterForm({ role, title, eyebrow = "JOIN US" }: RegisterFormProps) {
  const router = useRouter();
  
  // Naye fields (phone, gender, dob) add kiye hain
  const [formData, setFormData] = useState({ 
    name: '', 
    email: '', 
    phone: '',
    dob: '',
    gender: '',
    password: '' 
  });
  
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  
  // Success popup ke liye naya state
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        // Saara data backend ko bhej rahe hain
        body: JSON.stringify({ ...formData, role: role.toUpperCase() }),
      });

      let data;
      try {
        data = await res.json();
      } catch (err) {
        throw new Error('Server error. Please try again later.');
      }

      if (!res.ok) {
        throw new Error(data.message || data.error || 'Registration failed');
      }

      // Agar success hua toh popup dikhayenge
      setShowSuccessPopup(true);

      // 2.5 seconds baad automatically login page par bhej denge
      setTimeout(() => {
        const loginUrl = `/login/${role}`;
        router.push(`${loginUrl}?registered=true`);
      }, 2500);
      
    } catch (err: any) {
      setError(err.message);
      setLoading(false); // Sirf error aane par loading rokenge, success par nahi
    }
  };

  // Naya common input style taaki code clean rahe
  const inputClassName = "w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-3.5 text-sm text-gray-900 placeholder-gray-400 outline-none transition-all duration-300 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 hover:border-gray-400";

  return (
    <main className="min-h-screen bg-gray-50 text-gray-900 font-sans flex items-start justify-center pt-24 pb-12 px-4 relative">
      
      {/* --- SUCCESS POPUP OVERLAY --- */}
      {showSuccessPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm transition-all duration-500">
          <div className="bg-white rounded-3xl p-8 shadow-2xl max-w-sm w-full text-center transform transition-all scale-100 animate-in fade-in zoom-in duration-300">
            <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-6">
              <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Registration Successful!</h2>
            <p className="text-gray-500 mb-6">
              Welcome aboard! You have successfully registered as a <span className="font-bold text-blue-600 capitalize">{role}</span>.
            </p>
            <div className="flex justify-center">
              <svg className="animate-spin h-6 w-6 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            </div>
            <p className="text-xs text-gray-400 mt-4">Redirecting to login...</p>
          </div>
        </div>
      )}

      <section className="w-full max-w-lg bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-100 p-6 sm:p-10 transition-all mt-8">
        
        <div className="mb-8 text-center sm:text-left">
          <div className="inline-block px-3 py-1 mb-4 rounded-full bg-blue-50 border border-blue-100">
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-blue-600">
              {eyebrow}
            </p>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900 mb-2">
            {title}
          </h1>
          <p className="text-sm leading-relaxed text-gray-500">
            Create your BNQinTECH <span className="capitalize font-semibold text-gray-700">{role}</span> account to get started.
          </p>
        </div>

        {error && (
          <div className="bg-red-50 text-red-600 text-sm p-4 rounded-xl mb-6 border border-red-100 font-medium">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          
          {/* Row 1: Name & Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="space-y-1.5">
              <label className="block text-sm font-semibold text-gray-700 ml-1">Full Name</label>
              <input 
                type="text" required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className={inputClassName}
                placeholder="John Doe"
              />
            </div>
            <div className="space-y-1.5">
              <label className="block text-sm font-semibold text-gray-700 ml-1">Phone Number</label>
              <input 
                type="tel" required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className={inputClassName}
                placeholder="+91 98765 43210"
              />
            </div>
          </div>

          {/* Row 2: DOB & Gender */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="space-y-1.5">
              <label className="block text-sm font-semibold text-gray-700 ml-1">Date of Birth</label>
              <input 
                type="date" required
                value={formData.dob}
                onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
                className={inputClassName}
              />
            </div>
            <div className="space-y-1.5">
              <label className="block text-sm font-semibold text-gray-700 ml-1">Gender</label>
              <select 
                required
                value={formData.gender}
                onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                className={`${inputClassName} cursor-pointer appearance-none`}
              >
                <option value="" disabled>Select Gender</option>
                <option value="MALE">Male</option>
                <option value="FEMALE">Female</option>
                <option value="OTHER">Other</option>
              </select>
            </div>
          </div>

          {/* Row 3: Email */}
          <div className="space-y-1.5">
            <label className="block text-sm font-semibold text-gray-700 ml-1">Email Address</label>
            <input 
              type="email" required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className={inputClassName}
              placeholder="you@example.com"
            />
          </div>

          {/* Row 4: Password */}
          <div className="space-y-1.5">
            <label className="block text-sm font-semibold text-gray-700 ml-1">Password</label>
            <div className="relative group">
              <input 
                type={showPassword ? "text" : "password"} required
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                className={`${inputClassName} pr-12`}
                placeholder="••••••••"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2 text-gray-400 hover:text-blue-600 transition-colors focus:outline-none rounded-lg hover:bg-gray-100"
              >
                {showPassword ? (
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                ) : (
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          <div className="pt-2">
            <button 
              type="submit" 
              disabled={loading || showSuccessPopup}
              className="w-full rounded-xl bg-blue-600 px-4 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:bg-blue-700 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-600/30 active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center"
            >
              {loading ? (
                <span className="flex items-center gap-2">
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing...
                </span>
              ) : (
                'Create Account'
              )}
            </button>
          </div>
        </form>

        <div className="mt-8 pt-6 border-t border-gray-100 text-center">
          <p className="text-sm text-gray-500">
            Already have an account?{' '}
            <Link 
              href={`/login/${role}`} 
              className="font-bold text-blue-600 hover:text-blue-700 hover:underline transition-all duration-200 ml-1"
            >
              Log in here
            </Link>
          </p>
        </div>

      </section>
    </main>
  );
}