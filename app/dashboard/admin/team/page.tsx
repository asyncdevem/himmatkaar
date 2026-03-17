"use client";

import Link from "next/link";
import Image from "next/image";
import { 
  LayoutDashboard,
  Users,
  Calendar,
  BarChart2,
  Settings,
  Search,
  Bell,
  UserCircle,
  Award,
  MessageSquare
} from "lucide-react";
import AdminTeamManager from "@/components/AdminTeamManager";

export default function AdminTeam() {
  return (
    <div className="flex h-screen overflow-hidden bg-slate-50 font-display text-slate-900 antialiased">
      <aside className="w-72 bg-white border-r border-slate-200 flex flex-col z-20">
        <div className="p-6 flex items-center gap-3 border-b border-slate-100">
          <Image src="/himmatkaar-logo.jpg" alt="Himmatkaar Logo" width={48} height={68} className="rounded-lg" />
          <div>
            <h1 className="text-xl font-extrabold tracking-tight text-[#2d5f3d]">Himmatkaar</h1>
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest">Admin Portal</p>
          </div>
        </div>
        <nav className="flex-1 px-4 py-6 space-y-1">
          <div className="pb-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest px-3">Management</div>
          <Link href="/dashboard/admin" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 hover:bg-slate-50 transition-all group">
            <LayoutDashboard size={20} className="group-hover:text-[#39894c] transition-colors" />
            <span className="text-sm font-medium">Dashboard</span>
          </Link>
          <Link href="/dashboard/admin/users" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 hover:bg-slate-50 transition-all group">
            <Users size={20} className="group-hover:text-[#39894c] transition-colors" />
            <span className="text-sm font-medium">Users</span>
          </Link>
          <Link href="/dashboard/admin/events" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 hover:bg-slate-50 transition-all group">
            <Calendar size={20} className="group-hover:text-[#39894c] transition-colors" />
            <span className="text-sm font-medium">Events</span>
          </Link>
          <Link href="/dashboard/admin/team" className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-[#39894c] text-white font-semibold transition-all shadow-md shadow-[#39894c]/20">
            <UserCircle size={20} />
            <span className="text-sm">Team</span>
          </Link>
          <Link href="/dashboard/admin/ambassadors" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 hover:bg-slate-50 transition-all group">
            <Award size={20} className="group-hover:text-[#39894c] transition-colors" />
            <span className="text-sm font-medium">Ambassadors</span>
          </Link>
          <Link href="/dashboard/admin/messages" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 hover:bg-slate-50 transition-all group">
            <MessageSquare size={20} className="group-hover:text-[#39894c] transition-colors" />
            <span className="text-sm font-medium">Messages</span>
          </Link>
          <div className="pt-6 pb-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest px-3">Insights</div>
          <Link href="/dashboard/admin/analytics" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 hover:bg-slate-50 transition-all group">
            <BarChart2 size={20} className="group-hover:text-[#39894c] transition-colors" />
            <span className="text-sm font-medium">Analytics</span>
          </Link>
          <Link href="/dashboard/admin/settings" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 hover:bg-slate-50 transition-all group">
            <Settings size={20} className="group-hover:text-[#39894c] transition-colors" />
            <span className="text-sm font-medium">Settings</span>
          </Link>
        </nav>
        <div className="p-4 border-t border-slate-100">
          <div className="bg-[#39894c]/10 rounded-xl p-4 border border-[#39894c]/20">
            <p className="text-xs text-slate-700 font-semibold mb-2">Quick Stats</p>
            <p className="text-2xl font-extrabold text-[#2d5f3d] mb-1">1,000+</p>
            <p className="text-[10px] text-slate-600">Active Members</p>
          </div>
        </div>
      </aside>
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <header className="h-20 bg-white border-b border-slate-200 flex items-center justify-between px-8 shadow-sm">
          <div className="flex items-center gap-10">
            <h2 className="text-2xl font-bold text-[#2d5f3d]">Team Management</h2>
            <div className="relative w-96 group">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#39894c] transition-colors" size={20} />
              <input className="w-full bg-slate-50 border border-slate-200 rounded-lg pl-10 pr-4 py-2.5 text-sm focus:ring-2 focus:ring-[#39894c]/20 focus:border-[#39894c] transition-all placeholder:text-slate-400 focus:outline-none" placeholder="Search team members..." type="text" />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="w-10 h-10 flex items-center justify-center rounded-full text-slate-500 hover:bg-slate-50 relative transition-colors">
              <Bell size={22} />
              <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-[#39894c] rounded-full ring-2 ring-white"></span>
            </button>
            <div className="h-8 w-[1px] bg-slate-200 mx-2"></div>
            <div className="flex items-center gap-3">
              <div className="text-right">
                <p className="text-sm font-bold text-slate-900">Admin</p>
                <p className="text-xs text-slate-500 font-medium">Administrator</p>
              </div>
              <div className="w-10 h-10 rounded-full border-2 border-[#39894c]/20 bg-[#39894c]/10 flex items-center justify-center">
                <span className="text-[#2d5f3d] font-bold text-sm">A</span>
              </div>
            </div>
          </div>
        </header>
        <main className="flex-1 overflow-y-auto p-8 bg-slate-50">
          <AdminTeamManager />
        </main>
      </div>
    </div>
  );
}
