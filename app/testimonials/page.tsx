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

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
};

export default function Testimonials() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-jakarta relative overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[40%] bg-blue-400/20 rounded-full blur-[120px]" />
        <div className="absolute top-[40%] left-[-10%] w-[50%] h-[30%] bg-emerald-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[20%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[120px]" />
      </div>

      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-24 px-6 lg:px-12 relative z-10 flex-grow">
        <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial="initial"
              animate="animate"
              variants={{ animate: { transition: { staggerChildren: 0.1 } } }}
            >
              <motion.div variants={fadeInUp} className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 text-blue-600 font-medium text-sm mb-6 border border-blue-500/20">
                Community Impact
              </motion.div>
              <motion.h1
                variants={fadeInUp}
                className="text-5xl md:text-7xl font-extrabold text-gray-900 mb-6 tracking-tight"
              >
                Success <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500">Stories</span>
              </motion.h1>
              <motion.p
                variants={fadeInUp}
                className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              >
                Hear from our incredible fellows who have transformed their careers and lives through the HimmatKaar experience.
              </motion.p>
            </motion.div>
        </div>
      </section>

      {/* Main Carousel area */}
      <section className="py-16 px-6 relative z-20 -mt-10">
        <div className="max-w-6xl mx-auto">
          <TestimonialCarousel />
        </div>
      </section>

      {/* Grid Testimonials */}
      <section className="py-24 px-6 lg:px-12 bg-white relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">More Voices</h2>
            <p className="text-lg text-gray-600 leading-relaxed">Discover the diverse experiences of our growing community across Pakistan.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-3xl p-8 border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-300 relative group overflow-hidden"
              >
                {/* Decorative subtle gradient background on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-6">
                    <Quote className="text-primary/20 w-12 h-12" />
                    <div className="flex gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="text-amber-400 fill-amber-400" size={18} />
                      ))}
                    </div>
                  </div>
                  
                  <p className="text-gray-700 mb-8 italic leading-relaxed">"{testimonial.text}"</p>
                  
                  <div className="flex items-center gap-4 mt-auto">
                    <div className="w-14 h-14 rounded-full overflow-hidden border border-gray-200 shadow-sm relative">
                      <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg">{testimonial.name}</h4>
                      <p className="text-gray-500 font-medium text-sm">{testimonial.role}</p>
                      <p className="text-emerald-600 font-semibold text-xs mt-0.5">{testimonial.location}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats / Satisfaction section */}
      <section className="py-24 px-6 lg:px-12 bg-gray-900 text-white relative overflow-hidden">
        {/* Abstract background */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 mix-blend-overlay" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-primary/20 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-6xl mx-auto relative z-10 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-16 tracking-tight"
          >
            The HimmatKaar <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-primary">Difference</span>
          </motion.h2>
          
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {[
              { number: "92%", label: "Would Recommend to a Friend" },
              { number: "88%", label: "Fellowship Completion Rate" },
              { number: "95%", label: "Overall Satisfaction Score" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-md rounded-3xl p-10 border border-white/10 hover:bg-white/10 transition-colors"
              >
                <div className="text-6xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-emerald-300 to-primary mb-4">{stat.number}</div>
                <div className="text-lg font-medium text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
