"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white/98 backdrop-blur-md z-50 border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/himmatkaar-logo.jpg"
            alt="HimmatKaar Logo"
            width={50}
            height={50}
            className="rounded-lg shadow-md"
          />
          <span className="text-2xl font-bold text-gray-900">HimmatKaar</span>
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-gray-900 hover:text-[#3a8a4d] transition-colors font-medium">
            Home
          </Link>
          <Link href="/about" className="text-gray-900 hover:text-[#3a8a4d] transition-colors font-medium">
            About
          </Link>
          <Link href="/fellowship" className="text-gray-900 hover:text-[#3a8a4d] transition-colors font-medium">
            Fellowship
          </Link>
          <Link href="/impact" className="text-gray-900 hover:text-[#3a8a4d] transition-colors font-medium">
            Impact
          </Link>
          <Link href="/testimonials" className="text-gray-900 hover:text-[#3a8a4d] transition-colors font-medium">
            Testimonials
          </Link>
          <Link href="/contact" className="bg-[#3a8a4d] text-white px-6 py-2.5 rounded-lg hover:bg-[#17431f] transition-all hover:shadow-lg font-semibold">
            Apply Now
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-900"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-200 overflow-hidden"
          >
            <div className="flex flex-col gap-4 py-4 px-6">
              <Link href="/" className="text-gray-900 hover:text-[#3a8a4d] transition-colors font-medium" onClick={() => setMobileMenuOpen(false)}>
                Home
              </Link>
              <Link href="/about" className="text-gray-900 hover:text-[#3a8a4d] transition-colors font-medium" onClick={() => setMobileMenuOpen(false)}>
                About
              </Link>
              <Link href="/fellowship" className="text-gray-900 hover:text-[#3a8a4d] transition-colors font-medium" onClick={() => setMobileMenuOpen(false)}>
                Fellowship
              </Link>
              <Link href="/impact" className="text-gray-900 hover:text-[#3a8a4d] transition-colors font-medium" onClick={() => setMobileMenuOpen(false)}>
                Impact
              </Link>
              <Link href="/testimonials" className="text-gray-900 hover:text-[#3a8a4d] transition-colors font-medium" onClick={() => setMobileMenuOpen(false)}>
                Testimonials
              </Link>
              <Link href="/contact" className="bg-[#3a8a4d] text-white px-6 py-2.5 rounded-lg hover:bg-[#17431f] transition-all text-center font-semibold" onClick={() => setMobileMenuOpen(false)}>
                Apply Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
