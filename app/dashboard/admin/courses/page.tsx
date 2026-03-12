"use client";

import Link from "next/link";
import Image from "next/image";
import { 
  Zap,
  LayoutDashboard,
  Users,
  UserCheck,
  BookOpen,
  BarChart2,
  Settings,
  Search,
  Bell,
  Plus,
  Edit,
  Trash2,
  Eye,
  MoreVertical,
  Filter,
  Grid,
  List
} from "lucide-react";

export default function AdminCourses() {
  const courses = [
    {
      id: 1,
      title: "Professional Communication",
      instructor: "Dr. Sarah Ahmed",
      category: "Communication",
      enrollments: 245,
      status: "published",
      thumbnail: "https://lh3.googleusercontent.com/aida-public/AB6AXuC5gUGyFKXkjqhm46EQ46wMiilwTKOqzE_w48QOoikiCxLFr-0VjiJeRPcJEvugY2FG9mSLfOygSLVGGkVfcatTOAeBmVgpC5pNwWrJ-ldm2TygsQvViOWjKpGgeCvI5SWUbIygvXBrHiPdSfHHjxvkRCgq1oGNx15Y2PqBJ-MuojwWBOiOKEJERxaNNwfOxh9aJHVf2QcfqgmzGBbo1tIZIuKA41F3UD80MZFjCSE6XP9ZQZWEuqTvo-S7Z7I06sViuMyS3jEllTI4')",
      duration: "8 weeks"
    },
    {
      id: 2,
      title: "Leadership Fundamentals",
      instructor: "Prof. Ali Hassan",
      category: "Leadership",
      enrollments: 189,
      status: "published",
      thumbnail: "https://lh3.googleusercontent.com/aida-public/AB6AXuBBXVBN-FrDegipn4ssb7bJQOYdkYfiuz8guKjHruepsvSU8T6qCyoFZNOeqenEDieEOgoBGEuuFJYi3Zv0-SI3zO_O4vNwo97scg0TkM8dlJLUVwkqAkcTocrBNK2hsZUekAPGYtqyVh1TEiprvTTKypcMT9qbevIFi4dMZqXY1K3Vvn_TGZy0Tk5dd_natW2iXfoAm0-1jBCqdzVNkbrcYI9ScVW9fHHo9m6sd03GXVe8HAdlwQelTeyMcY-8TejbuoiQVKNJ4TxF')",
      duration: "6 weeks"
    },
    {
      id: 3,
      title: "Digital Literacy Basics",
      instructor: "Ms. Fatima Khan",
      category: "Technology",
      enrollments: 312,
      status: "published",
      thumbnail: "https://lh3.googleusercontent.com/aida-public/AB6AXuASBfE8L0TBh0RfW_hDz_2ufIGnz3UwhVvNEs0H97zhX9lUqau9vODMwzK70evz2YL6lWOrpO3UK6dO6aY7p44STo42HtwAwoRI0phn4JUWCEPn0qw5eMCaEujcXbcc1c9BTrM3n9BWy79KZZMtyadSZPMk47XZLk_vvxAg4C6A-l4oHz2e04mrmLy8l0UC0t71DaMAxSx0eXXcoXIo9bO4Kcth1immS01TpEahJ3jnkjsBYdGLtG7bYziUpJOL1nZc9Ix6WUXbi4us')",
      duration: "4 weeks"
    },
    {
      id: 4,
      title: "Social Innovation Workshop",
      instructor: "Dr. Omar Farooq",
      category: "Innovation",
      enrollments: 156,
      status: "draft",
      thumbnail: "https://lh3.googleusercontent.com/aida-public/AB6AXuBirIM9ewM1iFF9-zJg8LMs-oMP-ajSdlqBZHyNjncWJ5fAJq9BfuVaUTlONzUynHIbxSZGMM7aI-kRMUK61bhwkbyURZLcFkQJDGXSd21YTaWA5emXQs3r-Y-fXEvIu6GGHs2MAV8TJPW-tOL2TuHJtFGE3tt_BcyMRPoMTEltaEKsOXo_712pUSDAnBsfA2DeH5qGrUniuVFH45zYMJ2xZnbWJfWKmS9q-zn35TBUDWQZES2oOwOPBSU6QMIqb7tB8E4ugCwmQnKM')",
      duration: "10 weeks"
    }
  ];

  return (
    <div className="flex h-screen overflow-hidden bg-[#f8f6f6] font-display text-slate-900 antialiased">
      
      {/* Sidebar */}
      <aside className="w-72 bg-white border-r border-slate-200 flex flex-col z-20">
        <div className="p-6 flex items-center gap-3">
          <Image
            src="/himmatkaar-logo.jpg"
            alt="HimmatKaar Logo"
            width={40}
            height={40}
            className="rounded-lg"
          />
          <div>
            <h1 className="text-xl font-extrabold tracking-tight text-slate-900">HimmatKaar</h1>
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest">Admin Portal</p>
          </div>
        </div>
        
        <nav className="flex-1 px-4 py-4 space-y-1">
          <div className="pb-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest px-3">Management</div>
          <Link href="/dashboard/admin" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 hover:bg-slate-50 transition-all group">
            <LayoutDashboard size={20} className="group-hover:text-[#dc2828] transition-colors" />
            <span className="text-sm font-medium">System Overview</span>
          </Link>
          <Link href="/dashboard/admin/users" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 hover:bg-slate-50 transition-all group">
            <Users size={20} className="group-hover:text-[#dc2828] transition-colors" />
            <span className="text-sm font-medium">User Management</span>
          </Link>
          <Link href="/dashboard/admin/roles" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 hover:bg-slate-50 transition-all group">
            <UserCheck size={20} className="group-hover:text-[#dc2828] transition-colors" />
            <span className="text-sm font-medium">Role Assignment</span>
          </Link>
          <Link href="/dashboard/admin/courses" className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-[#dc2828] text-white font-semibold transition-all shadow-md shadow-[#dc2828]/20">
            <BookOpen size={20} />
            <span className="text-sm">Course Management</span>
          </Link>
          
          <div className="pt-6 pb-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest px-3">Insights</div>
          <Link href="/dashboard/admin/analytics" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 hover:bg-slate-50 transition-all group">
            <BarChart2 size={20} className="group-hover:text-[#dc2828] transition-colors" />
            <span className="text-sm font-medium">Analytics</span>
          </Link>
          <Link href="/dashboard/admin/settings" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 hover:bg-slate-50 transition-all group">
            <Settings size={20} className="group-hover:text-[#dc2828] transition-colors" />
            <span className="text-sm font-medium">Settings</span>
          </Link>
        </nav>
        
        <div className="p-4 border-t border-slate-100">
          <div className="bg-slate-50 rounded-xl p-4">
            <p className="text-xs text-slate-500 font-medium mb-2">Storage Usage</p>
            <div className="w-full bg-slate-200 h-1.5 rounded-full mb-2">
              <div className="bg-[#dc2828] h-1.5 rounded-full" style={{ width: "75%" }}></div>
            </div>
            <p className="text-[10px] text-slate-400">750GB of 1TB used</p>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        
        {/* Top Bar */}
        <header className="h-20 bg-white border-b border-slate-200 flex items-center justify-between px-8">
          <div className="flex items-center gap-10">
            <h2 className="text-xl font-bold text-slate-900">Course Management</h2>
            <div className="relative w-96 group">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#dc2828] transition-colors" size={20} />
              <input 
                className="w-full bg-slate-50 border border-slate-200 rounded-lg pl-10 pr-4 py-2 text-sm focus:ring-2 focus:ring-[#dc2828]/20 focus:border-[#dc2828] transition-all placeholder:text-slate-400 focus:outline-none" 
                placeholder="Search courses..." 
                type="text"
              />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="w-10 h-10 flex items-center justify-center rounded-full text-slate-500 hover:bg-slate-50 relative transition-colors">
              <Bell size={24} />
              <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-[#dc2828] rounded-full ring-2 ring-white"></span>
            </button>
            <div className="h-8 w-[1px] bg-slate-200 mx-2"></div>
            <div className="flex items-center gap-3">
              <div className="text-right">
                <p className="text-sm font-bold text-slate-900">Admin Sarah</p>
                <p className="text-[10px] text-slate-500 font-medium">System Superadmin</p>
              </div>
              <div 
                className="w-10 h-10 rounded-full border-2 border-slate-100 bg-cover bg-center" 
                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCioJSRh7RSuwzMS8wcq1GSrbl0dZfDdGaoMoFPN60ofkRrzs9ow2uVTjUkj6dzNSZuTfIV0GlBFgepOwh4tnohpmRkCaoHhI_Qh0gzSuky-KH-hpUZUCioBe4vjSZQ3CvHpIrqSstt09hUSgrhwQtMEN4RZvTOTl6lBQ1wBTsslpV2g68Q4GtYCe1BMrKaYmWIrcBWpyY0lOxfK2KExflWBiX2egwhIhFkdRKOJSIx468EgR4wbJFm4Jc5x5FBEit8b-FoW0nvjlVa')" }}
              ></div>
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 overflow-y-auto p-8 space-y-6">
          
          {/* Action Bar */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button className="flex items-center gap-2 px-4 py-2 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 transition-all font-medium">
                <Filter size={20} />
                Filter
              </button>
              <div className="flex items-center gap-2 bg-slate-100 rounded-lg p-1">
                <button className="p-2 bg-white rounded-md shadow-sm">
                  <Grid size={18} className="text-slate-700" />
                </button>
                <button className="p-2 text-slate-500 hover:text-slate-700">
                  <List size={18} />
                </button>
              </div>
            </div>
            <button className="flex items-center gap-2 px-6 py-3 bg-[#dc2828] text-white rounded-lg hover:brightness-110 transition-all font-bold shadow-lg shadow-[#dc2828]/20">
              <Plus size={20} />
              Create New Course
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
              <p className="text-sm text-slate-500 font-medium mb-2">Total Courses</p>
              <p className="text-3xl font-extrabold text-slate-900">{courses.length}</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
              <p className="text-sm text-slate-500 font-medium mb-2">Published</p>
              <p className="text-3xl font-extrabold text-slate-900">{courses.filter(c => c.status === 'published').length}</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
              <p className="text-sm text-slate-500 font-medium mb-2">Total Enrollments</p>
              <p className="text-3xl font-extrabold text-slate-900">{courses.reduce((sum, c) => sum + c.enrollments, 0)}</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
              <p className="text-sm text-slate-500 font-medium mb-2">Avg. Enrollment</p>
              <p className="text-3xl font-extrabold text-slate-900">{Math.round(courses.reduce((sum, c) => sum + c.enrollments, 0) / courses.length)}</p>
            </div>
          </div>

          {/* Courses Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course) => (
              <div key={course.id} className="bg-white rounded-xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 group">
                
                {/* Thumbnail */}
                <div className="relative h-48 overflow-hidden">
                  <div 
                    className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-500" 
                    style={{ backgroundImage: `url('${course.thumbnail}')` }}
                  ></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase ${
                      course.status === 'published' 
                        ? 'bg-green-500/90 text-white' 
                        : 'bg-amber-500/90 text-white'
                    }`}>
                      {course.status}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-bold text-slate-900">
                      {course.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-lg font-extrabold text-slate-900 mb-2 line-clamp-2">{course.title}</h3>
                  <p className="text-sm text-slate-600 mb-4">Instructor: {course.instructor}</p>
                  
                  <div className="flex items-center justify-between text-sm mb-6">
                    <div>
                      <p className="text-xs text-slate-500">Enrollments</p>
                      <p className="font-bold text-slate-900">{course.enrollments}</p>
                    </div>
                    <div>
                      <p className="text-xs text-slate-500">Duration</p>
                      <p className="font-bold text-slate-900">{course.duration}</p>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2">
                    <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 transition-all font-medium">
                      <Eye size={18} />
                      View
                    </button>
                    <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-[#dc2828]/10 text-[#dc2828] rounded-lg hover:bg-[#dc2828] hover:text-white transition-all font-medium">
                      <Edit size={18} />
                      Edit
                    </button>
                    <button className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg hover:bg-red-50 hover:text-red-600 transition-all">
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </main>
      </div>
    </div>
  );
}
