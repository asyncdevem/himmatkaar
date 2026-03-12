"use client";

import { motion } from "framer-motion";
import Link from "next/link";
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
  Trophy,
  Flame,
  GraduationCap,
  ArrowRight,
  Upload,
  CheckCircle,
  MessageSquare,
  Star,
  Clock
} from "lucide-react";

export default function StudentDashboard() {
  return (
    <div className="flex h-screen overflow-hidden bg-slate-50 font-display text-slate-900">
      
      {/* Sidebar */}
      <aside className="w-72 flex-shrink-0 border-r border-slate-200 bg-white flex flex-col justify-between py-8">
        <div>
          <div className="px-8 mb-10 flex items-center gap-3">
            <div className="size-10 bg-primary rounded-lg flex items-center justify-center text-white">
              <Zap size={24} className="font-bold" />
            </div>
            <div>
              <h1 className="text-xl font-extrabold tracking-tight text-slate-900 leading-none">HimmatKaar</h1>
              <p className="text-[10px] uppercase tracking-widest text-[#3a8a4d] font-bold mt-1">Youth Empowerment</p>
            </div>
          </div>
          <nav className="space-y-1">
            <Link href="/dashboard/student" className="flex items-center gap-4 px-8 py-4 text-[#3a8a4d] font-semibold bg-[#3a8a4d]/20 border-l-4 border-[#3a8a4d]">
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
            <Link href="/dashboard/student/certificates" className="flex items-center gap-4 px-8 py-4 text-slate-500 hover:text-[#3a8a4d] transition-colors">
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

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto bg-slate-50">
        
        {/* Top Bar */}
        <header className="sticky top-0 z-10 flex items-center justify-between px-10 py-6 bg-slate-50/80 backdrop-blur-md">
          <div>
            <h2 className="text-2xl font-extrabold text-slate-900">Hello, Ahmed!</h2>
            <p className="text-slate-500 text-sm font-medium">Here&apos;s your progress for today</p>
          </div>
          <div className="flex items-center gap-8">
            <div className="relative hidden lg:block">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
              <input 
                className="w-80 h-12 pl-12 pr-4 rounded-xl border border-slate-200 bg-white shadow-sm focus:ring-2 focus:ring-[#3a8a4d]/50 text-slate-900 placeholder:text-slate-400 focus:outline-none" 
                placeholder="Search courses, mentors..." 
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

        <div className="px-10 pb-10 grid grid-cols-12 gap-8">
          
          {/* Left Column */}
          <div className="col-span-12 xl:col-span-8 space-y-8">
            <section>
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-slate-900">Active Courses</h3>
                <a className="text-[#3a8a4d] font-bold text-sm hover:underline" href="#">View All</a>
              </div>
              
              <div className="space-y-4">
                {/* Course Card 1 */}
                <div className="group bg-white rounded-2xl p-4 flex flex-col md:flex-row gap-6 shadow-sm border border-slate-100 hover:shadow-xl hover:border-[#3a8a4d]/20 transition-all duration-300">
                  <div className="md:w-56 h-36 flex-shrink-0 overflow-hidden rounded-xl relative">
                    <div 
                      className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-500" 
                      style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC5gUGyFKXkjqhm46EQ46wMiilwTKOqzE_w48QOoikiCxLFr-0VjiJeRPcJEvugY2FG9mSLfOygSLVGGkVfcatTOAeBmVgpC5pNwWrJ-ldm2TygsQvViOWjKpGgeCvI5SWUbIygvXBrHiPdSfHHjxvkRCgq1oGNx15Y2PqBJ-MuojwWBOiOKEJERxaNNwfOxh9aJHVf2QcfqgmzGBbo1tIZIuKA41F3UD80MZFjCSE6XP9ZQZWEuqTvo-S7Z7I06sViuMyS3jEllTI4')" }}
                    ></div>
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                    <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-md px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider text-[#3a8a4d]">Communication</div>
                  </div>
                  <div className="flex-1 flex flex-col justify-between py-1">
                    <div>
                      <h4 className="text-lg font-extrabold text-slate-900 mb-1">Professional Communication</h4>
                      <p className="text-sm text-slate-500 font-medium mb-4">Instructor: Dr. Sarah Ahmed</p>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-slate-600 font-bold">Progress</span>
                        <span className="text-[#3a8a4d] font-extrabold">75%</span>
                      </div>
                      <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                        <div className="h-full bg-[#3a8a4d] rounded-full shadow-[0_0_8px_rgba(58,138,77,0.4)]" style={{ width: "75%" }}></div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col justify-center">
                    <button className="px-6 py-3 bg-[#3a8a4d]/10 text-[#3a8a4d] font-bold rounded-xl hover:bg-[#3a8a4d] hover:text-white transition-all">Continue</button>
                  </div>
                </div>

                {/* Course Card 2 */}
                <div className="group bg-white rounded-2xl p-4 flex flex-col md:flex-row gap-6 shadow-sm border border-slate-100 hover:shadow-xl hover:border-[#3a8a4d]/20 transition-all duration-300">
                  <div className="md:w-56 h-36 flex-shrink-0 overflow-hidden rounded-xl relative">
                    <div 
                      className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-500" 
                      style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBBXVBN-FrDegipn4ssb7bJQOYdkYfiuz8guKjHruepsvSU8T6qCyoFZNOeqenEDieEOgoBGEuuFJYi3Zv0-SI3zO_O4vNwo97scg0TkM8dlJLUVwkqAkcTocrBNK2hsZUekAPGYtqyVh1TEiprvTTKypcMT9qbevIFi4dMZqXY1K3Vvn_TGZy0Tk5dd_natW2iXfoAm0-1jBCqdzVNkbrcYI9ScVW9fHHo9m6sd03GXVe8HAdlwQelTeyMcY-8TejbuoiQVKNJ4TxF')" }}
                    ></div>
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                    <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-md px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider text-[#3a8a4d]">Career</div>
                  </div>
                  <div className="flex-1 flex flex-col justify-between py-1">
                    <div>
                      <h4 className="text-lg font-extrabold text-slate-900 mb-1">Resume Writing Workshop</h4>
                      <p className="text-sm text-slate-500 font-medium mb-4">Instructor: Ali Hassan</p>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-slate-600 font-bold">Progress</span>
                        <span className="text-[#3a8a4d] font-extrabold">32%</span>
                      </div>
                      <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                        <div className="h-full bg-[#3a8a4d] rounded-full shadow-[0_0_8px_rgba(58,138,77,0.4)]" style={{ width: "32%" }}></div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col justify-center">
                    <button className="px-6 py-3 bg-[#3a8a4d]/10 text-[#3a8a4d] font-bold rounded-xl hover:bg-[#3a8a4d] hover:text-white transition-all">Continue</button>
                  </div>
                </div>

              </div>
            </section>

            <section>
              <h3 className="text-xl font-bold text-slate-900 mb-6">Recent Achievements</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                
                <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4 hover:shadow-md transition-shadow">
                  <div className="size-12 rounded-full bg-[#3a8a4d]/10 flex items-center justify-center text-[#3a8a4d]">
                    <Trophy size={24} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900">Top 5% Weekly</p>
                    <p className="text-xs text-slate-500">Awarded Oct 12</p>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4 hover:shadow-md transition-shadow">
                  <div className="size-12 rounded-full bg-orange-100 flex items-center justify-center text-orange-500">
                    <Flame size={24} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900">15 Day Streak</p>
                    <p className="text-xs text-slate-500">Keep it up!</p>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4 hover:shadow-md transition-shadow">
                  <div className="size-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-500">
                    <GraduationCap size={24} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900">Course Master</p>
                    <p className="text-xs text-slate-500">3 Courses Done</p>
                  </div>
                </div>

              </div>
            </section>
          </div>

          {/* Right Column */}
          <div className="col-span-12 xl:col-span-4 space-y-8">
            
            {/* Progress Overview Card */}
            <div className="bg-white/40 border border-white/60 backdrop-blur-xl shadow-sm rounded-3xl p-8 relative overflow-hidden bg-[#3a8a4d]/5">
              <div className="absolute -top-12 -right-12 size-48 bg-[#3a8a4d]/20 rounded-full blur-3xl"></div>
              <h4 className="text-lg font-extrabold mb-8 text-slate-900">Overall Progress</h4>
              <div className="flex flex-col items-center relative z-10">
                <div className="relative size-40 mb-6 drop-shadow-md">
                  <svg className="size-full" viewBox="0 0 100 100">
                    <circle className="text-slate-200 stroke-current" cx="50" cy="50" fill="transparent" r="40" strokeWidth="8"></circle>
                    <circle className="text-[#3a8a4d] stroke-current" cx="50" cy="50" fill="transparent" r="40" strokeDasharray="251.2" strokeDashoffset="62.8" strokeLinecap="round" strokeWidth="8"></circle>
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-3xl font-extrabold text-slate-900">75%</span>
                    <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">Completed</span>
                  </div>
                </div>
                <p className="text-sm text-center text-slate-600 mb-6 px-4">You&apos;re doing great, Ahmed! You&apos;ve finished 12 out of 16 modules this month.</p>
                <a className="text-[#3a8a4d] font-bold text-sm flex items-center gap-1 group" href="#">
                  View detailed analytics
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            {/* Next Assignment Card */}
            <div className="bg-[#111c19] text-white rounded-3xl p-8 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4">
                <span className="px-3 py-1 bg-red-500/20 text-red-400 text-[10px] font-bold uppercase rounded-full border border-red-500/30">Due in 2 days</span>
              </div>
              <p className="text-[#3a8a4d] text-xs font-bold uppercase tracking-widest mb-2">Upcoming Deadline</p>
              <h4 className="text-xl font-extrabold mb-4">Resume Draft Submission</h4>
              <p className="text-slate-400 text-sm mb-8 leading-relaxed">Submit your first draft of your resume incorporating the feedback from the last session.</p>
              <button className="w-full py-4 bg-[#3a8a4d] text-white font-extrabold rounded-2xl hover:brightness-110 transition-all shadow-lg shadow-[#3a8a4d]/30 flex items-center justify-center gap-2">
                Submit Now
                <Upload size={20} />
              </button>
            </div>

            {/* Recent Activity Feed */}
            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm">
              <h4 className="text-lg font-extrabold mb-6 text-slate-900">Recent Activity</h4>
              <div className="space-y-6">
                
                <div className="flex gap-4">
                  <div className="size-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 text-green-600">
                    <CheckCircle size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900">Communication Essay Completed</p>
                    <p className="text-xs text-slate-500 mt-0.5">Professional Communication • 2 hours ago</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="size-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 text-blue-600">
                    <MessageSquare size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900">Forum Reply</p>
                    <p className="text-xs text-slate-500 mt-0.5">New response from Dr. Sarah Ahmed • 5 hours ago</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="size-10 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0 text-orange-600">
                    <Star size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900">Assignment Graded</p>
                    <p className="text-xs text-slate-500 mt-0.5">Leadership Quiz • Yesterday</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="size-10 rounded-full bg-slate-100 flex items-center justify-center flex-shrink-0 text-slate-500">
                    <Clock size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900">Study Session Started</p>
                    <p className="text-xs text-slate-500 mt-0.5">Communication Skills • 2 days ago</p>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}

