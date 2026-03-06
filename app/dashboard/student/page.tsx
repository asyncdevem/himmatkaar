"use client";

import { motion } from "framer-motion";
import { 
  Home, 
  User, 
  BookOpen, 
  Award, 
  Calendar,
  TrendingUp,
  CheckCircle,
  Clock,
  FileText
} from "lucide-react";
import DashboardLayout from "@/components/DashboardLayout";

const navigation = [
  { name: "Dashboard", href: "/dashboard/student", icon: <Home size={20} /> },
  { name: "My Profile", href: "/dashboard/student/profile", icon: <User size={20} /> },
  { name: "Courses", href: "/dashboard/student/courses", icon: <BookOpen size={20} /> },
  { name: "Assignments", href: "/dashboard/student/assignments", icon: <FileText size={20} /> },
  { name: "Progress", href: "/dashboard/student/progress", icon: <TrendingUp size={20} /> },
  { name: "Certificates", href: "/dashboard/student/certificates", icon: <Award size={20} /> },
];

export default function StudentDashboard() {
  return (
    <DashboardLayout 
      role="student" 
      navigation={navigation}
      userName="Ahmed Khan"
      userEmail="ahmed.khan@student.com"
    >
      <div className="space-y-6">
        {/* Welcome Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-3xl font-bold text-gray-900">Welcome back, Ahmed!</h1>
          <p className="text-gray-600 mt-2">Here's what's happening with your fellowship journey</p>
        </motion.div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { label: "Courses Enrolled", value: "6", icon: <BookOpen size={24} />, color: "#3a8a4d" },
            { label: "Completed", value: "4", icon: <CheckCircle size={24} />, color: "#3a8a4d" },
            { label: "In Progress", value: "2", icon: <Clock size={24} />, color: "#f59e0b" },
            { label: "Certificates", value: "3", icon: <Award size={24} />, color: "#3a8a4d" }
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
          {/* Current Courses */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="lg:col-span-2 bg-white rounded-xl p-6 shadow-lg"
          >
            <h2 className="text-xl font-bold text-gray-900 mb-4">Current Courses</h2>
            <div className="space-y-4">
              {[
                { name: "Professional Communication", progress: 75, instructor: "Dr. Sarah Ahmed" },
                { name: "Resume Writing Workshop", progress: 60, instructor: "Ali Hassan" },
                { name: "Leadership Skills", progress: 40, instructor: "Fatima Khan" }
              ].map((course, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4 hover:border-[#3a8a4d] transition-colors">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="font-semibold text-gray-900">{course.name}</h3>
                      <p className="text-sm text-gray-600">Instructor: {course.instructor}</p>
                    </div>
                    <span className="text-sm font-semibold text-[#3a8a4d]">{course.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${course.progress}%` }}
                      transition={{ duration: 1, delay: index * 0.2 }}
                      className="bg-[#3a8a4d] h-2 rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Upcoming Events */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-white rounded-xl p-6 shadow-lg"
          >
            <h2 className="text-xl font-bold text-gray-900 mb-4">Upcoming Events</h2>
            <div className="space-y-4">
              {[
                { title: "Workshop: Interview Skills", date: "Mar 10, 2026", time: "2:00 PM" },
                { title: "Guest Speaker Session", date: "Mar 12, 2026", time: "4:00 PM" },
                { title: "Assignment Deadline", date: "Mar 15, 2026", time: "11:59 PM" }
              ].map((event, index) => (
                <div key={index} className="flex gap-3 p-3 bg-gray-50 rounded-lg">
                  <div className="flex-shrink-0">
                    <Calendar className="text-[#3a8a4d]" size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">{event.title}</p>
                    <p className="text-xs text-gray-600">{event.date}</p>
                    <p className="text-xs text-gray-500">{event.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Recent Assignments */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-white rounded-xl p-6 shadow-lg"
        >
          <h2 className="text-xl font-bold text-gray-900 mb-4">Recent Assignments</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 text-gray-700 font-semibold">Assignment</th>
                  <th className="text-left py-3 px-4 text-gray-700 font-semibold">Course</th>
                  <th className="text-left py-3 px-4 text-gray-700 font-semibold">Due Date</th>
                  <th className="text-left py-3 px-4 text-gray-700 font-semibold">Status</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: "Resume Draft", course: "Resume Writing", due: "Mar 15, 2026", status: "Pending" },
                  { name: "Communication Essay", course: "Professional Communication", due: "Mar 12, 2026", status: "Submitted" },
                  { name: "Leadership Case Study", course: "Leadership Skills", due: "Mar 20, 2026", status: "Not Started" }
                ].map((assignment, index) => (
                  <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-3 px-4 text-gray-900">{assignment.name}</td>
                    <td className="py-3 px-4 text-gray-600">{assignment.course}</td>
                    <td className="py-3 px-4 text-gray-600">{assignment.due}</td>
                    <td className="py-3 px-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        assignment.status === "Submitted" ? "bg-green-100 text-green-700" :
                        assignment.status === "Pending" ? "bg-yellow-100 text-yellow-700" :
                        "bg-gray-100 text-gray-700"
                      }`}>
                        {assignment.status}
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
