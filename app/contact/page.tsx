"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, MessageSquare, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
};

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    university: "",
    message: ""
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", phone: "", university: "", message: "" });
    }, 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-jakarta relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[50%] h-[40%] bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] left-[-10%] w-[40%] h-[40%] bg-blue-500/10 rounded-full blur-[120px]" />
      </div>

      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 px-6 lg:px-12 relative z-10 flex-grow">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial="initial"
            animate="animate"
            variants={{ animate: { transition: { staggerChildren: 0.1 } } }}
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6 border border-primary/20">
               Get in Touch
            </motion.div>
            <motion.h1 
              variants={fadeInUp} 
              className="text-5xl md:text-7xl font-extrabold text-gray-900 mb-6 tracking-tight"
            >
              Start Your <span className="text-[#39894c]">Journey</span>
            </motion.h1>
            <motion.p 
              variants={fadeInUp} 
              className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed"
            >
              Whether you're ready to apply for the fellowship, want to become a mentor, or just have a question, we'd love to hear from you.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 px-6 lg:px-12 relative z-20 mb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            
            {/* Contact Info (Left Column) */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-2 space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4 tracking-tight">Contact Information</h2>
                <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                  Reach out to us through any of the channels below. We aim to respond to all inquiries within 24-48 hours.
                </p>
              </div>

              {[
                { icon: <Mail className="w-6 h-6 text-primary" />, title: "Email Us", items: ["info@himmatkaar.org", "admissions@himmatkaar.org"], bg: "bg-primary/10" },
                { icon: <Phone className="w-6 h-6 text-blue-500" />, title: "Call Us", items: ["+92 XXX XXXXXXX", "Mon-Fri, 9am - 5pm PKT"], bg: "bg-blue-500/10" },
                { icon: <MapPin className="w-6 h-6 text-emerald-500" />, title: "Visit Us", items: ["Lahore, Pakistan", "Serving students nationwide"], bg: "bg-emerald-500/10" }
              ].map((info, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.02, x: 10 }}
                  className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 border border-white shadow-sm hover:shadow-md transition-all duration-300 flex items-start gap-5"
                >
                  <div className={`p-4 rounded-xl shrink-0 ${info.bg}`}>
                    {info.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">{info.title}</h3>
                    {info.items.map((item, i) => (
                      <p key={i} className="text-gray-600 font-medium">{item}</p>
                    ))}
                  </div>
                </motion.div>
              ))}

              {/* Timeline Card */}
              <div className="bg-gray-900 rounded-3xl p-8 relative overflow-hidden mt-12 text-white shadow-2xl">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/30 rounded-full blur-[50px] pointer-events-none" />
                <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                  <CheckCircle2 className="text-primary w-6 h-6" />
                  Application Timeline
                </h3>
                <ul className="space-y-4">
                  {[
                    "Applications reviewed within 1 week",
                    "Interviews scheduled for shortlisted candidates",
                    "Final decisions communicated within 2 weeks",
                    "Next cohort begins orientation soon"
                  ].map((step, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-0.5 text-sm font-semibold text-primary">{i+1}</div>
                      <span className="text-gray-300 leading-snug">{step}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Application Form (Right Column) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="lg:col-span-3"
            >
              <div className="bg-white rounded-[2rem] p-8 lg:p-12 shadow-[0_8px_40px_rgba(0,0,0,0.06)] border border-gray-100 relative overflow-hidden">
                {/* Decorative form background element */}
                <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none z-0">
                  <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
                </div>

                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="p-3 rounded-2xl bg-primary/10 text-primary">
                      <MessageSquare className="w-8 h-8" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900 tracking-tight">Application Form</h2>
                      <p className="text-gray-500 font-medium">Fill in your details to apply or inquire.</p>
                    </div>
                  </div>

                  {isSubmitted ? (
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 text-center"
                    >
                      <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                        <CheckCircle2 className="w-8 h-8" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent Successfully!</h3>
                      <p className="text-gray-600">Thank you for reaching out. We've received your application and will get back to you shortly.</p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-sm font-bold text-gray-700 ml-1">Full Name <span className="text-rose-500">*</span></label>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full px-5 py-4 bg-gray-50/50 border border-gray-200 rounded-xl focus:ring-4 focus:ring-primary/10 focus:border-primary focus:bg-white transition-all outline-none"
                            placeholder="John Doe"
                          />
                        </div>

                        <div className="space-y-2">
                          <label className="text-sm font-bold text-gray-700 ml-1">Email Address <span className="text-rose-500">*</span></label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-5 py-4 bg-gray-50/50 border border-gray-200 rounded-xl focus:ring-4 focus:ring-primary/10 focus:border-primary focus:bg-white transition-all outline-none"
                            placeholder="john@example.com"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-sm font-bold text-gray-700 ml-1">Phone Number <span className="text-rose-500">*</span></label>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            className="w-full px-5 py-4 bg-gray-50/50 border border-gray-200 rounded-xl focus:ring-4 focus:ring-primary/10 focus:border-primary focus:bg-white transition-all outline-none"
                            placeholder="+92 XXX XXXXXXX"
                          />
                        </div>

                        <div className="space-y-2">
                          <label className="text-sm font-bold text-gray-700 ml-1">University / College <span className="text-rose-500">*</span></label>
                          <input
                            type="text"
                            name="university"
                            value={formData.university}
                            onChange={handleChange}
                            required
                            className="w-full px-5 py-4 bg-gray-50/50 border border-gray-200 rounded-xl focus:ring-4 focus:ring-primary/10 focus:border-primary focus:bg-white transition-all outline-none"
                            placeholder="Your institution name"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-bold text-gray-700 ml-1">Why do you want to join? <span className="text-rose-500">*</span></label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={5}
                          className="w-full px-5 py-4 bg-gray-50/50 border border-gray-200 rounded-xl focus:ring-4 focus:ring-primary/10 focus:border-primary focus:bg-white transition-all outline-none resize-none"
                          placeholder="Tell us about your background, goals, and why you're a great fit for HimmatKaar..."
                        />
                      </div>

                      <div className="pt-4">
                        <motion.button
                          whileHover={{ scale: 1.01 }}
                          whileTap={{ scale: 0.98 }}
                          type="submit"
                          className="w-full bg-primary hover:bg-primary-hover text-white px-8 py-5 rounded-xl font-bold text-lg transition-all shadow-lg shadow-primary/30 flex items-center justify-center gap-3 relative overflow-hidden group"
                        >
                          {/* Shimmer effect removed */}
                          Submit Application
                          <Send size={20} className="group-hover:translate-x-1 transition-transform" />
                        </motion.button>
                        <p className="text-center text-sm text-gray-500 mt-4 font-medium">
                          By submitting, you agree to our privacy policy and terms of service.
                        </p>
                      </div>
                    </form>
                  )}
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
