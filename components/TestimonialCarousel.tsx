"use client";

import { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Ahmed Khan",
    role: "Software Engineer",
    company: "Tech Corp",
    image: "/himmatkaar-logo.jpg",
    rating: 5,
    text: "HimmatKaar transformed my career trajectory completely. The fellowship taught me not just technical skills, but how to think critically and communicate effectively. Within 2 months of completing the program, I landed my dream job at a leading tech company!"
  },
  {
    name: "Fatima Ali",
    role: "Marketing Manager",
    company: "Digital Solutions",
    image: "/himmatkaar-logo.jpg",
    rating: 5,
    text: "The confidence I gained through HimmatKaar is invaluable. The public speaking sessions and resume workshops prepared me for real-world challenges. I'm now leading a team of 10 people and couldn't be more grateful for this opportunity!"
  },
  {
    name: "Hassan Raza",
    role: "Data Analyst",
    company: "Analytics Pro",
    image: "/himmatkaar-logo.jpg",
    rating: 5,
    text: "Coming from a small town, I never thought I could compete with city students. HimmatKaar showed me that with the right mindset and skills, anything is possible. The mentorship and networking opportunities opened doors I never knew existed!"
  },
  {
    name: "Ayesha Malik",
    role: "Product Designer",
    company: "Creative Studio",
    image: "/himmatkaar-logo.jpg",
    rating: 5,
    text: "The fellowship's focus on lifelong learning changed my perspective entirely. I learned how to learn, which has been crucial in my fast-paced design career. The community support continues even after graduation. Highly recommend to everyone!"
  }
];

export default function TestimonialCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'center' });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on("select", onSelect);
    onSelect();

    // Auto-play
    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 6000);

    return () => {
      emblaApi.off("select", onSelect);
      clearInterval(interval);
    };
  }, [emblaApi]);

  return (
    <div className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="flex-[0_0_100%] md:flex-[0_0_90%] lg:flex-[0_0_80%] min-w-0 px-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative bg-gradient-to-br from-[var(--color-deep-sapphire)] to-[var(--color-deep-navy)] rounded-3xl p-10 shadow-2xl border border-[var(--color-courage-gold)]/20 overflow-hidden"
              >
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-[var(--color-courage-gold)]/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-40 h-40 bg-[var(--color-courage-green)]/10 rounded-full blur-3xl"></div>

                {/* Quote Icon */}
                <div className="relative mb-6">
                  <Quote className="text-[var(--color-courage-gold)]" size={56} strokeWidth={1.5} />
                </div>

                {/* Rating Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-[var(--color-courage-gold)] fill-[var(--color-courage-gold)]" size={20} />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-white text-lg md:text-xl leading-relaxed mb-8 font-[var(--font-body)] relative z-10">
                  "{testimonial.text}"
                </p>

                {/* Author Info */}
                <div className="flex items-center gap-5 relative z-10">
                  <div className="relative">
                    <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-[var(--color-courage-green)] shadow-lg">
                      <Image 
                        src={testimonial.image} 
                        alt={`${testimonial.name} - ${testimonial.role}`}
                        width={80}
                        height={80}
                        className="w-full h-full object-cover" 
                      />
                    </div>
                    {/* Verified Badge */}
                    <div className="absolute -bottom-1 -right-1 bg-[var(--color-courage-green)] rounded-full p-1.5 border-2 border-[var(--color-deep-navy)]">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-xl font-[var(--font-display)] mb-1">{testimonial.name}</h4>
                    <p className="text-[var(--color-courage-gold)] text-sm font-semibold font-[var(--font-body)]">{testimonial.role}</p>
                    <p className="text-white/60 text-sm font-[var(--font-body)]">{testimonial.company}</p>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={scrollPrev}
        className="absolute left-0 md:-left-6 top-1/2 -translate-y-1/2 bg-[var(--color-courage-green)] hover:bg-[var(--color-courage-green)]/80 text-white rounded-full p-4 shadow-2xl transition-all z-10 hover:scale-110"
        aria-label="Previous testimonial"
      >
        <ChevronLeft size={28} strokeWidth={2.5} />
      </button>
      <button
        onClick={scrollNext}
        className="absolute right-0 md:-right-6 top-1/2 -translate-y-1/2 bg-[var(--color-courage-green)] hover:bg-[var(--color-courage-green)]/80 text-white rounded-full p-4 shadow-2xl transition-all z-10 hover:scale-110"
        aria-label="Next testimonial"
      >
        <ChevronRight size={28} strokeWidth={2.5} />
      </button>

      {/* Dots Indicator */}
      <div className="flex justify-center gap-3 mt-10">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => emblaApi && emblaApi.scrollTo(index)}
            className={`h-2.5 rounded-full transition-all ${
              index === selectedIndex 
                ? "bg-[var(--color-courage-gold)] w-12" 
                : "bg-white/30 w-2.5 hover:bg-white/50"
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

