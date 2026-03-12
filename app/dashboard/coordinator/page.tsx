"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { 
  Rocket,
  LayoutGrid,
  Users,
  FileText,
  BarChart2,
  MessageSquare,
  HelpCircle,
  Search,
  Bell,
  Clock,
  UploadCloud,
  CheckCircle2,
  MoreHorizontal,
  Calendar,
  FileEdit,
  Sparkles
} from "lucide-react";

export default function CoordinatorDashboard() {
  return (
    <div className="flex h-screen overflow-hidden bg-[#f6f6f8] font-display text-slate-900 antialiased">
      
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-slate-200 flex flex-col z-20">
        <div className="p-6 flex items-center gap-3">
          <div className="bg-[#2563eb] rounded-lg p-2 text-white">
            <Rocket size={24} />
          </div>
          <div>
            <h1 className="font-bold text-lg tracking-tight">HimmatKaar</h1>
            <p className="text-xs text-slate-500 font-medium">Empowerment Platform</p>
          </div>
        </div>
        
        <nav className="flex-1 px-4 py-4 space-y-1">
          <Link href="/dashboard/coordinator" className="flex items-center gap-3 px-4 py-3 rounded-xl bg-[#2563eb] text-white shadow-lg shadow-[#2563eb]/20 transition-all">
            <LayoutGrid size={20} />
            <span className="font-medium text-sm">Overview</span>
          </Link>
          <Link href="/dashboard/coordinator/students" className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-600 hover:bg-slate-50 transition-all">
            <Users size={20} />
            <span className="font-medium text-sm">Students</span>
          </Link>
          <Link href="/dashboard/coordinator/assignments" className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-600 hover:bg-slate-50 transition-all">
            <FileText size={20} />
            <span className="font-medium text-sm">Assignments</span>
          </Link>
          <Link href="/dashboard/coordinator/reports" className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-600 hover:bg-slate-50 transition-all">
            <BarChart2 size={20} />
            <span className="font-medium text-sm">Reports</span>
          </Link>
          <Link href="/dashboard/coordinator/messages" className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-600 hover:bg-slate-50 transition-all">
            <MessageSquare size={20} />
            <span className="font-medium text-sm">Messages</span>
          </Link>
        </nav>
        
        <div className="p-4 mt-auto">
          <div className="bg-slate-50 rounded-xl p-4">
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Support</p>
            <Link href="/support" className="flex items-center gap-3 text-sm text-slate-600 hover:text-[#2563eb] transition-colors">
              <HelpCircle size={20} />
              <span>Help Center</span>
            </Link>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        
        {/* Top Bar */}
        <header className="h-18 bg-white/80 backdrop-blur-md border-b border-slate-200 px-8 py-4 flex items-center justify-between">
          <h2 className="text-xl font-bold">Coordinator Portal</h2>
          <div className="flex-1 max-w-2xl px-8">
            <div className="relative group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#2563eb] transition-colors" size={20} />
              <input 
                className="w-full bg-slate-100 border border-slate-200 rounded-xl py-2.5 pl-12 pr-4 focus:ring-2 focus:ring-[#2563eb]/20 text-sm transition-all placeholder:text-slate-400 focus:outline-none" 
                placeholder="Search students, courses, assignments..." 
                type="text"
              />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="relative p-2 rounded-full hover:bg-slate-100 transition-colors">
              <Bell className="text-slate-600" size={24} />
              <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full ring-2 ring-white"></span>
            </button>
            <div className="h-8 w-[1px] bg-slate-200 mx-2"></div>
            <div className="flex items-center gap-3 pl-4">
              <div className="text-right">
                <p className="text-sm font-semibold">Zainab Khan</p>
                <p className="text-[10px] text-slate-500 font-medium">Head Coordinator</p>
              </div>
              <div 
                className="w-10 h-10 rounded-full bg-cover bg-center border-2 border-[#2563eb]/10" 
                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBD7R9CantV50pBuRs8faf5poBfTEctBP1H8A-PYp6Jyhks-RGrvCR5Vmva3NBRU0I1JR_hxMawrVle8EI3n7rgvoE948mW6FdT7ZDknZQwc5QJkDhXvDize0HxBJrFTgG8OGYLRVhDYstalz5aOW0QX4jgmrvLD1P8eESbg8dgYxqNfwBwlmnIqboW261UJUUFrArhpz8VcPyp6SyxEoL-ZDL90YMYp4raZjp40g6LzHk3PAgxjkw_odOSQ_4TBj3E30FitArttR7G')" }}
              ></div>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="flex-1 overflow-y-auto p-8 scroll-smooth">
          
          {/* Metrics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white/70 backdrop-blur-md rounded-xl p-6 border border-white/50 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <div className="p-2 bg-blue-50 text-[#2563eb] rounded-lg">
                  <Users size={24} />
                </div>
                <span className="text-[#10b981] text-xs font-bold">+2.4%</span>
              </div>
              <h3 className="text-slate-500 text-sm font-medium">Active Students</h3>
              <p className="text-3xl font-bold mt-1">524</p>
            </div>
            
            <div className="bg-white/70 backdrop-blur-md rounded-xl p-6 border border-white/50 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <div className="p-2 bg-orange-50 text-[#f59e0b] rounded-lg">
                  <Clock size={24} />
                </div>
                <span className="bg-red-500/10 text-red-500 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-tight">Urgent</span>
              </div>
              <h3 className="text-slate-500 text-sm font-medium">To Grade</h3>
              <p className="text-3xl font-bold mt-1">12</p>
            </div>
            
            <div className="bg-white/70 backdrop-blur-md rounded-xl p-6 border border-white/50 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <div className="p-2 bg-green-50 text-[#10b981] rounded-lg">
                  <UploadCloud size={24} />
                </div>
                <span className="text-slate-400 text-xs font-medium">Today</span>
              </div>
              <h3 className="text-slate-500 text-sm font-medium">Recent Submissions</h3>
              <p className="text-3xl font-bold mt-1">28</p>
            </div>
            
            <div className="bg-white/70 backdrop-blur-md rounded-xl p-6 border border-white/50 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <div className="p-2 bg-purple-50 text-purple-600 rounded-lg">
                  <CheckCircle2 size={24} />
                </div>
                <span className="text-[#10b981] text-xs font-bold">+5.1%</span>
              </div>
              <h3 className="text-slate-500 text-sm font-medium">Avg. Completion</h3>
              <p className="text-3xl font-bold mt-1">84%</p>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            
            {/* Student Activity Table */}
            <div className="lg:w-[70%] bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
              <div className="px-6 py-4 border-b border-slate-200 flex items-center justify-between">
                <h3 className="font-bold text-lg">Student Activity</h3>
                <button className="text-[#2563eb] text-sm font-semibold hover:underline">View All</button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead className="bg-slate-50 text-slate-500 text-xs uppercase tracking-wider">
                    <tr>
                      <th className="px-6 py-4 font-semibold">Student Name</th>
                      <th className="px-6 py-4 font-semibold">Course Title</th>
                      <th className="px-6 py-4 font-semibold">Last Active</th>
                      <th className="px-6 py-4 font-semibold">Status</th>
                      <th className="px-6 py-4 font-semibold text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    
                    {/* Row 1 */}
                    <tr className="hover:bg-slate-50/50 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div 
                            className="w-8 h-8 rounded-full bg-cover bg-center" 
                            style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuASBfE8L0TBh0RfW_hDz_2ufIGnz3UwhVvNEs0H97zhX9lUqau9vODMwzK70evz2YL6lWOrpO3UK6dO6aY7p44STo42HtwAwoRI0phn4JUWCEPn0qw5eMCaEujcXbcc1c9BTrM3n9BWy79KZZMtyadSZPMk47XZLk_vvxAg4C6A-l4oHz2e04mrmLy8l0UC0t71DaMAxSx0eXXcoXIo9bO4Kcth1immS01TpEahJ3jnkjsBYdGLtG7bYziUpJOL1nZc9Ix6WUXbi4us')" }}
                          ></div>
                          <span className="text-sm font-semibold">Adnan Khan</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-600">Leadership 101</td>
                      <td className="px-6 py-4 text-sm text-slate-500">2h ago</td>
                      <td className="px-6 py-4">
                        <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-[#10b981]/10 text-[#10b981] uppercase">On Track</span>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <button className="text-slate-400 hover:text-slate-600 transition-colors">
                          <MoreHorizontal size={20} />
                        </button>
                      </td>
                    </tr>

                    {/* Row 2 */}
                    <tr className="hover:bg-slate-50/50 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div 
                            className="w-8 h-8 rounded-full bg-cover bg-center" 
                            style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBirIM9ewM1iFF9-zJg8LMs-oMP-ajSdlqBZHyNjncWJ5fAJq9BfuVaUTlONzUynHIbxSZGMM7aI-kRMUK61bhwkbyURZLcFkQJDGXSd21YTaWA5emXQs3r-Y-fXEvIu6GGHs2MAV8TJPW-tOL2TuHJtFGE3tt_BcyMRPoMTEltaEKsOXo_712pUSDAnBsfA2DeH5qGrUniuVFH45zYMJ2xZnbWJfWKmS9q-zn35TBUDWQZES2oOwOPBSU6QMIqb7tB8E4ugCwmQnKM')" }}
                          ></div>
                          <span className="text-sm font-semibold">Sara Ahmed</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-600">Digital Literacy</td>
                      <td className="px-6 py-4 text-sm text-slate-500">5h ago</td>
                      <td className="px-6 py-4">
                        <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-[#f59e0b]/10 text-[#f59e0b] uppercase">Needs Help</span>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <button className="text-slate-400 hover:text-slate-600 transition-colors">
                          <MoreHorizontal size={20} />
                        </button>
                      </td>
                    </tr>

                    {/* Row 3 */}
                    <tr className="hover:bg-slate-50/50 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div 
                            className="w-8 h-8 rounded-full bg-cover bg-center" 
                            style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCNyBZnjoKyB14CHsqA4SDttEMlGthqPOA6PE4ulIDToJK1Sgvlg__JQ9aR7SEKaR1WUJhubeA8toRVGrNQe-0KMmOmZokDk2Anb2i2rsO_-k1RyBDUlnqfA3mUkhMVbSnVYsKAUh-ZTFsXZJMLMolZRXi5g0dPrlTEa4QTg3Q_49yyCV7ElGTlzJ0Sncm1N7_krZ2C0lf8d7zrtc0AYmUuVtMEobjnDsLAmeA10NZflW2Le7dn0RUDjBGa-luRav_NyRdtNQxfhMta')" }}
                          ></div>
                          <span className="text-sm font-semibold">Zain Malik</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-600">Social Innovation</td>
                      <td className="px-6 py-4 text-sm text-slate-500">1d ago</td>
                      <td className="px-6 py-4">
                        <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-slate-100 text-slate-500 uppercase">Inactive</span>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <button className="text-slate-400 hover:text-slate-600 transition-colors">
                          <MoreHorizontal size={20} />
                        </button>
                      </td>
                    </tr>

                    {/* Row 4 */}
                    <tr className="hover:bg-slate-50/50 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div 
                            className="w-8 h-8 rounded-full bg-cover bg-center" 
                            style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCFnuehxPUugytD0kX8rndosIw7QkGw8AhLWlB7fXCVeeu6D11Ju-4ToBsJC5vZYm9zEEDl1tlEiKHkXrHUX3ni3lEcDju7w-ANyeAm4lhFjgb4r9HgiZRza5jCVzg6hwzjjg5Nv2hodgSQPJ7U97TPbGAqEbfcyF4URVh-xkD52dGxLKcsbJ2yxLsTy465SL1CYLPDmuKc6hO7BxT1SlmVs9fqndMtUx0hE1Phe_htJ-hywmpmZCTnGY9-V1Xff5P6ib81-uOo4G8a')" }}
                          ></div>
                          <span className="text-sm font-semibold">Omar Farooq</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-600">Public Speaking</td>
                      <td className="px-6 py-4 text-sm text-slate-500">3h ago</td>
                      <td className="px-6 py-4">
                        <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-[#10b981]/10 text-[#10b981] uppercase">On Track</span>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <button className="text-slate-400 hover:text-slate-600 transition-colors">
                          <MoreHorizontal size={20} />
                        </button>
                      </td>
                    </tr>

                  </tbody>
                </table>
              </div>
            </div>

            {/* Sidebar Section: Upcoming Milestones */}
            <div className="lg:w-[30%] space-y-6">
              
              <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
                <h3 className="font-bold text-lg mb-6">Upcoming Milestones</h3>
                <div className="space-y-8 relative">
                  {/* Timeline Line */}
                  <div className="absolute left-[11px] top-2 bottom-2 w-[2px] bg-slate-100"></div>

                  {/* Milestone 1 */}
                  <div className="relative pl-10">
                    <div className="absolute left-0 top-1.5 w-[24px] h-[24px] rounded-full bg-[#2563eb] flex items-center justify-center ring-4 ring-white z-10">
                      <Calendar size={14} className="text-white" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <div className="flex justify-between items-start">
                        <p className="text-sm font-bold">Leadership Workshop</p>
                        <span className="text-[10px] font-bold text-slate-400 uppercase">Oct 24</span>
                      </div>
                      <p className="text-xs text-slate-500 leading-relaxed">Guest session with Dr. Arsalan on adaptive leadership styles.</p>
                      <button className="mt-3 w-fit px-4 py-1.5 rounded-lg bg-[#2563eb]/10 text-[#2563eb] text-xs font-bold hover:bg-[#2563eb] hover:text-white transition-all">Join Session</button>
                    </div>
                  </div>

                  {/* Milestone 2 */}
                  <div className="relative pl-10">
                    <div className="absolute left-0 top-1.5 w-[24px] h-[24px] rounded-full bg-slate-200 flex items-center justify-center ring-4 ring-white z-10">
                      <FileEdit size={14} className="text-slate-500" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <div className="flex justify-between items-start">
                        <p className="text-sm font-bold">Mid-term Review</p>
                        <span className="text-[10px] font-bold text-slate-400 uppercase">Oct 28</span>
                      </div>
                      <p className="text-xs text-slate-500 leading-relaxed">Deadline for students to submit phase 1 project reports.</p>
                      <button className="mt-3 w-fit px-4 py-1.5 rounded-lg border border-slate-200 text-slate-600 text-xs font-bold hover:bg-slate-50 transition-all">Set Reminder</button>
                    </div>
                  </div>

                  {/* Milestone 3 */}
                  <div className="relative pl-10">
                    <div className="absolute left-0 top-1.5 w-[24px] h-[24px] rounded-full bg-slate-200 flex items-center justify-center ring-4 ring-white z-10">
                      <Users size={14} className="text-slate-500" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <div className="flex justify-between items-start">
                        <p className="text-sm font-bold">Peer Mentorship</p>
                        <span className="text-[10px] font-bold text-slate-400 uppercase">Nov 02</span>
                      </div>
                      <p className="text-xs text-slate-500 leading-relaxed">Monthly sync with student ambassadors and team leads.</p>
                    </div>
                  </div>

                </div>
              </div>

              {/* Promotion/Info Card */}
              <div className="bg-[#2d5f3d] rounded-xl p-6 text-white shadow-xl shadow-[#39894c]/20 relative overflow-hidden">
                <div className="relative z-10">
                  <h4 className="font-bold mb-2">Platform Update v2.4</h4>
                  <p className="text-xs text-blue-100 mb-4">New student analytics tools and detailed course tracking are now available.</p>
                  <button className="bg-white text-[#2563eb] text-xs font-bold px-4 py-2 rounded-lg shadow-sm">Explore Features</button>
                </div>
                <Sparkles className="absolute -bottom-6 -right-6 w-32 h-32 opacity-10 rotate-12" />
              </div>

            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
