"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, User, ArrowRight, Clock, Loader2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  read_time: string;
  image: string;
  category: string;
  published: boolean;
}

export default function Blog() {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBlogPosts();
  }, []);

  const fetchBlogPosts = async () => {
    try {
      const response = await fetch('/api/blog?published=true');
      const data = await response.json();
      setBlogPosts(data.posts || []);
    } catch (error) {
      console.error('Error fetching blog posts:', error);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main className="pt-32 pb-24">
        {/* Header */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 mb-16">
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
            <h1 className="text-4xl lg:text-6xl font-extrabold mb-6 text-slate-900">
              Himmatkaar <span className="text-[#39894c]">Blog</span>
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              Explore articles, insights, and success stories from our community of changemakers and innovators.
            </p>
          </motion.div>
        </section>

        {/* Blog Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6">
          {loading ? (
            <div className="flex items-center justify-center h-64">
              <Loader2 className="animate-spin text-[#39894c]" size={48} />
            </div>
          ) : blogPosts.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-xl text-slate-600">No blog posts available yet. Check back soon!</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, idx) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  className="group bg-white  rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border border-slate-100"
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
                    <h3 className="text-xl font-bold mb-3 text-slate-900 group-hover:text-[#39894c] transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-slate-600 mb-4 leading-relaxed text-sm">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-xs text-slate-500 mb-4">
                      <div className="flex items-center gap-4">
                        <span className="flex items-center gap-1">
                          <User size={14} />
                          {post.author}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock size={14} />
                          {post.read_time}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-1 text-xs text-slate-500">
                        <Calendar size={14} />
                        {formatDate(post.date)}
                      </span>
                      <Link href={`/blog/${post.slug}`} className="text-[#39894c] font-semibold text-sm hover:gap-2 flex items-center gap-1 transition-all">
                        Read More <ArrowRight size={16} />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </section>

        {/* Newsletter CTA */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 mt-24">
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


