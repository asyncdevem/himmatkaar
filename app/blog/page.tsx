"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, User, ArrowRight, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Blog() {
  const blogPosts = [
    {
      slug: "5-ways-to-build-successful-startup-pakistan",
      title: "5 Ways to Build a Successful Startup in Pakistan",
      excerpt: "Discover the essential strategies and insights for launching and scaling your startup in Pakistan's growing entrepreneurial ecosystem.",
      author: "Ahmed Khan",
      date: "March 10, 2026",
      readTime: "5 min read",
      image: "/event-leadership.jpg",
      category: "Entrepreneurship"
    },
    {
      slug: "power-of-youth-leadership-social-change",
      title: "The Power of Youth Leadership in Social Change",
      excerpt: "Explore how young leaders are driving transformative change in communities across Pakistan through innovative solutions.",
      author: "Fatima Ali",
      date: "March 5, 2026",
      readTime: "7 min read",
      image: "/event-workshop.jpg",
      category: "Leadership"
    },
    {
      slug: "tech-skills-young-professionals-2026",
      title: "Tech Skills Every Young Professional Needs in 2026",
      excerpt: "Stay ahead of the curve with these essential technical skills that are shaping the future of work in Pakistan.",
      author: "Bilal Ahmed",
      date: "February 28, 2026",
      readTime: "6 min read",
      image: "/event-openhouse.jpg",
      category: "Technology"
    },
    {
      slug: "building-sustainable-communities-guide",
      title: "Building Sustainable Communities: A Guide",
      excerpt: "Learn practical approaches to creating lasting impact in your community through sustainable development initiatives.",
      author: "Sara Hussain",
      date: "February 20, 2026",
      readTime: "8 min read",
      image: "/about-hero.jpg",
      category: "Impact"
    },
    {
      slug: "from-idea-to-launch-startup-journey",
      title: "From Idea to Launch: A Startup Journey",
      excerpt: "Follow the inspiring journey of a Himmatkaar alumni who turned their innovative idea into a thriving business.",
      author: "Hassan Malik",
      date: "February 15, 2026",
      readTime: "10 min read",
      image: "/hero-person.jpg",
      category: "Success Stories"
    },
    {
      slug: "networking-tips-young-professionals",
      title: "Networking Tips for Young Professionals",
      excerpt: "Master the art of professional networking with these proven strategies to build meaningful connections.",
      author: "Ayesha Raza",
      date: "February 10, 2026",
      readTime: "4 min read",
      image: "/track-fellowship.jpg",
      category: "Career"
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0f0b]">
      <Navbar />

      <main className="pt-32 pb-24">
        {/* Header */}
        <section className="max-w-7xl mx-auto px-6 mb-16">
          <Link href="/" className="inline-flex items-center gap-2 text-[#39894c] hover:underline mb-8 font-semibold">
            <ArrowLeft size={20} /> Back to Home
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block text-[#39894c] font-bold text-sm uppercase tracking-wider mb-4">Insights & Stories</span>
            <h1 className="text-4xl lg:text-6xl font-extrabold mb-6 text-slate-900 dark:text-white">
              Himmatkaar <span className="text-[#39894c]">Blog</span>
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              Explore articles, insights, and success stories from our community of changemakers and innovators.
            </p>
          </motion.div>
        </section>

        {/* Blog Grid */}
        <section className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="group bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border border-slate-100 dark:border-slate-800"
              >
                <div className="relative overflow-hidden h-56">
                  <Image 
                    src={post.image} 
                    alt={post.title} 
                    width={400}
                    height={250}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                  />
                  <div className="absolute top-4 left-4 bg-[#39894c] text-white px-3 py-1 rounded-full text-xs font-bold">
                    {post.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white group-hover:text-[#39894c] transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed text-sm">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-500 mb-4">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1">
                        <User size={14} />
                        {post.author}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={14} />
                        {post.readTime}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1 text-xs text-slate-500">
                      <Calendar size={14} />
                      {post.date}
                    </span>
                    <Link href={`/blog/${post.slug}`} className="text-[#39894c] font-semibold text-sm hover:gap-2 flex items-center gap-1 transition-all">
                      Read More <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="max-w-4xl mx-auto px-6 mt-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#2d5f3d] rounded-3xl p-12 text-center text-white shadow-2xl"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Never Miss an Update</h2>
            <p className="text-lg mb-8 text-white/90">
              Subscribe to get the latest articles and insights delivered to your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 px-5 py-4 rounded-lg text-slate-900 focus:outline-none"
              />
              <button className="bg-white text-[#2d5f3d] px-8 py-4 rounded-lg font-bold hover:scale-105 transition-transform">
                Subscribe
              </button>
            </div>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
