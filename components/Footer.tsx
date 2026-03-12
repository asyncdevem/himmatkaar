import Image from "next/image";
import Link from "next/link";
import { Rocket, Facebook, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[var(--color-primary)]/5 border-t border-[var(--color-primary)]/10 py-20 dark:bg-black/20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <Image 
              src="/himmatkaar-logo.jpg" 
              alt="HimmatKaar Logo" 
              width={32} 
              height={32} 
              className="rounded-lg"
            />
            <h1 className="text-lg font-bold tracking-tight text-slate-900 dark:text-white">HimmatKaar</h1>
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            Building a global ecosystem where every young person has the courage and the capability to lead meaningful change.
          </p>
          <div className="flex gap-4">
            <a 
              href="https://www.instagram.com/himmatkaar" 
              target="_blank" 
              rel="noopener noreferrer"
              className="size-8 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center cursor-pointer hover:bg-[var(--color-primary)] hover:text-white transition-all text-slate-600 dark:text-slate-300"
              aria-label="Instagram"
            >
              <Instagram size={16} />
            </a>
            <a 
              href="https://www.linkedin.com/company/himmatkaar/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="size-8 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center cursor-pointer hover:bg-[var(--color-primary)] hover:text-white transition-all text-slate-600 dark:text-slate-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={16} />
            </a>
            <a 
              href="https://www.facebook.com/himmatkaar" 
              target="_blank" 
              rel="noopener noreferrer"
              className="size-8 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center cursor-pointer hover:bg-[var(--color-primary)] hover:text-white transition-all text-slate-600 dark:text-slate-300"
              aria-label="Facebook"
            >
              <Facebook size={16} />
            </a>
          </div>
        </div>

        <div>
          <h6 className="font-bold text-slate-900 dark:text-white mb-6 uppercase text-xs tracking-widest">Platform</h6>
          <ul className="space-y-4 text-sm text-slate-600 dark:text-slate-400">
            <li><Link className="hover:text-[var(--color-primary)] transition-colors" href="/about">Our Mission</Link></li>
            <li><Link className="hover:text-[var(--color-primary)] transition-colors" href="/impact">Project Gallery</Link></li>
            <li><Link className="hover:text-[var(--color-primary)] transition-colors" href="/fellowship">Training Portal</Link></li>
            <li><Link className="hover:text-[var(--color-primary)] transition-colors" href="/impact">Impact Reports</Link></li>
          </ul>
        </div>

        <div>
          <h6 className="font-bold text-slate-900 dark:text-white mb-6 uppercase text-xs tracking-widest">Resources</h6>
          <ul className="space-y-4 text-sm text-slate-600 dark:text-slate-400">
            <li><Link className="hover:text-[var(--color-primary)] transition-colors" href="/contact">Help Center</Link></li>
            <li><Link className="hover:text-[var(--color-primary)] transition-colors" href="/contact">Safety Guidelines</Link></li>
            <li><Link className="hover:text-[var(--color-primary)] transition-colors" href="/contact">Partner with Us</Link></li>
            <li><Link className="hover:text-[var(--color-primary)] transition-colors" href="/fellowship">Careers</Link></li>
          </ul>
        </div>

        <div className="space-y-6">
          <h6 className="font-bold text-slate-900 dark:text-white uppercase text-xs tracking-widest">Stay Updated</h6>
          <p className="text-sm text-slate-600 dark:text-slate-400">Get the latest impact stories and opportunities delivered to your inbox.</p>
          <form className="flex gap-2">
            <input 
              className="flex-1 bg-white dark:bg-slate-800 dark:text-white border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/20" 
              placeholder="Your email" 
              type="email" 
            />
            <button type="button" className="bg-[var(--color-primary)] text-white p-2 px-4 rounded-lg hover:brightness-110 transition-all font-semibold">
              Send
            </button>
          </form>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500 dark:text-slate-400 uppercase tracking-widest font-bold">
        <p>© 2026 HIMMATKAAR</p>
        <div className="flex gap-8">
          <Link className="hover:text-[var(--color-primary)]" href="#">Privacy</Link>
          <Link className="hover:text-[var(--color-primary)]" href="#">Terms</Link>
          <Link className="hover:text-[var(--color-primary)]" href="#">Cookie Policy</Link>
        </div>
      </div>
    </footer>
  );
}
