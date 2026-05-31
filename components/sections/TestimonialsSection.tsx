'use client';

import React from 'react';
import { motion } from 'framer-motion';
import TestimonialCarousel from '@/components/TestimonialCarousel';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-28 bg-[var(--color-deep-navy)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-[var(--color-courage-gold)] font-bold text-base uppercase tracking-wider mb-4 font-[var(--font-body)]">
            Testimonials
          </span>
          <h2 className="text-4xl lg:text-[40px] font-bold text-white mb-4 font-[var(--font-display)]">
            What Our Members Say
          </h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto font-[var(--font-body)]">
            Hear from the changemakers who are making a difference
          </p>
        </motion.div>

        {/* Testimonial Carousel */}
        <TestimonialCarousel />
      </div>
    </section>
  );
};

