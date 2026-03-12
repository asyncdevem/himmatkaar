"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Linkedin } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Team() {
  const [showAllTeam, setShowAllTeam] = useState(false);

  const coreTeam = [
    {
      name: "Ahmed Khan",
      role: "Founder & CEO",
      image: "/team/founder.jpeg",
      bio: "Visionary leader with 15+ years of experience in youth empowerment",
      linkedin: "#"
    },
    {
      name: "Fatima Ali",
      role: "Co-Founder",
      image: "/team/cofounder.png",
      bio: "Expert in program development and community engagement",
      linkedin: "#"
    },
    {
      name: "Hassan Malik",
      role: "Creative & Graphics Lead",
      image: "/team/creative-and graphics-lead.png",
      bio: "Creative designer bringing visual excellence to our brand",
      linkedin: "#"
    },
    {
      name: "Ayesha Raza",
      role: "Community Manager",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=400",
      bio: "Building and nurturing our vibrant community of changemakers",
      linkedin: "#"
    },
    {
      name: "Bilal Ahmed",
      role: "Technical Lead",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400",
      bio: "Technology expert driving digital innovation",
      linkedin: "#"
    },
    {
      name: "Sara Hussain",
      role: "Marketing Director",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=400",
      bio: "Creative strategist amplifying our impact and reach",
      linkedin: "#"
    },
    {
      name: "Zain Abbas",
      role: "Partnership Manager",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400",
      bio: "Building strategic partnerships to expand our reach",
      linkedin: "#"
    },
    {
      name: "Nida Malik",
      role: "Content Strategist",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400",
      bio: "Crafting compelling narratives that inspire action",
      linkedin: "#"
    }
  ];

  const ambassadors = [
    {
      name: "Zainab Tariq",
      role: "Campus Ambassador - Karachi",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400",
      bio: "Leading Himmatkaar initiatives at universities across Karachi",
      linkedin: "#"
    },
    {
      name: "Ali Raza",
      role: "Campus Ambassador - Lahore",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=400",
      bio: "Connecting students with opportunities in Lahore region",
      linkedin: "#"
    },
    {
      name: "Maryam Sheikh",
      role: "Campus Ambassador - Islamabad",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400",
      bio: "Driving youth engagement in the capital region",
      linkedin: "#"
    },
    {
      name: "Usman Khalid",
      role: "Campus Ambassador - Faisalabad",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400",
      bio: "Expanding Himmatkaar's reach in Punjab's industrial hub",
      linkedin: "#"
    }
  ];

  const displayedTeam = showAllTeam ? [...coreTeam, ...ambassadors] : coreTeam;

  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0f0b]">
      <Navbar />

      <main className="pt-32 pb-24">
        {/* Header */}
        <section className="max-w-7xl mx-auto px-6 mb-16">
          <Link href="/" className="inline-flex items-center gap-2 text-[#39894c] hover:underline mb-8 font-semibold">
            <ArrowLeft size={20} /> Back to Home
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block text-[#39894c] font-bold text-sm uppercase tracking-wider mb-4">Our Team</span>
            <h1 className="text-4xl lg:text-6xl font-extrabold mb-6 text-slate-900 dark:text-white">
              Meet the People Behind <span className="text-[#39894c]">Himmatkaar</span>
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              Our dedicated team of professionals is committed to empowering youth across Pakistan and creating lasting impact in communities.
            </p>
          </motion.div>
        </section>

        {/* Core Team Section */}
        <section className="max-w-7xl mx-auto px-6 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Core Team</h2>
            <p className="text-slate-600 dark:text-slate-400">Leadership driving our mission forward</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreTeam.map((member, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="group bg-slate-50 dark:bg-slate-900 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 hover:shadow-2xl transition-all"
              >
                {/* Image */}
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={400}
                    height={400}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40"></div>
                  
                  {/* LinkedIn Link */}
                  <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <a 
                      href={member.linkedin} 
                      className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-[#39894c] hover:text-white transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin size={18} />
                    </a>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">{member.name}</h3>
                  <p className="text-[#39894c] font-semibold mb-3">{member.role}</p>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Ambassadors Preview Section */}
        <section className="max-w-7xl mx-auto px-6 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 flex justify-between items-end"
          >
            <div>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Campus Ambassadors</h2>
              <p className="text-slate-600 dark:text-slate-400">Our representatives spreading impact across Pakistan</p>
            </div>
            <Link href="/ambassadors" className="text-[#39894c] font-semibold hover:underline flex items-center gap-1">
              View All Ambassadors <ArrowLeft size={18} className="rotate-180" />
            </Link>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {ambassadors.slice(0, 4).map((member, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="group bg-slate-50 dark:bg-slate-900 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 hover:shadow-2xl transition-all"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={400}
                    height={400}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-[#2d5f3d]/40"></div>
                  
                  {/* LinkedIn Link */}
                  <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <a 
                      href={member.linkedin} 
                      className="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center hover:bg-[#39894c] hover:text-white transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin size={16} />
                    </a>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{member.name}</h3>
                  <p className="text-[#39894c] font-semibold mb-2 text-sm">{member.role}</p>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Join Team CTA */}
        <section className="max-w-4xl mx-auto px-6 mt-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative bg-[#2d5f3d] rounded-3xl p-12 text-center text-white shadow-2xl overflow-hidden"
          >
            <div 
              className="absolute inset-0 opacity-10 bg-cover bg-center"
              style={{ backgroundImage: "url('/hero-bg.jpg')" }}
            ></div>
            <div className="relative z-10">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Want to Join Our Team?</h2>
              <p className="text-lg mb-8 text-white/90">
                We're always looking for passionate individuals who want to make a difference
              </p>
              <Link href="/contact">
                <button className="bg-white text-[#2d5f3d] px-10 py-4 rounded-lg font-bold text-lg hover:scale-105 transition-transform shadow-xl">
                  Get in Touch
                </button>
              </Link>
            </div>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
