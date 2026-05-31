"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

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

export default function EventsSection() {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchEvents() {
      try {
        const response = await fetch('/api/events?limit=3&status=upcoming');
        const data = await response.json();
        
        if (response.ok) {
          setEvents(data.events || []);
        } else {
          setError(data.error || 'Failed to fetch events');
        }
      } catch (err) {
        console.error('Error fetching events:', err);
        setError('Failed to load events');
      } finally {
        setLoading(false);
      }
    }

    fetchEvents();
  }, []);

  // Fallback events if no events in database
  const fallbackEvents = [
    { 
      id: '1',
      title: "Youth Leadership Summit", 
      image: "/event-leadership.jpg", 
      date: "2026-03-25",
      time: "09:00 AM",
      location: "Faisalabad",
      type: "Summit",
      description: "Join us for an inspiring leadership summit",
      status: "upcoming"
    },
    { 
      id: '2',
      title: "Innovation Workshop", 
      image: "/event-workshop.jpg", 
      date: "2026-04-10",
      time: "02:00 PM",
      location: "Faisalabad",
      type: "Workshop",
      description: "Learn innovative skills and techniques",
      status: "upcoming"
    },
    { 
      id: '3',
      title: "Community Open House", 
      image: "/event-openhouse.jpg", 
      date: "2026-04-20",
      time: "10:00 AM",
      location: "Faisalabad",
      type: "Open House",
      description: "Meet the community and explore opportunities",
      status: "upcoming"
    }
  ];

  const displayEvents = events.length > 0 ? events : fallbackEvents;

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
  };

  return (
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-[#39894c] font-bold text-base uppercase tracking-wider mb-4">Events</span>
          <h2 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-4">Invent Your Future With Us</h2>
          <p className="text-slate-600 text-xl max-w-2xl mx-auto">Join our upcoming events and connect with like-minded changemakers</p>
        </motion.div>

        {loading ? (
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-slate-100  rounded-2xl h-96 animate-pulse"></div>
            ))}
          </div>
        ) : error ? (
          <div className="text-center py-12">
            <p className="text-slate-600 mb-4">{error}</p>
            <p className="text-sm text-slate-500">Showing default events</p>
          </div>
        ) : null}

        <div className="grid md:grid-cols-3 gap-8">
          {displayEvents.slice(0, 3).map((event, idx) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group bg-white  rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border border-slate-100"
            >
              <div className="relative overflow-hidden">
                <Image 
                  src={event.image} 
                  alt={event.title} 
                  width={400}
                  height={250}
                  className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500" 
                />
                <div className="absolute top-4 right-4 bg-[#39894c] text-white px-3 py-1 rounded-full text-xs font-bold">
                  {event.status === 'upcoming' ? 'Upcoming' : event.status}
                </div>
              </div>
              <div className="p-6">
                <p className="text-base text-[#39894c] font-semibold mb-2">{formatDate(event.date)}</p>
                <h3 className="text-2xl font-bold mb-4 text-slate-900">{event.title}</h3>
                <Link href="/events">
                  <button className="text-[#39894c] font-semibold text-lg hover:gap-2 flex items-center gap-1 transition-all group">
                    Event Details <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Events Link */}
        <div className="text-center mt-12">
          <Link href="/events">
            <button className="inline-flex items-center gap-2 px-8 py-4 bg-[#39894c] hover:bg-[#2d5f3d] text-white text-lg font-semibold rounded-lg transition-colors shadow-lg">
              View All Events
              <ArrowRight size={20} />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

