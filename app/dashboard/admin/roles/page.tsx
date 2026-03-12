"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Home, 
  Users, 
  UserCog,
  BookOpen, 
  Settings,
  BarChart3,
  Shield,
  CheckCircle
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

const pendingRoleRequests = [
  { id: 1, name: "Dr. Usman Khan", email: "usman.khan@coordinator.com", currentRole: "Student", requestedRole: "Coordinator", reason: "5 years teaching experience", date: "Mar 5, 2026" },
  { id: 2, name: "Ali Hassan", email: "ali.hassan@student.com", currentRole: "Student", requestedRole: "Coordinator", reason: "Completed fellowship program", date: "Mar 6, 2026" },
];

const rolePermissions = {
  Student: ["View courses", "Submit assignments", "View grades", "Access resources"],
  Coordinator: ["Manage students", "Grade assignments", "Create courses", "View reports", "Send messages"],
  Admin: ["Full system access", "Manage users", "Assign roles", "System settings", "View analytics", "Manage courses"]
};

export default function AdminRoles() {
  const [selectedUser, setSelectedUser] = useState("");
  const [selectedRole, setSelectedRole] = useState("Student");

  const handleAssignRole = () => {
    if (selectedUser && selectedRole) {
      alert(`Role ${selectedRole} assigned to ${selectedUser}`);
    }
  };

  return (
    <DashboardLayout 
      role="admin" 
      navigation={navigation}
      userName="Admin User"
      userEmail="admin@himmatkaar.org"
    >
      <div className="space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-3xl font-bold text-gray-900">Role Assignment</h1>
          <p className="text-gray-600 mt-2">Manage user roles and permissions</p>
        </motion.div>

        {/* Assign Role Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-xl p-6 shadow-lg"
        >
          <h2 className="text-xl font-bold text-gray-900 mb-4">Assign New Role</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <label className="block text-gray-700 font-medium mb-2">Select User</label>
              <select
                value={selectedUser}
                onChange={(e) => setSelectedUser(e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-red-600 focus:outline-none"
              >
                <option value="">Choose a user...</option>
                <option>Ahmed Khan</option>
                <option>Fatima Ali</option>
                <option>Hassan Raza</option>
                <option>Ayesha Malik</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">Assign Role</label>
              <select
                value={selectedRole}
                onChange={(e) => setSelectedRole(e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-red-600 focus:outline-none"
              >
                <option>Student</option>
                <option>Coordinator</option>
                <option>Admin</option>
              </select>
            </div>
            <div className="flex items-end">
              <button
                onClick={handleAssignRole}
                className="w-full bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
              >
                Assign Role
              </button>
            </div>
          </div>
        </motion.div>

        {/* Pending Requests */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-xl p-6 shadow-lg"
        >
          <h2 className="text-xl font-bold text-gray-900 mb-4">Pending Role Requests</h2>
          <div className="space-y-4">
            {pendingRoleRequests.map((request, index) => (
              <motion.div
                key={request.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="border-2 border-gray-200 rounded-lg p-4 hover:border-red-600 transition-colors"
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
                        <span className="font-semibold text-red-600">{request.name.charAt(0)}</span>
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900">{request.name}</h3>
                        <p className="text-sm text-gray-600">{request.email}</p>
                      </div>
                    </div>
                    <div className="ml-13 space-y-1">
                      <p className="text-sm text-gray-700">
                        <span className="font-semibold">Current Role:</span> {request.currentRole}
                      </p>
                      <p className="text-sm text-gray-700">
                        <span className="font-semibold">Requested Role:</span> {request.requestedRole}
                      </p>
                      <p className="text-sm text-gray-700">
                        <span className="font-semibold">Reason:</span> {request.reason}
                      </p>
                      <p className="text-xs text-gray-500">Requested on {request.date}</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button className="px-4 py-2 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors">
                      Approve
                    </button>
                    <button className="px-4 py-2 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-colors">
                      Reject
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Role Permissions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="grid md:grid-cols-3 gap-6"
        >
          {Object.entries(rolePermissions).map(([role, permissions], index) => (
            <div key={role} className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <div className={`p-3 rounded-lg ${
                  role === "Student" ? "bg-green-100" :
                  role === "Coordinator" ? "bg-blue-100" :
                  "bg-red-100"
                }`}>
                  <Shield className={
                    role === "Student" ? "text-green-600" :
                    role === "Coordinator" ? "text-blue-600" :
                    "text-red-600"
                  } size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900">{role}</h3>
              </div>
              <ul className="space-y-2">
                {permissions.map((permission, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                    <CheckCircle className="text-green-600 flex-shrink-0 mt-0.5" size={16} />
                    {permission}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>
      </div>
    </DashboardLayout>
  );
}
