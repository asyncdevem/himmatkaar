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
      <section className="relative bg-[#2d5f3d] text-white py-32 lg:py-40 overflow-hidden mt-20">
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
              12-Week Professional Development Program
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
            Empowering Future Professionals - Bridge the gap between education and industry-readiness through practical workshops, guided mentorship, and real-world exposure.
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
              { icon: <Calendar className="w-8 h-8" />, title: "Duration", desc: "12 Weeks Intensive", color: "text-[#39894c]", bg: "bg-[#39894c]/10" },
              { icon: <Clock className="w-8 h-8" />, title: "Format", desc: "1 Live + 1 Mentorship/Week", color: "text-[#39894c]", bg: "bg-[#39894c]/10" },
              { icon: <Users className="w-8 h-8" />, title: "Target", desc: "Students & Graduates", color: "text-[#39894c]", bg: "bg-[#39894c]/10" },
              { icon: <Award className="w-8 h-8" />, title: "Mode", desc: "Hybrid (In-person + Online)", color: "text-[#39894c]", bg: "bg-[#39894c]/10" }
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

      {/* Program Objectives */}
      <section className="py-28 px-6 bg-white dark:bg-[#0a0f0b]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="inline-block text-[#39894c] font-bold text-sm uppercase tracking-wider mb-4">Program Objectives</span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight">What You'll Achieve</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">By the end of the 12-week program, you will have transformed into an industry-ready professional</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <Target size={40} />, title: "Career Purpose & Growth Path", desc: "Identify your career purpose and personal growth path with clarity and confidence." },
              { icon: <DollarSign size={40} />, title: "Job-Ready Documents", desc: "Develop professional documents including CV, LinkedIn profile, and portfolio that stand out." },
              { icon: <Network size={40} />, title: "Interview & Communication", desc: "Master interview and communication skills for corporate settings and professional environments." },
              { icon: <Lightbulb size={40} />, title: "Professional Networks", desc: "Build and leverage professional networks for growth opportunities and career advancement." },
              { icon: <TrendingUp size={40} />, title: "Essential Soft Skills", desc: "Understand the value of soft skills, sales mindset, and adaptability in the modern workplace." },
              { icon: <Rocket size={40} />, title: "AI & Automation Tools", desc: "Apply AI and automation tools for productivity, innovation, and staying ahead of the curve." }
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

      {/* 12-Week Curriculum */}
      <section className="py-28 px-6 bg-slate-50 dark:bg-[#0f1410]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="inline-block text-[#39894c] font-bold text-sm uppercase tracking-wider mb-4">Weekly Curriculum</span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight">12-Week Journey</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">A comprehensive week-by-week breakdown of your transformation journey</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { week: 1, theme: "Orientation & Self-Discovery", focus: "Finding Your 'Why'", deliverable: "Personal Career Purpose Statement" },
              { week: 2, theme: "Growth & Entrepreneurial Mindset", focus: "From Job-Seeker to Opportunity-Creator", deliverable: "Personal Growth & Learning Plan" },
              { week: 3, theme: "Building a Professional Brand", focus: "Positioning Yourself for Opportunity", deliverable: "Polished Resume + LinkedIn Profile" },
              { week: 4, theme: "Career Navigation & Job Search", focus: "Standing Out in the Hiring Process", deliverable: "Mock Interview Feedback Report" },
              { week: 5, theme: "Connection Building & Networking", focus: "Your Network Is Your Net Worth", deliverable: "Networking Action Plan" },
              { week: 6, theme: "Global Opportunities", focus: "Semester Exchange & Scholarships", deliverable: "Statement of Purpose + Tracker" },
              { week: 7, theme: "Power of Soft Skills", focus: "Human Skills for Digital Future", deliverable: "Soft Skills Development Plan" },
              { week: 8, theme: "Sales as Universal Skill", focus: "Selling Yourself & Your Ideas", deliverable: "Personal Elevator Pitch Script" },
              { week: 9, theme: "Becoming a Generalist", focus: "Breadth Before Depth", deliverable: "Skill Map + Learning Roadmap" },
              { week: 10, theme: "Time, Stress & AI Productivity", focus: "Work Smarter, Not Harder", deliverable: "Productivity Plan + AI Workflow" },
              { week: 11, theme: "Academia to Corporate Life", focus: "Adapting for Professional Success", deliverable: "Corporate Readiness Checklist" },
              { week: 12, theme: "Showcase & Networking Ceremony", focus: "Reflect. Present. Celebrate.", deliverable: "Career Roadmap + Certificate" }
            ].map((week, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
                className="bg-white dark:bg-slate-900 rounded-xl p-6 border border-slate-200 dark:border-slate-800 hover:shadow-xl transition-all"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-[#39894c] text-white flex items-center justify-center font-bold text-lg">
                    {week.week}
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 dark:text-white">{week.theme}</h3>
                    <p className="text-xs text-[#39894c] font-semibold">Week {week.week}</p>
                  </div>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-3 font-medium">{week.focus}</p>
                <div className="pt-3 border-t border-slate-100 dark:border-slate-800">
                  <p className="text-xs text-slate-500 dark:text-slate-500 font-semibold mb-1">Deliverable:</p>
                  <p className="text-sm text-slate-700 dark:text-slate-300">{week.deliverable}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mentors & Facilitators */}
      <section className="py-28 px-6 bg-white dark:bg-[#0a0f0b]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="inline-block text-[#39894c] font-bold text-sm uppercase tracking-wider mb-4">Expert Guidance</span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight">Meet Your Mentors</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">Learn from industry leaders and experienced professionals who will guide your journey</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Aymen Shahid", role: "Program Manager, NIC Faisalabad", expertise: "Entrepreneurship & Startup Mindset" },
              { name: "Awais Khan", role: "Program Manager, Beaconhouse Incubation Centre", expertise: "Career Navigation & Networking" },
              { name: "Ubaid Afzal", role: "Mentor & Corporate Trainer", expertise: "Communication & Soft Skills" },
              { name: "Rameen Anwar", role: "Communication Manager, NIC Faisalabad", expertise: "Branding & Presentation Skills" },
              { name: "Abubakar Dilawar", role: "CEO & Founder, Kahani", expertise: "Storytelling, Ideation & Innovation" },
              { name: "Hammad Armagan", role: "Director, Cybergel", expertise: "AI Tools & Digital Productivity" },
              { name: "Wahaj Siraj", role: "CEO, Nayatel", expertise: "Leadership, Corporate Insight & Growth Mindset" }
            ].map((mentor, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.5 }}
                className="bg-slate-50 dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 hover:shadow-xl transition-all"
              >
                <div className="w-16 h-16 rounded-full bg-[#39894c] text-white flex items-center justify-center font-bold text-2xl mb-4">
                  {mentor.name.charAt(0)}
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{mentor.name}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-3 font-medium">{mentor.role}</p>
                <div className="pt-3 border-t border-slate-200 dark:border-slate-800">
                  <p className="text-xs text-[#39894c] font-semibold mb-1">Expertise:</p>
                  <p className="text-sm text-slate-700 dark:text-slate-300">{mentor.expertise}</p>
                </div>
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
              Who Should Apply?
            </motion.h2>
            <p className="text-white/90 text-lg leading-relaxed max-w-2xl mx-auto">
              This program is designed for university students and fresh graduates ready to bridge the gap between education and professional success.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "University students in their final years looking to prepare for the job market",
              "Fresh graduates seeking to enhance their employability and career readiness",
              "Young professionals wanting to transition smoothly into corporate environments",
              "Individuals committed to personal and professional growth",
              "Those ready to invest 12 weeks in transforming their career trajectory",
              "Aspiring professionals eager to learn from industry experts and mentors"
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

          <div className="mt-16 text-center">
            <p className="text-white/90 text-lg mb-6">
              Complete the program and receive: Resume, LinkedIn Profile, Career Roadmap, and Certificate of Completion
            </p>
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
            className="bg-[#2d5f3d] rounded-3xl p-12 lg:p-16 shadow-2xl"
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
