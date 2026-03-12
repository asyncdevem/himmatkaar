"use client";

import Link from "next/link";
import Image from "next/image";
import { 
  Zap,
  LayoutDashboard,
  BookOpen,
  FileText,
  User,
  Award,
  LogOut,
  Search,
  Bell,
  Download,
  Share2,
  CheckCircle,
  Calendar
} from "lucide-react";

export default function StudentCertificates() {
  const certificates = [
    {
      id: 1,
      courseName: "Professional Communication",
      issueDate: "October 15, 2023",
      certificateNumber: "HK-2023-PC-001234",
      instructor: "Dr. Sarah Ahmed"
    },
    {
      id: 2,
      courseName: "Leadership Fundamentals",
      issueDate: "September 28, 2023",
      certificateNumber: "HK-2023-LF-001189",
      instructor: "Prof. Ali Hassan"
    },
    {
      id: 3,
      courseName: "Digital Literacy Basics",
      issueDate: "August 12, 2023",
      certificateNumber: "HK-2023-DL-000987",
      instructor: "Ms. Fatima Khan"
    }
  ];

  return (
    <div className="flex h-screen overflow-hidden bg-slate-50 font-display text-slate-900">
      
      {/* Sidebar */}
      <aside className="w-72 flex-shrink-0 border-r border-slate-200 bg-white flex flex-col justify-between py-8">
        <div>
          <div className="px-8 mb-10 flex items-center gap-3">
            <Image
              src="/himmatkaar-logo.jpg"
              alt="HimmatKaar Logo"
              width={40}
              height={40}
              className="rounded-lg"
            />
            <div>
              <h1 className="text-xl font-extrabold tracking-tight text-slate-900 leading-none">HimmatKaar</h1>
              <p className="text-[10px] uppercase tracking-widest text-[#3a8a4d] font-bold mt-1">Youth Empowerment</p>
            </div>
          </div>
          <nav className="space-y-1">
            <Link href="/dashboard/student" className="flex items-center gap-4 px-8 py-4 text-slate-500 hover:text-[#3a8a4d] transition-colors">
              <LayoutDashboard size={24} />
              <span>Dashboard</span>
            </Link>
            <Link href="/dashboard/student/courses" className="flex items-center gap-4 px-8 py-4 text-slate-500 hover:text-[#3a8a4d] transition-colors">
              <BookOpen size={24} />
              <span>My Courses</span>
            </Link>
            <Link href="/dashboard/student/assignments" className="flex items-center gap-4 px-8 py-4 text-slate-500 hover:text-[#3a8a4d] transition-colors">
              <FileText size={24} />
              <span>Assignments</span>
            </Link>
            <Link href="/dashboard/student/profile" className="flex items-center gap-4 px-8 py-4 text-slate-500 hover:text-[#3a8a4d] transition-colors">
              <User size={24} />
              <span>Profile</span>
            </Link>
            <Link href="/dashboard/student/certificates" className="flex items-center gap-4 px-8 py-4 text-[#3a8a4d] font-semibold bg-[#3a8a4d]/20 border-l-4 border-[#3a8a4d]">
              <Award size={24} />
              <span>Certificates</span>
            </Link>
          </nav>
        </div>
        <div className="px-8 pt-6 border-t border-slate-200">
          <Link href="/login" className="flex items-center gap-4 text-slate-500 hover:text-red-500 transition-colors py-2">
            <LogOut size={24} />
            <span className="font-medium">Log Out</span>
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto bg-slate-50">
        
        {/* Top Bar */}
        <header className="sticky top-0 z-10 flex items-center justify-between px-10 py-6 bg-slate-50/80 backdrop-blur-md">
          <div>
            <h2 className="text-2xl font-extrabold text-slate-900">My Certificates</h2>
            <p className="text-slate-500 text-sm font-medium">Your earned achievements and credentials</p>
          </div>
          <div className="flex items-center gap-8">
            <div className="relative hidden lg:block">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
              <input 
                className="w-80 h-12 pl-12 pr-4 rounded-xl border border-slate-200 bg-white shadow-sm focus:ring-2 focus:ring-[#3a8a4d]/50 text-slate-900 placeholder:text-slate-400 focus:outline-none" 
                placeholder="Search certificates..." 
                type="text"
              />
            </div>
            <button className="relative p-2.5 rounded-xl bg-white border border-slate-200 shadow-sm">
              <Bell className="text-slate-600" size={24} />
              <span className="absolute top-2 right-2 size-2.5 bg-red-500 rounded-full border-2 border-white"></span>
            </button>
            <div className="flex items-center gap-3 pl-4 border-l border-slate-200">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-bold text-slate-900 leading-none">Ahmed Khan</p>
                <p className="text-xs text-[#3a8a4d] font-medium mt-1">Student Fellow</p>
              </div>
              <div 
                className="size-11 rounded-full bg-cover bg-center border-2 border-[#3a8a4d]/20 shadow-lg" 
                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD_oyK1si8H3tGuQnYk3qAtfx2oGqjeuQR2Bj8ZCBNvPeCNBWOjeUxNZhCgt_Up1u0ASw0fetWV59ZW0rU3vyaqQ_ctbiAVi0xk1nPpJJJzqklmJmNIampCBr66xR2DYrfOhDeKrcjbofvPQBheIvScDZbLv-NgdI_Q60fJkgDvXsqehtet80INRiZU8XyNFnNUsCt36cE0G4W27Ptec6UPq-VAZiFen_7dU2gs5NF6pussL4IbzF0o0dVBSDViSQS1AlspaJhV-pRc')" }}
              ></div>
            </div>
          </div>
        </header>

        <div className="px-10 pb-10">
          
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-[#3a8a4d]/10 rounded-xl">
                  <Award className="text-[#3a8a4d]" size={24} />
                </div>
                <span className="text-xs font-bold text-[#3a8a4d] bg-[#3a8a4d]/10 px-3 py-1 rounded-full">Active</span>
              </div>
              <p className="text-sm text-slate-500 font-medium">Total Certificates</p>
              <p className="text-3xl font-extrabold text-slate-900 mt-1">{certificates.length}</p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-blue-50 rounded-xl">
                  <CheckCircle className="text-blue-600" size={24} />
                </div>
              </div>
              <p className="text-sm text-slate-500 font-medium">Courses Completed</p>
              <p className="text-3xl font-extrabold text-slate-900 mt-1">3</p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-purple-50 rounded-xl">
                  <Calendar className="text-purple-600" size={24} />
                </div>
              </div>
              <p className="text-sm text-slate-500 font-medium">Latest Certificate</p>
              <p className="text-lg font-extrabold text-slate-900 mt-1">Oct 15, 2023</p>
            </div>
          </div>

          {/* Certificates Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {certificates.map((cert) => (
              <div key={cert.id} className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 group">
                
                {/* Certificate Preview */}
                <div className="relative mb-6 rounded-xl overflow-hidden bg-[#39894c]/10 aspect-[4/3] flex items-center justify-center border-2 border-slate-100">
                  <div className="text-center p-8">
                    <Award className="mx-auto text-[#3a8a4d] mb-4" size={48} />
                    <h3 className="text-xl font-extrabold text-slate-900 mb-2">{cert.courseName}</h3>
                    <p className="text-sm text-slate-600 font-medium">Certificate of Completion</p>
                    <div className="mt-4 pt-4 border-t border-slate-200">
                      <p className="text-xs text-slate-500">Awarded to</p>
                      <p className="text-lg font-bold text-slate-900">Ahmed Khan</p>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <CheckCircle className="inline text-[#3a8a4d]" size={16} />
                    <span className="ml-1 text-xs font-bold text-[#3a8a4d]">Verified</span>
                  </div>
                </div>

                {/* Certificate Details */}
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">Certificate Number</p>
                      <p className="text-sm font-bold text-slate-900 font-mono">{cert.certificateNumber}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">Issue Date</p>
                      <p className="text-sm font-bold text-slate-900">{cert.issueDate}</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">Instructor</p>
                    <p className="text-sm font-bold text-slate-900">{cert.instructor}</p>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-3">
                  <button className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-[#3a8a4d] text-white font-bold rounded-xl hover:brightness-110 transition-all shadow-lg shadow-[#3a8a4d]/20">
                    <Download size={20} />
                    Download PDF
                  </button>
                  <button className="px-4 py-3 bg-slate-100 text-slate-700 font-bold rounded-xl hover:bg-slate-200 transition-all">
                    <Share2 size={20} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State (if no certificates) */}
          {certificates.length === 0 && (
            <div className="bg-white rounded-2xl p-12 text-center border border-slate-100">
              <Award className="mx-auto text-slate-300 mb-4" size={64} />
              <h3 className="text-xl font-bold text-slate-900 mb-2">No Certificates Yet</h3>
              <p className="text-slate-500 mb-6">Complete courses to earn your first certificate!</p>
              <Link href="/dashboard/student/courses">
                <button className="px-6 py-3 bg-[#3a8a4d] text-white font-bold rounded-xl hover:brightness-110 transition-all">
                  Browse Courses
                </button>
              </Link>
            </div>
          )}

        </div>
      </main>
    </div>
  );
}
