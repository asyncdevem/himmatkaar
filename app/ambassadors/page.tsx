"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Linkedin, MapPin } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Ambassadors() {
  const ambassadors = [
    {
      name: "Zainab Tariq",
      role: "Campus Ambassador",
      city: "Karachi",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400",
      bio: "Leading Himmatkaar initiatives at universities across Karachi",
      linkedin: "#"
    },
    {
      name: "Ali Raza",
      role: "Campus Ambassador",
      city: "Lahore",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=400",
      bio: "Connecting students with opportunities in Lahore region",
      linkedin: "#"
    },
    {
      name: "Maryam Sheikh",
      role: "Campus Ambassador",
      city: "Islamabad",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400",
      bio: "Driving youth engagement in the capital region",
      linkedin: "#"
    },
    {
      name: "Usman Khalid",
      role: "Campus Ambassador",
      city: "Faisalabad",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400",
      bio: "Expanding Himmatkaar's reach in Punjab's industrial hub",
      linkedin: "#"
    },
    {
      name: "Hira Jamil",
      role: "Campus Ambassador",
      city: "Multan",
      image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&q=80&w=400",
      bio: "Building youth networks in South Punjab",
      linkedin: "#"
    },
    {
      name: "Hamza Iqbal",
      role: "Campus Ambassador",
      city: "Peshawar",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400",
      bio: "Empowering youth in Khyber Pakhtunkhwa",
      linkedin: "#"
    },
    {
      name: "Sana Malik",
      role: "Campus Ambassador",
      city: "Quetta",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400",
      bio: "Representing Himmatkaar in Balochistan",
      linkedin: "#"
    },
    {
      name: "Fahad Ahmed",
      role: "Campus Ambassador",
      city: "Hyderabad",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400",
      bio: "Growing the community in Sindh region",
      linkedin: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0f0b]">
      <Navbar />

      <main className="pt-32 pb-24">
        {/* Header */}
        <section className="max-w-7xl mx-auto px-6 mb-16">
          <Link href="/team" className="inline-flex items-center gap-2 text-[#39894c] hover:underline mb-8 font-semibold">
            <ArrowLeft size={20} /> Back to Team
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block text-[#39894c] font-bold text-sm uppercase tracking-wider mb-4">Campus Ambassadors</span>
            <h1 className="text-4xl lg:text-6xl font-extrabold mb-6 text-slate-900 dark:text-white">
              Our <span className="text-[#39894c]">Ambassadors</span> Network
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              Meet our passionate campus ambassadors representing Himmatkaar across Pakistan's major cities and universities.
            </p>
          </motion.div>
        </section>

        {/* Ambassadors Grid */}
        <section className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {ambassadors.map((ambassador, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08, duration: 0.5 }}
                className="group bg-slate-50 dark:bg-slate-900 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 hover:shadow-2xl transition-all"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={ambassador.image}
                    alt={ambassador.name}
                    width={400}
                    height={400}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-[#2d5f3d]/40"></div>
                  
                  {/* City Badge */}
                  <div className="absolute top-4 right-4 bg-[#39894c] text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                    <MapPin size={12} />
                    {ambassador.city}
                  </div>

                  {/* LinkedIn Link */}
                  <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <a 
                      href={ambassador.linkedin} 
                      className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-[#39894c] hover:text-white transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin size={18} />
                    </a>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">{ambassador.name}</h3>
                  <p className="text-[#39894c] font-semibold mb-3 text-sm">{ambassador.role}</p>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">{ambassador.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Become Ambassador CTA */}
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
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Become a Campus Ambassador</h2>
              <p className="text-lg mb-8 text-white/90">
                Join our network and represent Himmatkaar at your university
              </p>
              <Link href="/contact">
                <button className="bg-white text-[#2d5f3d] px-10 py-4 rounded-lg font-bold text-lg hover:scale-105 transition-transform shadow-xl">
                  Apply Now
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
