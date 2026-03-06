"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  MessageSquare, 
  FileText, 
  Mic, 
  Rocket, 
  Brain, 
  BookOpen,
  Users,
  TrendingUp,
  Award,
  ArrowRight
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TestimonialCarousel from "@/components/TestimonialCarousel";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
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
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="text-center"
          >
            <motion.div variants={fadeInUp} className="flex justify-center mb-8">
              <motion.div
                whileHover={{ scale: 1.05, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Image
                  src="/himmatkaar-logo.jpg"
                  alt="HimmatKaar Logo"
                  width={150}
                  height={150}
                  className="rounded-2xl shadow-2xl"
                />
              </motion.div>
            </motion.div>
            
            <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Empowering Youth Through
              <motion.span 
                className="block text-[#3a8a4d]"
                animate={{ 
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{ duration: 5, repeat: Infinity }}
              >
                Skills & Mindset
              </motion.span>
            </motion.h1>
            
            <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-gray-700 mb-12 max-w-3xl mx-auto">
              We help underserved students develop the professional skills, critical thinking, and mindset to thrive in today's competitive world.
            </motion.p>
            
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/fellowship">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#3a8a4d] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#17431f] transition-all hover:shadow-xl inline-flex items-center gap-2"
                >
                  Join Our Fellowship
                  <ArrowRight size={20} />
                </motion.div>
              </Link>
              <Link href="/impact">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-[#3a8a4d] px-8 py-4 rounded-lg text-lg font-semibold border-2 border-[#3a8a4d] hover:bg-gray-50 transition-all hover:shadow-xl"
                >
                  See Our Impact
                </motion.div>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6 bg-[#17431f] text-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              { icon: <Users size={48} />, number: "1000+", label: "Fellows Empowered" },
              { icon: <TrendingUp size={48} />, number: "85%", label: "Career Success Rate" },
              { icon: <Award size={48} />, number: "75%", label: "Skills Improvement" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.05, y: -10 }}
                className="bg-white text-gray-900 rounded-2xl p-8 text-center shadow-xl"
              >
                <div className="flex justify-center mb-4 text-[#3a8a4d]">{stat.icon}</div>
                <motion.div 
                  className="text-5xl font-bold mb-3 text-[#3a8a4d]"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 100, delay: index * 0.2 }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-xl font-semibold">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <motion.div variants={fadeInUp}>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                The HimmatKaar Career-Prep Fellowship
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                A transformative program where you'll build confidence, enhance communication skills, learn to write stellar resumes, become a critical thinker, and join a thriving community of ambitious fellows.
              </p>
              <Link href="/fellowship">
                <motion.div
                  whileHover={{ x: 10 }}
                  className="inline-flex items-center gap-2 text-[#3a8a4d] font-semibold hover:text-[#17431f] transition-colors text-lg"
                >
                  Learn more about the Fellowship 
                  <Rocket size={20} />
                </motion.div>
              </Link>
            </motion.div>
            
            <motion.div 
              variants={fadeInUp}
              whileHover={{ scale: 1.02 }}
              className="relative h-96 rounded-2xl overflow-hidden shadow-2xl border-4 border-[#3a8a4d]"
            >
              <Image
                src="/himmatkaar-logo.jpg"
                alt="HimmatKaar Fellowship"
                fill
                className="object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Skills Preview */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-4">
              What You'll Learn
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-center text-gray-700 text-lg mb-16 max-w-2xl mx-auto">
              Develop essential skills and mindsets that will transform your professional journey
            </motion.p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { icon: <MessageSquare size={40} />, title: "Professional Communication", desc: "Master clear and effective communication" },
                { icon: <FileText size={40} />, title: "Resume & Applications", desc: "Write compelling job applications" },
                { icon: <Mic size={40} />, title: "Public Speaking", desc: "Build confidence in presentations" },
                { icon: <Rocket size={40} />, title: "Leadership", desc: "Develop leadership and initiative" },
                { icon: <Brain size={40} />, title: "Critical Thinking", desc: "Enhance problem-solving abilities" },
                { icon: <BookOpen size={40} />, title: "Lifelong Learning", desc: "Cultivate continuous growth mindset" }
              ].map((skill, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-[#3a8a4d] hover:shadow-2xl transition-all cursor-pointer"
                >
                  <div className="text-[#3a8a4d] mb-4">{skill.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{skill.title}</h3>
                  <p className="text-gray-700">{skill.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-4">
              Success Stories
            </h2>
            <p className="text-center text-gray-700 text-lg mb-16 max-w-2xl mx-auto">
              Hear from our fellows who transformed their careers
            </p>
            <TestimonialCarousel />
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-[#a3caad]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#17431f] mb-6">
              Ready to Transform Your Future?
            </h2>
            <p className="text-xl text-[#17431f] mb-12">
              Join thousands of students who have already started their journey with HimmatKaar
            </p>
            <Link href="/contact">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block bg-[#3a8a4d] text-white px-12 py-5 rounded-lg text-lg font-semibold hover:shadow-2xl transition-all hover:bg-[#17431f]"
              >
                Apply for Fellowship
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
