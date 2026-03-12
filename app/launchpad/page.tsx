"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { 
  Calendar, 
  Clock, 
  Users, 
  Award,
  CheckCircle2,
  Rocket,
  Target,
  TrendingUp,
  Lightbulb,
  Network,
  DollarSign,
  ArrowRight
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Launchpad() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0f0b]">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#2d5f3d] to-[#39894c] text-white py-32 lg:py-40 overflow-hidden mt-20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-6"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-semibold border border-white/20">
              <Rocket size={16} />
              Himmatkaar's Flagship Event
            </span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl lg:text-7xl font-extrabold leading-tight mb-8 tracking-tight"
          >
            Himmatkaar <span className="text-[#a8d5ba]">LaunchPad</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl lg:text-2xl max-w-4xl mx-auto mb-10 text-white/95 leading-relaxed font-light"
          >
            Pakistan's premier startup acceleration program. Transform your innovative idea into a thriving venture with expert mentorship, funding opportunities, and a powerful network.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link href="/register">
              <button className="bg-white text-[#2d5f3d] px-12 py-5 rounded-lg font-bold text-lg hover:bg-slate-100 transition-all shadow-2xl hover:scale-105 flex items-center gap-2">
                Apply for LaunchPad <ArrowRight size={20} />
              </button>
            </Link>
            <Link href="/contact">
              <button className="bg-white/10 backdrop-blur-sm text-white px-12 py-5 rounded-lg font-bold text-lg hover:bg-white/20 transition-all border border-white/30">
                Learn More
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-20 px-6 bg-slate-50 dark:bg-[#0f1410]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Calendar className="w-8 h-8" />, title: "Duration", desc: "6 Months Intensive", color: "text-[#39894c]", bg: "bg-[#39894c]/10" },
              { icon: <Clock className="w-8 h-8" />, title: "Time Commitment", desc: "15-20 hrs / week", color: "text-[#39894c]", bg: "bg-[#39894c]/10" },
              { icon: <Users className="w-8 h-8" />, title: "Cohort Size", desc: "30-50 Startups", color: "text-[#39894c]", bg: "bg-[#39894c]/10" },
              { icon: <Award className="w-8 h-8" />, title: "Funding", desc: "Up to PKR 5M", color: "text-[#39894c]", bg: "bg-[#39894c]/10" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-slate-900 rounded-2xl p-6 lg:p-8 border border-slate-200 dark:border-slate-800 shadow-lg text-center hover:shadow-2xl transition-all duration-300"
              >
                <div className={`w-14 h-14 mx-auto rounded-2xl ${item.bg} ${item.color} flex items-center justify-center mb-4`}>
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">{item.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 font-medium text-sm lg:text-base">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What You'll Get */}
      <section className="py-28 px-6 bg-white dark:bg-[#0a0f0b]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="inline-block text-[#39894c] font-bold text-sm uppercase tracking-wider mb-4">Program Benefits</span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight">What You'll Get at LaunchPad</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">Everything you need to transform your startup from idea to market-ready venture</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <Target size={40} />, title: "Expert Mentorship", desc: "One-on-one guidance from successful entrepreneurs and industry leaders who have built and scaled businesses." },
              { icon: <DollarSign size={40} />, title: "Seed Funding", desc: "Access to seed funding up to PKR 5M for promising startups that complete the program successfully." },
              { icon: <Network size={40} />, title: "Investor Network", desc: "Direct connections to angel investors, VCs, and corporate partners actively looking for investment opportunities." },
              { icon: <Lightbulb size={40} />, title: "Product Development", desc: "Hands-on support in building your MVP, validating your product-market fit, and iterating based on feedback." },
              { icon: <TrendingUp size={40} />, title: "Business Strategy", desc: "Learn to develop sustainable business models, pricing strategies, and go-to-market plans that work." },
              { icon: <Rocket size={40} />, title: "Launch Support", desc: "Comprehensive support for your product launch including marketing, PR, and customer acquisition strategies." }
            ].map((benefit, index) => (
               <motion.div
                 key={index}
                 initial={{ opacity: 0, y: 40 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: index * 0.08, duration: 0.5 }}
                 className="group p-8 bg-slate-50 dark:bg-slate-900 rounded-2xl hover:shadow-2xl transition-all border border-slate-100 dark:border-slate-800 hover:border-[#39894c]/30"
               >
                 <div className="text-[#39894c] mb-6 group-hover:scale-110 transition-transform inline-block">
                   {benefit.icon}
                 </div>
                 <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">{benefit.title}</h3>
                 <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{benefit.desc}</p>
               </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility Requirements */}
      <section className="py-28 px-6 bg-[#2d5f3d] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-6 tracking-tight"
            >
              Who Can Apply?
            </motion.h2>
            <p className="text-white/90 text-lg leading-relaxed max-w-2xl mx-auto">
              We're looking for passionate entrepreneurs with innovative ideas and the determination to build something meaningful.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Early-stage startups with a validated idea or MVP",
              "Tech-enabled businesses with scalability potential",
              "Teams of 2-4 co-founders with complementary skills",
              "Commitment to full-time focus during the program",
              "Based in Pakistan or willing to relocate temporarily",
              "Innovative solution addressing a real market problem"
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="flex items-start gap-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-[#39894c] flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 size={20} />
                </div>
                <p className="text-lg font-medium text-white">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-28 px-6 bg-white dark:bg-[#0a0f0b] relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-[#2d5f3d] to-[#39894c] rounded-3xl p-12 lg:p-16 shadow-2xl"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
              Ready to Launch Your Startup?
            </h2>
            <p className="text-xl text-white/90 mb-10 font-medium max-w-2xl mx-auto">
              Applications for the next cohort are now open. Join Pakistan's most successful startup accelerator and turn your vision into reality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/register">
                <button className="bg-white text-[#2d5f3d] px-10 py-5 rounded-xl font-bold text-xl hover:scale-105 transition-transform shadow-xl inline-flex items-center gap-2">
                  Start Application <ArrowRight size={24} />
                </button>
              </Link>
              <Link href="/contact">
                <button className="bg-white/10 backdrop-blur-sm text-white px-10 py-5 rounded-xl font-bold text-xl hover:bg-white/20 transition-all border-2 border-white/30">
                  Contact Us
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
