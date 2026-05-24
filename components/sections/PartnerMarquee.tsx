'use client';

import React from 'react';
import Image from 'next/image';

interface PartnerMarqueeProps {
  logos: string[];
}

export const PartnerMarquee: React.FC<PartnerMarqueeProps> = ({ logos }) => {
  // Triple logos for truly seamless infinite scroll
  const infiniteLogos = [...logos, ...logos, ...logos];

  return (
    <div className="w-full overflow-hidden py-12 bg-[var(--color-deep-navy)] border-y border-[var(--color-courage-gold)]/20">
      <div className="relative">
        {/* Gradient Overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[var(--color-deep-navy)] to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[var(--color-deep-navy)] to-transparent z-10"></div>

        {/* Marquee Container - Continuous Animation */}
        <div className="flex animate-marquee-infinite">
          {infiniteLogos.map((logo, index) => (
            <div
              key={index}
              className="flex-shrink-0 mx-8 w-56 h-36 bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl flex items-center justify-center p-8 transition-all hover:scale-105 border border-[var(--color-courage-gold)]/10"
            >
              <div className="relative w-full h-full">
                <Image
                  src={logo}
                  alt={`Partner ${(index % logos.length) + 1}`}
                  fill
                  className="object-contain"
                  sizes="224px"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee-infinite {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }

        .animate-marquee-infinite {
          animation: marquee-infinite 40s linear infinite;
          will-change: transform;
        }

        /* Remove pause on hover for continuous animation */
      `}</style>
    </div>
  );
};
