"use client";

import { useState } from "react";
import Link from "next/link";
import { Mail, Lock, Eye, EyeOff, Rocket, ArrowRight } from "lucide-react";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Integrate with Supabase authentication
    // For now, only admin login is implemented
    // Student and Coordinator dashboards will be implemented in future work
    window.location.href = `/dashboard/admin`;
  };

  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 min-h-screen flex items-center justify-center">
      <div className="flex w-full min-h-screen">
        {/* Left Side: Hero Image Section */}
        <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
          <div className="absolute inset-0 bg-[var(--color-primary)]/60 mix-blend-multiply z-10"></div>
          <div 
            className="absolute inset-0 bg-center bg-cover" 
            style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80")' }}
          >
          </div>
          <div className="relative z-20 flex flex-col justify-between h-full p-16 text-white">
            <Link href="/" className="flex items-center gap-3 w-fit hover:opacity-80 transition-opacity">
              <div className="bg-white p-2 rounded-lg">
                <Rocket className="size-8 text-[var(--color-primary)]" />
              </div>
              <span className="text-2xl font-bold tracking-tight">HimmatKaar</span>
            </Link>
            <div className="max-w-md">
              <h1 className="text-5xl font-extrabold leading-tight mb-6">Empowering the youth of tomorrow.</h1>
              <p className="text-lg opacity-90 leading-relaxed">Join a community dedicated to growth, innovation, and leadership. Your journey to excellence starts here.</p>
            </div>
          </div>
        </div>

        {/* Right Side: Login Form Section */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-background-light dark:bg-background-dark">
          <div className="w-full max-w-md space-y-8">
            {/* Mobile Logo */}
            <div className="lg:hidden flex justify-center mb-8">
              <Link href="/" className="flex items-center gap-3">
                <div className="bg-white p-2 rounded-lg shadow-sm">
                  <Rocket className="size-8 text-[var(--color-primary)]" />
                </div>
                <span className="text-xl font-bold text-slate-900 dark:text-slate-100">HimmatKaar</span>
              </Link>
            </div>

            <div className="text-center lg:text-left">
              <h2 className="text-4xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight">Welcome Back</h2>
              <p className="mt-3 text-slate-600 dark:text-slate-400">Log in to continue your journey with HimmatKaar.</p>
            </div>

            {/* Glassmorphic Form Container */}
            <div className="bg-white/70 dark:bg-slate-800/50 backdrop-blur-xl border border-white/20 dark:border-slate-700/30 p-8 rounded-xl shadow-2xl shadow-[var(--color-primary)]/5">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Email Field */}
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700 dark:text-slate-300 ml-1" htmlFor="email">Email Address</label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                    <input 
                      id="email" 
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="w-full pl-12 pr-4 py-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-all outline-none" 
                      placeholder="name@company.com" 
                    />
                  </div>
                </div>

                {/* Password Field */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center px-1">
                    <label className="text-sm font-semibold text-slate-700 dark:text-slate-300" htmlFor="password">Password</label>
                    <Link href="/forgot-password" className="text-xs font-bold text-[var(--color-primary)] hover:underline">Forgot password?</Link>
                  </div>
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                    <input 
                      id="password" 
                      type={showPassword ? "text" : "password"}
                      value={formData.password}
                      onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                      required
                      className="w-full pl-12 pr-12 py-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-all outline-none" 
                      placeholder="••••••••" 
                    />
                    <button 
                      type="button" 
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
                    >
                      {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                  </div>
                </div>

                {/* Login Button */}
                <button 
                  type="submit" 
                  className="w-full bg-[var(--color-primary)] hover:brightness-110 text-white font-bold py-4 rounded-xl shadow-lg shadow-[var(--color-primary)]/20 transition-all transform active:scale-[0.98]"
                >
                  Log In
                </button>
              </form>

              {/* Divider */}
              <div className="relative my-8">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-slate-200 dark:border-slate-700"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-white dark:bg-slate-800 text-slate-500 dark:text-slate-400 font-medium">Or continue with</span>
                </div>
              </div>

              {/* Google Sign In */}
              <button 
                type="button"
                className="w-full flex items-center justify-center gap-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 py-4 rounded-xl transition-all"
              >
                <svg className="size-5" viewBox="0 0 24 24">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"></path>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"></path>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"></path>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"></path>
                </svg>
                <span className="text-slate-700 dark:text-slate-200 font-bold">Sign in with Google</span>
              </button>

              {/* Demo Access Links */}
              <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-700">
                <p className="text-sm text-center text-slate-500 mb-4">Quick Demo Access (Dev Only):</p>
                <div className="flex gap-2 text-xs">
                  <Link href="/dashboard/student" className="flex-1 text-center py-2 px-3 border border-slate-200 dark:border-slate-700 rounded hover:bg-[var(--color-primary)] hover:text-white transition-colors dark:hover:bg-[var(--color-primary)]">Student</Link>
                  <Link href="/dashboard/coordinator" className="flex-1 text-center py-2 px-3 border border-slate-200 dark:border-slate-700 rounded hover:bg-[var(--color-primary)] hover:text-white transition-colors dark:hover:bg-[var(--color-primary)]">Coordinator</Link>
                  <Link href="/dashboard/admin" className="flex-1 text-center py-2 px-3 border border-slate-200 dark:border-slate-700 rounded hover:bg-[var(--color-primary)] hover:text-white transition-colors dark:hover:bg-[var(--color-primary)]">Admin</Link>
                </div>
              </div>
            </div>

            {/* Footer Sign Up Link */}
            <p className="text-center text-slate-600 dark:text-slate-400 font-medium">
              Don't have an account?{" "}
              <Link href="/register" className="text-[var(--color-primary)] font-bold hover:underline transition-all">Sign up</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
