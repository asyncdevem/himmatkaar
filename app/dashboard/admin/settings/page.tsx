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
  Save,
  Upload,
  Globe,
  Mail,
  Shield,
  Database,
  Key
} from "lucide-react";
import { useState } from "react";

export default function AdminSettings() {
  const [activeTab, setActiveTab] = useState("general");
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

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
          <Link href="/dashboard/admin/analytics" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 hover:bg-slate-50 transition-all group">
            <BarChart2 size={20} className="group-hover:text-[#dc2828] transition-colors" />
            <span className="text-sm font-medium">Analytics</span>
          </Link>
          <Link href="/dashboard/admin/settings" className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-[#dc2828] text-white font-semibold transition-all shadow-md shadow-[#dc2828]/20">
            <Settings size={20} />
            <span className="text-sm">Settings</span>
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
            <h2 className="text-xl font-bold text-slate-900">System Settings</h2>
          </div>
          <div className="flex items-center gap-4">
            {saved && (
              <div className="px-4 py-2 bg-green-100 text-green-700 rounded-lg text-sm font-semibold">
                Settings saved successfully!
              </div>
            )}
            <button 
              onClick={handleSave}
              className="flex items-center gap-2 px-6 py-3 bg-[#dc2828] text-white rounded-lg hover:brightness-110 transition-all font-bold shadow-lg shadow-[#dc2828]/20"
            >
              <Save size={20} />
              Save Changes
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
        <main className="flex-1 overflow-y-auto p-8">
          
          {/* Tabs */}
          <div className="flex gap-2 mb-8 border-b border-slate-200">
            <button 
              onClick={() => setActiveTab("general")}
              className={`px-6 py-3 font-semibold transition-all ${
                activeTab === "general" 
                  ? "text-[#dc2828] border-b-2 border-[#dc2828]" 
                  : "text-slate-500 hover:text-slate-700"
              }`}
            >
              General
            </button>
            <button 
              onClick={() => setActiveTab("email")}
              className={`px-6 py-3 font-semibold transition-all ${
                activeTab === "email" 
                  ? "text-[#dc2828] border-b-2 border-[#dc2828]" 
                  : "text-slate-500 hover:text-slate-700"
              }`}
            >
              Email
            </button>
            <button 
              onClick={() => setActiveTab("security")}
              className={`px-6 py-3 font-semibold transition-all ${
                activeTab === "security" 
                  ? "text-[#dc2828] border-b-2 border-[#dc2828]" 
                  : "text-slate-500 hover:text-slate-700"
              }`}
            >
              Security
            </button>
            <button 
              onClick={() => setActiveTab("integrations")}
              className={`px-6 py-3 font-semibold transition-all ${
                activeTab === "integrations" 
                  ? "text-[#dc2828] border-b-2 border-[#dc2828]" 
                  : "text-slate-500 hover:text-slate-700"
              }`}
            >
              Integrations
            </button>
            <button 
              onClick={() => setActiveTab("backup")}
              className={`px-6 py-3 font-semibold transition-all ${
                activeTab === "backup" 
                  ? "text-[#dc2828] border-b-2 border-[#dc2828]" 
                  : "text-slate-500 hover:text-slate-700"
              }`}
            >
              Backup
            </button>
          </div>

          {/* General Settings */}
          {activeTab === "general" && (
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
                <h3 className="text-lg font-bold text-slate-900 mb-6">General Settings</h3>
                
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Site Name</label>
                    <input 
                      type="text" 
                      defaultValue="HimmatKaar Platform"
                      className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-[#dc2828]/20 focus:border-[#dc2828] transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Site Description</label>
                    <textarea 
                      rows={3}
                      defaultValue="Youth empowerment platform for education and mentorship"
                      className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-[#dc2828]/20 focus:border-[#dc2828] transition-all"
                    ></textarea>
                  </div>

                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">Timezone</label>
                      <select className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-[#dc2828]/20 focus:border-[#dc2828] transition-all">
                        <option>Asia/Karachi (PKT)</option>
                        <option>UTC</option>
                        <option>America/New_York (EST)</option>
                        <option>Europe/London (GMT)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">Language</label>
                      <select className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-[#dc2828]/20 focus:border-[#dc2828] transition-all">
                        <option>English</option>
                        <option>Urdu</option>
                        <option>Arabic</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Logo Upload</label>
                    <div className="flex items-center gap-4">
                      <div className="w-20 h-20 rounded-lg border-2 border-slate-200 flex items-center justify-center bg-slate-50">
                        <Upload className="text-slate-400" size={24} />
                      </div>
                      <button className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 transition-all font-medium">
                        Upload New Logo
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Email Settings */}
          {activeTab === "email" && (
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
                <h3 className="text-lg font-bold text-slate-900 mb-6">Email Configuration</h3>
                
                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">SMTP Host</label>
                      <input 
                        type="text" 
                        defaultValue="smtp.gmail.com"
                        className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-[#dc2828]/20 focus:border-[#dc2828] transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">SMTP Port</label>
                      <input 
                        type="text" 
                        defaultValue="587"
                        className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-[#dc2828]/20 focus:border-[#dc2828] transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">From Email</label>
                    <input 
                      type="email" 
                      defaultValue="noreply@himmatkaar.org"
                      className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-[#dc2828]/20 focus:border-[#dc2828] transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">From Name</label>
                    <input 
                      type="text" 
                      defaultValue="HimmatKaar Platform"
                      className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-[#dc2828]/20 focus:border-[#dc2828] transition-all"
                    />
                  </div>

                  <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-lg">
                    <Mail className="text-blue-600" size={20} />
                    <div>
                      <p className="text-sm font-semibold text-blue-900">Test Email Configuration</p>
                      <p className="text-xs text-blue-700">Send a test email to verify your settings</p>
                    </div>
                    <button className="ml-auto px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all font-medium text-sm">
                      Send Test
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Security Settings */}
          {activeTab === "security" && (
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
                <h3 className="text-lg font-bold text-slate-900 mb-6">Security Settings</h3>
                
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Password Policy</label>
                    <div className="space-y-3">
                      <label className="flex items-center gap-3">
                        <input type="checkbox" defaultChecked className="w-4 h-4 text-[#dc2828] rounded" />
                        <span className="text-sm text-slate-600">Minimum 8 characters</span>
                      </label>
                      <label className="flex items-center gap-3">
                        <input type="checkbox" defaultChecked className="w-4 h-4 text-[#dc2828] rounded" />
                        <span className="text-sm text-slate-600">Require uppercase letters</span>
                      </label>
                      <label className="flex items-center gap-3">
                        <input type="checkbox" defaultChecked className="w-4 h-4 text-[#dc2828] rounded" />
                        <span className="text-sm text-slate-600">Require numbers</span>
                      </label>
                      <label className="flex items-center gap-3">
                        <input type="checkbox" className="w-4 h-4 text-[#dc2828] rounded" />
                        <span className="text-sm text-slate-600">Require special characters</span>
                      </label>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Session Timeout (minutes)</label>
                    <input 
                      type="number" 
                      defaultValue="30"
                      className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-[#dc2828]/20 focus:border-[#dc2828] transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Two-Factor Authentication</label>
                    <label className="flex items-center gap-3">
                      <input type="checkbox" className="w-4 h-4 text-[#dc2828] rounded" />
                      <span className="text-sm text-slate-600">Enable 2FA for all admin users</span>
                    </label>
                  </div>

                  <div className="flex items-center gap-3 p-4 bg-red-50 rounded-lg">
                    <Shield className="text-red-600" size={20} />
                    <div>
                      <p className="text-sm font-semibold text-red-900">Security Audit</p>
                      <p className="text-xs text-red-700">Last audit: March 1, 2026</p>
                    </div>
                    <button className="ml-auto px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-all font-medium text-sm">
                      Run Audit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Integrations */}
          {activeTab === "integrations" && (
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
                <h3 className="text-lg font-bold text-slate-900 mb-6">API & Integrations</h3>
                
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">API Key</label>
                    <div className="flex gap-3">
                      <input 
                        type="password" 
                        defaultValue="sk_live_xxxxxxxxxxxxxxxxxxxx"
                        className="flex-1 px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-[#dc2828]/20 focus:border-[#dc2828] transition-all"
                        readOnly
                      />
                      <button className="px-4 py-3 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 transition-all font-medium">
                        <Key size={20} />
                      </button>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-6">
                    <div className="p-4 border border-slate-200 rounded-lg">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="font-semibold text-slate-900">Google Analytics</h4>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input type="checkbox" defaultChecked className="sr-only peer" />
                          <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#dc2828]/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#dc2828]"></div>
                        </label>
                      </div>
                      <p className="text-xs text-slate-500">Track user analytics and behavior</p>
                    </div>

                    <div className="p-4 border border-slate-200 rounded-lg">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="font-semibold text-slate-900">AWS S3</h4>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input type="checkbox" defaultChecked className="sr-only peer" />
                          <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#dc2828]/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#dc2828]"></div>
                        </label>
                      </div>
                      <p className="text-xs text-slate-500">File storage and CDN</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Backup Settings */}
          {activeTab === "backup" && (
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
                <h3 className="text-lg font-bold text-slate-900 mb-6">Backup & Recovery</h3>
                
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Backup Schedule</label>
                    <select className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-[#dc2828]/20 focus:border-[#dc2828] transition-all">
                      <option>Daily at 2:00 AM</option>
                      <option>Every 6 hours</option>
                      <option>Every 12 hours</option>
                      <option>Weekly</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Retention Period (days)</label>
                    <input 
                      type="number" 
                      defaultValue="30"
                      className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-[#dc2828]/20 focus:border-[#dc2828] transition-all"
                    />
                  </div>

                  <div className="flex items-center gap-3 p-4 bg-green-50 rounded-lg">
                    <Database className="text-green-600" size={20} />
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-green-900">Last Backup</p>
                      <p className="text-xs text-green-700">March 11, 2026 at 2:00 AM - 2.4 GB</p>
                    </div>
                    <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all font-medium text-sm">
                      Backup Now
                    </button>
                  </div>

                  <div className="border border-slate-200 rounded-lg overflow-hidden">
                    <table className="w-full">
                      <thead className="bg-slate-50">
                        <tr className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                          <th className="px-6 py-4 text-left">Date</th>
                          <th className="px-6 py-4 text-left">Size</th>
                          <th className="px-6 py-4 text-left">Status</th>
                          <th className="px-6 py-4 text-right">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        <tr className="hover:bg-slate-50">
                          <td className="px-6 py-4 text-sm text-slate-900">March 11, 2026</td>
                          <td className="px-6 py-4 text-sm text-slate-600">2.4 GB</td>
                          <td className="px-6 py-4">
                            <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-green-100 text-green-700">Success</span>
                          </td>
                          <td className="px-6 py-4 text-right">
                            <button className="text-sm text-[#dc2828] font-semibold hover:underline">Restore</button>
                          </td>
                        </tr>
                        <tr className="hover:bg-slate-50">
                          <td className="px-6 py-4 text-sm text-slate-900">March 10, 2026</td>
                          <td className="px-6 py-4 text-sm text-slate-600">2.3 GB</td>
                          <td className="px-6 py-4">
                            <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-green-100 text-green-700">Success</span>
                          </td>
                          <td className="px-6 py-4 text-right">
                            <button className="text-sm text-[#dc2828] font-semibold hover:underline">Restore</button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          )}

        </main>
      </div>
    </div>
  );
}
