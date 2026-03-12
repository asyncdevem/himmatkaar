"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X, Rocket } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-white/80 dark:bg-[#151d17]/80 border-b border-[var(--color-primary)]/10 text-slate-900 dark:text-white transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <Image 
              src="/himmatkaar-logo.jpg" 
              alt="HimmatKaar Logo" 
              width={40} 
              height={40} 
              className="rounded-lg group-hover:scale-105 transition-transform duration-300"
            />
            <h1 className="text-xl font-bold tracking-tight">HimmatKaar</h1>
          </Link>
          
          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-10">
            <Link href="/" className="text-sm font-semibold hover:text-[var(--color-primary)] transition-colors">Home</Link>
            <Link href="/about" className="text-sm font-semibold hover:text-[var(--color-primary)] transition-colors">About</Link>
            <Link href="/launchpad" className="text-sm font-semibold hover:text-[var(--color-primary)] transition-colors">Launchpad</Link>
            <Link href="/impact" className="text-sm font-semibold hover:text-[var(--color-primary)] transition-colors">Impact</Link>
            <Link href="/contact" className="text-sm font-semibold hover:text-[var(--color-primary)] transition-colors">Contact</Link>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Link href="/login" className="text-sm font-bold px-5 py-2.5 rounded-lg hover:bg-[var(--color-primary)]/5 transition-colors">
              Login
            </Link>
            <Link href="/register" className="bg-[var(--color-primary)] text-white text-sm font-bold px-6 py-2.5 rounded-lg shadow-lg shadow-[#39894c]/20 hover:brightness-110 transition-all">
              Apply Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-slate-900 dark:text-white flex items-center"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed top-20 left-0 right-0 z-40 md:hidden bg-white/95 dark:bg-[#151d17]/95 backdrop-blur-xl border-b border-[var(--color-primary)]/10 overflow-hidden shadow-2xl"
          >
            <div className="flex flex-col gap-4 py-6 px-6">
              <Link href="/" className="text-lg font-semibold hover:text-[var(--color-primary)] transition-colors" onClick={() => setMobileMenuOpen(false)}>Home</Link>
              <Link href="/about" className="text-lg font-semibold hover:text-[var(--color-primary)] transition-colors" onClick={() => setMobileMenuOpen(false)}>About</Link>
              <Link href="/launchpad" className="text-lg font-semibold hover:text-[var(--color-primary)] transition-colors" onClick={() => setMobileMenuOpen(false)}>Launchpad</Link>
              <Link href="/impact" className="text-lg font-semibold hover:text-[var(--color-primary)] transition-colors" onClick={() => setMobileMenuOpen(false)}>Impact</Link>
              <Link href="/contact" className="text-lg font-semibold hover:text-[var(--color-primary)] transition-colors" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
              <hr className="border-[var(--color-primary)]/10 my-2" />
              <Link href="/login" className="text-lg font-bold text-center py-3 rounded-lg hover:bg-[var(--color-primary)]/5 transition-colors" onClick={() => setMobileMenuOpen(false)}>Login</Link>
              <Link href="/register" className="bg-[var(--color-primary)] text-white text-lg font-bold py-3 rounded-lg hover:brightness-110 shadow-lg text-center transition-all" onClick={() => setMobileMenuOpen(false)}>Apply Now</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
