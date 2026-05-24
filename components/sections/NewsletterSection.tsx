'use client';

import React from 'react';
import { motion } from 'framer-motion';
import NewsletterForm from '@/components/NewsletterForm';

export const NewsletterSection: React.FC = () => {
  return (
    <section className="py-28 bg-[var(--color-courage-green)]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <h2 className="text-4xl lg:text-[40px] font-bold text-white mb-4 font-[var(--font-display)]">
            Stay Updated
          </h2>
          <p className="text-white/90 text-lg font-[var(--font-body)]">
            Subscribe to our newsletter for the latest news, events, and opportunities
          </p>
        </motion.div>

        {/* Newsletter Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="max-w-md mx-auto"
        >
          <NewsletterForm />
        </motion.div>
      </div>
    </section>
  );
};
