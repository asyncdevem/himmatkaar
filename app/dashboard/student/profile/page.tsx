"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Home, 
  User, 
  BookOpen, 
  Award, 
  Calendar,
  TrendingUp,
  FileText,
  Camera,
  Save
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

export default function StudentProfile() {
  const [profile, setProfile] = useState({
    fullName: "Ahmed Khan",
    email: "ahmed.khan@student.com",
    phone: "+92 300 1234567",
    university: "University of Karachi",
    major: "Computer Science",
    year: "3rd Year",
    city: "Karachi",
    bio: "Passionate about technology and eager to learn new skills to advance my career."
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Save to Supabase
    alert("Profile updated successfully!");
  };

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
          <h1 className="text-3xl font-bold text-gray-900">My Profile</h1>
          <p className="text-gray-600 mt-2">Manage your personal information</p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Profile Picture */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-xl p-6 shadow-lg"
          >
            <h2 className="text-xl font-bold text-gray-900 mb-4">Profile Picture</h2>
            <div className="flex flex-col items-center">
              <div className="relative">
                <div className="w-32 h-32 rounded-full bg-[#a3caad] flex items-center justify-center text-4xl font-bold text-[#17431f]">
                  AK
                </div>
                <button className="absolute bottom-0 right-0 bg-[#3a8a4d] text-white p-2 rounded-full hover:bg-[#17431f] transition-colors">
                  <Camera size={20} />
                </button>
              </div>
              <p className="text-sm text-gray-600 mt-4 text-center">
                Click the camera icon to upload a new photo
              </p>
            </div>

            {/* Quick Stats */}
            <div className="mt-6 pt-6 border-t border-gray-200 space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Member Since</span>
                <span className="font-semibold text-gray-900">Jan 2026</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Courses Completed</span>
                <span className="font-semibold text-[#3a8a4d]">4</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Certificates Earned</span>
                <span className="font-semibold text-[#3a8a4d]">3</span>
              </div>
            </div>
          </motion.div>

          {/* Profile Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-2 bg-white rounded-xl p-6 shadow-lg"
          >
            <h2 className="text-xl font-bold text-gray-900 mb-6">Personal Information</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Full Name</label>
                  <input
                    type="text"
                    value={profile.fullName}
                    onChange={(e) => setProfile({ ...profile, fullName: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#3a8a4d] focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">Email Address</label>
                  <input
                    type="email"
                    value={profile.email}
                    onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#3a8a4d] focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">Phone Number</label>
                  <input
                    type="tel"
                    value={profile.phone}
                    onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#3a8a4d] focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">City</label>
                  <input
                    type="text"
                    value={profile.city}
                    onChange={(e) => setProfile({ ...profile, city: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#3a8a4d] focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">University</label>
                  <input
                    type="text"
                    value={profile.university}
                    onChange={(e) => setProfile({ ...profile, university: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#3a8a4d] focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">Major</label>
                  <input
                    type="text"
                    value={profile.major}
                    onChange={(e) => setProfile({ ...profile, major: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#3a8a4d] focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">Year</label>
                  <select
                    value={profile.year}
                    onChange={(e) => setProfile({ ...profile, year: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#3a8a4d] focus:outline-none transition-colors"
                  >
                    <option>1st Year</option>
                    <option>2nd Year</option>
                    <option>3rd Year</option>
                    <option>4th Year</option>
                    <option>Graduate</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">Bio</label>
                <textarea
                  value={profile.bio}
                  onChange={(e) => setProfile({ ...profile, bio: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#3a8a4d] focus:outline-none transition-colors resize-none"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="flex items-center gap-2 bg-[#3a8a4d] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#17431f] transition-all hover:shadow-lg"
              >
                <Save size={20} />
                Save Changes
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </DashboardLayout>
  );
}
