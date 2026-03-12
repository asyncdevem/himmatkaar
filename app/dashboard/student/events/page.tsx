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
  Calendar,
  MapPin,
  Clock,
  UserPlus,
  CheckCircle,
  Filter
} from "lucide-react";

export default function StudentEvents() {
  const events = [
    {
      id: 1,
      title: "Leadership Summit 2026",
      description: "Annual leadership conference bringing together youth leaders from across Pakistan",
      date: "2026-04-15",
      time: "09:00 AM",
      location: "Karachi Convention Center",
      type: "Conference",
      capacity: 500,
      registered: 342,
      isRegistered: false,
      status: "upcoming",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC5gUGyFKXkjqhm46EQ46wMiilwTKOqzE_w48QOoikiCxLFr-0VjiJeRPcJEvugY2FG9mSLfOygSLVGGkVfcatTOAeBmVgpC5pNwWrJ-ldm2TygsQvViOWjKpGgeCvI5SWUbIygvXBrHiPdSfHHjxvkRCgq1oGNx15Y2PqBJ-MuojwWBOiOKEJERxaNNwfOxh9aJHVf2QcfqgmzGBbo1tIZIuKA41F3UD80MZFjCSE6XP9ZQZWEuqTvo-S7Z7I06sViuMyS3jEllTI4')"
    },
    {
      id: 2,
      title: "Digital Skills Workshop",
      description: "Hands-on workshop covering essential digital literacy and online safety",
      date: "2026-03-28",
      time: "02:00 PM",
      location: "Lahore Tech Hub",
      type: "Workshop",
      capacity: 100,
      registered: 87,
      isRegistered: true,
      status: "upcoming",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBBXVBN-FrDegipn4ssb7bJQOYdkYfiuz8guKjHruepsvSU8T6qCyoFZNOeqenEDieEOgoBGEuuFJYi3Zv0-SI3zO_O4vNwo97scg0TkM8dlJLUVwkqAkcTocrBNK2hsZUekAPGYtqyVh1TEiprvTTKypcMT9qbevIFi4dMZqXY1K3Vvn_TGZy0Tk5dd_natW2iXfoAm0-1jBCqdzVNkbrcYI9ScVW9fHHo9m6sd03GXVe8HAdlwQelTeyMcY-8TejbuoiQVKNJ4TxF')"
    },
    {
      id: 3,
      title: "Community Service Day",
      description: "Join us for a day of giving back to the community through various service projects",
      date: "2026-04-05",
      time: "08:00 AM",
      location: "Multiple Locations",
      type: "Community Service",
      capacity: 200,
      registered: 156,
      isRegistered: true,
      status: "upcoming",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuASBfE8L0TBh0RfW_hDz_2ufIGnz3UwhVvNEs0H97zhX9lUqau9vODMwzK70evz2YL6lWOrpO3UK6dO6aY7p44STo42HtwAwoRI0phn4JUWCEPn0qw5eMCaEujcXbcc1c9BTrM3n9BWy79KZZMtyadSZPMk47XZLk_vvxAg4C6A-l4oHz2e04mrmLy8l0UC0t71DaMAxSx0eXXcoXIo9bO4Kcth1immS01TpEahJ3jnkjsBYdGLtG7bYziUpJOL1nZc9Ix6WUXbi4us')"
    },
    {
      id: 4,
      title: "Career Fair 2026",
      description: "Connect with top employers and explore career opportunities",
      date: "2026-05-10",
      time: "10:00 AM",
      location: "Islamabad Expo Center",
      type: "Career Fair",
      capacity: 1000,
      registered: 523,
      isRegistered: false,
      status: "upcoming",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBirIM9ewM1iFF9-zJg8LMs-oMP-ajSdlqBZHyNjncWJ5fAJq9BfuVaUTlONzUynHIbxSZGMM7aI-kRMUK61bhwkbyURZLcFkQJDGXSd21YTaWA5emXQs3r-Y-fXEvIu6GGHs2MAV8TJPW-tOL2TuHJtFGE3tt_BcyMRPoMTEltaEKsOXo_712pUSDAnBsfA2DeH5qGrUniuVFH45zYMJ2xZnbWJfWKmS9q-zn35TBUDWQZES2oOwOPBSU6QMIqb7tB8E4ugCwmQnKM')"
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
            <Link href="/dashboard/student/events" className="flex items-center gap-4 px-8 py-4 text-[#3a8a4d] font-semibold bg-[#3a8a4d]/20 border-l-4 border-[#3a8a4d]">
              <Calendar size={24} />
              <span>Events</span>
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

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto bg-slate-50">
        
        {/* Top Bar */}
        <header className="sticky top-0 z-10 flex items-center justify-between px-10 py-6 bg-slate-50/80 backdrop-blur-md">
          <div>
            <h2 className="text-2xl font-extrabold text-slate-900">Upcoming Events</h2>
            <p className="text-slate-500 text-sm font-medium">Discover and register for exciting events</p>
          </div>
          <div className="flex items-center gap-8">
            <div className="relative hidden lg:block">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
              <input 
                className="w-80 h-12 pl-12 pr-4 rounded-xl border border-slate-200 bg-white shadow-sm focus:ring-2 focus:ring-[#3a8a4d]/50 text-slate-900 placeholder:text-slate-400 focus:outline-none" 
                placeholder="Search events..." 
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
          
          {/* Filter Bar */}
          <div className="flex items-center gap-4 mb-8">
            <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 transition-all font-medium shadow-sm">
              <Filter size={20} />
              All Events
            </button>
            <button className="px-4 py-2 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 transition-all font-medium shadow-sm">
              My Registrations
            </button>
            <button className="px-4 py-2 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 transition-all font-medium shadow-sm">
              Upcoming
            </button>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-[#3a8a4d]/10 rounded-xl">
                  <Calendar className="text-[#3a8a4d]" size={24} />
                </div>
              </div>
              <p className="text-sm text-slate-500 font-medium">Total Events</p>
              <p className="text-3xl font-extrabold text-slate-900 mt-1">{events.length}</p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-green-50 rounded-xl">
                  <CheckCircle className="text-green-600" size={24} />
                </div>
              </div>
              <p className="text-sm text-slate-500 font-medium">My Registrations</p>
              <p className="text-3xl font-extrabold text-slate-900 mt-1">{events.filter(e => e.isRegistered).length}</p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-blue-50 rounded-xl">
                  <Clock className="text-blue-600" size={24} />
                </div>
              </div>
              <p className="text-sm text-slate-500 font-medium">Next Event</p>
              <p className="text-lg font-extrabold text-slate-900 mt-1">Mar 28, 2026</p>
            </div>
          </div>

          {/* Events Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {events.map((event) => (
              <div key={event.id} className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 group">
                
                {/* Event Image */}
                <div className="relative h-48 overflow-hidden">
                  <div 
                    className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-500" 
                    style={{ backgroundImage: `url('${event.image}')` }}
                  ></div>
                  <div className="absolute inset-0 bg-black/50"></div>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-bold text-slate-900">
                      {event.type}
                    </span>
                  </div>
                  {event.isRegistered && (
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-green-500/90 backdrop-blur-sm rounded-full text-xs font-bold text-white flex items-center gap-1">
                        <CheckCircle size={14} />
                        Registered
                      </span>
                    </div>
                  )}
                </div>

                {/* Event Details */}
                <div className="p-6">
                  <h3 className="text-xl font-extrabold text-slate-900 mb-2">{event.title}</h3>
                  <p className="text-sm text-slate-600 mb-4 line-clamp-2">{event.description}</p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-3 text-sm text-slate-600">
                      <Calendar size={18} className="text-slate-400" />
                      <span className="font-medium">{new Date(event.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-slate-600">
                      <Clock size={18} className="text-slate-400" />
                      <span className="font-medium">{event.time}</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-slate-600">
                      <MapPin size={18} className="text-slate-400" />
                      <span className="font-medium">{event.location}</span>
                    </div>
                  </div>

                  {/* Spots Available */}
                  <div className="mb-6 p-4 bg-slate-50 rounded-xl">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <UserPlus size={16} className="text-slate-500" />
                        <span className="text-sm text-slate-600 font-medium">Spots Available</span>
                      </div>
                      <span className="text-sm font-bold text-slate-900">{event.capacity - event.registered} / {event.capacity}</span>
                    </div>
                    <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-[#3a8a4d] rounded-full transition-all duration-500" 
                        style={{ width: `${(event.registered / event.capacity) * 100}%` }}
                      ></div>
                    </div>
                  </div>

                  {/* Action Button */}
                  {event.isRegistered ? (
                    <button className="w-full py-3 bg-slate-100 text-slate-700 font-bold rounded-xl hover:bg-slate-200 transition-all flex items-center justify-center gap-2">
                      <CheckCircle size={20} />
                      Already Registered
                    </button>
                  ) : (
                    <button className="w-full py-3 bg-[#3a8a4d] text-white font-bold rounded-xl hover:brightness-110 transition-all shadow-lg shadow-[#3a8a4d]/20 flex items-center justify-center gap-2">
                      <UserPlus size={20} />
                      Register Now
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>

        </div>
      </main>
    </div>
  );
}
