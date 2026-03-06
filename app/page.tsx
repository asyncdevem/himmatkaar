"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image
              src="/himmatkaar-logo.jpg"
              alt="HimmatKaar Logo"
              width={50}
              height={50}
              className="rounded-lg"
            />
            <span className="text-2xl font-bold text-gray-900">HimmatKaar</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-gray-600 hover:text-gray-900 transition-colors">About</a>
            <a href="#fellowship" className="text-gray-600 hover:text-gray-900 transition-colors">Fellowship</a>
            <a href="#impact" className="text-gray-600 hover:text-gray-900 transition-colors">Impact</a>
            <a href="#contact" className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-all hover:shadow-lg">Apply Now</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Empowering Youth Through
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Skills & Mindset
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto">
              We help underserved students develop the professional skills, critical thinking, and mindset to thrive in today's competitive world.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#fellowship" className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-all hover:shadow-xl hover:scale-105">
                Join Our Fellowship
              </a>
              <a href="#impact" className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold border-2 border-blue-600 hover:bg-blue-50 transition-all hover:shadow-xl hover:scale-105">
                See Our Impact
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-left">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                The HimmatKaar Career-Prep Fellowship
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Reach your dream career through developing your professional skills and learning to follow your passion.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                A transformative program where you'll build confidence, enhance communication skills, learn to write stellar resumes, become a critical thinker, and join a thriving community of ambitious fellows.
              </p>
              <a href="#fellowship" className="inline-block text-blue-600 font-semibold hover:text-blue-700 transition-colors">
                Learn more about the Fellowship →
              </a>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl animate-fade-in-right">
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
      <section id="impact" className="py-20 px-6 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Our Impact</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <ImpactCard
              number="1000+"
              label="Fellows Empowered"
              description="Students from diverse backgrounds transformed through our program"
              delay="0"
            />
            <ImpactCard
              number="85%"
              label="Career Success Rate"
              description="Fellows secure meaningful employment within 3 months"
              delay="200"
            />
            <ImpactCard
              number="75%"
              label="Skills Improvement"
              description="Average improvement in professional and soft skills"
              delay="400"
            />
          </div>
        </div>
      </section>

      {/* Fellowship Outcomes */}
      <section id="fellowship" className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-16">
            Fellowship Learning Outcomes
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <OutcomeCard
              title="Professional Communication"
              description="Master clear and effective communication in professional settings, interviews, and presentations"
              icon="💬"
            />
            <OutcomeCard
              title="Resume & Applications"
              description="Write compelling resumes, cover letters, and job applications that get you noticed"
              icon="📝"
            />
            <OutcomeCard
              title="Confidence & Public Speaking"
              description="Overcome nervousness and build confidence to present yourself effectively"
              icon="🎤"
            />
            <OutcomeCard
              title="Leadership & Initiative"
              description="Develop leadership skills and learn to take ownership of your growth"
              icon="🚀"
            />
            <OutcomeCard
              title="Critical Thinking"
              description="Enhance problem-solving abilities and become a strategic thinker"
              icon="🧠"
            />
            <OutcomeCard
              title="Lifelong Learning"
              description="Cultivate the mindset and skills to continuously learn and adapt"
              icon="📚"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Ready to Transform Your Future?
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Join thousands of students who have already started their journey with HimmatKaar
          </p>
          <a href="#apply" className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-12 py-5 rounded-full text-lg font-semibold hover:shadow-2xl transition-all hover:scale-105">
            Apply for Fellowship
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6">
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
            <a href="#" className="text-gray-400 hover:text-white transition-colors">About</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Fellowship</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Impact</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a>
          </div>
          <p className="text-gray-500 text-sm">
            © 2026 HimmatKaar. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

function ImpactCard({ number, label, description, delay }: { number: string; label: string; description: string; delay: string }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), parseInt(delay));
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div className={`bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="text-5xl font-bold mb-3">{number}</div>
      <div className="text-xl font-semibold mb-3">{label}</div>
      <div className="text-white/80">{description}</div>
    </div>
  );
}

function OutcomeCard({ title, description, icon }: { title: string; description: string; icon: string }) {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all hover:scale-105 cursor-pointer">
      <div className="text-5xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
