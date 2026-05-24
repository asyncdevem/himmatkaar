'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FadeInUp } from '@/components/animations/FadeInUp';

interface AboutSectionProps {
  image: string;
  heading: string;
  description: string[];
  stats?: Array<{ value: string; label: string }>;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  image,
  heading,
  description,
  stats = [],
}) => {
  return (
    <section className="py-28 bg-[var(--color-off-white)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Image */}
          <FadeInUp>
            <div className="relative">
              {/* Green Accent Shape */}
              <div className="absolute -top-6 -left-6 w-48 h-48 bg-[var(--color-courage-green)]/20 rounded-full blur-2xl"></div>
              
              {/* Main Image */}
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={image}
                  alt="About Himmatkaar"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>

              {/* Stat Cards */}
              {stats.length > 0 && (
                <div className="mt-6 grid grid-cols-2 gap-4">
                  {stats.map((stat, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
                    >
                      <p className="text-3xl font-bold text-[var(--color-courage-green)] mb-1 font-[var(--font-display)]">
                        {stat.value}
                      </p>
                      <p className="text-sm text-gray-600 font-[var(--font-body)]">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </FadeInUp>

          {/* Right Column - Content */}
          <FadeInUp delay={0.2}>
            <div>
              <span className="inline-block text-[var(--color-courage-green)] font-bold text-base uppercase tracking-wider mb-4 font-[var(--font-body)]">
                About Us
              </span>
              
              <h2 className="text-4xl lg:text-[40px] font-bold mb-6 text-[var(--color-deep-navy)] leading-tight font-[var(--font-display)]">
                {heading}
              </h2>

              {description.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-[var(--color-deep-navy)] mb-6 leading-relaxed text-lg font-[var(--font-body)]"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </FadeInUp>
        </div>
      </div>
    </section>
  );
};
