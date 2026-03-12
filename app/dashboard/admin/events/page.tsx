"use client";

import Link from "next/link";
import Image from "next/image";
import { 
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
  Calendar,
  MapPin,
  Clock,
  UserPlus,
  Filter
} from "lucide-react";

export default function AdminEvents() {
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
      status: "upcoming",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800"
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
      status: "upcoming",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800"
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
      status: "upcoming",
      image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800"
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
      status: "upcoming",
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800"
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
            <span className="text-sm font-medium">Team Members</span>
          </Link>
          <Link href="/dashboard/admin/events" className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-[#dc2828] text-white font-semibold transition-all shadow-md shadow-[#dc2828]/20">
            <Calendar size={20} />
            <span className="text-sm">Events</span>
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
            <h2 className="text-xl font-bold text-slate-900">Event Management</h2>
            <div className="relative w-96 group">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#dc2828] transition-colors" size={20} />
              <input 
                className="w-full bg-slate-50 border border-slate-200 rounded-lg pl-10 pr-4 py-2 text-sm focus:ring-2 focus:ring-[#dc2828]/20 focus:border-[#dc2828] transition-all placeholder:text-slate-400 focus:outline-none" 
                placeholder="Search events..." 
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
              <div className="w-10 h-10 rounded-full border-2 border-slate-100 bg-slate-200"></div>
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
              <select className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg border-none focus:ring-2 focus:ring-[#dc2828]/20 font-medium">
                <option>All Events</option>
                <option>Upcoming</option>
                <option>Past</option>
                <option>Cancelled</option>
              </select>
            </div>
            <button className="flex items-center gap-2 px-6 py-3 bg-[#dc2828] text-white rounded-lg hover:brightness-110 transition-all font-bold shadow-lg shadow-[#dc2828]/20">
              <Plus size={20} />
              Create New Event
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
              <p className="text-sm text-slate-500 font-medium mb-2">Total Events</p>
              <p className="text-3xl font-extrabold text-slate-900">{events.length}</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
              <p className="text-sm text-slate-500 font-medium mb-2">Total Registrations</p>
              <p className="text-3xl font-extrabold text-slate-900">{events.reduce((sum, e) => sum + e.registered, 0)}</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
              <p className="text-sm text-slate-500 font-medium mb-2">Avg. Attendance</p>
              <p className="text-3xl font-extrabold text-slate-900">{Math.round(events.reduce((sum, e) => sum + (e.registered / e.capacity * 100), 0) / events.length)}%</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
              <p className="text-sm text-slate-500 font-medium mb-2">Next Event</p>
              <p className="text-lg font-extrabold text-slate-900">Mar 28</p>
            </div>
          </div>

          {/* Events List */}
          <div className="space-y-6">
            {events.map((event) => (
              <div key={event.id} className="bg-white rounded-xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 group">
                <div className="flex flex-col md:flex-row">
                  
                  {/* Event Image */}
                  <div className="md:w-80 h-64 md:h-auto relative overflow-hidden flex-shrink-0">
                    <div 
                      className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-500" 
                      style={{ backgroundImage: `url('${event.image}')` }}
                    ></div>
                    <div className="absolute inset-0 bg-black/40"></div>
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-bold text-slate-900">
                        {event.type}
                      </span>
                    </div>
                    <div className="absolute bottom-4 right-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase ${
                        event.status === 'upcoming' ? 'bg-green-500/90 text-white' : 'bg-slate-500/90 text-white'
                      }`}>
                        {event.status}
                      </span>
                    </div>
                  </div>

                  {/* Event Details */}
                  <div className="flex-1 p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-2xl font-extrabold text-slate-900 mb-2">{event.title}</h3>
                        <p className="text-slate-600 leading-relaxed">{event.description}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-[#dc2828]/10 rounded-lg">
                          <Calendar className="text-[#dc2828]" size={20} />
                        </div>
                        <div>
                          <p className="text-xs text-slate-500 font-medium">Date</p>
                          <p className="text-sm font-bold text-slate-900">{new Date(event.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-[#dc2828]/10 rounded-lg">
                          <Clock className="text-[#dc2828]" size={20} />
                        </div>
                        <div>
                          <p className="text-xs text-slate-500 font-medium">Time</p>
                          <p className="text-sm font-bold text-slate-900">{event.time}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-[#dc2828]/10 rounded-lg">
                          <MapPin className="text-[#dc2828]" size={20} />
                        </div>
                        <div>
                          <p className="text-xs text-slate-500 font-medium">Location</p>
                          <p className="text-sm font-bold text-slate-900">{event.location}</p>
                        </div>
                      </div>
                    </div>

                    {/* Registration Progress */}
                    <div className="mb-6">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <UserPlus className="text-slate-500" size={16} />
                          <span className="text-sm text-slate-500 font-medium">Registrations</span>
                        </div>
                        <span className="text-sm font-bold text-slate-900">{event.registered} / {event.capacity}</span>
                      </div>
                      <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-[#dc2828] rounded-full transition-all duration-500" 
                          style={{ width: `${(event.registered / event.capacity) * 100}%` }}
                        ></div>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex gap-3">
                      <button className="flex items-center gap-2 px-4 py-2 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 transition-all font-medium">
                        <Eye size={18} />
                        View Details
                      </button>
                      <button className="flex items-center gap-2 px-4 py-2 bg-[#dc2828]/10 text-[#dc2828] rounded-lg hover:bg-[#dc2828] hover:text-white transition-all font-medium">
                        <Edit size={18} />
                        Edit Event
                      </button>
                      <button className="flex items-center gap-2 px-4 py-2 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 transition-all font-medium">
                        <Users size={18} />
                        Registrations ({event.registered})
                      </button>
                      <button className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg hover:bg-red-50 hover:text-red-600 transition-all">
                        <Trash2 size={18} />
                      </button>
                    </div>
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
