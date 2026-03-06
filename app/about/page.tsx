"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Target, Eye, Heart, Users } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="initial"
            animate="animate"
            variants={{
              animate: { transition: { staggerChildren: 0.1 } }
            }}
            className="text-center"
          >
            <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
              About <span className="text-[#3a8a4d]">HimmatKaar</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-xl text-gray-700 max-w-3xl mx-auto">
              We believe every young person deserves the opportunity to reach their full potential, regardless of their background.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl p-8 shadow-xl"
            >
              <Target className="text-[#3a8a4d] mb-4" size={48} />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-gray-700 text-lg">
                To empower underserved youth with the skills, mindset, and confidence needed to succeed in their careers and become leaders in their communities.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl p-8 shadow-xl"
            >
              <Eye className="text-[#3a8a4d] mb-4" size={48} />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h2>
              <p className="text-gray-700 text-lg">
                A world where every young person has access to quality education and opportunities, enabling them to build meaningful careers and contribute to society.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-16"
          >
            Our Core Values
          </motion.h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <Heart size={40} />, title: "Empathy", desc: "We understand the challenges faced by underserved youth and approach every interaction with compassion." },
              { icon: <Users size={40} />, title: "Community", desc: "We build strong, supportive communities where fellows can learn from each other and grow together." },
              { icon: <Target size={40} />, title: "Excellence", desc: "We are committed to delivering high-quality programs that create real, measurable impact." }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
                className="bg-gray-50 rounded-2xl p-8 text-center"
              >
                <div className="flex justify-center text-[#3a8a4d] mb-4">{value.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-700">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 px-6 bg-[#17431f] text-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Our Story</h2>
            <p className="text-lg text-[#a3caad] mb-6">
              HimmatKaar was founded with a simple belief: that talent is universal, but opportunity is not. We saw countless bright, ambitious students held back not by lack of ability, but by lack of access to the skills and networks that lead to career success.
            </p>
            <p className="text-lg text-[#a3caad]">
              Today, we've empowered over 1000 fellows from diverse backgrounds, helping them secure meaningful employment and become leaders in their fields. But we're just getting started.
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
