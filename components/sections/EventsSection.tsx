'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { EventCard } from '@/components/ui/EventCard';

interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  image: string;
}

export const EventsSection: React.FC = () => {
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
        setEvents([]);
      } finally {
        setLoading(false);
      }
    }

    fetchEvents();
  }, []);

  return (
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-[var(--color-courage-green)] font-bold text-base uppercase tracking-wider mb-4 font-[var(--font-body)]">
            Happenings
          </span>
          <h2 className="text-4xl lg:text-[40px] font-bold text-[var(--color-deep-navy)] mb-4 font-[var(--font-display)]">
            Upcoming Events
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto font-[var(--font-body)]">
            Join us for exciting events and opportunities
          </p>
        </motion.div>

        {/* Events Grid */}
        {loading ? (
          <div className="text-center py-12">
            <p className="text-gray-600 font-[var(--font-body)]">Loading events...</p>
          </div>
        ) : error ? (
          <div className="text-center py-12">
            <p className="text-red-600 font-[var(--font-body)]">{error}</p>
          </div>
        ) : events.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600 font-[var(--font-body)]">
              No upcoming events at the moment. Check back soon!
            </p>
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-8">
            {events.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <EventCard
                  image={event.image}
                  title={event.title}
                  date={new Date(event.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                  description={event.description}
                />
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

