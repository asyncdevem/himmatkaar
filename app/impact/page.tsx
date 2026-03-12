"use client";

import { motion } from "framer-motion";
import { Users, TrendingUp, Award, Briefcase, GraduationCap, Globe, ArrowUpRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Impact() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-jakarta relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[50%] h-[40%] bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute top-[20%] left-[-10%] w-[40%] h-[40%] bg-blue-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[10%] w-[60%] h-[50%] bg-emerald-400/10 rounded-full blur-[120px]" />
      </div>

      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 lg:px-12 relative z-10 flex-grow flex items-center justify-center">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 text-emerald-600 font-medium text-sm mb-6 border border-emerald-500/20">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Real Numbers, Real Change
            </motion.div>
            <motion.h1 
              variants={fadeInUp} 
              className="text-5xl md:text-7xl font-extrabold text-gray-900 mb-8 tracking-tight"
            >
              Measuring Our <span className="text-[#39894c]">Impact</span>
            </motion.h1>
            <motion.p 
              variants={fadeInUp} 
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-10"
            >
              At HimmatKaar, we believe data tells a story. Our impact isn't just measured in numbers, but in the lives transformed, careers launched, and communities uplifted.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Main Stats - Floating Cards */}
      <section className="py-12 px-6 lg:px-12 relative z-20 -mt-10 mb-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {[
              { icon: <Users className="w-10 h-10" />, number: "1,000+", label: "Fellows Empowered", desc: "Students from diverse backgrounds transformed.", color: "from-blue-500 to-cyan-400", bg: "bg-blue-50", iconColor: "text-blue-500" },
              { icon: <TrendingUp className="w-10 h-10" />, number: "85%", label: "Career Success Rate", desc: "Secured meaningful employment within 3 months.", color: "from-primary to-emerald-400", bg: "bg-emerald-50", iconColor: "text-primary" },
              { icon: <Award className="w-10 h-10" />, number: "75%", label: "Skills Improvement", desc: "Average growth in professional competencies.", color: "from-purple-500 to-fuchsia-400", bg: "bg-purple-50", iconColor: "text-purple-500" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 border border-white shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all duration-300 relative overflow-hidden group"
              >
                {/* Decorative Solid Line */}
                <div className={`absolute top-0 left-0 w-full h-1.5 ${stat.iconColor} opacity-70 group-hover:opacity-100 transition-opacity`} />
                
                <div className="flex justify-between items-start mb-6">
                  <div className={`p-4 rounded-2xl ${stat.bg} ${stat.iconColor}`}>
                    {stat.icon}
                  </div>
                  <ArrowUpRight className="w-6 h-6 text-gray-300 group-hover:text-gray-400 transition-colors" />
                </div>
                
                <motion.div
                  initial={{ scale: 0.5, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 100, delay: index * 0.15 + 0.3 }}
                  className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-3 tracking-tight"
                >
                  {stat.number}
                </motion.div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{stat.label}</h3>
                <p className="text-gray-500 leading-relaxed font-medium">{stat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Impact Breakdown */}
      <section className="py-24 px-6 lg:px-12 bg-white relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">The Ripple Effect</h2>
            <p className="text-xl text-gray-600">How our rigorous programs translate into tangible, widespread change.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {[
              { 
                icon: <Briefcase className="w-8 h-8" />, 
                title: "Career & Economic Mobility", 
                stats: ["85% employment rate within 3 months", "60% average salary increase post-program", "200+ partner companies hired our fellows"],
                theme: "blue"
              },
              { 
                icon: <GraduationCap className="w-8 h-8" />, 
                title: "Holistic Skills Development", 
                stats: ["72% improvement in proactive initiative", "81% boost in interviewing competence", "60% aggregate improvement in confidence"],
                theme: "emerald"
              },
              { 
                icon: <Globe className="w-8 h-8" />, 
                title: "National Geographic Reach", 
                stats: ["Students from 125+ universities", "Representing 170+ towns and villages", "Active in all 4 provincial regions"],
                theme: "purple"
              },
              { 
                icon: <Users className="w-8 h-8" />, 
                title: "Community & Society Impact", 
                stats: ["5,000+ indirect community beneficiaries", "1,700+ social impact projects initiated", "Robust, self-sustaining alumni network"],
                theme: "rose"
              }
            ].map((item, index) => {
              const themeColors = {
                blue: { bg: "bg-blue-50", text: "text-blue-600", border: "border-blue-100", dot: "bg-blue-500" },
                emerald: { bg: "bg-emerald-50", text: "text-emerald-600", border: "border-emerald-100", dot: "bg-emerald-500" },
                purple: { bg: "bg-purple-50", text: "text-purple-600", border: "border-purple-100", dot: "bg-purple-500" },
                rose: { bg: "bg-rose-50", text: "text-rose-600", border: "border-rose-100", dot: "bg-rose-500" },
              }[item.theme as "blue" | "emerald" | "purple" | "rose"];

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`bg-white rounded-3xl p-8 lg:p-10 border ${themeColors.border} shadow-sm hover:shadow-xl transition-all duration-300`}
                >
                  <div className="flex items-center gap-5 mb-8">
                    <div className={`p-4 rounded-2xl ${themeColors.bg} ${themeColors.text}`}>
                      {item.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">{item.title}</h3>
                  </div>
                  <ul className="space-y-4">
                    {item.stats.map((stat, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + i * 0.1 + 0.2 }}
                        className="flex items-start gap-4 text-gray-600 font-medium text-lg leading-snug"
                      >
                        <div className={`w-2.5 h-2.5 rounded-full mt-2 shrink-0 ${themeColors.dot}`}></div>
                        <span>{stat}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Interactive Progress Indicators */}
      <section className="py-24 px-6 lg:px-12 bg-gray-900 relative overflow-hidden text-white">
        {/* Abstract Background */}
        <div className="absolute top-0 right-0 w-full h-full opacity-20">
          <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" strokeOpacity="0.2"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <div className="max-w-5xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">Core Success Metrics</h2>
            <p className="text-xl text-gray-400">Continuous measurement ensures we stay on target.</p>
          </motion.div>
          
          <div className="bg-white/10 backdrop-blur-md rounded-3xl border border-white/10 p-8 lg:p-12">
            <div className="space-y-10">
              {[
                { label: "Job Placement Rate (Within 90 Days)", value: 85, color: "bg-primary" },
                { label: "Overall Skills Improvement Index", value: 75, color: "bg-blue-500" },
                { label: "Fellow Program Satisfaction", value: 92, color: "bg-purple-500" },
                { label: "Fellowship Completion Rate", value: 88, color: "bg-emerald-400" }
              ].map((metric, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex justify-between items-end mb-3">
                    <span className="text-lg font-medium text-gray-200">{metric.label}</span>
                    <span className="text-3xl font-bold text-white">{metric.value}%</span>
                  </div>
                  <div className="h-4 bg-gray-800 rounded-full overflow-hidden border border-gray-700">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${metric.value}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: index * 0.1 + 0.2, ease: "easeOut" }}
                      className={`h-full rounded-full relative ${metric.color}`}
                    >
                      {/* Shimmer effect inside progress bar - removed */}
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary/10 text-center px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Be Part of the Impact</h2>
          <p className="text-lg text-gray-700 mb-8">
            Whether you want to sponsor a fellow, become a mentor, or join our team, there are many ways to help us drive change.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
             <Link href="/get-involved" className="bg-primary text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-primary-hover transition-colors shadow-lg shadow-primary/20">
               Get Involved
             </Link>
             <Link href="/contact" className="bg-white text-gray-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-50 border border-gray-200 transition-colors">
               Contact Us
             </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
