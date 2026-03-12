"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Home, 
  Users, 
  UserCog,
  BookOpen, 
  Settings,
  BarChart3,
  Search,
  Filter,
  UserPlus,
  Edit,
  Trash2,
  MoreVertical,
  X
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

const initialUsers = [
  { id: 1, name: "Ahmed Khan", email: "ahmed.khan@student.com", role: "Student", status: "Active", joined: "Jan 15, 2026" },
  { id: 2, name: "Fatima Ali", email: "fatima.ali@student.com", role: "Student", status: "Active", joined: "Jan 18, 2026" },
  { id: 3, name: "Dr. Sarah Ahmed", email: "sarah.ahmed@coordinator.com", role: "Coordinator", status: "Active", joined: "Jan 10, 2026" },
  { id: 4, name: "Hassan Raza", email: "hassan.raza@student.com", role: "Student", status: "Inactive", joined: "Jan 20, 2026" },
  { id: 5, name: "Ayesha Malik", email: "ayesha.malik@student.com", role: "Student", status: "Active", joined: "Jan 22, 2026" },
  { id: 6, name: "Dr. Usman Khan", email: "usman.khan@coordinator.com", role: "Coordinator", status: "Active", joined: "Jan 12, 2026" },
  { id: 7, name: "Ali Hassan", email: "ali.hassan@student.com", role: "Student", status: "Pending", joined: "Mar 7, 2026" },
  { id: 8, name: "Sara Ahmed", email: "sara.ahmed@student.com", role: "Student", status: "Pending", joined: "Mar 7, 2026" },
];

