"use client";

import { motion } from "framer-motion";
import { 
  Home, 
  Users, 
  UserCog,
  BookOpen, 
  Settings,
  BarChart3,
  Shield,
  Database,
  TrendingUp,
  UserPlus,
  AlertCircle
} from "lucide-react";
import DashboardLayout from "@/components/DashboardLayout";

const navigation = [
  { name: "Dashboard", href: "/dashboard/admin", icon: <Home size={20} /> },
  { name: "User Management", href: "/dashboard/admin/users", icon: <Users size={20} /> },
  { name: "Role Assignment", href: "/dashboard/admin/roles", icon: <UserCog size={20} /> },
  { name: "Course Management", href: "/dashboard/admin/courses", icon: <BookOpen size={20} /> },
  { name: "Analytics", href: "/dashboard/admin/analytics", icon: <BarChart3 size={20} /> },
  { name: "System Settings", href: "/dashboard/admin/settings", icon: <Settings size={20} /> },
];

export default function AdminDashboard() {
  return (
    <DashboardLayout 
      role="admin" 
      navigation={navigation}
      userName="Admin User"
      userEmail="admin@himmatkaar.org"
    >
      <div className="space-y-6">
        {/* Welcome Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
          <p className="text-gray-600 mt-2">System overview and management</p>
        </motion.div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { label: "Total Users", value: "1,234", icon: <Users size={24} />, color: "#dc2626", change: "+12%" },
            { label: "Active Students", value: "856", icon: <UserPlus size={24} />, color: "#dc2626", change: "+8%" },
            { label: "Coordinators", value: "45", icon: <UserCog size={24} />, color: "#dc2626", change: "+3" },
            { label: "Total Courses", value: "24", icon: <BookOpen size={24} />, color: "#dc2626", change: "+2" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-xl p-6 shadow-lg"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-lg" style={{ backgroundColor: `${stat.color}20` }}>
                  <div style={{ color: stat.color }}>{stat.icon}</div>
                </div>
                <span className="text-sm font-semibold text-green-600">{stat.change}</span>
              </div>
              <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
              <p className="text-gray-600 text-sm mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Recent User Activity */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="lg:col-span-2 bg-white rounded-xl p-6 shadow-lg"
          >
            <h2 className="text-xl font-bold text-gray-900 mb-4">Recent User Registrations</h2>
            <div className="space-y-4">
              {[
                { name: "Ali Hassan", email: "ali.hassan@student.com", role: "Student", time: "5 min ago", status: "pending" },
                { name: "Sara Ahmed", email: "sara.ahmed@student.com", role: "Student", time: "1 hour ago", status: "approved" },
                { name: "Dr. Usman Khan", email: "usman.khan@coordinator.com", role: "Coordinator", time: "2 hours ago", status: "approved" },
                { name: "Zainab Ali", email: "zainab.ali@student.com", role: "Student", time: "3 hours ago", status: "pending" }
              ].map((user, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
                      <Users className="text-red-600" size={20} />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{user.name}</p>
                      <p className="text-sm text-gray-600">{user.email}</p>
                      <p className="text-xs text-gray-500">{user.time}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      user.role === "Coordinator" ? "bg-blue-100 text-blue-700" : "bg-green-100 text-green-700"
                    }`}>
                      {user.role}
                    </span>
                    {user.status === "pending" && (
                      <button className="px-3 py-1 bg-red-600 text-white rounded-lg text-xs font-semibold hover:bg-red-700">
                        Approve
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* System Health */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-white rounded-xl p-6 shadow-lg"
          >
            <h2 className="text-xl font-bold text-gray-900 mb-4">System Health</h2>
            <div className="space-y-4">
              {[
                { label: "Database", status: "Healthy", icon: <Database size={20} />, color: "green" },
                { label: "API Services", status: "Healthy", icon: <Shield size={20} />, color: "green" },
                { label: "Storage", status: "85% Used", icon: <BarChart3 size={20} />, color: "yellow" },
                { label: "Backups", status: "Up to date", icon: <Database size={20} />, color: "green" }
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg ${
                      item.color === "green" ? "bg-green-100" : "bg-yellow-100"
                    }`}>
                      <div className={item.color === "green" ? "text-green-600" : "text-yellow-600"}>
                        {item.icon}
                      </div>
                    </div>
                    <span className="font-medium text-gray-900">{item.label}</span>
                  </div>
                  <span className={`text-xs font-semibold ${
                    item.color === "green" ? "text-green-600" : "text-yellow-600"
                  }`}>
                    {item.status}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Role Distribution */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-white rounded-xl p-6 shadow-lg"
        >
          <h2 className="text-xl font-bold text-gray-900 mb-4">User Role Distribution</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { role: "Students", count: 856, percentage: 69, color: "#3a8a4d" },
              { role: "Coordinators", count: 45, percentage: 4, color: "#2563eb" },
              { role: "Administrators", count: 8, percentage: 1, color: "#dc2626" }
            ].map((item, index) => (
              <div key={index} className="p-6 border-2 border-gray-200 rounded-xl hover:border-red-600 transition-colors">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <p className="text-gray-600 text-sm">{item.role}</p>
                    <p className="text-3xl font-bold text-gray-900 mt-1">{item.count}</p>
                  </div>
                  <span className="text-2xl font-bold" style={{ color: item.color }}>
                    {item.percentage}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${item.percentage}%` }}
                    transition={{ duration: 1, delay: index * 0.2 }}
                    className="h-2 rounded-full"
                    style={{ backgroundColor: item.color }}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Recent Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="bg-white rounded-xl p-6 shadow-lg"
        >
          <h2 className="text-xl font-bold text-gray-900 mb-4">Recent Admin Actions</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 text-gray-700 font-semibold">Action</th>
                  <th className="text-left py-3 px-4 text-gray-700 font-semibold">User</th>
                  <th className="text-left py-3 px-4 text-gray-700 font-semibold">Target</th>
                  <th className="text-left py-3 px-4 text-gray-700 font-semibold">Time</th>
                  <th className="text-left py-3 px-4 text-gray-700 font-semibold">Status</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { action: "Role Assigned", user: "Admin User", target: "Dr. Usman Khan → Coordinator", time: "2 hours ago", status: "Success" },
                  { action: "User Approved", user: "Admin User", target: "Sara Ahmed", time: "3 hours ago", status: "Success" },
                  { action: "Course Created", user: "Admin User", target: "Advanced Leadership", time: "5 hours ago", status: "Success" },
                  { action: "Settings Updated", user: "Admin User", target: "Email Notifications", time: "1 day ago", status: "Success" }
                ].map((action, index) => (
                  <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-3 px-4 text-gray-900 font-medium">{action.action}</td>
                    <td className="py-3 px-4 text-gray-600">{action.user}</td>
                    <td className="py-3 px-4 text-gray-600">{action.target}</td>
                    <td className="py-3 px-4 text-gray-600">{action.time}</td>
                    <td className="py-3 px-4">
                      <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold">
                        {action.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </DashboardLayout>
  );
}
