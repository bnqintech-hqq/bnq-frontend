"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { FormEvent, useState } from "react";

export default function ForgotPasswordPage() {
  const searchParams = useSearchParams();
  // Capitalize the role for display purposes
  const rawRole = searchParams.get("role") || "client";
  const displayRole = rawRole.charAt(0).toUpperCase() + rawRole.slice(1);

  // State Management for Multi-Step Form
  const [step, setStep] = useState<1 | 2>(1); // Step 1: Email request, Step 2: OTP & New Password
  
  // Form Fields
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  
  // UI States
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  // STEP 1: Handle sending the OTP to the user's email
  async function handleRequestOTP(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setMessage("");
    setError("");

    try {
      const response = await fetch("/api/auth/forgot-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, role: rawRole.toUpperCase() }),
      });
      const data = await response.json().catch(() => null);

      if (!response.ok) {
        throw new Error(data?.message || data?.error || "Unable to send reset instructions.");
      }

      // Transition to Step 2 if OTP sent successfully
      setMessage(data?.message || "OTP sent successfully! Please check your email.");
      setStep(2);
    } catch (err: any) {
      setError(err.message || "An unexpected error occurred while sending OTP.");
    } finally {
      setIsSubmitting(false);
    }
  }

  // STEP 2: Handle verifying OTP and updating the password
  async function handleResetPassword(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setMessage("");
    setError("");

    // Double password verification logic
    if (newPassword !== confirmPassword) {
      setError("Passwords do not match. Please try again.");
      setIsSubmitting(false);
      return;
    }

    if (newPassword.length < 8) {
      setError("Password must be at least 8 characters long.");
      setIsSubmitting(false);
      return;
    }

    try {
      /* NOTE: You will need to create a new backend API route (/api/auth/reset-password) 
        that accepts { email, otp, newPassword, role } and updates the password in the database.
      */
      const response = await fetch("/api/auth/reset-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, otp, newPassword, role: rawRole.toUpperCase() }),
      });
      
      const data = await response.json().catch(() => null);

      if (!response.ok) {
        throw new Error(data?.message || data?.error || "Failed to reset password. Invalid OTP.");
      }

      setMessage("Password reset successfully! You can now log in.");
      // Optional: Redirect user to login page after 2 seconds
      setTimeout(() => {
        window.location.href = `/login/${rawRole}`;
      }, 2000);
      
    } catch (err: any) {
      setError(err.message || "Failed to reset password.");
    } finally {
      setIsSubmitting(false);
    }
  }

  // Handle Google OAuth Action
  function handleGoogleLogin() {
    // NOTE: Replace this with your actual Google OAuth endpoint or NextAuth logic
    window.location.href = `/api/auth/google?role=${rawRole}`;
  }

  return (
    <main className="flex min-h-screen items-start justify-center bg-gray-50 px-4 pb-12 pt-24 text-gray-900 font-sans relative">
      <section className="mt-8 w-full max-w-md rounded-3xl border border-gray-100 bg-white p-6 shadow-[0_8px_30px_rgb(0,0,0,0.08)] sm:p-10 transition-all duration-500">
        
        {/* Header Section */}
        <div className="mb-8 text-center sm:text-left">
          <div className="mb-4 inline-block rounded-full border border-blue-100 bg-blue-50 px-3 py-1">
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-blue-600">
              {displayRole} Account Recovery
            </p>
          </div>
          <h1 className="mb-2 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            {step === 1 ? "Forgot Password?" : "Reset Password"}
          </h1>
          <p className="text-sm leading-relaxed text-gray-500">
            {step === 1 
              ? `Enter your email to recover your ${displayRole} dashboard access.` 
              : `Enter the OTP sent to ${email} and your new password.`}
          </p>
        </div>

        {/* Dynamic Alert Messages */}
        {message && (
          <div className="mb-5 rounded-xl border border-emerald-100 bg-emerald-50 p-4 text-sm font-medium text-emerald-700 animate-in fade-in slide-in-from-top-2">
            {message}
          </div>
        )}
        {error && (
          <div className="mb-5 rounded-xl border border-red-100 bg-red-50 p-4 text-sm font-medium text-red-600 animate-in fade-in slide-in-from-top-2">
            {error}
          </div>
        )}

        {/* --- STEP 1: REQUEST OTP FORM --- */}
        {step === 1 && (
          <form onSubmit={handleRequestOTP} className="space-y-5 animate-in fade-in duration-300">
            <div className="space-y-1.5">
              <label htmlFor="email" className="ml-1 block text-sm font-semibold text-gray-700">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                autoComplete="email"
                className="w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-3.5 text-sm text-gray-900 outline-none transition-all duration-300 placeholder:text-gray-400 hover:border-gray-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                placeholder="you@example.com"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="flex w-full items-center justify-center rounded-xl bg-blue-600 px-4 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:bg-blue-700 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-600/30 active:scale-[0.98] disabled:opacity-70"
            >
              {isSubmitting ? "Sending OTP..." : "Get Reset Link"}
            </button>

            {/* Visual Divider */}
            <div className="relative flex items-center py-2">
              <div className="flex-grow border-t border-gray-200"></div>
              <span className="flex-shrink-0 px-4 text-xs font-medium text-gray-400 uppercase tracking-wider">
                Or
              </span>
              <div className="flex-grow border-t border-gray-200"></div>
            </div>

            {/* Google OAuth Login Button */}
            <button
              type="button"
              onClick={handleGoogleLogin}
              className="flex w-full items-center justify-center gap-3 rounded-xl border border-gray-300 bg-white px-4 py-3.5 text-sm font-bold text-gray-700 transition-all duration-300 hover:bg-gray-50 hover:border-gray-400 active:scale-[0.98] focus:outline-none focus:ring-4 focus:ring-gray-100"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
              </svg>
              Continue with Google
            </button>
          </form>
        )}

        {/* --- STEP 2: VERIFY OTP & NEW PASSWORD FORM --- */}
        {step === 2 && (
          <form onSubmit={handleResetPassword} className="space-y-5 animate-in fade-in duration-300">
            <div className="space-y-1.5">
              <label htmlFor="otp" className="ml-1 block text-sm font-semibold text-gray-700">
                6-Digit OTP
              </label>
              <input
                id="otp"
                type="text"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                required
                maxLength={6}
                className="w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-3.5 text-center text-xl tracking-widest text-gray-900 outline-none transition-all duration-300 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                placeholder="------"
              />
            </div>

            <div className="space-y-1.5 relative">
              <label htmlFor="newPassword" className="ml-1 block text-sm font-semibold text-gray-700">
                New Password
              </label>
              <input
                id="newPassword"
                type={showPassword ? "text" : "password"}
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
                className="w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-3.5 text-sm text-gray-900 outline-none transition-all duration-300 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                placeholder="Enter new password"
              />
            </div>

            <div className="space-y-1.5 relative">
              <label htmlFor="confirmPassword" className="ml-1 block text-sm font-semibold text-gray-700">
                Confirm Password
              </label>
              <input
                id="confirmPassword"
                type={showPassword ? "text" : "password"}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                className="w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-3.5 text-sm text-gray-900 outline-none transition-all duration-300 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                placeholder="Re-enter new password"
              />
              
              {/* Show/Hide Password Toggle */}
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-9 p-2 text-gray-400 hover:text-blue-600 transition-colors focus:outline-none"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="flex w-full items-center justify-center rounded-xl bg-emerald-600 px-4 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:bg-emerald-700 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-emerald-600/30 active:scale-[0.98] disabled:opacity-70"
            >
              {isSubmitting ? "Updating Password..." : "Update Password"}
            </button>
          </form>
        )}

        {/* Footer Navigation */}
        <div className="mt-8 border-t border-gray-100 pt-6 text-center flex flex-col gap-3">
          <Link href={`/login/${rawRole}`} className="text-sm font-bold text-blue-600 transition hover:text-blue-700 hover:underline">
            Back to {displayRole} Login
          </Link>
          <p className="text-sm text-gray-500">
            Don't have an account?{' '}
            <Link 
              href={`/register/${rawRole}`} 
              className="font-bold text-gray-700 hover:text-blue-600 hover:underline transition-all duration-200"
            >
              Sign up
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}