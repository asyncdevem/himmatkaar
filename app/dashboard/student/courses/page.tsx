"use client";

import { motion } from "framer-motion";
import { 
  Home, 
  User, 
  BookOpen, 
  Award, 
  Calendar,
  TrendingUp,
  FileText,
  Play,
  CheckCircle,
  Clock
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

const courses = [
  {
    id: 1,
    title: "Professional Communication",
    instructor: "Dr. Sarah Ahmed",
    progress: 75,
    status: "In Progress",
    modules: 8,
    completedModules: 6,
    duration: "6 weeks",
    image: "/himmatkaar-logo.jpg"
  },
  {
    id: 2,
    title: "Resume Writing Workshop",
    instructor: "Ali Hassan",
    progress: 60,
    status: "In Progress",
    modules: 5,
    completedModules: 3,
    duration: "4 weeks",
    image: "/himmatkaar-logo.jpg"
  },
  {
    id: 3,
    title: "Leadership Skills",
    instructor: "Fatima Khan",
    progress: 40,
    status: "In Progress",
    modules: 10,
    completedModules: 4,
    duration: "8 weeks",
    image: "/himmatkaar-logo.jpg"
  },
];

export default function StudentCourses() {
  return (
    <DashboardLayout 
      role="student" 
      navigation={navigation}
      userName="Ahmed Khan"
      userEmail="ahmed.khan@student.com"
    >
      <div className="space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-3xl font-bold text-gray-900">My Courses</h1>
          <p className="text-gray-600 mt-2">Track your learning journey</p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-6">
          {[
            { label: "Enrolled", value: "6", icon: <BookOpen size={24} />, color: "#3a8a4d" },
            { label: "In Progress", value: "3", icon: <Clock size={24} />, color: "#f59e0b" },
            { label: "Completed", value: "1", icon: <CheckCircle size={24} />, color: "#10b981" },
            { label: "Not Started", value: "2", icon: <Play size={24} />, color: "#6b7280" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-lg"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg" style={{ backgroundColor: `${stat.color}20` }}>
                  <div style={{ color: stat.color }}>{stat.icon}</div>
                </div>
                <div>
                  <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                  <p className="text-gray-600 text-sm">{stat.label}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer"
            >
              <div className="h-48 bg-gray-200 relative">
                <img 
                  src={course.image} 
                  alt={course.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-yellow-500 text-white">
                    {course.status}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{course.title}</h3>
                <p className="text-sm text-gray-600 mb-4">Instructor: {course.instructor}</p>
                
                <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                  <span className="flex items-center gap-1">
                    <BookOpen size={16} />
                    {course.completedModules}/{course.modules} modules
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={16} />
                    {course.duration}
                  </span>
                </div>

                <div className="mb-4">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-600">Progress</span>
                    <span className="font-semibold text-[#3a8a4d]">{course.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${course.progress}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      className="bg-[#3a8a4d] h-2 rounded-full"
                    />
                  </div>
                </div>

                <button className="w-full bg-[#3a8a4d] text-white py-2 rounded-lg font-semibold hover:bg-[#17431f] transition-colors flex items-center justify-center gap-2">
                  <Play size={18} />
                  Continue Learning
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
