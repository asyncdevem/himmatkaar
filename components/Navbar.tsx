"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [programDropdownOpen, setProgramDropdownOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-white/95 dark:bg-[#151d17]/95 border-b border-slate-200 dark:border-[var(--color-primary)]/10 text-slate-900 dark:text-white transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <Image 
              src="/himmatkaar-logo.jpg" 
              alt="Himmatkaar Logo" 
              width={40} 
              height={40} 
              className="rounded-lg group-hover:scale-105 transition-transform duration-300"
            />
            <h1 className="text-xl font-bold tracking-tight">Himmatkaar</h1>
          </Link>
          
          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link href="/" className="text-sm font-bold hover:text-[var(--color-primary)] transition-colors border-b-2 border-[var(--color-primary)] pb-1">
              HOME
            </Link>
            
            {/* About Us Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setAboutDropdownOpen(true)}
              onMouseLeave={() => setAboutDropdownOpen(false)}
            >
              <button className="text-sm font-bold hover:text-[var(--color-primary)] transition-colors flex items-center gap-1">
                ABOUT US <ChevronDown size={16} />
              </button>
              {aboutDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white dark:bg-slate-900 rounded-lg shadow-xl border border-slate-200 dark:border-slate-800 py-2">
                  <Link href="/about" className="block px-4 py-2 text-sm font-semibold hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-[var(--color-primary)] transition-colors">
                    About Himmatkaar
                  </Link>
                  <Link href="/team" className="block px-4 py-2 text-sm font-semibold hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-[var(--color-primary)] transition-colors">
                    Our Team
                  </Link>
                </div>
              )}
            </div>

            {/* Programme Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setProgramDropdownOpen(true)}
              onMouseLeave={() => setProgramDropdownOpen(false)}
            >
              <button className="text-sm font-bold hover:text-[var(--color-primary)] transition-colors flex items-center gap-1">
                PROGRAMME <ChevronDown size={16} />
              </button>
              {programDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white dark:bg-slate-900 rounded-lg shadow-xl border border-slate-200 dark:border-slate-800 py-2">
                  <Link href="/launchpad" className="block px-4 py-2 text-sm font-semibold hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-[var(--color-primary)] transition-colors">
                    Launchpad
                  </Link>
                  <Link href="/fellowship" className="block px-4 py-2 text-sm font-semibold hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-[var(--color-primary)] transition-colors">
                    Fellowship
                  </Link>
                  <Link href="/impact" className="block px-4 py-2 text-sm font-semibold hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-[var(--color-primary)] transition-colors">
                    Impact
                  </Link>
                </div>
              )}
            </div>

            <Link href="/testimonials" className="text-sm font-bold hover:text-[var(--color-primary)] transition-colors">
              HAPPENINGS
            </Link>
            <Link href="/contact" className="text-sm font-bold hover:text-[var(--color-primary)] transition-colors">
              CONTACT US
            </Link>
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <Link href="/login" className="text-sm font-bold px-5 py-2.5 rounded-lg hover:bg-[var(--color-primary)]/5 transition-colors">
              Login
            </Link>
            <Link href="/register" className="bg-[var(--color-primary)] text-white text-sm font-bold px-6 py-2.5 rounded-lg shadow-lg shadow-[#39894c]/20 hover:brightness-110 transition-all">
              Apply Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-slate-900 dark:text-white flex items-center"
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
            className="fixed top-20 left-0 right-0 z-40 lg:hidden bg-white/95 dark:bg-[#151d17]/95 backdrop-blur-xl border-b border-[var(--color-primary)]/10 overflow-hidden shadow-2xl"
          >
            <div className="flex flex-col gap-2 py-6 px-6 max-h-[calc(100vh-5rem)] overflow-y-auto">
              <Link href="/" className="text-base font-bold hover:text-[var(--color-primary)] transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>
                HOME
              </Link>
              <div className="border-t border-slate-200 dark:border-slate-800 my-2"></div>
              <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">About Us</p>
              <Link href="/about" className="text-base font-semibold hover:text-[var(--color-primary)] transition-colors py-2 pl-4" onClick={() => setMobileMenuOpen(false)}>
                About Himmatkaar
              </Link>
              <Link href="/team" className="text-base font-semibold hover:text-[var(--color-primary)] transition-colors py-2 pl-4" onClick={() => setMobileMenuOpen(false)}>
                Our Team
              </Link>
              <div className="border-t border-slate-200 dark:border-slate-800 my-2"></div>
              <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Programme</p>
              <Link href="/launchpad" className="text-base font-semibold hover:text-[var(--color-primary)] transition-colors py-2 pl-4" onClick={() => setMobileMenuOpen(false)}>
                Launchpad
              </Link>
              <Link href="/fellowship" className="text-base font-semibold hover:text-[var(--color-primary)] transition-colors py-2 pl-4" onClick={() => setMobileMenuOpen(false)}>
                Fellowship
              </Link>
              <Link href="/impact" className="text-base font-semibold hover:text-[var(--color-primary)] transition-colors py-2 pl-4" onClick={() => setMobileMenuOpen(false)}>
                Impact
              </Link>
              <div className="border-t border-slate-200 dark:border-slate-800 my-2"></div>
              <Link href="/testimonials" className="text-base font-bold hover:text-[var(--color-primary)] transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>
                HAPPENINGS
              </Link>
              <Link href="/contact" className="text-base font-bold hover:text-[var(--color-primary)] transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>
                CONTACT US
              </Link>
              <div className="border-t border-slate-200 dark:border-slate-800 my-2"></div>
              <Link href="/login" className="text-base font-bold text-center py-3 rounded-lg hover:bg-[var(--color-primary)]/5 transition-colors" onClick={() => setMobileMenuOpen(false)}>
                Login
              </Link>
              <Link href="/register" className="bg-[var(--color-primary)] text-white text-base font-bold py-3 rounded-lg hover:brightness-110 shadow-lg text-center transition-all" onClick={() => setMobileMenuOpen(false)}>
                Apply Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
