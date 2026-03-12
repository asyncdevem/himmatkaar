"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, MapPin, Users, Clock, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function UpcomingEvents() {
  const upcomingEvents = [
    {
      title: "Startup Pitch Competition 2026",
      date: "March 25, 2026",
      time: "10:00 AM - 5:00 PM",
      location: "Karachi Expo Center",
      attendees: "Expected 600+",
      image: "/event-leadership.jpg",
      description: "Compete for seed funding and mentorship opportunities. Present your startup idea to leading investors and industry experts.",
      status: "Registration Open"
    },
    {
      title: "Tech Skills Bootcamp",
      date: "April 10, 2026",
      time: "9:00 AM - 6:00 PM",
      location: "Lahore Innovation Hub",
      attendees: "Limited to 150",
      image: "/event-workshop.jpg",
      description: "Intensive 3-day bootcamp covering web development, mobile apps, and AI fundamentals with hands-on projects.",
      status: "Early Bird"
    },
    {
      title: "Social Impact Summit",
      date: "April 20, 2026",
      time: "2:00 PM - 8:00 PM",
      location: "Islamabad Convention Hall",
      attendees: "Expected 400+",
      image: "/event-openhouse.jpg",
      description: "Join social entrepreneurs and changemakers to discuss sustainable solutions for community challenges.",
      status: "Coming Soon"
    }
  ];

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
            <span className="inline-block text-[#39894c] font-bold text-sm uppercase tracking-wider mb-4">What's Next</span>
            <h1 className="text-4xl lg:text-6xl font-extrabold mb-6 text-slate-900 dark:text-white">
              Upcoming <span className="text-[#39894c]">Events</span>
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              Don't miss out on these exciting opportunities to learn, network, and grow with Himmatkaar.
            </p>
          </motion.div>
        </section>

        {/* Events Grid */}
        <section className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="group bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border border-slate-100 dark:border-slate-800"
              >
                <div className="relative overflow-hidden h-56">
                  <Image 
                    src={event.image} 
                    alt={event.title} 
                    width={400}
                    height={250}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                  />
                  <div className="absolute top-4 right-4 bg-[#39894c] text-white px-3 py-1 rounded-full text-xs font-bold">
                    {event.status}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">{event.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed text-sm">{event.description}</p>
                  
                  <div className="space-y-2 mb-6">
                    <p className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                      <Calendar size={16} className="text-[#39894c]" />
                      {event.date}
                    </p>
                    <p className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                      <Clock size={16} className="text-[#39894c]" />
                      {event.time}
                    </p>
                    <p className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                      <MapPin size={16} className="text-[#39894c]" />
                      {event.location}
                    </p>
                    <p className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                      <Users size={16} className="text-[#39894c]" />
                      {event.attendees}
                    </p>
                  </div>

                  <Link href="/register">
                    <button className="w-full bg-[#39894c] text-white py-3 rounded-lg font-bold hover:bg-[#2d6f3d] transition-colors flex items-center justify-center gap-2">
                      Register Now <ArrowRight size={18} />
                    </button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="max-w-4xl mx-auto px-6 mt-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-slate-50 dark:bg-slate-900 rounded-3xl p-12 text-center border border-slate-200 dark:border-slate-800"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-slate-900 dark:text-white">Stay Updated</h2>
            <p className="text-lg mb-8 text-slate-600 dark:text-slate-400">
              Subscribe to our newsletter to get notified about upcoming events
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 px-5 py-4 rounded-lg border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-[#39894c] focus:outline-none"
              />
              <button className="bg-[#39894c] text-white px-8 py-4 rounded-lg font-bold hover:bg-[#2d6f3d] transition-colors">
                Subscribe
              </button>
            </div>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
