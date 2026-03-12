"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { 
  Users,
  BookOpen,
  Lightbulb,
  TrendingUp,
  Globe,
  Award,
  ArrowRight,
  CheckCircle2,
  Mail,
  Phone,
  MapPin
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TestimonialCarousel from "@/components/TestimonialCarousel";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0f0b] text-slate-900 dark:text-slate-100 antialiased">
      <Navbar />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative bg-slate-50 dark:bg-[#0f1410] py-20 lg:py-32 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left Column - Text Content */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="order-2 lg:order-1"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="inline-block mb-6"
                >
                  <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#39894c]/10 rounded-full text-sm font-semibold text-[#39894c]">
                    <CheckCircle2 size={16} />
                    Pakistan's Leading Youth Empowerment Platform
                  </span>
                </motion.div>
                
                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="text-5xl lg:text-7xl font-extrabold leading-tight mb-6 tracking-tight text-slate-900 dark:text-white"
                >
                  Evolve Your Future with <span className="text-[#39894c]">Himmatkaar!</span>
                </motion.h1>
                
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-xl lg:text-2xl mb-8 text-slate-600 dark:text-slate-400 leading-relaxed"
                >
                  Get empowered at Himmatkaar to scale your potential with resources, mentorship, skill development opportunities, community support, and a network that pushes you forward.
                </motion.p>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="flex flex-col sm:flex-row gap-4"
                >
                  <Link href="/register">
                    <button className="bg-[#39894c] text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-[#2d6f3d] transition-all shadow-xl hover:shadow-2xl hover:scale-105 flex items-center justify-center gap-2">
                      Apply Here <ArrowRight size={20} />
                    </button>
                  </Link>
                  <Link href="/about">
                    <button className="bg-white dark:bg-slate-800 text-slate-900 dark:text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition-all border-2 border-slate-200 dark:border-slate-700">
                      Learn More
                    </button>
                  </Link>
                </motion.div>
              </motion.div>

              {/* Right Column - Image */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="order-1 lg:order-2 relative"
              >
                <div className="relative">
                  {/* Background Decoration */}
                  <div className="absolute -top-8 -right-8 w-72 h-72 bg-[#39894c]/10 rounded-full blur-3xl"></div>
                  <div className="absolute -bottom-8 -left-8 w-72 h-72 bg-[#2d5f3d]/10 rounded-full blur-3xl"></div>
                  
                  {/* Main Image Container */}
                  <div className="relative bg-white dark:bg-slate-800 rounded-3xl shadow-2xl overflow-hidden border-4 border-white dark:border-slate-700">
                    <Image 
                      src="/hero-person.jpg" 
                      alt="Himmatkaar Community"
                      width={600}
                      height={600}
                      className="w-full h-auto object-cover"
                      priority
                    />
                    
                    {/* Overlay Badge */}
                    <div className="absolute bottom-6 left-6 right-6 bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-[#39894c] rounded-full flex items-center justify-center text-white font-bold text-xl">
                          ✓
                        </div>
                        <div>
                          <p className="font-bold text-slate-900 dark:text-white text-lg">10,000+ Youth Empowered</p>
                          <p className="text-sm text-slate-600 dark:text-slate-400">Join Pakistan's largest youth network</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Partner Network */}
        <section className="py-20 bg-slate-50 dark:bg-[#0f1410] border-b border-slate-200 dark:border-slate-800">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4">Our Partner Network</h2>
              <p className="text-slate-600 dark:text-slate-400 text-xl">Trusted by leading organizations across Pakistan</p>
            </motion.div>
            
            {/* Partner Logos */}
            <div className="flex flex-wrap justify-center items-center gap-12 max-w-4xl mx-auto">
              {[
                { name: "Partner Organization 1", logo: "/partners/partner1.png" },
                { name: "Partner Organization 2", logo: "/partners/partner2.png" }
              ].map((partner, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex-shrink-0 w-64 h-40 bg-white dark:bg-slate-900 rounded-2xl border-2 border-slate-200 dark:border-slate-800 hover:border-[#39894c] dark:hover:border-[#39894c] transition-all shadow-sm hover:shadow-lg flex items-center justify-center p-8 group"
                >
                  <div className="relative w-full h-full flex items-center justify-center">
                    <Image 
                      src={partner.logo}
                      alt={partner.name}
                      width={200}
                      height={100}
                      className="object-contain max-w-full max-h-full transition-transform group-hover:scale-105"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Partnership CTA */}
            <div className="text-center mt-12">
              <p className="text-slate-600 dark:text-slate-400 mb-4 text-lg">
                Interested in partnering with us?
              </p>
              <Link 
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#2d5f3d] hover:bg-[#39894c] text-white text-lg font-semibold rounded-lg transition-colors"
              >
                Get in Touch
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* About Us */}
        <section className="py-28 bg-white dark:bg-[#0a0f0b]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <div className="aspect-[4/3] bg-slate-200 dark:bg-slate-800 rounded-2xl overflow-hidden shadow-2xl">
                  <Image 
                    src="/about-hero.jpg" 
                    alt="About Himmatkaar"
                    width={800}
                    height={600}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-[#39894c] text-white p-8 rounded-xl shadow-2xl max-w-xs">
                  <p className="text-4xl font-bold mb-1">10,000+</p>
                  <p className="text-sm font-semibold opacity-90">Youth Empowered</p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <span className="inline-block text-[#39894c] font-bold text-base uppercase tracking-wider mb-4">About Us</span>
                <h2 className="text-4xl lg:text-6xl font-bold mb-6 text-slate-900 dark:text-white leading-tight">Pakistan's Leading Youth Empowerment Platform</h2>
                <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed text-xl">
                  Himmatkaar is Pakistan's premier youth empowerment platform, driving the growth of the next generation of leaders. We provide comprehensive support through mentorship, skill development, and community engagement.
                </p>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-xl mb-8">
                  Our mission is to cultivate a strong resource pool to support young innovators and change-makers across Pakistan, helping them transform their ideas into impactful initiatives that benefit their communities.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="text-[#39894c] flex-shrink-0 mt-1" size={28} />
                    <div>
                      <p className="font-bold text-slate-900 dark:text-white mb-1 text-lg">Expert Mentorship</p>
                      <p className="text-base text-slate-600 dark:text-slate-400">Industry-leading guidance</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="text-[#39894c] flex-shrink-0 mt-1" size={28} />
                    <div>
                      <p className="font-bold text-slate-900 dark:text-white mb-1 text-lg">Skill Development</p>
                      <p className="text-base text-slate-600 dark:text-slate-400">World-class training programs</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Our Three Tracks */}
        <section className="py-28 bg-slate-50 dark:bg-[#0f1410]">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="inline-block text-[#39894c] font-bold text-base uppercase tracking-wider mb-4">Programs</span>
              <h2 className="text-4xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-4">Our Three Tracks</h2>
              <p className="text-slate-600 dark:text-slate-400 text-xl max-w-2xl mx-auto">Choose the path that aligns with your goals and aspirations</p>
            </motion.div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: "Launchpad", link: "/launchpad", color: "#2d5f3d", desc: "Launch your innovative projects with Himmatkaar", img: "/track-launchpad.jpg" },
                { title: "Fellowship", link: "/fellowship", color: "#39894c", desc: "Intensive leadership development program", img: "/track-fellowship.jpg" },
                { title: "Impact", link: "/impact", color: "#4a9d5f", desc: "Create lasting community change", img: "/track-impact.jpg" }
              ].map((track, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <Link href={track.link}>
                    <div 
                      className="group relative h-80 rounded-2xl text-white text-center font-bold text-2xl hover:scale-105 transition-all cursor-pointer overflow-hidden shadow-xl hover:shadow-2xl"
                      style={{ backgroundColor: track.color }}
                    >
                      {/* Background Image */}
                      <div 
                        className="absolute inset-0 bg-cover bg-center opacity-30 group-hover:opacity-40 transition-opacity duration-500"
                        style={{ backgroundImage: `url('${track.img}')` }}
                      ></div>
                      
                      {/* Solid Overlay */}
                      <div className="absolute inset-0 bg-black/50"></div>
                      
                      {/* Content */}
                      <div className="relative z-10 h-full flex flex-col items-center justify-center p-8">
                        <h3 className="text-4xl font-extrabold mb-4">{track.title}</h3>
                        <p className="text-lg font-normal text-white/95 mb-6 max-w-xs">{track.desc}</p>
                        <ArrowRight className="group-hover:translate-x-2 transition-transform" size={32} />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Events Section */}
        <section className="py-28 bg-white dark:bg-[#0a0f0b]">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="inline-block text-[#39894c] font-bold text-base uppercase tracking-wider mb-4">Events</span>
              <h2 className="text-4xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-4">Invent Your Future With Us</h2>
              <p className="text-slate-600 dark:text-slate-400 text-xl max-w-2xl mx-auto">Join our upcoming events and connect with like-minded changemakers</p>
            </motion.div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: "Youth Leadership Summit", img: "/event-leadership.jpg", date: "March 25, 2026" },
                { title: "Innovation Workshop", img: "/event-workshop.jpg", date: "April 10, 2026" },
                { title: "Community Open House", img: "/event-openhouse.jpg", date: "April 20, 2026" }
              ].map((event, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="group bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border border-slate-100 dark:border-slate-800"
                >
                  <div className="relative overflow-hidden">
                    <Image 
                      src={event.img} 
                      alt={event.title} 
                      width={400}
                      height={250}
                      className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500" 
                    />
                    <div className="absolute top-4 right-4 bg-[#39894c] text-white px-3 py-1 rounded-full text-xs font-bold">
                      Upcoming
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-base text-[#39894c] font-semibold mb-2">{event.date}</p>
                    <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">{event.title}</h3>
                    <Link href="/testimonials">
                      <button className="text-[#39894c] font-semibold text-lg hover:gap-2 flex items-center gap-1 transition-all group">
                        Event Details <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                      </button>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Offerings */}
        <section className="py-28 bg-slate-50 dark:bg-[#0f1410]">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="inline-block text-[#39894c] font-bold text-base uppercase tracking-wider mb-4">What We Offer</span>
              <h2 className="text-4xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-4">Our Offerings</h2>
              <p className="text-slate-600 dark:text-slate-400 text-xl max-w-2xl mx-auto">Comprehensive support to help you succeed</p>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { icon: <Users size={40} />, title: "Mentorship & Coaching", desc: "Access tailored training & one-on-one coaching from leading industry experts across Pakistan to avoid common pitfalls & accelerate your growth." },
                { icon: <TrendingUp size={40} />, title: "Investment Readiness", desc: "Get investor-ready with solid business models, compelling pitches & smart financials to help you secure the investment." },
                { icon: <Globe size={40} />, title: "Industry Connections", desc: "With our strong partner network & industry ties, build meaningful connections & partnerships that can take you to the next level." },
                { icon: <BookOpen size={40} />, title: "Founder Institute Curriculum", desc: "Tap into a globally acclaimed curriculum designed to help founders scale. Gain the tools, skills & mindset to go from idea to execution." },
                { icon: <Award size={40} />, title: "Grants & Global Expos", desc: "Access national & international grant opportunities, & showcase your projects at leading expos around the world." },
                { icon: <Lightbulb size={40} />, title: "Co-Working Space", desc: "Work in a vibrant, collaborative environment built for innovation, equipped with everything you need to focus, build & grow." }
              ].map((offering, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08 }}
                  className="group p-8 bg-white dark:bg-slate-900 rounded-2xl hover:shadow-2xl transition-all border border-slate-100 dark:border-slate-800 hover:border-[#39894c]/30"
                >
                  <div className="text-[#39894c] mb-6 group-hover:scale-110 transition-transform inline-block">{offering.icon}</div>
                  <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">{offering.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">{offering.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats & Contact */}
        <section className="py-28 bg-white dark:bg-[#0a0f0b]">
          <div className="max-w-7xl mx-auto px-6">
            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#2d5f3d] rounded-3xl p-12 lg:p-16 mb-20 shadow-2xl"
            >
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center text-white">
                <div>
                  <p className="text-6xl lg:text-7xl font-extrabold mb-3">10k+</p>
                  <p className="text-xl font-semibold opacity-90">Members</p>
                </div>
                <div>
                  <p className="text-6xl lg:text-7xl font-extrabold mb-3">500+</p>
                  <p className="text-xl font-semibold opacity-90">Projects</p>
                </div>
                <div>
                  <p className="text-6xl lg:text-7xl font-extrabold mb-3">50+</p>
                  <p className="text-xl font-semibold opacity-90">Cities</p>
                </div>
                <div>
                  <p className="text-6xl lg:text-7xl font-extrabold mb-3">$2M+</p>
                  <p className="text-xl font-semibold opacity-90">Funds Raised</p>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <div className="grid lg:grid-cols-2 gap-16">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <span className="inline-block text-[#39894c] font-bold text-base uppercase tracking-wider mb-4">Get In Touch</span>
                <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-slate-900 dark:text-white">Send Us A Message</h2>
                <p className="text-slate-600 dark:text-slate-400 mb-8 text-xl">Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
                <form className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-5">
                    <input type="text" placeholder="First Name" className="px-5 py-4 rounded-xl border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:border-[#39894c] focus:outline-none transition-colors" />
                    <input type="text" placeholder="Last Name" className="px-5 py-4 rounded-xl border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:border-[#39894c] focus:outline-none transition-colors" />
                  </div>
                  <input type="tel" placeholder="Phone" className="w-full px-5 py-4 rounded-xl border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:border-[#39894c] focus:outline-none transition-colors" />
                  <input type="email" placeholder="Email" className="w-full px-5 py-4 rounded-xl border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:border-[#39894c] focus:outline-none transition-colors" />
                  <textarea placeholder="Message" rows={5} className="w-full px-5 py-4 rounded-xl border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:border-[#39894c] focus:outline-none transition-colors resize-none"></textarea>
                  <button type="submit" className="bg-[#39894c] text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-[#2d6f3d] transition-colors shadow-lg hover:shadow-xl w-full md:w-auto">
                    Submit Message
                  </button>
                </form>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex flex-col justify-center"
              >
                <span className="inline-block text-[#39894c] font-bold text-base uppercase tracking-wider mb-4">Stay Updated</span>
                <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-slate-900 dark:text-white">Subscribe to our Newsletter</h2>
                <p className="text-slate-600 dark:text-slate-400 mb-8 text-xl">Stay updated with the latest news, events, and opportunities from Himmatkaar.</p>
                <div className="flex gap-4 mb-12">
                  <input type="email" placeholder="Enter your email" className="flex-1 px-5 py-4 rounded-xl border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:border-[#39894c] focus:outline-none transition-colors" />
                  <button className="bg-[#39894c] text-white px-10 py-4 rounded-xl font-bold hover:bg-[#2d6f3d] transition-colors shadow-lg hover:shadow-xl">
                    Subscribe
                  </button>
                </div>
                <div className="bg-slate-50 dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-800">
                  <h3 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white">Contact Information</h3>
                  <div className="space-y-4 text-slate-600 dark:text-slate-400 text-lg">
                    <p className="flex items-center gap-3">
                      <Mail className="text-[#39894c]" size={24} />
                      <span>info@himmatkaar.org</span>
                    </p>
                    <p className="flex items-center gap-3">
                      <Phone className="text-[#39894c]" size={24} />
                      <span>+92 300 1234567</span>
                    </p>
                    <p className="flex items-center gap-3">
                      <MapPin className="text-[#39894c]" size={24} />
                      <span>Karachi, Pakistan</span>
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-28 bg-slate-50 dark:bg-[#0f1410]">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="inline-block text-[#39894c] font-bold text-base uppercase tracking-wider mb-4">Testimonials</span>
              <h2 className="text-4xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-4">What Our Members Say</h2>
              <p className="text-slate-600 dark:text-slate-400 text-xl max-w-2xl mx-auto">Hear from the changemakers who are making a difference</p>
            </motion.div>
            <TestimonialCarousel />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
