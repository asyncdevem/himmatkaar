"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Target, Eye, Heart, Users, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col relative overflow-hidden font-jakarta">
      {/* Background Blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-emerald-300/20 rounded-full blur-3xl" />
      </div>

      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 lg:px-12 relative z-10 flex-grow flex items-center justify-center">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial="initial"
            animate="animate"
            variants={{
              animate: { transition: { staggerChildren: 0.1 } }
            }}
          >
            <motion.div variants={fadeInUp} className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6 border border-primary/20">
              Our Story & Mission
            </motion.div>
            <motion.h1 
              variants={fadeInUp} 
              className="text-5xl md:text-7xl font-extrabold text-gray-900 mb-8 tracking-tight"
            >
              Driving Change with <span className="text-primary relative inline-block">HimmatKaar
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-primary/30" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="none"/></svg>
              </span>
            </motion.h1>
            <motion.p 
              variants={fadeInUp} 
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-10"
            >
              We believe every young person deserves the opportunity to reach their full potential. By bridging the gap between talent and opportunity, we empower tomorrow&apos;s leaders, today.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision - Glassmorphic Cards */}
      <section className="py-20 px-6 lg:px-12 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white/70 backdrop-blur-xl border border-white/40 shadow-[0_8px_32px_rgba(0,0,0,0.05)] rounded-3xl p-10 hover:shadow-[0_12px_48px_rgba(58,138,77,0.1)] transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <Target className="text-primary w-8 h-8" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4 tracking-tight">Our Mission</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                To empower underserved youth with the skills, mindset, and confidence needed to succeed in their careers and become transformative leaders in their communities. We provide the tools; they bring the drive.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white/70 backdrop-blur-xl border border-white/40 shadow-[0_8px_32px_rgba(0,0,0,0.05)] rounded-3xl p-10 hover:shadow-[0_12px_48px_rgba(58,138,77,0.1)] transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 flex items-center justify-center mb-6">
                <Eye className="text-emerald-500 w-8 h-8" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4 tracking-tight">Our Vision</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                A world where every young person has access to quality education, mentorship, and opportunities, enabling them to build meaningful careers, secure their futures, and actively contribute to society&apos;s growth.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 px-6 lg:px-12 bg-white relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 tracking-tight">Our Core Values</h2>
            <p className="text-lg text-gray-600">The principles that guide our work and shape our culture.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <Heart className="w-8 h-8" />, title: "Empathy & Compassion", desc: "We understand the unique challenges faced by underserved youth and approach every interaction with genuine compassion.", color: "text-rose-500", bg: "bg-rose-50" },
              { icon: <Users className="w-8 h-8" />, title: "Community Driven", desc: "We build strong, supportive networks where fellows, mentors, and partners can learn from each other and grow together.", color: "text-blue-500", bg: "bg-blue-50" },
              { icon: <Target className="w-8 h-8" />, title: "Excellence in Action", desc: "We are deeply committed to delivering high-quality, impactful programs that create real, measurable, and sustainable change.", color: "text-primary", bg: "bg-primary/10" }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 rounded-3xl p-8 border border-gray-100 hover:border-gray-200 transition-colors group"
              >
                <div className={`w-16 h-16 rounded-2xl ${value.bg} ${value.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 tracking-tight">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Journey */}
      <section className="py-24 px-6 lg:px-12 relative overflow-hidden bg-gray-900">
        {/* Dark Background Elements */}
        <div className="absolute top-0 right-0 w-full h-full overflow-hidden z-0">
          <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[50%] bg-primary/20 rounded-full blur-[100px]" />
          <div className="absolute bottom-[-20%] left-[-10%] w-[40%] h-[40%] bg-emerald-500/10 rounded-full blur-[100px]" />
        </div>

        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight">Our Journey So Far</h2>
            <div className="space-y-6 text-xl text-gray-300 leading-relaxed text-left md:text-center">
              <p>
                HimmatKaar was founded with a simple, unyielding belief: <strong className="text-white font-semibold">that talent is universal, but opportunity is not.</strong>
              </p>
              <p>
                We saw countless bright, ambitious students held back not by a lack of ability, but by systemic barriers and a lack of access to the critical skills and networks that lead to career success.
              </p>
              <p>
                Today, we've empowered over <span className="text-primary font-bold">1,000 fellows</span> from diverse backgrounds, helping them secure meaningful employment and become leaders in their fields. But we're just getting started. The journey continues with every new application.
              </p>
            </div>
            
            <div className="mt-12 flex justify-center">
              <Link href="/impact" className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded-xl font-semibold transition-colors shadow-lg shadow-primary/30">
                See Our Impact
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

