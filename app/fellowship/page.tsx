"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Fellowship() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0f0b]">
      <Navbar />
      <main className="pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-6">
          <Link href="/" className="inline-flex items-center gap-2 text-[#39894c] hover:underline mb-8">
            <ArrowLeft size={20} /> Back to Home
          </Link>
          <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-slate-900 dark:text-white">Fellowship Program</h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
            Our Fellowship Program is designed to nurture emerging leaders through intensive mentorship, skill development, and community engagement. Join a cohort of passionate individuals committed to making a difference with Himmatkaar.
          </p>
          <div className="bg-slate-50 dark:bg-slate-900 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">Program Benefits</h2>
            <ul className="space-y-3 text-slate-600 dark:text-slate-400">
              <li>• 6-month intensive leadership training</li>
              <li>• One-on-one mentorship from industry experts</li>
              <li>• Access to exclusive workshops and events</li>
              <li>• Networking opportunities with alumni and partners</li>
              <li>• Certificate of completion</li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
