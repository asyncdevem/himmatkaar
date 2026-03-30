"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Handshake, Users, Globe } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function NetworkingEventsPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0f0b]">
      <Navbar />

      <main className="pt-32 pb-24">
        <section className="max-w-6xl mx-auto px-6 mb-16">
          <Link href="/" className="inline-flex items-center gap-2 text-[#39894c] hover:underline mb-8 font-semibold">
            <ArrowLeft size={20} /> Back to Home
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block text-[#39894c] font-bold text-sm uppercase tracking-wider mb-4">Initiative</span>
            <h1 className="text-4xl lg:text-6xl font-extrabold mb-6 text-slate-900 dark:text-white">
              Networking <span className="text-[#39894c]">Events</span>
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              Build meaningful relationships with mentors, peers, and professionals through curated networking opportunities.
            </p>
          </motion.div>
        </section>

        <section className="max-w-6xl mx-auto px-6 mb-16">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: <Handshake size={28} />, title: "Mentor Access", desc: "Connect directly with experienced mentors and advisors." },
              { icon: <Users size={28} />, title: "Peer Community", desc: "Collaborate with ambitious youth from diverse backgrounds." },
              { icon: <Globe size={28} />, title: "Growth Opportunities", desc: "Unlock partnerships, internships, and new opportunities." },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6"
              >
                <div className="text-[#39894c] mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{item.title}</h3>
                <p className="text-slate-600 dark:text-slate-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#2d5f3d] rounded-3xl p-10 text-center text-white shadow-2xl"
          >
            <h2 className="text-3xl font-bold mb-4">Join the Next Networking Event</h2>
            <p className="text-white/90 mb-7">Check upcoming sessions and connect with the Himmatkaar community.</p>
            <Link href="/events/upcoming" className="inline-flex items-center gap-2 bg-white text-[#2d5f3d] px-8 py-4 rounded-lg font-bold hover:scale-105 transition-transform">
              View Upcoming Events <ArrowRight size={18} />
            </Link>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
