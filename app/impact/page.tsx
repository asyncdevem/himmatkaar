"use client";

import { motion } from "framer-motion";
import { Users, TrendingUp, Award, Briefcase, GraduationCap, Globe } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Impact() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold text-gray-900 mb-6"
          >
            Our <span className="text-[#3a8a4d]">Impact</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-700 max-w-3xl mx-auto"
          >
            At HimmatKaar, our impact goes beyond numbers—it's about the lives we touch and the futures we help shape.
          </motion.p>
        </div>
      </section>

      {/* Main Stats */}
      <section className="py-20 px-6 bg-[#17431f] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <Users size={64} />, number: "1000+", label: "Fellows Empowered", desc: "Students from diverse backgrounds transformed" },
              { icon: <TrendingUp size={64} />, number: "85%", label: "Career Success Rate", desc: "Fellows secure employment within 3 months" },
              { icon: <Award size={64} />, number: "75%", label: "Skills Improvement", desc: "Average improvement in professional skills" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="bg-white text-gray-900 rounded-2xl p-8 text-center shadow-xl"
              >
                <div className="flex justify-center text-[#3a8a4d] mb-4">{stat.icon}</div>
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", delay: index * 0.2 + 0.3 }}
                  className="text-6xl font-bold text-[#3a8a4d] mb-3"
                >
                  {stat.number}
                </motion.div>
                <h3 className="text-2xl font-bold mb-2">{stat.label}</h3>
                <p className="text-gray-700">{stat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Impact */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-gray-900 text-center mb-16"
          >
            Impact Breakdown
          </motion.h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { icon: <Briefcase size={40} />, title: "Career Outcomes", stats: ["85% employment rate", "60% salary increase", "200+ companies hired our fellows"] },
              { icon: <GraduationCap size={40} />, title: "Skills Development", stats: ["72% improvement in initiative", "81% improvement in interviewing", "60% improvement in confidence"] },
              { icon: <Globe size={40} />, title: "Geographic Reach", stats: ["125+ universities", "170+ towns and villages", "All 4 provinces covered"] },
              { icon: <Users size={40} />, title: "Community Impact", stats: ["5000+ indirect beneficiaries", "1700+ social impact projects", "Strong alumni network"] }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-2xl p-8 shadow-lg"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-[#3a8a4d]">{item.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900">{item.title}</h3>
                </div>
                <ul className="space-y-3">
                  {item.stats.map((stat, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + i * 0.1 }}
                      className="flex items-center gap-3 text-gray-700"
                    >
                      <div className="w-2 h-2 bg-[#3a8a4d] rounded-full"></div>
                      {stat}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-gray-900 text-center mb-16"
          >
            Success Metrics
          </motion.h2>
          
          <div className="space-y-8">
            {[
              { label: "Job Placement Rate", value: 85, color: "#3a8a4d" },
              { label: "Skills Improvement", value: 75, color: "#3a8a4d" },
              { label: "Fellow Satisfaction", value: 92, color: "#3a8a4d" },
              { label: "Program Completion Rate", value: 88, color: "#3a8a4d" }
            ].map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex justify-between mb-2">
                  <span className="text-lg font-semibold text-gray-900">{metric.label}</span>
                  <span className="text-lg font-bold text-[#3a8a4d]">{metric.value}%</span>
                </div>
                <div className="h-4 bg-gray-200 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${metric.value}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
                    className="h-full rounded-full"
                    style={{ backgroundColor: metric.color }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
