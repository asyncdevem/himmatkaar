'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { TrackCard } from '@/components/ui/TrackCard';

interface Track {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface ProgramTracksSectionProps {
  tracks: Track[];
}

export const ProgramTracksSection: React.FC<ProgramTracksSectionProps> = ({
  tracks,
}) => {
  return (
    <section className="py-28 bg-[var(--color-deep-navy)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-[var(--color-courage-gold)] font-bold text-base uppercase tracking-wider mb-4 font-[var(--font-body)]">
            Programs
          </span>
          <h2 className="text-4xl lg:text-[40px] font-bold text-white mb-4 font-[var(--font-display)]">
            Our Three Tracks
          </h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto font-[var(--font-body)]">
            Explore our initiatives designed to empower your journey
          </p>
        </motion.div>

        {/* Track Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {tracks.map((track, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <TrackCard
                icon={track.icon}
                title={track.title}
                description={track.description}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

