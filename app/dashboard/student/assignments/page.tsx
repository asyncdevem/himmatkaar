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
  Upload,
  CheckCircle,
  Clock,
  AlertCircle
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

const assignments = [
  {
    id: 1,
    title: "Resume Draft Submission",
    course: "Resume Writing Workshop",
    dueDate: "Mar 15, 2026",
    status: "Pending",
    description: "Create a professional resume following the guidelines discussed in class.",
    points: 100,
    submitted: false
  },
  {
    id: 2,
    title: "Communication Essay",
    course: "Professional Communication",
    dueDate: "Mar 12, 2026",
    status: "Submitted",
    description: "Write a 1000-word essay on effective workplace communication.",
    points: 100,
    submitted: true,
    grade: 95
  },
  {
    id: 3,
    title: "Leadership Case Study",
    course: "Leadership Skills",
    dueDate: "Mar 20, 2026",
    status: "Not Started",
    description: "Analyze a leadership scenario and provide recommendations.",
    points: 150,
    submitted: false
  },
  {
    id: 4,
    title: "Public Speaking Video",
    course: "Professional Communication",
    dueDate: "Mar 18, 2026",
    status: "Overdue",
    description: "Record a 5-minute presentation on a topic of your choice.",
    points: 100,
    submitted: false
  },
  {
    id: 5,
    title: "Critical Thinking Exercise",
    course: "Critical Thinking",
    dueDate: "Mar 10, 2026",
    status: "Graded",
    description: "Complete the problem-solving exercises from Module 5.",
    points: 50,
    submitted: true,
    grade: 48
  }
];

export default function StudentAssignments() {
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
          <h1 className="text-3xl font-bold text-gray-900">Assignments</h1>
          <p className="text-gray-600 mt-2">Manage your coursework and submissions</p>
        </motion.div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { label: "Total", value: "5", icon: <FileText size={24} />, color: "#3a8a4d" },
            { label: "Pending", value: "1", icon: <Clock size={24} />, color: "#f59e0b" },
            { label: "Submitted", value: "2", icon: <CheckCircle size={24} />, color: "#10b981" },
            { label: "Overdue", value: "1", icon: <AlertCircle size={24} />, color: "#ef4444" }
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

        {/* Assignments List */}
        <div className="space-y-4">
          {assignments.map((assignment, index) => (
            <motion.div
              key={assignment.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-lg"
            >
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-lg ${
                      assignment.status === "Graded" || assignment.status === "Submitted" ? "bg-green-100" :
                      assignment.status === "Overdue" ? "bg-red-100" :
                      assignment.status === "Pending" ? "bg-yellow-100" :
                      "bg-gray-100"
                    }`}>
                      {assignment.status === "Graded" || assignment.status === "Submitted" ? (
                        <CheckCircle className="text-green-600" size={24} />
                      ) : assignment.status === "Overdue" ? (
                        <AlertCircle className="text-red-600" size={24} />
                      ) : assignment.status === "Pending" ? (
                        <Clock className="text-yellow-600" size={24} />
                      ) : (
                        <FileText className="text-gray-600" size={24} />
                      )}
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-1">{assignment.title}</h3>
                      <p className="text-sm text-gray-600 mb-2">{assignment.course}</p>
                      <p className="text-gray-700 mb-3">{assignment.description}</p>
                      
                      <div className="flex flex-wrap gap-4 text-sm">
                        <span className="flex items-center gap-1 text-gray-600">
                          <Calendar size={16} />
                          Due: {assignment.dueDate}
                        </span>
                        <span className="flex items-center gap-1 text-gray-600">
                          <Award size={16} />
                          {assignment.points} points
                        </span>
                        {assignment.grade && (
                          <span className="flex items-center gap-1 text-[#3a8a4d] font-semibold">
                            Grade: {assignment.grade}/{assignment.points}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <span className={`px-4 py-2 rounded-lg text-sm font-semibold text-center ${
                    assignment.status === "Graded" ? "bg-green-100 text-green-700" :
                    assignment.status === "Submitted" ? "bg-blue-100 text-blue-700" :
                    assignment.status === "Overdue" ? "bg-red-100 text-red-700" :
                    assignment.status === "Pending" ? "bg-yellow-100 text-yellow-700" :
                    "bg-gray-100 text-gray-700"
                  }`}>
                    {assignment.status}
                  </span>
                  
                  {!assignment.submitted && (
                    <button className="px-4 py-2 bg-[#3a8a4d] text-white rounded-lg font-semibold hover:bg-[#17431f] transition-colors flex items-center justify-center gap-2">
                      <Upload size={18} />
                      Submit
                    </button>
                  )}
                  
                  {assignment.submitted && (
                    <button className="px-4 py-2 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:border-[#3a8a4d] hover:text-[#3a8a4d] transition-colors">
                      View Details
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
