'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { OfferingCard } from '@/components/ui/OfferingCard';
import { StaggeredGrid } from '@/components/animations/StaggeredGrid';

interface Offering {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface OfferingsSectionProps {
  offerings: Offering[];
}

export const OfferingsSection: React.FC<OfferingsSectionProps> = ({
  offerings,
}) => {
  return (
    <section className="py-28 bg-[var(--color-off-white)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-[var(--color-courage-green)] font-bold text-base uppercase tracking-wider mb-4 font-[var(--font-body)]">
            What We Offer
          </span>
          <h2 className="text-4xl lg:text-[40px] font-bold text-[var(--color-deep-navy)] mb-4 font-[var(--font-display)]">
            Our Offerings
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto font-[var(--font-body)]">
            Comprehensive support to help you succeed
          </p>
        </motion.div>

        {/* Offerings Grid with Staggered Animation */}
        <StaggeredGrid
          staggerDelay={0.08}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {offerings.map((offering, index) => (
            <OfferingCard
              key={index}
              icon={offering.icon}
              title={offering.title}
              description={offering.description}
            />
          ))}
        </StaggeredGrid>
      </div>
    </section>
  );
};
