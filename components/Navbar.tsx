"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [programDropdownOpen, setProgramDropdownOpen] = useState(false);
  const [happeningsDropdownOpen, setHappeningsDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-white/95 border-b border-slate-200 text-slate-900 transition-all duration-300 ${scrolled ? 'shadow-md' : ''}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
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
            <Link href="/" className="text-sm font-bold hover:text-[var(--color-courage-green)] transition-colors border-b-2 border-[var(--color-courage-green)] pb-1">
              HOME
            </Link>
            
            {/* About Us Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setAboutDropdownOpen(true)}
              onMouseLeave={() => setAboutDropdownOpen(false)}
            >
              <button 
                className="text-sm font-bold hover:text-[var(--color-courage-green)] transition-colors flex items-center gap-1"
                aria-label="About Us menu"
                aria-expanded={aboutDropdownOpen}
                aria-haspopup="true"
              >
                ABOUT US <ChevronDown size={16} />
              </button>
              {aboutDropdownOpen && (
                <div 
                  className="absolute top-full left-0 mt-0 pt-2 w-48 z-50"
                  onMouseEnter={() => setAboutDropdownOpen(true)}
                  onMouseLeave={() => setAboutDropdownOpen(false)}
                >
                  <div className="bg-white rounded-lg shadow-xl border border-slate-200 py-2">
                    <Link href="/about" className="block px-4 py-2 text-sm font-semibold hover:bg-slate-50 hover:text-[var(--color-courage-green)] transition-colors">
                      About Himmatkaar
                    </Link>
                    <Link href="/team" className="block px-4 py-2 text-sm font-semibold hover:bg-slate-50 hover:text-[var(--color-courage-green)] transition-colors">
                      Our Team
                    </Link>
                    <Link href="/ambassadors" className="block px-4 py-2 text-sm font-semibold hover:bg-slate-50 hover:text-[var(--color-courage-green)] transition-colors">
                      Ambassadors
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Programme Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setProgramDropdownOpen(true)}
              onMouseLeave={() => setProgramDropdownOpen(false)}
            >
              <button 
                className="text-sm font-bold hover:text-[var(--color-courage-green)] transition-colors flex items-center gap-1"
                aria-label="Programme menu"
                aria-expanded={programDropdownOpen}
                aria-haspopup="true"
              >
                PROGRAMME <ChevronDown size={16} />
              </button>
              {programDropdownOpen && (
                <div 
                  className="absolute top-full left-0 mt-0 pt-2 w-48 z-50"
                  onMouseEnter={() => setProgramDropdownOpen(true)}
                  onMouseLeave={() => setProgramDropdownOpen(false)}
                >
                  <div className="bg-white rounded-lg shadow-xl border border-slate-200 py-2">
                    <Link href="/launchpad" className="block px-4 py-2 text-sm font-semibold hover:bg-slate-50 hover:text-[var(--color-courage-green)] transition-colors">
                      Launchpad
                    </Link>
                    <Link href="/technical-workshops" className="block px-4 py-2 text-sm font-semibold hover:bg-slate-50 hover:text-[var(--color-courage-green)] transition-colors">
                      Technical Workshops
                    </Link>
                    <Link href="/networking-events" className="block px-4 py-2 text-sm font-semibold hover:bg-slate-50 hover:text-[var(--color-courage-green)] transition-colors">
                      Networking Events
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Happenings Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setHappeningsDropdownOpen(true)}
              onMouseLeave={() => setHappeningsDropdownOpen(false)}
            >
              <button 
                className="text-sm font-bold hover:text-[var(--color-courage-green)] transition-colors flex items-center gap-1"
                aria-label="Happenings menu"
                aria-expanded={happeningsDropdownOpen}
                aria-haspopup="true"
              >
                HAPPENINGS <ChevronDown size={16} />
              </button>
              {happeningsDropdownOpen && (
                <div 
                  className="absolute top-full left-0 mt-0 pt-2 w-56 z-50"
                  onMouseEnter={() => setHappeningsDropdownOpen(true)}
                  onMouseLeave={() => setHappeningsDropdownOpen(false)}
                >
                  <div className="bg-white rounded-lg shadow-xl border border-slate-200 py-2">
                    <Link href="/events/upcoming" className="block px-4 py-2 text-sm font-semibold hover:bg-slate-50 hover:text-[var(--color-courage-green)] transition-colors">
                      Upcoming Events
                    </Link>
                    <Link href="/events" className="block px-4 py-2 text-sm font-semibold hover:bg-slate-50 hover:text-[var(--color-courage-green)] transition-colors">
                      Events
                    </Link>
                    <Link href="/blog" className="block px-4 py-2 text-sm font-semibold hover:bg-slate-50 hover:text-[var(--color-courage-green)] transition-colors">
                      Blog
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link href="/contact" className="text-sm font-bold hover:text-[var(--color-courage-green)] transition-colors">
              CONTACT US
            </Link>
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <Link href="/login" className="text-sm font-bold px-5 py-2.5 rounded-lg hover:bg-[var(--color-courage-green)]/5 transition-colors">
              Login
            </Link>
            <Link href="/signup" className="bg-[var(--color-courage-green)] text-white text-sm font-bold px-4 sm:px-6 py-2.5 rounded-lg shadow-lg shadow-[var(--color-courage-green)]/20 hover:brightness-110 transition-all">
              Apply Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-slate-900 flex items-center"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.nav
            id="mobile-menu"
            role="navigation"
            aria-label="Mobile navigation"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed top-20 left-0 right-0 z-40 lg:hidden bg-white/95 backdrop-blur-xl border-b border-slate-200 overflow-hidden shadow-2xl"
          >
            <div className="flex flex-col gap-2 py-6 px-4 sm:px-6 max-h-[calc(100vh-5rem)] overflow-y-auto">
              <Link href="/" className="text-base font-bold hover:text-[var(--color-courage-green)] transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>
                HOME
              </Link>
              <div className="border-t border-slate-200 my-2"></div>
              <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">About Us</p>
              <Link href="/about" className="text-base font-semibold hover:text-[var(--color-courage-green)] transition-colors py-2 pl-4" onClick={() => setMobileMenuOpen(false)}>
                About Himmatkaar
              </Link>
              <Link href="/team" className="text-base font-semibold hover:text-[var(--color-courage-green)] transition-colors py-2 pl-4" onClick={() => setMobileMenuOpen(false)}>
                Our Team
              </Link>
              <Link href="/ambassadors" className="text-base font-semibold hover:text-[var(--color-courage-green)] transition-colors py-2 pl-4" onClick={() => setMobileMenuOpen(false)}>
                Ambassadors
              </Link>
              <div className="border-t border-slate-200 my-2"></div>
              <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Programme</p>
              <Link href="/launchpad" className="text-base font-semibold hover:text-[var(--color-courage-green)] transition-colors py-2 pl-4" onClick={() => setMobileMenuOpen(false)}>
                Launchpad
              </Link>
              <Link href="/technical-workshops" className="text-base font-semibold hover:text-[var(--color-courage-green)] transition-colors py-2 pl-4" onClick={() => setMobileMenuOpen(false)}>
                Technical Workshops
              </Link>
              <Link href="/networking-events" className="text-base font-semibold hover:text-[var(--color-courage-green)] transition-colors py-2 pl-4" onClick={() => setMobileMenuOpen(false)}>
                Networking Events
              </Link>
              <div className="border-t border-slate-200 my-2"></div>
              <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Happenings</p>
              <Link href="/events/upcoming" className="text-base font-semibold hover:text-[var(--color-courage-green)] transition-colors py-2 pl-4" onClick={() => setMobileMenuOpen(false)}>
                Upcoming Events
              </Link>
              <Link href="/events" className="text-base font-semibold hover:text-[var(--color-courage-green)] transition-colors py-2 pl-4" onClick={() => setMobileMenuOpen(false)}>
                Events
              </Link>
              <Link href="/blog" className="text-base font-semibold hover:text-[var(--color-courage-green)] transition-colors py-2 pl-4" onClick={() => setMobileMenuOpen(false)}>
                Blog
              </Link>
              <div className="border-t border-slate-200 my-2"></div>
              <Link href="/contact" className="text-base font-bold hover:text-[var(--color-courage-green)] transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>
                CONTACT US
              </Link>
              <div className="border-t border-slate-200 my-2"></div>
              <Link href="/login" className="text-base font-bold text-center py-3 rounded-lg hover:bg-[var(--color-courage-green)]/5 transition-colors" onClick={() => setMobileMenuOpen(false)}>
                Login
              </Link>
              <Link href="/signup" className="bg-[var(--color-courage-green)] text-white text-base font-bold py-3 rounded-lg hover:brightness-110 shadow-lg text-center transition-all" onClick={() => setMobileMenuOpen(false)}>
                Apply Now
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}

