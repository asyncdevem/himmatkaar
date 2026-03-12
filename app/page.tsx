"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  ArrowRight,
  Search,
  BookOpen,
  Zap,
  Quote
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TestimonialCarousel from "@/components/TestimonialCarousel";

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 antialiased">
      <Navbar />

      <main className="pt-20">
        {/* Split Hero Section */}
        <section className="relative max-w-7xl mx-auto px-6 py-16 lg:py-24 flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="flex-1 space-y-8"
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-xs font-bold uppercase tracking-wider">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-primary)] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--color-primary)]"></span>
              </span>
              Join the 10k+ Movement
            </motion.div>
            <motion.h2 variants={fadeInUp} className="text-5xl lg:text-7xl font-black text-slate-900 dark:text-white leading-[1.1]">
              Empowering <span className="text-[var(--color-primary)] italic">Youth</span> to Lead Change
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lg text-slate-600 dark:text-slate-400 max-w-lg leading-relaxed">
              A premium ecosystem for the next generation of leaders. We provide the tools, mentorship, and community needed to turn bold ideas into real-world impact.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 pt-4">
              <Link href="/register">
                <button className="bg-[var(--color-primary)] text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl shadow-[var(--color-primary)]/25 flex items-center gap-2 hover:brightness-110 transition-all">
                  Get Started <ArrowRight size={20} />
                </button>
              </Link>
              <Link href="/impact">
                <button className="bg-white dark:bg-slate-800 dark:text-white dark:border-slate-700 border border-slate-200 px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
                  View Projects
                </button>
              </Link>
            </motion.div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 w-full"
          >
            <div className="relative w-full aspect-square lg:aspect-[4/5] bg-[var(--color-primary)]/5 rounded-3xl overflow-hidden" style={{ clipPath: "polygon(10% 0%, 100% 0%, 90% 100%, 0% 100%)" }}>
              <div 
                className="absolute inset-0 bg-cover bg-center grayscale hover:grayscale-0 transition-all duration-700" 
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80')" }}
              >
              </div>
              <div className="absolute bottom-10 left-10 right-10 p-6 backdrop-blur-md bg-white/80 dark:bg-slate-900/80 rounded-2xl border border-white/20">
                <p className="text-slate-900 dark:text-white font-bold">Latest Impact: Karachi Clean Water Initiative</p>
                <p className="text-sm text-slate-600 dark:text-slate-400">Reached over 2,500 families this month.</p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Floating Trust Bar */}
        <section className="max-w-6xl mx-auto px-6 -mt-12 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl border border-[var(--color-primary)]/5 p-8 lg:p-12 flex flex-wrap justify-around items-center gap-8"
          >
            <div className="text-center">
              <p className="text-4xl font-black text-[var(--color-primary)] mb-1">10k+</p>
              <p className="text-slate-500 font-medium uppercase text-xs tracking-widest">Members</p>
            </div>
            <div className="h-12 w-px bg-slate-100 dark:bg-slate-700 hidden md:block"></div>
            <div className="text-center">
              <p className="text-4xl font-black text-[var(--color-primary)] mb-1">500+</p>
              <p className="text-slate-500 font-medium uppercase text-xs tracking-widest">Projects</p>
            </div>
            <div className="h-12 w-px bg-slate-100 dark:bg-slate-700 hidden md:block"></div>
            <div className="text-center">
              <p className="text-4xl font-black text-[var(--color-primary)] mb-1">50+</p>
              <p className="text-slate-500 font-medium uppercase text-xs tracking-widest">Cities</p>
            </div>
            <div className="h-12 w-px bg-slate-100 dark:bg-slate-700 hidden md:block"></div>
            <div className="text-center">
              <p className="text-4xl font-black text-[var(--color-primary)] mb-1">$2M+</p>
              <p className="text-slate-500 font-medium uppercase text-xs tracking-widest">Funds Raised</p>
            </div>
          </motion.div>
        </section>

        {/* Mission / Step-by-Step */}
        <section className="max-w-7xl mx-auto px-6 py-24">
          <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="flex flex-col items-center text-center mb-20"
          >
            <motion.h3 variants={fadeInUp} className="text-[var(--color-primary)] font-bold uppercase tracking-widest text-sm mb-4">Our Mission</motion.h3>
            <motion.h2 variants={fadeInUp} className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white max-w-2xl">
              Three steps to making a lasting impact in your city
            </motion.h2>
          </motion.div>
          <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid lg:grid-cols-3 gap-12"
          >
            {[
              { num: "01", icon: <Search size={32} />, title: "Discover Potential", desc: "We help you identify systemic issues and local opportunities where your unique skills can thrive." },
              { num: "02", icon: <BookOpen size={32} />, title: "Build Skills", desc: "Access world-class workshops on leadership, project management, and sustainable development." },
              { num: "03", icon: <Zap size={32} />, title: "Lead Impact", desc: "Execute your vision with our funding and mentorship network. Scale your project to new heights." }
            ].map((step, idx) => (
              <motion.div 
                key={idx}
                variants={fadeInUp}
                className="relative group p-8 rounded-3xl hover:bg-white dark:hover:bg-slate-800 transition-all hover:shadow-xl border border-transparent hover:border-[var(--color-primary)]/10"
              >
                <span className="text-7xl font-black text-[var(--color-primary)]/10 absolute top-4 right-8 group-hover:text-[var(--color-primary)]/20 transition-colors">{step.num}</span>
                <div className="size-16 bg-[var(--color-primary)]/10 rounded-2xl flex items-center justify-center text-[var(--color-primary)] mb-8">
                  {step.icon}
                </div>
                <h4 className="text-2xl font-bold mb-4 dark:text-white">{step.title}</h4>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Team Section */}
        <section className="bg-white/50 dark:bg-slate-900/50 py-24 border-y border-[var(--color-primary)]/5">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex justify-between items-end mb-16">
              <div>
                <h3 className="text-[var(--color-primary)] font-bold uppercase tracking-widest text-sm mb-4">The Team</h3>
                <h2 className="text-4xl font-bold dark:text-white">Led by Visionaries</h2>
              </div>
              <button className="text-[var(--color-primary)] font-bold flex items-center gap-2 hover:gap-3 transition-all">
                Meet Everyone <ArrowRight size={20} />
              </button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { name: "Sarah Chen", role: "Co-Founder & CEO", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80" },
                { name: "Marcus Thorne", role: "Head of Operations", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80" },
                { name: "Elena Rodriguez", role: "Community Lead", img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80" },
                { name: "David Kim", role: "Strategy Director", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80" }
              ].map((member, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="text-center group"
                >
                  <div className="size-40 mx-auto rounded-full p-1 border-2 border-transparent group-hover:border-[var(--color-primary)] transition-all mb-6">
                    <img alt={member.name} className="w-full h-full object-cover rounded-full" src={member.img} />
                  </div>
                  <h5 className="font-bold text-lg dark:text-white">{member.name}</h5>
                  <p className="text-slate-500 text-sm">{member.role}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="py-24 bg-[var(--color-primary)]/5 dark:bg-[var(--color-primary)]/10">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <div className="flex justify-center mb-8 text-[var(--color-primary)] opacity-30">
              <Quote size={64} />
            </div>
            <p className="text-3xl lg:text-4xl font-medium text-slate-800 dark:text-slate-200 leading-snug italic mb-10">
              "HimmatKaar didn't just give me a platform; they gave me a purpose. I went from having a small idea about urban farming to leading a city-wide initiative with over 200 volunteers."
            </p>
            <div className="flex flex-col items-center">
              <p className="font-bold text-xl text-slate-900 dark:text-white">Aisha Rahmani</p>
              <p className="text-slate-500">Youth Lead, Green City Project</p>
            </div>
            {/* Keeping the previously existing Testimonial Carousel in as well */}
            <div className="mt-16">
              <TestimonialCarousel />
            </div>
          </div>
        </section>

        {/* Horizontal Scrolling Gallery */}
        <section className="py-24 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 mb-12">
            <h3 className="text-[var(--color-primary)] font-bold uppercase tracking-widest text-sm mb-4">Global Network</h3>
            <h2 className="text-4xl font-bold dark:text-white">Collaborations in Action</h2>
          </div>
          <div className="flex gap-6 px-6 overflow-x-auto pb-8 snap-x scrollbar-hide">
            {[
              "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800",
              "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800",
              "https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?auto=format&fit=crop&q=80&w=800",
              "https://images.unsplash.com/photo-1531497865144-0464ef8fb9a9?auto=format&fit=crop&q=80&w=800"
            ].map((img, idx) => (
              <div key={idx} className="min-w-[300px] md:min-w-[400px] aspect-[4/3] bg-[var(--color-primary)]/10 rounded-3xl overflow-hidden flex-shrink-0 snap-center">
                <img className="w-full h-full object-cover" src={img} alt="Collaboration" loading="lazy" />
              </div>
            ))}
          </div>
        </section>

        {/* Partners Row */}
        <section className="max-w-7xl mx-auto px-6 py-12 border-t border-slate-100 dark:border-slate-800">
          <div className="flex flex-wrap items-center justify-between gap-8 opacity-40 grayscale contrast-125 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
            <div className="text-2xl font-black tracking-tighter dark:text-white">UNICEF</div>
            <div className="text-2xl font-black tracking-tighter dark:text-white">RED CROSS</div>
            <div className="text-2xl font-black tracking-tighter dark:text-white">TECH CORPS</div>
            <div className="text-2xl font-black tracking-tighter dark:text-white">GLOBAL IMPACT</div>
            <div className="text-2xl font-black tracking-tighter dark:text-white">EDUCARE</div>
            <div className="text-2xl font-black tracking-tighter dark:text-white">FUTURE GEN</div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
