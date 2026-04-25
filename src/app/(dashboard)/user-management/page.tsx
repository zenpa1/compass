"use client";

import { useState, useEffect, useRef, useCallback } from "react";

type Permission = "Admin" | "Employee";
type FilterPermission = "All" | "Admin" | "Employee";
type SortBy = "name" | "email";

interface User {
  user_id: number;
  full_name: string | null;
  email: string;
  user_type: "OWNER" | "EMPLOYEE";
}

const toPermission = (user_type: "OWNER" | "EMPLOYEE"): Permission =>
  user_type === "OWNER" ? "Admin" : "Employee";

export default function UserManagementPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [search, setSearch] = useState("");

  const [filter, setFilter] = useState<FilterPermission>("All");
  const [sortBy, setSortBy] = useState<SortBy>("name");
  const [pendingFilter, setPendingFilter] = useState<FilterPermission>("All");
  const [pendingSortBy, setPendingSortBy] = useState<SortBy>("name");

  const [filterOpen, setFilterOpen] = useState(false);
  const [openMenuId, setOpenMenuId] = useState<number | null>(null);
  const [addModalOpen, setAddModalOpen] = useState(false);
  const [editUser, setEditUser] = useState<User | null>(null);
  const [editPermission, setEditPermission] = useState<Permission>("Employee");
  const [deleteUser, setDeleteUser] = useState<User | null>(null);

  const [newUser, setNewUser] = useState({ name: "", email: "", permission: "Admin" as Permission });
  const [submitting, setSubmitting] = useState(false);

  const menuRef = useRef<HTMLDivElement>(null);

  const fetchUsers = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const params = new URLSearchParams();
      if (search) params.set("search", search);
      if (filter !== "All") params.set("permission", filter);
      params.set("sortBy", sortBy);
      const res = await fetch(`/api/users?${params.toString()}`);
      if (!res.ok) throw new Error("Failed to fetch users");
      setUsers(await res.json());
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [search, filter, sortBy]);

  useEffect(() => {
    const timer = setTimeout(fetchUsers, 300);
    return () => clearTimeout(timer);
  }, [fetchUsers]);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) setOpenMenuId(null);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const openFilterModal = () => {
    setPendingFilter(filter);
    setPendingSortBy(sortBy);
    setFilterOpen(true);
  };

  const handleFilterConfirm = () => {
    setFilter(pendingFilter);
    setSortBy(pendingSortBy);
    setFilterOpen(false);
  };

  const handleDeleteConfirm = async () => {
    if (!deleteUser) return;
    setSubmitting(true);
    try {
      const res = await fetch(`/api/users/${deleteUser.user_id}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Failed to delete user");
      setUsers((prev) => prev.filter((u) => u.user_id !== deleteUser.user_id));
      setDeleteUser(null);
    } catch (err: any) {
      alert(err.message);
    } finally {
      setSubmitting(false);
    }
  };

  const handleEditOpen = (user: User) => {
    setEditUser(user);
    setEditPermission(toPermission(user.user_type));
    setOpenMenuId(null);
  };

  const handleEditSave = async () => {
    if (!editUser) return;
    setSubmitting(true);
    try {
      const res = await fetch(`/api/users/${editUser.user_id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ permission: editPermission }),
      });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Failed to update user");
      }
      await fetchUsers();
      setEditUser(null);
    } catch (err: any) {
      alert(err.message);
    } finally {
      setSubmitting(false);
    }
  };

  const handleAddUser = async () => {
    if (!newUser.name || !newUser.email) return;
    setSubmitting(true);
    try {
      const res = await fetch("/api/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ full_name: newUser.name, email: newUser.email, permission: newUser.permission }),
      });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Failed to add user");
      }
      await fetchUsers();
      setNewUser({ name: "", email: "", permission: "Admin" });
      setAddModalOpen(false);
    } catch (err: any) {
      alert(err.message);
    } finally {
      setSubmitting(false);
    }
  };

  const isFilterActive = filter !== "All" || sortBy !== "name";

  return (
    <div className="min-h-full">
      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <h1 className="text-2xl font-semibold text-slate-800 tracking-tight">User Management</h1>
        <div className="flex-1 h-px bg-slate-200" />
      </div>

      {/* Toolbar */}
      <div className="flex items-center justify-between mb-6 gap-4">
        <div className="relative w-72">
          <svg className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
          </svg>
          <input
            type="text"
            placeholder="Enter name here"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-9 pr-4 py-2 text-sm border border-slate-200 rounded-lg bg-white text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-400 transition"
          />
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={openFilterModal}
            className={`flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg transition ${
              isFilterActive ? "bg-amber-500 text-white hover:bg-amber-600" : "bg-slate-800 text-white hover:bg-slate-700"
            }`}
          >
            <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
            </svg>
            Filter{isFilterActive ? " •" : ""}
          </button>

          <button onClick={() => { setNewUser({ name: "", email: "", permission: "Admin" }); setAddModalOpen(true); }}
            className="px-4 py-2 text-sm font-medium bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition">
            Add User
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-slate-100">
              <th className="text-left px-6 py-4 text-sm font-semibold text-slate-700 w-64">Users</th>
              <th className="text-left px-6 py-4 text-sm font-semibold text-slate-700">Email</th>
              <th className="text-left px-6 py-4 text-sm font-semibold text-slate-700 w-40">Permission</th>
              <th className="text-left px-6 py-4 text-sm font-semibold text-slate-700 w-24">Action</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr><td colSpan={4} className="text-center py-12 text-slate-400 text-sm">Loading...</td></tr>
            ) : error ? (
              <tr><td colSpan={4} className="text-center py-12 text-red-400 text-sm">{error}</td></tr>
            ) : users.length === 0 ? (
              <tr><td colSpan={4} className="text-center py-12 text-slate-400 text-sm">No users found.</td></tr>
            ) : (
              users.map((user) => (
                <tr key={user.user_id} className="border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4 text-sm text-slate-800 font-medium">{user.full_name ?? "—"}</td>
                  <td className="px-6 py-4 text-sm text-slate-500">{user.email}</td>
                  <td className="px-6 py-4 text-sm text-slate-700">{toPermission(user.user_type)}</td>
                  <td className="px-6 py-4 relative">
                    <button
                      onClick={() => setOpenMenuId(openMenuId === user.user_id ? null : user.user_id)}
                      className="p-1 rounded hover:bg-slate-100 transition text-slate-500 hover:text-slate-800"
                    >
                      <svg viewBox="0 0 24 24" className="size-5" fill="currentColor">
                        <circle cx="12" cy="5" r="1.5" /><circle cx="12" cy="12" r="1.5" /><circle cx="12" cy="19" r="1.5" />
                      </svg>
                    </button>
                    {openMenuId === user.user_id && (
                      <div ref={menuRef} className="absolute right-6 w-40 bg-white border border-slate-200 rounded-lg shadow-lg z-10 overflow-hidden" style={{ top: "100%" }}>
                        <button onClick={() => handleEditOpen(user)}
                          className="w-full flex items-center gap-2 px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 transition">
                          <svg viewBox="0 0 24 24" className="size-4 text-slate-400" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                          </svg>
                          Edit Permission
                        </button>
                        <button onClick={() => { setDeleteUser(user); setOpenMenuId(null); }}
                          className="w-full flex items-center gap-2 px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition">
                          <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="3 6 5 6 21 6" />
                            <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
                            <path d="M10 11v6M14 11v6" />
                            <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" />
                          </svg>
                          Delete User
                        </button>
                      </div>
                    )}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Filter Modal */}
      {filterOpen && (
        <Modal title="Filter" onClose={() => setFilterOpen(false)}>
          <div className="flex flex-col gap-6">
            <div>
              <p className="text-xs font-semibold text-slate-500 tracking-widest uppercase mb-3">Permission</p>
              <div className="flex flex-col gap-2">
                {(["All", "Admin", "Employee"] as FilterPermission[]).map((option) => {
                  const colorMap: Record<FilterPermission, string> = {
                    All: "bg-amber-500",
                    Admin: "bg-slate-400",
                    Employee: "bg-slate-300",
                  };
                  const isSelected = pendingFilter === option;
                  return (
                    <button key={option} onClick={() => setPendingFilter(option)}
                      className="flex items-center gap-3 px-1 py-1 rounded-lg text-left transition hover:bg-slate-50">
                      <span className={`size-5 rounded flex-shrink-0 ${isSelected ? colorMap[option] : "bg-slate-200"}`} />
                      <span className={`text-sm transition ${isSelected ? "text-slate-800 font-medium" : "text-slate-500"}`}>{option}</span>
                    </button>
                  );
                })}
              </div>
            </div>
            <div className="h-px bg-slate-100" />
            <div>
              <p className="text-xs font-semibold text-slate-500 tracking-widest uppercase mb-3">Sort By</p>
              <div className="flex flex-col gap-3">
                {([{ value: "name", label: "Name (A-Z)" }, { value: "email", label: "Email (A-Z)" }] as { value: SortBy; label: string }[]).map((option) => (
                  <button key={option.value} onClick={() => setPendingSortBy(option.value)}
                    className="flex items-center gap-3 px-1 py-1 rounded-lg text-left transition hover:bg-slate-50">
                    <span className={`flex-shrink-0 size-5 rounded-full border-2 flex items-center justify-center transition ${
                      pendingSortBy === option.value ? "border-amber-500 bg-amber-500" : "border-slate-300"
                    }`}>
                      {pendingSortBy === option.value && <span className="size-2 rounded-full bg-white" />}
                    </span>
                    <span className={`text-sm transition ${pendingSortBy === option.value ? "text-slate-800 font-medium" : "text-slate-500"}`}>{option.label}</span>
                  </button>
                ))}
              </div>
            </div>
            <div className="flex justify-end gap-3 pt-1">
              <button onClick={() => setFilterOpen(false)}
                className="px-4 py-2 text-sm text-slate-600 border border-slate-200 rounded-lg hover:bg-slate-50 transition">Cancel</button>
              <button onClick={handleFilterConfirm}
                className="px-5 py-2 text-sm font-medium bg-slate-800 text-white rounded-lg hover:bg-slate-700 transition">Confirm</button>
            </div>
          </div>
        </Modal>
      )}

      {/* Add User Modal */}
      {addModalOpen && (
        <Modal title="Add user" onClose={() => setAddModalOpen(false)}>
          <div className="flex flex-col gap-5">
            <div className="h-px bg-slate-200" />

            <div className="flex flex-col gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Fullname</label>
                <input
                  type="text"
                  value={newUser.name}
                  onChange={(e) => setNewUser((p) => ({ ...p, name: e.target.value }))}
                  placeholder="e.g Juan Dela Cruz"
                  className="w-full px-3 py-2 text-sm border border-slate-200 rounded-lg bg-slate-50 text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-400 transition"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
                <input
                  type="email"
                  value={newUser.email}
                  onChange={(e) => setNewUser((p) => ({ ...p, email: e.target.value }))}
                  placeholder="e.g Juan Dela Cruz"
                  className="w-full px-3 py-2 text-sm border border-slate-200 rounded-lg bg-slate-50 text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-400 transition"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Permission</label>
                <div className="grid grid-cols-2 gap-3">
                  {(["Admin", "Employee"] as Permission[]).map((role) => (
                    <button
                      key={role}
                      onClick={() => setNewUser((p) => ({ ...p, permission: role }))}
                      className={`flex items-center gap-3 px-4 py-3 rounded-lg border-2 text-left transition ${
                        newUser.permission === role ? "border-slate-700 bg-white" : "border-slate-200 bg-white hover:border-slate-300"
                      }`}
                    >
                      <span className={`flex-shrink-0 size-5 rounded-full border-2 flex items-center justify-center transition ${
                        newUser.permission === role ? "border-amber-500 bg-amber-500" : "border-slate-300"
                      }`}>
                        {newUser.permission === role && <span className="size-2 rounded-full bg-white" />}
                      </span>
                      <span>
                        <span className="block text-sm font-semibold text-slate-800">{role}</span>
                        <span className="block text-xs text-slate-400">{role === "Admin" ? "Full access" : "Standard access"}</span>
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex justify-end gap-3 pt-1">
              <button onClick={() => setAddModalOpen(false)} disabled={submitting}
                className="px-4 py-2 text-sm text-slate-600 border border-slate-200 rounded-lg hover:bg-slate-50 transition disabled:opacity-50">
                Cancel
              </button>
              <button onClick={handleAddUser} disabled={submitting || !newUser.name || !newUser.email}
                className="px-5 py-2 text-sm font-medium bg-slate-800 text-white rounded-lg hover:bg-slate-700 transition disabled:opacity-50">
                {submitting ? "Adding..." : "Confirm"}
              </button>
            </div>
          </div>
        </Modal>
      )}

      {/* Delete Confirmation Modal */}
      {deleteUser && (
        <Modal title="Delete User" onClose={() => setDeleteUser(null)}>
          <div className="flex flex-col gap-5">
            <div className="h-px bg-slate-200" />

            {/* Warning icon */}
            <div className="flex flex-col items-center gap-3 py-2">
              <div className="size-14 rounded-full bg-red-50 flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="size-7 text-red-500" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="3 6 5 6 21 6" />
                  <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
                  <path d="M10 11v6M14 11v6" />
                  <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" />
                </svg>
              </div>
              <div className="text-center">
                <p className="text-sm font-medium text-slate-800">
                  Remove <span className="font-semibold">{deleteUser.full_name ?? deleteUser.email}</span>?
                </p>
                <p className="text-xs text-slate-400 mt-1">
                  This action cannot be undone. The user will lose all access immediately.
                </p>
              </div>
            </div>

            <div className="flex justify-end gap-3">
              <button onClick={() => setDeleteUser(null)} disabled={submitting}
                className="px-4 py-2 text-sm text-slate-600 border border-slate-200 rounded-lg hover:bg-slate-50 transition disabled:opacity-50">
                Cancel
              </button>
              <button onClick={handleDeleteConfirm} disabled={submitting}
                className="px-5 py-2 text-sm font-medium bg-red-600 text-white rounded-lg hover:bg-red-700 transition disabled:opacity-50">
                {submitting ? "Removing..." : "Remove User"}
              </button>
            </div>
          </div>
        </Modal>
      )}

      {/* Edit Permission Modal */}
      {editUser && (
        <Modal title="Edit Permission" onClose={() => setEditUser(null)}>
          <div className="flex flex-col gap-5">
            <div>
              <p className="text-sm text-slate-600">{editUser.full_name ?? editUser.email}</p>
              <div className="mt-3 h-px bg-slate-200" />
            </div>
            <p className="text-xs font-semibold text-slate-500 tracking-widest uppercase">Select Role</p>
            <div className="flex flex-col gap-3">
              {(["Admin", "Employee"] as Permission[]).map((role) => (
                <button key={role} onClick={() => setEditPermission(role)}
                  className={`flex items-center gap-4 px-4 py-3 rounded-lg border-2 text-left transition ${
                    editPermission === role ? "border-slate-800 bg-white" : "border-slate-200 bg-white hover:border-slate-300"
                  }`}>
                  <span className={`flex-shrink-0 size-5 rounded-full border-2 flex items-center justify-center transition ${
                    editPermission === role ? "border-amber-500 bg-amber-500" : "border-slate-300"
                  }`}>
                    {editPermission === role && <span className="size-2 rounded-full bg-white" />}
                  </span>
                  <span>
                    <span className="block text-sm font-semibold text-slate-800">{role}</span>
                    <span className="block text-xs text-slate-400 mt-0.5">
                      {role === "Admin" ? "Full access to all features" : "Standard access to assigned work"}
                    </span>
                  </span>
                </button>
              ))}
            </div>
            <div className="flex justify-end gap-3 pt-1">
              <button onClick={() => setEditUser(null)} disabled={submitting}
                className="px-4 py-2 text-sm text-slate-600 border border-slate-200 rounded-lg hover:bg-slate-50 transition disabled:opacity-50">
                Cancel
              </button>
              <button onClick={handleEditSave} disabled={submitting}
                className="px-5 py-2 text-sm font-medium bg-slate-800 text-white rounded-lg hover:bg-slate-700 transition disabled:opacity-50">
                {submitting ? "Saving..." : "Confirm"}
              </button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}

function Modal({ title, onClose, children }: { title: string; onClose: () => void; children: React.ReactNode }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-md mx-4 overflow-hidden">
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100">
          <h2 className="text-base font-semibold text-slate-800">{title}</h2>
          <button onClick={onClose} className="text-slate-400 hover:text-slate-600 transition">
            <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="px-6 py-5">{children}</div>
      </div>
    </div>
  );
}