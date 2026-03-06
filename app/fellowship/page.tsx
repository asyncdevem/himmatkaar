"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Calendar, 
  Clock, 
  Users, 
  Award,
  CheckCircle,
  MessageSquare,
  FileText,
  Mic,
  Rocket,
  Brain,
  BookOpen
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

export default function Fellowship() {
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
            Career-Prep <span className="text-[#3a8a4d]">Fellowship</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-700 max-w-3xl mx-auto mb-8"
          >
            A transformative 3-month program designed to equip you with the skills, mindset, and confidence to launch your dream career.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Link href="/contact">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block bg-[#3a8a4d] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#17431f] transition-all hover:shadow-xl"
              >
                Apply Now
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-gray-900 text-center mb-16"
          >
            Program Overview
          </motion.h2>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: <Calendar size={40} />, title: "Duration", desc: "3 Months" },
              { icon: <Clock size={40} />, title: "Time Commitment", desc: "10-15 hours/week" },
              { icon: <Users size={40} />, title: "Cohort Size", desc: "50-100 Fellows" },
              { icon: <Award size={40} />, title: "Certificate", desc: "Upon Completion" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white rounded-2xl p-8 text-center shadow-lg"
              >
                <div className="flex justify-center text-[#3a8a4d] mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-700">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Outcomes */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-gray-900 text-center mb-16"
          >
            What You'll Learn
          </motion.h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <MessageSquare size={40} />, title: "Professional Communication", desc: "Master clear and effective communication in professional settings, interviews, and presentations" },
              { icon: <FileText size={40} />, title: "Resume & Applications", desc: "Write compelling resumes, cover letters, and job applications that get you noticed" },
              { icon: <Mic size={40} />, title: "Confidence & Public Speaking", desc: "Overcome nervousness and build confidence to present yourself effectively" },
              { icon: <Rocket size={40} />, title: "Leadership & Initiative", desc: "Develop leadership skills and learn to take ownership of your growth" },
              { icon: <Brain size={40} />, title: "Critical Thinking", desc: "Enhance problem-solving abilities and become a strategic thinker" },
              { icon: <BookOpen size={40} />, title: "Lifelong Learning", desc: "Cultivate the mindset and skills to continuously learn and adapt" }
            ].map((outcome, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-[#3a8a4d] hover:shadow-2xl transition-all"
              >
                <div className="text-[#3a8a4d] mb-4">{outcome.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{outcome.title}</h3>
                <p className="text-gray-700">{outcome.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility */}
      <section className="py-20 px-6 bg-[#17431f] text-white">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-12"
          >
            Who Can Apply?
          </motion.h2>
          
          <div className="space-y-4">
            {[
              "University students (all years welcome)",
              "Recent graduates looking to start their career",
              "Motivated individuals committed to personal growth",
              "Strong English communication skills (written and spoken)",
              "Access to internet and computer for online sessions"
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-4 bg-white/10 rounded-lg p-4"
              >
                <CheckCircle className="text-[#a3caad] flex-shrink-0 mt-1" size={24} />
                <p className="text-lg">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-[#a3caad]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-[#17431f] mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-[#17431f] mb-8">
              Applications are now open for the next cohort
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
