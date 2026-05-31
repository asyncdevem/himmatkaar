"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Linkedin, Loader2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  linkedin: string;
}

const ITEMS_PER_PAGE = 6;

export default function CoreTeamPage() {
  const [members, setMembers] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchTeamMembers = async () => {
      try {
        const response = await fetch("/api/team");
        const data = await response.json();
        setMembers(data.members || []);
      } catch (error) {
        console.error("Error fetching team members:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTeamMembers();
  }, []);

  const totalPages = useMemo(() => {
    return Math.max(1, Math.ceil(members.length / ITEMS_PER_PAGE));
  }, [members.length]);

  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(1);
    }
  }, [currentPage, totalPages]);

  const paginatedMembers = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return members.slice(start, start + ITEMS_PER_PAGE);
  }, [members, currentPage]);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main className="pt-32 pb-24">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 mb-16">
          <Link href="/team#core-team" className="inline-flex items-center gap-2 text-[#39894c] hover:underline mb-8 font-semibold">
            <ArrowLeft size={20} /> Back to Team
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block text-[#39894c] font-bold text-sm uppercase tracking-wider mb-4">Core Team</span>
            <h1 className="text-4xl lg:text-6xl font-extrabold mb-6 text-slate-900">
              Meet All <span className="text-[#39894c]">Teammates</span>
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              Explore our complete leadership team and the people driving Himmatkaar forward.
            </p>
          </motion.div>
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6">
          {loading ? (
            <div className="flex items-center justify-center py-20">
              <Loader2 className="animate-spin text-[#39894c]" size={48} />
            </div>
          ) : members.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-slate-600">No team members found.</p>
            </div>
          ) : (
            <>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {paginatedMembers.map((member, idx) => (
                  <motion.div
                    key={member.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.08, duration: 0.5 }}
                    className="group bg-slate-50  rounded-2xl overflow-hidden border border-slate-200 hover:shadow-2xl transition-all"
                  >
                    <div className="relative h-80 overflow-hidden">
                      <Image
                        src={member.image}
                        alt={member.name}
                        width={400}
                        height={400}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/40"></div>

                      {member.linkedin && (
                        <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity">
                          <a
                            href={member.linkedin}
                            className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-[#39894c] hover:text-white transition-colors"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Linkedin size={18} />
                          </a>
                        </div>
                      )}
                    </div>

                    <div className="p-6">
                      <h3 className="text-2xl font-bold text-slate-900 mb-2">{member.name}</h3>
                      <p className="text-[#39894c] font-semibold mb-3">{member.role}</p>
                      <p className="text-slate-600 leading-relaxed">{member.bio}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-12 flex flex-wrap items-center justify-center gap-2">
                <button
                  type="button"
                  onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
                  disabled={currentPage === 1}
                  className="px-4 py-2 rounded-lg border border-slate-300 text-slate-700 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-slate-100"
                >
                  Previous
                </button>

                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    type="button"
                    onClick={() => setCurrentPage(page)}
                    className={`px-4 py-2 rounded-lg border ${
                      page === currentPage
                        ? "bg-[#39894c] text-white border-[#39894c]"
                        : "border-slate-300 text-slate-700 hover:bg-slate-100"
                    }`}
                  >
                    {page}
                  </button>
                ))}

                <button
                  type="button"
                  onClick={() => setCurrentPage((prev) => Math.min(totalPages, prev + 1))}
                  disabled={currentPage === totalPages}
                  className="px-4 py-2 rounded-lg border border-slate-300 text-slate-700 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-slate-100"
                >
                  Next
                </button>
              </div>
            </>
          )}
        </section>
      </main>

      <Footer />
    </div>
  );
}



