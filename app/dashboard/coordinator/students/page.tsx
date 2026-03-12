"use client";

import Link from "next/link";
import Image from "next/image";
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
  Mail,
  Phone,
  MapPin,
  TrendingUp,
  TrendingDown
} from "lucide-react";

export default function CoordinatorStudents() {
  const students = [
    {
      id: 1,
      name: "Adnan Khan",
      email: "adnan.khan@example.com",
      phone: "+92 300 1234567",
      location: "Karachi, Pakistan",
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuASBfE8L0TBh0RfW_hDz_2ufIGnz3UwhVvNEs0H97zhX9lUqau9vODMwzK70evz2YL6lWOrpO3UK6dO6aY7p44STo42HtwAwoRI0phn4JUWCEPn0qw5eMCaEujcXbcc1c9BTrM3n9BWy79KZZMtyadSZPMk47XZLk_vvxAg4C6A-l4oHz2e04mrmLy8l0UC0t71DaMAxSx0eXXcoXIo9bO4Kcth1immS01TpEahJ3jnkjsBYdGLtG7bYziUpJOL1nZc9Ix6WUXbi4us')",
      enrolledCourses: 3,
      completedCourses: 1,
      overallProgress: 68,
      lastActive: "2 hours ago",
      status: "active",
      trend: "up"
    },
    {
      id: 2,
      name: "Sara Ahmed",
      email: "sara.ahmed@example.com",
      phone: "+92 321 9876543",
      location: "Lahore, Pakistan",
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuBirIM9ewM1iFF9-zJg8LMs-oMP-ajSdlqBZHyNjncWJ5fAJq9BfuVaUTlONzUynHIbxSZGMM7aI-kRMUK61bhwkbyURZLcFkQJDGXSd21YTaWA5emXQs3r-Y-fXEvIu6GGHs2MAV8TJPW-tOL2TuHJtFGE3tt_BcyMRPoMTEltaEKsOXo_712pUSDAnBsfA2DeH5qGrUniuVFH45zYMJ2xZnbWJfWKmS9q-zn35TBUDWQZES2oOwOPBSU6QMIqb7tB8E4ugCwmQnKM')",
      enrolledCourses: 4,
      completedCourses: 2,
      overallProgress: 52,
      lastActive: "5 hours ago",
      status: "needs_help",
      trend: "down"
    },
    {
      id: 3,
      name: "Zain Malik",
      email: "zain.malik@example.com",
      phone: "+92 333 5551234",
      location: "Islamabad, Pakistan",
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuCNyBZnjoKyB14CHsqA4SDttEMlGthqPOA6PE4ulIDToJK1Sgvlg__JQ9aR7SEKaR1WUJhubeA8toRVGrNQe-0KMmOmZokDk2Anb2i2rsO_-k1RyBDUlnqfA3mUkhMVbSnVYsKAUh-ZTFsXZJMLMolZRXi5g0dPrlTEa4QTg3Q_49yyCV7ElGTlzJ0Sncm1N7_krZ2C0lf8d7zrtc0AYmUuVtMEobjnDsLAmeA10NZflW2Le7dn0RUDjBGa-luRav_NyRdtNQxfhMta')",
      enrolledCourses: 2,
      completedCourses: 0,
      overallProgress: 24,
      lastActive: "1 day ago",
      status: "inactive",
      trend: "down"
    },
    {
      id: 4,
      name: "Omar Farooq",
      email: "omar.farooq@example.com",
      phone: "+92 345 7778888",
      location: "Multan, Pakistan",
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuCFnuehxPUugytD0kX8rndosIw7QkGw8AhLWlB7fXCVeeu6D11Ju-4ToBsJC5vZYm9zEEDl1tlEiKHkXrHUX3ni3lEcDju7w-ANyeAm4lhFjgb4r9HgiZRza5jCVzg6hwzjjg5Nv2hodgSQPJ7U97TPbGAqEbfcyF4URVh-xkD52dGxLKcsbJ2yxLsTy465SL1CYLPDmuKc6hO7BxT1SlmVs9fqndMtUx0hE1Phe_htJ-hywmpmZCTnGY9-V1Xff5P6ib81-uOo4G8a')",
      enrolledCourses: 5,
      completedCourses: 3,
      overallProgress: 82,
      lastActive: "3 hours ago",
      status: "active",
      trend: "up"
    }
  ];

  return (
    <div className="flex h-screen overflow-hidden bg-[#f6f6f8] font-display text-slate-900 antialiased">
      
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-slate-200 flex flex-col z-20">
        <div className="p-6 flex items-center gap-3">
          <Image
            src="/himmatkaar-logo.jpg"
            alt="HimmatKaar Logo"
            width={40}
            height={40}
            className="rounded-lg"
          />
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
          <Link href="/dashboard/coordinator/students" className="flex items-center gap-3 px-4 py-3 rounded-xl bg-[#2563eb] text-white shadow-lg shadow-[#2563eb]/20 transition-all">
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

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        
        {/* Top Bar */}
        <header className="h-18 bg-white/80 backdrop-blur-md border-b border-slate-200 px-8 py-4 flex items-center justify-between">
          <h2 className="text-xl font-bold">Student Management</h2>
          <div className="flex-1 max-w-2xl px-8">
            <div className="relative group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#2563eb] transition-colors" size={20} />
              <input 
                className="w-full bg-slate-100 border border-slate-200 rounded-xl py-2.5 pl-12 pr-4 focus:ring-2 focus:ring-[#2563eb]/20 text-sm transition-all placeholder:text-slate-400 focus:outline-none" 
                placeholder="Search students by name, email, or location..." 
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
                <option>All Students</option>
                <option>Active</option>
                <option>Needs Help</option>
                <option>Inactive</option>
              </select>
            </div>
            <button className="flex items-center gap-2 px-4 py-2 bg-[#2563eb] text-white rounded-xl hover:brightness-110 transition-all font-medium shadow-lg shadow-[#2563eb]/20">
              <Download size={20} />
              Export List
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
              <p className="text-sm text-slate-500 font-medium mb-2">Total Students</p>
              <p className="text-3xl font-extrabold text-slate-900">{students.length}</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
              <p className="text-sm text-slate-500 font-medium mb-2">Active</p>
              <p className="text-3xl font-extrabold text-green-600">{students.filter(s => s.status === 'active').length}</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
              <p className="text-sm text-slate-500 font-medium mb-2">Needs Help</p>
              <p className="text-3xl font-extrabold text-orange-600">{students.filter(s => s.status === 'needs_help').length}</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
              <p className="text-sm text-slate-500 font-medium mb-2">Avg. Progress</p>
              <p className="text-3xl font-extrabold text-slate-900">{Math.round(students.reduce((sum, s) => sum + s.overallProgress, 0) / students.length)}%</p>
            </div>
          </div>

          {/* Student Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {students.map((student) => (
              <div key={student.id} className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300">
                
                {/* Header */}
                <div className="flex items-start gap-4 mb-6">
                  <div 
                    className="w-16 h-16 rounded-full bg-cover bg-center border-2 border-slate-100 flex-shrink-0" 
                    style={{ backgroundImage: `url('${student.avatar}')` }}
                  ></div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h3 className="text-lg font-extrabold text-slate-900">{student.name}</h3>
                        <p className="text-sm text-slate-500">{student.email}</p>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase ${
                        student.status === 'active' ? 'bg-green-100 text-green-700' :
                        student.status === 'needs_help' ? 'bg-orange-100 text-orange-700' :
                        'bg-slate-100 text-slate-500'
                      }`}>
                        {student.status.replace('_', ' ')}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Contact Info */}
                <div className="grid grid-cols-2 gap-4 mb-6 pb-6 border-b border-slate-100">
                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <Phone size={16} className="text-slate-400" />
                    <span>{student.phone}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <MapPin size={16} className="text-slate-400" />
                    <span>{student.location}</span>
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div>
                    <p className="text-xs text-slate-500 font-medium mb-1">Enrolled</p>
                    <p className="text-xl font-extrabold text-slate-900">{student.enrolledCourses}</p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-medium mb-1">Completed</p>
                    <p className="text-xl font-extrabold text-slate-900">{student.completedCourses}</p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-medium mb-1">Progress</p>
                    <div className="flex items-center gap-1">
                      <p className="text-xl font-extrabold text-slate-900">{student.overallProgress}%</p>
                      {student.trend === 'up' ? (
                        <TrendingUp size={16} className="text-green-600" />
                      ) : (
                        <TrendingDown size={16} className="text-red-600" />
                      )}
                    </div>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="mb-6">
                  <div className="flex items-center justify-between text-xs mb-2">
                    <span className="text-slate-500 font-medium">Overall Progress</span>
                    <span className="text-slate-900 font-bold">{student.overallProgress}%</span>
                  </div>
                  <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-[#2563eb] rounded-full transition-all duration-500" 
                      style={{ width: `${student.overallProgress}%` }}
                    ></div>
                  </div>
                </div>

                {/* Last Active */}
                <p className="text-xs text-slate-500 mb-4">Last active: {student.lastActive}</p>

                {/* Actions */}
                <div className="flex gap-3">
                  <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-[#2563eb] text-white rounded-xl hover:brightness-110 transition-all font-medium">
                    View Profile
                  </button>
                  <button className="px-4 py-2 bg-slate-100 text-slate-700 rounded-xl hover:bg-slate-200 transition-all">
                    <Mail size={20} />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </main>
      </div>
    </div>
  );
}
