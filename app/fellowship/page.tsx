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
  BookOpen,
  ArrowRight
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
};

export default function Fellowship() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-jakarta relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[40%] bg-emerald-400/20 rounded-full blur-[100px]" />
        <div className="absolute top-[30%] right-[-10%] w-[50%] h-[30%] bg-primary/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] left-[20%] w-[30%] h-[30%] bg-blue-500/10 rounded-full blur-[100px]" />
      </div>

      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-24 px-6 lg:px-12 relative z-10 flex-grow">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial="initial"
            animate="animate"
            variants={{ animate: { transition: { staggerChildren: 0.1 } } }}
          >
            <motion.div variants={fadeInUp} className="inline-block px-4 py-1.5 rounded-full bg-emerald-500/10 text-emerald-600 font-medium text-sm mb-6 border border-emerald-500/20">
              Transform Your Future
            </motion.div>
            <motion.h1 
              variants={fadeInUp} 
              className="text-5xl md:text-7xl font-extrabold text-gray-900 mb-6 tracking-tight"
            >
              Career-Prep <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-400">Fellowship</span>
            </motion.h1>
            <motion.p 
              variants={fadeInUp} 
              className="text-xl text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed"
            >
              A transformative 3-month intensive program designed to equip you with the advanced skills, strategic mindset, and unwavering confidence to launch your dream career.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex justify-center flex-wrap gap-4">
              <Link href="/contact" className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg shadow-primary/30 group">
                Apply for Cohort 8
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Program Overview - Glass Cards */}
      <section className="py-12 px-6 lg:px-12 relative z-20 -mt-16 mb-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Calendar className="w-8 h-8" />, title: "Duration", desc: "12 Weeks Intensive", color: "text-blue-500", bg: "bg-blue-50" },
              { icon: <Clock className="w-8 h-8" />, title: "Time Commitment", desc: "10-15 hrs / week", color: "text-emerald-500", bg: "bg-emerald-50" },
              { icon: <Users className="w-8 h-8" />, title: "Cohort Size", desc: "Fully interactive 50-100", color: "text-purple-500", bg: "bg-purple-50" },
              { icon: <Award className="w-8 h-8" />, title: "Certification", desc: "Recognized upon completion", color: "text-rose-500", bg: "bg-rose-50" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 lg:p-8 border border-white shadow-[0_8px_30px_rgba(0,0,0,0.04)] text-center hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all duration-300"
              >
                <div className={`w-14 h-14 mx-auto rounded-2xl ${item.bg} ${item.color} flex items-center justify-center mb-4`}>
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">{item.title}</h3>
                <p className="text-gray-500 font-medium text-sm lg:text-base">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Outcomes */}
      <section className="py-24 px-6 lg:px-12 bg-white relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">Curriculum & Growth</h2>
            <p className="text-lg text-gray-600 leading-relaxed">Everything you need to step confidently into the professional world.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <MessageSquare size={32} />, title: "Business Communication", desc: "Master clear, structured writing and effective verbal communication tailored for modern professional environments." },
              { icon: <FileText size={32} />, title: "Resume & Portfolio", desc: "Develop compelling resumes, optimized LinkedIn profiles, and stunning portfolios that reliably bypass ATS systems." },
              { icon: <Mic size={32} />, title: "Interview Mastery", desc: "Navigate behavioral and technical interviews with intensive mock sessions and personalized feedback loops." },
              { icon: <Rocket size={32} />, title: "Initiative & Leadership", desc: "Shift from a reactive to proactive mindset. Learn how to take ownership, propose solutions, and lead projects." },
              { icon: <Brain size={32} />, title: "Strategic Thinking", desc: "Enhance complex problem-solving abilities, logical structuring, and data-informed decision making." },
              { icon: <BookOpen size={32} />, title: "Adaptive Learning", desc: "Cultivate mental agility to quickly learn new tools, frameworks, and methodologies on the job." }
            ].map((outcome, index) => (
               <motion.div
                 key={index}
                 initial={{ opacity: 0, y: 40 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: index * 0.1, duration: 0.5 }}
                 className="bg-gray-50 rounded-3xl p-8 border border-gray-100 hover:border-primary/30 hover:shadow-xl transition-all duration-300 group"
               >
                 <div className="w-16 h-16 rounded-2xl bg-white text-primary flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300 group-hover:text-emerald-500">
                   {outcome.icon}
                 </div>
                 <h3 className="text-2xl font-bold text-gray-900 mb-3 tracking-tight">{outcome.title}</h3>
                 <p className="text-gray-600 leading-relaxed">{outcome.desc}</p>
               </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility Requirements */}
      <section className="py-24 px-6 lg:px-12 bg-gray-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full opacity-10">
           <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
             <defs>
               <pattern id="eligibility-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                 <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" strokeOpacity="1"/>
               </pattern>
             </defs>
             <rect width="100%" height="100%" fill="url(#eligibility-grid)" />
           </svg>
        </div>
        
        <div className="absolute top-0 right-0 w-[50%] h-[100%] bg-gradient-to-l from-primary/20 to-transparent blur-[100px] pointer-events-none" />

        <div className="max-w-5xl mx-auto relative z-10 flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-6 tracking-tight"
            >
              Who is this <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-primary">Fellowship</span> For?
            </motion.h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              We look for drive, potential, and a willingness to commit to intense personal and professional growth over the course of 3 months.
            </p>
          </div>
          
          <div className="lg:w-1/2 w-full space-y-4">
            {[
              "Currently enrolled university students (any year/major)",
              "Recent graduates aggressively seeking employment",
              "Demonstrated commitment to putting in 10-15 hours weekly",
              "Working proficiency in spoken and written English",
              "Reliable access to a computer and internet connection"
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="flex items-start gap-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-5 hover:bg-white/10 transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0 mt-0.5 text-emerald-400">
                  <CheckCircle size={20} />
                </div>
                <p className="text-lg font-medium text-gray-200">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modern CTA */}
      <section className="py-24 px-6 relative overflow-hidden flex justify-center items-center">
        {/* Dynamic Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-emerald-600 to-blue-700 opacity-90" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl md:text-6xl font-extrabold text-white mb-6 tracking-tight shadow-sm">
              Your Future Awaits.
            </h2>
            <p className="text-xl md:text-2xl text-emerald-50 mb-10 font-medium max-w-2xl mx-auto">
              Applications for Cohort 8 close soon. Don't wait for opportunity—create it.
            </p>
            <Link href="/contact" className="inline-flex items-center justify-center bg-white text-gray-900 px-10 py-5 rounded-2xl font-bold text-xl hover:scale-105 transition-transform shadow-2xl group">
               Start Application
               <ArrowRight className="ml-2 w-6 h-6 text-primary group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
