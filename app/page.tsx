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
  Network
} from "lucide-react";
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
      "/hero-person.jpg",
      "/about-hero.jpg",
      "/himmatkaar-logo.jpg"
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
