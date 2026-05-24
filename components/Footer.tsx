import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[var(--color-deep-navy)] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Column 1: Logo and Social Media */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <Image 
              src="/himmatkaar-logo.jpg" 
              alt="HimmatKaar Logo" 
              width={32} 
              height={32} 
              className="rounded-lg"
            />
            <h1 className="text-lg font-bold tracking-tight text-white">HimmatKaar</h1>
          </div>
          <p className="text-sm text-white/80 leading-relaxed">
            Building a global ecosystem where every young person has the courage and the capability to lead meaningful change.
          </p>
          <div className="flex gap-4">
            <a 
              href="https://www.instagram.com/himmatkaar" 
              target="_blank" 
              rel="noopener noreferrer"
              className="size-8 rounded-full bg-white/10 flex items-center justify-center cursor-pointer hover:bg-[var(--color-courage-green)] transition-all text-white"
              aria-label="Instagram"
            >
              <Instagram size={16} />
            </a>
            <a 
              href="https://www.linkedin.com/company/himmatkaar/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="size-8 rounded-full bg-white/10 flex items-center justify-center cursor-pointer hover:bg-[var(--color-courage-green)] transition-all text-white"
              aria-label="LinkedIn"
            >
              <Linkedin size={16} />
            </a>
            <a 
              href="https://www.facebook.com/himmatkaar" 
              target="_blank" 
              rel="noopener noreferrer"
              className="size-8 rounded-full bg-white/10 flex items-center justify-center cursor-pointer hover:bg-[var(--color-courage-green)] transition-all text-white"
              aria-label="Facebook"
            >
              <Facebook size={16} />
            </a>
          </div>
        </div>

        {/* Column 2: Platform */}
        <div>
          <h6 className="font-bold text-[var(--color-courage-gold)] mb-6 uppercase text-xs tracking-widest">Platform</h6>
          <ul className="space-y-4 text-sm text-white">
            <li><Link className="hover:text-[var(--color-courage-gold)] transition-colors" href="/about">Our Mission</Link></li>
            <li><Link className="hover:text-[var(--color-courage-gold)] transition-colors" href="/core-team">Core Team</Link></li>
            <li><Link className="hover:text-[var(--color-courage-gold)] transition-colors" href="/launchpad">Launchpad</Link></li>
            <li><Link className="hover:text-[var(--color-courage-gold)] transition-colors" href="/impact">Impact Reports</Link></li>
          </ul>
        </div>

        {/* Column 3: Resources */}
        <div>
          <h6 className="font-bold text-[var(--color-courage-gold)] mb-6 uppercase text-xs tracking-widest">Resources</h6>
          <ul className="space-y-4 text-sm text-white">
            <li><Link className="hover:text-[var(--color-courage-gold)] transition-colors" href="/technical-workshops">Technical Workshops</Link></li>
            <li><Link className="hover:text-[var(--color-courage-gold)] transition-colors" href="/networking-events">Networking Events</Link></li>
            <li><Link className="hover:text-[var(--color-courage-gold)] transition-colors" href="/events/upcoming">Upcoming Events</Link></li>
            <li><Link className="hover:text-[var(--color-courage-gold)] transition-colors" href="/contact">Partner with Us</Link></li>
          </ul>
        </div>

        {/* Column 4: Stay Updated */}
        <div className="space-y-6">
          <h6 className="font-bold text-[var(--color-courage-gold)] uppercase text-xs tracking-widest">Stay Updated</h6>
          <p className="text-sm text-white/80">Get the latest impact stories and opportunities delivered to your inbox.</p>
          <form className="flex flex-col sm:flex-row gap-2" aria-label="Newsletter subscription">
            <label htmlFor="footer-email" className="sr-only">Email address</label>
            <input 
              id="footer-email"
              className="flex-1 bg-white/10 text-white border border-white/20 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-courage-green)]/50 placeholder:text-white/50" 
              placeholder="Your email" 
              type="email"
              aria-label="Email address for newsletter"
            />
            <button type="button" className="bg-[var(--color-courage-green)] text-white p-2 px-4 rounded-lg hover:brightness-110 transition-all font-semibold w-full sm:w-auto" aria-label="Subscribe to newsletter">
              Send
            </button>
          </form>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/60 uppercase tracking-widest font-bold">
        <p>© 2026 HIMMATKAAR</p>
        <div className="flex flex-wrap justify-center gap-4 sm:gap-8">
          <Link className="hover:text-[var(--color-courage-gold)] transition-colors" href="/privacy">Privacy</Link>
          <Link className="hover:text-[var(--color-courage-gold)] transition-colors" href="/terms">Terms</Link>
          <Link className="hover:text-[var(--color-courage-gold)] transition-colors" href="/cookie-policy">Cookie Policy</Link>
        </div>
      </div>
    </footer>
  );
}
