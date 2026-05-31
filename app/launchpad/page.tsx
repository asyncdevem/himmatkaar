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
    <div className="min-h-screen bg-white  dark:backdrop-blur-xl dark:bg-white/5 dark:border dark:border-white/10">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-[#2d5f3d] text-white py-32 lg:py-40 overflow-hidden mt-20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl dark:backdrop-blur-xl dark:bg-white/5 dark:border dark:border-white/10"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl dark:backdrop-blur-xl dark:bg-white/5 dark:border dark:border-white/10"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-6"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-semibold border border-white/20 dark:backdrop-blur-xl dark:bg-white/5 dark:border dark:border-white/10">
              <Rocket size={16} />
              6-Week Training + 6-Week Industry Internship
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
            Transform from student to professional in 12 weeks. 6 weeks of intensive training with one-on-one mentorship from Salman Khan, followed by 6 weeks of industry internship. Limited to 25 students per cohort.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSdLfYvAZc0W6J53bdxLtlJCSv-uM40bJG22C9POuPZVa56BlQ/viewform?usp=dialog" target="_blank" rel="noopener noreferrer">
              <button className="bg-white text-[#2d5f3d] px-6 sm:px-10 py-4 sm:py-5 rounded-lg font-bold text-lg hover:bg-slate-100 transition-all shadow-2xl hover:scale-105 flex items-center gap-2 dark:backdrop-blur-xl dark:bg-white/5 dark:border dark:border-white/10">
                Apply for LaunchPad <ArrowRight size={20} />
              </button>
            </a>
            <Link href="/contact">
              <button className="bg-white/10 backdrop-blur-sm text-white px-6 sm:px-10 py-4 sm:py-5 rounded-lg font-bold text-lg hover:bg-white/20 transition-all border border-white/30 dark:backdrop-blur-xl dark:bg-white/5 dark:border dark:border-white/10">
                Learn More
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-20 px-4 sm:px-6 bg-slate-50  dark:backdrop-blur-xl dark:bg-white/5 dark:border dark:border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Calendar className="w-8 h-8" />, title: "Duration", desc: "12 Weeks (6+6)", color: "text-[#39894c]", bg: "bg-[#39894c]/10" },
              { icon: <Clock className="w-8 h-8" />, title: "Format", desc: "Mon/Thu + Mentorship", color: "text-[#39894c]", bg: "bg-[#39894c]/10" },
              { icon: <Users className="w-8 h-8" />, title: "Cohort Size", desc: "25 Students per Cohort", color: "text-[#39894c]", bg: "bg-[#39894c]/10" },
              { icon: <Award className="w-8 h-8" />, title: "Mode", desc: "Hybrid (In-person + Online)", color: "text-[#39894c]", bg: "bg-[#39894c]/10" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white  rounded-2xl p-6 lg:p-8 border border-slate-200 dark:border-slate-800 shadow-lg text-center hover:shadow-2xl transition-all duration-300 dark:backdrop-blur-xl dark:bg-white/5 dark:border dark:border-white/10"
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
      <section className="py-28 px-4 sm:px-6 bg-white  dark:backdrop-blur-xl dark:bg-white/5 dark:border dark:border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="inline-block text-[#39894c] font-bold text-sm uppercase tracking-wider mb-4">Program Objectives</span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight">What You'll Achieve</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">Transform into an industry-ready professional through 6 weeks of intensive training and 6 weeks of hands-on industry experience</p>
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
                 className="group p-8 bg-slate-50  rounded-2xl hover:shadow-2xl transition-all border border-slate-100 dark:border-slate-800 hover:border-[#39894c]/30 dark:backdrop-blur-xl dark:bg-white/5 dark:border dark:border-white/10"
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

      {/* 6-Week Training Curriculum */}
      <section className="py-28 px-4 sm:px-6 bg-slate-50  dark:backdrop-blur-xl dark:bg-white/5 dark:border dark:border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="inline-block text-[#39894c] font-bold text-sm uppercase tracking-wider mb-4">Training Curriculum</span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight">6-Week Intensive Training</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">Every Monday & Thursday sessions with weekly one-on-one mentorship from Salman Khan</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { week: 1, theme: "Mindset & Purpose", topics: ["Growth Mindset", "Finding Your Why", "Goal Setting"], deliverable: "Personal Purpose Statement" },
              { week: 2, theme: "Professional Branding", topics: ["Personal Brand Development", "LinkedIn Optimization", "Digital Presence"], deliverable: "Professional Brand Portfolio" },
              { week: 3, theme: "Communication Skills", topics: ["Effective Communication", "Public Speaking", "Presentation Skills"], deliverable: "Communication Skills Assessment" },
              { week: 4, theme: "Soft Skills Development", topics: ["Teamwork & Collaboration", "Problem Solving", "Emotional Intelligence"], deliverable: "Soft Skills Action Plan" },
              { week: 5, theme: "Career Transition", topics: ["Resume Building", "Interview Preparation", "Job Search Strategies"], deliverable: "Career Readiness Package" },
              { week: 6, theme: "Industry Readiness", topics: ["Corporate Culture", "Professional Etiquette", "Workplace Dynamics"], deliverable: "Industry Readiness Certificate" }
            ].map((week, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
                className="bg-white  rounded-xl p-6 border border-slate-200 dark:border-slate-800 hover:shadow-xl transition-all dark:backdrop-blur-xl dark:bg-white/5 dark:border dark:border-white/10"
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
                <div className="mb-3">
                  <p className="text-xs text-slate-500 dark:text-slate-500 font-semibold mb-2">Key Topics:</p>
                  <ul className="space-y-1">
                    {week.topics.map((topic, idx) => (
                      <li key={idx} className="text-sm text-slate-600 dark:text-slate-400 flex items-start gap-2">
                        <CheckCircle2 size={14} className="text-[#39894c] mt-0.5 shrink-0" />
                        {topic}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="pt-3 border-t border-slate-100 dark:border-slate-800">
                  <p className="text-xs text-slate-500 dark:text-slate-500 font-semibold mb-1">Deliverable:</p>
                  <p className="text-sm text-slate-700 dark:text-slate-300">{week.deliverable}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* One-on-One Mentorship Section */}
      <section className="py-28 px-4 sm:px-6 bg-white  dark:backdrop-blur-xl dark:bg-white/5 dark:border dark:border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block text-[#39894c] font-bold text-sm uppercase tracking-wider mb-4">Personalized Guidance</span>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight">One-on-One Mentorship</h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                Every week, you'll have a dedicated one-on-one mentorship session with <span className="font-bold text-[#39894c]">Salman Khan</span>, where 2-3 students receive personalized guidance, feedback, and career advice.
              </p>
              <div className="space-y-4">
                {[
                  "Personalized career guidance and goal setting",
                  "Individual feedback on your progress and development",
                  "Tailored advice for your specific career path",
                  "Direct access to industry insights and expertise",
                  "Support in overcoming personal challenges"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#39894c] flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 size={16} className="text-white" />
                    </div>
                    <p className="text-slate-700 dark:text-slate-300">{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-[#2d5f3d] rounded-2xl p-8 text-white"
            >
              <div className="text-center mb-6">
                <div className="w-24 h-24 rounded-full bg-white/10 flex items-center justify-center font-bold text-4xl mx-auto mb-4">
                  SK
                </div>
                <h3 className="text-2xl font-bold mb-2">Salman Khan</h3>
                <p className="text-white/80">Lead Mentor & Career Coach</p>
              </div>
              <div className="space-y-3 text-sm">
                <div className="bg-white/10 rounded-lg p-4">
                  <p className="font-semibold mb-1">Session Format</p>
                  <p className="text-white/80">Weekly 1-hour sessions with 2-3 students</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <p className="font-semibold mb-1">Focus Areas</p>
                  <p className="text-white/80">Career planning, skill development, and personal growth</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <p className="font-semibold mb-1">Commitment</p>
                  <p className="text-white/80">6 weeks of dedicated mentorship throughout training</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Industry Internship Section */}
      <section className="py-28 px-4 sm:px-6 bg-slate-50  dark:backdrop-blur-xl dark:bg-white/5 dark:border dark:border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="inline-block text-[#39894c] font-bold text-sm uppercase tracking-wider mb-4">Weeks 7-12</span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight">6-Week Industry Internship</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">Apply your learning in real-world settings with hands-on industry experience</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white  rounded-2xl p-8 border border-slate-200 dark:border-slate-800 dark:backdrop-blur-xl dark:bg-white/5 dark:border dark:border-white/10"
            >
              <div className="w-16 h-16 rounded-2xl bg-[#39894c]/10 text-[#39894c] flex items-center justify-center mb-6">
                <Rocket size={32} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Real-World Experience</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                After completing the 6-week training, you'll be placed in a 6-week industry internship where you'll apply everything you've learned in a professional environment.
              </p>
              <ul className="space-y-3">
                {[
                  "Work on real projects with industry professionals",
                  "Apply your training in practical scenarios",
                  "Build your professional portfolio",
                  "Gain valuable industry connections",
                  "Receive mentorship from industry experts"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-[#39894c] mt-0.5 shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white  rounded-2xl p-8 border border-slate-200 dark:border-slate-800 dark:backdrop-blur-xl dark:bg-white/5 dark:border dark:border-white/10"
            >
              <div className="w-16 h-16 rounded-2xl bg-[#39894c]/10 text-[#39894c] flex items-center justify-center mb-6">
                <Target size={32} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Internship Benefits</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                The internship phase is designed to bridge the gap between training and full-time employment, giving you the confidence and experience employers look for.
              </p>
              <ul className="space-y-3">
                {[
                  "Certificate of completion from host organization",
                  "Professional references for future opportunities",
                  "Potential for full-time job offers",
                  "Expanded professional network",
                  "Real-world problem-solving experience"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-[#39894c] mt-0.5 shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Facilitators & Mentors */}
      <section className="py-28 px-4 sm:px-6 bg-white  dark:backdrop-blur-xl dark:bg-white/5 dark:border dark:border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="inline-block text-[#39894c] font-bold text-sm uppercase tracking-wider mb-4">Expert Guidance</span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight">Facilitators & Mentors</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">Learn from industry leaders and experienced professionals who will guide your journey</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Sipehre Shamsi", role: "Lead Facilitator", expertise: "Career Development & Professional Growth" },
              { name: "Aimen Shahid", role: "Program Facilitator", expertise: "Communication & Soft Skills" },
              { name: "Frasat Tanveer", role: "Industry Mentor", expertise: "Corporate Readiness & Workplace Skills" },
              { name: "Dr. Ahmad", role: "Academic Advisor", expertise: "Research & Academic Excellence" },
              { name: "Ubaid Afzal", role: "Career Coach", expertise: "Job Search & Interview Preparation" },
              { name: "Dr. Hammad Armaghan", role: "Technical Mentor", expertise: "Technology & Innovation" },
              { name: "Rameen Anwar", role: "Branding Specialist", expertise: "Personal Branding & Digital Presence" },
              { name: "Awais Khan", role: "Networking Coach", expertise: "Professional Networking & Connections" }
            ].map((mentor, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.5 }}
                className="bg-slate-50  rounded-2xl p-6 border border-slate-200 dark:border-slate-800 hover:shadow-xl transition-all dark:backdrop-blur-xl dark:bg-white/5 dark:border dark:border-white/10"
              >
                <div className="w-16 h-16 rounded-full bg-[#39894c] text-white flex items-center justify-center font-bold text-2xl mb-4">
                  {mentor.name.split(' ').map(n => n[0]).join('')}
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
      <section className="py-28 px-4 sm:px-6 bg-[#2d5f3d] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl dark:backdrop-blur-xl dark:bg-white/5 dark:border dark:border-white/10"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl dark:backdrop-blur-xl dark:bg-white/5 dark:border dark:border-white/10"></div>
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
              This program is designed for university students and fresh graduates ready to transform into industry-ready professionals through intensive training and real-world experience.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "University students in their final years preparing for the job market",
              "Fresh graduates seeking to enhance employability and career readiness",
              "Young professionals wanting to transition into corporate environments",
              "Individuals committed to 12 weeks of intensive personal and professional growth",
              "Those ready to participate in Monday/Thursday sessions plus weekly mentorship",
              "Aspiring professionals eager to gain 6 weeks of industry internship experience"
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="flex items-start gap-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-colors dark:backdrop-blur-xl dark:bg-white/5 dark:border dark:border-white/10"
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
              Complete the program and receive: Professional Resume, Optimized LinkedIn Profile, Industry Internship Certificate, and LaunchPad Completion Certificate
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-28 px-4 sm:px-6 bg-white  relative overflow-hidden dark:backdrop-blur-xl dark:bg-white/5 dark:border dark:border-white/10">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#2d5f3d] rounded-3xl p-12 lg:p-16 shadow-2xl"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
              Ready to Transform Your Career?
            </h2>
            <p className="text-xl text-white/90 mb-10 font-medium max-w-2xl mx-auto">
              Applications for the next cohort are now open. Limited to 25 students. Join Himmatkaar LaunchPad and transform from student to professional in 12 weeks.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSdLfYvAZc0W6J53bdxLtlJCSv-uM40bJG22C9POuPZVa56BlQ/viewform?usp=dialog" target="_blank" rel="noopener noreferrer">
                <button className="bg-white text-[#2d5f3d] px-6 sm:px-10 py-4 sm:py-5 rounded-xl font-bold text-xl hover:scale-105 transition-transform shadow-xl inline-flex items-center gap-2 dark:backdrop-blur-xl dark:bg-white/5 dark:border dark:border-white/10">
                  Start Application <ArrowRight size={24} />
                </button>
              </a>
              <Link href="/contact">
                <button className="bg-white/10 backdrop-blur-sm text-white px-6 sm:px-10 py-4 sm:py-5 rounded-xl font-bold text-xl hover:bg-white/20 transition-all border-2 border-white/30 dark:backdrop-blur-xl dark:bg-white/5 dark:border dark:border-white/10">
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
