"use client";

import { useState } from "react";
import Link from "next/link";
import { Users, ArrowRight } from "lucide-react";

export default function Register() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    role: "student",
    password: "",
    confirmPassword: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Integrate with Supabase
    alert("Registration successful! Please check your email for verification.");
    window.location.href = "/login";
  };

  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 min-h-screen border-none">
      <div className="flex h-screen w-full overflow-y-auto lg:overflow-hidden flex-col lg:flex-row">
        {/* Left Side: Hero Image Section */}
        <div className="hidden lg:flex lg:w-1/2 relative min-h-[500px]">
          <div className="absolute inset-0 bg-[var(--color-primary)]/20 mix-blend-multiply z-10"></div>
          <img 
            alt="Mentorship and Community Impact" 
            className="absolute inset-0 w-full h-full object-cover" 
            src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80" 
          />
          <div className="relative z-20 flex flex-col justify-between p-16 w-full h-full">
            <Link href="/" className="flex items-center gap-3 w-fit hover:opacity-80 transition-opacity">
              <div className="size-10 bg-white rounded-lg flex items-center justify-center text-[var(--color-primary)] shadow-lg">
                <Users className="text-[var(--color-primary)]" size={24} />
              </div>
              <h2 className="text-white text-2xl font-bold tracking-tight shadow-sm drop-shadow-md">HimmatKaar</h2>
            </Link>
            
            <div className="max-w-md drop-shadow-md">
              <h1 className="text-white text-5xl font-extrabold leading-tight mb-6">Empowering the Next Generation of Leaders</h1>
              <p className="text-white/95 text-lg font-medium leading-relaxed drop-shadow-md">
                Join a community dedicated to mentorship, growth, and creating a sustainable impact in the lives of youth everywhere.
              </p>
            </div>
            
            <div className="flex gap-4 items-center">
              <div className="flex -space-x-3">
                <img alt="Avatar" className="size-10 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&q=80" />
                <img alt="Avatar" className="size-10 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=100&q=80" />
                <img alt="Avatar" className="size-10 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80" />
              </div>
              <p className="text-white text-sm font-medium drop-shadow-md">Joined by 2,000+ members this month</p>
            </div>
          </div>
        </div>

        {/* Right Side: Register Form Section */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-6 md:p-12 lg:p-20 overflow-y-auto min-h-screen lg:min-h-0 bg-background-light dark:bg-background-dark">
          <div className="w-full max-w-md">
            {/* Mobile Logo */}
            <div className="lg:hidden flex justify-center mb-8">
              <Link href="/" className="flex items-center gap-3">
                <div className="bg-white p-2 rounded-lg shadow-sm">
                  <Users className="size-8 text-[var(--color-primary)]" />
                </div>
                <span className="text-xl font-bold text-slate-900 dark:text-slate-100">HimmatKaar</span>
              </Link>
            </div>

            <div className="mb-10 text-center lg:text-left">
              <h2 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">Join HimmatKaar</h2>
              <p className="text-slate-500 dark:text-slate-400 mt-2 text-lg">Start your journey of empowerment today</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 gap-5">
                <label className="block">
                  <span className="text-slate-700 dark:text-slate-300 text-sm font-semibold mb-1.5 block">Full Name</span>
                  <input 
                    type="text" 
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 h-12 px-4 focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-all placeholder:text-slate-400 outline-none text-slate-900 dark:text-slate-100" 
                    placeholder="John Doe" 
                  />
                </label>

                <label className="block">
                  <span className="text-slate-700 dark:text-slate-300 text-sm font-semibold mb-1.5 block">Email Address</span>
                  <input 
                    type="email" 
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 h-12 px-4 focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-all placeholder:text-slate-400 outline-none text-slate-900 dark:text-slate-100" 
                    placeholder="john@example.com" 
                  />
                </label>

                <label className="block">
                  <span className="text-slate-700 dark:text-slate-300 text-sm font-semibold mb-1.5 block">Role</span>
                  <select 
                    required
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    className="w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 h-12 px-4 focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-all text-slate-700 dark:text-slate-300 outline-none"
                  >
                    <option disabled value="">Select your role</option>
                    <option value="student">Student</option>
                    <option value="mentor">Mentor</option>
                    <option value="coordinator">Coordinator</option>
                  </select>
                </label>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <label className="block">
                    <span className="text-slate-700 dark:text-slate-300 text-sm font-semibold mb-1.5 block">Password</span>
                    <input 
                      type="password" 
                      required
                      value={formData.password}
                      onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                      className="w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 h-12 px-4 focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-all placeholder:text-slate-400 outline-none text-slate-900 dark:text-slate-100" 
                      placeholder="••••••••" 
                    />
                  </label>
                  <label className="block">
                    <span className="text-slate-700 dark:text-slate-300 text-sm font-semibold mb-1.5 block">Confirm Password</span>
                    <input 
                      type="password" 
                      required
                      value={formData.confirmPassword}
                      onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                      className="w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 h-12 px-4 focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-all placeholder:text-slate-400 outline-none text-slate-900 dark:text-slate-100" 
                      placeholder="••••••••" 
                    />
                  </label>
                </div>
              </div>

              <button 
                type="submit" 
                className="w-full bg-[var(--color-primary)] hover:brightness-110 text-white font-bold py-3.5 rounded-xl shadow-lg shadow-[var(--color-primary)]/20 transition-all active:scale-[0.98] flex items-center justify-center gap-2 mt-4"
              >
                <span>Create Account</span>
                <ArrowRight size={20} />
              </button>

              <div className="relative py-4 flex items-center">
                <div className="flex-grow border-t border-slate-200 dark:border-slate-800"></div>
                <span className="flex-shrink mx-4 text-slate-400 text-sm font-medium">Or register with</span>
                <div className="flex-grow border-t border-slate-200 dark:border-slate-800"></div>
              </div>

              <button 
                type="button" 
                className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 font-semibold py-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-all flex items-center justify-center gap-3"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"></path>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"></path>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"></path>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"></path>
                </svg>
                <span>Sign up with Google</span>
              </button>
            </form>

            <div className="mt-8 text-center">
              <p className="text-slate-600 dark:text-slate-400">
                Already have an account? 
                <Link href="/login" className="text-[var(--color-primary)] font-bold hover:underline underline-offset-4 ml-1">Log in</Link>
              </p>
            </div>

            <div className="mt-12 text-center">
              <p className="text-xs text-slate-400 dark:text-slate-500">
                By signing up, you agree to our{" "}
                <Link href="/terms" className="underline hover:text-slate-600 dark:hover:text-slate-300">Terms of Service</Link> and{" "}
                <Link href="/privacy" className="underline hover:text-slate-600 dark:hover:text-slate-300">Privacy Policy</Link>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
