'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { PrimaryButton } from '@/components/ui/PrimaryButton';
import { SecondaryButton } from '@/components/ui/SecondaryButton';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface HeroSectionProps {
  badge?: string;
  headline: string;
  urduHeadline?: string;
  primaryCTA: { text: string; href: string };
  secondaryCTA: { text: string; href: string };
  heroImages: string[];
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  badge = "Faisalabad's Leading Youth Empowerment Platform",
  headline,
  urduHeadline = "ہمت کار",
  primaryCTA,
  secondaryCTA,
  heroImages,
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  return (
    <section className="relative bg-gradient-to-br from-[var(--color-deep-navy)] via-[var(--color-deep-navy)] to-[var(--color-deep-sapphire)] py-16 lg:py-24 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-96 h-96 bg-[var(--color-courage-green)]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[var(--color-courage-gold)]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1 space-y-6"
          >
            {/* Badge */}
            {badge && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="inline-block"
              >
                <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-[var(--color-courage-green)]/20 backdrop-blur-sm border border-[var(--color-courage-green)]/30 rounded-full text-sm font-semibold text-[var(--color-courage-gold)] font-[var(--font-body)]">
                  ✨ {badge}
                </span>
              </motion.div>
            )}

            {/* Combined Urdu + English Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-2"
            >
              {/* Urdu Branding - Centered with English */}
              <div className="text-5xl sm:text-6xl lg:text-7xl font-bold text-[var(--color-courage-gold)] text-center lg:text-left"
                style={{ fontFamily: 'var(--font-urdu), Noto Nastaliq Urdu, serif', direction: 'rtl' }}
              >
                {urduHeadline}
              </div>

              {/* English Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-white font-[var(--font-display)] text-center lg:text-left">
                {headline}
              </h1>
            </motion.div>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl text-white/80 font-[var(--font-body)] leading-relaxed text-center lg:text-left"
            >
              Empowering youth with skills, mentorship, and opportunities to build a brighter future
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 pt-2 justify-center lg:justify-start"
            >
              <Link href={primaryCTA.href}>
                <PrimaryButton text={primaryCTA.text} />
              </Link>
              <Link href={secondaryCTA.href}>
                <SecondaryButton text={secondaryCTA.text} />
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Column - Image Carousel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2 relative"
          >
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-4 border-[var(--color-courage-green)]">
              {/* Image Carousel */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentImageIndex}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.7 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={heroImages[currentImageIndex]}
                    alt={`Himmatkaar Community ${currentImageIndex + 1}`}
                    fill
                    className="object-cover"
                    priority={currentImageIndex === 0}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation Arrows */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-3 rounded-full transition-all z-10"
                aria-label="Previous image"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-3 rounded-full transition-all z-10"
                aria-label="Next image"
              >
                <ChevronRight size={24} />
              </button>

              {/* Dots Indicator */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                {heroImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-all ${
                      index === currentImageIndex
                        ? 'bg-[var(--color-courage-gold)] w-8'
                        : 'bg-white/50 hover:bg-white/70'
                    }`}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-[var(--color-courage-gold)]/20 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[var(--color-courage-green)]/20 rounded-full blur-2xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

