"use client";

import { 
  Users,
  BookOpen,
  Lightbulb,
  TrendingUp,
  Globe,
  Award,
  Rocket,
  Code,
  Network,
  CheckCircle2,
  ArrowRight
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  HeroSection,
  PartnerMarquee,
  AboutSection,
  ProgramTracksSection,
  OfferingsSection,
  StatsBar,
  EventsSection,
  TestimonialsSection,
  NewsletterSection
} from "@/components/sections";

export default function Home() {
  // Hero Section Data
  const heroData = {
    headline: "Evolve Your Future with Himmatkaar!",
    urduHeadline: "ہمت کار",
    primaryCTA: { text: "Apply Now", href: "/signup" },
    secondaryCTA: { text: "Learn More", href: "/about" },
    heroImages: [
      "/home-page-carosel/1.jpg",
      "/home-page-carosel/2.jpg",
      "/home-page-carosel/3.jpg",
      "/home-page-carosel/4.jpeg",
      "/home-page-carosel/5.jpeg"
    ]
  };

  // Partner Logos
  const partnerLogos = [
    "/partners/partner1.png",
    "/partners/partner2.png"
  ];

  // About Section Data
  const aboutData = {
    image: "/about-hero.jpg",
    heading: "Faisalabad's Leading Youth Empowerment Platform",
    description: [
      "Himmatkaar is Faisalabad's premier youth empowerment platform, driving the growth of the next generation of leaders. We provide comprehensive support through mentorship, skill development, and community engagement.",
      "Our mission is to cultivate a strong resource pool to support young innovators and change-makers across Pakistan, helping them transform their ideas into impactful initiatives that benefit their communities."
    ],
    stats: [
      { value: "1,000+", label: "Youth Empowered" },
      { value: "50+", label: "Events Hosted" }
    ]
  };

  // Program Tracks Data
  const programTracks = [
    {
      icon: <Rocket size={40} />,
      title: "Launchpad",
      description: "Launch your innovative projects with Himmatkaar's comprehensive support and mentorship"
    },
    {
      icon: <Code size={40} />,
      title: "Technical Workshops",
      description: "Skill-building technical workshops and practical training sessions for career readiness"
    },
    {
      icon: <Network size={40} />,
      title: "Networking Events",
      description: "Connect with mentors, industry leaders, and peers to build meaningful relationships"
    }
  ];

  // Offerings Data
  const offerings = [
    {
      icon: <Award size={40} />,
      title: "Professional Branding",
      description: "Build a strong personal brand that stands out. Learn to craft your unique value proposition and present yourself professionally across all platforms."
    },
    {
      icon: <Users size={40} />,
      title: "Executive Communication",
      description: "Master the art of professional communication. Develop skills in public speaking, presentation, and effective business correspondence."
    },
    {
      icon: <TrendingUp size={40} />,
      title: "Corporate Readiness",
      description: "Prepare for the corporate world with essential workplace skills, professional etiquette, and industry-standard practices."
    },
    {
      icon: <BookOpen size={40} />,
      title: "Technical Workshops",
      description: "Hands-on training in cutting-edge technologies and tools. Stay ahead with practical skills that employers are looking for."
    },
    {
      icon: <Globe size={40} />,
      title: "Networking Events",
      description: "Connect with industry leaders, mentors, and peers. Build meaningful relationships that open doors to new opportunities."
    },
    {
      icon: <Lightbulb size={40} />,
      title: "Employability Excellence",
      description: "Comprehensive career development support including resume building, interview preparation, and job search strategies."
    }
  ];

  // Stats Data
  const stats = [
    { value: 1, suffix: "+", label: "Years of Operation" },
    { value: 1000, suffix: "+", label: "Student Impact" },
    { value: 6, suffix: "+", label: "Events Organized" },
    { value: 20, suffix: "+", label: "Staff Employs" }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 antialiased overflow-x-hidden">
      <Navbar />

      <main className="pt-20">
        {/* Hero Section */}
        <HeroSection {...heroData} />

        {/* Partner Marquee */}
        <PartnerMarquee logos={partnerLogos} />

        {/* About Section */}
        <AboutSection {...aboutData} />

        {/* Program Tracks Section */}
        <ProgramTracksSection tracks={programTracks} />

        {/* Offerings Section */}
        <OfferingsSection offerings={offerings} />

        {/* Stats Bar */}
        <StatsBar stats={stats} />

        {/* Career Launchpad Feature Section */}
        <section className="py-28 px-4 sm:px-6 bg-gradient-to-br from-[#2d5f3d] to-[#39894c] text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          </div>
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-semibold border border-white/20 mb-6">
                  <Rocket size={16} />
                  Our Flagship Program
                </div>
                <h2 className="text-5xl lg:text-6xl font-extrabold leading-tight mb-6 tracking-tight">
                  Career <span className="text-[#a8d5ba]">LaunchPad</span>
                </h2>
                <p className="text-xl text-white/95 leading-relaxed mb-8">
                  Transform from student to professional in just 12 weeks. Our comprehensive program combines 6 weeks of intensive training with one-on-one mentorship, followed by 6 weeks of real industry internship experience.
                </p>
                <div className="space-y-4 mb-8">
                  {[
                    "6 weeks of intensive training with expert mentors",
                    "Weekly one-on-one mentorship sessions",
                    "6 weeks of hands-on industry internship",
                    "Limited to 25 students per cohort"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2 size={16} className="text-[#39894c]" />
                      </div>
                      <p className="text-lg text-white/90">{item}</p>
                    </div>
                  ))}
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="https://docs.google.com/forms/d/e/1FAIpQLSdLfYvAZc0W6J53bdxLtlJCSv-uM40bJG22C9POuPZVa56BlQ/viewform?usp=dialog" target="_blank" rel="noopener noreferrer">
                    <button className="bg-white text-[#2d5f3d] px-8 py-4 rounded-lg font-bold text-lg hover:bg-slate-100 transition-all shadow-2xl hover:scale-105 flex items-center gap-2">
                      Apply Now <ArrowRight size={20} />
                    </button>
                  </a>
                  <Link href="/launchpad">
                    <button className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/20 transition-all border border-white/30">
                      Learn More
                    </button>
                  </Link>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="grid grid-cols-2 gap-6"
              >
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center">
                  <div className="text-5xl font-extrabold mb-2">12</div>
                  <div className="text-white/80 font-medium">Weeks Total</div>
                </div>
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center">
                  <div className="text-5xl font-extrabold mb-2">25</div>
                  <div className="text-white/80 font-medium">Students/Cohort</div>
                </div>
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center">
                  <div className="text-5xl font-extrabold mb-2">6</div>
                  <div className="text-white/80 font-medium">Weeks Training</div>
                </div>
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center">
                  <div className="text-5xl font-extrabold mb-2">6</div>
                  <div className="text-white/80 font-medium">Weeks Internship</div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Events Section */}
        <EventsSection />

        {/* Testimonials Section */}
        <TestimonialsSection />

        {/* Newsletter Section */}
        <NewsletterSection />
      </main>

      <Footer />
    </div>
  );
}


