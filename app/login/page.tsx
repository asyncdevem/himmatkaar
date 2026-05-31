"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Mail, Lock, Eye, EyeOff, Loader2 } from "lucide-react";
import { signIn } from "@/lib/auth";

export default function Login() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await signIn(formData.email, formData.password);
      // Redirect to admin dashboard (can be extended for role-based routing)
      router.push("/dashboard/admin");
    } catch (err: any) {
      setError(err.message || "Invalid email or password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--color-off-white)]">
      <div className="flex w-full min-h-screen">
        {/* Left Side: Hero Image Section */}
        <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
          <div className="absolute inset-0 bg-[var(--color-courage-green)]/90 mix-blend-multiply z-10"></div>
          <div 
            className="absolute inset-0 bg-center bg-cover" 
            style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80")' }}
          >
          </div>
          <div className="relative z-20 flex flex-col justify-between h-full p-16 text-white">
            <Link href="/" className="flex items-center gap-3 w-fit hover:opacity-80 transition-opacity">
              <Image 
                src="/himmatkaar-logo.jpg" 
                alt="Himmatkaar Logo" 
                width={56} 
                height={56} 
                className="rounded-lg"
              />
              <span className="text-2xl font-bold tracking-tight font-heading">Himmatkaar</span>
            </Link>
            <div className="max-w-md">
              <h1 className="text-5xl font-extrabold leading-tight mb-6 font-heading">Empowering the youth of tomorrow.</h1>
              <p className="text-lg opacity-90 leading-relaxed font-body">Join a community dedicated to growth, innovation, and leadership. Your journey to excellence starts here.</p>
            </div>
          </div>
        </div>

        {/* Right Side: Login Form Section */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-[var(--color-off-white)]">
          <div className="w-full max-w-md space-y-8">
            {/* Mobile Logo */}
            <div className="lg:hidden flex justify-center mb-8">
              <Link href="/" className="flex items-center gap-3">
                <Image 
                  src="/himmatkaar-logo.jpg" 
                  alt="Himmatkaar Logo" 
                  width={48} 
                  height={48} 
                  className="rounded-lg"
                />
                <span className="text-xl font-bold text-[var(--color-deep-navy)] font-heading">Himmatkaar</span>
              </Link>
            </div>

            <div className="text-center lg:text-left">
              <h2 className="text-4xl font-extrabold text-[var(--color-deep-navy)] tracking-tight font-heading">Login</h2>
              <p className="mt-3 text-slate-600 font-body">Sign in to access your dashboard account.</p>
            </div>

            {/* Form Container */}
            <div className="bg-white border border-slate-200 p-8 rounded-xl shadow-lg">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Error Message */}
                {error && (
                  <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm font-body">
                    {error}
                  </div>
                )}
                {/* Email Field */}
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700 ml-1 font-body" htmlFor="email">Email Address</label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                    <input 
                      id="email" 
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="w-full pl-12 pr-4 py-4 rounded-xl border border-slate-200 bg-white text-slate-900 focus:ring-2 focus:ring-[var(--color-courage-green)] focus:border-transparent transition-all outline-none font-body" 
                      placeholder="name@company.com" 
                    />
                  </div>
                </div>

                {/* Password Field */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center px-1">
                    <label className="text-sm font-semibold text-slate-700 font-body" htmlFor="password">Password</label>
                    <Link href="/forgot-password" className="text-xs font-bold text-[var(--color-courage-green)] hover:underline font-body">Forgot password?</Link>
                  </div>
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                    <input 
                      id="password" 
                      type={showPassword ? "text" : "password"}
                      value={formData.password}
                      onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                      required
                      className="w-full pl-12 pr-12 py-4 rounded-xl border border-slate-200 bg-white text-slate-900 focus:ring-2 focus:ring-[var(--color-courage-green)] focus:border-transparent transition-all outline-none font-body" 
                      placeholder="••••••••" 
                    />
                    <button 
                      type="button" 
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
                    >
                      {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                  </div>
                </div>

                {/* Login Button */}
                <button 
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[var(--color-courage-green)] hover:brightness-110 text-white font-bold py-4 rounded-xl shadow-lg transition-all transform active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 font-body"
                >
                  {loading ? (
                    <>
                      <Loader2 className="animate-spin" size={20} />
                      Signing in...
                    </>
                  ) : (
                    "Log In"
                  )}
                </button>
              </form>
            </div>

            <p className="text-center text-slate-600 text-sm font-medium font-body">
              Public signup is coming soon for other roles.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}


