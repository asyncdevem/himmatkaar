"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TestimonialCarousel from "@/components/TestimonialCarousel";

const testimonials = [
  {
    name: "Ahmed Khan",
    role: "Software Engineer at Tech Corp",
    location: "Karachi",
    image: "/himmatkaar-logo.jpg",
    text: "HimmatKaar transformed my career. The fellowship taught me not just technical skills, but how to think critically and communicate effectively. Within 2 months of completing the program, I landed my dream job at a leading tech company!",
    rating: 5
  },
  {
    name: "Fatima Ali",
    role: "Marketing Manager",
    location: "Lahore",
    image: "/himmatkaar-logo.jpg",
    text: "The confidence I gained through HimmatKaar is invaluable. The public speaking sessions and resume workshops prepared me for real-world challenges. I'm now leading a team of 10 people and couldn't be happier!",
    rating: 5
  },
  {
    name: "Hassan Raza",
    role: "Data Analyst",
    location: "Islamabad",
    image: "/himmatkaar-logo.jpg",
    text: "Coming from a small town, I never thought I could compete with city students. HimmatKaar showed me that with the right mindset and skills, anything is possible. The mentorship and community support were incredible. Forever grateful!",
    rating: 5
  },
  {
    name: "Ayesha Malik",
    role: "Product Designer",
    location: "Faisalabad",
    image: "/himmatkaar-logo.jpg",
    text: "The fellowship's focus on lifelong learning changed my perspective. I learned how to learn, which has been crucial in my fast-paced design career. The skills I gained are applicable to every aspect of my professional life.",
    rating: 5
  },
  {
    name: "Ali Hussain",
    role: "Business Analyst",
    location: "Multan",
    image: "/himmatkaar-logo.jpg",
    text: "HimmatKaar didn't just teach me skills; it gave me a community of like-minded individuals. The networking opportunities and peer learning were as valuable as the formal curriculum. Highly recommend to everyone!",
    rating: 5
  },
  {
    name: "Sara Ahmed",
    role: "HR Specialist",
    location: "Peshawar",
    image: "/himmatkaar-logo.jpg",
    text: "The interview preparation and professional communication modules were game-changers. I went from being nervous in interviews to confidently presenting myself. Got multiple job offers within weeks of graduation!",
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold text-gray-900 mb-6"
          >
            Success <span className="text-[#3a8a4d]">Stories</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-700 max-w-3xl mx-auto"
          >
            Hear from our fellows who transformed their careers through HimmatKaar
          </motion.p>
        </div>
      </section>

      {/* Carousel */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <TestimonialCarousel />
        </div>
      </section>

      {/* Grid Testimonials */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-gray-900 text-center mb-16"
          >
            More Success Stories
          </motion.h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-gray-50 rounded-2xl p-6 shadow-lg"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-[#3a8a4d] fill-[#3a8a4d]" size={20} />
                  ))}
                </div>
                <Quote className="text-[#3a8a4d] mb-3" size={32} />
                <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#3a8a4d]">
                    <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                    <p className="text-gray-500 text-xs">{testimonial.location}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 px-6 bg-[#17431f] text-white">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-16"
          >
            Fellow Satisfaction
          </motion.h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { number: "92%", label: "Would Recommend" },
              { number: "88%", label: "Completion Rate" },
              { number: "95%", label: "Satisfaction Score" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="text-center"
              >
                <div className="text-6xl font-bold text-[#a3caad] mb-3">{stat.number}</div>
                <div className="text-xl">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
