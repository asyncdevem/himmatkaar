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
  TrendingUp,
  TrendingDown,
  Download,
  Calendar
} from "lucide-react";

export default function AdminAnalytics() {
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
          <Link href="/dashboard/admin/courses" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 hover:bg-slate-50 transition-all group">
            <BookOpen size={20} className="group-hover:text-[#dc2828] transition-colors" />
            <span className="text-sm font-medium">Course Management</span>
          </Link>
          
          <div className="pt-6 pb-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest px-3">Insights</div>
          <Link href="/dashboard/admin/analytics" className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-[#dc2828] text-white font-semibold transition-all shadow-md shadow-[#dc2828]/20">
            <BarChart2 size={20} />
            <span className="text-sm">Analytics</span>
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
            <h2 className="text-xl font-bold text-slate-900">Analytics Dashboard</h2>
          </div>
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 px-4 py-2 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 transition-all font-medium">
              <Calendar size={20} />
              Last 30 Days
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-[#dc2828] text-white rounded-lg hover:brightness-110 transition-all font-medium">
              <Download size={20} />
              Export Report
            </button>
            <div className="h-8 w-[1px] bg-slate-200 mx-2"></div>
            <button className="w-10 h-10 flex items-center justify-center rounded-full text-slate-500 hover:bg-slate-50 relative transition-colors">
              <Bell size={24} />
              <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-[#dc2828] rounded-full ring-2 ring-white"></span>
            </button>
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
        <main className="flex-1 overflow-y-auto p-8 space-y-8">
          
          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <p className="text-sm text-slate-500 font-medium">Total Users</p>
                <div className="flex items-center gap-1 text-green-600 text-xs font-bold">
                  <TrendingUp size={14} />
                  <span>+12.5%</span>
                </div>
              </div>
              <p className="text-3xl font-extrabold text-slate-900 mb-1">15,234</p>
              <p className="text-xs text-slate-500">+1,890 this month</p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <p className="text-sm text-slate-500 font-medium">Active Courses</p>
                <div className="flex items-center gap-1 text-green-600 text-xs font-bold">
                  <TrendingUp size={14} />
                  <span>+8.2%</span>
                </div>
              </div>
              <p className="text-3xl font-extrabold text-slate-900 mb-1">142</p>
              <p className="text-xs text-slate-500">+11 this month</p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <p className="text-sm text-slate-500 font-medium">Completion Rate</p>
                <div className="flex items-center gap-1 text-red-600 text-xs font-bold">
                  <TrendingDown size={14} />
                  <span>-2.1%</span>
                </div>
              </div>
              <p className="text-3xl font-extrabold text-slate-900 mb-1">78.4%</p>
              <p className="text-xs text-slate-500">-1.6% from last month</p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <p className="text-sm text-slate-500 font-medium">Certificates Issued</p>
                <div className="flex items-center gap-1 text-green-600 text-xs font-bold">
                  <TrendingUp size={14} />
                  <span>+15.3%</span>
                </div>
              </div>
              <p className="text-3xl font-extrabold text-slate-900 mb-1">3,456</p>
              <p className="text-xs text-slate-500">+459 this month</p>
            </div>
          </div>

          {/* Charts Row */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* User Growth Chart */}
            <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold text-slate-900">User Growth</h3>
                <select className="text-sm border border-slate-200 rounded-lg px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-[#dc2828]/20">
                  <option>Last 6 Months</option>
                  <option>Last Year</option>
                  <option>All Time</option>
                </select>
              </div>
              <div className="h-64 flex items-end justify-between gap-2">
                {[65, 78, 82, 90, 95, 100].map((height, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center gap-2">
                    <div className="w-full bg-[#dc2828]/20 rounded-t-lg hover:bg-[#dc2828]/30 transition-colors cursor-pointer" style={{ height: `${height}%` }}>
                      <div className="w-full bg-[#dc2828] rounded-t-lg" style={{ height: '40%' }}></div>
                    </div>
                    <span className="text-xs text-slate-500 font-medium">
                      {['Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar'][i]}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Course Enrollment Trends */}
            <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold text-slate-900">Course Enrollments</h3>
                <select className="text-sm border border-slate-200 rounded-lg px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-[#dc2828]/20">
                  <option>This Month</option>
                  <option>Last Month</option>
                  <option>This Year</option>
                </select>
              </div>
              <div className="space-y-4">
                {[
                  { name: 'Professional Communication', enrollments: 245, percentage: 85 },
                  { name: 'Leadership Fundamentals', enrollments: 189, percentage: 65 },
                  { name: 'Digital Literacy', enrollments: 312, percentage: 100 },
                  { name: 'Social Innovation', enrollments: 156, percentage: 50 }
                ].map((course, i) => (
                  <div key={i}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-semibold text-slate-900">{course.name}</span>
                      <span className="text-sm font-bold text-slate-900">{course.enrollments}</span>
                    </div>
                    <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-[#dc2828] rounded-full transition-all duration-500" 
                        style={{ width: `${course.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Top Performing Courses */}
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="px-6 py-5 border-b border-slate-100 flex items-center justify-between">
              <h3 className="text-lg font-bold text-slate-900">Top Performing Courses</h3>
              <button className="text-sm font-semibold text-[#dc2828] hover:underline">View All</button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-slate-50">
                  <tr className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    <th className="px-6 py-4 text-left">Course Name</th>
                    <th className="px-6 py-4 text-left">Instructor</th>
                    <th className="px-6 py-4 text-center">Enrollments</th>
                    <th className="px-6 py-4 text-center">Completion Rate</th>
                    <th className="px-6 py-4 text-center">Avg. Rating</th>
                    <th className="px-6 py-4 text-center">Revenue</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {[
                    { name: 'Digital Literacy Basics', instructor: 'Ms. Fatima Khan', enrollments: 312, completion: 84, rating: 4.8, revenue: '$15,600' },
                    { name: 'Professional Communication', instructor: 'Dr. Sarah Ahmed', enrollments: 245, completion: 78, rating: 4.6, revenue: '$12,250' },
                    { name: 'Leadership Fundamentals', instructor: 'Prof. Ali Hassan', enrollments: 189, completion: 82, rating: 4.7, revenue: '$9,450' },
                    { name: 'Social Innovation Workshop', instructor: 'Dr. Omar Farooq', enrollments: 156, completion: 76, rating: 4.5, revenue: '$7,800' }
                  ].map((course, i) => (
                    <tr key={i} className="hover:bg-slate-50 transition-colors">
                      <td className="px-6 py-4">
                        <p className="text-sm font-semibold text-slate-900">{course.name}</p>
                      </td>
                      <td className="px-6 py-4">
                        <p className="text-sm text-slate-600">{course.instructor}</p>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <p className="text-sm font-bold text-slate-900">{course.enrollments}</p>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold bg-green-100 text-green-700">
                          {course.completion}%
                        </span>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <div className="flex items-center justify-center gap-1">
                          <span className="text-sm font-bold text-slate-900">{course.rating}</span>
                          <span className="text-yellow-500">★</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <p className="text-sm font-bold text-slate-900">{course.revenue}</p>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </main>
      </div>
    </div>
  );
}
