'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CountUp } from '@/components/animations/CountUp';

interface Stat {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
}

interface StatsBarProps {
  stats: Stat[];
}

export const StatsBar: React.FC<StatsBarProps> = ({ stats }) => {
  return (
    <section className="py-20 bg-[var(--color-courage-green)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center text-white"
        >
          {stats.map((stat, index) => (
            <div key={index}>
              <p className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-3 font-[var(--font-display)]">
                <CountUp
                  end={stat.value}
                  duration={2}
                  suffix={stat.suffix}
                  prefix={stat.prefix}
                />
              </p>
              <p className="text-sm sm:text-lg font-semibold text-[var(--color-courage-gold)] font-[var(--font-body)]">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

