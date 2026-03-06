"use client";

import { motion } from "framer-motion";
import { 
  Home, 
  Users, 
  BookOpen, 
  Calendar,
  MessageSquare,
  FileText,
  TrendingUp,
  CheckCircle,
  Clock,
  AlertCircle
} from "lucide-react";
import DashboardLayout from "@/components/DashboardLayout";

const navigation = [
  { name: "Dashboard", href: "/dashboard/coordinator", icon: <Home size={20} /> },
  { name: "My Students", href: "/dashboard/coordinator/students", icon: <Users size={20} /> },
  { name: "Courses", href: "/dashboard/coordinator/courses", icon: <BookOpen size={20} /> },
  { name: "Schedule", href: "/dashboard/coordinator/schedule", icon: <Calendar size={20} /> },
  { name: "Messages", href: "/dashboard/coordinator/messages", icon: <MessageSquare size={20} /> },
  { name: "Reports", href: "/dashboard/coordinator/reports", icon: <FileText size={20} /> },
];

export default function CoordinatorDashboard() {
  return (
    <DashboardLayout 
      role="coordinator" 
      navigation={navigation}
      userName="Dr. Sarah Ahmed"
      userEmail="sarah.ahmed@coordinator.com"
    >
      <div className="space-y-6">
        {/* Welcome Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-3xl font-bold text-gray-900">Coordinator Dashboard</h1>
          <p className="text-gray-600 mt-2">Manage your students and track their progress</p>
        </motion.div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { label: "Total Students", value: "45", icon: <Users size={24} />, color: "#2563eb" },
            { label: "Active Courses", value: "8", icon: <BookOpen size={24} />, color: "#2563eb" },
            { label: "Pending Reviews", value: "12", icon: <Clock size={24} />, color: "#f59e0b" },
            { label: "Completion Rate", value: "87%", icon: <TrendingUp size={24} />, color: "#10b981" }
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
              </div>
              <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
              <p className="text-gray-600 text-sm mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Recent Student Activity */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="lg:col-span-2 bg-white rounded-xl p-6 shadow-lg"
          >
            <h2 className="text-xl font-bold text-gray-900 mb-4">Recent Student Activity</h2>
            <div className="space-y-4">
              {[
                { student: "Ahmed Khan", action: "Submitted assignment", course: "Professional Communication", time: "2 hours ago", status: "success" },
                { student: "Fatima Ali", action: "Completed module", course: "Resume Writing", time: "5 hours ago", status: "success" },
                { student: "Hassan Raza", action: "Missed deadline", course: "Leadership Skills", time: "1 day ago", status: "warning" },
                { student: "Ayesha Malik", action: "Started new course", course: "Critical Thinking", time: "2 days ago", status: "info" }
              ].map((activity, index) => (
                <div key={index} className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className={`p-2 rounded-lg ${
                    activity.status === "success" ? "bg-green-100" :
                    activity.status === "warning" ? "bg-yellow-100" :
                    "bg-blue-100"
                  }`}>
                    {activity.status === "success" ? <CheckCircle className="text-green-600" size={20} /> :
                     activity.status === "warning" ? <AlertCircle className="text-yellow-600" size={20} /> :
                     <Clock className="text-blue-600" size={20} />}
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-gray-900">{activity.student}</p>
                    <p className="text-sm text-gray-600">{activity.action} - {activity.course}</p>
                    <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Pending Tasks */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-white rounded-xl p-6 shadow-lg"
          >
            <h2 className="text-xl font-bold text-gray-900 mb-4">Pending Tasks</h2>
            <div className="space-y-3">
              {[
                { task: "Review 5 assignments", priority: "high" },
                { task: "Schedule next week's sessions", priority: "medium" },
                { task: "Update course materials", priority: "low" },
                { task: "Send progress reports", priority: "high" }
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg hover:border-blue-500 transition-colors">
                  <input type="checkbox" className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" />
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">{item.task}</p>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      item.priority === "high" ? "bg-red-100 text-red-700" :
                      item.priority === "medium" ? "bg-yellow-100 text-yellow-700" :
                      "bg-gray-100 text-gray-700"
                    }`}>
                      {item.priority}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Student Performance Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-white rounded-xl p-6 shadow-lg"
        >
          <h2 className="text-xl font-bold text-gray-900 mb-4">Student Performance Overview</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 text-gray-700 font-semibold">Student Name</th>
                  <th className="text-left py-3 px-4 text-gray-700 font-semibold">Course</th>
                  <th className="text-left py-3 px-4 text-gray-700 font-semibold">Progress</th>
                  <th className="text-left py-3 px-4 text-gray-700 font-semibold">Grade</th>
                  <th className="text-left py-3 px-4 text-gray-700 font-semibold">Status</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: "Ahmed Khan", course: "Professional Communication", progress: 75, grade: "A", status: "On Track" },
                  { name: "Fatima Ali", course: "Resume Writing", progress: 90, grade: "A+", status: "Excellent" },
                  { name: "Hassan Raza", course: "Leadership Skills", progress: 45, grade: "B", status: "Needs Support" },
                  { name: "Ayesha Malik", course: "Critical Thinking", progress: 80, grade: "A", status: "On Track" }
                ].map((student, index) => (
                  <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-3 px-4 text-gray-900 font-medium">{student.name}</td>
                    <td className="py-3 px-4 text-gray-600">{student.course}</td>
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-2">
                        <div className="flex-1 bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-blue-600 h-2 rounded-full" 
                            style={{ width: `${student.progress}%` }}
                          />
                        </div>
                        <span className="text-sm text-gray-600">{student.progress}%</span>
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
                        {student.grade}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        student.status === "Excellent" ? "bg-green-100 text-green-700" :
                        student.status === "On Track" ? "bg-blue-100 text-blue-700" :
                        "bg-yellow-100 text-yellow-700"
                      }`}>
                        {student.status}
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
