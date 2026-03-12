"use client";

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
  Filter,
  Download,
  Eye,
  CheckCircle,
  Clock,
  AlertCircle
} from "lucide-react";
import { useState } from "react";

export default function CoordinatorAssignments() {
  const [selectedAssignment, setSelectedAssignment] = useState<number | null>(null);

  const assignments = [
    {
      id: 1,
      title: "Communication Essay",
      course: "Professional Communication",
      dueDate: "2026-03-20",
      submissions: 45,
      totalStudents: 52,
      pending: 7,
      graded: 38,
      status: "active"
    },
    {
      id: 2,
      title: "Leadership Case Study",
      course: "Leadership Fundamentals",
      dueDate: "2026-03-25",
      submissions: 28,
      totalStudents: 35,
      pending: 28,
      graded: 0,
      status: "active"
    },
    {
      id: 3,
      title: "Digital Literacy Quiz",
      course: "Digital Literacy Basics",
      dueDate: "2026-03-15",
      submissions: 67,
      totalStudents: 67,
      pending: 0,
      graded: 67,
      status: "completed"
    }
  ];

  const submissions = [
    {
      id: 1,
      studentName: "Adnan Khan",
      studentAvatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuASBfE8L0TBh0RfW_hDz_2ufIGnz3UwhVvNEs0H97zhX9lUqau9vODMwzK70evz2YL6lWOrpO3UK6dO6aY7p44STo42HtwAwoRI0phn4JUWCEPn0qw5eMCaEujcXbcc1c9BTrM3n9BWy79KZZMtyadSZPMk47XZLk_vvxAg4C6A-l4oHz2e04mrmLy8l0UC0t71DaMAxSx0eXXcoXIo9bO4Kcth1immS01TpEahJ3jnkjsBYdGLtG7bYziUpJOL1nZc9Ix6WUXbi4us')",
      submittedAt: "2 hours ago",
      status: "pending",
      fileUrl: "essay.pdf"
    },
    {
      id: 2,
      studentName: "Sara Ahmed",
      studentAvatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuBirIM9ewM1iFF9-zJg8LMs-oMP-ajSdlqBZHyNjncWJ5fAJq9BfuVaUTlONzUynHIbxSZGMM7aI-kRMUK61bhwkbyURZLcFkQJDGXSd21YTaWA5emXQs3r-Y-fXEvIu6GGHs2MAV8TJPW-tOL2TuHJtFGE3tt_BcyMRPoMTEltaEKsOXo_712pUSDAnBsfA2DeH5qGrUniuVFH45zYMJ2xZnbWJfWKmS9q-zn35TBUDWQZES2oOwOPBSU6QMIqb7tB8E4ugCwmQnKM')",
      submittedAt: "5 hours ago",
      status: "pending",
      fileUrl: "essay.pdf"
    },
    {
      id: 3,
      studentName: "Omar Farooq",
      studentAvatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuCFnuehxPUugytD0kX8rndosIw7QkGw8AhLWlB7fXCVeeu6D11Ju-4ToBsJC5vZYm9zEEDl1tlEiKHkXrHUX3ni3lEcDju7w-ANyeAm4lhFjgb4r9HgiZRza5jCVzg6hwzjjg5Nv2hodgSQPJ7U97TPbGAqEbfcyF4URVh-xkD52dGxLKcsbJ2yxLsTy465SL1CYLPDmuKc6hO7BxT1SlmVs9fqndMtUx0hE1Phe_htJ-hywmpmZCTnGY9-V1Xff5P6ib81-uOo4G8a')",
      submittedAt: "1 day ago",
      status: "graded",
      grade: 92,
      fileUrl: "essay.pdf"
    }
  ];

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
          <Link href="/dashboard/coordinator" className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-600 hover:bg-slate-50 transition-all">
            <LayoutGrid size={20} />
            <span className="font-medium text-sm">Overview</span>
          </Link>
          <Link href="/dashboard/coordinator/students" className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-600 hover:bg-slate-50 transition-all">
            <Users size={20} />
            <span className="font-medium text-sm">Students</span>
          </Link>
          <Link href="/dashboard/coordinator/assignments" className="flex items-center gap-3 px-4 py-3 rounded-xl bg-[#2563eb] text-white shadow-lg shadow-[#2563eb]/20 transition-all">
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

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        
        {/* Top Bar */}
        <header className="h-18 bg-white/80 backdrop-blur-md border-b border-slate-200 px-8 py-4 flex items-center justify-between">
          <h2 className="text-xl font-bold">Assignment Grading</h2>
          <div className="flex-1 max-w-2xl px-8">
            <div className="relative group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#2563eb] transition-colors" size={20} />
              <input 
                className="w-full bg-slate-100 border border-slate-200 rounded-xl py-2.5 pl-12 pr-4 focus:ring-2 focus:ring-[#2563eb]/20 text-sm transition-all placeholder:text-slate-400 focus:outline-none" 
                placeholder="Search assignments or students..." 
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
                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBD7R9CantV50pBuRs8faf5poBfTEctBP1H8A-PYp6Jyhks-RGrvCR5Vmva3NBRU0I1JR_hxMawrVle8EI3n7rgvoE948mW6FdT7ZDknZQwc5QJkDhXvDize0HxBJrFTgG8OGYLRVhDYstalz5aOW0QX4jgmrvLD1P8eESbg8dgYxqNfwBwlmnIqboW261UJUFrArhpz8VcPyp6SyxEoL-ZDL90YMYp4raZjp40g6LzHk3PAgxjkw_odOSQ_4TBj3E30FitArttR7G')" }}
              ></div>
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 overflow-y-auto p-8 scroll-smooth">
          
          {/* Action Bar */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-4">
              <button className="flex items-center gap-2 px-4 py-2 bg-slate-100 text-slate-700 rounded-xl hover:bg-slate-200 transition-all font-medium">
                <Filter size={20} />
                Filter
              </button>
              <select className="px-4 py-2 bg-slate-100 text-slate-700 rounded-xl border-none focus:ring-2 focus:ring-[#2563eb]/20 font-medium">
                <option>All Assignments</option>
                <option>Pending Review</option>
                <option>Graded</option>
                <option>Overdue</option>
              </select>
            </div>
            <button className="flex items-center gap-2 px-4 py-2 bg-[#2563eb] text-white rounded-xl hover:brightness-110 transition-all font-medium shadow-lg shadow-[#2563eb]/20">
              <Download size={20} />
              Export Grades
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
              <p className="text-sm text-slate-500 font-medium mb-2">Total Assignments</p>
              <p className="text-3xl font-extrabold text-slate-900">{assignments.length}</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
              <p className="text-sm text-slate-500 font-medium mb-2">Pending Review</p>
              <p className="text-3xl font-extrabold text-orange-600">{assignments.reduce((sum, a) => sum + a.pending, 0)}</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
              <p className="text-sm text-slate-500 font-medium mb-2">Graded</p>
              <p className="text-3xl font-extrabold text-green-600">{assignments.reduce((sum, a) => sum + a.graded, 0)}</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
              <p className="text-sm text-slate-500 font-medium mb-2">Avg. Grade</p>
              <p className="text-3xl font-extrabold text-slate-900">85%</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Assignments List */}
            <div className="lg:col-span-1 space-y-4">
              <h3 className="text-lg font-bold text-slate-900">Assignments</h3>
              {assignments.map((assignment) => (
                <div 
                  key={assignment.id}
                  onClick={() => setSelectedAssignment(assignment.id)}
                  className={`bg-white rounded-xl p-4 border cursor-pointer transition-all ${
                    selectedAssignment === assignment.id 
                      ? 'border-[#2563eb] shadow-lg' 
                      : 'border-slate-200 hover:border-[#2563eb]/50 shadow-sm'
                  }`}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="font-bold text-slate-900">{assignment.title}</h4>
                      <p className="text-xs text-slate-500">{assignment.course}</p>
                    </div>
                    {assignment.pending > 0 && (
                      <span className="px-2 py-1 bg-orange-100 text-orange-700 text-xs font-bold rounded-full">
                        {assignment.pending} pending
                      </span>
                    )}
                  </div>
                  
                  <div className="flex items-center gap-2 text-xs text-slate-600 mb-3">
                    <Clock size={14} />
                    <span>Due: {new Date(assignment.dueDate).toLocaleDateString()}</span>
                  </div>

                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-500">Submissions</span>
                    <span className="font-bold text-slate-900">{assignment.submissions}/{assignment.totalStudents}</span>
                  </div>
                  <div className="w-full bg-slate-100 h-1.5 rounded-full mt-2">
                    <div 
                      className="h-full bg-[#2563eb] rounded-full" 
                      style={{ width: `${(assignment.submissions / assignment.totalStudents) * 100}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Submissions List */}
            <div className="lg:col-span-2">
              {selectedAssignment ? (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold text-slate-900">Submissions</h3>
                    <button className="text-sm text-[#2563eb] font-semibold hover:underline">
                      Grade All
                    </button>
                  </div>

                  {submissions.map((submission) => (
                    <div key={submission.id} className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
                      <div className="flex items-start gap-4">
                        <div 
                          className="w-12 h-12 rounded-full bg-cover bg-center flex-shrink-0" 
                          style={{ backgroundImage: `url('${submission.studentAvatar}')` }}
                        ></div>
                        
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-3">
                            <div>
                              <h4 className="font-bold text-slate-900">{submission.studentName}</h4>
                              <p className="text-xs text-slate-500">Submitted {submission.submittedAt}</p>
                            </div>
                            {submission.status === 'pending' ? (
                              <span className="px-3 py-1 bg-orange-100 text-orange-700 text-xs font-bold rounded-full flex items-center gap-1">
                                <AlertCircle size={12} />
                                Pending Review
                              </span>
                            ) : (
                              <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full flex items-center gap-1">
                                <CheckCircle size={12} />
                                Graded: {submission.grade}%
                              </span>
                            )}
                          </div>

                          <div className="flex items-center gap-3 mb-4">
                            <button className="flex items-center gap-2 px-4 py-2 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 transition-all font-medium text-sm">
                              <Eye size={16} />
                              View Submission
                            </button>
                            <button className="flex items-center gap-2 px-4 py-2 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 transition-all font-medium text-sm">
                              <Download size={16} />
                              Download
                            </button>
                          </div>

                          {submission.status === 'pending' && (
                            <div className="space-y-3 pt-4 border-t border-slate-100">
                              <div className="grid grid-cols-2 gap-4">
                                <div>
                                  <label className="block text-xs font-semibold text-slate-700 mb-2">Grade (out of 100)</label>
                                  <input 
                                    type="number" 
                                    className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-[#2563eb]/20 text-sm"
                                    placeholder="85"
                                  />
                                </div>
                                <div>
                                  <label className="block text-xs font-semibold text-slate-700 mb-2">Letter Grade</label>
                                  <select className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-[#2563eb]/20 text-sm">
                                    <option>A</option>
                                    <option>B</option>
                                    <option>C</option>
                                    <option>D</option>
                                    <option>F</option>
                                  </select>
                                </div>
                              </div>
                              <div>
                                <label className="block text-xs font-semibold text-slate-700 mb-2">Feedback</label>
                                <textarea 
                                  rows={3}
                                  className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-[#2563eb]/20 text-sm"
                                  placeholder="Provide feedback to the student..."
                                ></textarea>
                              </div>
                              <button className="w-full py-2 bg-[#2563eb] text-white rounded-lg hover:brightness-110 transition-all font-semibold text-sm">
                                Submit Grade
                              </button>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="bg-white rounded-xl p-12 text-center border border-slate-200">
                  <FileText className="mx-auto text-slate-300 mb-4" size={64} />
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Select an Assignment</h3>
                  <p className="text-slate-500">Choose an assignment from the list to view and grade submissions</p>
                </div>
              )}
            </div>
          </div>

        </main>
      </div>
    </div>
  );
}