export default function AdminUsers() {
  const [users, setUsers] = useState(initialUsers);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterRole, setFilterRole] = useState("All");
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState<any>(null);
  const [formData, setFormData] = useState({ name: "", email: "", role: "Student", status: "Active" });

  const filteredUsers = users.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         user.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRole = filterRole === "All" || user.role === filterRole;
    return matchesSearch && matchesRole;
  });

  const handleCreate = () => {
    const newUser = {
      id: users.length + 1,
      ...formData,
      joined: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
    };
    setUsers([...users, newUser]);
    setShowCreateModal(false);
    setFormData({ name: "", email: "", role: "Student", status: "Active" });
  };

  const handleEdit = () => {
    setUsers(users.map(u => u.id === selectedUser.id ? { ...u, ...formData } : u));
    setShowEditModal(false);
    setSelectedUser(null);
    setFormData({ name: "", email: "", role: "Student", status: "Active" });
  };

  const handleDelete = () => {
    setUsers(users.filter(u => u.id !== selectedUser.id));
    setShowDeleteModal(false);
    setSelectedUser(null);
  };

  const openEditModal = (user: any) => {
    setSelectedUser(user);
    setFormData({ name: user.name, email: user.email, role: user.role, status: user.status });
    setShowEditModal(true);
  };

  const openDeleteModal = (user: any) => {
    setSelectedUser(user);
    setShowDeleteModal(true);
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
          className="flex justify-between items-center"
        >
          <div>
            <h1 className="text-3xl font-bold text-gray-900">User Management</h1>
            <p className="text-gray-600 mt-2">Manage all users in the system</p>
          </div>
          <button 
            onClick={() => setShowCreateModal(true)}
            className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors flex items-center gap-2"
          >
            <UserPlus size={20} />
            Add New User
          </button>
        </motion.div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { label: "Total Users", value: users.length.toString(), color: "#dc2626" },
            { label: "Students", value: users.filter(u => u.role === "Student").length.toString(), color: "#3a8a4d" },
            { label: "Coordinators", value: users.filter(u => u.role === "Coordinator").length.toString(), color: "#2563eb" },
            { label: "Pending", value: users.filter(u => u.status === "Pending").length.toString(), color: "#f59e0b" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-lg"
            >
              <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
              <p className="text-gray-600 text-sm mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-xl p-6 shadow-lg"
        >
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search users..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-red-600 focus:outline-none"
              />
            </div>
            <div className="flex gap-2">
              <select
                value={filterRole}
                onChange={(e) => setFilterRole(e.target.value)}
                className="px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-red-600 focus:outline-none"
              >
                <option>All</option>
                <option>Student</option>
                <option>Coordinator</option>
                <option>Admin</option>
              </select>
              <button className="px-4 py-3 border-2 border-gray-200 rounded-lg hover:border-red-600 transition-colors">
                <Filter size={20} />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Users Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-white rounded-xl shadow-lg overflow-hidden"
        >
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left py-4 px-6 text-gray-700 font-semibold">User</th>
                  <th className="text-left py-4 px-6 text-gray-700 font-semibold">Email</th>
                  <th className="text-left py-4 px-6 text-gray-700 font-semibold">Role</th>
                  <th className="text-left py-4 px-6 text-gray-700 font-semibold">Status</th>
                  <th className="text-left py-4 px-6 text-gray-700 font-semibold">Joined</th>
                  <th className="text-left py-4 px-6 text-gray-700 font-semibold">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredUsers.map((user, index) => (
                  <motion.tr
                    key={user.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="border-t border-gray-100 hover:bg-gray-50"
                  >
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
                          <span className="font-semibold text-red-600">{user.name.charAt(0)}</span>
                        </div>
                        <span className="font-medium text-gray-900">{user.name}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-gray-600">{user.email}</td>
                    <td className="py-4 px-6">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        user.role === "Student" ? "bg-green-100 text-green-700" :
                        user.role === "Coordinator" ? "bg-blue-100 text-blue-700" :
                        "bg-red-100 text-red-700"
                      }`}>
                        {user.role}
                      </span>
                    </td>
                    <td className="py-4 px-6">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        user.status === "Active" ? "bg-green-100 text-green-700" :
                        user.status === "Pending" ? "bg-yellow-100 text-yellow-700" :
                        "bg-gray-100 text-gray-700"
                      }`}>
                        {user.status}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-gray-600">{user.joined}</td>
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-2">
                        <button 
                          onClick={() => openEditModal(user)}
                          className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                        >
                          <Edit size={18} className="text-gray-600" />
                        </button>
                        <button 
                          onClick={() => openDeleteModal(user)}
                          className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                        >
                          <Trash2 size={18} className="text-red-600" />
                        </button>
                        <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                          <MoreVertical size={18} className="text-gray-600" />
                        </button>
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>

      {/* Create User Modal */}
      <AnimatePresence>
        {showCreateModal && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowCreateModal(false)}
              className="fixed inset-0 bg-black/50 z-50"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-xl p-6 w-full max-w-md z-50 shadow-2xl"
            >
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Add New User</h2>
                <button onClick={() => setShowCreateModal(false)} className="p-2 hover:bg-gray-100 rounded-lg">
                  <X size={20} />
                </button>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-red-600 focus:outline-none"
                    placeholder="Enter full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-red-600 focus:outline-none"
                    placeholder="Enter email address"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Role</label>
                  <select
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-red-600 focus:outline-none"
                  >
                    <option>Student</option>
                    <option>Coordinator</option>
                    <option>Admin</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Status</label>
                  <select
                    value={formData.status}
                    onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-red-600 focus:outline-none"
                  >
                    <option>Active</option>
                    <option>Pending</option>
                    <option>Inactive</option>
                  </select>
                </div>
              </div>
              <div className="flex gap-3 mt-6">
                <button
                  onClick={() => setShowCreateModal(false)}
                  className="flex-1 px-4 py-3 border-2 border-gray-200 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleCreate}
                  className="flex-1 px-4 py-3 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-colors"
                >
                  Create User
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Edit User Modal */}
      <AnimatePresence>
        {showEditModal && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowEditModal(false)}
              className="fixed inset-0 bg-black/50 z-50"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-xl p-6 w-full max-w-md z-50 shadow-2xl"
            >
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Edit User</h2>
                <button onClick={() => setShowEditModal(false)} className="p-2 hover:bg-gray-100 rounded-lg">
                  <X size={20} />
                </button>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-red-600 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-red-600 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Role</label>
                  <select
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-red-600 focus:outline-none"
                  >
                    <option>Student</option>
                    <option>Coordinator</option>
                    <option>Admin</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Status</label>
                  <select
                    value={formData.status}
                    onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-red-600 focus:outline-none"
                  >
                    <option>Active</option>
                    <option>Pending</option>
                    <option>Inactive</option>
                  </select>
                </div>
              </div>
              <div className="flex gap-3 mt-6">
                <button
                  onClick={() => setShowEditModal(false)}
                  className="flex-1 px-4 py-3 border-2 border-gray-200 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleEdit}
                  className="flex-1 px-4 py-3 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-colors"
                >
                  Save Changes
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Delete Confirmation Modal */}
      <AnimatePresence>
        {showDeleteModal && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowDeleteModal(false)}
              className="fixed inset-0 bg-black/50 z-50"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-xl p-6 w-full max-w-md z-50 shadow-2xl"
            >
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Delete User</h2>
                <button onClick={() => setShowDeleteModal(false)} className="p-2 hover:bg-gray-100 rounded-lg">
                  <X size={20} />
                </button>
              </div>
              <p className="text-gray-600 mb-6">
                Are you sure you want to delete <span className="font-semibold text-gray-900">{selectedUser?.name}</span>? This action cannot be undone.
              </p>
              <div className="flex gap-3">
                <button
                  onClick={() => setShowDeleteModal(false)}
                  className="flex-1 px-4 py-3 border-2 border-gray-200 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleDelete}
                  className="flex-1 px-4 py-3 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-colors"
                >
                  Delete User
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </DashboardLayout>
  );
}
