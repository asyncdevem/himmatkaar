"use client";

import { motion } from "framer-motion";
import Link from "next/link";
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
  Server,
  TrendingUp,
  Hourglass,
  ChevronRight,
  UserPlus,
  UserCog,
  PlusSquare,
  Shield
} from "lucide-react";

export default function AdminDashboard() {
  return (
    <div className="flex h-screen overflow-hidden bg-[#f8f6f6] font-display text-slate-900 antialiased">
      
      {/* Sidebar */}
      <aside className="w-72 bg-white border-r border-slate-200 flex flex-col z-20">
        <div className="p-6 flex items-center gap-3">
          <div className="w-10 h-10 bg-[#dc2828] rounded-lg flex items-center justify-center text-white shadow-lg shadow-[#dc2828]/20">
            <Zap size={24} />
          </div>
          <div>
            <h1 className="text-xl font-extrabold tracking-tight text-slate-900">HimmatKaar</h1>
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest">Admin Portal</p>
          </div>
        </div>
        
        <nav className="flex-1 px-4 py-4 space-y-1">
          <div className="pb-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest px-3">Management</div>
          <Link href="/dashboard/admin" className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-[#dc2828] text-white font-semibold transition-all shadow-md shadow-[#dc2828]/20">
            <LayoutDashboard size={20} />
            <span className="text-sm">System Overview</span>
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

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        
        {/* Top Bar */}
        <header className="h-20 bg-white border-b border-slate-200 flex items-center justify-between px-8">
          <div className="flex items-center gap-10">
            <h2 className="text-xl font-bold text-slate-900">Superadmin Console</h2>
            <div className="relative w-96 group">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#dc2828] transition-colors" size={20} />
              <input 
                className="w-full bg-slate-50 border border-slate-200 rounded-lg pl-10 pr-4 py-2 text-sm focus:ring-2 focus:ring-[#dc2828]/20 focus:border-[#dc2828] transition-all placeholder:text-slate-400 focus:outline-none" 
                placeholder="Global search for users, courses, or logs..." 
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

        {/* Dashboard Content */}
        <main className="flex-1 overflow-y-auto p-8 space-y-8 scroll-smooth">
          
          {/* Health Metrics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Total Users */}
            <div className="bg-white/80 backdrop-blur-sm border border-white rounded-xl p-6 shadow-sm flex flex-col gap-1">
              <div className="flex justify-between items-start mb-2">
                <div className="text-[#dc2828] bg-[#dc2828]/10 p-2 rounded-lg">
                  <Users size={24} />
                </div>
                <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">+2.4%</span>
              </div>
              <p className="text-sm font-medium text-slate-500">Total Users</p>
              <p className="text-2xl font-extrabold text-slate-900">15.2k</p>
            </div>
            
            {/* Active Courses */}
            <div className="bg-white/80 backdrop-blur-sm border border-white rounded-xl p-6 shadow-sm flex flex-col gap-1">
              <div className="flex justify-between items-start mb-2">
                <div className="text-[#dc2828] bg-[#dc2828]/10 p-2 rounded-lg">
                  <BookOpen size={24} />
                </div>
                <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">+12%</span>
              </div>
              <p className="text-sm font-medium text-slate-500">Active Courses</p>
              <p className="text-2xl font-extrabold text-slate-900">142</p>
            </div>
            
            {/* System Uptime */}
            <div className="bg-white/80 backdrop-blur-sm border border-white rounded-xl p-6 shadow-sm flex flex-col gap-1">
              <div className="flex justify-between items-start mb-2">
                <div className="text-[#dc2828] bg-[#dc2828]/10 p-2 rounded-lg">
                  <Server size={24} />
                </div>
                <div className="flex items-center gap-1 text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">
                  <TrendingUp size={12} />
                  <span className="text-[10px] font-bold tracking-wider">STABLE</span>
                </div>
              </div>
              <p className="text-sm font-medium text-slate-500">System Uptime</p>
              <p className="text-2xl font-extrabold text-slate-900">99.9%</p>
            </div>
            
            {/* Pending Approvals */}
            <div className="bg-white/80 backdrop-blur-sm border border-white rounded-xl p-6 shadow-sm flex flex-col gap-1">
              <div className="flex justify-between items-start mb-2">
                <div className="text-[#dc2828] bg-[#dc2828]/10 p-2 rounded-lg">
                  <Hourglass size={24} />
                </div>
                <span className="text-xs font-bold text-[#dc2828] bg-[#dc2828]/10 px-2 py-1 rounded-full tracking-wider">ALERT</span>
              </div>
              <p className="text-sm font-medium text-slate-500">Pending Approvals</p>
              <p className="text-2xl font-extrabold text-slate-900">45</p>
            </div>
          </div>

          <div className="grid grid-cols-12 gap-8">
            
            {/* Activity Table */}
            <div className="col-span-12 lg:col-span-8 bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
              <div className="px-6 py-5 border-b border-slate-100 flex items-center justify-between">
                <h3 className="font-bold text-slate-900">Platform Activity</h3>
                <button className="text-xs font-bold text-[#dc2828] flex items-center gap-1 hover:underline">
                  View History <ChevronRight size={14} />
                </button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead className="bg-slate-50/50">
                    <tr className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                      <th className="px-6 py-4">Action</th>
                      <th className="px-6 py-4">Performed By</th>
                      <th className="px-6 py-4">Date</th>
                      <th className="px-6 py-4">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    
                    {/* Row 1 */}
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="px-6 py-4">
                        <p className="text-sm font-semibold text-slate-900">Role Updated</p>
                        <p className="text-xs text-slate-500">User perm change</p>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <div 
                            className="w-6 h-6 rounded-full bg-slate-200 bg-cover bg-center" 
                            style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBlggHhHPU-AC6pm7mJn0DOyxW598WsUcW7PlJQ-vU0BZska7Y5qfmZMGajgCvxeg4fmL6ZGwrTskhaqvY_JT4DPIZjQBydlx2bL0TQ2NxQddZcVv2H4LuKysqREe2DXrlr1eQKmkeBt--OJInBfc-dByW1VwC5dWIo_zvyniGyNly8BqCv4gMtc66vXzfny4wFzpmWY6xZds9JA4Vhq3XXLj_2T2AeJHW3vQs8Gfw6Z2Fr-QoaNqSx2rr3S7toQ9VkRuI99sxJ6roA')" }}
                          ></div>
                          <span className="text-sm font-medium text-slate-700">Admin Sarah</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-500 font-medium">Oct 24, 2023</td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-700 text-[10px] font-bold">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                          SUCCESS
                        </span>
                      </td>
                    </tr>

                    {/* Row 2 */}
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="px-6 py-4">
                        <p className="text-sm font-semibold text-slate-900">Course Deleted</p>
                        <p className="text-xs text-slate-500">Curriculum cleanup</p>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <div 
                            className="w-6 h-6 rounded-full bg-slate-200 bg-cover bg-center" 
                            style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuASS_PQJYt244E-lY2TurPxdp9Ctk0za37WyLRfQrL8eeC-Cx63_txTFsLUayg0Ho2jGeDiSEdGQ-9_cPtColo8de02PeuEJHALNkRMWbLVhLf_DcZ3smvozzmKfaBG84mQjQp-nLW23FHXrhBCAQJtp56IVLS4DiUVTcqPy8-XelKiB0MqpnagY24yycU2hUwno0kyUaWCctuSzwo4fAdecqxisEzOiaqM8sRHegTXvux4ADHnlq8DQjZlUt_GxdROEmR6uIW4f67T')" }}
                          ></div>
                          <span className="text-sm font-medium text-slate-700">Admin Mike</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-500 font-medium">Oct 23, 2023</td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#dc2828]/10 text-[#dc2828] text-[10px] font-bold">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#dc2828]"></span>
                          FAILED
                        </span>
                      </td>
                    </tr>

                    {/* Row 3 */}
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="px-6 py-4">
                        <p className="text-sm font-semibold text-slate-900">New User Created</p>
                        <p className="text-xs text-slate-500">Platform invitation</p>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 rounded-full bg-[#dc2828]/10 flex items-center justify-center text-[#dc2828]">
                            <Zap size={12} fill="currentColor" />
                          </div>
                          <span className="text-sm font-medium text-slate-700">System Bot</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-500 font-medium">Oct 23, 2023</td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-700 text-[10px] font-bold">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                          SUCCESS
                        </span>
                      </td>
                    </tr>

                    {/* Row 4 */}
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="px-6 py-4">
                        <p className="text-sm font-semibold text-slate-900">Permission Denied</p>
                        <p className="text-xs text-slate-500">Access attempt blocked</p>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <div 
                            className="w-6 h-6 rounded-full bg-slate-200 bg-cover bg-center" 
                            style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDbtXpgxxyehw_An8MrXLbtlP-NIJerM2UN4YqzI0708GkqRqwV57wFumhtwCYcygy03CGI1RgqY803YM4yBgtPnl7k8faH_DK_q34Q4nt4HT4pH_KnmPG45nuGw1VhECCrdHPbgP2sJbMKij1qcgUZp-fUX-CDdeN1gFTf_UyK04qM4tq-SWeVnn27hmXa0WBgJ_e_x2Cix0bMa6-TCgdEjw0rHOER2WVMP_quwpLUkkKA5TLw2hFoYi0QYlmZBGtrHh3vjad4VkB5')" }}
                          ></div>
                          <span className="text-sm font-medium text-slate-700">User 9921</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-500 font-medium">Oct 22, 2023</td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-100 text-amber-700 text-[10px] font-bold">
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                          WARNING
                        </span>
                      </td>
                    </tr>

                  </tbody>
                </table>
              </div>
            </div>

            {/* Quick Actions & System Status */}
            <div className="col-span-12 lg:col-span-4 space-y-6">
              
              {/* Quick Actions */}
              <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
                <h3 className="font-bold text-slate-900 mb-6">Quick Actions</h3>
                <div className="space-y-3">
                  <button className="w-full flex items-center gap-4 p-4 rounded-xl border border-slate-100 hover:border-[#dc2828]/30 hover:bg-[#dc2828]/5 transition-all group text-left">
                    <div className="w-10 h-10 rounded-lg bg-slate-50 flex items-center justify-center text-slate-600 group-hover:bg-[#dc2828]/10 group-hover:text-[#dc2828] transition-all">
                      <UserPlus size={20} />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-900">Create New User</p>
                      <p className="text-[10px] font-medium text-slate-500">Add staff or student</p>
                    </div>
                  </button>
                  
                  <button className="w-full flex items-center gap-4 p-4 rounded-xl border border-slate-100 hover:border-[#dc2828]/30 hover:bg-[#dc2828]/5 transition-all group text-left">
                    <div className="w-10 h-10 rounded-lg bg-slate-50 flex items-center justify-center text-slate-600 group-hover:bg-[#dc2828]/10 group-hover:text-[#dc2828] transition-all">
                      <UserCog size={20} />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-900">Assign Roles</p>
                      <p className="text-[10px] font-medium text-slate-500">Update platform permissions</p>
                    </div>
                  </button>
                  
                  <button className="w-full flex items-center gap-4 p-4 rounded-xl border border-slate-100 hover:border-[#dc2828]/30 hover:bg-[#dc2828]/5 transition-all group text-left">
                    <div className="w-10 h-10 rounded-lg bg-slate-50 flex items-center justify-center text-slate-600 group-hover:bg-[#dc2828]/10 group-hover:text-[#dc2828] transition-all">
                      <PlusSquare size={20} />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-900">Launch New Course</p>
                      <p className="text-[10px] font-medium text-slate-500">Publish to production</p>
                    </div>
                  </button>
                </div>
              </div>

              {/* System Status Card */}
              <div className="bg-[#dc2828] rounded-xl p-6 text-white shadow-lg shadow-[#dc2828]/20 relative overflow-hidden">
                <div className="relative z-10">
                  <h4 className="font-bold text-lg mb-1">Weekly Digest</h4>
                  <p className="text-white/80 text-xs mb-4">You have 12 system tasks and 3 security patches pending.</p>
                  <button className="bg-white text-[#dc2828] text-xs font-bold py-2 px-4 rounded-lg shadow-sm">Review Now</button>
                </div>
                <Shield className="absolute -right-4 -bottom-4 w-32 h-32 text-white/10 pointer-events-none" />
              </div>

            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
