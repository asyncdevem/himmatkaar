"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, MapPin, Users, ArrowRight, Loader2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  type: string;
  image: string;
  status: string;
}

export default function Events() {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchEvents() {
      try {
        const response = await fetch('/api/events?status=past', { cache: 'no-store' });
        const data = await response.json();
        
        if (response.ok) {
          setEvents(data.events || []);
        }
      } catch (err) {
        console.error('Error fetching events:', err);
      } finally {
        setLoading(false);
      }
    }

    fetchEvents();
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
  };

  const fallbackEvents = [
    {
      id: '1',
      title: "Youth Leadership Summit 2025",
      date: "2025-12-15",
      location: "Karachi Convention Center",
      attendees: "500+",
      image: "/event-leadership.jpg",
      description: "A transformative summit bringing together young leaders from across Pakistan to discuss innovation and social impact.",
      type: "Summit",
      time: "09:00 AM",
      status: "past"
    },
    {
      id: '2',
      title: "Innovation Workshop Series",
      date: "2025-11-20",
      location: "Lahore Tech Hub",
      attendees: "200+",
      image: "/event-workshop.jpg",
      description: "Hands-on workshops focused on design thinking, product development, and entrepreneurship skills.",
      type: "Workshop",
      time: "02:00 PM",
      status: "past"
    },
    {
      id: '3',
      title: "Community Open House",
      date: "2025-10-10",
      location: "Islamabad Community Center",
      attendees: "300+",
      image: "/event-openhouse.jpg",
      description: "An open house event showcasing student projects and connecting with community partners.",
      type: "Open House",
      time: "10:00 AM",
      status: "past"
    }
  ];

  const displayEvents = events.length > 0 ? events : fallbackEvents;

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main className="pt-32 pb-24">
        {/* Header */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 mb-16">
          <Link href="/" className="inline-flex items-center gap-2 text-[#39894c] hover:underline mb-8 font-semibold">
            <ArrowLeft size={20} /> Back to Home
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block text-[#39894c] font-bold text-sm uppercase tracking-wider mb-4">Past Events</span>
            <h1 className="text-4xl lg:text-6xl font-extrabold mb-6 text-slate-900">
              Our <span className="text-[#39894c]">Events</span> Journey
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              Explore the impactful events we've organized to empower youth and build communities across Pakistan.
            </p>
          </motion.div>
        </section>

        {/* Loading State */}
        {loading ? (
          <section className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex items-center justify-center h-64">
              <Loader2 className="animate-spin text-[#39894c]" size={48} />
            </div>
          </section>
        ) : (
          <>
            {/* Events Grid */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {displayEvents.map((event, idx) => (
                  <motion.div
                    key={event.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1, duration: 0.5 }}
                    className="group bg-white  rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border border-slate-100"
                  >
                    <div className="relative overflow-hidden h-56">
                      <Image 
                        src={event.image} 
                        alt={event.title} 
                        width={400}
                        height={250}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                      />
                      <div className="absolute top-4 right-4 bg-slate-900/80 text-white px-3 py-1 rounded-full text-xs font-bold backdrop-blur-sm">
                        Past Event
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-3 text-slate-900">{event.title}</h3>
                      <p className="text-slate-600 mb-4 leading-relaxed text-sm">{event.description}</p>
                      
                      <div className="space-y-2 mb-4">
                        <p className="flex items-center gap-2 text-sm text-slate-600">
                          <Calendar size={16} className="text-[#39894c]" />
                          {formatDate(event.date)}
                        </p>
                        <p className="flex items-center gap-2 text-sm text-slate-600">
                          <MapPin size={16} className="text-[#39894c]" />
                          {event.location}
                        </p>
                        {(event as any).attendees && (
                          <p className="flex items-center gap-2 text-sm text-slate-600">
                            <Users size={16} className="text-[#39894c]" />
                            {(event as any).attendees} Attendees
                          </p>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>
          </>
        )}

        {/* CTA */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 mt-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#2d5f3d] rounded-3xl p-12 text-center text-white shadow-2xl"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Don't Miss Our Next Event</h2>
            <p className="text-lg mb-8 text-white/90">
              Check out our upcoming events and be part of the change
            </p>
            <Link href="/events/upcoming">
              <button className="bg-white text-[#2d5f3d] px-6 sm:px-10 py-4 rounded-lg font-bold text-lg hover:scale-105 transition-transform shadow-xl inline-flex items-center gap-2">
                View Upcoming Events <ArrowRight size={20} />
              </button>
            </Link>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
}



