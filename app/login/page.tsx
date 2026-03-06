"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Integrate with Supabase authentication
    // For now, redirect based on mock role
    const mockRole = "student"; // This will come from Supabase
    window.location.href = `/dashboard/${mockRole}`;
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-6 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full"
      >
        {/* Logo */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-3 mb-4">
            <Image
              src="/himmatkaar-logo.jpg"
              alt="HimmatKaar Logo"
              width={60}
              height={60}
              className="rounded-lg shadow-md"
            />
            <span className="text-3xl font-bold text-gray-900">HimmatKaar</span>
          </Link>
          <h1 className="text-2xl font-bold text-gray-900 mt-4">Welcome Back</h1>
          <p className="text-gray-600 mt-2">Sign in to access your dashboard</p>
        </div>

        {/* Login Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-2xl shadow-xl p-8"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-700 font-medium mb-2">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#3a8a4d] focus:outline-none transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type={showPassword ? "text" : "password"}
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  required
                  className="w-full pl-10 pr-12 py-3 border-2 border-gray-200 rounded-lg focus:border-[#3a8a4d] focus:outline-none transition-colors"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="w-4 h-4 text-[#3a8a4d] border-gray-300 rounded focus:ring-[#3a8a4d]" />
                <span className="text-sm text-gray-600">Remember me</span>
              </label>
              <Link href="/forgot-password" className="text-sm text-[#3a8a4d] hover:text-[#17431f]">
                Forgot password?
              </Link>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full bg-[#3a8a4d] text-white py-3 rounded-lg font-semibold hover:bg-[#17431f] transition-all hover:shadow-lg"
            >
              Sign In
            </motion.button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-600">
              Don't have an account?{" "}
              <Link href="/register" className="text-[#3a8a4d] hover:text-[#17431f] font-semibold">
                Sign up
              </Link>
            </p>
          </div>

          {/* Demo Logins */}
          <div className="mt-6 pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-600 mb-3 text-center">Quick Demo Access:</p>
            <div className="space-y-2">
              <Link href="/dashboard/student">
                <button className="w-full text-sm py-2 px-4 border-2 border-gray-200 rounded-lg hover:border-[#3a8a4d] transition-colors">
                  Student Dashboard
                </button>
              </Link>
              <Link href="/dashboard/coordinator">
                <button className="w-full text-sm py-2 px-4 border-2 border-gray-200 rounded-lg hover:border-[#3a8a4d] transition-colors">
                  Coordinator Dashboard
                </button>
              </Link>
              <Link href="/dashboard/admin">
                <button className="w-full text-sm py-2 px-4 border-2 border-gray-200 rounded-lg hover:border-[#3a8a4d] transition-colors">
                  Admin Dashboard
                </button>
              </Link>
            </div>
          </div>
        </motion.div>

        <div className="mt-6 text-center">
          <Link href="/" className="text-gray-600 hover:text-gray-900">
            ← Back to Home
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
