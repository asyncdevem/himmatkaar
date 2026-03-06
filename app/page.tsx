"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { 
  MessageSquare, 
  FileText, 
  Mic, 
  Rocket, 
  Brain, 
  BookOpen,
  Users,
  TrendingUp,
  Award,
  Menu,
  X
} from "lucide-react";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/98 backdrop-blur-md z-50 border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image
              src="/himmatkaar-logo.jpg"
              alt="HimmatKaar Logo"
              width={50}
              height={50}
              className="rounded-lg shadow-md"
            />
            <span className="text-2xl font-bold text-gray-900">HimmatKaar</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-gray-900 hover:text-[#3a8a4d] transition-colors font-medium">About</a>
            <a href="#fellowship" className="text-gray-900 hover:text-[#3a8a4d] transition-colors font-medium">Fellowship</a>
            <a href="#impact" className="text-gray-900 hover:text-[#3a8a4d] transition-colors font-medium">Impact</a>
            <a href="#contact" className="bg-[#3a8a4d] text-white px-6 py-2.5 rounded-lg hover:bg-[#17431f] transition-all hover:shadow-lg font-semibold">
              Apply Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-900"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 py-4 px-6">
            <div className="flex flex-col gap-4">
              <a href="#about" className="text-gray-900 hover:text-[#3a8a4d] transition-colors font-medium" onClick={() => setMobileMenuOpen(false)}>About</a>
              <a href="#fellowship" className="text-gray-900 hover:text-[#3a8a4d] transition-colors font-medium" onClick={() => setMobileMenuOpen(false)}>Fellowship</a>
              <a href="#impact" className="text-gray-900 hover:text-[#3a8a4d] transition-colors font-medium" onClick={() => setMobileMenuOpen(false)}>Impact</a>
              <a href="#contact" className="bg-[#3a8a4d] text-white px-6 py-2.5 rounded-lg hover:bg-[#17431f] transition-all text-center font-semibold" onClick={() => setMobileMenuOpen(false)}>
                Apply Now
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="flex justify-center mb-8">
              <Image
                src="/himmatkaar-logo.jpg"
                alt="HimmatKaar Logo"
                width={150}
                height={150}
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Empowering Youth Through
              <span className="block text-[#3a8a4d]">
                Skills & Mindset
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-12 max-w-3xl mx-auto">
              We help underserved students develop the professional skills, critical thinking, and mindset to thrive in today's competitive world.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#fellowship" className="bg-[#3a8a4d] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#17431f] transition-all hover:shadow-xl hover:scale-105">
                Join Our Fellowship
              </a>
              <a href="#impact" className="bg-white text-[#3a8a4d] px-8 py-4 rounded-lg text-lg font-semibold border-2 border-[#3a8a4d] hover:bg-gray-50 transition-all hover:shadow-xl hover:scale-105">
                See Our Impact
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-left">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                The HimmatKaar Career-Prep Fellowship
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Reach your dream career through developing your professional skills and learning to follow your passion.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                A transformative program where you'll build confidence, enhance communication skills, learn to write stellar resumes, become a critical thinker, and join a thriving community of ambitious fellows.
              </p>
              <a href="#fellowship" className="inline-flex items-center gap-2 text-[#3a8a4d] font-semibold hover:text-[#17431f] transition-colors text-lg">
                Learn more about the Fellowship 
                <Rocket size={20} />
              </a>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl animate-fade-in-right border-4 border-[#3a8a4d]">
              <Image
                src="/himmatkaar-logo.jpg"
                alt="HimmatKaar Fellowship"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section id="impact" className="py-20 px-6 bg-[#17431f] text-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Our Impact</h2>
          <p className="text-center text-[#a3caad] text-lg mb-16 max-w-2xl mx-auto">
            At HimmatKaar, our impact goes beyond numbers—it's about the lives we touch and the futures we help shape.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <ImpactCard
              icon={<Users size={48} />}
              number="1000+"
              label="Fellows Empowered"
              description="Students from diverse backgrounds transformed through our program"
              delay="0"
            />
            <ImpactCard
              icon={<TrendingUp size={48} />}
              number="85%"
              label="Career Success Rate"
              description="Fellows secure meaningful employment within 3 months"
              delay="200"
            />
            <ImpactCard
              icon={<Award size={48} />}
              number="75%"
              label="Skills Improvement"
              description="Average improvement in professional and soft skills"
              delay="400"
            />
          </div>
        </div>
      </section>

      {/* Fellowship Outcomes */}
      <section id="fellowship" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-4">
            Fellowship Learning Outcomes
          </h2>
          <p className="text-center text-gray-700 text-lg mb-16 max-w-2xl mx-auto">
            Develop essential skills and mindsets that will transform your professional journey
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <OutcomeCard
              title="Professional Communication"
              description="Master clear and effective communication in professional settings, interviews, and presentations"
              icon={<MessageSquare size={40} className="text-[#3a8a4d]" />}
            />
            <OutcomeCard
              title="Resume & Applications"
              description="Write compelling resumes, cover letters, and job applications that get you noticed"
              icon={<FileText size={40} className="text-[#3a8a4d]" />}
            />
            <OutcomeCard
              title="Confidence & Public Speaking"
              description="Overcome nervousness and build confidence to present yourself effectively"
              icon={<Mic size={40} className="text-[#3a8a4d]" />}
            />
            <OutcomeCard
              title="Leadership & Initiative"
              description="Develop leadership skills and learn to take ownership of your growth"
              icon={<Rocket size={40} className="text-[#3a8a4d]" />}
            />
            <OutcomeCard
              title="Critical Thinking"
              description="Enhance problem-solving abilities and become a strategic thinker"
              icon={<Brain size={40} className="text-[#3a8a4d]" />}
            />
            <OutcomeCard
              title="Lifelong Learning"
              description="Cultivate the mindset and skills to continuously learn and adapt"
              icon={<BookOpen size={40} className="text-[#3a8a4d]" />}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 px-6 bg-[#a3caad]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#17431f] mb-6">
            Ready to Transform Your Future?
          </h2>
          <p className="text-xl text-[#17431f] mb-12">
            Join thousands of students who have already started their journey with HimmatKaar
          </p>
          <a href="#apply" className="inline-block bg-[#3a8a4d] text-white px-12 py-5 rounded-lg text-lg font-semibold hover:shadow-2xl transition-all hover:scale-105 hover:bg-[#17431f]">
            Apply for Fellowship
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Image
              src="/himmatkaar-logo.jpg"
              alt="HimmatKaar Logo"
              width={40}
              height={40}
              className="rounded-lg"
            />
            <span className="text-2xl font-bold">HimmatKaar</span>
          </div>
          <p className="text-gray-400 mb-6">
            Empowering youth through skills and mindset development
          </p>
          <div className="flex justify-center gap-6 mb-6">
            <a href="#about" className="text-gray-400 hover:text-[#a3caad] transition-colors">About</a>
            <a href="#fellowship" className="text-gray-400 hover:text-[#a3caad] transition-colors">Fellowship</a>
            <a href="#impact" className="text-gray-400 hover:text-[#a3caad] transition-colors">Impact</a>
            <a href="#contact" className="text-gray-400 hover:text-[#a3caad] transition-colors">Contact</a>
          </div>
          <p className="text-gray-500 text-sm">
            © 2026 HimmatKaar. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

function ImpactCard({ icon, number, label, description, delay }: { icon: React.ReactNode; number: string; label: string; description: string; delay: string }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), parseInt(delay));
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div className={`bg-white text-gray-900 rounded-2xl p-8 text-center transition-all duration-1000 shadow-xl hover:shadow-2xl ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="flex justify-center mb-4 text-[#3a8a4d]">{icon}</div>
      <div className="text-5xl font-bold mb-3 text-[#3a8a4d]">{number}</div>
      <div className="text-xl font-semibold mb-3 text-gray-900">{label}</div>
      <div className="text-gray-700">{description}</div>
    </div>
  );
}

function OutcomeCard({ title, description, icon }: { title: string; description: string; icon: React.ReactNode }) {
  return (
    <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-[#3a8a4d] hover:shadow-2xl transition-all hover:scale-105 cursor-pointer">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  );
}
