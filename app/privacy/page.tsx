import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0f0b]">
      <Navbar />

      <main className="pt-32 pb-24">
        <section className="max-w-4xl mx-auto px-6">
          <Link href="/" className="inline-flex items-center gap-2 text-[#39894c] hover:underline mb-8 font-semibold">
            <ArrowLeft size={20} /> Back to Home
          </Link>

          <h1 className="text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white mb-4">Privacy Policy</h1>
          <p className="text-slate-600 dark:text-slate-400 mb-10">Effective date: March 30, 2026</p>

          <div className="space-y-8 text-slate-700 dark:text-slate-300 leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">1. Information We Collect</h2>
              <p>
                We may collect information you provide directly, such as your name, email address, phone number,
                and any details submitted through forms, event registrations, newsletters, or applications.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">2. How We Use Information</h2>
              <p>
                We use your information to provide programs, process applications, communicate updates, improve our
                services, and support community engagement initiatives.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">3. Data Sharing</h2>
              <p>
                We do not sell personal data. We may share data with trusted service providers that help us run our
                platform, where necessary to operate services, comply with legal obligations, or protect user safety.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">4. Data Security</h2>
              <p>
                We use reasonable administrative and technical safeguards to protect personal information. No method
                of transmission or storage is 100% secure, but we continuously improve our security practices.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">5. Your Choices</h2>
              <p>
                You may request access, correction, or deletion of your personal information, subject to legal and
                operational requirements.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">6. Contact</h2>
              <p>
                For privacy-related questions, contact us through our contact page.
              </p>
              <p className="mt-3">
                <Link href="/contact" className="text-[#39894c] font-semibold hover:underline">Go to Contact Page</Link>
              </p>
            </section>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
