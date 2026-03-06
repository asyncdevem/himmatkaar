"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    university: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert("Thank you for your application! We'll get back to you soon.");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

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
            Apply <span className="text-[#3a8a4d]">Now</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-700 max-w-3xl mx-auto"
          >
            Take the first step towards transforming your career. Fill out the application form below.
          </motion.p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl p-8 shadow-xl"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Application Form</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#3a8a4d] focus:outline-none transition-colors"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#3a8a4d] focus:outline-none transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#3a8a4d] focus:outline-none transition-colors"
                    placeholder="+92 XXX XXXXXXX"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">University/College *</label>
                  <input
                    type="text"
                    name="university"
                    value={formData.university}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#3a8a4d] focus:outline-none transition-colors"
                    placeholder="Your institution name"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">Why do you want to join? *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#3a8a4d] focus:outline-none transition-colors resize-none"
                    placeholder="Tell us about your motivation..."
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-[#3a8a4d] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#17431f] transition-all hover:shadow-xl flex items-center justify-center gap-2"
                >
                  Submit Application
                  <Send size={20} />
                </motion.button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Get in Touch</h2>
                <p className="text-gray-700 text-lg mb-8">
                  Have questions? We're here to help! Reach out to us through any of the following channels.
                </p>
              </div>

              <motion.div
                whileHover={{ scale: 1.02, x: 10 }}
                className="bg-white rounded-2xl p-6 shadow-lg flex items-start gap-4"
              >
                <div className="bg-[#a3caad] p-3 rounded-lg">
                  <Mail className="text-[#17431f]" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Email</h3>
                  <p className="text-gray-700">info@himmatkaar.org</p>
                  <p className="text-gray-700">admissions@himmatkaar.org</p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02, x: 10 }}
                className="bg-white rounded-2xl p-6 shadow-lg flex items-start gap-4"
              >
                <div className="bg-[#a3caad] p-3 rounded-lg">
                  <Phone className="text-[#17431f]" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Phone</h3>
                  <p className="text-gray-700">+92 XXX XXXXXXX</p>
                  <p className="text-gray-600 text-sm">Mon-Fri, 9am-5pm</p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02, x: 10 }}
                className="bg-white rounded-2xl p-6 shadow-lg flex items-start gap-4"
              >
                <div className="bg-[#a3caad] p-3 rounded-lg">
                  <MapPin className="text-[#17431f]" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Office</h3>
                  <p className="text-gray-700">Pakistan</p>
                  <p className="text-gray-600 text-sm">Serving students nationwide</p>
                </div>
              </motion.div>

              <div className="bg-[#17431f] text-white rounded-2xl p-6">
                <h3 className="text-xl font-bold mb-3">Application Timeline</h3>
                <ul className="space-y-2 text-[#a3caad]">
                  <li>• Applications reviewed within 1 week</li>
                  <li>• Interviews scheduled for shortlisted candidates</li>
                  <li>• Final decisions within 2 weeks</li>
                  <li>• Next cohort starts soon!</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
