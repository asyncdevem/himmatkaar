"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Linkedin, MapPin, Loader2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface Ambassador {
  id: string;
  name: string;
  role: string;
  city: string;
  bio: string;
  image: string;
  linkedin: string;
}

export default function Ambassadors() {
  const [ambassadors, setAmbassadors] = useState<Ambassador[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAmbassadors = async () => {
      try {
        const response = await fetch('/api/ambassadors');
        const data = await response.json();
        setAmbassadors(data.ambassadors || []);
      } catch (error) {
        console.error('Error fetching ambassadors:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchAmbassadors();
  }, []);

  return (
    <div className="min-h-screen bg-white  dark:backdrop-blur-xl dark:bg-white/5 dark:border dark:border-white/10">
      <Navbar />

      <main className="pt-32 pb-24">
        {/* Header */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 mb-16">
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
        <section className="max-w-7xl mx-auto px-4 sm:px-6">
          {loading ? (
            <div className="flex items-center justify-center py-20">
              <Loader2 className="animate-spin text-[#39894c]" size={48} />
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {ambassadors.map((ambassador, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08, duration: 0.5 }}
                className="group bg-slate-50  rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 hover:shadow-2xl transition-all dark:backdrop-blur-xl dark:bg-white/5 dark:border dark:border-white/10"
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
                      className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-[#39894c] hover:text-white transition-colors dark:backdrop-blur-xl dark:bg-white/5 dark:border dark:border-white/10"
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
          )}
        </section>

        {/* Become Ambassador CTA */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 mt-24">
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
                <button className="bg-white text-[#2d5f3d] px-6 sm:px-10 py-4 rounded-lg font-bold text-lg hover:scale-105 transition-transform shadow-xl dark:backdrop-blur-xl dark:bg-white/5 dark:border dark:border-white/10">
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
